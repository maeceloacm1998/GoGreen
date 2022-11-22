import React, {useEffect, useState} from 'react';

import HeaderComponent from './components/Header';
import Maps from './components/Maps';

import {ScreenProps} from '../../../router/models/ScreenPropsModel';

import {
  fetchLatLongWithAddress,
  getLatLong,
} from '../../../services/getLatLongWithAddress';
import {LatLongModel} from '../../../services/getLatLongWithAddress/models/LatLongModel';

import {Container, ContainerData, Description, Title} from './styled';

const CompanyPreview = ({navigation}: ScreenProps) => {
  const goBackListener = () => navigation.goBack();
  const [latLong, setLatLong] = useState<LatLongModel>({} as LatLongModel);
  const [loadingMap, setLoadingMap] = useState<boolean>(false);

  useEffect(() => {
    fetchLatLogProps();
  }, []);

  async function fetchLatLogProps() {
    setLoadingMap(true);
    const latLong = await fetchLatLongWithAddress(
      'hildebrando de oliveira',
      235,
    );
    setLatLong(getLatLong('Hildebrando De Oliveira', latLong));
    setLoadingMap(false);
  }

  return (
    <Container>
      <HeaderComponent
        title="Copagi"
        address="Belo horizonte - Minas Gerais"
        category="Bateria"
        clickGoBackListener={goBackListener}
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

        <Description marginBottom={10}>
          Rua Hidebrando de Oliveira, 235, Copacabana, Minas Gerais
        </Description>

        <Maps
          loading={loadingMap}
          latitude={latLong.latitude}
          longitude={latLong.longitude}
        />
      </ContainerData>
    </Container>
  );
};

export default CompanyPreview;
