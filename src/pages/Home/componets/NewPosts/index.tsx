import React from 'react';

import Card from '../../../../components/Card';
import data from './data';
import { Container } from './styles';

const NewPosts: React.FC = () => {
  return (
    <Container>
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default NewPosts;
