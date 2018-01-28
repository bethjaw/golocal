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
  ImagePickerIOS,
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
      location_image: ''
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
        user_id: this.state.user_id,
        location_image: this.state.location_image
      }),
    })

    this.props.navigation.state.params.placesReload()

    this.setState({
      message: 'Added! Add another or head back to see it and add some to dos or recommendations!',
      location: '',
      country: '',
      transportation: '',
      location_image: '',
    })
  }


  uploadImage(){
    let serverURL = 'https://golocalapi.herokuapp.com/aws'
    fetch(serverURL)
      .then(res => res.json())
      .then(response => {
        console.log(response.url, response.id)
        ImagePickerIOS.openSelectDialog({}, imageUri => {
          const xhr = new XMLHttpRequest()
          xhr.open('PUT', response.url)
          xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                  console.log('Image successfully uploaded to S3')
              } else {
                console.log(xhr);
                  console.log('Error while sending the image to S3')
                }
              }
            }
          xhr.setRequestHeader('Content-Type', 'image/jpeg')
          xhr.send({
            uri: imageUri,
            type: 'image/jpeg',
            name: response.id + '.jpg',
            })
          }, error => console.log(error));

          this.setState({
            location_image: 'https://golocal-capstone.s3.us-east-2.amazonaws.com/' + response.id + '.jpg',
          })

      })
      .catch(console.log)
    }




  render(){
    // console.log(this.props.navigation.state.params);
    console.log('user state', this.state);
    // console.log('user props', this.props);
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

          {/* <AddImage /> */}
          <TouchableOpacity style={styles.imageContainer}
            onPress={() => this.uploadImage()}
            >
            <Text style={styles.addImage}>Upload Image</Text>
          </TouchableOpacity>

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
  },
  addImage: {
    textAlign: 'center',
    color: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageContainer: {
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: '#000',
  },
})
