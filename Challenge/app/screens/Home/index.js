import React, { PureComponent } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { allUsers, userDetails } from '../../container/userContainer/actions';
import CardView  from '../../components/CardView';
import DetailsModal from '../../components/DetailsModal';
import styles from './styles';

class Home extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            isModalVisible: false,
        };

        this.toggleModal = this.toggleModal.bind(this)
        this.buildModal = this.buildModal.bind(this)
        this._renderItem = this._renderItem.bind(this)
    }

    toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    componentDidMount(){
       this.props.allUsers();
    }

    buildModal = (login) => {
        this.props.userDetails(login);
        this.toggleModal();
    }

    _renderItem(avatar_url, login, url){

        const niceUrl = url.substring(8);

        return(
            <TouchableOpacity
                onPress={() => this.buildModal(login)}
            >
            <CardView
                avatar={avatar_url}
                login={login}
                url={niceUrl}
            />
            </TouchableOpacity>
        )
    }

    render() {
        //const { details } = this.props.details;
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.props.users}
                    keyExtractor={(item => item.id.toString())}
                    numColumns={2}
                    renderItem={({item}) =>
                    this._renderItem(item.avatar_url, item.login, item.html_url)
                    }
                />
                <DetailsModal 
                    toggleModal={this.toggleModal}
                    visible={this.state.isModalVisible}
                    name={this.props.details.name}
                    bio={this.props.details.bio}
                    avatar={this.props.details.avatar_url}
                    location={this.props.details.location}
                    blog={this.props.details.blog}
                    email={this.props.details.email}
                    company={this.props.details.company}
                    repo={this.props.details.public_repos}
                    following={this.props.details.following}
                    followers={this.props.details.followers}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return(
        {
            users: state.usersReducer.allUsers,
            details: state.usersReducer.details,
        }
    )
}


export default connect(
    mapStateToProps,
    { 
        allUsers,
        userDetails,
    }
    )(Home);