import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, } from 'react-native';
import YourConnects from './YourConnects'
import YourPlaces from './YourPlaces'
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';
import NavTabs from './NavTabs'
import ConnectionProfile from './ConnectionProfile'

export default class YourProfile extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    // console.log('yourprof', this.props.navigation);
    // console.log('profile', this.state);
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          {this.props.screenProps.currentUser.map(yourInfo =>
            <View key={yourInfo.id}
              style={styles.you}>
              <Image
                style={styles.avatar}
                source={{uri: yourInfo.avatar}}
              />
              <Text style={styles.name}>{yourInfo.name}</Text>
              </View>
            )}
        <ScrollView horizontal={true}
           contentContainerStyle={styles.contentContainer}>
          <YourConnects props={this.props}/>
        </ScrollView>
          <Text style={styles.titles}>Where You've Been</Text>
          {this.props.screenProps.currentUser.map(userId =>
          <YourPlaces key={userId.id} user_id={userId.id} navigate={this.props.navigation}/>
          )}
        <View>
          {this.props.screenProps.currentUser.map((user) =>
          <TouchableOpacity
            key={user.id}
            onPress={() => this.props.navigation.navigate('AddLocation', {user_id:`${user.id}`}
            )}>
            <Text>Add a location!</Text>
          </TouchableOpacity>
            )}
          </View>
      </View>
    </View>
    )
  }
}



const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    height: 700,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  titles: {
    fontSize: 18,
  },
  contentContainer: {
    width: 300,
  },
  you: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});
