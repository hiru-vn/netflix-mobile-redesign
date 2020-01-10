import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../components/Header'
import {searchResult} from '../data'
import {AntDesign} from '@expo/vector-icons'

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default class SearchResult extends Component {
    static navigationOptions = {
        header: null,
    };
    _renderItem = (item) => (
        <TouchableOpacity style={styles.itemContainer} key={item.id}
            onPress={() => this.props.navigation.navigate('Movie')}>
            <Text style={styles.textBold}>{item.name}</Text>
            <View style={styles.row}>
                <View style={styles.itemLeft}>
                    <Image style={styles.img} source={item.img}/>
                </View>
                <View style={styles.itemRight}>
                    <View style={styles.itemContent}>
                        <View style={styles.justifyBetween}>
                            <View>
                                <Text style={styles.text}>2 seasons</Text>
                                <Text style={styles.text}>24 Episodes</Text>
                            </View>
                            <View>
                                <Text style={styles.text}>Rating: 4.2</Text>
                            </View>
                        </View>
                    </View>
                    <AntDesign style={{alignSelf:'center'}} size={25} color='rgb(117,117,117)' name='right'/>
                </View>
            </View>
        </TouchableOpacity>
    )
    render() {
        return (
            <ScrollView style={styles.container}>
                <Header notSearch={true} shouldGoBack={true} title={' '} goBack={this.props.navigation.goBack}/>
                <Text style={styles.title}> Search Result for: Anime </Text>
                <View style={styles.padd}>
                {
                    searchResult.map(item => this._renderItem(item))
                }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: winWidth,
        backgroundColor: '#181818',
    },
    padd: {
        paddingHorizontal: '3%',
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        color: '#f0f1f1',
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 5,
        alignSelf: 'center',
    },
    text: {
        color: '#f0f1f1',
    },
    justifyBetween: {
        justifyContent:'space-between',
        height: '100%',
    },
    textBold: {
        color: '#f0f1f1',
        fontWeight: '500',
        fontSize: 14,
        marginBottom: 5,
    },
    img: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    itemLeft: {
        width: '50%',
    },
    itemRight: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1B1B1B',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingHorizontal: '3%',
        paddingVertical: 5,
    },
    itemContainer: {
        height: winWidth*9/10/3.236,
        marginVertical: winWidth/20,
    },
    row: {
        flexDirection: "row",
    },
    itemContent: {
        height: '100%',
    },
})