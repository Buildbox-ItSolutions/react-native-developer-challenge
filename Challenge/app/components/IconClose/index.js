import React, { Component } from 'react';
import { Icon } from 'react-native-elements';

export default class IconClose extends Component {

    render(){
        return(
            <Icon
                name='times'
                type='font-awesome'
                color='#0A7E6D'
                onPress={this.props.close}
            />

        )
    }

}