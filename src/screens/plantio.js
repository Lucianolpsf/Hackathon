import expo, { LinearGradient } from 'expo';
import React from 'react';
import { Text, Image, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './../components/styles';
import {  Container, Content, Body } from 'native-base';
import Rodape from './../components/footer';

export default class Plantio extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
    <Container>
      <View style={styles.view}>

            <Text style={{
              alignItems:'center',
              justifyContent: 'center',
              fontSize:20
            }}>
                Deseja-se nesta pagina, buscar as hortaliças
                de cada tipo ao precionar os botões e mostralas na tela
            </Text>

            <TouchableOpacity style={styles.button2}>
                  <Text style={styles.texto}> Horaliças Flores </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
                  <Text style={styles.texto}> Horaliças Folhosas </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
                  <Text style={styles.texto}> Horaliças Raízes </Text>
            </TouchableOpacity>
        </View>
      <Rodape navigation={this.props.navigation}/>

    </Container>
  );
  }
}
