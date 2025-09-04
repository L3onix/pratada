import * as React from 'react';
import {
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    borderRadius: screenWidth * 0.4,
  },
  buttonLogo: {
    resizeMode: 'contain',
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
  }
});

export default function HomeScreen() {
  const logoImage = require('../../assets/images/refeicao.png');

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.touchable}>
        <Image style={styles.buttonLogo} source={logoImage} />
      </TouchableOpacity>
    </View>
  );
}
