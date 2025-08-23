import { useRef, useEffect } from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function AnimatedImageButton({ onPress, source, style }) {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const animateScale = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      })
    ]).start();
  };

  const handlePress = () => {
    animateScale();
    onPress();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Animated.Image
        source={source}
        style={[
          style,
          {transform: [{ scale: scaleValue}]}
        ]}
      />
    </TouchableOpacity>
  );
}
