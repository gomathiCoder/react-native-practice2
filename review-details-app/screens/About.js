import { Text, View, StyleSheet} from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global';

export default function About({navigation}){

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About screen</Text>
        </View>
    )
}