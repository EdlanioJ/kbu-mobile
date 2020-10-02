import React from 'react';

import 'moment/locale/pt-br';
import moment from 'moment';

import data from './data';
import {
  Container,
  ItemContainer,
  Left,
  Right,
  Info,
  Name,
  Detail,
  Amount,
  Avatar,
  AvatarContainer,
} from './styles';

interface TransationItemProps {
  item: {
    name: string;
    type: string;
    amout: number;
    date: Date | string | number;
    avatar: string;
    income?: boolean;
  };
}

const TransationCard: React.FC = () => {
  const TransationItem: React.FC<TransationItemProps> = ({ item }) => {
    return (
      <ItemContainer>
        <Left>
          <AvatarContainer
            style={{
              shadowColor: '#333',
              shadowOffset: {
                width: 0,
                height: 0.5,
              },
              shadowOpacity: 0.1,
              shadowRadius: 1.84,

              elevation: 5,
            }}
          >
            <Avatar source={{ uri: item.avatar }} />
          </AvatarContainer>

          <Info>
            <Name>{item.name}</Name>
            <Detail>{item.type}</Detail>
          </Info>
        </Left>
        <Right>
          <Amount income={item.income}>
            {item.income ? '+' : '-'} ${item.amout}
          </Amount>
          <Detail style={{ textTransform: 'uppercase' }}>
            {moment(item.date).format('DD MMM')}
          </Detail>
        </Right>
      </ItemContainer>
    );
  };
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
      {data.map((item) => {
        return <TransationItem key={item.id} item={item} />;
      })}
    </Container>
  );
};

export default TransationCard;
