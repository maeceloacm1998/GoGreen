/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react';

import CardWithState from '../../../components/CardWithState';
import Loading from '../../../components/Loading';

import { ScheduleModel } from './models/ScheduleModel';
import { fetchSchedule } from './repository';

import { Container, Subtitle, Title } from './styled';

const SchedulesList = () => {
  const [scheduleList, setScheduleList] = useState<ScheduleModel[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchScheduleList();
  }, []);

  async function fetchScheduleList() {
    setLoading(true);
    const res = await fetchSchedule();
    setScheduleList(res);

    setLoading(false);
  }

  function HandleCardWithState(props: any) {
    return (
      <CardWithState
        key={props.id}
        title={props.name}
        dtCreated={props.dtCreated}
        state={props.state}
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
      <Title>Agendamentos</Title>
      <Subtitle>Todos os agendamentos realizados por você :)</Subtitle>

      {/* <FlatList
        data={scheduleList}
        renderItem={data => HandleCardWithState(data.item)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      /> */}

      <HandleCardWithState />
    </Container>
  );
};

export default SchedulesList;
