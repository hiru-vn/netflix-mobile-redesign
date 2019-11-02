import React, { Component } from 'react';
import {AntDesign} from '@expo/vector-icons'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class ListSecondary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            list: props.list,
        };
    }
    _renderList = (item) => {
        return (
            <TouchableOpacity>
                <Image style={styles.imgListItem} source={item.item.src} />
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
        marginLeft: 10,
    },
    imgListItem: {
        height: 120,
        width: 170,
        marginLeft: 15,
        borderRadius: 10,
        resizeMode: "cover",
        marginVertical: 5,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginRight: 20,
        marginTop: 10,
    },
    title: {
        color: 'rgb(117,117,117)',
        marginLeft: 10,
        fontSize: 20,
        fontWeight: '700',
    },
})
