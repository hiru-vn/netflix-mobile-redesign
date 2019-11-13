import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity ,Text} from 'react-native';
import { EvilIcons, Feather } from '@expo/vector-icons'
import APPBAR_HEIGHT from '../constant/APPBAR_HEIGHT';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldGoBack: props.shouldGoBack?true:false,
      title: props.title,
    };
  }

  menu = () => {
    this.props.openDrawer()
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={this.state.shouldGoBack? () => this.props.goBack() : ()=>this.menu()}>
          <Feather size={25} color='rgb(134,134,134)' name={this.state.shouldGoBack?'arrow-left':'menu'} />
        </TouchableOpacity>
        {
          this.state.title?
          <Text style={styles.title}>{this.state.title}</Text>:
          <Image source={require('../assets/logo.png')} style={styles.logoImg} />
        }
        <TouchableOpacity onPress={() => this.props.openSearch()}>
          <EvilIcons size={30} color='rgb(134,134,134)' name='search'/>
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
    paddingHorizontal: '5%',
    marginBottom: 0,
    marginTop: APPBAR_HEIGHT,
  },
  logoImg: {
    width: 120,
    height: 34,
    resizeMode: 'cover',
    alignSelf:'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  }
})
