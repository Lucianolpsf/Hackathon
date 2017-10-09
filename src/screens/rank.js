import expo from 'expo';
import React from 'react';
import { Text,
         View,
         Button,
         Image} from 'react-native';

export default class Rank extends React.Component{
  static navigationOptions={
    tabBarLabel: 'Rank'
  }
  render(){
    return <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>
    <Text style={{fontSize:12}}>
    Aqui deve aparecer a lista de hortas cadastradas.
    </Text>
    </View>
  }
}
