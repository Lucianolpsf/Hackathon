//import libs
import Expo from 'expo';
import React from 'react';
import { Text, View } from 'react-native';

import {TabNavigator} from 'react-navigation';
import Rank from './screens/rank';
import Map from './screens/map';
import Camera from './screens/camera';
import Plantio from './screens/plantio';

//lista as telas e as apresenta como botoes
var Navegacao = TabNavigator({
    Tab1: {screen: Plantio},
    Tab2: {screen:Camera},
    Tab3: {screen:Rank},
    Tab4: {screen:Map}
}, {
    tabBarPosition:'bottom',
    swipEnabled:true,
   }
);
Navegacao.navigationOptions ={
title: "Tab exambple"
};
export default Navegacao;
