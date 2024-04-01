/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {Environment} from './models/environment';
import StackNavigator from './navigaton/stack.navigator';
import {MainStore, RootStoreProvider, useStores} from './store/mainStore';
import auth from '@react-native-firebase/auth';
import {useColorScheme} from 'react-native';

import {
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme as DarkTheme,
  PaperProvider,
} from 'react-native-paper';

function App(): React.JSX.Element {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const rootStore = MainStore.create({});
  const environment = Environment.getInstance();

  //TODO: move to own setup function in diff file
  useEffect(() => {
    (async () => {
      await environment.setup();
    })();

    // hello.setDarkMode(true);
  }, []);

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    console.log('------- USE RCHANGED ', user);
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <RootStoreProvider value={rootStore}>
      <PaperProvider>
        <StackNavigator></StackNavigator>
      </PaperProvider>
    </RootStoreProvider>
  );
}

export default App;
