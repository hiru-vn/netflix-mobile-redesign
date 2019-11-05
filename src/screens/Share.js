import React, { Component } from 'react';
import { View, Text, StyleSheet, Image ,Dimensions, CheckBox,TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}> REVIEW ON STRANGER THINGS </Text>
        </View>
        <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={require('../assets/images/avatar.png')} />
        </View>
        <View style={styles.rateContainer}>
            <Entypo size={25} color='#bd1818' name='star' />
            <Entypo size={25} color='#bd1818' name='star' />
            <Entypo size={25} color='#bd1818' name='star' />
            <Entypo size={25} color='#bd1818' name='star' />
            <Entypo size={25} color='black' name='star' />
        </View>
        <View style={styles.pointContainer}>
            <Text style={styles.point}>8.0</Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput 
            blurOnSubmit={true}
            multiline={true}
            style={styles.input} 
            underlineColorAndroid="transparent"
            placeholder="All Clara wants is a key - a one-of-a-kind key that will unlock a box that holds a pricelessgift from her late mother. A golden thread, presented o ther at godfather Drosslemeyer’s anual holiday party, leads her to the coverted key-which promptly disappears into astrange and mys terious parallel world...
            party, leads her to the coverted key-which promptly disappears into astrange and mys terious parallel world..."
            placeholderTextColor="grey"
            />
        </View>
        <View style={styles.checkContainer}>
            <CheckBox styles={styles.check}/>
            <Text style={styles.checkContent} multiline={true}>Share this review with friends</Text>
        </View>
        <View style={styles.shareContainer}>
            <TouchableOpacity>
                <LinearGradient
                    colors={["#d45253", "#9e1f28"]}
                    style={styles.share}
                >
                    <Text style={styles.whiteText}>
                        POST
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    titleContainer: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
    },
    avatarContainer: {
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        height: winHeight/10,
        width: winHeight/10,
        borderRadius: 100,
    },
    rateContainer: {
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    pointContainer: {
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    point: {
        fontSize: 16,
        fontWeight: '600',
    },
    inputContainer: {
        height: '45%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        justifyContent: "flex-start",
        textAlignVertical: 'top',
        height: '100%',
        width: '85%',
        borderRadius: 20,
        borderWidth: 2,
        paddingHorizontal: 20,
        fontSize: 14,
    },
    checkContainer: {
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        width: '90%',
    },
    checkContent: {
        fontSize: 16,
        fontWeight: '600',
    },
    check: {
        borderRadius: 10,
        marginRight: 10,
    },
    shareContainer: {
        height: '15%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    share: {
        width: winWidth/1.5,
        height: winWidth/7,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    whiteText: {
        color: '#fff',
        letterSpacing: 1.8,
        fontSize: 18,
        fontWeight: "700",
    },
})