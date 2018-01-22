import React from 'react'
import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity, Button} from 'react-native'


export default class LocationProfile extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      currentLocation: []
    }
  }

  async componentDidMount(){
    const response = await fetch(`https://golocalapi.herokuapp.com/api/location/${this.props.navigation.state.params.id}`)
    const json = await response.text()
      this.setState({currentLocation: json})
  }

  render(){
    // console.log(this.props.navigation.state.params)
    console.log('state', this.state.currentLocation)
    return (
      <View style={styles.background}>
        <Text>This is a single location</Text>
        <Text>{this.state.currentLocation}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    height: 700,
  },
});
