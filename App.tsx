import React from 'react';
import {StatusBar, View} from 'react-native';
import {AuthenticationProviderHook} from './src/context';

import Navigation from './src/router';

import themes from './src/themes/themes';

const App = () => {
  return (
    <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={themes.color.primary}
      />
      <AuthenticationProviderHook>
        <Navigation />
      </AuthenticationProviderHook>
    </View>
  );
};

export default App;
