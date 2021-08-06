/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

import {createStackNavigator, createAppContainer} from 'react-navigation';
//stackNavigator automatically shows different screens and a header on the top of each screen
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },

  {
    initialRouteName: 'Search',

    defaultNavigationOptions: 
    {
      title: 'Business Search'    //default app bar title
    }
  }
);

export default createAppContainer(navigator);   //createAppContainer() launches a default react component when the app starts