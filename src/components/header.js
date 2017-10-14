//libs utilizadas
import Expo from 'expo';
import {
  Button, Header, Icon, Drawer,
  Title, Left, Body
} from 'native-base';
import styles from './styles';
import { StyleSheet, Alert, View } from 'react-native';
import React from 'react';
import SideBar from './../screens/sideBar';
import Navegacao from './../navigation';
import Rodape from './footer';
//criando component
export default class Cabecalho extends React.Component{
//renderizando Cabecalho, a barra superior do App
//proximo bransh deseja-se a listagem de paginas* no icone de menu superior
constructor(props){
  super(props);
}
closeDrawer = () => {
     this.drawer._root.close()
   };
   openDrawer = () => {
     this.drawer._root.open()
   };

  render(){
    return (
    <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<SideBar navigator={this.navigator} />}
      onClose={() => this.closeDrawer()} >

        <View style={{ height:Expo.Constants.statusBarHeight }} />
            <Header style={styles.header}>
                <Left>
                  <Button style={styles.menu}
                        onPress={this.openDrawer}>
                      <Icon name={'menu'}/>
                  </Button>
                </Left>
                <Body><Title style={styles.headerTexto}>HORT-UP</Title></Body>
            </Header>
          <Navegacao/>
    </Drawer>
    )
  }
}
