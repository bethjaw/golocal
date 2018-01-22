import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import YourConnects from './YourConnects'
import YourPlaces from './YourPlaces'


export default class YourProfile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titles}>Your Connections</Text>
        <ScrollView horizontal={true}
           contentContainerStyle={styles.contentContainer}>
          <YourConnects />
        </ScrollView>
        <Text style={styles.titles}>Where You've Been</Text>
        <YourPlaces />
        <TouchableOpacity>
          <Text>Add a location!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  titles: {
    fontSize: 18,
  },
  contentContainer: {
    width: 300,
  },

});
