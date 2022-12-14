import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useState } from 'react';
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
  StepContainer,
  StepText,
  Subtitle,
  TextButton,
  Title
} from './styled';
import { searchAddress } from '../../../services/searchAddress';
import { debounce } from 'lodash';
import SelectListComponent from '../../../components/SelectList';
import { categoryList } from '../enterpriseForm';

const scheduleFormSchema = yup.object().shape({
  clientName: yup.string().required('O nome do cliente é obrigatório.'),
  cep: yup.string().required('O CEP é obrigatório.'),
  address: yup.string().required('O endereço é obrigatório.'),
  number: yup.string().required('O número é obrigatório.'),
  city: yup.string().required('A cidade é obrigatório.'),
  state: yup.string().required('O estado é obrigatório.'),
  productName: yup.string().required('O nome do produto é obrigatório.'),
  productCategory: yup.string().required('A categoria do produto é obrigatório.'),
  description: yup.string().required('A descrição do produto é obrigatória.')
});

type ScheduleFormProps = StackScreenProps<StackParamsList, 'ScheduleForm'>;

interface ScheduleFormFieldValues {
  clientName: string;
  cep: string;
  address: string;
  number: string;
  city: string;
  state: string;
  productName: string;
  productCategory: string;
  description: string;
}

const ScheduleForm = ({ navigation }: ScheduleFormProps) => {
  const [step, setStep] = useState<'one' | 'two'>('one');

  const { control, formState, setValue, handleSubmit } = useForm<ScheduleFormFieldValues>({
    resolver: yupResolver(scheduleFormSchema)
  });

  const isStepOne = step === 'one';
  const isStepTwo = step === 'two';

  const { errors, isValid } = formState;

  const handleGoBackButtonPress = () => {
    if (isStepTwo) {
      setStep('one');
      return;
    }
    navigation.goBack();
  };

  const handleCancelButtonPress = () => {
    navigation.goBack();
  };

  const handleGoToStepTwo = () => {
    setStep('two');
  };

  const handleCategory = (position: string) => {
    const category = categoryList.find((categorySearch) => categorySearch.key === position);
    if (!category) return;
    setValue('productCategory', category.value);
  };

  const onSubmit = (data: ScheduleFormFieldValues) => {
    console.log('data', data);
  };

  function setAddressWithCep(cep: string) {
    searchAddress(cep)
      .then((response) => {
        const { logradouro, localidade: cidade, uf: estado } = response;
        setValue('address', logradouro);
        setValue('city', cidade);
        setValue('state', estado);
      })
      .catch(() => {});
  }
  const handleAddressComplete = useCallback(
    debounce((cep: string) => {
      setAddressWithCep(cep);
    }, 800),
    []
  );

  const stepText = isStepOne ? 'Passo 1' : 'Passo 2';

  const title = isStepOne ? 'Endereço de coleta' : 'Agendar coleta';

  const subtitle = isStepOne
    ? 'Comece adicionando as informações básicas'
    : 'Adicione informações sobre o produto';

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
        <StepContainer>
          <StepText>{stepText}</StepText>
        </StepContainer>
        <Content>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Form>
            {isStepOne && (
              <>
                <InputForm
                  placeholder="Nome do cliente"
                  control={control}
                  formState={errors.clientName}
                  nameId="clientName"
                  requiredRule
                  marginBottom={16}
                />
                <InputForm
                  placeholder="CEP"
                  control={control}
                  formState={errors.cep}
                  nameId="cep"
                  onChange={({ nativeEvent: { text } }) => {
                    handleAddressComplete(text);
                  }}
                  requiredRule
                  keyboardType="numeric"
                  marginBottom={16}
                />
                <InputForm
                  placeholder="Endereço"
                  control={control}
                  formState={errors.address}
                  nameId="address"
                  requiredRule
                  marginBottom={16}
                />
                <InputForm
                  placeholder="Número"
                  control={control}
                  formState={errors.number}
                  nameId="number"
                  requiredRule
                  marginBottom={16}
                  keyboardType="numeric"
                />
                <InputForm
                  placeholder="Cidade"
                  control={control}
                  formState={errors.city}
                  nameId="city"
                  requiredRule
                  marginBottom={16}
                />
                <InputForm
                  placeholder="Estado"
                  control={control}
                  formState={errors.state}
                  nameId="state"
                  requiredRule
                  marginBottom={16}
                />
                <Button activeOpacity={0.7} onPress={handleGoToStepTwo}>
                  <TextButton>Próximo</TextButton>
                </Button>
                <Button activeOpacity={0.7} type="secondary" onPress={handleCancelButtonPress}>
                  <TextButton type="secondary">Cancelar</TextButton>
                </Button>
              </>
            )}

            {isStepTwo && (
              <>
                <InputForm
                  placeholder="Nome do produto"
                  control={control}
                  formState={errors.productName}
                  nameId="productName"
                  requiredRule
                  marginBottom={16}
                />
                <SelectListComponent
                  placeholder="Selecione uma categoria"
                  data={categoryList}
                  selectedItem={handleCategory}
                  marginBottom={20}
                  errorMessage={errors.productCategory?.message}
                />
                <InputForm
                  placeholder="Descrição"
                  control={control}
                  formState={errors.description}
                  nameId="description"
                  requiredRule
                  multiline
                  marginBottom={16}
                />
                <Button activeOpacity={0.7} disabled={!isValid} onPress={handleSubmit(onSubmit)}>
                  <TextButton>Enviar</TextButton>
                </Button>
                <Button activeOpacity={0.7} type="secondary" onPress={handleCancelButtonPress}>
                  <TextButton type="secondary">Cancelar</TextButton>
                </Button>
              </>
            )}
          </Form>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default ScheduleForm;
