import React from 'react';

import { Container, Image, Underlay } from './styles';

interface AvatarProps {
  uri: string;
  pro?: boolean;
}
const Avatar: React.FC<AvatarProps> = ({ uri, pro }) => {
  return (
    <Container pro={pro} style={{ elevation: 4 }}>
      <Underlay activeOpacity={0.7}>
        <Image source={{ uri }} />
      </Underlay>
    </Container>
  );
};

export default Avatar;
