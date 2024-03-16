import {ReactNode} from 'react';
import {Button, SafeAreaView, StatusBar, Text, View} from 'react-native';

type BaseScreenProps = {
  children: any;
  statusBarColour?: string;
};

//TODO: status bar colour
export const BaseScreen = ({
  children,
  statusBarColour = '#00FFFF',
}: BaseScreenProps) => {
  return (
    <View>
      <View style={{backgroundColor: '#00FFFF'}}>
        <StatusBar
          backgroundColor="#00FFFF"
          translucent
          barStyle="dark-content"></StatusBar>
      </View>
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};
