import React from 'react';
import { Text } from 'react-native';

import Card from '../../../../components/Card';
import data from './data';
import { Container } from './styles';

const Posts: React.FC = () => {
  return (
    <Container>
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Posts;
