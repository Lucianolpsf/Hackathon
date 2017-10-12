//import libs
import Expo from 'expo';
import React from 'react';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import Rank from './screens/rank';
import Map from './screens/map';
import Camera from './screens/camera';
import Plantio from './screens/plantio';
import Sobre from './screens/sobre';
import Cabecalho from './components/footer';


var Navegacao = TabNavigator({
    Tab1: {screen: Plantio},
    Tab2: {screen:Camera},
    Tab3: {screen:Rank},
    Tab4: {screen:Map},
    },
    {
    navigationOptions:{
      tabBarVisible:false
    }
   }
);


Navegacao.navigationOptions ={
title: "Tab exambple"
};

export default Navegacao;
