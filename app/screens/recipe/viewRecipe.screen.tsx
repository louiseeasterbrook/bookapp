import {ReactNode, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Appbar, Text} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';
import {Recipe} from '../../models/searchResults';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {DisplayListWithTitle} from './ListWithTitle.component';
import {ScreenContainer} from 'react-native-screens';
import {BaseScreen} from '../../components/BaseScreen.component';

type ViewRecipeScreenProps = {
  navigation: NavigationProp<any, any>;
  route: Recipe;
};

export const ViewRecipeScreen = ({
  navigation,
  route,
}: ViewRecipeScreenProps) => {
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
      <BaseScreen>
        <ScrollView>
          {recipe?.Ingredients && recipe?.Method ? (
            <>
              <DisplayListWithTitle
                title="Ingredients"
                orderedList={false}
                listArray={recipe.Ingredients}></DisplayListWithTitle>

              <DisplayListWithTitle
                title="Method"
                orderedList={true}
                listArray={recipe.Method}></DisplayListWithTitle>
            </>
          ) : (
            <Text>Recipe coming soon</Text>
          )}
        </ScrollView>
      </BaseScreen>
    </>
  );
};
