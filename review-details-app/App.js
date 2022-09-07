import React from "react";
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer} from '@react-navigation/native';
import MyDrawer from './routes/MyDrawer';


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
      <MyDrawer />
    </NavigationContainer>
  )

}