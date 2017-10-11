import Expo,{ MapView, Location, Constants, Permissions, LinearGradient } from 'expo';
import {
  View, Title, Icon, Button,
  Container, Header, Content, Footer,
  Left, Body,
  Form, Input, Item, Label
} from 'native-base';
import React from 'react';
import styles from './../components/styles';
import { Platform, Alert, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Cabecalho from './../components/header';
import Rodape from './../components/footer';

export default class Map extends React.Component{
  constructor(props) {
      super(props);
    this.state = {
      location: null,
    }
    this.onPress = this.onPress.bind(this);
  }
//função dos botões
onPress = function(){
  const { location } = this.state;
  console.log(location);
}

componentWillMount(){
  if (Platform.OS === 'android' && !Constants.isDevice) {
    this.setState({
      errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
    });
  } else {
    this._getLocationAsync();
  }
}
_getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    this.setState({
      errorMessage: 'Permission to access location was denied',
    });
  }

  let location = await Location.getCurrentPositionAsync({});
  this.setState({ location });
}

//conteudo gerado na tela
render() {
  return (
    <Container>

        <View style={{ height:Expo.Constants.statusBarHeight }} />

        <Cabecalho/>

            <MapView style={{
              flex:1,
              height:'100%'
            }}>
              {this.state.location &&
                <MapView.Marker
                  coordinate={{latitude:this.state.location.coords.latitude,longitude:this.state.location.coords.longitude}}
                  title={'Sua Localização'}
                />
              }
            </MapView>

        <Rodape/>

    </Container>
  );
 }
 }
