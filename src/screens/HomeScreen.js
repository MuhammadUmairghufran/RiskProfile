import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TEXT } from '../constants/staticText';
import { QUESTIONAIRE_START_BUTTON_TEXT } from '../constants';
import { responsive } from '../utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: responsive.normalizeFont(24),
        fontWeight: 'bold',
    },
});


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{TEXT.QUESTIONAIRE_TITLE}</Text>
            <Button title={QUESTIONAIRE_START_BUTTON_TEXT} onPress={() => navigation.navigate('Question')} />
        </View>
    );
};

export default HomeScreen;
