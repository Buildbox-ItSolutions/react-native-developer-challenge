import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {},
  Menu: {
    backgroundColor: '#473F97',
    width: '100%',
    height: '34%',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight + 20,
  },
  menus: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
  },
  brazilview: {
    flexDirection: 'row',
  },
  principalTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:'Archivo_700Bold'
  },
  braziltitle: {
    color: '#FFF',
    fontSize: 18,
    fontFamily:'Archivo_700Bold'
  },
  message: {
    width: '90%',
    marginTop: '5%',
  },
  messageTitle: {
    color: '#FFF',
    fontSize: 18,
    fontFamily:'Poppins_600SemiBold'
  },
  paragraph: {
    marginTop: '3%',
    color: '#FFF',
    fontFamily:'Poppins_400Regular'
  },
  callbutton: {
    backgroundColor: '#FF4D58',
    width: '45%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 15,
  },
  messagebutton: {
    backgroundColor: '#4D79FF',
    width: '45%',
    height: 60,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonMenu: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,

  },
  textbutton: {
    fontSize: 17,
    color: '#FFF',
    fontFamily:'Archivo_700Bold'
  },
  mainPrincipal: {
    alignItems: 'center',
  },
  prevention: {
    width: '90%',
    marginTop: '5%',
  },
  preventinoText: {
    fontSize: 18,
    fontFamily:'Archivo_700Bold'
  },
  preventionimages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  preventionimagesText: {
    alignItems: 'center',
    marginTop: '3%',
  },
  bannerView: {
    width: '100%',
    alignItems: 'center',
    height: '100%',
    marginTop: '2%',
  },
  nextpage: {
    backgroundColor: 'red',
    marginTop: 0,
  },
  bacckgroundbutton: {
    marginTop: '5%',
    width: '100%',
  },
  backgroundRectbutton: {
    backgroundColor: '#4CD97B',
    width: 200,
    height: 60,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  admobBannerstyle: { width: '90%', marginTop: '3%' },
  backgrondImage: { width: 100, alignItems: 'center' },
  buttonMenuBackground: { marginRight: 10, color: '#FFF' },
  textStyle: {
    color: '#FFF',
  },
  modal: {
    backgroundColor: '#FFF',
  },
  TextInfo:{
    fontFamily:'Archivo_400Regular'
  }
});

export default styles;
