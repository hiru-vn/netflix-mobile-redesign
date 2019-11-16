import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Image ,Platform, Switch} from 'react-native';
import APPBAR_HEIGHT from '../constant/APPBAR_HEIGHT';

export default class Drawer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nightVisionOn : false,
        }
    }
    nightVisionSwitch = (value)=>{this.setState({nightVisionOn:value})}
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image style={styles.avatar} source={require('../assets/images/avatar.png')}></Image>
                </TouchableOpacity> 
                <Text style={styles.name}>Kiona Anh</Text>
                <Text style={styles.label}>Settings</Text>
                <View style={styles.settings}>
                    <Ionicons name={Platform.OS === 'ios' ? 'ios-cloudy-night' : 'md-cloudy-night'} size={27}/>
                    <Text style={styles.label}>Night Vision</Text>
                    <Switch style={styles.switch} 
                        value={this.state.nightVisionOn}
                        onValueChange={this.nightVisionSwitch}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: APPBAR_HEIGHT+10,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#1B1B1B',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 70,
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        marginVertical: 20,
    },
    settings:{
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    label :{
        fontSize: 16,
        marginHorizontal: 10,
    },
    switch: {
        position:'absolute',
        right: 5,
    },
    
})