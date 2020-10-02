import { Platform } from 'react-native';

import Constants from 'expo-constants';
import styled from 'styled-components/native';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  padding-top: ${statusBarHeight}px;
  flex: 1;

  background-color: #f8f8f8;
`;
export const Container = styled.View``;
export const Main = styled.View``;
