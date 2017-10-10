import Expo,{ MapView, Location, Constants, Permissions, LinearGradient } from 'expo';
import {
  View, Title, Icon, Button,
  Container, Header, Content, Footer,
  Left, Body,
  Form, Input, Item, Label
} from 'native-base';
import React from 'react';
import { Platform, Alert, Image } from 'react-native';

export default class Map extends React.Component{
  constructor(props) {
      super(props);
    this.state = {
      location: null,
    }
    this.onPress = this.onPress.bind(this);
  }
//função dos botões
  onMenuClick = function(){
    Alert.alert('Abre Menu');
  }

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

static navigationOptions = {
  tabBarLabel: 'Map'
}
//conteudo gerado na tela
render() {
  return (
    <Container>
      <LinearGradient
             colors={['#efe','#898']}
             style={{flex:1}}>

        <View style={{ height:Expo.Constants.statusBarHeight }} />

            <Header>
                <Left>
                  <Button transparent onPress={this.onMenuClick}>
                      <Icon name={'menu'}/>
                  </Button></Left>
                <Body><Title>Reboot</Title></Body>
            </Header>

            <MapView style={{
              flex:1
            }}>
              {this.state.location &&
                <MapView.Marker
                  coordinate={{latitude:this.state.location.coords.latitude,longitude:this.state.location.coords.longitude}}
                  title={'Sua Localização'}
                />
              }
            </MapView>

        <Content style={{padding:8}}></Content>

      </LinearGradient>
    </Container>
  );
 }
 }
