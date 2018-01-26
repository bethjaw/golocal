import React from 'react'
import { View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
  ImagePickerIOS,
} from 'react-native'
// import { MapView } from 'expo';
import MapView from 'react-native-maps';


export default class MapTest extends React.Component {

  render(){
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    )
  }
}
