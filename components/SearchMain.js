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
  StatusBar,
} from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';
import LocationProfile from './LocationProfile'


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
    // console.log(this.state)
    return (
      <View style={styles.background}>
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
            {this.state.locationData.map((locations) =>
              <TouchableOpacity
                style={styles.locations}
                key={locations.id}
                onPress={() => this.props.navigation.navigate('LocationProfile', { name: `${locations.location}`, id: `${locations.id}`})}>
                <Image
                  style={{width: 200, height: 150}}
                  source={{uri: locations.location_image }}
                />
                <Text style={styles.text}>{locations.location}</Text>
                {/* <Text style={styles.text}>{locations.name}</Text> */}
              </TouchableOpacity>
            )}
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
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 20,
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
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  locations: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    width: 378,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'right',
    paddingRight: 10,
    paddingLeft: 60,
    fontSize: 16,
  },
  searchTitle: {
    fontSize: 16,
    margin: 5,
  },

});
