import React from 'react';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../screens/user/Home';
import SchedulesList from '../../screens/user/SchedulesList';
import Profile from '../../screens/user/Profile';

import Icon from 'react-native-vector-icons/Ionicons';

import themes from '../../themes/themes';
import { screensName } from '../constants';
import { ContainerIcon, TextOption } from './styled';

export interface HandleIconAndColorType {
  iconName: string;
  iconColor: string;
  backgroundColor: string;
}

const Tab = createBottomTabNavigator();

function handleIconAndColor(
  route: RouteProp<ParamListBase, string>,
  focused: boolean
): HandleIconAndColorType {
  let iconName = 'hourglass-empty';
  let iconColor = themes.color.primary;
  let backgroundColor = themes.color.white;

  switch (route.name) {
    case screensName.Home: {
      iconName = focused ? 'home' : 'home-outline';
      iconColor = focused ? themes.color.white : themes.color.primary;
      backgroundColor = focused ? themes.color.primary : themes.color.white;
      break;
    }
    case screensName.Schedule: {
      iconName = focused ? 'ios-list-circle-sharp' : 'ios-list-circle-outline';
      iconColor = focused ? themes.color.white : themes.color.primary;
      backgroundColor = focused ? themes.color.primary : themes.color.white;
      break;
    }
    case screensName.Profile: {
      iconName = focused ? 'person-circle' : 'person-circle-outline';
      iconColor = focused ? themes.color.white : themes.color.primary;
      backgroundColor = focused ? themes.color.primary : themes.color.white;
      break;
    }
  }

  return {
    iconName,
    iconColor,
    backgroundColor
  };
}

function ButtonNavigation() {
  const iconSize = 20;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const getIconAndColor = handleIconAndColor(route, focused);
          return (
            <ContainerIcon color={getIconAndColor.backgroundColor}>
              <Icon
                name={getIconAndColor.iconName}
                size={iconSize}
                color={getIconAndColor.iconColor}
              />
              <TextOption focused={focused} color={getIconAndColor.iconColor}>
                {route.name}
              </TextOption>
            </ContainerIcon>
          );
        },
        tabBarLabel: ({ focused }) => <TextOption focused={focused}></TextOption>,
        tabBarStyle: {
          backgroundColor: themes.color.white,
          height: 55,
          marginBottom: 10,
          marginHorizontal: 16,
          borderRadius: 15
        }
      })}
      initialRouteName="Login">
      <Tab.Screen
        name={screensName.Home}
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name={screensName.Schedule}
        component={SchedulesList}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name={screensName.Profile}
        component={Profile}
        options={{
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

export default ButtonNavigation;
