import {ReactNode} from 'react';
import {Card, Text} from 'react-native-paper';
import {Recipe} from '../../models/searchResults';
import {TouchableOpacity} from 'react-native-gesture-handler';

type SearchResultCardProps = {
  searchResult: Recipe;
  onPress: (item: Recipe) => void;
};

export const SearchResultCard = ({
  searchResult,
  onPress,
}: SearchResultCardProps): ReactNode => {
  return (
    <TouchableOpacity onPress={() => onPress(searchResult)}>
      <Card>
        <Card.Content>
          <Text>{searchResult.Name}</Text>
          <Text variant="bodyMedium">{searchResult.Category}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};
