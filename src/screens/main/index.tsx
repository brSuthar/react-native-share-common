import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';

function Main(props: any) {
  const { navigation } = props;

  const onNavigate = () => {
    navigation.navigate('Detail');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onNavigate} style={styles.btn}>
        <Text style={styles.title}>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Main;
