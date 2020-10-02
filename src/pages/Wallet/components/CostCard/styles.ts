import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 120px;
  height: 130px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Amount = styled.Text`
  font-family: Roboto700;
  margin-top: 5px;
  line-height: 24px;
  font-size: 16px;
  color: #000;
`;

export const Description = styled.Text`
  text-transform: uppercase;
  font-family: Roboto400;
  font-size: 14px;
  color: #999;
`;
