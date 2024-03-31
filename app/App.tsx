/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {PaperProvider} from 'react-native-paper';
import {Environment} from './models/environment';
import StackNavigator from './navigaton/SearchResult.navigator';
import {MainStore, RootStoreProvider} from './store/mainStore';

function App(): React.JSX.Element {
  const rootStore = MainStore.create({});
  const environment = Environment.getInstance();

  //TODO: move to own setup function in diff file
  useEffect(() => {
    (async () => {
      await environment.setup();
    })();
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
