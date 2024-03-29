import {ReactNode} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

type BaseScreenProps = {
  children: any;
  statusBarColour?: string;
};

//TODO: status bar colour
export const BaseScreen = ({
  children,
  statusBarColour = '#FFFFFF',
}: BaseScreenProps) => {
  return (
    <View>
      <View>
        <StatusBar
          backgroundColor={statusBarColour}
          translucent
          barStyle="dark-content"></StatusBar>
      </View>
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};
