import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthenticationNavigator from './main.routes';
import UserNavigator from './user.routes';
import { useAuthentication } from '../context/Authentication';

export default function Navigation() {
  const { loggedUser, loggedCompany } = useAuthentication();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {loggedUser ? (
          <UserNavigator />
        ) : loggedCompany ? (
          <AuthenticationNavigator />
        ) : (
          <AuthenticationNavigator />
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
