import {ReactNode, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View, FlatList} from 'react-native';
import {Button, Text, TextInput, Divider, Chip} from 'react-native-paper';
import {Recipe} from '../../models/searchResults';
import {BaseScreen} from '../../components/BaseScreen.component';
import {useStores} from '../../store/mainStore';

export const LoginScreen = ({navigation}): ReactNode => {
  const [loading, setLoading] = useState<boolean>(false);
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const [filteredRecipeList, setFilteredRecipeList] = useState<Recipe[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const hello = useStores();

  const navToTabs = (): void => {
    navigation.navigate('Tabs');
  };

  return (
    <BaseScreen>
      <Text>{'welcome'}</Text>
      <Button icon="camera" mode="contained" onPress={navToTabs}>
        To Tabs
      </Button>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({});
