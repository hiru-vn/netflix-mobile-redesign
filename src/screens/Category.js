import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import CategoryNav from '../navigator/categoryNavigate'
import Header from '../components/Header'

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    header: null,
  };
  openSearch = () => {
    this.props.navigation.navigate('Search')
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title="Category" goBack={this.props.navigation.goBack} shouldGoBack={true} openSearch={this.openSearch} />
        <CategoryNav screenProps={{ nav: this.props.navigation.navigate }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#181818',
  }
})
