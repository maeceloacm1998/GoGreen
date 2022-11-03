import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  AddressText,
  CardContainer,
  CategoryText,
  Container,
  ContainerData,
  ImageCustom,
  TitleText,
} from './styled';

export type CardType = {
  image?: string;
  title: string;
  addressText: string;
  categoryText: string;
  onClick?: () => void;
};

import Test from '../../assets/images/test.png';
import themes from '../../themes/themes';

const translate = (props: CardType) => ({
  image: props.image ? props.image : Test,
  title: props.title ? props.title : 'default',
  addressText: props.addressText ? props.addressText : 'default',
  categoryText: props.categoryText ? props.categoryText : 'default',
  onClick: props.onClick ? props.onClick : () => {},
});

const Card = (props: CardType) => {
  const {image, title, addressText, categoryText, onClick} = translate(props);
  return (
    <CardContainer activeOpacity={0.7} onPress={onClick}>
      <Container>
        <ImageCustom source={image} />
        <ContainerData>
          <TitleText>{title}</TitleText>
          <AddressText>{addressText}</AddressText>
          <CategoryText>{categoryText}</CategoryText>
        </ContainerData>
      </Container>

      <Icon name="arrow-forward-ios" size={18} color={themes.color.primary} />
    </CardContainer>
  );
};

export default Card;
