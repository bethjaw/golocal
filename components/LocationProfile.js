import React from 'react'
import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native'


export default class LocationProfile extends React.Component {
  constructor(props){
    super(props)

    // this.state = {
    //
    // }
  }

  render(){
    return (
      <View>
        {/* <TouchableOpacity onPress={this.props.back}>
          <Text>Back to Search</Text>
        </TouchableOpacity> */}
        <Text>This is a single location</Text>
      </View>
    )
  }
}
