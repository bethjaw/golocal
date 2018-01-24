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
      allUsers: [],
      email: '',
      password: '',
      currentUser: [],
    }
  }

  async componentDidMount(){
    const response = await fetch('https://golocalapi.herokuapp.com/api/user')
    const json = await response.json()
      this.setState({allUsers: json})
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
      return <SignIn userLogin={this.checkUser}/>
    } else {
      return
    }
  }

  checkUser = (e) => {
    e.preventDefault()
    let userLogin = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    let user = ''
    for(var i=0; i < this.props.allUsers.length; i++){
      if(this.props.allUsers[i].email === userLogin && this.props.allUsers[i].password === userLogin.password){
        user = this.props.allUsers[i]
      }
    }
    this.setState({
      currentUser: user
    })
  }


  render() {
    console.log('login', this.state)
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
  background: {
    backgroundColor: '#fff',
    height: 700,
  },
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
    paddingTop: 40,
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
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
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
