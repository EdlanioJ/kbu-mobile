/* eslint-disable no-undef */
import {
  RectButton,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import styled from 'styled-components/native';

interface TextProps {
  like?: boolean;
}

export const Container = styled.View`
  background-color: #fff;
  border-radius: 25px;
  padding: 20px;
  margin-bottom: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const HeaderLeft = styled.View`
  align-items: center;
  flex-direction: row;
  margin-right: 10px;
`;
export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  background-color: #333;
  border-radius: 25px;
`;
export const HeaderDesciption = styled.View`
  margin-left: 10px;
`;
export const UserInfo = styled.Text`
  max-width: 200px;
  line-height: 24px;
  font-size: 16px;
`;
export const UserName = styled.Text`
  font-family: Roboto700;
  color: #202020;
`;
export const TypeInfo = styled.Text`
  font-family: Roboto400;
  color: #202020;
`;
export const Data = styled.Text`
  font-family: Roboto700;
  font-size: 12px;
  color: #acaeb3;
`;

export const MenuButton = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  overflow: hidden;
`;
export const IconContainer = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.Text`
  padding: 5px 0;
  font-family: Roboto500;
  line-height: 32px;
  font-size: 24px;
  color: #202020;
`;
export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding-top: 10px;
`;
export const FooterLeft = styled.View`
  flex-direction: row;
`;
export const IconButton = styled(TouchableWithoutFeedback)`
  flex-direction: row;
  margin-right: 10px;
  padding: 0 6px;
  height: 36px;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;
export const IconText = styled.Text<TextProps>`
  font-family: Roboto700;
  font-size: 14px;
  color: ${(props) => (props.like ? '#E82D56' : '#202020')};
  margin-left: 5px;
`;
export const Button = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  height: 36px;
  padding: 0 14px;
  border-radius: 16px;

  background-color: rgba(60, 129, 97, 0.3);
  justify-content: center;
`;
export const ButtonText = styled.Text`
  font-family: Roboto900;
  font-size: 12px;
  color: #3c8161;
`;
