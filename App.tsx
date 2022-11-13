import React from 'react';
import {StatusBar, View} from 'react-native';

import Navigation from './src/router';

import themes from './src/themes/themes';

const App = () => {
  function dale(item: string) {
    console.log('entoru aqui');
    console.log(item);
  }

  return (
    <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={themes.color.primary}
      />
      <Navigation />
    </View>
  );
};

export default App;
