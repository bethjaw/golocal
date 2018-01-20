import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='your name'
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <TextInput
          style={styles.input}
          placeholder='name@email.com'
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          placeholder='*******'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity
          // onPress={this.toggleSignIn}
          style={styles.button}>
          <Text style={styles.btnText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={this.toggleSignIn}
          style={styles.button}>
          <Text style={styles.btnText}>Sign Up with Gmail</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    margin: 5,
  },
});
