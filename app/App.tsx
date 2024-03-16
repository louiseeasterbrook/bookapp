/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import TabNavigator from './navigaton/Tab.navigator';
import {PaperProvider} from 'react-native-paper';
import {Environment} from './models/environment';
import StackNavigator from './navigaton/SearchResult.navigator';

function App(): React.JSX.Element {
  const environment = Environment.getInstance();

  //TODO: move to own setup function in diff file
  useEffect(() => {
    (async () => {
      await environment.setup();
    })();
  }, []);

  return (
    <PaperProvider>
      <StackNavigator></StackNavigator>
    </PaperProvider>
  );
}

export default App;
