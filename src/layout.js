//import libs
import Expo, { LinearGradient } from 'expo';
import React from 'react';
import {
  View, Title, Icon, Button,
  Container, Header, Content, Footer,
  Left, Body,
  } from 'native-base';
import { Alert, Platform } from 'react-native';
import styles from './styles';
import Map from './screens/map';

//definição de components
export default class Layout extends React.Component{

// definição de ação botão map
  onFingerClick = function(){
    return <Map/>;
    }
// definição de ação botão Menu
  onMenuClick = function(){
    Alert.alert('Abre Menu');
  }

//conteudo gerado na tela
  render() {
    return (
      <Container>
        <LinearGradient
               colors={['#efe','#898']}
               style={{flex:1}}>
               //statusbar transparent
          <View style={{ height:Expo.Constants.statusBarHeight }} />

              <Header>
                  <Left>
                    <Button transparent onPress={this.onMenuClick}>
                        <Icon name={'menu'}/>
                    </Button></Left>
                  <Body><Title>Reboot</Title></Body>
              </Header>

          <Content style={{padding:8}}></Content>

            <Footer>
              <Left>
                <Button transparent onPress={this.onFingerClick}>
                  <Icon name={'map'}/>
                </Button>
              </Left>
            </Footer>
        </LinearGradient>
      </Container>
    );
  }
}
