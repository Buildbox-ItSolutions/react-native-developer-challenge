import React from 'react';
import { View, Image, Text } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';
import IconClose from '../IconClose';

const DetailsModal = ({ visible, bio, name, location, avatar, blog, email, company, repo, following, followers, toggleModal }) => (
    <View style={{flex: 1}}>
            <Modal isVisible={visible}> 
                <View style={styles.modal}>
                    <View style={styles.iconView}>
                        <IconClose close={() => toggleModal()}/>
                    </View>
                    <View style={styles.higherView}>
                        <View style={styles.nameView}>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.bio}>{location}</Text>
                        </View>
                        <View style={styles.avatarView}>
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