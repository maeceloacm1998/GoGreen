import React from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/user/Home';
import SchedulesList from '../../screens/user/SchedulesList';
import Profile from '../../screens/user/Profile';

import Icon from 'react-native-vector-icons/Ionicons';
import themes from '../../themes/themes';
import {screensName} from '../constants';
import {TextOption} from './styled';

export type HandleIconAndColorType = {
  iconName: string;
  color: string;
};

const Tab = createBottomTabNavigator();

function handleIconAndColor(
  route: RouteProp<ParamListBase, string>,
  focused: boolean,
): HandleIconAndColorType {
  let iconName = 'hourglass-empty';
  let color = themes.color.primary;

  switch (route.name) {
    case screensName.Home: {
      iconName = focused ? 'home' : 'home-outline';
      color = focused ? themes.color.primary_dark : themes.color.primary;
      break;
    }
    case screensName.Schedule: {
      iconName = focused ? 'ios-list-circle-sharp' : 'ios-list-circle-outline';
      color = focused ? themes.color.primary_dark : themes.color.primary;
      break;
    }
    case screensName.Profile: {
      iconName = focused ? 'person-circle' : 'person-circle-outline';
      color = focused ? themes.color.primary_dark : themes.color.primary;
      break;
    }
  }

  return {
    iconName,
    color,
  };
}

function ButtonNavigation() {
  const iconSize = 23;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let getIconAndColor = handleIconAndColor(route, focused);
          return (
            <Icon
              name={getIconAndColor.iconName}
              size={iconSize}
              color={getIconAndColor.color}
            />
          );
        },
        tabBarLabel: ({focused}) => (
          <TextOption focused={focused}>{route.name}</TextOption>
        ),
        tabBarStyle: {
          backgroundColor: themes.color.white,
          height: 57,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        },
        tabBarItemStyle: {
          margin: 5,
        },
        tabBarActiveTintColor: themes.color.primary_dark,
        tabBarInactiveTintColor: themes.color.primary,
      })}>
      <Tab.Screen
        name={screensName.Home}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={screensName.Schedule}
        component={SchedulesList}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={screensName.Profile}
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default ButtonNavigation;
