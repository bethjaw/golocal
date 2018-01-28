import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';

export default class AddToDo extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      title: '',
      details: '',
      location_id: this.props.navigation.state.params.location_id,
    }
  }

  async addToDo(){
    const response = await fetch(`https://golocalapi.herokuapp.com/api/addtodo/${this.props.navigation.state.params.location_id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        details: this.state.details,
        location_id: this.state.location_id,
      }),
    })

    this.setState({
      title: '',
      details: '',
    })

    Alert.alert(
        'Added!',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
  }

  render(){
    return(
      <View style={styles.background}>
        <Text>What To Do</Text>
        <TextInput
          style={styles.input}
          placeholder='Road to Hana, Visit Wine Country'
          onChangeText={(title) => {
            this.setState({title})}}
          value={this.state.title}
        />
        <Text>Give us all the details...</Text>
        <TextInput
          style={styles.detailsInput}
          multiline={true}
          placeholder='This was a game changer... located... Loved it because...'
          onChangeText={(details) => {
            this.setState({details})}}
          value={this.state.details}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.addToDo()}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>

          {/* <View style={styles.messageCont}>
            <Text style={styles.message}>{this.state.message}</Text>
          </View> */}

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
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    margin: 5,
  },
  detailsInput: {
    height: 100,
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
