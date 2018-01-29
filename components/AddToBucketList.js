import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class AddToBucketList extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      user_id: 1,
      location_id: this.props.props[0].id,
      location_location: this.props.props[0].location,
      location_country: this.props.props[0].country,
    }
  }

  async AddToBucketList(){
    const response = await fetch('https://golocalapi.herokuapp.com/api/addBucketlist/1', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.state.user_id,
        location_id: this.state.location_id,
        location_location: this.state.location_location,
        location_country: this.state.location_country,
      }),
    })

    Alert.alert(
        'Success!',
        'Location added to your Bucketlist',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
  }

  render(){
    return(
        <TouchableOpacity
          style={styles.iconPlus}
          onPress={() => this.AddToBucketList()}>
          <Ionicons
            // style={{color: '#ea8787'}}
            name={'ios-heart'}
            size={35}
          />
        </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  iconPlus: {
    width: 35,
    height: 35,
    position: 'absolute',
    right: 0,
    top: 8,
    bottom: 4,
    right: 8,
  },
});
