import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MainScreen from './components/main/MainScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<Text>Open up App.js to start working on your app!</Text>*/}
      <StatusBar/>
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
