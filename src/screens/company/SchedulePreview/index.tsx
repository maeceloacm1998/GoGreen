import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ImagePNG from '../../../assets/images/plant_login.png';
import InProgress from '../../../assets/animations/status.json';
import Cancel from '../../../assets/animations/status_cancel.json';
import Finish from '../../../assets/animations/status_success.json';
import Lottie from 'lottie-react-native';

import { User } from '../../../context/Authentication';

import { ScreenProps } from '../../../router/models/ScreenPropsModel';
import themes from '../../../themes/themes';
import { ScheduleModel } from '../../user/SchedulesList/models/ScheduleModel';
import { states } from './constants';
import { getScheduleItemPerId, getClientPerId, updateSchedule } from './repository';
import {
  Container,
  ContainerCancelButton,
  ContainerConfirmButton,
  ContainerStatus,
  Image,
  StatusContainer,
  StatusText,
  SubTitle,
  Tag,
  TextButton,
  Title
} from './styled';
import Loading from '../../../components/Loading';

export type State = {
  icon: string;
  name: string;
};

const SchedulePreview = ({ route, navigation }: ScreenProps) => {
  const [scheduleItem, setScheduleItem] = useState<ScheduleModel>({} as ScheduleModel);
  const [client, setClient] = useState<User>({} as User);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchScheduleItem();
  }, []);

  async function fetchScheduleItem() {
    setLoading(true);
    const res = await getScheduleItemPerId(route.params?.id);
    console.log(res);
    await fetchClient();
    setScheduleItem(res);
    setLoading(false);
  }

  async function fetchClient() {
    const res = await getClientPerId(route.params?.userId);
    setClient(res);
  }

  function selectState(status: string = 'Concluido'): State {
    if (status.toLowerCase() === states.inProgress.toLowerCase()) {
      return {
        icon: JSON.stringify(InProgress),
        name: states.inProgress
      };
    }

    if (status.toLowerCase() === states.cancel.toLowerCase()) {
      return {
        icon: JSON.stringify(Cancel),
        name: states.cancel
      };
    }

    return {
      icon: JSON.stringify(Finish),
      name: states.finish
    };
  }

  function HandleState() {
    const stateResult = selectState(scheduleItem.statusScheduling);
    return (
      <StatusContainer>
        <Lottie
          source={JSON.parse(stateResult.icon)}
          autoPlay
          loop
          style={{ width: 30, height: 30 }}
        />
        <StatusText>{stateResult.name}</StatusText>
      </StatusContainer>
    );
  }

  function isProgressSchedule(status: string = states.finish) {
    return status.toLowerCase() === states.inProgress.toLowerCase();
  }

  async function cancelSchedule() {
    const newScheduleItem: ScheduleModel = {
      ...scheduleItem,
      statusScheduling: states.cancel
    };
    await updateSchedule(newScheduleItem);
    fetchScheduleItem();
  }

  async function confirmSchedule() {
    const newScheduleItem: ScheduleModel = {
      ...scheduleItem,
      statusScheduling: states.finish
    };
    await updateSchedule(newScheduleItem);
  }

  return loading ? (
    <Loading />
  ) : (
    <ScrollView>
      <Container>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back-ios"
            size={18}
            style={{ marginLeft: 5 }}
            color={themes.color.text_color}
          />
        </TouchableOpacity>
        <ContainerStatus>
          <Image source={ImagePNG} />
          <Title>Seu agendamento está</Title>
          <HandleState />
        </ContainerStatus>
        <SubTitle>Dados da coleta</SubTitle>
        <Text>
          <Title>-</Title> <Tag>Produto: </Tag> {scheduleItem.product}
        </Text>
        <Text>
          <Title>-</Title> <Tag>Descrição: </Tag>
          {scheduleItem.descriptionProduct}
        </Text>
        <Text>
          <Title>-</Title> <Tag>Categoria: </Tag> {scheduleItem.category}
        </Text>
        <SubTitle>Dados do Cliente</SubTitle>
        <Text>
          <Title>-</Title> <Tag>Nome: </Tag> {client.name}
        </Text>
        <Text>
          <Title>-</Title> <Tag>CEP: </Tag> {client.cep}
        </Text>
        <Text>
          <Title>-</Title> <Tag>Endereço: </Tag> {client.address}
        </Text>
        <Text>
          <Title>-</Title> <Tag>Cidade: </Tag> {client.city}
        </Text>
        <Text>
          <Title>-</Title> <Tag>Estado: </Tag> {client.state}
        </Text>
        {isProgressSchedule(scheduleItem.statusScheduling) && (
          <>
            <ContainerConfirmButton onPress={() => confirmSchedule()}>
              <TextButton>Concluir agendamento</TextButton>
            </ContainerConfirmButton>

            <ContainerCancelButton onPress={() => cancelSchedule()}>
              <TextButton>Cancelar agendamento</TextButton>
            </ContainerCancelButton>
          </>
        )}
      </Container>
    </ScrollView>
  );
};

export default SchedulePreview;
