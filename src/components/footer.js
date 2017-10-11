//import de lib utilizadas
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
  render(){
    return (
          <Footer style={styles.footer}>
                  <TouchableOpacity style={styles.button}>
                        <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={require('./../images/plantio.png')}
                        />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button}>
                        <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={require('./../images/camera.png')}
                        />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button}>
                        <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={require('./../images/rank.png')}
                        />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button}>
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
