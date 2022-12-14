/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react';

import HeaderComponent from './components/Header';
import Maps from './components/Maps';
import { fetchCompanyById } from './repository';
import { CompaniesListModel } from '../../../models/CompaniesListModel';

import { StackParamsList } from '../../../router/models/ScreenPropsModel';

import { fetchLatLongWithAddress, getLatLong } from '../../../services/getLatLongWithAddress';
import { LatLongModel } from '../../../services/getLatLongWithAddress/models/LatLongModel';

import { Container, ContainerData, Description, Title } from './styled';
import { StackScreenProps } from '@react-navigation/stack';

type CompanyPreviewProps = StackScreenProps<StackParamsList, 'CompanyPreview'>;

const CompanyPreview = ({ route, navigation }: CompanyPreviewProps) => {
  const goBackListener = () => navigation.goBack();

  const [company, setCompany] = useState<CompaniesListModel>({} as CompaniesListModel);
  const [latLong, setLatLong] = useState<LatLongModel>({} as LatLongModel);
  const [loadingMap, setLoadingMap] = useState<boolean>(false);

  useEffect(() => {
    fetchLatLogProps();
    fetchCompanyInformation();
  }, []);

  async function fetchCompanyInformation() {
    const res = await fetchCompanyById(route.params?.id);
    setCompany(res);
  }

  const clickRegisterVisitListener = () => {
    navigation.navigate('ScheduleForm', { idCompany: route.params?.id });
  };

  async function fetchLatLogProps() {
    setLoadingMap(true);
    const latLong = await fetchLatLongWithAddress('hildebrando de oliveira', 235);
    setLatLong(getLatLong('Hildebrando De Oliveira 235', latLong));
    setLoadingMap(false);
  }

  return (
    <Container>
      <HeaderComponent
        title={company.name}
        address={`${company.city} - ${company.state}`}
        category={company.category}
        clickGoBackListener={goBackListener}
        clickRegisterVisitListener={clickRegisterVisitListener}
      />

      <ContainerData>
        <Title marginBottom={5}>Descrição</Title>
        <Description>{company.description}</Description>

        <Title marginTop={10} marginBottom={10}>
          Localização
        </Title>

        <Description marginBottom={10}>
          {`Rua Hidebrando de Oliveira, 235, ${company.city}, ${company.state}`}
        </Description>

        <Maps loading={loadingMap} latitude={latLong.latitude} longitude={latLong.longitude} />
      </ContainerData>
    </Container>
  );
};

export default CompanyPreview;
