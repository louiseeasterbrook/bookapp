import {ReactNode, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View, FlatList} from 'react-native';
import {Button, Text, TextInput, Divider} from 'react-native-paper';
import {Recipe} from '../../models/searchResults';
import {SearchResultCard} from './searchResultCard';
import {BaseScreen} from '../../components/screenContainer.component';

import {firebase} from '@react-native-firebase/database';

export const HomeScreen = ({navigation}): ReactNode => {
  const [input, setInput] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<Recipe[]>([]);

  const DBURL =
    'https://recipes-18c3d-default-rtdb.asia-southeast1.firebasedatabase.app';

  const getRecipes = () => {
    setLoading(true);
    const reference = firebase.app().database(DBURL);

    reference
      .ref('recipes')
      .once('value')
      .then(Response => {
        setSearchResult(Response.val());
        setLoading(false);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const navToRecipeScreen = (selectedRecipe: Recipe) => {
    console.log('TESt ', selectedRecipe);
    navigation.navigate('ViewRecipe', {
      recipe: selectedRecipe,
    });
  };

  return (
    <BaseScreen>
      <View style={styles.main}>
        <TextInput
          style={styles.searchBar}
          label="Search book prompt..."
          value={input}
          mode="outlined"
          onChangeText={(text: string) => setInput(text)}
        />
        <Button style={styles.button} mode="outlined" onPress={() => {}}>
          Search
        </Button>
        <Divider style={styles.divider} />

        {loading ? (
          <ActivityIndicator animating={true} />
        ) : searchResult.length > 0 ? (
          <FlatList
            ItemSeparatorComponent={() => <View style={{height: 10}} />}
            data={searchResult}
            renderItem={({item}) => (
              <SearchResultCard
                searchResult={item}
                onPress={item => navToRecipeScreen(item)}
              />
            )}
          />
        ) : (
          <Text>no result</Text>
        )}
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
  divider: {
    marginBottom: 20,
  },
  searchBar: {
    marginTop: 20,
  },
});
