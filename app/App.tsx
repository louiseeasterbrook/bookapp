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
import { PaperProvider } from 'react-native-paper';


function App(): React.JSX.Element {

  return (
    <PaperProvider
    >
      <TabNavigator></TabNavigator>
    </PaperProvider>
    // <SafeAreaView style={backgroundStyle}>

    // </SafeAreaView>
  );
}

export default App;
