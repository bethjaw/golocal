import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';


export default class SearchMain extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../assets/mapcheck.png')}
          />
          <Text style={styles.header}>GOLOCAL</Text>
        </View>
        <ScrollView>
          <Text>Search By Connection</Text>
          <Text>Search By Location</Text>
          <Text>Browse All Locations</Text>          
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: .35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  header: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },

});
