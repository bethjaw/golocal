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
      // allUsers: [],
      email: '',
      password: '',
      currentUser: [],
    }
  }

  // async componentDidMount(){
  //   const response = await fetch('https://golocalapi.herokuapp.com/api/user')
  //   const json = await response.json()
  //     this.setState({allUsers: json})
  // }

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
      // return <SignIn userLogin={this.checkUser}/>
      return <SignIn props={this.props}/>
    } else {
      return
    }
  }

  // checkUser = (e) => {
  //   e.preventDefault()
  //   let userLogin = {
  //     email: e.target.email.value,
  //     password: e.target.password.value
  //   }
  //   let user = ''
  //   for(var i=0; i < this.props.allUsers.length; i++){
  //     if(this.props.allUsers[i].email === userLogin && this.props.allUsers[i].password === userLogin.password){
  //       user = this.props.allUsers[i]
  //     }
  //   }
  //   this.setState({
  //     currentUser: user
  //   })
  // }


  render() {
    console.log(this.props);
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
          {/* <TouchableOpacity
            // onPress={this.toggleSignIn}
            // onPress={() => this.props.navigation.navigate('SignIn', {props: this.props})}
            style={styles.button}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
          {this.renderSignInForm()} */}
          <SignIn props={this.props}/>
          <TouchableOpacity
            // onPress={this.toggleSignUp}
            onPress={() => this.props.navigation.navigate('SignUp')}
            style={styles.button}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
            {this.renderSignUpForm()}
        </ScrollView>
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
    height: 200,
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
    width: 200,
    margin: 5,
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  }
});
