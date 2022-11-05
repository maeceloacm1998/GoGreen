import React from 'react';
import Lottie from 'lottie-react-native';

import Images from '../../assets//images/test.png';
import {TitleText} from '../Card/styled';

import Animation from "../../assets/animations/status.json"

import {
  AddressText,
  CategoryText,
  Container,
  Image,
  Information,
  InformationContainer,
  StatusContainer,
  StatusText,
} from './styled';

export type PendingAlertType = {
  image?: string;
  title?: string;
  address?: string;
  category?: string;
  onClick?: () => void;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
};

const checkProps = (props: PendingAlertType) => ({
  image: props.image ? props.image : Images,
  title: props.title ? props.title : 'default',
  address: props.address ? props.address : 'default',
  category: props.category ? props.category : 'default',
  onClick: props.onClick ? props.onClick : () => {},
  marginTop: props.marginTop ? props.marginTop : 0,
  marginBottom: props.marginBottom ? props.marginBottom : 0,
  marginLeft: props.marginLeft ? props.marginLeft : 0,
  marginRight: props.marginRight ? props.marginRight : 0,
});

const PendingALert = (props: PendingAlertType) => {
  const {image, title, address, category, onClick, marginTop, marginBottom, marginLeft, marginRight} = checkProps(props)

  return (
    <Container
      onPress={onClick}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}>
      <InformationContainer>
        <Image source={image} />
        <Information>
          <TitleText>{title}</TitleText>
          <AddressText>{address}</AddressText>
          <CategoryText>{category}</CategoryText>
        </Information>
      </InformationContainer>
      <StatusContainer>
        <Lottie source={Animation} autoPlay loop style={{width: 30, height:30}} />
        <StatusText>Pendente...</StatusText>
      </StatusContainer>
    </Container>
  );
};

export default PendingALert;
