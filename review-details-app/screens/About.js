import { Text, View, StyleSheet} from 'react-native';
import React from 'react';

export default function About(){
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>About screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 24
    },
    titleText:{
        fontSize: 18,
        fontFamily: 'nunito-bold'
    }
})