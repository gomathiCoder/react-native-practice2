import { Text, View, StyleSheet} from 'react-native';
import React from 'react';

export default function Home(){
    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 24
    }
})