import Expo,{ MapView, Location, Constants, Permissions } from 'expo';
import {
  View, Title, Icon, Button,
  Container, Header, Content, Footer,
  Left, Body,
  Form, Input, Item, Label
} from 'native-base';
import React from 'react';
import styles from './../components/styles';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
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

        <MapView
              style={{
                      flex:1,
                      height:'100%'
            }}
              initialRegion={{
                latitude: -15.871842,
                longitude: -47.9920427,
                latitudeDelta: 0.4500,
                longitudeDelta: 0.3800,
            }}>

              {this.state.location  &&
                <MapView.Marker
                  coordinate={{latitude:this.state.location.coords.latitude,
                               longitude:this.state.location.coords.longitude,

          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
                             }}

                  title={'Sua Localização'}
                />
              }
       </MapView>

        <Rodape navigation={this.props.navigation}/>

    </Container>
  );
 }
 }
