import {ReactNode, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Text,
  TextInput,
  Divider,
} from 'react-native-paper';

export const HomeScreen = (): ReactNode => {
  const [input, setInput] = useState<string>();

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.searchBar}
        label="Search book prompt..."
        value={input}
        mode="outlined"
        onChangeText={text => setInput(text)}
      />
      <Button
        style={styles.button}
        mode="outlined"
        onPress={() => setInput('')}>
        Search
      </Button>
      <Divider style={styles.divider} />

      <Card>
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
      </Card>
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
