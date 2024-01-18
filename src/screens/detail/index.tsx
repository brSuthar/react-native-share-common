import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Text } from 'react-native';

function Detail() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>
    </View>
  );
}

export default Detail;
