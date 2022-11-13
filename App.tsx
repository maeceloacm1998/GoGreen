import React from 'react';
import {Text, View} from 'react-native';
import Card from './src/components/Card';
import CheckboxComponent from './src/components/Checkbox';
import Input from './src/components/Input';
import InputWithIcon from './src/components/InputWithIcon';
import PendingALert from './src/components/PendingAlert';
import SelectListComponent from './src/components/SelectList';
import Icon from 'react-native-vector-icons/MaterialIcons';
import themes from './src/themes/themes';

const App = () => {
  function dale(item: string) {
    console.log('entoru aqui');
    console.log(item);
  }

  const data = [{key: '1', value: 'Jammu & Kashmir'}];

  return (
    <View>
      <Text>Teste de componentes</Text>
      <Text>Input</Text>
      <Input />
      <Text>Card</Text>
      <Card
        title="Coopermiti"
        addressText="Belo Horizonte - São Paulo"
        categoryText="Baterias"
      />
      <Text>Checkbox</Text>
      <CheckboxComponent />
      <Text>Alert</Text>
      <PendingALert />
      <Text>SelectList</Text>
      <SelectListComponent selectedItem={dale} data={data} />
      <Text>InputIcon</Text>
      <InputWithIcon
        icon={<Icon name="search" size={20} color={themes.color.primary} />}
        placeholder="Buscando por uma empresa?"
      />
    </View>
  );
};

export default App;
