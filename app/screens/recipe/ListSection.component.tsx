import {ReactNode, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Appbar, Text} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';
import {ListWithTitle, Recipe} from '../../models/searchResults';
import {FlatList} from 'react-native-gesture-handler';
import {ListRow} from './LisrRow.component';
import {List, MD3Colors} from 'react-native-paper';

type ListSectionProps = {
  listTitleArray: ListWithTitle;
  orderedList: boolean;
};

export const ListSection = ({
  listTitleArray,
  orderedList,
}: ListSectionProps): ReactNode => {
  return (
    <>
      <List.Section>
        {listTitleArray?.Title && (
          <List.Subheader>{listTitleArray.Title}</List.Subheader>
        )}
        {listTitleArray?.List?.length &&
          listTitleArray.List.map((text: string, index: number) => (
            <List.Item title={text} left={() => <List.Icon icon="folder" />} />
          ))}
      </List.Section>
    </>
  );
};
