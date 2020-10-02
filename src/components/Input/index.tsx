import React, { useState, useEffect } from 'react';
import { TextInputProps } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { Container, TextInput, IconContainer } from './styles';

interface Props {
  password?: boolean;
}

type InputProps = Props & TextInputProps;

const Input: React.FC<InputProps> = ({ password, ...rest }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (password) setVisible(true);
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }
  return (
    <Container>
      <TextInput secureTextEntry={visible} {...rest} />
      {password && (
        <IconContainer onPress={handleToggleVisible}>
          {visible ? (
            <Feather name="eye-off" size={14} color="#333" />
          ) : (
            <Feather name="eye" size={14} color="#333" />
          )}
        </IconContainer>
      )}
    </Container>
  );
};

export default Input;
