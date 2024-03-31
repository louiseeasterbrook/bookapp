import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

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
    <View style={styles.screen}>
      <View>
        <StatusBar
          backgroundColor={statusBarColour}
          translucent
          barStyle="dark-content"></StatusBar>
      </View>
      <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
