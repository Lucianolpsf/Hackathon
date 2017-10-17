import expo, { Camera, Permissions } from 'expo';
import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './../components/styles';
import {  Container, Content, Body } from 'native-base';
import Rodape from './../components/footer';

export default class Plantio extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
    };
  }
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  render(){
    const { hasCameraPermission } = this.state;
    return (
    <Container>

        <Camera style={{ flex: 1}} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 10, marginBottom: 10, color: 'white' }}>
                  Mudar
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>

        <Rodape navigation={this.props.navigation}/>
    </Container>
  );
  }
}
