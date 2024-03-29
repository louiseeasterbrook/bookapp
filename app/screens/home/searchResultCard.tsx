import {ReactNode} from 'react';
import {
  Avatar,
  Button,
  Card,
  Text,
  TextInput,
  Divider,
} from 'react-native-paper';
import {SearchResult} from '../../models/searchResults';

type SearchResultCardProps = {
  searchResult: any;
};

export const SearchResultCard = ({
  searchResult,
}: SearchResultCardProps): ReactNode => {
  return (
    <Card>
      <Card.Content>
        <Text>{searchResult.Name}</Text>
        {/* <Text variant="bodyMedium">{searchResult.author_name}</Text> */}
      </Card.Content>
    </Card>
  );
};
