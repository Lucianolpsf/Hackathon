import expo from 'expo';
import React from 'react';
import { Text,
         View,
         Button,
         Image} from 'react-native';

export default class Plantio extends React.Component{
  static navigationOptions={
    tabBarLabel: 'Plantio'
  }
  render(){
    return <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>
    <Text style={{fontSize:12}}>
    esta pagina lista 5 hortaliças do tipo raiz e 5 do tipo folhosas.
    </Text>
    </View>
  }
}
