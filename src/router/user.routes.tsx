import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import FilterList from '../screens/user/FilterList';
import ButtonNavigation from './bottomNavigation/buttomNavigation.routes';

const Stack = createStackNavigator();

function UserRoutes() {
  return (
    <Stack.Navigator initialRouteName="FilterList">
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

export default UserRoutes;
