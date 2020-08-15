import React from "react";
import "react-native-gesture-handler";
import Routes from "./src/routes";
import { AppLoading } from 'expo';
import 
{ 
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts 
} 
  from '@expo-google-fonts/poppins'
import {
  Archivo_400Regular,
  Archivo_700Bold 
  } from '@expo-google-fonts/archivo'


export default function App() {
  let [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold, 
    Archivo_400Regular,
    Archivo_700Bold,
  })
  if(!fonstLoaded) {
    return <AppLoading/>;
  } else  {
    return <Routes />;
  }
}
