import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import Header from './components/Header';
import {getSchedulingListCompany} from './repository';

import {ScreenProps} from '../../../router/models/ScreenPropsModel';

import {Container, HeaderText, TitleDark, TitleLight} from './styled';
import Loading from '../../../components/Loading';
import {useAuthentication} from '../../../context/Authentication';
import {ScheduleModel} from '../../user/SchedulesList/models/ScheduleModel';
import CardWithState from '../../../components/CardWithState';

const HomeCompany = ({navigation}: ScreenProps) => {
  const navigateFilterList = () => navigation.navigate('FilterList');

  const {company} = useAuthentication();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [schedulingList, setSchedulingList] = useState<Array<ScheduleModel>>(
    [],
  );

  useEffect(() => {
    fetchSchedulingList();
  }, []);

  async function fetchSchedulingList() {
    handleLoading(true);
    const req = await getSchedulingListCompany(company.id.toString());

    isEmptyList(req);
    setSchedulingList(req);
    handleLoading(false);
  }

  function handleLoading(status: boolean) {
    setLoading(status);
  }

  function isEmptyList(schedulingList: Array<ScheduleModel>) {
    if (schedulingList.length == 0) {
      setError(true);
    } else {
      setError(false);
    }
  }

  function HeaderTextComponent() {
    return (
      <HeaderText>
        <TitleDark>
          Veja a baixo todos os pedidos de coleta {`\n`}
          <TitleLight>Ajude na reciclagem do mundo.</TitleLight>
        </TitleDark>
      </HeaderText>
    );
  }

  function HandleCard(props: ScheduleModel) {
    return (
      <CardWithState
        key={props.id}
        title={props.product}
        dtCreated={props.dtCreated}
        state={props.statusScheduling}
        categoryText={props.category}
        onClick={() =>
          navigation.navigate('SchedulePreview', {
            id: props.id,
            userId: props.idUsuario,
          })
        }
        image={''}
        marginTop={12}
      />
    );
  }

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Header username={company.name} />
      <HeaderTextComponent />
      {/* <FilterBar onClickFilterButton={navigateFilterList} /> */}

      <FlatList
        data={schedulingList}
        renderItem={data => HandleCard(data.item)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onRefresh={() => fetchSchedulingList()}
        refreshing={loading}
      />
    </Container>
  );
};

export default HomeCompany;
