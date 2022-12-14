import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import CardWithState from '../../../components/CardWithState';
import Loading from '../../../components/Loading';
import {useAuthentication} from '../../../context/Authentication';

import {ScheduleModel} from './models/ScheduleModel';
import {fetchSchedule} from './repository';

import {Container, Subtitle, Title} from './styled';

const SchedulesList = () => {
  const {user} = useAuthentication();
  const [scheduleList, setScheduleList] = useState<Array<ScheduleModel>>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchScheduleList();
  }, []);

  async function fetchScheduleList() {
    setLoading(true);
    const res = await fetchSchedule(user.id.toString());
    setScheduleList(res);

    setLoading(false);
  }

  function HandleCardWithState(props: ScheduleModel) {
    return (
      <CardWithState
        key={props.id}
        title={props.product}
        dtCreated={props.dtCreated}
        state={props.statusScheduling}
        categoryText={props.category}
        image={''}
        marginTop={12}
      />
    );
  }

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Title>Agendamentos {}</Title>
      <Subtitle>Todos os agendamentos realizados por você :)</Subtitle>

      <FlatList
        data={scheduleList}
        renderItem={data => HandleCardWithState(data.item)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        refreshing={loading}
        onRefresh={() => fetchScheduleList()}
      />
    </Container>
  );
};

export default SchedulesList;
