import React, { Component } from 'react';
import {AntDesign} from '@expo/vector-icons'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Recently extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            list: props.list,
        };
    }
    _renderList = (item) => {
        return (
            <TouchableOpacity style={{marginLeft: 15}}>
                <Image style={styles.imgListItem} source={item.item.src} />
                <View style={{flexDirection:'row',width:130*1.8, height:1,}}>
                    <View style={{width:"70%", height:1, backgroundColor:'#DB0000'}}></View>
                    <View style={{width:"30%", height:1, backgroundColor:'#f1f1f1'}}></View>
                </View>
                <View style={styles.itembottom}>
                    <Text style={styles.textBold}>Black Panther</Text>
                    <Text style={styles.text}>S2E1: The bad begin...</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> {this.state.title} </Text>
                    <TouchableOpacity><AntDesign size={27} color='rgb(117,117,117)' name='arrowright'/></TouchableOpacity>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={{ flex: 1 }}
                    data={this.state.list}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this._renderList}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
    },
    imgListItem: {
        height: 130,
        width: 130*1.8,
        resizeMode: "cover",
        marginTop: 10,
        borderTopLeftRadius: 3,
        borderBottomRightRadius: 3,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        paddingRight: 10,
        marginTop: 10,
    },
    title: {
        color: '#f0f1f1',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '700',
    },
    itembottom: {
        padding: 10,
        backgroundColor: '#000',
    },
    text: {
        color: '#f0f1f1',
    },
    textBold: {
        color: '#f0f1f1',
        fontWeight: '600',
    }
})
