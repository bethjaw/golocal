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
import SignUp from './SignUp'
import SignIn from './SignIn'


export default class Login extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      signUp: false,
      logIn: false,
      currentUser: [],
    }
  }

  toggleSignUp = () => {
    this.setState({
      signUp: !this.state.signUp
    })
  }

  renderSignUpForm(){
    if(this.state.signUp){
      return <SignUp />
    } else {
      return
    }
  }

  toggleSignIn = () => {
    this.setState({
      logIn: !this.state.logIn
    })
  }

  renderSignInForm(){
    if(this.state.logIn){
      return <SignIn />
    } else {
      return
    }
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
        <Image
          style={styles.loginImage}
          source={require('../assets/homeLogin.jpg')}
        />
        <ScrollView contentContainerStyle={styles.contentContainer}>

          <TouchableOpacity
            onPress={this.toggleSignUp}
            style={styles.button}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
            {this.renderSignUpForm()}
            <TouchableOpacity
              onPress={this.toggleSignIn}
              style={styles.button}>
              <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            {this.renderSignInForm()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  container: {
    // flex: 1,
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
  loginImage: {
    width: 380,
    height: 210,
    paddingBottom: 15,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 16,
  }
});
