import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ChevronLeft } from 'lucide-react-native';
import { RootStackRoutes } from '../routes/navigation-types';
import { useUser } from '../contexts/User';

type HeaderProps = {
    canBack?: boolean
    showImageProfile?: boolean
}


const Header = ({ canBack, showImageProfile = true }: HeaderProps) => {
    const route = useNavigation<StackNavigationProp<RootStackRoutes>>()
    const { getUser } = useUser()

    const verifyImageProfile = () => {
        const user = getUser()
        if (user.image) return user.image

        return 'https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg'
    }

    useEffect(() => {
        StatusBar.setBackgroundColor('#b91c1c');
        StatusBar.setBarStyle('light-content');
    }, [])

    return (
        <View className='flex-row h-16 justify-between items-center p-4 bg-red-700 z-20'>
            <TouchableOpacity
                className='flex-row items-center justify-center space-x-5'
                onPress={route.goBack}
                disabled={!canBack}
                activeOpacity={0.9}
            >
                {canBack && (<ChevronLeft size={32} color='#ffffff' />)}
                <Text className='text-white font-bold text-xl'>Filmex</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ display: showImageProfile ? 'flex' : 'none' }}
                onPress={() => route.navigate('Profile')}
            >
                <Image
                    source={{ uri: verifyImageProfile() }}
                    className='w-10 h-10 rounded-full'
                />
            </TouchableOpacity>
        </View>
    );
};

export default Header;
