import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

export default class AddGenRec extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      tip: '',
      advice: '',
      location_id: this.props.navigation.state.params.location_id,
      message: '',
    }
  }

async addGenRec(){
  const response = await fetch(`https://golocalapi.herokuapp.com/api/addgenrec/${this.props.navigation.state.params.location_id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tip: this.state.tip,
      advice: this.state.advice,
      location_id: this.state.location_id,
    }),
  })

  this.setState({
    tip: '',
    advice: '',
    message: 'Added!',
  })

  // Alert.alert(
  //     'Added!',
  //     [
  //       {text: 'OK', onPress: () => console.log('OK Pressed')},
  //     ],
  //     { cancelable: false }
  //   )
}

  render(){
    return(
      <View style={styles.background}>
        <Text style={styles.textTop}>Share your best tips!</Text>
        <Text>What should we know?</Text>
        <TextInput
          style={styles.input}
          placeholder='Go places early or late; Carry Bear Spray'
          onChangeText={(tip) => {
            this.setState({tip})}}
          value={this.state.tip}
        />
        <Text>Why is this important?</Text>
        <TextInput
          style={styles.detailsInput}
          multiline={true}
          placeholder='Avoid the tourists; bears are everywhere!'
          onChangeText={(advice) => {
            this.setState({advice})}}
          value={this.state.advice}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.addGenRec()}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>

          <View style={styles.messageCont}>
            <Text style={styles.message}>{this.state.message}</Text>
          </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    height: 700,
    alignItems: 'center',
  },
  textTop: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    margin: 5,
  },
  detailsInput: {
    height: 60,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    margin: 5,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 10,
    width: 150,
    margin: 5,
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
  },
  message: {
    textAlign: 'center',
    marginTop: 15,
  },
  messageCont: {
    width: 200,
  },
})
