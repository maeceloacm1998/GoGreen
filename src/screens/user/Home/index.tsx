import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Card from '../../../components/Card';
import {getCompaniesList} from './repository';

import {CompaniesListModel} from '../../../models/CompaniesListModel';
import {ScreenProps} from '../../../router/models/ScreenPropsModel';

import {Container, HeaderText, TitleDark, TitleLight} from './styled';
import Loading from '../../../components/Loading';

const Home = ({navigation}: ScreenProps) => {
  const navigateFilterList = () => navigation.navigate('FilterList');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [companiesList, setCompaniesList] = useState<Array<CompaniesListModel>>(
    [],
  );

  useEffect(() => {
    fetchCompaniesList();
  }, []);

  async function fetchCompaniesList() {
    handleLoading(true);
    const req = await getCompaniesList();

    isEmptyList(req);
    setCompaniesList(req);
    handleLoading(false);
  }

  function handleLoading(status: boolean) {
    setLoading(status);
  }

  function isEmptyList(categoryList: Array<CompaniesListModel>) {
    if (categoryList.length == 0) {
      setError(true);
    } else {
      setError(false);
    }
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
        onClick={() => navigation.navigate('CompanyPreview')}
        marginTop={12}
      />
    );
  }

  return loading ? (
    <Loading />
  ) : (
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
