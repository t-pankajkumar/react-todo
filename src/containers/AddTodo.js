import React, {Component} from 'react';
import {StyleSheet,TextInput,TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
class AddTodo extends Component {
  state = {
    text: ''
  }

  addTodo = (text) => {
    this.props.dispatch(addTodo(text));
    this.setState({text:''});
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        onChangeText={(text)=>this.setState({text})}
        value={this.state.text}
        style={styles.input} placeholder="Add item"></TextInput>
        <TouchableOpacity onPress={()=> this.addTodo(this.state.text)}>
          <View style={{height:50,backgroundColor:'#eaeaea',alignItems:'center',justifyContent:'center',padding:5}}>
            <Icon name="md-add" size={30}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginHorizontal:20,
    backgroundColor:'#eaeaea'
  },
  input:{
    borderWidth:1,
    borderColor:'#f2f2e1',
    height:50,
    flex:1,
    padding:5
  }
});
