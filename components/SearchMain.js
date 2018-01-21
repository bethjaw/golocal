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
import { StackNavigator } from 'react-navigation';
import LocationProfile from './LocationProfile'
import SearchToSingle from './SearchToSingle'

export default class SearchMain extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      locationData: [],
    }
  }

  async componentDidMount(){
    const response = await fetch('https://golocalapi.herokuapp.com/api/locations')
    const json = await response.json()
      this.setState({locationData: json})
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../assets/mapcheck.png')}
          />
          <Text style={styles.header}>GOLOCAL</Text>
        </View>
        <View style={styles.search}>
          <Text style={styles.searchTitle}>Search By Connection</Text>
          <TextInput
            style={styles.input}
            placeholder='Megan...'
          />
          <Text style={styles.searchTitle}>Search By Location</Text>
          <TextInput
            style={styles.input}
            placeholder='San Francisco, Iceland...'
          />
          <Text style={styles.searchTitle}>Browse All Locations</Text>
        </View>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {this.state.locationData.map(locations =>
              <TouchableOpacity style={styles.locations}>
                <Text style={styles.text}
                  key={locations.id}>{locations.location}</Text>
                <Text style={styles.text}
                  key={locations.name}>{locations.name}</Text>
              </TouchableOpacity>
            )}
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 45,
    paddingBottom: 20,
  },
  header: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },
  search: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  locations: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    margin: 5,
    width: 200,
  },
  text: {
    textAlign: 'right',
    paddingRight: 10,
    fontSize: 16,
  },
  searchTitle: {
    fontSize: 16,
  }
});
