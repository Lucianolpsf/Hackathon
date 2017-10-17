//import libs
import Expo, { AppLoading } from 'expo';
import React from 'react';
import Cabecalho from './components/header';
import Navegacao from './navigation';
import LoginScreen from './screens/login';
//construção de components
export default class AppSetup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fontLoaded:false
    }
  }
  async _cacheResourcesAsync() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
      'FontAwesome': require('native-base/Fonts/FontAwesome.ttf')
    });
  }
  //renderiza na tela as paginas para Navegacao do aplicativo
  render(){
    if (!this.state.fontLoaded) {
      return (
        // Mostra tela de carregando do App antes do carregamento das fontes
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ fontLoaded: true })}
          onError={console.warn}
        />
      );
    }
    return <LoginScreen/>
}
}
