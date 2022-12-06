import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/authentication/Login';
import SelectionRegisterType from '../screens/authentication/SelectionRegisterType';
import UserForm from '../screens/authentication/UserForm';
import EnterpriseForm from '../screens/authentication/EnterpriseForm';

const Stack = createStackNavigator();

function MainRoute() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SelectionRegisterType"
        component={SelectionRegisterType}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserForm"
        component={UserForm}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EnterpriseForm"
        component={EnterpriseForm}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainRoute;
