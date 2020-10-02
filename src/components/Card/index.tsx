/* eslint-disable no-nested-ternary */
import React from 'react';

import { Entypo, AntDesign, Feather } from '@expo/vector-icons';
import moment from 'moment';

import handleParserType from '../../utils/handleParserType';
import Avatar from '../Avatar';
import {
  Container,
  Header,
  HeaderLeft,
  HeaderDesciption,
  UserInfo,
  UserName,
  TypeInfo,
  Data,
  MenuButton,
  IconContainer,
  Body,
  Footer,
  FooterLeft,
  IconButton,
  IconText,
  Button,
  ButtonText,
} from './styles';

export interface Item {
  id: string;
  avatar: string;
  from: string;
  to: string;
  type:
    | 'STORE_PAYMENT'
    | 'USER_PAYMENT'
    | 'SIGN_PAYMENT'
    | 'CREDIT_PAYMENT'
    | string;
  data: number | Date;
  like_count: number;
  like?: boolean;
  message_count: number;
  description?: string;
}

interface CardItem {
  item: Item;
}

const Card: React.FC<CardItem> = ({ item }) => {
  return (
    <Container style={{ elevation: 4 }}>
      <Header>
        <HeaderLeft>
          <Avatar uri={item.avatar} />
          <HeaderDesciption>
            <UserInfo>
              <UserName>{item.from}</UserName>
              <TypeInfo>{handleParserType(item.type)}</TypeInfo>
              <UserName>{item.to}</UserName>
            </UserInfo>
            <Data>{moment(item.data).fromNow()}</Data>
          </HeaderDesciption>
        </HeaderLeft>
        <MenuButton>
          <IconContainer>
            <Entypo name="dots-three-horizontal" size={14} color="#202020" />
          </IconContainer>
        </MenuButton>
      </Header>
      {item.description && <Body>{item.description}</Body>}
      <Footer>
        <FooterLeft>
          <IconButton>
            {item.like ? (
              <AntDesign name="heart" size={18} color="#E82D56" />
            ) : (
              <AntDesign name="hearto" size={18} color="#202020" />
            )}
            {item.like_count === 0 ? null : (
              <IconText like={item.like}>{item.like_count}</IconText>
            )}
          </IconButton>
          <IconButton>
            <Feather name="message-square" size={18} color="#202020" />
            {item.message_count === 0 ? null : (
              <IconText>{item.message_count}</IconText>
            )}
          </IconButton>
        </FooterLeft>
        {item.type === 'USER_PAYMENT' ? null : (
          <Button>
            <ButtonText>
              {item.type === 'STORE_PAYMENT'
                ? 'Veja loja'
                : item.type === 'SIGN_PAYMENT'
                ? 'Assinar'
                : 'Carredar'}
            </ButtonText>
          </Button>
        )}
      </Footer>
    </Container>
  );
};

export default Card;
