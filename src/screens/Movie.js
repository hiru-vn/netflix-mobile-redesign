import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons'
import { customStyles } from '../styles';
import ListSecondary from '../components/ListSecondary';
import { Header as Head } from 'react-navigation-stack';

const { width: winWidth, height: winHeight } = Dimensions.get("window");
export default class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      like:false,
      item: this.props.navigation.getParam('item', null),
    };
  }
  render() {
    return (
      <ScrollView style={{ height: winHeight+Head.HEIGHT }}>
        <View style={styles.container}>
          <View style={styles.Header}>
            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
              <AntDesign size={33} color='black' name='arrowleft' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({like: !this.state.like})}>
              <AntDesign size={27} color={this.state.like?'#bd1818':'black'} name='heart' />
            </TouchableOpacity>
          </View>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={this.state.item.poster}></Image>
          </View>
          <View style={styles.top}>
            <View style={styles.topBottom}>
              <TouchableOpacity><Entypo size={27} name='plus' color='rgb(117,117,117)' /></TouchableOpacity>
              <TouchableOpacity style={styles.playButton}>
                <AntDesign size={37} name='caretright' color='#bd1818' />
              </TouchableOpacity>
              <TouchableOpacity><Entypo size={27} name='share' color='rgb(117,117,117)' /></TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode='middle'>{this.state.item.name}</Text>
            <Text style={styles.category} ellipsizeMode='middle'>Adventure, Family, Fantasy</Text>
            <View style={customStyles.row}>
              <Entypo size={27} color='#bd1818' name='star' />
              <Entypo size={27} color='#bd1818' name='star' />
              <Entypo size={27} color='#bd1818' name='star' />
              <Entypo size={27} color='#bd1818' name='star' />
              <Entypo size={27} color='black' name='star' />
            </View>
            <View style={[customStyles.row, customStyles.spaceAround, customStyles.fullWidth]}>
              <View style={[customStyles.alignCenter, customStyles.ml10]}>
                <Text style={[customStyles.mediumText, customStyles.bold, customStyles.gray]}>Year</Text>
                <Text style={[customStyles.bigText, customStyles.bold]}>2018</Text>
              </View>
              <View style={[customStyles.alignCenter, customStyles.ml20]}>
                <Text style={[customStyles.mediumText, customStyles.bold, customStyles.gray]}>Country</Text>
                <Text style={[customStyles.bigText, customStyles.bold]}>USA</Text>
              </View>
              <View style={[customStyles.alignCenter, customStyles.mr10]}>
                <Text style={[customStyles.mediumText, customStyles.bold, customStyles.gray]}>Length</Text>
                <Text style={[customStyles.bigText, customStyles.bold]}>112 min</Text>
              </View>
            </View>
            <Text style={[styles.short, customStyles.smallText, customStyles.bold, customStyles.gray]}>
              All Clara wants is a key - a one-of-a-kind key that will unlock a box that holds a pricelessgift from her late mother. A golden thread, presented o ther at godfather Drosslemeyer’s anual holiday party, leads her to the coverted key-which promptly disappears into astrange and mys terious parallel world...
          </Text>
            <ListSecondary list={this.state.item.screenShots} title='Screenshots' />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: winWidth,
    height: winHeight+Head.HEIGHT,
  },
  top: {
    flex: winHeight/2,
    width: winWidth,
    alignItems: "center",
    justifyContent: 'flex-end',
  },
  bottom: {
    flex: winHeight/2,
    width: winWidth,
    alignItems: 'center',
  },
  imgContainer: {
    height: winHeight/100*62,
    width: '150%',
    position: 'absolute',
    resizeMode: 'cover',
    top: '-9%',
    alignSelf: 'center',
    borderRadius: 1000,
    alignItems: 'center',
  },
  img: {
    height: '90%',
    width: '90%',
    borderRadius: 1000,
    position: 'absolute',
    top: 0,
  },
  playButton: {
    height: 75,
    width: 75,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
    borderWidth: 1,
  },
  topBottom: {
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: '#000',
    width: '60%',
    fontWeight: '700',
    letterSpacing: 1.4,
    textAlign: 'center',
  },
  category: {
    fontSize: 15,
    color: 'rgb(141,141,141)',
    fontWeight: '600',
  },
  short: {
    width: '88%',
    textAlign: 'justify',
    marginVertical: 10,
  },
  screenShootHead: {
    width: '88%',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  Header: {
    width: '88%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    position: 'absolute',
    alignSelf: 'center',
    top: Head.HEIGHT,
    zIndex: 1,
  },
})
