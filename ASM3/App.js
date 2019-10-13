import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import Buttongroup  from './components/Buttongroup';
import GameStatus  from './components/GameStatus';
import PlayerCard from './components/PlayerCard';

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
const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];
  const getRoundOutcome = ( userChoice, computerChoice )=> {
    console.log('result');
    console.log(userChoice);
    console.log(computerChoice);
    let resultTetx;
  
    if (userChoice === 'rock') {
      resultText = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'paper') {
      resultText = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'scissors') {
      resultText = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
    }
  
    if (userChoice === computerChoice) resultText = 'Tie game!';
    return resultText;
  };
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      Playerchoice: {},
      computerChoice:{},
      result: '',
    }
  }
  onPressButton = Playerchoice => {
    const foundChoice = CHOICES.find(choice => choice.name === Playerchoice)
    const computerChoice = randomComputerChoice();
    const result= getRoundOutcome(foundChoice.name, computerChoice.name);
    this.setState({
     Playerchoice: foundChoice,
     computerChoice,
     result
   });
  };
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.gameStatusWrapper}>
          <GameStatus result={this.state.result}/>
        </View>
        <View style={styles.gamePlayerWrapper}>
          <PlayerCard Playername="Player" choice={this.state.Playerchoice}/>
          <PlayerCard Playername="Computer" choice={this.state.computerChoice}/>
          </View>
        <View style={styles.buttongroupWrapper}>
          <Buttongroup onPressButton={this.onPressButton}/>
        </View>
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gameStatusWrapper:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: 'center'
  },
  gamePlayerWrapper:{
    flex: 0.4,
    flexDirection: "row",
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },

  buttongroupWrapper:{
    flex: 0.4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
