import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';
import api from '../../services/api';
import StatusCircle from '../../components/Card/StatusCircle';

const Details = ({ route }) => {
  const { character } = route.params;

  const [loading, setLoading] = useState(true);
  const [episodeData, setEpisodeData] = useState(null);

  useEffect(() => {
    const fetchEpisodeName = async () => {
      try {
        const match = character.episode[0].match(/\/(\d+)$/);
        let episodeNumber;

        if (match) {
          episodeNumber = match[1];
        }


        const response = await api.get(`/episode/${episodeNumber}`);
        setEpisodeData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro na requisição:', error.message);
        setLoading(false);
      }
    };

    fetchEpisodeName();
  }, []);

  return (
    <View style={styles.container}>

      {loading ? (
        <ActivityIndicator animating={true} color={'#ff0000'} />
      ) : (
        <View>
          <Image source={{ uri: character.image }} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title}>{character.name}</Text>

            <Text style={styles.description}>
              <Text style={styles.label}>Status: </Text> <StatusCircle status={character.status} /> {character.status}
            </Text>

            <Text style={styles.description}>
              <Text style={styles.label}>Espécie: </Text> {character.species}
            </Text>

            <Text style={styles.description}>
              <Text style={styles.label}>Tipo: </Text> {character.type}
            </Text>

            <Text style={styles.description}>
              <Text style={styles.label}>Gênero: </Text> {character.gender}
            </Text>

            <Text style={styles.label}>Última localização conhecida:</Text>
            <Text style={styles.description}>{character.origin.name}</Text>

            <Text style={styles.label}>Visto pela primeira vez: </Text>
            <Text style={styles.description}>{`${episodeData.episode} - ${episodeData.name}\nreleased in ${episodeData.air_date}`}</Text>


          </View>
        </View>
      )}



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  image: {
    width: '100%',
    height: 320,
    borderRadius: 8,
    marginBottom: 10,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    marginBottom: 8
  },
  label: {
    fontWeight: 'bold',
    fontSize: 17
  },
  inlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

});

export default Details;
