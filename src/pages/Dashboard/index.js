import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Linking,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';
import NewsAPI from '../../services/Newsapi';
import api from '../../services/api';
import { ListItem, Divider } from 'react-native-elements';

const Dashboard = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [StatusAPI, setStatusAPI] = useState([]);
  const [Newsapi, setNewsAPI] = useState([]);

  const options = {
    precision: 2,
    separator: '.',
    delimiter: '.',
    unit: '',
    suffixUnit: '',
  };

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/report/v1/brazil/uf/sp');

      setData(response.data);
    }
    loadData();
  }, []);

  useEffect(() => {
    async function loadAPIStatus() {
      const response = await api.get('/status/v1');

      setStatusAPI(response.data);
    }

    loadAPIStatus();
  }, []);

  useEffect(() => {
    async function loadNewsAPi() {
      const response = await NewsAPI.get('/top-headlines?country=br');

      setNewsAPI(response.data.articles);
    }
    loadNewsAPi();
  }, []);

  function goBackScreen() {
    navigation.goBack();
  }

  function ALert() {
    Alert.alert(
      'Updates',
      'new update available',
      [{ text: 'Sair', onPress: () => console.log('OK Pressed') }],
      { cancelable: false },
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.menus}>
          <TouchableOpacity onPress={goBackScreen}>
            <Feather name="arrow-left" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={ALert}>
            <Feather name="bell" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.menu1}>
          <View style={styles.tituloscreen}>
            <Text style={styles.TextMenu}>
              Estatísticas
              <Text />
            </Text>
          </View>
          <View style={styles.apiinformationbox}>
            <Text style={styles.apistatustext}>Informações:</Text>
            <Text style={styles.apistatusreturn}>{StatusAPI.status}</Text>
          </View>
          <View style={styles.viewbutton}>
            <RectButton style={styles.buttonMycountry}>
              <Feather name="map-pin" style={styles.marginRight5} />
              <Text style={styles.TextCity} >{data.state}</Text>
            </RectButton>
          </View>
        </View>
        <View style={styles.Menuprincipal}>
          <View style={styles.linebox1}>
            <View style={styles.box1}>
              <View style={styles.ViewText}>
                <Text style={styles.BoxText}>Casos</Text>
                <TextInputMask
                  type={'money'}
                  style={styles.NumberBox}
                  options={options}
                  value={data.cases}
                  includeRawValueInChangeText={true}
                />
              </View>
            </View>
            <View style={styles.box2}>
              <View style={styles.ViewText}>
                <Text style={styles.BoxText}>Mortos</Text>
                <TextInputMask
                  type={'money'}
                  style={styles.NumberBox}
                  options={options}
                  value={data.deaths}
                  includeRawValueInChangeText={true}
                />
              </View>
            </View>
          </View>
          <View style={styles.linebox2}>
            <View style={styles.box1line2}>
              <View style={styles.ViewText}>
                <Text style={styles.BoxText}>Suspeitos</Text>
                <TextInputMask
                  type={'money'}
                  style={styles.NumberBox}
                  options={options}
                  value={data.suspects}
                  includeRawValueInChangeText={true}
                />
              </View>
            </View>
            <View style={styles.box2line2}>
              <View style={styles.ViewText}>
                <Text style={styles.BoxText}>Recuperados</Text>
                <TextInputMask
                  type={'money'}
                  style={styles.NumberBox}
                  options={options}
                  value={data.refuses}
                  includeRawValueInChangeText={true}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.maingraphico}>
          <View style={styles.graphico}>
            <SafeAreaView style={styles.backgroundgraphico}>
              <View style={{ alignItems: 'center', width: '100%' }}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                  <Text
                    style={{
                      fontSize: 30,
                      marginBottom: 10,
                      fontFamily:'Archivo_700Bold'
                    }}
                  >
                    Principais notícias
                  </Text>
                </View>
              </View>
              <ScrollView style={{ marginBottom: 90 }}>
                {Newsapi.map((data, i) => (
                  <ListItem
                    key={i}
                    leftAvatar={{ source: { uri: data['urlToImage'] } }}
                    title={data['title']}
                    subtitle={data['publishedAt']}
                    onPress={() => Linking.openURL(data['url'])}
                    bottomDivider
                    chevron
                  />
                ))}
              </ScrollView>
            </SafeAreaView>
          </View>
        </View>
      </View>
    </>
  );
};

export default Dashboard;
