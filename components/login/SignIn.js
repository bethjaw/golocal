import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


export default class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  clearForm(){
    this.setState({
      email: '',
      password: ''
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='name@email.com'
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='*******'
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <TouchableOpacity
          // onPress={this.props.userLogin}
          onPress={() => this.props.props.navigation.navigate('Main', {reset: this.clearForm()})}
          style={styles.button2}>
          <Text style={styles.btnText2}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.props.navigation.navigate('Main', {reset: this.clearForm()})}
          style={styles.button3}>
          <Text style={styles.btnText}>Login with Gmail</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    margin: 5,
  },
  button2: {
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    padding: 10,
    width: 200,
    margin: 5,
  },
  btnText2: {
    textAlign: 'center',
    fontSize: 14,
  },
  button3: {
    backgroundColor: '#ea8787',
    borderRadius: 5,
    padding: 10,
    width: 200,
    margin: 5,
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
  },
});
