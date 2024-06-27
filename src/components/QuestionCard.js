import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { responsive } from '../utils';

const QuestionCard = ({ question, options, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {options.map((option, index) => (
        <Button key={index} title={option} onPress={() => onPress(index)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsive.scaleWidth(20),
  },
  question: {
    fontSize: responsive.normalizeFont(20),
    fontWeight: 'bold',
    marginBottom: responsive.scaleWidth(20),
  },
});

export default QuestionCard;
