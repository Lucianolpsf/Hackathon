import expo, { LinearGradient, SecureStore } from 'expo';
import React from 'react';
import { Text, Image, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './../components/styles';
import {  Container, Content, Body, Icon, Button } from 'native-base';
import Rodape from './../components/footer';
import { request, GraphQLClient } from 'graphql-request';

class Plantio extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tipoHortalicas:[],
      loading:true,
      hortalicas:[]
    };
  }
  async componentWillMount(){
    var that = this;
    await SecureStore.getItemAsync('loginToken').then(function(data){
      const client = new GraphQLClient('https://api.graph.cool/simple/v1/cj8dd65mt0h4y0124pcn0z290', {
        headers: {
          Authorization: 'Bearer '+data,
        },
      });
      var query = `
      query {
        allTipoHortalicases(orderBy:nome_ASC) {
          id
          nome,
          hortalicas {
            id
            nome
          }
        }
      }
      `
      client.request(query)
      .then(data => {
        that.setState({
          tipoHortalicas:data.allTipoHortalicases,
          loading:false
        })
      })
      .catch(function(res){
        console.log(res);
      });
    });
  }
  render(){
    const { navigate } = this.props.navigation
    const listHortalicas = this.state.hortalicas.map(function(hortalica){
      return(
        <View style={styles.button2} key={hortalica.id}>
          <Text style={styles.texto}>{hortalica.nome}</Text>
        </View>
      );
    });
    const listTipos = this.state.tipoHortalicas.map(function(tipo){
      return(
        <TouchableOpacity onPress={()=>that.setState({hortalicas:tipo.hortalicas})} key={tipo.id} style={styles.button2}>
          <Text style={styles.texto}> Hortaliças {tipo.nome} </Text>
        </TouchableOpacity>
      );
    });
    var that = this;
    return (
      <Container>
        <View style={styles.view}>
          {this.state.loading && <View><Text>Carregando...</Text></View>}
          {this.state.hortalicas.length == 0 && listTipos }
          {this.state.hortalicas.length > 0 && listHortalicas }
          {this.state.hortalicas.length > 0 &&
            <TouchableOpacity onPress={()=>this.setState({hortalicas:[]})} style={styles.button2}>
              <Text style={styles.texto}>Voltar</Text>
            </TouchableOpacity>
          }
        </View>
        <Rodape navigation={this.props.navigation}/>

      </Container>
    );
  }
}
export default Plantio;
