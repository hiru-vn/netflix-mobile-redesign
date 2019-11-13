import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { SearchBar } from 'react-native-elements';
import APPBAR_HEIGHT from '../constant/APPBAR_HEIGHT';
import { category } from '../data';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
                <SearchBar placeholder="Type Here..."
                    onFocus={() => this.setState({onSearching:true})}
                    onBlur={() => this.setState({onSearching:false})}
                    ref={search => this.search = search}
                    lightTheme={true}
                    round={true}
                    onChangeText={this.updateSearch}
                    value={this.state.searchText} />
                {
                this.state.onSearching && this.state.searchText!='' &&
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        marginTop: APPBAR_HEIGHT,
    },
    dropdown: {
        marginHorizontal: '6%',
        paddingHorizontal: '5%',
        marginTop: -9,
        backgroundColor: '#ddd',
    },
    category: {
        marginVertical: 10,
    },
    hashtagContainer: {
        backgroundColor: 'red',
        flexWrap: 'wrap',
        width: '100%',
        flexDirection: 'row',
    },
    hashtag : {
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginHorizontal: 15,
        marginVertical: 8,
        fontSize: 14,
        backgroundColor: '#d45253',
        color: '#eee',
        borderRadius: 15,
        alignSelf:'center',
    },
})
