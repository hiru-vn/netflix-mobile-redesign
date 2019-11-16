import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { EvilIcons, Feather } from '@expo/vector-icons'
import APPBAR_HEIGHT from '../constant/APPBAR_HEIGHT';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldGoBack: props.shouldGoBack ? true : false,
      notSearch: props.notSearch ? true : false,
      title: props.title,
    };
  }

  menu = () => {
    this.props.openDrawer()
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.row}>
          <TouchableOpacity onPress={this.state.shouldGoBack ? () => this.props.goBack() : () => this.menu()}>
            <View style={styles.row}>
            <Feather size={25} color='#f0f1f1' name={this.state.shouldGoBack ? 'chevron-left' : 'menu'} />
            {this.state.shouldGoBack && <Text style={{ color: '#f0f1f1' }}>Back</Text>}
            </View>
          </TouchableOpacity>      
        </View>
        {
          this.state.title ?
            <Text style={styles.title}>{this.state.title}</Text> :
            <Image source={require('../assets/logo.png')} style={styles.logoImg} />
        }
        <TouchableOpacity onPress={() => this.props.openSearch()}>
          <EvilIcons size={30} color={this.state.notSearch ? '#1B1B1B' : '#f0f1f1'} name='search' />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '3%',
    marginBottom: 0,
    marginTop: APPBAR_HEIGHT,
    borderBottomColor: '#564D4D',
    borderBottomWidth: 1,
    paddingVertical: 10,
    backgroundColor: '#1B1B1B',
  },
  logoImg: {
    width: 120,
    height: 34,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    color: '#f0f1f1',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  }
})
