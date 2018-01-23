import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';
import NavTabs from './NavTabs'

export default class AddLocation extends React.Component {
  constructor(props){
    super(props)

    // this.state = {
    //
    // }
  }

  render(){
    return (
      <View style={styles.background}>
        <View style={styles.formContainer}>
          <Text>Enter Location</Text>
          <TextInput
            style={styles.input}
            placeholder='London, Denver...'
            // onChangeText={(email) => this.setState({email})}
            // value={this.state.email}
          />
          <Text>Country</Text>
          <TextInput
            style={styles.input}
            placeholder='USA, Canada, Spain...'
            // onChangeText={(password) => this.setState({password})}
            // value={this.state.password}
          />
          <Text>Transportation</Text>
          <TextInput
            style={styles.input}
            placeholder='We rented a car, took a tour...'
            // onChangeText={(password) => this.setState({password})}
            // value={this.state.password}
          />
          <Text>Image</Text>
          <TouchableOpacity
            // onPress={this.props.userLogin}
            style={styles.button}>
            <Text style={styles.btnText}>Add!</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    height: 700,
  },
  input: {
    height: 40,
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
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
