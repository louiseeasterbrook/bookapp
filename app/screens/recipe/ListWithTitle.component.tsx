import {ReactNode, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Appbar, Text} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';
import {ListWithTitle, Recipe} from '../../models/searchResults';
import {FlatList} from 'react-native-gesture-handler';
import {ListSection} from './ListSection.component';

type DisplayListWithTitleProps = {
  title: string;
  orderedList: boolean;
  listArray: ListWithTitle[];
};

export const DisplayListWithTitle = ({
  title,
  orderedList,
  listArray,
}: DisplayListWithTitleProps): ReactNode => {
  return (
    <>
      <Text>{title}</Text>
      {listArray.map(list => (
        <ListSection
          listTitleArray={list}
          orderedList={orderedList}></ListSection>
      ))}
    </>
  );
};
