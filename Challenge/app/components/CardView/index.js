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
                        source={{ uri: 'https://avatars0.githubusercontent.com/u/3887127?v=4' }} 
                        style={styles.avatarImg}/>
                </View>
                <View style={styles.nameView}>
                    <Text style={styles.nameText}>Ricardo Araujo</Text>
                </View>
                <View style={styles.locationView}>
                    <Text style={styles.locationName}>Campinas, São Paulo</Text>
                </View>
            </View>
        </View>
        )
    }

}