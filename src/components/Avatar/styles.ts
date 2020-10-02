import styled from 'styled-components/native';

interface ContainerProps {
  pro?: boolean;
}
export const Container = styled.View<ContainerProps>`
  width: 70px;
  height: 70px;
  background-color: ${(props) => (props.pro ? '#60c25b' : '#fff')};

  border-radius: 25px;

  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const Underlay = styled.TouchableOpacity`
  width: 65px;
  height: 65px;
  border-radius: 25px;
`;

export const Image = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 25px;
`;

export const Budge = styled.Text`
  position: absolute;
  padding: 2px;
  background-color: #60c25b;
  bottom: 0;
`;
