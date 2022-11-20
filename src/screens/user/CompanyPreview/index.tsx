import React from 'react';

import {Container, ContainerData, Description, Title} from './styled';
import themes from '../../../themes/themes';
import HeaderComponent from './components/Header';

const CompanyPreview = () => {
  return (
    <Container>
      <HeaderComponent
        title="Copagi"
        address="BELO HORIZONTE - MINAS GERAIS"
        category="Bateria"
      />

      <ContainerData>
        <Title marginBottom={5}>Descrição</Title>
        <Description>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using.
        </Description>

        <Title marginTop={10} marginBottom={10}>
          Localização
        </Title>
      </ContainerData>
    </Container>
  );
};

export default CompanyPreview;
