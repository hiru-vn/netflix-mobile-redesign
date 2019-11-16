import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'
import { reviews } from '../data'
import { Entypo } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default class Posts extends Component {
    static navigationOptions = {
        header: null,
    };
    _reviewRender = (item) => (
        <View style={styles.reviewContainer} key={item.id}>
            <View style={styles.reviewHeader}>
                <Image style={styles.avatar} source={item.avatar} />
                <View style={styles.info}>
                    <Text style={styles.title}>{item.name} reviews on</Text>
                    <Text style={styles.movie}>{item.movie.name}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                    <View style={styles.rateContainer}>
                        <Entypo size={20} color='#bd1818' name='star' />
                        <Entypo size={20} color='#bd1818' name='star' />
                        <Entypo size={20} color='#bd1818' name='star' />
                        <Entypo size={20} color='#bd1818' name='star' />
                        <Entypo size={20} color='black' name='star' />
                    </View>
                </View>
            </View>
            <Text style={styles.reviewConent}>{item.review}</Text>
            <Image style={styles.poster} source={item.movie.poster} />
        </View>
    )
    render() {
        return (
            <ScrollView style={styles.container}>
                <Header goBack={this.props.navigation.goBack} shouldGoBack={true} notSearch={true}/>
                {
                    reviews.map(item => this._reviewRender(item))
                }
                <View style={styles.footer}></View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#181818',
    },
    footer: {
        width: '100%',
        height: winHeight/15,
    },
    reviewContainer: {
        width: '100%',
        paddingHorizontal: '6%',
        paddingTop: '4%',
    },
    rateContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    reviewConent: {
        width: '100%',
        height: winHeight / 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    reviewHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    avatar: {
        height: winWidth / 6,
        width: winWidth / 6,
        resizeMode: 'cover',
        borderRadius: winWidth / 12,
        marginRight: 10,
    },
    info: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        color: '#f0f1f1',
    },
    movie: {
        fontWeight: '700',
        color: '#f0f1f1',
    },
    time: {
        fontSize: 11,
        color: '#f0f1f1',
    },
    reviewConent: {
        marginTop: winHeight/50,
        color: '#f0f1f1',
    },
    poster: {
        width: '100%',
        height: winHeight / 5,
        resizeMode: 'cover',
        marginTop: winHeight/50,
        borderRadius: 3,
    }
})
