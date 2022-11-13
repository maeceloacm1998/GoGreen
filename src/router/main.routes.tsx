import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ButtonNavigation from './bottomNavigation/buttomNavigation.routes';

const Stack = createStackNavigator();

function MainRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={ButtonNavigation}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="Materias"
        component={Exemplo}
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack.Navigator>
  );
}

export default MainRoute;
