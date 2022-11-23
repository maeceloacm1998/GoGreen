import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/authentication/login';

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
    </Stack.Navigator>
  );
}

export default MainRoute;
