import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AddTodo from "./containers/AddTodo";
import VisibleTodos from './containers/VisibleTodos';
import Filters from './containers/Filters';
class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo></AddTodo>
        <View>
          <VisibleTodos></VisibleTodos>
        </View>
        <Filters></Filters>
      </View>
    );
  }
}

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:5
  }
});
