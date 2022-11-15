import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Card from '../../../components/Card';
import {getCompaniesList} from './repository';

import {CompaniesListModel} from '../../../models/CompaniesListModel';
import {ScreenProps} from '../../../router/models/ScreenPropsModel';

import {Container, HeaderText, TitleDark, TitleLight} from './styled';

const Home = ({navigation}: ScreenProps) => {
  const navigateFilterList = () => navigation.navigate('FilterList');

  const [companiesList, setCompaniesList] = useState<Array<CompaniesListModel>>(
    [],
  );

  useEffect(() => {
    fetchCompaniesList();
  }, []);

  async function fetchCompaniesList() {
    const req = await getCompaniesList();
    setCompaniesList(req);
  }

  function HeaderTextComponent() {
    return (
      <HeaderText>
        <TitleDark>
          Precisa de ajuda com seu lixo eletrônico?
          <TitleLight>ache a empresa certa para o descarte.</TitleLight>
        </TitleDark>
      </HeaderText>
    );
  }

  function HandleCard(props: CompaniesListModel) {
    return (
      <Card
        key={props.id}
        title={props.name}
        addressText={`${props.city} ${props.state}`}
        categoryText={props.category}
        image={''}
        onClick={() => console.log(props.name)}
        marginTop={12}
      />
    );
  }

  return (
    <Container>
      <Header />
      <HeaderTextComponent />
      <FilterBar onClickFilterButton={navigateFilterList} />

      <FlatList
        data={companiesList}
        renderItem={data => HandleCard(data.item)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
