import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ButtonNavigation from './bottomNavigation/buttomNavigation.routes';
import FilterList from '../screens/user/FilterList';
import {FilterListProviderHook} from '../context';

const Stack = createStackNavigator();

function MainRoute() {
  return (
    <FilterListProviderHook>
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
    </FilterListProviderHook>
  );
}

export default MainRoute;
