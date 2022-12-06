import React from 'react';
import Lottie from 'lottie-react-native';

import {CardType} from '../Card';

import Test from '../../assets/images/IconGoGreen.png';
import InProgress from '../../assets/animations/status.json';
import Cancel from '../../assets/animations/status_cancel.json';
import Finish from '../../assets/animations/status_success.json';

import {
  AddressText,
  CardContainer,
  CategoryText,
  Container,
  ContainerData,
  ImageCustom,
  StatusContainer,
  StatusText,
  TitleText,
} from './styled';

export interface CardWithStateProps extends CardType {
  dtCreated: string;
  state: string;
}

export type State = {
  icon: string;
  name: string;
};

const states = {
  inProgress: 'Em andamento',
  cancel: 'Cancelado',
  finish: 'Concluido',
};

const checkProps = (props: CardWithStateProps) => ({
  image: props.image ? props.image : Test,
  title: props.title ? props.title : 'default',
  dtCreated: props.dtCreated ? props.dtCreated : 'default',
  categoryText: props.categoryText ? props.categoryText : 'default',
  state: props.state ? props.state : states.finish,
  marginTop: props.marginTop ? props.marginTop : 0,
  marginBottom: props.marginBottom ? props.marginBottom : 0,
  marginLeft: props.marginLeft ? props.marginLeft : 0,
  marginRight: props.marginRight ? props.marginRight : 0,
});

const CardWithState = (props: CardWithStateProps) => {
  const {
    dtCreated,
    categoryText,
    image,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    state,
    title,
  } = checkProps(props);

  function selectState(): State {
    if (state.toLowerCase() === states.inProgress.toLowerCase()) {
      return {
        icon: JSON.stringify(InProgress),
        name: states.inProgress,
      };
    }

    if (state.toLowerCase() === states.cancel.toLowerCase()) {
      return {
        icon: JSON.stringify(Cancel),
        name: states.cancel,
      };
    }

    return {
      icon: JSON.stringify(Finish),
      name: states.finish,
    };
  }

  function HandleState() {
    const stateResult = selectState();
    return (
      <StatusContainer>
        <Lottie
          source={JSON.parse(stateResult.icon)}
          autoPlay
          loop
          style={{width: 30, height: 30}}
        />
        <StatusText>{stateResult.name}</StatusText>
      </StatusContainer>
    );
  }

  return (
    <CardContainer
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}>
      <Container>
        <ImageCustom source={image} />
        <ContainerData>
          <TitleText>{title}</TitleText>
          <AddressText>{dtCreated}</AddressText>
          <CategoryText>{categoryText}</CategoryText>
        </ContainerData>
      </Container>

      <HandleState />
    </CardContainer>
  );
};

export default CardWithState;
