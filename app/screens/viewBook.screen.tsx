import {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Appbar} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';

type viewBookScreenProps = {
  navigation: NavigationProp<any, any>;
};

export const ViewBookScreen = ({
  navigation,
}: viewBookScreenProps): ReactNode => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Title" />
      </Appbar.Header>
    </>
  );
};
