import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default class BaseScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.baseScreen}>
        {this.props.children}
      </View>
    );
  }
}
