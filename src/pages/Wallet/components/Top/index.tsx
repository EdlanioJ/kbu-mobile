import React from 'react';

import { Feather } from '@expo/vector-icons';

import { Container, Title, Button, LinkText, Left } from './styles';

interface TopProps {
  title: string;
}
const Top: React.FC<TopProps> = ({ title }) => {
  return (
    <Container>
      <Left>
        <Title>{title}</Title>
      </Left>

      <Button activeOpacity={0.5} onPress={() => {}}>
        <LinkText>Ver Todas</LinkText>
        <Feather name="arrow-down-circle" color="#3c8161" size={14} />
      </Button>
    </Container>
  );
};

export default Top;
