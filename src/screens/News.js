import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'
import { reviews } from '../data'
import { Entypo } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import {news} from '../data'

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default class News extends Component {
  static navigationOptions = {
    header: null,
  };
  _newRender = (item) => (
    <View style={styles.newContainer} key={item.id}>
      <Image style={styles.poster} source={item.poster} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.source}>{item.src}</Text>
    </View>
  )
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header goBack={this.props.navigation.goBack} shouldGoBack={true} />
        {
          news.map(item => this._newRender(item))
        }
        <View style={styles.footer}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  newContainer: {
    width: '100%',
    paddingHorizontal: '6%',
    paddingTop: '4%',
  },
  footer: {
    width: '100%',
    height: winHeight / 15,
  },
  poster: {
    width: '100%',
    height: winHeight / 3.8,
    resizeMode: 'cover',
    marginTop: winHeight / 50,
    borderRadius: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    marginTop: 8,
  },
  source: {
    fontSize: 18,
    marginTop: 8,
  }
})
