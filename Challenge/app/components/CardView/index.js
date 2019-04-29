import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

export default class CardView extends Component {

    render(){
        return(
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.avatarView}>
                    <Image 
                        source={{ uri: this.props.avatar }} 
                        style={styles.avatarImg}/>
                </View>
                <View style={styles.nameView}>
                    <Text style={styles.nameText}>{this.props.login}</Text>
                </View>
                <View style={styles.urlView}>
                    <Text style={styles.urlText}>{this.props.url}</Text>
                </View>
            </View>
        </View>
        )
    }

}