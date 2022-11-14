import React from 'react';
import {FlatList, View} from 'react-native';

import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Card, {CardType} from '../../../components/Card';

import {Container, HeaderText, TitleDark, TitleLight} from './styled';

const Home = () => {
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

  function HandleCard(props: CardType) {
    return (
      <Card
        title={props.title}
        addressText={props.addressText}
        categoryText={props.categoryText}
        image={props.image}
        onClick={() => console.log(props.title)}
      />
    );
  }

  return (
    <Container>
      <Header />
      <HeaderTextComponent />

      <FilterBar />

      <FlatList
        renderItem={data => HandleCard(data.item)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Home;
