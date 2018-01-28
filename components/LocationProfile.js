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

      this.setState({
        currentLocation: json,
      })
  }


  render(){
    // console.log('location', this.props.navigation.state.params.currentUser)
    // console.log('state', this.state.currentLocation)
    return (
      <View style={styles.background}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Image
            style={styles.icon}
            source={require('../assets/mapcheck2.png')}
          />
          {this.state.currentLocation.map(details =>
            <View style={styles.Border} key={details.id}>
              <Text style={styles.LocationTitle}>{details.location}, {details.country}</Text>
              <Image
                style={styles.iconPlus}
                source={require('../assets/plus2.png')}
              />
              <Image
                style={{width: 380, height: 280}}
                source={{uri: details.location_image}}
              />

              <Text style={styles.SectionTitle}>
                {'Transportation'.toUpperCase()}</Text>
              <Text style={styles.Details}>{details.transportation}</Text>
              </View>
            )}
          <View>
            <ToDo currentLocation={this.props.navigation.state.params}/>
          </View>

          <View>
            <GenRecs currentLocation={this.props.navigation.state.params}/>
          </View>


          <View style={styles.btncontain}>
            <TouchableOpacity style={styles.button}
              onPress={() => this.props.navigation.navigate('AddToDo', {location_id: this.props.navigation.state.params.id,
              reload: this.componentDidMount.bind(this) })}
                >
                <Text style={styles.btnText}>Add To Do</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
              onPress={() => this.props.navigation.navigate('AddGenRec', {location_id: this.props.navigation.state.params.id, reload: this.componentDidMount.bind(this)
              })}
              >
              <Text style={styles.btnText}>Add Recommendation</Text>
            </TouchableOpacity>
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
    flex: 1,
  },
  contentContainer: {
    top: 0,
    bottom: 70,
  },
  LocationTitle: {
    fontSize: 22,
    textAlign: 'center',
    margin: 12,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingBottom: 5,
    paddingTop: 5,
  },
  Details: {
    paddingLeft: 30,
    paddingRight: 20,
    textAlign: 'left',
    marginTop: 8,
    marginBottom: 8,
  },
  Border: {
    borderBottomWidth: 2,
    borderColor: 'whitesmoke',
  },
  SectionTitle: {
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 30,
  },
  icon: {
    width: 42,
    height: 42,
    position: 'absolute',
    top: 4,
    bottom: 4,
    left: 4,
  },
  iconPlus: {
    width: 35,
    height: 35,
    position: 'absolute',
    right: 0,
    top: 8,
    bottom: 4,
    right: 8,
  },
  addImage: {
    textAlign: 'center',
    color: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageContainer: {
    width: 310,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    marginLeft: 30,
    backgroundColor: '#000',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 10,
    width: 160,
    margin: 5,
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
  },
  btncontain: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
  }
});
