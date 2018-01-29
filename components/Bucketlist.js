import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, RefreshControl, ScrollView } from 'react-native';



export default class Bucketlist extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      bucketlist: [],
      refreshing: false,
    }
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.componentDidMount().then(() => {
      this.setState({refreshing: false});
    });
  }

  async componentDidMount(){
    const response = await     fetch('https://golocalapi.herokuapp.com/api/bucket/1')
    const json = await response.json()

      this.setState({
        bucketlist: json,
      })
  }


  render() {
    return (
      <ScrollView
        refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}
          />
          }>
        <View style={styles.container}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../assets/bucketlistblk.png')}
          />
          <Text style={styles.header}>{'Bucketlist'.toUpperCase()}</Text>
        </View>

        <View style={styles.list}>
            {this.state.bucketlist.map((list) =>
              <TouchableOpacity key={list.id}
                  style={styles.location}
                  // onPress={()}
                  >
                <Text  style={styles.button2}>{list.location_location}, {list.location_country}</Text>
              </TouchableOpacity>
            )}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 35,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    marginTop: 10,
  },
  button2: {
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    padding: 10,
    width: 150,
    margin: 5,
    textAlign: 'center',
  },
  details: {
    fontSize: 16,
  },
});
