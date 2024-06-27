import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetAnswers } from '../redux/store';
import { responsive } from '../utils';
import { getCategory, totalScore } from '../utils/helper';
import { COLOR, ScoresColors } from '../constants';

const ResultScreen = ({ navigation }) => {
    const answers = useSelector((state) => state.questionnaire.answers);
    const dispatch = useDispatch();
    const [score, setScore] = useState(0);
    const [category, setCategory] = useState('');

    useEffect(() => {
        setScore(totalScore(answers));
        setCategory(getCategory(totalScore(answers)));
    }, [answers]);

    const handleRestart = () => {
        dispatch(resetAnswers());
        navigation.navigate('Home');
    };



    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: ScoresColors[category],
            padding: responsive.scaleWidth(20),
        },
        result: {
            fontSize: responsive.normalizeFont(20),
            fontWeight: 'bold',
            marginBottom: responsive.scaleWidth(20),
            color: COLOR.whiteColor,
        },
        button: {
            marginTop: responsive.scaleHeight(20),
        },
        buttonText: {
            color: COLOR.whiteColor,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.result}>Your Risk Profile Score: {score}</Text>
            <Text style={styles.result}>Your Risk Profile Category: {category}</Text>
            <Button
                title="Restart Questionnaire"
                onPress={handleRestart}
                style={styles.button}
                color={COLOR.whiteColor}
            />
        </View>
    );
};

export default ResultScreen;
