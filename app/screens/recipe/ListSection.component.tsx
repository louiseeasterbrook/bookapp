import {ReactNode, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Appbar, Text} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';
import {ListWithTitle, Recipe} from '../../models/searchResults';
import {FlatList} from 'react-native-gesture-handler';
import {ListRow} from './ListRow.component';
import {StyleSheet} from 'react-native';

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
      {listTitleArray?.Title && (
        <Text style={styles.title}>{listTitleArray.Title}</Text>
      )}
      {listTitleArray?.List?.length &&
        listTitleArray.List.map((text: string, index: number) => (
          <ListRow
            key={index}
            text={text}
            orderedList={orderedList}
            index={index}></ListRow>
        ))}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    paddingVertical: 8,
  },
});
