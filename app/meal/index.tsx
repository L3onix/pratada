import React, {useState} from 'react';
import { Button, View, StyleSheet } from 'react-native';
// import Slider from '@react-native-community/slider';
import Slider from '../../components/Slider.tsx';

export default function MealScreen() {
  const [volume, setVolume] = useState(50);
  const teste = () => {
    console.log('aaaaaaa');
  }

  return (
    <View >
      <h1 style={styles.view}>Balancear refeição</h1>
      <Slider foodName="Aveia" foodWeight="100" />
      <Button
        title="Adicionar alimento"
        onPress={teste}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    color: "#ffffff",
  },
});

