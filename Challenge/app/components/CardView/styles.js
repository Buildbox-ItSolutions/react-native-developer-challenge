import { Dimensions } from 'react-native';

export default {
    container: {
        borderRadius: 10,
        elevation: 2,
        height: Dimensions.get('window').height / 2.5,
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:{
        flexDirection: 'column',
        padding: 10
        
    },
    avatarView: {
        flex: 5,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarImg: {
        width: 150,
        height: 170,
        borderRadius: 10,
    },
    nameView: {
        flex: 0.7,
        borderRadius: 20,
        backgroundColor: '#0A7E6D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    urlView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameText: {
        padding: 5,
        color: '#FFF',
        fontWeight: 'bold'
    },
    urlText: {
        fontWeight: 'bold',
        color: '#0A7E6D'
    }
}