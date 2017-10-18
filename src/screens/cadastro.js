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

class CadastroScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      passw: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = function(){
    var that = this;
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
        mutation cadastro ($email: String!,$password: String!) {
          createUser(authProvider:{
            email:{
              email:$email,
              password:$password
            }
          }){
            id
          }
        }
      `
      request('https://api.graph.cool/simple/v1/cj8dd65mt0h4y0124pcn0z290', query, variables)
      .then(data => {
        if (data) {
          Alert.alert('Sucesso','Você se cadastrou com sucesso, faça o login.');
          that.props.navigation.navigate('Login');
        }
      })
      .catch(function(res){
        Alert.alert('Erro','Email já cadastrado.');
      });
    }
  }
  render(){
    const { navigate } = this.props.navigation;
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
            <Title>Cadastro</Title>
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
                <Text>Cadastrar-se</Text>
              </Button>
              <View style={{marginTop:10}} />
              <Grid>
                <Col>
                  <Button transparent small onPress={()=>navigate('Login')}>
                    <Text style={{color:'white'}} >Login</Text>
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
    backgroundColor: '#1fb2a8'
  },
  logotype:{
    height:100,
    width:100,
  }
});

export default CadastroScreen;
