import {ReactNode, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp} from '@react-navigation/native';
import {Recipe} from '../../models/searchResults';
import {ScrollView} from 'react-native-gesture-handler';
import {DisplayListWithTitle} from './ListWithTitle.component';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar, Button, Card, Text, Appbar} from 'react-native-paper';

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
        <Appbar.Action
          icon={true ? 'heart-outline' : 'heart'}
          onPress={() => console.log('love')}
        />
      </Appbar.Header>
      <ScrollView style={styles.main}>
        {recipe?.Ingredients && recipe?.Method ? (
          <>
            <View style={styles.cardContainer}>
              <DisplayListWithTitle
                title="Ingredients"
                orderedList={false}
                listArray={recipe.Ingredients}></DisplayListWithTitle>
            </View>

            <View style={styles.cardContainer}>
              <DisplayListWithTitle
                title="Method"
                orderedList={true}
                listArray={recipe.Method}></DisplayListWithTitle>
            </View>
          </>
        ) : (
          <>
            <Icon name="home" size={20} color={'black'} />
            <Text>Recipe coming soon</Text>
          </>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  cardContainer: {
    paddingVertical: 10,
  },
});
