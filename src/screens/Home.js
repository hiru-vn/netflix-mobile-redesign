import styles from "../styles";
import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    FlatList,
    ScrollView,
    StyleSheet,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { MyList, Movies, Popular, Friends, Recent } from "../data";
import { LinearGradient } from "expo-linear-gradient";
import ListMain from "../components/ListMain";
import Header from "../components/Header";
import Recently from "../components/Recently";
import { AntDesign } from '@expo/vector-icons'

const { width: winWidth, height: winHeight } = Dimensions.get("window");
const listButton = [
    { id: 0, text: "CATEGORY" },
    { id: 1, text: "HISTORY" },
    { id: 2, text: "REVIEWS" },
    //{ id: 3, text: "NEWS" },
];

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            movies: Movies
        };
        this._carousel = {};
    }
    static navigationOptions = {
        header: null,
    };
    handleSnapToItem = index => {
        //go to
    };
    openSearch = () => {
        this.props.navigation.navigate('Search')
    }
    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.ThumbnailBackgroundView}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Movie', { 'item': item })
                    }}
                >
                    <Image style={styles.CurrentImage} source={item.poster} />
                </TouchableOpacity>
            </View>
        );
    };
    navSection = (item) => {
        if (item.id == 3) this.props.navigation.navigate('News', { 'item': item })
        if (item.id == 2) this.props.navigation.navigate('Posts', { 'item': item })
        if (item.id == 1) this.props.navigation.navigate('History', { 'item': item })
        if (item.id == 0) this.props.navigation.navigate('Category', { 'item': item })
    }
    _renderButton = item => {
        return (
            <TouchableOpacity onPress={() => this.navSection(item.item)}>
                <LinearGradient
                    colors={["#d45253", "#9e1f28"]}
                    style={styles.buttonMain}
                >
                    <Text style={styles.whiteText}>
                        {item.item.text}
                    </Text>
                    {/* <Image style={styles.buttonImage} source={require('../assets/images/spiderman_2.jpg')} /> */}
                </LinearGradient>
            </TouchableOpacity>
        );
    };
    render() {
        return (
            <ScrollView style={styles.homeContainer}>
                <Header openDrawer={this.props.navigation.openDrawer} openSearch={this.openSearch} />
                <View style={_styles.titleContainer}>
                    <Text style={_styles.title}> Recommend for You </Text>
                </View>
                <View style={styles.recommedList}>
                    <Carousel
                        ref={c => {
                            this._carousel = c;
                        }}
                        data={this.state.movies}
                        renderItem={this._renderItem}
                        onSnapToItem={this.handleSnapToItem}
                        sliderWidth={winWidth}
                        itemWidth={300}
                        layout={"default"}
                        firstItem={1}
                    />
                </View>
                <Recently list={Recent} title='Continue Watching' />
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={{ flex: 1, marginTop: 20 }}
                    data={listButton}
                    keyExtractor={item => item.text}
                    renderItem={this._renderButton}
                />
                <ListMain list={MyList} title='My List' />
                <ListMain list={Popular} title='Popular on Netflix' />
                <ListMain list={Friends} title='Your friend also like' />
            </ScrollView>
        );
    }
}

const _styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        paddingHorizontal: 5,
        marginTop: 10,
    },
    title: {
        color: '#f0f1f1',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '700',
    },
})