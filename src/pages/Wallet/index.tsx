import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import CostCard from './components/CostCard';
import Top from './components/Top';
import TransationCard from './components/TransationCard';
import {
  Container,
  Header,
  HeaderContainer,
  HeaderButton,
  LeftContainer,
  Title,
  HeaderLeft,
  Money,
  MoneyContainer,
  List,
} from './styles';

const Wallet: React.FC = () => {
  const [visible, setVisible] = useState(true);
  function handleToggleVisible() {
    setVisible(!visible);
  }
  return (
    <Container>
      <Header>
        <HeaderContainer>
          <HeaderLeft>
            <Title>Dinheiro disponivel</Title>
            <LeftContainer>
              <MoneyContainer>
                <Money>$ {visible ? '1.000.000,00' : '--------'}</Money>
              </MoneyContainer>
              <HeaderButton onPress={handleToggleVisible}>
                <Feather
                  name={visible ? 'eye' : 'eye-off'}
                  size={20}
                  color="#000"
                />
              </HeaderButton>
            </LeftContainer>
          </HeaderLeft>
        </HeaderContainer>
      </Header>
      <List stickyHeaderIndices={[0, 2]} showsHorizontalScrollIndicator={false}>
        <Top title="Ultimas Transações" />
        <TransationCard />
        <Top title="Gastos do Mês de Setembro" />
        <CostCard />
      </List>

      <StatusBar style="dark" />
    </Container>
  );
};

export default Wallet;
