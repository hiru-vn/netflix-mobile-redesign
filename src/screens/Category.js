import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Header title="Category"/>
        <Text> Category </Text>
      </View>
    );
  }
}
