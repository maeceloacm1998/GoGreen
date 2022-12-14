/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import CardWithState from '../../../components/CardWithState';
import GenericError from '../../../components/GenericError';
import Loading from '../../../components/Loading';
import { useAuthentication } from '../../../context/Authentication';

import { ScheduleModel } from './models/ScheduleModel';
import { fetchSchedule } from './repository';

import { Container, Subtitle, Title } from './styled';

const SchedulesList = () => {
  const { user } = useAuthentication();
  const [scheduleList, setScheduleList] = useState<Array<ScheduleModel>>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchScheduleList();
  }, []);

  async function fetchScheduleList() {
    setLoading(true);
    const res = await fetchSchedule(user.id.toString());
    setScheduleList(res);
    isEmptyList(res);

    setLoading(false);
  }

  function isEmptyList(schedulingList: Array<ScheduleModel>) {
    if (schedulingList.length == 0) {
      setError(true);
    } else {
      setError(false);
    }
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
  ) : error ? (
    <GenericError
      title="Nenhum agendamento disponpível"
      description="Agende uma coleta para alguma empresa disponível :p"
    />
  ) : (
    <Container>
      <Title>Agendamentos {}</Title>
      <Subtitle>Todos os agendamentos realizados por você :)</Subtitle>

      <FlatList
        data={scheduleList}
        renderItem={(data) => HandleCardWithState(data.item)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        refreshing={loading}
        onRefresh={() => fetchScheduleList()}
      />
    </Container>
  );
};

export default SchedulesList;
