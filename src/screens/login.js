import Expo, { LinearGradient } from 'expo';
import React from 'react';
import {
  View, Text, Title,  Icon, Button,
  Container, Header, Content, Footer,
  Left, Right, Body, Form, Input,
  Item, Label
} from 'native-base';
import { Alert } from 'react-native';

export default class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      email:'',
      senha:'',
      errorMessage: null,
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress = function(){
    const { email, senha } = this.state;
  }
  render() {
    return (
      <Container>
        <LinearGradient
               colors={['#efe','#898']}
               style={{flex:1}}>

          <View style={{ height:Expo.Constants.statusBarHeight }} />

              <Header>
                  <Body><Title>Reboot</Title></Body>
              </Header>

              <Content style={{ padding:8 }}>
              <Form>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input keyboardType={'email-address'} onChange={(value)=>this.setState({email:value})} value={this.state.email}></Input>
                </Item>
                <Item floatingLabel>
                  <Label>Senha</Label>
                  <Input keyboardType={'numeric'} secureTextEntry={true} onChange={(value)=>this.setState({senha:value})} value={this.state.senha}></Input>
                </Item>
              </Form>
              <Button onPress={this.onPress} block><Text>Cadastre-se</Text></Button>


          </Content>

        </LinearGradient>
      </Container>
    );
  }
}
