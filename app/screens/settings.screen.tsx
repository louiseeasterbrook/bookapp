import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {ScreenContainer} from 'react-native-screens';
import {BaseScreen} from '../components/BaseScreen.component';
import {
  Button,
  Text,
  TextInput,
  Divider,
  Chip,
  List,
  Switch,
} from 'react-native-paper';

const ToggleButton = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export const SettingsScreen = (): ReactNode => {
  return (
    <BaseScreen>
      {/* <Text>Settings</Text> */}
      <List.Section>
        <List.Subheader>Some title</List.Subheader>
        <List.Item
          title="Dark mode"
          left={() => <List.Icon icon="folder" />}
          right={ToggleButton}
        />
      </List.Section>
    </BaseScreen>
  );
};
