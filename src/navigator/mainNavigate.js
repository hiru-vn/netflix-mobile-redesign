import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import BaseScreen from '../screens/BaseScreen';
import History from '../screens/History';
import Share from '../screens/Share';
import Explore from '../screens/Explore';
import News from '../screens/News';
import Posts from '../screens/Posts';

const RootStack = createStackNavigator({
    Home: {
        screen: Home,
    },
    Movie: {
        screen: Movie,
        navigationOptions: {
          header: null
        },
    },
    History: {
        screen: History,
    },
    Share: {
        screen: Share,
    },
    News: {
        screen: News,
    },
    Posts: {
        screen: Posts,
    },
},
    {
        initialRouteName: 'Home',
    }
);

const MainNav = createAppContainer(RootStack)

const appContainer = () => {
    return(
        <BaseScreen>
            <MainNav />
        </BaseScreen>
    )
}

export default appContainer;