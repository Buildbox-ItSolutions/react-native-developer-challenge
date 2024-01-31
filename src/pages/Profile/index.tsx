import React, { useEffect, useState } from 'react';
import { Alert, Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import * as yup from 'yup'
import { Edit } from 'lucide-react-native';
import { useForm } from 'react-hook-form';

import Header from '../../components/Header';
import Input from '../../components/Input';
import { useUser } from '../../contexts/User';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackRoutes } from '../../routes/navigation-types';

const useYupValidationResolver: any = (validationSchema: any) =>
    React.useCallback(
        async (data) => {
            try {
                const values = await validationSchema.validate(data, {
                    abortEarly: false
                });

                return {
                    values,
                    errors: {}
                };
            } catch (errors) {
                return {
                    values: {},
                    errors: errors.inner.reduce(
                        (allErrors, currentError) => ({
                            ...allErrors,
                            [currentError.path]: {
                                type: currentError.type ?? "validation",
                                message: currentError.message
                            }
                        }),
                        {}
                    )
                };
            }
        },
        [validationSchema]
    );

const fieldsValidationSchema = yup.object().shape({
    name: yup
        .string()
        .required('O nome não pode ser vazio'),
    email: yup
        .string()
        .required('O email não pode ser vazio')
        .email('Digite um email válido'),
    password: yup
        .string()
        .required('A senha não pode ser vazia')
        .min(8, 'A senha deve conter pelo menos 8 dígitos')
})


const Profile = () => {
    const route = useNavigation<StackNavigationProp<RootStackRoutes>>()
    const resolver = useYupValidationResolver(fieldsValidationSchema);
    const { register, setValue, handleSubmit, formState: { errors: errosInput } } = useForm({ resolver })
    const { setUser, getUser, userLogout } = useUser()
    const user = getUser()

    const [imageProfile, setImageProfile] = useState('')


    const onSubmit = (data: any) => {
        setUser({ name: data.name, email: data.email, image: imageProfile })
    }

    const verifyImageProfile = () => {
        if (user.image) return user.image
        if (imageProfile) return imageProfile

        return 'https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg'
    }

    useEffect(() => {
        register('name')
        register('email')
        register('password')
    }, [])


    return (
        <ScrollView className='flex-1 h-full flex-col bg-gray-700 w-full'>
            <Header canBack showImageProfile={false} />

            <View className='justify-center items-center space-y-5 px-3 py-5 bg-gray-600 w-[95%] mx-auto rounded-md mb-10 mt-5'>
                <TouchableOpacity
                    disabled={!!user.image}
                    onPress={async () => {

                        try {

                            const result = await launchImageLibrary({
                                selectionLimit: 1, mediaType: 'photo', quality: 0.4
                            })

                            setImageProfile(result.assets[0].uri)

                        } catch (e) {
                            console.log(e)
                        }


                    }}
                    activeOpacity={0.8}
                    className='rounded-full overflow-hidden'
                >
                    <Image
                        source={{ uri: verifyImageProfile() }}
                        className='w-40 h-40 rounded-full mx-auto'
                    />
                    {!user.image && (
                        <View className='w-40 bg-black opacity-60 justify-center items-center h-10 absolute bottom-0'>
                            <Edit color='white' />
                        </View>
                    )}
                </TouchableOpacity>


                {user.email ? (
                    <View className='w-full space-y-5'>
                        <Text className='font-bold text-white text-lg'>
                            Bem Vindo, {user.name}
                        </Text>
                        <Text className='font-bold text-white text-lg mb-10'>
                            E-mail: {user.email}
                        </Text>

                        <Button color='#b91c1c' title='Sair'
                            onPress={() => {
                                userLogout()
                                route.reset({
                                    index: 0,
                                    routes: [
                                        { name: 'Home' },
                                    ],
                                })
                            }}
                        />
                    </View>
                ) : (
                    <>
                        <Text className='text-lg text-white'>Convidado</Text>
                        <View className='w-full'>
                            <Input
                                label='Nome'
                                placeholder='Digite seu nome...'
                                placeholderTextColor='#ffffff'
                                autoCapitalize='words'
                                onChangeText={text => setValue('name', text)}
                                error={errosInput.name?.message}
                            />
                            <Input
                                label='E-mail'
                                placeholder='Digite seu e-mail...'
                                placeholderTextColor='#ffffff'
                                keyboardType='email-address'
                                autoCapitalize='none'
                                onChangeText={text => setValue('email', text)}
                                error={errosInput.email?.message}
                            />
                            <Input
                                label='Senha'
                                placeholder='Digite sua senha...'
                                placeholderTextColor='#ffffff'
                                autoCapitalize='none'
                                isPassword
                                onChangeText={text => setValue('password', text)}
                                error={errosInput.password?.message}
                            />
                            <Button title='Entrar' color='#b91c1c'
                                onPress={handleSubmit(onSubmit)}
                            />
                        </View>
                    </>
                )}

            </View>
        </ScrollView>
    );
};

export default Profile;
