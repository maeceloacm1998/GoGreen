import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

import Input from '../../../components/Input';
import {ScreenProps} from '../../../router/models/ScreenPropsModel';

import ImagePNG from '../../../assets/images/plant_login.png';

import {
  ButtonDefault,
  ButtonWithBorder,
  Container,
  Image,
  TextButton,
} from './styled';
import themes from '../../../themes/themes';
import {useAuthentication} from '../../../context/Authentication';

const Login = ({navigation}: ScreenProps) => {
  const registerNavigation = () => navigation.navigate('SelectionRegisterType');

  const {authenticationUser} = useAuthentication();

  async function login() {
    authenticationUser('Dale', '123123');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Image source={ImagePNG} />
        <Input placeholder="E-mail" marginTop={20} marginBottom={20} />
        <Input placeholder="Senha" marginBottom={20} />
        <ButtonDefault activeOpacity={0.7} onPress={login}>
          <TextButton color={themes.color.white}>Entrar</TextButton>
        </ButtonDefault>

        <ButtonWithBorder activeOpacity={0.7} onPress={registerNavigation}>
          <TextButton color={themes.color.primary}>
            Não tem conta? Registre-se
          </TextButton>
        </ButtonWithBorder>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Login;
