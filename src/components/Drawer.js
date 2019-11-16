import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, Switch } from 'react-native';
import APPBAR_HEIGHT from '../constant/APPBAR_HEIGHT';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default class Drawer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nightVisionOn: false,
        }
    }
    nightVisionSwitch = (value) => { this.setState({ nightVisionOn: value }) }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity>
                        <Image style={styles.avatar} source={require('../assets/images/avatar1.jpg')}></Image>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.name}>Kiona Anh</Text>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons size={25} color="#bd0000" name='account-switch' />
                                <Text style={styles.redText}>Switch</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <Text style={styles.label}>Settings</Text>
                <View style={styles.settings}>
                    <Ionicons name={Platform.OS === 'ios' ? 'ios-cloudy-night' : 'md-cloudy-night'} size={27}/>
                    <Text style={styles.label}>Night Vision</Text>
                    <Switch style={styles.switch} 
                        value={this.state.nightVisionOn}
                        onValueChange={this.nightVisionSwitch}/>
                </View> */}
                <View style={{height:'100%'}}>
                    <View style={styles.br}/>
                    <TouchableOpacity style={styles.list}>
                        <Text style={styles.listItem}>Account Settings</Text>
                    </TouchableOpacity>
                    <View style={styles.br}/>
                    <TouchableOpacity style={styles.list}>
                        <Text style={styles.listItem} onPress={() => {alert('Call 0991.854?')}}>Call for Supports</Text>
                    </TouchableOpacity>
                    <View style={styles.br}/>
                    <TouchableOpacity style={styles.list} onPress={() => {alert('Do you want to connect with your friend on Twitter?')}}>
                        <Text style={styles.listItem}>Connect to Twitter</Text>
                    </TouchableOpacity>
                    <View style={styles.br}/>
                    <TouchableOpacity style={styles.list}>
                        <Text style={styles.listItem} onPress={() => {alert('Do you want to connect with your friend on Facebook?')}}>Connect to Facebook</Text>
                    </TouchableOpacity>
                    <View style={styles.br}/>
                    <TouchableOpacity style={styles.list}>
                        <Text style={styles.listItem}>Sign Out</Text>
                    </TouchableOpacity>
                    <View style={styles.br}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: APPBAR_HEIGHT + 30,
        width: '100%',
        backgroundColor: '#1B1B1B',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 20,
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        marginVertical: 20,
        color: '#f0f1f1',
    },
    settings: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    switch: {
        position: 'absolute',
        right: 5,
    },
    row: {
        width: '100%',
        padding: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 0,
    },
    redText: {
        color: '#bd0000',
        justifyContent: 'flex-start',
        marginLeft: 5,
    },
    list: {
        backgroundColor: '#181818',
        height: '10%',
        justifyContent:'center',
    },
    br: {
        backgroundColor:'#444',
        width: '100%',
        height: 1,
    },
    listItem: {
        fontSize: 16,
        fontWeight: '500',
        color: '#f0f1f1',
        marginLeft: '5%',
    },
})