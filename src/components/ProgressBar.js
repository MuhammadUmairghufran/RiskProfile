import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { responsive } from '../utils';
import { COLOR } from '../constants';

const ProgressBar = ({ current, total }) => {
  return (
    <View style={styles.progressBar}>
      <Text style={styles.progressText}>{`Question ${current} of ${total}`}</Text>
      <View style={styles.progressBarInner}>
        <View style={[styles.progressBarProgress, { width: `${(current / total) * 100}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    backgroundColor: COLOR.LightGrey,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  progressText: {
    fontSize: responsive.normalizeFont(16),
    fontWeight: 'bold',
    marginBottom: responsive.scaleHeight(5),
  },
  progressBarInner: {
    backgroundColor: COLOR.blueColor,
    height: responsive.scaleWidth(10),
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarProgress: {
    backgroundColor: COLOR.lightBlueColor,
    height: '100%',
  },
});

export default ProgressBar;
