import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const CHOICES = [
    {
      name: 'rock',
      uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
    },
    {
      name: 'paper',
      uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
    },
    {
      name: 'scissors',
      uri:
        'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
    }
  ];

function Buttongroup (props){
    return CHOICES.map(item =>{
                return(
        <TouchableOpacity 
        key={item.name}
        style={Styles.button}
        onPress={() =>props.onPressButton(item.name)}>
            <Text style={Styles.Text}>{item.name}</Text>
        </TouchableOpacity>
            )
        })
}
const Styles= StyleSheet.create({
    button:{
        width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#640D14',
    },
    Text:{
    fontSize: 18,
    color: 'white',
    fontWeight:"bold"
    }
})

export default Buttongroup;