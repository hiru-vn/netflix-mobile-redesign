import React, { Component } from 'react';
import { View, Text ,StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import { accounts } from '../data';

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default class ChangeAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    header: null,
  };

  _renderItem = item => (
    <TouchableOpacity style={styles.itemContainer} 
        key = {item.id}
        onPress={() => this.props.navigation.navigate("Home")}>
        <Image style={styles.img} source={item.img}/>
        <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  )

  render() {
    return (
      <View style={styles.container}>
        <Header logoOnly={true} notSearch={true} shouldGoBack={true} goBack={this.props.navigation.goBack}/>
        <Text style={styles.header}> Who is Online? </Text>
        <View style={styles.accountContainer}>
            {
                accounts.map(item => this._renderItem(item))
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
        backgroundColor: '#181818',
    },
    header: {
        fontSize: 22,
        fontWeight: '600',
        letterSpacing: 1.5,
        alignSelf: 'center',
        color: '#f0f1f1',
        marginTop: '30%',
        marginBottom: '4%',
    },
    accountContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingHorizontal: '5%',
        width: '100%',
        justifyContent: 'center',
    },
    itemContainer: {
        alignItems: 'center',
        width:  winWidth*26/100,
        marginVertical: '2%',
        marginHorizontal: '2%',
    },
    img: {
        width:  winWidth*26/100,
        height: winWidth*26/100,
        marginBottom: 5,
        borderRadius: 5,
        resizeMode: 'cover',
    },
    name: {
        color: '#f0f1f1',
        fontSize: 16,
        fontWeight: '500',
    }
})
