import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';
import NavTabs from './NavTabs'

export default class AddLocation extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      location: '',
      country: '',
      transportation: '',
      user_id: this.props.navigation.state.params.user_id,
      message: '',
    }
  }

  async addLocation(){
    const response = await fetch(`https://golocalapi.herokuapp.com/api/addLocation/${this.props.navigation.state.params.user_id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location: this.state.location,
        country: this.state.country,
        transportation: this.state.transportation,
        user_id: this.state.user_id
      }),
    })
    this.setState({message: 'Your location was added! Head back to your profile and add some to dos!'})
  }

  render(){
    // console.log(this.props.navigation.state.params.user_id);
    // console.log('user', this.state);
    // console.log('user', this.props);
    return (
      <View style={styles.background}>
        <View style={styles.formContainer}>
          <Text>Enter Location</Text>
          <TextInput
            style={styles.input}
            placeholder='London, Denver...'
            onChangeText={(location) => this.setState({location})}
            value={this.state.location}
          />
          <Text>Country</Text>
          <TextInput
            style={styles.input}
            placeholder='USA, Canada, Spain...'
            onChangeText={(country) => this.setState({country})}
            value={this.state.country}
          />
          <Text>Transportation</Text>
          <TextInput
            style={styles.input}
            placeholder='We rented a car, took a tour...'
            onChangeText={(transportation) => this.setState({transportation})}
            value={this.state.transportation}
          />
          <Text>Image</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.addLocation()}>
              <Text style={styles.btnText}>Add!</Text>
            </TouchableOpacity>
          </View>
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
    // justifyContent: 'center',
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
  },
  message: {
    textAlign: 'center',
    marginTop: 15,
  },
  messageCont: {
    width: 200,
  }
})
