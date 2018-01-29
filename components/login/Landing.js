import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class Landing extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <Image
            style={{width: 45, height: 45}}
            source={require('../assets/mapcheck2.png')}
          />
          <Text style={styles.header}>GOLOCAL</Text>
        </View>
        <Image
          style={styles.loginImage}
          source={require('../assets/homeLogin.jpg')}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Main')}
            style={styles.button}>
            <Text style={styles.btnText}>Start Browsing...</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    height: 700,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 20,
  },
  header: {
    textAlign: 'center',
    fontSize: 38,
    fontWeight: 'bold',
  },
  loginImage: {
    width: 380,
    height: 210,
    paddingBottom: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    padding: 10,
    width: 200,
    margin: 5,
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  }
});
