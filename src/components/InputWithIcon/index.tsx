import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInputCustom } from './styled';

export interface InputWithIconTypes extends TextInputProps {
  icon: React.ReactNode;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const InputWithIcon = ({
  icon,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  ...rest
}: InputWithIconTypes) => {
  return (
    <Container>
      {icon}
      <TextInputCustom
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        {...rest}
      />
    </Container>
  );
};

export default InputWithIcon;
