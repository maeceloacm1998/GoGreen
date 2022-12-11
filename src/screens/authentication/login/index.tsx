/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';

import { InputForm } from '../../../components/InputForm';
import { ScreenProps } from '../../../router/models/ScreenPropsModel';

import ImagePNG from '../../../assets/images/plant_login.png';

import { useAuthentication } from '../../../context/Authentication';

import { ButtonDefault, ButtonWithBorder, Container, Image, TextButton } from './styled';
import themes from '../../../themes/themes';

const Login = ({ navigation }: ScreenProps) => {
  const registerNavigation = () => navigation.navigate('SelectionRegisterType');
  const { control, handleSubmit, formState } = useForm();
  const { login } = useAuthentication();

  function onSubmit(data: any) {
    const email = (data.email as string).toLowerCase().trim();
    const password = (data.password as string).trim();

    authenticationUser(email, password);
  }

  async function authenticationUser(email: string, password: string) {
    try {
      await login(email, password);
    } catch (e) {
      // Validar ERRO DE LOGIN
      console.log(e);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Image source={ImagePNG} />
        <InputForm
          placeholder="E-mail"
          control={control}
          formState={formState.errors.email}
          nameId="email"
          requiredRule
          marginTop={30}
          marginBottom={15}
        />

        <InputForm
          placeholder="Senha"
          control={control}
          formState={formState.errors.password}
          nameId="password"
          requiredRule
          secureTextEntry={true}
          marginBottom={20}
        />

        <ButtonDefault activeOpacity={0.7} onPress={handleSubmit(onSubmit)}>
          <TextButton color={themes.color.white}>Entrar</TextButton>
        </ButtonDefault>

        <ButtonWithBorder activeOpacity={0.7} onPress={registerNavigation}>
          <TextButton color={themes.color.primary}>Não tem conta? Registre-se</TextButton>
        </ButtonWithBorder>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Login;
