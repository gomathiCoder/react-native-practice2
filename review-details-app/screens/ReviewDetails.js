import { Text, View, Button} from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }){
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Review Details screen</Text>
            <Button 
                title='Go to Home'
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}