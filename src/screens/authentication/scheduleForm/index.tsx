import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputForm } from '../../../components/InputForm';
import { StackParamsList } from '../../../router/models/ScreenPropsModel';

import {
  Button,
  Container,
  Content,
  Form,
  GoBackButton,
  GoBackIcon,
  Header,
  Subtitle,
  TextButton,
  Title
} from './styled';
import SelectListComponent from '../../../components/SelectList';
import { categoryList } from '../EnterpriseForm';
import { useAuthentication } from '../../../context/Authentication';
import { createSchedule } from './repository';

const scheduleFormSchema = yup.object().shape({
  product: yup.string().required('O nome do produto é obrigatório.'),
  category: yup.string().required('A categoria do produto é obrigatório.'),
  descriptionProduct: yup.string().required('A descrição do produto é obrigatória.')
});

type ScheduleFormProps = StackScreenProps<StackParamsList, 'ScheduleForm'>;

export interface ScheduleFormFieldValues {
  product: string;
  category: string;
  descriptionProduct: string;
}

const ScheduleForm = ({ navigation, route }: ScheduleFormProps) => {
  const { user } = useAuthentication();

  const { control, formState, setValue, handleSubmit } = useForm<ScheduleFormFieldValues>({
    resolver: yupResolver(scheduleFormSchema)
  });

  const { errors, isValid } = formState;

  const handleGoBackButtonPress = () => {
    navigation.goBack();
  };

  const handleCategory = (position: string) => {
    const category = categoryList.find((categorySearch) => categorySearch.key === position);
    if (!category) return;
    setValue('category', category.value);
  };

  const onSubmit = async (data: ScheduleFormFieldValues) => {
    const idUsuario: string = String(user?.id) || '';
    const idCompany: string = route.params?.idCompany || '';

    const newSchedule = {
      ...data,
      idUsuario,
      idCompany
    };

    await createSchedule(newSchedule);
    handleGoBackButtonPress();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1
      }}>
      <Container>
        <Header>
          <GoBackButton onPress={handleGoBackButtonPress}>
            <GoBackIcon />
          </GoBackButton>
        </Header>
        <Content>
          <Title>Agendar coleta</Title>
          <Subtitle>Adicione informações sobre o produto</Subtitle>
          <Form>
            <InputForm
              placeholder="Nome do produto"
              control={control}
              formState={errors.product}
              nameId="product"
              requiredRule
              marginBottom={16}
            />
            <SelectListComponent
              placeholder="Selecione uma categoria"
              data={categoryList}
              selectedItem={handleCategory}
              marginBottom={20}
              errorMessage={errors.category?.message}
            />
            <InputForm
              placeholder="Descrição"
              control={control}
              formState={errors.descriptionProduct}
              nameId="descriptionProduct"
              requiredRule
              multiline
              marginBottom={16}
            />
            <Button activeOpacity={0.7} disabled={!isValid} onPress={handleSubmit(onSubmit)}>
              <TextButton>Enviar</TextButton>
            </Button>
          </Form>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ScheduleForm;
