import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from './src/Routes/Home';
import Principal from './src/Routes/Principal';
import Escolha from './src/Routes/Escolha';


const Navegador = createStackNavigator({
  Home: {
    screen: Home
  },
  Principal: {
    screen: Principal
  },
  Escolha: {
    screen: Escolha

  }
}
  , {
    headerMode: 'float', //float, none, screen
    cardStyle: { backgroundColor: 'transparent' },
  },
);


const AppContainer = createAppContainer(Navegador);
export default AppContainer;