import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import YourConnects from './YourConnects'
import YourPlaces from './YourPlaces'


export default class YourProfile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Your Connections</Text>
        <YourConnects />
        <Text>Where You've Been</Text>
        <YourPlaces />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 45,
    paddingBottom: 20,
  },
});
