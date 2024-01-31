import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type BadgeProps = {
    text: string,
    onPress: () => void
}

const Badge = ({ onPress, text }: BadgeProps) => {
    return (
        <View className='items-center mt-5'>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
                <View className='bg-red-200 flex-row justify-between items-center p-2 rounded'>
                    <Text className='text-red-700 font-bold'>{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Badge;
