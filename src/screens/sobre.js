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
              <Text style={{
                    fontSize:12,
                    alignItems:'center',
                    justifyContent:'center',
                    color:'gray'
                }}>
                  Este aplicativo, esta em desenvolvimento, atendendno os requisitos
                  da iniciativa Hackathon 2ª edição, promovida pela Embrapa.
              </Text>
         </View>
    </Container>
  );
  }
}
