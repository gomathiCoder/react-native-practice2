import { Text, View, TouchableWithoutFeedback, FlatList, TouchableOpacity, Modal, StyleSheet, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { globalStyles  } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import ReviewForm from './ReviewForm';

export default function Home({ navigation }){
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        {title: 'Zelda, Breath of Fresh Air', rating:5, body:'lorem ipsum', key:1},
        {title: 'Gotta Catch Them All (again)', rating:4, body:'lorem-ipsum', key:2},
        {title: 'Not So "Final" Fantasy', rating:3, body:'lorem-ipsum', key:3}
    ]);
    const [key, setKey] = useState(reviews.length + 1);

    const addReview = (reviews) => {
        setKey(key => key+1);
        reviews.key = key;
        setReviews((currentReview) => [reviews, ...currentReview]);
        setModalOpen(false);
    };

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            onPress={() => setModalOpen(false)}
                            style={{...styles.modalToggle, ...styles.modalClose}}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />

            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetailsScreen', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor:'white'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent:{
        flex: 1
    }
});