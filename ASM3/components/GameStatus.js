import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function gameStatus(props){
    return (
        
    <Text style={Styles.Text}>result: {props.result}</Text>
    
    )
}
const Styles= StyleSheet.create({
    Text:{
        fontSize: 20,
        fontWeight: "600"
    }
})
export default gameStatus;