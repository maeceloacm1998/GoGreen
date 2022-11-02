import React from 'react';
import {Text, View, TextInputProps} from 'react-native';
import {TextInputCustom} from './styled';

export interface InputTypes extends TextInputProps {}

const Input = ({...rest}: InputTypes) => {
  return (
    <View>
      <Text>Input</Text>
      <TextInputCustom {...rest} />
    </View>
  );
};

export default Input;
