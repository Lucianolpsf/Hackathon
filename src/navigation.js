//import libs
import Expo from 'expo';
import React from 'react';
import { TabNavigator } from 'react-navigation';
import RankNav from './screens/rankNav';
import Map from './screens/map';
import Camera from './screens/camera';
import Plantio from './screens/plantio';
import Login from './screens/login';
import Cadastro from './screens/cadastro';

var Navegacao = TabNavigator({
  Login: {screen: Login },
  Cadastro: {screen: Cadastro },
  Tab1: {screen: Plantio},
  Tab2: {screen:RankNav},
  Tab3: {screen:Map},
  }, {
    initialRouteName:'Login',
    navigationOptions:{
      tabBarVisible:false
    }
  }
);

export default Navegacao;
