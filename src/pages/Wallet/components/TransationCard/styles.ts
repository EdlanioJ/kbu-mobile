import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 276px;
  background-color: #fff;
  border-radius: 10px;
  padding-top: 10px;
  margin: 0 20px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;
export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Right = styled.View`
  align-items: flex-end;
  justify-content: center;
`;
export const Info = styled.View`
  margin-left: 10px;
`;
export const Name = styled.Text`
  line-height: 28px;
  font-size: 16px;
  font-family: Roboto700;
  color: #000;
`;
export const Detail = styled.Text`
  font-family: Roboto400;
  font-size: 14px;
  color: #999;
`;

export const Amount = styled.Text<{ income?: boolean }>`
  line-height: 28px;
  font-size: 16px;
  font-family: Roboto700;
  color: ${(props) => (props.income ? 'green' : 'red')};
`;

export const AvatarContainer = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: #fff;
  border: 2px solid #fff;
  justify-content: center;
  align-items: center;
`;
export const Avatar = styled.Image`
  width: 52px;
  height: 52px;
  border-radius: 10px;
`;
