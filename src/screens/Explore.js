import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { LinearGradient } from "expo-linear-gradient";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView>
        <Header goBack={this.props.navigation.goBack} shouldGoBack={true} />
        <View style={styles.nav}>
          <TouchableOpacity>
            <LinearGradient
              colors={ActiveColors}
              style={styles.navButton}
            >
              <Text style={styles.whiteText}>
                REVIEWS
                    </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={InactiveColors}
              style={styles.navButton}
            >
              <Text style={styles.whiteText}>
                MOVIE NEWS
                    </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: winWidth,
    alignItems: 'center',
  },
  nav: {
    width: winWidth,
    height: winHeight / 7,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  whiteText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: "500",
  },
  navButton: {
    width: winWidth / 2.5,
    height: winWidth / 7,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  rateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
})

const ActiveColors = ["#d45253", "#9e1f28"]
const InactiveColors = ["#c3c3c3", "#939393"]
