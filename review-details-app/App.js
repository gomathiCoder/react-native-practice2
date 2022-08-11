import React, {useState} from "react";
import Home from './screens/Home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const getFonts = () => Font.loadAsync({
    'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
  });

  if(fontsLoaded){
    return (
      <Home />
    );
  }
  else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
}