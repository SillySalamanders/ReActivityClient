import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  AsyncStorage,
  TextInput,
  Button,
  View
} from 'react-native';

import { baseUrl } from '../lib/localvars.js';
import { store } from '../lib/reduxStore.js';
import SignupForm from '../components/SignupForm.js';
import Backbar from '../components/Backbar';


export default class SignupScreen extends React.Component {

  state = {
    username: '',
    firstName: '',
    lastName: '',
    bioText: '',
    profileUrl: '',
    interests: [],
    email: '',
    password: '',
  }

  render() {
    return (
        <View style={styles.container}>
      <View style={styles.headerBar}>
          <Backbar navigator={this.props.navigator} />
        <Text style={styles.headerSpacer}></Text>
        <Text style={styles.headerTitle}>
          Signup
        </Text>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>
        <SignupForm navigator={this.props.navigator} />
      </ScrollView>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  headerBar: {
    flex: 1,
    maxHeight: 40,
    backgroundColor: 'coral',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  headerTitle: {
    flex: 10,
    fontSize: 18,
    alignSelf: 'center',
    color: 'black',
    fontFamily: 'rubik',
    textAlign: 'center'
  }
});
