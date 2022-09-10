import { Text, View } from 'react-native';
import React, {useEffect} from 'react';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }){

    React.useEffect(() => {
        navigation.getParent().setOptions({headerShown: false});

        return () => navigation.getParent().setOptions({headerShown:true});
    }, [navigation])

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{ route.params.title }</Text>
                <Text>{ route.params.body }</Text>
                <Text>{ route.params.rating }</Text>
            </Card>
        </View>
    )
}