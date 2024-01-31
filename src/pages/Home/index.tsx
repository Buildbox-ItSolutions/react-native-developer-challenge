import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Button } from 'react-native';

import api from '../../services/api';
import CardFilmes from '../../components/CardFilmes';
import SimpleModal from '../../components/Modal';
import Badge from '../../components/Badge';
import Header from '../../components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackRoutes } from '../../routes/navigation-types';
import { MovieProps } from '../../@types/MovieProps';
import { GenreProps } from '../../@types/GenreProps';

function Home(): React.JSX.Element {
    const route = useNavigation<StackNavigationProp<RootStackRoutes>>()
    const [filmesData, setFilmesData] = useState<MovieProps[]>([]);
    const [genreData, setGenreData] = useState<GenreProps[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const [genreSelected, setGenreSelected] = useState<GenreProps[]>([])
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };


    const getFilmesData = async (pageNumber: number) => {
        try {

            const { data: genre } = await api.get(`/genre/movie/list?language=pt-BR`);

            const { data: Movie } = await api.get(`/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=${pageNumber}`);

            setPage(pageNumber + 1);

            if (pageNumber === 1) {
                setFilmesData(Movie.results);
            } else {
                setFilmesData(prev => [...prev, ...Movie.results]);
            }

            setGenreData(genre.genres)
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        } finally {
            setIsLoading(false);
        }
    };

    function removeGenreById(idToRemove: number): void {
        setGenreSelected((prevGenres) => prevGenres.filter((genre) => genre.id !== idToRemove));
    }


    useEffect(() => {
        getFilmesData(1);
    }, []);



    return (
        <View className='flex flex-1 flex-col bg-gray-700 h-screen w-full'>
            <Header />
            <View className='px-3 my-3'>
                <Button title="Categorias" onPress={openModal} color='#ff0000' />
                <SimpleModal data={genreData} visible={modalVisible} onClose={closeModal}
                    onSelect={(items: GenreProps[]) => setGenreSelected(items)}
                />
                <View className='flex flex-row justify-start' style={{ gap: 3 }}>
                    <FlatList
                        data={genreSelected}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => (<View className='w-2' />)}
                        renderItem={({ item }) => (<Badge text={item.name} onPress={() => removeGenreById(item.id)} />)}
                    />
                </View>
            </View>
            {isLoading ? (
                <View className='flex-1 flex h-full justify-center'>
                    <ActivityIndicator color='red' className='self-center' size='large' />
                </View>
            ) : (
                <FlatList
                    data={filmesData}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.8}
                    className='px-1'
                    onEndReached={() => {
                        getFilmesData(page);
                    }}
                    renderItem={({ item }) => (
                        <CardFilmes
                            key={item.id}
                            image={item.poster_path}
                            title={item.original_title}
                            rating={item.vote_average}
                            onPress={() => route.navigate('AboutMovie', { about: item })}
                        />
                    )}
                />
            )}
        </View>

    );
}

export default Home;
