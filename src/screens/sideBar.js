import Expo, { ImagePicker }from 'expo';
import React from 'react';
import {  StyleSheet, Text, View, Image } from 'react-native';
import {  Container,
          Header,
          Left,
          Button,
          Body,
          Title,
          Content,
          Icon,
          Drawer,
          Right
       } from 'native-base';
import styles from './../components/styles';
import Sobre from './sobre';

export default class Menu extends React.Component {

state={
  image: null,
};

  render() {
    let { image } = this.state;

    return (
          <Container>
            <Content style={{
                backgroundColor: '#f6fffe'
              }}>
        <View style={{ height:Expo.Constants.statusBarHeight }} />
              <View style={styles.viewSideBar}>

              {image &&
                <Image
                    source={{ uri: image }}

                    style={{ width: '100%',
                             height: 200,
                             borderRadius:2,
                             marginBottom: 10
                           }}/>
                }

                  <Button
                    style={styles.button2}
                    onPress={this._pickImage}>
                          <Text style={styles.texto}> Selecione uma foto </Text>
                  </Button>

                <Button style={styles.button2}
                        >
                      <Text style={styles.texto }> Sobre </Text>
                </Button>
              </View>
              </Content>
          </Container>
    );
  }

  _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      console.log(result);

      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    };

}
