import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { addAnswer } from '../redux/store';
import { backgroundColors, questions } from '../constants';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import { TEXT } from '../constants/staticText';


const QuestionScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (optionIndex) => {
    const score = questions[currentQuestionIndex].scores[optionIndex];
    dispatch(addAnswer(score));
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('Result');
    }
  };

  const question = questions[currentQuestionIndex];
  const currentBackgroundColor = backgroundColors[currentQuestionIndex % backgroundColors.length];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentBackgroundColor,
      padding: '4%',
    },
  });

  return (
   <SafeAreaView style={{flexGrow: 1, backgroundColor: currentBackgroundColor}}>
     <View style={styles.container}>
      <Header title={TEXT.QUESTIONAIRE_TITLE} />
      <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
      <QuestionCard
        question={question.question}
        options={question.options}
        onPress={handleAnswer}
      />
    </View>
   </SafeAreaView>
  );
};

export default QuestionScreen;
