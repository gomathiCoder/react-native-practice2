import { Text, View, StyleSheet} from 'react-native';
import React from 'react';

export default function ReviewDetails(){
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Review Details screen</Text>
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