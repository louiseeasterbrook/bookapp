import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
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
  Avatar,
  Icon,
} from 'react-native-paper';
import {useStores} from '../store/mainStore';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ToggleButton = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

const logout = () => {
  console.log('logout');
};

export const SettingsScreen = (): ReactNode => {
  const userStore = useStores();

  return (
    <BaseScreen>
      <View style={styles.fullScreenContainer}>
        <View>
          <View style={styles.nameContainer}>
            <View style={styles.nameContainer}>
              <Avatar.Icon size={44} icon="account" />
              <Text style={styles.name}>{userStore.name}</Text>
            </View>
            <TouchableOpacity onPress={logout}>
              <Icon source="logout" size={20} />
            </TouchableOpacity>
          </View>
          <Divider />

          <List.Section>
            <List.Subheader>Settings</List.Subheader>
            <List.Item title="Dark mode" right={ToggleButton} />
          </List.Section>
        </View>
        <View>
          <Text style={styles.version}>Version 1.0.0</Text>
        </View>
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  name: {
    paddingLeft: 10,
  },
  fullScreenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  version: {
    textAlign: 'center',
    paddingBottom: 20,
  },
});
