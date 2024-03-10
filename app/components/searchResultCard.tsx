import {ReactNode} from 'react';
import {
  Avatar,
  Button,
  Card,
  Text,
  TextInput,
  Divider,
} from 'react-native-paper';
import {SearchResult} from '../models/searchResults';

type SearchResultCardProps = {
  searchResult: SearchResult;
};

export const SearchResultCard = ({
  searchResult,
}: SearchResultCardProps): ReactNode => {
  return (
    <Card>
      <Card.Content>
        <Text variant="titleLarge">{searchResult.title}</Text>
        <Text variant="bodyMedium">{searchResult.author_name}</Text>
      </Card.Content>
    </Card>
  );
};
