import React from 'react';

import { AntDesign } from '@expo/vector-icons';

import { Container, Button, ButtonContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container style={{ elevation: 4 }}>
      <ButtonContainer color>
        <Button>
          <AntDesign name="qrcode" size={26} color="#3C8161" />
        </Button>
      </ButtonContainer>

      <ButtonContainer border>
        <Button>
          <AntDesign name="search1" size={26} color="#3C8161" />
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
