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
import NavTabs from './NavTabs'


export default class SearchMain extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      locationData: [],
      currentLocation: [],
    }
  }

  async componentDidMount(){
    const response = await fetch('https://golocalapi.herokuapp.com/api/connectlocate/1')
    // $this.props.currentUser.id
    const json = await response.json()
      this.setState({locationData: json})
  }

  render() {
    // console.log('mainsearch', this.props);
    // console.log('locationData', this.state.locationData)
    // console.log('currentLocation', this.state.currentLocation);
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../assets/mapcheck2.png')}
          />
          {/* <Text style={styles.header}>GOLOCAL</Text> */}
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
            {this.state.locationData.map((location) =>
              <TouchableOpacity
                style={styles.location}
                key={location.id}
                onPress={() => this.props.navigation.navigate('LocationProfile', { name: `${location.location}`, id: `${location.id}`})}>
                <Image
                  style={{width: 200, height: 150}}
                  source={{uri: location.location_image }}
                />
                <View style={styles.text}>
                  <Text style={styles.textLocation}>{location.location}</Text>
                  <Text style={styles.textPerson}>{location.name}</Text>
                </View>
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
    fontSize: 36,
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
    // top: 0,
    // bottom: 50,
    height: 800,
  },
  location: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    margin: 3,
    // borderBottomWidth: .25,
    // borderTopWidth: 1,
    // width: 378,
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textLocation: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingRight: 40,
    fontSize: 16,

  },
  textPerson: {
    textAlign: 'center',
    paddingRight: 40,
    fontSize: 16,
  },
  searchTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
    paddingTop: 5,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    height: 40,
    width: 200,
  }
});
