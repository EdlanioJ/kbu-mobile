import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  height: 54px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding: 10px 16px;
`;

export const IconContainer = styled(RectButton)`
  height: 54px;
  width: 54px;
  justify-content: center;
  align-items: center;
`;
