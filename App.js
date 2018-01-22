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


export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      fontLoaded: false,
    }
  }

  componentDidMount() {
    Font.loadAsync({
      'roboto': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    });
    this.setState({ fontLoaded: true})
  }

  render() {
    // console.log('app', this.state)
    return (
        <NavTabs />
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
