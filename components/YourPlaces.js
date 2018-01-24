import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';


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

  render() {
    console.log('places page', this.state.places);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {this.state.places.map(place =>
              <TouchableOpacity key={place.id}>
                <Text style={styles.text}>{place.location}</Text>
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
    paddingTop: 45,
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
