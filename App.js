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
// import SearchMain from './components/SearchMain'
// import YourProfile from './components/YourProfile'
// import Bucketlist from './components/Bucketlist'
import Login from './components/Login'


// class LandScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome'
//   };
//   render(){
//     return (
//       <Text>Hey, trying to get this to work!</Text>
//     )
//   }
// }
//
// const NavTabs = TabNavigator({
//   Main: {
//     screen: SearchMain,
//     navigationOptions: {
//       tabBarLabel: 'Main',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <Ionicons
//           name={focused ? 'ios-home' : 'ios-home-outline'}
//           size={26}
//           style={{ color: tintColor }}
//         />
//       ),
//     },
//   },
//   Profile: {
//     screen: YourProfile,
//     navigationOptions: {
//       tabBarLabel: 'Profile',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <Ionicons
//           name={focused ? 'ios-person' : 'ios-person-outline'}
//           size={26}
//           style={{ color: tintColor }}
//         />
//       ),
//     },
//   },
//   Bucketlist: {
//     screen: Bucketlist,
//     navigationOptions: {
//       tabBarLabel: 'Bucket List',
//       tabBarIcon: ({ tintColor, focused }) => (
//         <Ionicons
//           name={focused ? 'ios-heart' : 'ios-heart-outline'}
//           size={26}
//           style={{ color: tintColor }}
//         />
//       ),
//     },
//   },
// });


export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'roboto': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    });
  }

  render() {
    return (
        // <NavTabs />
        <Login />
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
