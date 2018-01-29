import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LocationProfile from './LocationProfile'

export default class ConnectionProfile extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      location: []
    }
  }

  async componentDidMount(){
    const response = await fetch(`https://golocalapi.herokuapp.com/api/locationByUser/${this.props.navigation.state.params.id}`)
    const json = await response.json()
      this.setState({location: json})
  }

  render(){
    return (
      <View style={styles.background}>
        <View style={styles.headContain}>
          <Image
            style={styles.avatar}
            source={{uri: this.props.navigation.state.params.avatar}}
          />
          <Text style={styles.name}>
            {this.props.navigation.state.params.name}</Text>
        </View>
        <View style={styles.container}>
           {this.state.location.map((details) =>
             <TouchableOpacity
               style={styles.button}
               key={details.id}
               onPress={() => this.props.navigation.navigate('LocationProfile', {id:`${details.id}`} )}
               >
               <Text style={styles.location}>{details.location}, {details.country}</Text>
             </TouchableOpacity>
           )}
         </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    height: 700,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5,
    paddingTop: 5,
  },
  headContain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    textAlign: 'center'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  button: {
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    padding: 10,
    width: 150,
    margin: 5,
  },
});
