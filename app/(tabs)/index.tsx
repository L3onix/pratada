import * as React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { Button, Text } from 'react-native-paper';
import { AnimatedLogoButton } from '@/components/AnimatedLogoButton';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    width: '80%',
    height: '100%'
  },
  buttonLogo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

export default function HomeScreen() {
  const logoImage = require('../../assets/images/refeicao.png');

  return (
    <View style={styles.view}>
      <AnimatedLogoButton
        source={logoImage}
        style={styles.touchable}
      />
    </View>
  );
}
