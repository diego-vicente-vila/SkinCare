import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MainScreen from './components/MainScreen';
import ExperienceScreen from './components/ExperienceScreen';
import CamaraScreen from './components/CamaraScreen';
import InfoScreen from './components/InfoScreen';

export default function App() {
  const MainScreenStack = createNativeStackNavigator();

  const Home = ({navigation}) => {
    return (
      <View style={styles.container}>
        {/*<Text>Open up App.js to start working on your app!</Text>*/}
        <StatusBar/>
        <MainScreen navigation={navigation}/>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <MainScreenStack.Navigator initialRouteName="Home" screenOptions={{headerShown:false,  animation: 'fade'}} >
        <MainScreenStack.Screen name="Home" component={Home} />
        <MainScreenStack.Screen name="Experience" component={ExperienceScreen} />
        <MainScreenStack.Screen name="Info" component={InfoScreen} />
        <MainScreenStack.Screen name="Camara" component={CamaraScreen} />
      </MainScreenStack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
