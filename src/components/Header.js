import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { responsive } from '../utils';
import { COLOR } from '../constants';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLOR.blueColor,
    padding: responsive.scaleWidth(15),
    alignItems: 'center',
  },
  headerText: {
    fontSize: responsive.normalizeFont(24),
    fontWeight: 'bold',
    color: COLOR.whiteColor,
  },
});

export default Header;
