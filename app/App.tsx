/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import TabNavigator from './navigaton/Tab.navigator';


function App(): React.JSX.Element {

  return (
    // <SafeAreaView style={backgroundStyle}>
      <TabNavigator></TabNavigator>
    // </SafeAreaView>
  );
}

export default App;
