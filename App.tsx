import React from 'react';
import {Text, View} from 'react-native';
import Card from './src/components/Card';
import CheckboxComponent from './src/components/Checkbox';
import Input from './src/components/Input';
import PendingALert from './src/components/PendingAlert';

const App = () => {
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
    </View>
  );
};

export default App;
