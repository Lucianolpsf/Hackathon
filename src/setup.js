//import libs
import Expo from 'expo';
import React from 'react';

import Navegacao from './navigation';
//construção de components
export default class AppSetup extends React.Component {
//renderiza na tela as paginas para Navegacao do aplicativo
render(){
  return <Navegacao/>
}
}
