import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
function PlayerCard (props){
   return(
     <View style= {Styles.column}>
       <Text style={Styles.view}>{props.Playername}</Text>
       <Image
    source={{
      uri: props.choice.uri
    }}
    resizeMode="contain"
    style={Styles.choiceImage}
  />
       <Text>{props.choice.name}</Text>
     </View>
   );
}
const Styles= StyleSheet.create({
    column:{
      flex:1,
      flexDirection: 'column',
      justifyContent:"center",
      alignItems:"center",
    },
    view:{
      fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'

    },
    choiceImage:{
    height: 150,
    width: 150
    }
});
export default PlayerCard;