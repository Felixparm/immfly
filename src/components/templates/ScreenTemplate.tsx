import React from 'react';
import { View, Text } from 'react-native';
import { ScreenTemplateProps } from './ScreenTemplate.types';
import { styles } from './ScreenTemplate.styles';

export default function ScreenTemplate({ title, children }: ScreenTemplateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}