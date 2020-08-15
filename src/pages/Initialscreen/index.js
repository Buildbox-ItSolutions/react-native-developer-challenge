import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';
import { RectButton } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import sendMessage from '../../utils/sendMessage'
import callLinking from '../../utils/callLinking'


const Initialscreen = ({ navigation }) => {
  const BanneriD = 'ca-app-pub-6436559932737078/3036484111';

  function NavigationtoDados() {
    navigation.navigate('Dados');
  }


  function OpenDrawer() {
    navigation.openDrawer();
  }

  function ALert() {
    Alert.alert(
      'Atualizações',
      'as informações das nova atualização aparecera aqui',
      [{ text: 'Sair', onPress: () => console.log('OK Pressed') }],
      { cancelable: false },
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Menu}>
        <View style={styles.menus}>
          <TouchableOpacity onPress={OpenDrawer}>
            <Feather name="menu" size={32} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={ALert}>
            <Feather name="bell" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.label}>
          <Text style={styles.principalTitle}>Covid-19</Text>
          <View style={styles.brazilview}>
            <Feather
              name="map-pin"
              size={24}
              style={styles.buttonMenuBackground}
            />
            <Text style={styles.braziltitle}>Brasil</Text>
          </View>
        </View>
        <View style={styles.message}>
          <Text style={styles.messageTitle}>Você está se sentindo doente?</Text>
          <Text style={styles.paragraph}>
            Se você se sentir doente com algum dos sintomas da covid-19, ligue
            ou envie um SMS imediatamente para obter ajuda.
          </Text>
        </View>
        <View style={styles.buttonMenu}>
          <RectButton onPress={sendMessage} style={styles.callbutton}>
            <Feather
              name="message-circle"
              style={styles.buttonMenuBackground}
              size={20}
            />
            <Text style={styles.textbutton}>Enviar SMS</Text>
          </RectButton>
          <RectButton onPress={callLinking} style={styles.messagebutton}>
            <Feather
              name="phone"
              style={styles.buttonMenuBackground}
              size={20}
            />
            <Text style={styles.textbutton}>Ligar agora</Text>
          </RectButton>
        </View>
        <View style={styles.centerButton}>
          <View style={styles.bacckgroundbutton}>
            <RectButton
              onPress={NavigationtoDados}
              style={styles.backgroundRectbutton}
            >
              <Feather
                name="trending-up"
                style={{ marginRight: 10, color: '#FFF' }}
                size={20}
              />
              <Text style={styles.textbutton}>Estatísticas</Text>
            </RectButton>
          </View>
        </View>
      </View>
      <View style={styles.mainPrincipal}>
        <View style={styles.prevention}>
          <Text style={styles.preventinoText}>Prevenções</Text>
          <View style={styles.preventionimages}>
            <View style={styles.backgrondImage}>
              <Image source={require('../../assets/distancia.png')} />
              <Text style={styles.preventionimagesText}>Evite fazer </Text>
              <Text style={styles.preventionimagesText}>contato</Text>
            </View>
            <View style={styles.backgrondImage}>
              <Image source={require('../../assets/mao.png')} />
              <Text style={styles.TextInfo} >lave </Text>
              <Text style={styles.TextInfo}  >as mãos</Text>
            </View>
            <View style={styles.backgrondImage}>
              <Image source={require('../../assets/mascara.png')} />
              <Text style={styles.TextInfo} >use </Text>
              <Text style={styles.TextInfo}  >máscara</Text>
            </View>
          </View>
        </View>
        <View style={styles.bannerView}>
          <Image source={require('../../assets/banner.png')} />
          <View>
            <AdMobBanner
              style={styles.admobBannerstyle}
              bannerSize="fullBanner"
              adUnitID={BanneriD} // Test ID, Replace with your-admob-unit-id
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Initialscreen;
