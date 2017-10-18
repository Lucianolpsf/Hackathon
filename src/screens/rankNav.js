//import libs
import Expo from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import RankHortas from './rankHortas';
//import RankHortalicas from './rankHortalicas';
//import RankCamera from './rankCamera';

var RankNav = StackNavigator({
  Hortas: {screen:RankHortas},
  //Hortalicas: { screen: RankHortalicas },
  //Camera: { screen: RankCamera }
  }, {
    initialRouteName:'Hortas',
    headerMode:'none'
  }
);

export default RankNav;
