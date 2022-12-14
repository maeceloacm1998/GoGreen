import React from 'react';
import { TextInputProps } from 'react-native';

import { Controller, Control, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

import { Container, ErrorContainer, ErrorText, TextInputCustom } from './styled';

interface Props extends TextInputProps {
  nameId: string;
  placeholder: string;
  control: Control;
  formState: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  requiredRule: boolean;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

export function InputForm({
  nameId,
  placeholder,
  control,
  formState,
  requiredRule,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  ...rest
}: Props) {
  return (
    <Container
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}>
      <Controller
        control={control}
        rules={{
          required: requiredRule
        }}
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            placeholder={requiredRule ? `${placeholder} *` : placeholder}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={nameId}
      />
      {formState && (
        <ErrorContainer>
          <ErrorText>Esse campo é obrigatório</ErrorText>
        </ErrorContainer>
      )}
    </Container>
  );
}
