import React from 'react';
import {TouchableOpacity} from 'react-native';

import Image from '../../../../../assets/images/test.png';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  AddressText,
  CategoryText,
  Container,
  ContainerData,
  Header,
  ImageCustom,
  RegisterCollectButton,
  RegisterCollectText,
  TitleText,
} from './styled';
import themes from '../../../../../themes/themes';

export type HeaderComponentType = {
  title: string;
  address: string;
  category: string;
  clickRegisterVisitListener?: () => void;
  clickGoBackListener?: () => void;
};

const checkProps = (props: HeaderComponentType) => ({
  title: props.title ? props.title : '',
  address: props.address ? props.address : '',
  category: props.category ? props.category : '',
  clickRegisterVisitListener: props.clickRegisterVisitListener
    ? props.clickRegisterVisitListener
    : () => {},
  clickGoBackListener: props.clickGoBackListener
    ? props.clickGoBackListener
    : () => {},
});

const HeaderComponent = (props: HeaderComponentType) => {
  const {
    address,
    category,
    clickRegisterVisitListener,
    clickGoBackListener,
    title,
  } = checkProps(props);

  const clickRegisterVisit = () => clickRegisterVisitListener();

  return (
    <Header>
      <TouchableOpacity onPress={clickGoBackListener}>
        <Icon
          name="arrow-back-ios"
          size={18}
          style={{marginLeft: 5}}
          color={themes.color.text_color}
        />
      </TouchableOpacity>
      <Container>
        <ImageCustom source={Image} />
        <ContainerData>
          <TitleText>{title}</TitleText>
          <AddressText>{address}</AddressText>
          <CategoryText>{category}</CategoryText>
          <RegisterCollectButton
            onPress={clickRegisterVisit}
            activeOpacity={0.7}>
            <RegisterCollectText>Agendar coleta</RegisterCollectText>
            <IconMaterial name="plus" size={20} color={themes.color.white} />
          </RegisterCollectButton>
        </ContainerData>
      </Container>
    </Header>
  );
};

export default HeaderComponent;
