import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class YourProfile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Your Profile</Text>
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
