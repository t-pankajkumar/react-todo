import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableHighlight
} from "react-native";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETE } from "../actions/actionTypes";
import { setvisibilityReducers } from "../actions";
import { connect } from 'react-redux';
class Filters extends Component {
    state = {
        SET_VISIBILITY_FILTER: 'SHOW_ALL'
    }

    setvisibilityReducers = (SET_VISIBILITY_FILTER) => {
        this.props.dispatch(setvisibilityReducers(SET_VISIBILITY_FILTER));
    }
    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.button}>
                    <Button title="Show All" onPress={() => this.setvisibilityReducers(SHOW_ALL)} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Button style={styles.button} title="Show Completed" onPress={() => this.setvisibilityReducers(SHOW_COMPLETED)} />
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Button style={styles.button} title="Show Incomplete" onPress={() => this.setvisibilityReducers(SHOW_INCOMPLETE)} />
                </TouchableHighlight>
            </View>
        );
    }
}
export default connect()(Filters);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 20
    },
    button: {
        marginBottom: 5,
    }
});