import React from "react";
import { useEffect, useState } from "react";
import Home from './screens/Home';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';
import Navigator from './routes/HomeStack';

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold
  })

  if(fontsLoaded){
      SplashScreen.hideAsync()
  }
  if(!fontsLoaded) {
    return null
  }
  return (
    <Navigator />
  )

}