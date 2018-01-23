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
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Font } from 'expo';

import SearchMain from './SearchMain'
import YourProfile from './YourProfile'
import Bucketlist from './Bucketlist'
import LocationProfile from './LocationProfile'
import Login from './Login'
import ConnectionProfile from './ConnectionProfile'
import AddLocation from './AddLocation'


const Main = StackNavigator({
  // Login: {
  //   screen: Login,
  //   path: '/',
  // },
  Main: {
    screen: SearchMain,
    path: '/main/:id',
    navigationOptions: {
      title: 'Browse Locations',
    },
  },
  LocationProfile: {
    screen: LocationProfile,
    path: '/location/:name',
  },
});

const ProfileTab = StackNavigator({
  YourProfile: {
    screen: YourProfile,
    path: '/profile/:id',
    navigationOptions: {
      // title: `${}`,
    },
  },
  ConnectionProfile: {
    screen: ConnectionProfile,
    path: '/connection/:id',
  },
  AddLocation: {
    screen: AddLocation,
    path: '/addLocation',
  },
});


const NavTabs = TabNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'Main',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
      // tabBarVisible: false,
    },
  },
  Profile: {
    screen: ProfileTab,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Bucketlist: {
    screen: Bucketlist,
    navigationOptions: {
      tabBarLabel: 'Bucket List',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-heart' : 'ios-heart-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
});

export default NavTabs;
