import React from 'react'
import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity, Button} from 'react-native'


export default class LocationProfile extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render(){
    return (
      <View style={styles.background}>
        <Text>This is a single location</Text>
        <Text>{this.props.currentLocation}</Text>
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
