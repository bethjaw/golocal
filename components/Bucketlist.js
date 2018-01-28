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
            <TouchableOpacity style={styles.location}>
              {this.state.bucketlist.map((list) =>
                <Text key={list.id} style={styles.details}>{list.location_location}, {list.location_country}</Text>
              )}
            </TouchableOpacity>
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
    marginTop: 20,
  },
  details: {
    fontSize: 16,
  },
});
