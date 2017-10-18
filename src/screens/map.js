import Expo,{ MapView, Location, Constants, Permissions, SecureStore, AppLoading } from 'expo';
import {
  View, Title, Icon, Button,
  Container, Header, Content, Footer,
  Left, Body,
  Form, Input, Item, Label
} from 'native-base';
import React from 'react';
import styles from './../components/styles';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { request, GraphQLClient } from 'graphql-request';
import Rodape from './../components/footer';

export default class Map extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hortas:[],
      location: null,
      user:null
    }
    this.onPress = this.onPress.bind(this);
  }
//função dos botões
onPress = function(){
  const { location } = this.state;
}

async componentWillMount(){
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
      errorMessage: 'Permissão negada!',
    });
  }
  let location = await Location.getCurrentPositionAsync({});
  this.setState({ location });

  var that = this;
  await SecureStore.getItemAsync('loginToken').then(function(data){
    const client = new GraphQLClient('https://api.graph.cool/simple/v1/cj8dd65mt0h4y0124pcn0z290', {
      headers: {
        Authorization: 'Bearer '+data,
      },
    });
    var query = `
    query {
      user {
        id
        email
        hortas {
          id
          nome
          coords
          hortalicas {
            nome
            tipoHortalicas {
              nome
            }
          }
        }
      }
    }
    `
    client.request(query)
    .then(data => {
      that.setState({
        hortas:data.user.hortas,
        loading:false
      })
    })
    .catch(function(res){
      console.log(res);
    });
  });

}
//conteudo gerado na tela
render() {
  if (!this.state.location) {
    return (
      <AppLoading />
    );
  }
  if (this.state.loading) {
    return (
      <AppLoading />
    );
  }
  const { hortas, location } = this.state;
  const listMarkers = hortas.map(function(horta){
    return(
      <MapView.Marker
        key={horta.id}
        coordinate={{latitude:horta.coords.latitude,longitude:horta.coords.longitude}}
        title={horta.nome}
       />
    );
  });
  return (
    <Container>

      <Content>
      <MapView
        style={{
          flex:1,
          height:500
        }}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0800,
          longitudeDelta: 0.0800,
        }}>
          {listMarkers}
       </MapView>
        </Content>
       <Rodape navigation={this.props.navigation}/>
    </Container>
  );
 }
 }
