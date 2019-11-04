import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigator/mainNavigate';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});