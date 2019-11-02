import styles from "../styles";
import React, { Component } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    FlatList,
    ScrollView
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { MyList, Movies, Popular, Friends } from "../data";
import { LinearGradient } from "expo-linear-gradient";
import ListMain from "../components/ListMain";

const { width: winWidth, height: winHeight } = Dimensions.get("window");
const listButton = [
    { id: 0, text: "CATEGORY" },
    { id: 1, text: "HISTORY" },
    { id: 2, text: "REVIEWS" }
];

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            movies: Movies
        };
        this._carousel = {};
    }
    handleSnapToItem = index => {
        console.log("snapped to ", index);
        //go to
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
                </TouchableOpacity>
            </View>
        );
    };
    _renderButton = item => {
        return (
            <TouchableOpacity>
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