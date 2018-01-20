import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Bucketlist extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../assets/bucketlistblk.png')}
          />
          <Text style={styles.header}>Bucketlist</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
