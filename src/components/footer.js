import Expo, { AppLoading } from 'expo';
import {
  Button, Container, Header,
  Content, Footer, Left, Body
} from 'native-base';
import styles from './styles';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

//criando o component
export default class Rodape extends React.Component{
//renderizando botoes personalizados como Rodape
  constructor(props){
    super(props);
  }
  onNavClick = function(route){
    this.props.navigation.navigate(route);
  }
  render(){
    const { navigation } = this.props;
    return (
          <Footer style={styles.footer}>
                  <TouchableOpacity onPress={this.onNavClick.bind(this,'Tab1')} style={styles.button}>
                        <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={require('./../images/plantio.png')}
                        />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.onNavClick.bind(this,'Tab2')} style={styles.button}>
                        <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={require('./../images/camera.png')}
                        />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.onNavClick.bind(this,'Tab3')} style={styles.button}>
                        <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={require('./../images/rank.png')}
                        />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.onNavClick.bind(this,'Tab4')} style={styles.button}>
                        <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={require('./../images/map.png')}
                        />
                  </TouchableOpacity>
           </Footer>
      )
    }
}
