import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/authentication/login';
import SelectionRegisterType from '../screens/authentication/selectionRegisterType';
import UserForm from '../screens/authentication/userForm';
import EnterpriseForm from '../screens/authentication/enterpriseForm';
import ScheduleForm from '../screens/authentication/scheduleForm';
import { StackParamsList } from './models/ScreenPropsModel';

const Stack = createStackNavigator<StackParamsList>();

function MainRoute() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SelectionRegisterType"
        component={SelectionRegisterType}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="UserForm"
        component={UserForm}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="EnterpriseForm"
        component={EnterpriseForm}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ScheduleForm"
        component={ScheduleForm}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default MainRoute;
