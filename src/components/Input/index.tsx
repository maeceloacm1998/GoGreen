import React from 'react';
import {TextInputProps} from 'react-native';
import {TextInputCustom} from './styled';

export interface InputTypes extends TextInputProps {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

const Input = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  ...rest
}: InputTypes) => {
  return (
    <TextInputCustom
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      {...rest}
    />
  );
};

export default Input;
