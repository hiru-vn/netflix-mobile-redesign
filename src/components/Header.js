import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity ,Platform} from 'react-native';
import { EvilIcons, Feather } from '@expo/vector-icons'
import APPBAR_HEIGHT from '../constant/APPBAR_HEIGHT';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldGoBack: props.shouldGoBack?true:false,
    };
  }

  menu = () => {
    
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={this.state.shouldGoBack? () => this.props.goBack() : ()=>this.menu()}>
          <Feather size={29} color='rgb(134,134,134)' name={this.state.shouldGoBack?'arrow-left':'menu'} />
        </TouchableOpacity>
        <Image source={require('../assets/logo.png')} style={styles.logoImg} />
        <TouchableOpacity>
          <EvilIcons size={35} color='rgb(134,134,134)' name='search'/>
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
    paddingHorizontal: 30,
    marginBottom: 0,
    marginTop: APPBAR_HEIGHT,
  },
  logoImg: {
    width: 120,
    height: 42,
    resizeMode: 'cover',
    alignSelf:'center',
  },
})
