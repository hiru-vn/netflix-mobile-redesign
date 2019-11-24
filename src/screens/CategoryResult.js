import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../components/Header';
import Carousel from "react-native-snap-carousel";
import { Movies, tvShowCategory } from "../data";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default class CategoryResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this._carousel = {};
  }
  static navigationOptions = {
    header: null,
  };
  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.ThumbnailBackgroundView}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Movie', { 'item': item })
          }}
        >
          <Image style={styles.CurrentImage} source={item.poster} />
          <Text style={styles.tint}>{item.name.toLowerCase()}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header notSearch={true} shouldGoBack={true} title={'TV Shows: Horror'} goBack={this.props.navigation.goBack} />
        <Text style={styles.label}>Popular in TV shows: Horror</Text>
        <View style={styles.recommedList}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={Movies}
            renderItem={this._renderItem}
            sliderWidth={winWidth}
            itemWidth={300}
            layout={"default"}
            firstItem={1}
          />
        </View>
        <Text style={styles.label}> TV shows: Horror </Text>
        <View style={styles.content}>
          {
            tvShowCategory.map(item => (
              <View style={styles.category} key={item.id}>
                <TouchableOpacity>
                  <Image source={item.img} style={styles.categoryImg} />
                </TouchableOpacity>
                <View style={styles.rate}>
                  <Text style={{ color: '#f0f1f1', fontSize: 12 ,letterSpacing: 1}}>Rate: 4.2</Text>
                </View>
              </View>
            ))
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#181818',
  },
  recommedList: {
    height: 200,
    width: '100%',
  },
  CurrentImage: {
    top: 25,
    width: 300,
    height: 170,
    borderRadius: 3,
  },
  ThumbnailBackgroundView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'red',
    shadowOffset: { height: 0, width: 0 },
  },
  label: {
    fontSize: 16,
    color: '#f0f1f1',
    marginHorizontal: '2%',
    marginTop: 20,
  },
  content: {
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    marginBottom: '10%',
  },
  category: {
    marginTop: '5%',
  },
  categoryImg: {
    height: winWidth / 100 * 30 * 1.41,
    width: winWidth / 100 * 30,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  tint: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 300,
    color: '#f0f1f1',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    fontWeight: '400',
    letterSpacing: 0.3,
  },
  rate: {backgroundColor: '#000',padding: 5, borderBottomLeftRadius:3, borderBottomRightRadius: 3,}
})