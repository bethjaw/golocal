import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import LocationProfile from './LocationProfile'


export default class YourPlaces extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      places: [],
    }
  }

  async componentDidMount(){
    const response = await fetch(`https://golocalapi.herokuapp.com/api/locationByUser/${this.props.user_id}`)
    const json = await response.json()
      this.setState({places: json})
  }

  // onAddLocation = (e) => {
  //   this.setState({
  //     places:
  //   })
  // }


  render() {
    // console.log('places page', this.state.places);
    // console.log('places props', this.props.navigate.navigate);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {this.state.places.map(place =>
              <TouchableOpacity
                key={place.id}
                onPress={() => this.props.navigate.navigate('LocationProfile', {id:`${place.id}`}
                )}
                >
                <Text style={styles.text}>{place.location}, {place.country}</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // paddingTop: 45,
    paddingBottom: 20,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'right',
    paddingRight: 10,
    fontSize: 16,
  },
});
