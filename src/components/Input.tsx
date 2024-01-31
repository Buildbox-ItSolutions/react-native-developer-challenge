import { Eye, EyeOff } from 'lucide-react-native';
import React, { useState } from 'react';
import { FieldErrors } from 'react-hook-form';
import { View, TextInput, TextInputProps, Text, TouchableOpacity } from 'react-native';

interface InputProps extends TextInputProps {
    isPassword?: boolean
    label?: string;
    error?: any;
}

const Input = ({ label, isPassword = false, error, ...props }: InputProps) => {
    const [showPassword, setPassword] = useState(true)
    const [onFocus, setOnFocus] = useState(false)


    return (
        <View className='mb-4'>
            <Text className='mb-2 text-white font-bold text-base'>{label}</Text>
            <View className='flex-row items-center justify-start space-x-5'>
                <TextInput
                    className='flex-1 h-11 border-2 text-white border-gray-100 px-3 rounded-md focus:border-red-600'
                    cursorColor='#b91c1c'
                    onFocus={() => setOnFocus(true)}
                    onBlur={() => setOnFocus(false)}
                    secureTextEntry={showPassword}
                    {...props}
                />
                {isPassword && (
                    <TouchableOpacity
                        className='flex-0.5'
                        activeOpacity={0.8}
                        onPress={() => setPassword(prev => !prev)}>
                        {showPassword ?
                            <Eye color={onFocus ? '#b91c1c' : '#ffffff'} /> :
                            <EyeOff color={onFocus ? '#b91c1c' : '#ffffff'} />
                        }
                    </TouchableOpacity>
                )}
            </View>

            {(error && error != undefined) && (
                <Text className='mb-2 text-red-600 font-bold text-base'>* {error}</Text>
            )}
        </View>
    );
};

export default Input;
