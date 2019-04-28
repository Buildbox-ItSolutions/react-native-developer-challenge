import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { allUsers } from '../../container/userContainer/actions';
import UserRequest from '../../requests/Users';
import CardView from '../../components/CardView';

class Home extends PureComponent {
    constructor(props){
        super(props);

    }

    componentDidMount(){
       this.props.allUsers();
    }

    _renderItem(avatar_url, login){
        return(
            <CardView
                avatar={avatar_url}
                login={login}
            />
        )
    }

    render() {
        //const { avatar_url, login } = this.props.users;
        return (
            <View>
                <FlatList 
                    data={this.props.users}
                    keyExtractor={(item => item.id.toString())}
                    numColumns={2}
                    renderItem={({item}) =>
                    this._renderItem(item.avatar_url, item.login)
                    }
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return(
        {
            users: state.usersReducer.allUsers,
        }
    )
}


export default connect(
    mapStateToProps,
    { 
        allUsers,
    }
    )(Home);