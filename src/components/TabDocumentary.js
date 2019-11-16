import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image, Dimensions, TouchableOpacity} from 'react-native';
import { tvShowCategory } from '../data';

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default class TabDocumentary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    tabBarLabel: 'Documentaries',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}> Choose a Documentary category </Text>
        <View style={styles.content}>
          {
            tvShowCategory.map(item => (
              <View style={styles.category} key={item.id}>
                <TouchableOpacity onPress={() => this.props.screenProps.nav('CategoryResult')}>
                    <Image source={item.img} style={styles.categoryImg}/>
                </TouchableOpacity>
                <Text style={styles.name}>{item.name}</Text>
              </View>
            ))
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: '2%',
    paddingTop: '5%',
  },
  label: {
    fontSize: 16,
    color: '#f0f1f1',
  },
  name: {
    fontSize: 16,
    color: '#f0f1f1',
    alignSelf: 'center',
    marginVertical: 5,
  },
  content: {
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  category: {
    marginTop: '5%',
  },
  categoryImg: {
    height: winWidth/100*28,
    width: winWidth/100*28,
    borderRadius: 3,
  },
})
