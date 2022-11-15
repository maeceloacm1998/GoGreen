import React from 'react';

import GenericErrorImage from '../../assets/images/generic_error_image.png';

import {Container, Description, Image, Title} from './styled';

export type GenericErrorProps = {
  title: string;
  description: string;
};

const checkProps = (props: GenericErrorProps) => ({
  title: props.title ? props.title : 'generic message',
  description: props.description ? props.description : 'generic message',
});

const GenericError = (props: GenericErrorProps) => {
  const {title, description} = checkProps(props);

  return (
    <Container>
      <Image source={GenericErrorImage} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default GenericError;
