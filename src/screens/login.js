import Expo, { AppLoading, LinearGradient, Notifications, Permissions, BlurView } from 'expo';
import React from 'react';
import { Alert, Platform, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { request } from 'graphql-request';
import {
  Thumbnail,
  Container,
  Content,
  Text, Button,
  Form, Body, Left, Right,
  InputGroup, Input, Item,
  View, Title,
  Grid, Col, Spinner,
  Footer, FooterTab, Label
} from 'native-base';

class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      passw: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = function(){

    fields = {
      email: this.state.email,
      passw: this.state.passw
    };

    if (fields.email == '') {
      Alert.alert('Login','Digite seu email');
    } else if (fields.passw == '') {
      Alert.alert('Login','Digite sua senha');
    } else {
      const variables = {
        email: fields.email,
        password: fields.passw
      };
      var query = `
        mutation login ($email: String!,$password: String!) {
          signinUser(email:{
            email:$email,
            password:$password
          }){
            token
          }
        }
      `
      request('https://api.graph.cool/simple/v1/cj8dd65mt0h4y0124pcn0z290', query, variables).then(data => {
        if (data) console.log(data);
      })
    }
  }
  render(){

    return(

        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
        <Container style={{
            flexDirection:'row',
            height:'100%'
          }}>
          <Content style={{padding:10}}>
          <View style={{ height:Expo.Constants.statusBarHeight }} />
            <Body>
            <Title>Login</Title>
            </Body>
            <View style={{marginTop:10}} />
            <View style={styles.container}>
            <Image
            style={styles.logotype}
            resizeMode="contain"
            source={require('./../images/logotype.png')}
            />
            </View>
            <BlurView style={{
                padding:10,
                borderRadius:6
            }}>

            <Form>
              <Item floatingLabel style={{
                  marginLeft:0
                }}>
                <Label style={{
                    color:'white'
                  }}>Email</Label>
                <Input
                  keyboardType="email-address"
                  selectTextOnFocus={true}
                  autoCorrect={false}
                  autoFocus={false}
                  returnKeyType={'next'}
                  autoCapitalize={'none'}
                  onChangeText={(email) => this.setState({email})}
                  value={this.props.email}
                  style={{
                    color:'white'
                  }}
                />
              </Item>
              <Item floatingLabel style={{
                  marginLeft:0
                }}>
                <Label style={{
                    color:'white'
                  }}>Senha</Label>
                  <Input
                    selectTextOnFocus={true}
                    returnKeyType={'done'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    autoFocus={false}
                    secureTextEntry={true}
                    onChangeText={(passw) => this.setState({passw})}
                    style={{
                      color:'white'
                    }}
                  />
              </Item>
              <View style={{marginTop:10}} />
              <Button block primary onPress={this.onSubmit}>
                <Icon color={'white'} size={24} name={'sign-in'}/>
                <Text>ENTRAR</Text>
              </Button>
              <View style={{marginTop:10}} />
              <Grid>
                <Col>
                  <Button transparent small onPress={()=>navigate('Password')}>
                    <Text style={{color:'white'}} >NOVA SENHA</Text>
                  </Button>
                </Col>
                <Col>
                  <Button transparent small onPress={()=>navigate('Register')}>
                    <Text style={{color:'white'}} >NOVO USUÁRIO</Text>
                  </Button>
                </Col>
              </Grid>
            </Form>
          </BlurView>
         </Content>
        </Container>
        </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(000, 95, 000)'
  },
  logotype:{
    height:100,
    width:100,
  }
});

export default LoginScreen;
