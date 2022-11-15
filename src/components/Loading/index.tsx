import React from 'react';
import Lottie from 'lottie-react-native';

import Animation from '../../assets/animations/truck_animation.json';

import {Container, Title} from './styled';

const Loading = () => {
  return (
    <Container>
      <Lottie
        source={Animation}
        autoPlay
        loop
        style={{width: 200, height: 200}}
      />
      <Title>Aguarde um momento...</Title>
    </Container>
  );
};

export default Loading;
