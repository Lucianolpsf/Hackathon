import expo, { LinearGradient, SecureStore, AppLoading } from 'expo';
import React from 'react';
import { Text, Image, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './../components/styles';
import {
  Container, Content, Body, Icon, Button,
  List, ListItem
} from 'native-base';
import Rodape from './../components/footer';
import { request, GraphQLClient } from 'graphql-request';

class Rank extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loading:true,
      user:false
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
        user {
          id
          email
          hortas {
            id
            nome
            coords
            hortalicas{
              nome
              tipoHortalicas{
                nome
              }
            }
          }
        }
      }
      `
      client.request(query)
      .then(data => {
        that.setState({
          user:data.user,
          loading:false
        })
      })
      .catch(function(res){
        console.log(res);
      });
    });
  }
  render(){
    if (this.state.loading) {
      return (
        <AppLoading />
      );
    }
    const { navigate } = this.props.navigation;
    const { user } = this.state;
    var that = this;
    return (
      <Container>
        <View style={{ height:Expo.Constants.statusBarHeight }} />
        <Content>
          {this.state.loading && <View><Text>Carregando...</Text></View>}
          <List>
            {user.hortas.map(function(horta){
              return(
                <ListItem key={horta.id}>
                  <Text>{horta.nome}</Text>
                </ListItem>
              );
            })}
          </List>
        </Content>
        <Rodape navigation={this.props.navigation}/>

      </Container>
    );
  }
}
export default Rank;
