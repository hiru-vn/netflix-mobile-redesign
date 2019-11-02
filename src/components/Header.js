import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {EvilIcons,Feather} from '@expo/vector-icons'
import { Header as Head } from 'react-navigation-stack';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <EvilIcons size={30} color='rgb(134,134,134)' name='search'/>
        </TouchableOpacity>
        <Image source={require('../assets/logo.png')} style={styles.logoImg}/>
        <TouchableOpacity>
          <Feather size={24} color='rgb(134,134,134)' name='menu'/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '88%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 30,
    marginBottom: 0,
    marginTop: Head.HEIGHT,
  },
  logoImg: {
    width: 110,
    height: 34,
    resizeMode: 'cover',
  },
})
