import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator } from 'react-navigation';
import NavTabs from './NavTabs'
import ConnectionProfile from './ConnectionProfile'


export default class YourConnects extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      connections: [],
    }
  }

  async componentDidMount(){
    const response = await fetch('https://golocalapi.herokuapp.com/api/connections/1')
    // $this.props.currentUser.id
    const json = await response.json()
      this.setState({connections: json})
  }

  render() {
    // console.log('yourconnects', this.props.props);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <ScrollView horizontal={true}
            contentContainerStyle={styles.contentContainer}>
            {this.state.connections.map(connection =>
              <TouchableOpacity
                key={connection.id}
                style={styles.connection}
                onPress={() => this.props.props.navigation.navigate('ConnectionProfile', { name:`${connection.name}`, id: `${connection.id}`, avatar: `${connection.avatar}`})}>
                <Image
                  style={styles.avatar}
                  source={{uri: connection.avatar}}
                />
                <Text style={styles.text}>{connection.name}</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
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
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 20,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 5,
  },
  connection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
