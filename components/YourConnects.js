import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';


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
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <ScrollView horizontal={true}
            contentContainerStyle={styles.contentContainer}>
            {this.state.connections.map(connection =>
              <TouchableOpacity key={connection.id}>
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
    paddingTop: 45,
    paddingBottom: 20,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'right',
    paddingRight: 10,
    fontSize: 16,
  },
});
