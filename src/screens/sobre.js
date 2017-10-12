import Expo from 'expo';
import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import styles from './../components/styles';
import {  Container, Content, Body } from 'native-base';
import Rodape from './../components/footer';
import Cabecalho from './../components/header';


export default class Sobre extends React.Component {

  render(){
    return (
    <Container>
      <View style={{ height:Expo.Constants.statusBarHeight }} />
        <Cabecalho/>
          <View style={styles.view}>
          <Image
          style={styles.logotype}
          resizeMode="contain"
          source={require('./../images/logotype.png')}
          />
              <Text style={{fontSize:20}}>
                  Pagina sobre
              </Text>
         </View>
    </Container>
  );
  }
}
