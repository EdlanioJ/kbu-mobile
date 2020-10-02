import styled from 'styled-components/native';

export const Container = styled.View``;

export const PubContainer = styled.View`
  min-width: 135px;
  height: 245px;
  border-radius: 26px;

  background-color: #fff;
`;

export const PubLink = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  flex: 1;
  border-radius: 26px;
`;
export const PubImage = styled.Image``;
