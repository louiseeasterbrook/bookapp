import {ReactNode, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View, FlatList} from 'react-native';
import {Button, Text, TextInput, Divider} from 'react-native-paper';
import {searchApiService} from '../../models/api-service';
import {SearchResult} from '../../models/searchResults';
import {SearchResultCard} from './searchResultCard';
import {BaseScreen} from '../../components/screenContainer.component';

import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/database';

export const HomeScreen = ({navigation}): ReactNode => {
  const [input, setInput] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState([]);

  const DBURL =
    'https://recipes-18c3d-default-rtdb.asia-southeast1.firebasedatabase.app';

  const navigateToBookScreen = () => {
    navigation.navigate('ViewBook');
  };

  const getRecipes = () => {
    const reference = firebase.app().database(DBURL);

    reference
      .ref('recipes')
      .once('value')
      .then(snapshot => {
        console.log('RECIPES: ', setSearchResult(snapshot.val()));
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
    searchResult.forEach(x => console.log(x.Name));
  }, [searchResult]);

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
            renderItem={({item}) => <SearchResultCard searchResult={item} />}
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
