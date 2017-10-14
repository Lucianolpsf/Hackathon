import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  Container,
          Button,
          Header,
          Left,
          Body,
          Title,
          Content,
          Icon,
          Drawer
       } from 'native-base';
import styles from './../components/styles';
import Sobre from './sobre';

export default class Menu extends React.Component {

  render() {
    const { navigation } = this.props;
    return (
          <Container>
             <Header style={{
              backgroundColor: '#1fb2a8'
            }}>

              <Body><Title>SideBar</Title></Body>
            </Header>
              <Content style={{
                backgroundColor: 'white'
              }}>

              <View style={styles.view}>

                <Text style={{
                   fontSize:20,
                   alignItems:'center'
                }}>
                Aqui devemos chamar cada pagina referente a seu botao </Text>

                <Button style={styles.button2}>
                        <Text style={styles.texto }> Meu perfil </Text>
                </Button>

                <Button style={styles.button2}>
                      <Text style={styles.texto }> Sobre </Text>
                </Button>
              </View>
              </Content>
          </Container>
    );
  }
}
