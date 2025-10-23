import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import ScreenTemplate from '../components/templates/ScreenTemplate';
import TopHeader from '../components/molecules/TopHeader/TopHeader';

export default function Payment() {
  const router = useRouter();

  return (
    <ScreenTemplate title="Payment">
      <TopHeader 
        title="Receipt" 
        description="Selected products" 
        onClose={() => router.push('/')}
      />
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