import React from "react";
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';
import HomeStack from './routes/HomeStack';
import { NavigationContainer} from '@react-navigation/native'


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
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  )

}