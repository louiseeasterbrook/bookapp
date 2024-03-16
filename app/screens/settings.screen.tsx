import {ReactNode} from 'react';
import {Button, Text, View} from 'react-native';
import {ScreenContainer} from 'react-native-screens';
import {BaseScreen} from '../components/screenContainer.component';

export const SettingsScreen = (): ReactNode => {
  return (
    <BaseScreen>
      <Text>Settings</Text>
      <Button title="Go to Settings" onPress={() => console.log('go')} />
    </BaseScreen>
  );
};
