/* eslint-disable no-undef */
import { StyleSheet } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import styled, { css } from 'styled-components/native';

interface ButtonProps {
  border?: boolean;
  color?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  padding: 10px 20px;

  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })<
  ButtonProps
>`
  height: 40px;
  width: 40px;

  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View<ButtonProps>`
  height: 40px;
  width: 40px;
  ${(props) =>
    props.color &&
    css`
      background-color: rgba(60, 129, 97, 0.3);
    `};

  ${(props) =>
    props.border &&
    css`
      border: ${StyleSheet.hairlineWidth}px solid #bbb;
    `};

  border-radius: 10px;
  overflow: hidden;
`;
