import Constants from 'expo-constants';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
`;

export const Header = styled.View`
  height: ${104 + Constants.statusBarHeight}px;
  padding: 20px;
  padding-top: ${20 + Constants.statusBarHeight}px;
  background-color: #f8f8f8;
`;

export const HeaderContainer = styled.View``;
export const Title = styled.Text`
  font-family: Roboto700;
  color: #000;
  font-size: 14px;
  line-height: 36px;
  background-color: #f8f8f8;
`;
export const HeaderLeft = styled.View``;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MoneyContainer = styled.View`
  width: 220px;
`;

export const Money = styled.Text`
  font-size: 32px;
  color: #000;
  font-family: Roboto700;
  margin-right: 2px;
`;

export const HeaderButton = styled.TouchableOpacity`
  height: 36px;
  width: 36px;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ScrollView``;
