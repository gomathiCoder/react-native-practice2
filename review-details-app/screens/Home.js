import { Text, View, Button} from 'react-native';
import React from 'react';
import { globalStyles  } from '../styles/global';

export default function Home({ navigation }){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
            <Button 
                title='Go to Review Details'
                onPress={() => navigation.navigate('ReviewDetails')}
            />
        </View>
    )
}