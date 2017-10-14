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
              <Text style={{fontSize:12}}>
                  Aqui deve aparecer a lista de hortas cadastradas.
              </Text>
          </View>
        <Rodape navigation={this.props.navigation}/>
    </Container>
  );
  }
}
