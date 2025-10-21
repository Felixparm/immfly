import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenTemplate from '../components/templates/ScreenTemplate';

export default function Payment() {
  return (
    <ScreenTemplate title="Payment">
      <View style={styles.content}>
        <Text>Payment content goes here</Text>
      </View>
    </ScreenTemplate>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});