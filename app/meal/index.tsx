import React, {useState} from 'react';
import { Button, View, ScrollView, StyleSheet } from 'react-native';
// import Slider from '@react-native-community/slider';
import Slider from '../../components/Slider.tsx';

export default function MealScreen() {
  const [foods, setFoods] = useState([]);

  const addFood = () => {
    setFoods([...foods, {name: "Aveia", weight: 100}])
  }

  return (
    <View >
      <h1 style={styles.view}>Balancear refeição</h1>
      <ScrollView>
        {foods.map((food) => (
          <Slider foodName={food.name} foodWeight={food.weight} />
        ))}
      </ScrollView>
      <Button
        title="Adicionar alimento"
        onPress={addFood}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    color: "#ffffff",
  },
});

