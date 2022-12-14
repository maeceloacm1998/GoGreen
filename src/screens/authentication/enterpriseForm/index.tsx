/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useCallback, useState } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { useForm } from 'react-hook-form';
import { debounce } from 'lodash';

import { ScreenProps } from '../../../router/models/ScreenPropsModel';
import { InputForm } from '../../../components/InputForm';
import SelectListComponent, { SelectListItemType } from '../../../components/SelectList';

import { createUser } from './repository';
import { useAuthentication, userTypeProps } from '../../../context/Authentication';
import { EnterpriseFormModel } from './models/EnterpriseFormModel';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button, Container, GoBackButton, GoBackText, Subtitle, TextButton, Title } from './styled';
import themes from '../../../themes/themes';
import { SearchAddressModel } from '../../../services/searchAddress/models/SearchAddressModel';
import { searchAddress } from '../../../services/searchAddress';

const categoryList: SelectListItemType[] = [
  { key: '1', value: 'Bateria' },
  { key: '2', value: 'Computadores' },
  { key: '3', value: 'Tablets' },
  { key: '4', value: 'Teclados' },
  { key: '5', value: 'Impressoras' },
  { key: '6', value: 'Cameras fotograficas' },
  { key: '7', value: 'Lampadas eletronicas' },
  { key: '8', value: 'Aparelhos de som' },
  { key: '9', value: 'Geladeira' },
  { key: '10', value: 'Micro-ondas' }
];

const EnterpriseForm = ({ navigation }: ScreenProps) => {
  const { control, handleSubmit, formState } = useForm();
  const { authentication } = useAuthentication();

  const [category, setCategory] = useState<string>('');
  const [addressComplete, setAddressComplete] = useState<SearchAddressModel>(
    {} as SearchAddressModel
  );
  const [loading, setLoading] = useState<boolean>(false);

  async function setAddressWithCep(cep: string) {
    const res = await searchAddress(cep);
    if (res) {
      setAddressComplete(res);
    }
  }

  const handleAddressComplete = useCallback(
    debounce((cep: string) => {
      setAddressWithCep(cep);
    }, 800),
    []
  );

  function handleCategory(position: string) {
    categoryList.map((item) => {
      if (item.key === position) {
        setCategory(item.value);
      }
    });
  }

  function onSubmit(data: any) {
    const userModel: EnterpriseFormModel = data;
    handleCreateUser(userModel, category);
  }

  async function handleCreateUser(user: EnterpriseFormModel, category: string) {
    try {
      setLoading(true);
      const res = await createUser(user, category);
      authentication(res, userTypeProps.company);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <ScrollView>
      <GoBackButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-back-ios"
          size={20}
          color={themes.color.primary}
          style={{ marginVertical: 16, marginHorizontal: 10 }}
        />
        <GoBackText>Voltar</GoBackText>
      </GoBackButton>

      <Container>
        <Title>Cria sua conta!</Title>
        <Subtitle>Preencha os dados corretamente para registrar sua empresa :)</Subtitle>

        <InputForm
          placeholder="Nome da empresa"
          control={control}
          formState={formState.errors.name}
          nameId="name"
          requiredRule
          marginTop={30}
          marginBottom={10}
        />

        <SelectListComponent
          placeholder="Selecione uma categoria"
          data={categoryList}
          selectedItem={handleCategory}
          marginBottom={10}
        />

        <InputForm
          placeholder="Descrição"
          control={control}
          formState={formState.errors.description}
          requiredRule
          nameId="description"
          marginBottom={10}
          multiline
        />

        <InputForm
          placeholder="CEP"
          control={control}
          formState={formState.errors.cep}
          nameId="cep"
          onChangeText={(text) => {
            handleAddressComplete(text);
          }}
          marginBottom={10}
          keyboardType="numeric"
          requiredRule={false}
        />

        <InputForm
          placeholder="Rua Ex: exemplo, 243"
          control={control}
          formState={formState.errors.address}
          nameId="address"
          value={addressComplete.logradouro}
          requiredRule={false}
          marginBottom={10}
        />

        <InputForm
          placeholder="Cidade"
          control={control}
          formState={formState.errors.city}
          requiredRule={false}
          value={addressComplete.localidade}
          nameId="city"
          marginBottom={20}
        />

        <InputForm
          placeholder="Estado"
          control={control}
          formState={formState.errors.state}
          requiredRule={false}
          nameId="state"
          marginBottom={10}
        />

        <Subtitle>Digite seus dados para acessar a aplicação:</Subtitle>

        <InputForm
          placeholder="Email"
          control={control}
          formState={formState.errors.email}
          requiredRule
          nameId="email"
          keyboardType="email-address"
          marginTop={10}
          marginBottom={10}
        />

        <InputForm
          placeholder="Senha"
          control={control}
          formState={formState.errors.password}
          requiredRule
          nameId="password"
          secureTextEntry={true}
          marginBottom={10}
        />

        <Button disabled={loading} activeOpacity={0.7} onPress={handleSubmit(onSubmit)}>
          {loading ? (
            <ActivityIndicator size={20} color={themes.color.white} />
          ) : (
            <TextButton>Registrar-se</TextButton>
          )}
        </Button>
      </Container>
    </ScrollView>
  );
};

export default EnterpriseForm;
