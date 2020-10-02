import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Header from '../../components/Header';
import NewPosts from './componets/NewPosts';
import Posts from './componets/Posts';
import Pubs from './componets/Pubs';
import UserTags from './componets/UserTags';
import { Wrapper, Container, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
}

const Home: React.FC = () => {
  const { data } = useMemo(() => {
    const items: Item[] = [
      { key: 'C1', render: () => <UserTags /> },
      { key: 'C2', render: () => <NewPosts /> },
      { key: 'C3', render: () => <Pubs /> },
      { key: 'C4', render: () => <Posts /> },
    ];

    return { data: items };
  }, []);
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            onRefresh={() => {}}
            contentContainerStyle={{
              paddingBottom: 120,
            }}
            refreshing={false}
          />
        </Main>
      </Container>
      <StatusBar style="dark" />
    </Wrapper>
  );
};

export default Home;
