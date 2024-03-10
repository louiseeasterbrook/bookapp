import {ReactNode, useState} from 'react';
import {ActivityIndicator, StyleSheet, View, FlatList} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Text,
  TextInput,
  Divider,
} from 'react-native-paper';
import {searchApiService} from '../models/api-service';
import {SearchResult} from '../models/searchResults';
import {SearchResultCard} from '../components/searchResultCard';

export const HomeScreen = (): ReactNode => {
  const [input, setInput] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

  const callApi = async () => {
    if (!input) {
      return;
    }
    setLoading(true);
    const response = await searchApiService.getSearchResult(input);
    if (response?.docs?.length > 0) {
      setSearchResult(response.docs);
    }
    setLoading(false);
  };

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.searchBar}
        label="Search book prompt..."
        value={input}
        mode="outlined"
        onChangeText={(text: string) => setInput(text)}
      />
      <Button
        icon="camera"
        style={styles.button}
        mode="outlined"
        onPress={callApi}>
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
