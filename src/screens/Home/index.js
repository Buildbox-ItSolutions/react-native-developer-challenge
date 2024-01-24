import React, { useState, useEffect } from 'react';
import { View, RefreshControl, FlatList, ActivityIndicator } from 'react-native';
import Card from '../../components/Card';
import api from '../../services/api';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [characterData, setCharacterData] = useState(null);

  const onRefresh = async () => {
    setRefreshing(true);

    try {
      const response = await api.get('/character');
      setCharacterData(response.data.results);
    } catch (error) {
      console.error('Erro na requisição:', error.message);
    }

    setRefreshing(false);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await api.get('/character');
        setCharacterData(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Erro na requisição:', error.message);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator animating={true} color={'#ff0000'} />
      ) : (
        <View style={{ margin: 12 }}>
          <FlatList
            data={characterData}
            renderItem={({ item }) => <Card character={item} />}
            keyExtractor={item => item.id}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['#ff0000']}
              />
            }
          />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
