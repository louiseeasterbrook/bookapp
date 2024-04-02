import {ReactNode, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View, FlatList} from 'react-native';
import {Button, Text, TextInput, Divider, Chip} from 'react-native-paper';
import {Recipe} from '../../models/searchResults';
import {BaseScreen} from '../../components/BaseScreen.component';
import {useStores} from '../../store/mainStore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

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

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '774287886591-7cepgseri2rbmo58dpm7t4lqf9ffg62c.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <BaseScreen>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What for din</Text>
      </View>
      <Button mode="contained" onPress={onGoogleButtonPress}>
        Google Sign In
      </Button>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    height: '40%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
