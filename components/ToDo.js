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
      todo: []
    }
  }

  async componentDidMount(){
    const response = await fetch(`https://golocalapi.herokuapp.com/api/todo/${this.props.currentLocation.id}`)
    const json = await response.json()
      this.setState({todo: json})
  }

  render(){
    // console.log('todo', this.state.todo);
    return (
      <View>
        <ScrollView>
          <Text style={styles.SectionTitle}>What To Do</Text>
          {this.state.todo.map(todos =>
            <View key={todos.id}>
              <Text style={styles.Details}>{todos.title}</Text>
              <Text style={styles.Details}>{todos.details}</Text>
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
