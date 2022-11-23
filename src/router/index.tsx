import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthenticationNavigator from './main.routes';
import UserNavigator from './user.routes';
import {useAuthentication} from '../context/Authentication';

export default function Navigation() {
  const {logged} = useAuthentication();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        {logged ? <UserNavigator /> : <AuthenticationNavigator />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
