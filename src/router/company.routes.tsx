import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { FilterListProviderHook } from '../context';

import HomeCompany from '../screens/company/Home';
import SchedulePreview from '../screens/company/SchedulePreview';

const Stack = createStackNavigator();

function CompanyRoutes() {
  return (
    <FilterListProviderHook>
      <Stack.Navigator initialRouteName="HomeCompany">
        <Stack.Screen
          name="HomeCompany"
          component={HomeCompany}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="SchedulePreview"
          component={SchedulePreview}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </FilterListProviderHook>
  );
}

export default CompanyRoutes;
