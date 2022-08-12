import React from "react";
import Home from './screens/Home';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';

export default function App() {

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  });

  if(fontsLoaded){
    return (
      <Home />
    );
  }
  else {
    return (
      <AppLoading />
    )
  }
}