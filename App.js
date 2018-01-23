import React from 'react';
import {
  View,
  Text,
  Button,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Font } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NavTabs from './components/NavTabs'
import SearchMain from './components/SearchMain'
// import YourProfile from './components/YourProfile'
// import Bucketlist from './components/Bucketlist'
import Login from './components/Login'
import CameraRollPicker from './components/CameraRollPicker'


export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      fontLoaded: false,
      currentUser: []
    }
  }

  async componentDidMount(){
    const response = await fetch('https://golocalapi.herokuapp.com/api/user/1')
    // $this.props.currentUser.id
    const json = await response.json()

    Font.loadAsync({
        'roboto': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
      });

      this.setState({
        currentUser: json,
        fontLoaded: true,
      })
  }

  // componentDidMount() {
  //   Font.loadAsync({
  //     'roboto': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
  //   });
  //   this.setState({ fontLoaded: true})
  // }

  render() {
    // console.log('app', this.state)
    // console.log('app', this.state.currentUser);
    return (
        <NavTabs screenProps={this.state}/>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
