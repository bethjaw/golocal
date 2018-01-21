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
} from 'react-native';
import SearchMain from './SearchMain'
import LocationProfile from './LocationProfile'


export default class SearchToSingle extends React.Component {
  constructor(props){
    super(props)

      this.state = {
        locationData: this.props.locationData,
        browseAll: true,
        singleLocation: [],
        locationProf: false,
      }
  }



  goToLocationProfile = (locations) => {
    this.setState({
      locationProf: true,
      browseAll: false,
      singleLocation: locations
    })
  }

  backToBrowse = () => {
    this.setState({
      locationProf: false,
      browseAll: true,
    })
  }


  render(){
    return (
      <View>
        { this.state.browseAll ? <SearchMain locationData={this.props.locationData} goToLocationProfile={this.goToLocationProfile} /> : null }

        { this.state.locationProf ? <LocationProfile singleLocation={this.state.singleLocation} locationData={this.props.locationData}
          // back={this.backToBrowse()}
        /> : null }
      </View>
    )
  }

}
