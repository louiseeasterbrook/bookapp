import {ReactNode, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Appbar} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';
import {Recipe} from '../models/searchResults';

type ViewRecipeScreenProps = {
  navigation: NavigationProp<any, any>;
  route: any;
};

export const ViewRecipeScreen = ({
  navigation,
  route,
}: ViewRecipeScreenProps): ReactNode => {
  const {recipe} = route.params;
  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    console.log('---- ', recipe);
  }, []);

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title={recipe.Name} />
      </Appbar.Header>
    </>
  );
};
