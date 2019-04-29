import React from 'react';
import { View, Image, Text } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';
import IconClose from '../IconClose';

const DetailsModal = ({ visible, bio, name, location, avatar, blog, email, company, repo, following, followers, toggleModal }) => (
    <View style={{flex: 1}}>
            <Modal isVisible={visible}> 
                <View style={styles.modal}>
                    <View style={{flex:0.5, alignSelf: 'flex-end', paddingRight: 10, paddingTop: 10}}>
                        <IconClose close={() => toggleModal()}/>
                    </View>
                    <View style={styles.higherView}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.bio}>{location}</Text>
                        </View>
                        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                style={styles.avatar}
                                source={{uri: avatar}}
                            />
                        </View>
                    </View>
                    <View style={styles.midView}>
                        <View>
                            <Text style={styles.location}>{bio}</Text>
                        </View>
                        <View>
                            <Text style={styles.defaultText}>{blog}</Text>
                        </View>
                        <View>
                            <Text style={styles.defaultText}>{email}</Text>
                        </View>
                        <View>
                            <Text style={styles.defaultText}>{company}</Text>
                        </View>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={styles.insideView}>
                            <Text style={styles.defaultText}>Repositórios</Text>
                            <Text style={styles.defaultText}>{repo}</Text>
                        </View>
                        <View style={styles.insideView}>
                            <Text style={styles.defaultText}>Seguindo</Text>
                            <Text style={styles.defaultText}>{following}</Text>
                        </View>
                        <View style={styles.insideView}>
                            <Text style={styles.defaultText}>Seguidores</Text>
                            <Text style={styles.defaultText}>{followers}</Text>
                        </View>
                    </View>
                </View>
            </Modal>
          </View>   
)
export default DetailsModal;

/*
export default class DetailsModal extends Component {

    render () {
        return (
          <View style={{flex: 1}}>
            <Modal isVisible={this.props.visible} func={this.func}>
                <View style={styles.modal}>
                    <View style={styles.higherView}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.name}>{this.props.name}</Text>
                            <Text style={styles.bio}>{this.props.location}</Text>
                        </View>
                        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                            <Image
                                style={styles.avatar}
                                source={{uri: this.props.avatar}}
                            />
                        </View>
                    </View>
                    <View style={styles.midView}>
                        <View>
                            <Text style={styles.location}>{this.props.bio}</Text>
                        </View>
                        <View>
                            <Text style={styles.defaultText}>{this.props.blog}</Text>
                        </View>
                        <View>
                            <Text style={styles.defaultText}>{this.props.email}</Text>
                        </View>
                        <View>
                            <Text style={styles.defaultText}>{this.props.company}</Text>
                        </View>
                    </View>
                    <View style={styles.bottomView}>
                        <View style={styles.insideView}>
                            <Text style={styles.defaultText}>Repositórios</Text>
                            <Text style={styles.defaultText}>{this.props.repo}</Text>
                        </View>
                        <View style={styles.insideView}>
                            <Text style={styles.defaultText}>Seguindo</Text>
                            <Text style={styles.defaultText}>{this.props.following}</Text>
                        </View>
                        <View style={styles.insideView}>
                            <Text style={styles.defaultText}>Seguidores</Text>
                            <Text style={styles.defaultText}>{this.props.followers}</Text>
                        </View>
                    </View>
                </View>
            </Modal>
          </View>
        )
      }
}
*/