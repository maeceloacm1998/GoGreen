import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import Header from './components/Header';
import GenericError from '../../../components/GenericError';
import CheckboxComponent from '../../../components/Checkbox';
import {getCategoryList} from './repository';
import {ScreenProps} from '../../../router/models/ScreenPropsModel';

import {Button, Container, TextButton, Title} from './styled';
import Loading from '../../../components/Loading';
import {useFilterList} from '../../../context/FilterList';

const FilterList = ({navigation}: ScreenProps) => {
  const goBackListener = () => navigation.goBack();

  const {
    filterSelectedList,
    addFilterSelectedList,
    removeAllFilters,
    isEmptyList,
  } = useFilterList();
  const [filterList, setFilterList] = useState<Array<string>>([]);
  const [filterSelected, setFilterSelected] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchFilterList();
    fetchFilterSelected();
  }, []);

  async function fetchFilterList() {
    handleLoading(true);
    const req = await getCategoryList();

    isEmptyCategoryList(req);
    setFilterList(req);
    handleLoading(false);
  }

  function fetchFilterSelected() {
    setFilterSelected(filterSelectedList);
  }

  function HandleCheckBox(title: string) {
    let checked = false;
    if (!isEmptyList()) {
      filterSelectedList.map(item => {
        if (!checked) checked = item === title;
      });
    }

    return (
      <CheckboxComponent
        title={title}
        defaultValueCheckbox={checked}
        onCheckedValue={(checked, value) => {
          if (checked) {
            setFilterSelected(oldValue => [...oldValue, value]);
          } else {
            removeChecked(value);
          }
        }}
        marginBottom={5}
        marginTop={5}
      />
    );
  }

  function removeChecked(title: string) {
    const removeChecked = filterSelected.filter(item => item !== title);
    setFilterSelected(removeChecked);
  }

  function isEmptyCategoryList(filterList: Array<string>) {
    if (filterList.length == 0) {
      setError(true);
    } else {
      setError(false);
    }
  }

  function applyFiltersSelected() {
    addFilterSelectedList(filterSelected);
    setFilterSelected([]);
    goBackListener();
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
        onClickClearListener={() => {
          removeAllFilters();
          fetchFilterList();
        }}
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
          <Button activeOpacity={0.7} onPress={applyFiltersSelected}>
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
