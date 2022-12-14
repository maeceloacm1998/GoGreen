import React from 'react';

import ImageUser from '../../../assets/images/user_logo.png';
import ImageEnterprise from '../../../assets/images/enterprise_logo.png';

import CardOption from './components/cardOption';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { ScreenProps } from '../../../router/models/ScreenPropsModel';
import { Container, ContainerOptions, GoBackButton, GoBackText, Subtitle, Title } from './styled';
import themes from '../../../themes/themes';

const SelectionRegisterType = ({ navigation }: ScreenProps) => {
  const ENTERPRISE_TYPE = 'Empresa';
  const CLIENT_TYPE = 'Cliente';

  function handleClickCardOption(type: string) {
    if (type === CLIENT_TYPE) {
      navigation.navigate('UserForm');
    } else {
      navigation.navigate('EnterpriseForm');
    }
  }

  return (
    <Container>
      <GoBackButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-back-ios"
          size={20}
          color={themes.color.primary}
          style={{ marginVertical: 16, marginHorizontal: 10 }}
        />
        <GoBackText>Voltar</GoBackText>
      </GoBackButton>

      <Title>Registrar</Title>
      <Subtitle>Escolha o tipo de usuário para o cadastro :)</Subtitle>
      <ContainerOptions>
        <CardOption
          clickCardOptionListener={(item) => handleClickCardOption(item)}
          title={CLIENT_TYPE}
          image={ImageUser}
        />
        <CardOption
          clickCardOptionListener={handleClickCardOption}
          title={ENTERPRISE_TYPE}
          image={ImageEnterprise}
        />
      </ContainerOptions>
    </Container>
  );
};

export default SelectionRegisterType;
