import React from 'react';
import { MapView } from 'expo';

export default class Map extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      locationData: [],
    }
  }

  render(){
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 39.7423253,
          longitude: -104.9990831,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
          latitudeDelta: 0.0700,
          longitudeDelta: 0.0300,
        }}
      />
    )
  }
}
