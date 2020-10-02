import React from 'react';
import { FlatList } from 'react-native';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Separator from '../../../../components/Separator';
import handleNumberFormat from '../../../../utils/handleNumberFormat';
import data from './data';
import { Container, Amount, Description } from './styles';

interface Item {
  id: string;
  amount: string | number;
  type: string;
}
interface CostItemProps {
  item: Item;
}

const CostCard: React.FC = () => {
  const Icon: React.FC<{ icon: string }> = ({ icon }) => {
    if (icon === 'Alimentação') {
      return <MaterialCommunityIcons name="food" size={48} color="#333" />;
    }
    if (icon === 'Recarga') {
      return <Feather name="smartphone" size={48} color="#333" />;
    }
    if (icon === 'Store') {
      return <Feather name="shopping-bag" size={48} color="#333" />;
    }
    if (icon === 'Seguro') {
      return <AntDesign name="Safety" size={48} color="#333" />;
    }
    return <Feather name="tv" size={48} color="#333" />;
  };

  const CardItem: React.FC<CostItemProps> = ({ item }) => {
    return (
      <Container
        style={{
          shadowColor: '#333',
          shadowOffset: {
            width: 0,
            height: 0.5,
          },
          shadowOpacity: 0.05,
          shadowRadius: 1.84,

          elevation: 5,
        }}
      >
        <Icon icon={item.type} />
        <Amount>{handleNumberFormat(item.amount)}</Amount>
        <Description>{item.type}</Description>
      </Container>
    );
  };
  return (
    <FlatList<Item>
      data={data}
      renderItem={({ item }) => <CardItem item={item} />}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 5,
      }}
      ItemSeparatorComponent={() => <Separator />}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CostCard;
