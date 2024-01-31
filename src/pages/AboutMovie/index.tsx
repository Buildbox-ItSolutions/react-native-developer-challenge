import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Header from '../../components/Header';
import { RouteProp, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { GenreProps } from '../../@types/GenreProps';
import { Star } from 'lucide-react-native';
import moment from 'moment';
import { MovieProps } from '../../@types/MovieProps';

type RouteProps = {
    about: MovieProps
}


function AboutMovie(): React.JSX.Element {
    const { params } = useRoute()
    const { about } = params as RouteProps
    const [genreData, setGenreData] = useState<GenreProps[]>([]);


    function getNamesById(secondArray: number[]): string {
        const correspondingNames = secondArray.map((id) => {
            const correspondingElement = genreData.find((item) => item.id === id);
            return correspondingElement ? correspondingElement.name : ''; // If not found, return an empty string
        });

        return correspondingNames.join(', ');
    }

    const getGenreData = async () => {


        const { data: genre } = await api.get(`/genre/movie/list?language=pt-BR`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDM4MTdmYjlhZjIyYjU5MTEyZmZhZDk1OGE1MTUzMyIsInN1YiI6IjYwMDRmNDhmMTFjMDY2MDA0MjNlMzdiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BLoHyuoXjpjc5vY-ENEykdpO5Ztyq7Cup3KQkGkS6is'
            }
        });



        setGenreData(genre.genres)

    };

    useEffect(() => {
        getGenreData()
    }, [])

    if (genreData.length === 0) return <></>

    return (
        <View className='flex-1 h-full flex-col bg-gray-700 w-full'>
            <Header canBack />
            <ScrollView className='flex-1 h-full pt-5' showsVerticalScrollIndicator={false}>
                <View className='px-3 bg-gray-600 w-[95%] mx-auto rounded-md mb-10'>
                    <Image
                        source={{ uri: 'https://image.tmdb.org/t/p/original' + about.backdrop_path }}
                        className='h-56 w-full mx-auto rounded-lg mt-3'
                    />

                    <Image
                        src={'https://image.tmdb.org/t/p/original/' + about.poster_path}
                        className='flex-1 h-52 w-32 rounded-md overflow-hidden -top-10 left-1'
                    />


                    <View className='absolute w-52 top-56 left-36 space-y-2 mt-2 p-2'>
                        <Text className='text-white font-bold'>{about.title}</Text>
                        <Text className='text-white font-bold capitalize'>{moment(about.release_date).format('dddd d, YYYY')}</Text>

                        <Text className='text-white'>{getNamesById(about.genre_ids)}</Text>
                        <View className='flex-row items-center space-x-3'>
                            <Star color='#fefe02' />
                            <Text className='text-white text-xl font-bold'>{about.vote_average}</Text>
                        </View>
                    </View>

                    <View className='mb-3'>
                        <Text className='overflow-hidden text-ellipsis text-nowrap text-white font-bold text-xl mb-3'>
                            Visão geral
                        </Text>
                        <Text className='text-base overflow-hidden text-ellipsis text-nowrap text-white text-justify'>
                            {!about.overview ? 'Sem descrição' : about.overview}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default AboutMovie;
