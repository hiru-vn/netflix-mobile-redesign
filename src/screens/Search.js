import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { SearchBar } from 'react-native-elements';
import APPBAR_HEIGHT from '../constant/APPBAR_HEIGHT';
import { category } from '../data';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            onSearching: false,
            searchText: '',
        }
    }
    updateSearch = (text) => {
        this.setState({
            searchText: text,
        })
    }
    componentDidMount() {
        this.search.focus();
    }
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.container}>
                <SearchBar placeholder="Search movies name and categories"
                    onFocus={() => this.setState({ onSearching: true })}
                    onBlur={() => this.setState({ onSearching: false })}
                    ref={search => this.search = search}
                    round={true}
                    containerStyle={styles.black}
                    onChangeText={this.updateSearch}
                    value={this.state.searchText} />
                {
                    this.state.onSearching && this.state.searchText != '' &&
                    <View style={styles.dropdown}>
                        {
                            category.filter(item => item.name.includes(this.state.searchText)).map(item =>
                                (<TouchableOpacity key={item.id}>
                                    <Text style={styles.category}>{item.name}</Text>
                                </TouchableOpacity>))
                        }
                    </View>
                }
                <View style={styles.hashtagContainer}>
                    {
                        category.map(item =>
                            (<TouchableOpacity key={item.id}>
                                <Text style={styles.hashtag}>{item.name}</Text>
                            </TouchableOpacity>))
                    }
                </View>
                <TouchableOpacity style={styles.back} onPress={() => { this.props.navigation.goBack() }}>
                    <View style={styles.row}>
                        <AntDesign size={25} color='#f0f1f1' name='left' />
                        <Text style={{ color: '#f0f1f1' }}>Back</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    black: {
        backgroundColor: '#181818',
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
    },
    back: {
        marginLeft: '2%',
        marginTop: '2%',
    },
    container: {
        width: '100%',
        height: '100%',
        paddingTop: APPBAR_HEIGHT,
        backgroundColor: '#181818',
    },
    dropdown: {
        marginHorizontal: '6%',
        paddingHorizontal: '5%',
        marginTop: -8,
        backgroundColor: '#777',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    category: {
        marginVertical: 10,
    },
    hashtagContainer: {
        flexWrap: 'wrap',
        width: '100%',
        flexDirection: 'row',
    },
    hashtag: {

        paddingHorizontal: 15,
        paddingVertical: 8,
        marginLeft: 15,
        marginVertical: 8,
        fontSize: 14,
        backgroundColor: '#d45253',
        color: '#f0f1f1',
        borderRadius: 3,
        alignSelf: 'center',
    },
})
