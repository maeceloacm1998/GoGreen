import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import Header from './components/Header';
import GenericError from '../../../components/GenericError';
import CheckboxComponent from '../../../components/Checkbox';
import {getCategoryList} from './repository';
import {ScreenProps} from '../../../router/models/ScreenPropsModel';

import {Button, Container, TextButton, Title} from './styled';
import Loading from '../../../components/Loading';

const FilterList = ({navigation}: ScreenProps) => {
  const goBackListener = () => navigation.goBack();
  const [filterList, setFilterList] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchFilterList();
  }, []);

  async function fetchFilterList() {
    handleLoading(true);
    const req = await getCategoryList();

    isEmptyList(req);
    setFilterList(req);
    handleLoading(false);
  }

  function HandleCheckBox(title: string) {
    return <CheckboxComponent title={title} marginBottom={5} marginTop={5} />;
  }

  function isEmptyList(filterList: Array<string>) {
    if (filterList.length == 0) {
      setError(true);
    } else {
      setError(false);
    }
  }

  function handleLoading(status: boolean) {
    setLoading(status);
  }

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Header
        onClickGoBackListener={goBackListener}
        onClickClearListener={() => console.log('Clear')}
      />

      {!error ? (
        <>
          <Title>Tipos de Descarte</Title>

          <FlatList
            data={filterList}
            renderItem={data => HandleCheckBox(data.item)}
            keyExtractor={item => item}
            showsVerticalScrollIndicator={false}
          />
          <Button activeOpacity={0.7}>
            <TextButton>Aplicar</TextButton>
          </Button>
        </>
      ) : (
        <GenericError
          title="Ohhh... desculpe."
          description="Nenhum filtro foi encontrado, volte mais tarde."
        />
      )}
    </Container>
  );
};

export default FilterList;
