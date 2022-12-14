import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FilterList from '../screens/user/FilterList';
import CompanyPreview from '../screens/user/CompanyPreview';
import ButtonNavigation from './bottomNavigation/buttomNavigation.routes';

import { FilterListProviderHook } from '../context';
import ScheduleForm from '../screens/authentication/scheduleForm';

const Stack = createStackNavigator();

function UserRoutes() {
  return (
    <FilterListProviderHook>
      <Stack.Navigator initialRouteName="InitialRouteUser">
        <Stack.Screen
          name="InitialRouteUser"
          component={ButtonNavigation}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="FilterList"
          component={FilterList}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="CompanyPreview"
          component={CompanyPreview}
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
    </FilterListProviderHook>
  );
}

export default UserRoutes;
