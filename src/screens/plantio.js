import expo, { LinearGradient } from 'expo';
import React from 'react';
import { Text, Image, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './../components/styles';
import {  Container, Content, Body } from 'native-base';
import Rodape from './../components/footer';
import Cabecalho from './../components/header';


export default class Plantio extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
    <Container>

        <View style={{ height:Expo.Constants.statusBarHeight }} />

        <Cabecalho/>

          <View style={styles.view}>
            <TouchableOpacity style={styles.button2}>
                  <Text style={styles.texto}> Comunidade </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
                  <Text style={styles.texto}> Educacional </Text>
            </TouchableOpacity>
          </View>
        <Rodape navigation={this.props.navigation}/>
    </Container>
  );
  }
}
