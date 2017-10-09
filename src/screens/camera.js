import expo from 'expo';
import React from 'react';
import { Text,
         View,
         Button,
         Image} from 'react-native';

export default class Camera extends React.Component{
  static navigationOptions={
    tabBarLabel: 'Camera'
  }
  render(){
    return <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>
    <Text style={{fontSize:12}}>
    Aqui devemos abrir a camera para fotografa nossa horta e salvar fotografia.
    </Text>
    </View>
  }
}
