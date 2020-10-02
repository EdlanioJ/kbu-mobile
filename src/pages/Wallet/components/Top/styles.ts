import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f8f8f8;
`;

export const Left = styled.View``;

export const Right = styled.View``;

export const Title = styled.Text`
  color: #000;
  font-family: Roboto700;
  font-size: 14px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const LinkText = styled.Text`
  color: #3c8161;
  font-family: Roboto700;
  font-size: 14px;
  margin-right: 5px;
`;
