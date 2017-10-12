//libs utilizadas
import {
  Button, Header, Icon,
  Title, Left, Body
} from 'native-base';
import styles from './styles';
import { StyleSheet, Alert } from 'react-native';
import React from 'react';
//criando component
export default class Cabecalho extends React.Component{
//renderizando Cabecalho, a barra superior do App
//proximo bransh deseja-se a listagem de paginas* no icone de menu superior
  render(){
    return (
        <Header style={styles.header}>
            <Left>
              <Button style={styles.menu}
                    onPress={this.onMenuClick}>
                  <Icon name={'menu'}/>
              </Button>
            </Left>
            <Body><Title style={styles.headerTexto}>HORT-UP</Title></Body>
        </Header>
    )
  }
}
