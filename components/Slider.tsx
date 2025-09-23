import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default function SliderComponent(props) {
  const [sliderValue, setSliderValue] = useState(0);
  let foodWeight = props.foodWeight;

  function getFoodWeight() {
    return (sliderValue.toFixed(2) * 100) / foodWeight;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.food}>{props.foodName}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        onValueChange={(value) => setSliderValue(value)}
      />
      <Text style={styles.percent}>{getFoodWeight()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  food: {
    fontSize: 18,
    fontWeight: 'bold',
    maxWidth: '50%',
  },
  percent: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  slider: {
    flex: 1,
    width: 'auto',
    height: 40,
    marginLeft: 10
  },
});

