import React from 'react';
import { FlatList } from 'react-native';

import Avatar from '../../../../components/Avatar';
import Separator from '../../../../components/Separator';
import data from './data';
import { Container, UserName } from './styles';

interface Item {
  id: string;
  username: string;
  image: string;
}
interface UserItemProps {
  item: Item;
}

const UserTags: React.FC = () => {
  const UserTag: React.FC<UserItemProps> = ({ item }) => {
    return (
      <Container>
        <Avatar uri={item.image} />
        <UserName numberOfLines={1}>@{item.username}</UserName>
      </Container>
    );
  };

  return (
    <FlatList<Item>
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 5,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <Separator />}
      data={data}
      renderItem={({ item }) => <UserTag item={item} />}
      keyExtractor={(item) => item.id}
      onRefresh={() => {}}
      refreshing={false}
    />
  );
};

export default UserTags;
