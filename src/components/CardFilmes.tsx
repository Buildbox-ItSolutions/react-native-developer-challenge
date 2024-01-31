import React, { useState } from 'react';
import { Animated, Text, View, Easing, TouchableOpacity } from 'react-native';

type CardFilmesProps = {
    image: string,
    title: string,
    rating: number,
    onPress: () => void,
}

const CardFilmes: React.FC<CardFilmesProps> = ({ title, image, rating, onPress }) => {
    const [opacity] = useState(new Animated.Value(0))

    const onLoad = (event: any) => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 800,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    }

    return (
        <TouchableOpacity
            className='flex flex-1 h-80 mx-2 py-2'
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View className='flex-1 rounded-t-md overflow-hidden'>
                <Animated.Image
                    src={'https://image.tmdb.org/t/p/original/' + image}
                    onLoad={onLoad}
                    style={
                        { opacity: opacity }
                    }
                    className='flex-1'
                />
            </View>
            <View className='flex justify-center bg-red-600 w-full h-14 py-1 rounded-b-md px-2'>
                <Text className='text-white font-bold text-base' adjustsFontSizeToFit>{title}</Text>
            </View>
            <View className='bg-yellow-500 border-yellow-100 border-[1px] rounded-full p-1 flex justify-center items-center absolute -top-0 -right-2'>
                <Text className='font-bold text-white text-xs text-justify'>{((rating / 10) * 100).toFixed(0)}%</Text>
            </View>
        </TouchableOpacity>
    );
}

export default CardFilmes;