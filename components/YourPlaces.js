import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, RefreshControl } from 'react-native';
import LocationProfile from './LocationProfile'
import AddLocation from './AddLocation'

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
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {this.state.places.map(place =>
              <TouchableOpacity
                style={styles.button2}
                key={place.id}
                onPress={() => this.props.navigate.navigate('LocationProfile', {id:`${place.id}`, reload: this.componentDidMount.bind(this)}
                )}
                >
                <Text style={styles.text}>{place.location}, {place.country}</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>

        <View>
          <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigate.navigate('AddLocation', {user_id: this.props.user_id, placesReload: this.componentDidMount.bind(this) })}
            >
            <Text style={styles.btnText}>Add a location!</Text>
          </TouchableOpacity>
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
    paddingBottom: 20,
    paddingTop: 10,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    // paddingRight: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 10,
    width: 150,
    margin: 5,
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
  },
  button2: {
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    padding: 10,
    width: 150,
    margin: 5,
  },
});
