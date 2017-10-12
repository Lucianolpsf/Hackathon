//import de libs
import React from 'react';
import { StyleSheet } from 'react-native';

//aqui construimos todos os estilos necessarios em varias partes do app e assim
//economizamos codigos ao concentralos apenas aqui e não necessitando de repetilos
//em outras partes do codigo.
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#CEF6F5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  view: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    padding:8
  },

  texto: {
    color: 'white',
    fontSize:14,
    fontWeight:'bold'
  },

  headerTexto: {
    color: 'white',
    fontSize:30,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center'

  },

  button:{
    backgroundColor:'transparent',
    borderColor:'transparent',
    height:'100%',
    width:'25%',
    marginBottom:8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image:{
    height:30,
    width:30,
  },

  logotype:{
    height:100,
    width:100,
  },

  button2:{
    backgroundColor:'#1fb2a8',
    borderWidth:1,
    borderRadius:4,
    borderColor:'darkgreen',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20
  },

  footer:{
    backgroundColor: '#1fb2a8',

  },

  header:{
    backgroundColor: '#1fb2a8'
  },

  menu:{
    backgroundColor: '#2E666D'
  }

});

export default styles;
