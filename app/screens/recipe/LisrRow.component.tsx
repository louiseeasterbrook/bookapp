import {ReactNode} from 'react';
import {Text} from 'react-native-paper';

type ListRowProps = {
  orderedList: boolean;
  index: number;
  text: string;
};

export const ListRow = ({
  text,
  orderedList,
  index,
}: ListRowProps): ReactNode => {
  return (
    <>
      {orderedList ? <Text>{index}</Text> : <Text>-</Text>}
      <Text>{text}</Text>
    </>
  );
};
