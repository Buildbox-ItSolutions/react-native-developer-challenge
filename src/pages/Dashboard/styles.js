import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#473F97',
    alignItems: 'center',
  },
  Menu: {
    backgroundColor: '#473F97',
    width: '100%',
    paddingTop: Constants.statusBarHeight + 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menus: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight + 20,
  },
  TextMenu: {
    fontSize: 20,
    color: '#FFFF',
    fontFamily:'Poppins_600SemiBold'
  },
  menu1: {
    width: '90%',
  },
  tituloscreen: {
    marginTop: '5%',
  },
  buttonMycountry: {
    backgroundColor: '#FFF',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  viewbutton: {
    width: '100%',
    alignItems: 'center',
    marginTop: '5%',
  },
  Menuprincipal: {
    width: '100%',
    alignItems: 'center',
    marginTop: '5%',
  },
  ViewText: {
    width: '90%',
    height: '90%',
    justifyContent: 'space-between',
  },
  linebox1: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box1: {
    backgroundColor: '#FFB259',
    width: '45%',
    height: 90,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    backgroundColor: '#FF5959',
    width: '45%',
    height: 90,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BoxText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily:'Poppins_600SemiBold'
  },
  NumberBox: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:'Poppins_600SemiBold'
  },
  linebox2: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  box1line2: {
    backgroundColor: '#4CD97B',
    width: '45%',
    height: 90,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  box2line2: {
    backgroundColor: '#4DB5FF',
    width: '45%',
    height: 90,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3line2: {
    backgroundColor: '#9059FF',
    width: '45%',
    height: 90,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  maingraphico: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  graphico: {
    height: '40%',
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 0,
    marginTop: '5%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundgraphico: {
    width: '95%',
    height: '90%',
  },
  admobBannerstyle: {
    width: '90%',
    position: 'absolute',
  },
  apistatustext: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily:'Poppins_600SemiBold'
  },
  apistatusreturn: {
    color: '#4CD97B',
    marginLeft: 5,
    fontWeight: 'bold',
    fontFamily:'Poppins_600SemiBold'
  },
  apiinformationbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight5: { marginRight: '5%' },
  TextCity:{
    fontFamily:'Poppins_600SemiBold'
  },
});

export default styles;
