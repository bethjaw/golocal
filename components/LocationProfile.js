import React from 'react'
import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity, Button} from 'react-native'
import ToDo from './ToDo'
import GenRecs from './GenRecs'


export default class LocationProfile extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      currentLocation: []
    }
  }

  async componentDidMount(){
    const response = await fetch(`https://golocalapi.herokuapp.com/api/location/${this.props.navigation.state.params.id}`)
    const json = await response.json()
      this.setState({currentLocation: json})
  }

  render(){
    // console.log(this.props.navigation.state.params)
    // console.log('state', this.state.currentLocation)
    return (
      <View style={styles.background}>
        <ScrollView>
          {this.state.currentLocation.map(details =>
            <View key={details.id}>
              <Text style={styles.LocationTitle}>{details.location}, {details.country}</Text>
              <Image
                style={{width: 380, height: 280}}
                source={{uri: details.location_image}}
              />
              <Text style={styles.SectionTitle}>Transportation</Text>
              <Text style={styles.Details}>{details.transportation}</Text>
              </View>
            )}
          <View>
            <ToDo currentLocation={this.props.navigation.state.params}/>
          </View>
          <View>
            <GenRecs currentLocation={this.props.navigation.state.params}/>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    height: 700,
  },
  LocationTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  Details: {
    paddingLeft: 30,
    paddingRight: 20,
    textAlign: 'left',
    marginTop: 8,
  },
  SectionTitle: {
    paddingTop: 10,
    fontWeight: 'bold',
    paddingLeft: 30,
  }
});
