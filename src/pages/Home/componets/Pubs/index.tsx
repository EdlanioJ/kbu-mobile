import React from 'react';
import { FlatList } from 'react-native';

import Separator from '../../../../components/Separator';
import data from './data';
import { PubContainer, PubLink, PubImage } from './styles';

interface PubItemProps {
  item: typeof data[0];
}

const Pubs: React.FC = () => {
  const PubItem: React.FC<PubItemProps> = ({ item }) => {
    return (
      <PubContainer
        style={{
          shadowColor: '#333',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 1.84,

          elevation: 5,
        }}
      >
        <PubLink>
          <PubImage resizeMode="stretch" source={item.img} />
        </PubLink>
      </PubContainer>
    );
  };

  return (
    <FlatList<typeof data[0]>
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
      horizontal
      ItemSeparatorComponent={() => <Separator />}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => <PubItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Pubs;
