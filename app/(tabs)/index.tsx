import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Teste</Text>
      <Button
        mode="containerd"
        style= {{ marginTop: 16}}
      >Pressione</Button>
    </View>
  );
}
