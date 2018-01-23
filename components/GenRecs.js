import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native'

export default class ToDo extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      genrecs: [],
    }
  }

  async componentDidMount(){
    const response = await fetch(`https://golocalapi.herokuapp.com/api/recs/${this.props.currentLocation.id}`)
    const json = await response.json()
      this.setState({genrecs: json})
  }

  render(){
    // console.log('genrecs', this.state.genrecs);
    return (
      <View>
        <ScrollView>
          <Text style={styles.SectionTitle}>General Recommendations</Text>
          {this.state.genrecs.map(recs =>
            <View key={recs.id}>
              <Text style={styles.Details}>{recs.tip}</Text>
              <Text style={styles.Details}>{recs.advice}</Text>
              </View>
            )}
        </ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  Details: {
    paddingLeft: 30,
    paddingRight: 20,
    textAlign: 'left',
    marginTop: 8,
  },
  SectionTitle: {
    paddingTop: 10,
    fontWeight: 'bold',
    paddingLeft: 30,
  }
});