import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ButtonNavigation from './bottomNavigation/buttomNavigation.routes';
import FilterList from '../screens/user/FilterList';

const Stack = createStackNavigator();

function MainRoute() {
  return (
    <Stack.Navigator initialRouteName="InitialRouteUser">
      <Stack.Screen
        name="InitialRouteUser"
        component={ButtonNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FilterList"
        component={FilterList}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainRoute;
