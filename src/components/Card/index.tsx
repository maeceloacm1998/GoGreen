import React from 'react';

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
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
};

import Test from '../../assets/images/IconGoGreen.png';
import themes from '../../themes/themes';

const translate = (props: CardType) => ({
  image: props.image ? props.image : Test,
  title: props.title ? props.title : 'default',
  addressText: props.addressText ? props.addressText : 'default',
  categoryText: props.categoryText ? props.categoryText : 'default',
  onClick: props.onClick ? props.onClick : () => {},
  marginTop: props.marginTop ? props.marginTop : 0,
  marginBottom: props.marginBottom ? props.marginBottom : 0,
  marginLeft: props.marginLeft ? props.marginLeft : 0,
  marginRight: props.marginRight ? props.marginRight : 0,
});

const Card = (props: CardType) => {
  const {
    image,
    title,
    addressText,
    categoryText,
    onClick,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  } = translate(props);
  return (
    <CardContainer
      activeOpacity={0.7}
      onPress={onClick}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}>
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
