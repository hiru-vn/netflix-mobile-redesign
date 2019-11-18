import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import BaseScreen from '../screens/BaseScreen';
import History from '../screens/History';
import Share from '../screens/Share';
import News from '../screens/News';
import Posts from '../screens/Posts';
import DrawerSection from '../components/Drawer'
import Search from '../screens/Search';
import {horizontalTransitionConfig} from './transitions'
import Category from '../screens/Category';
import CategoryResult from '../screens/CategoryResult';
import SearchResult from '../screens/SearchResult';
import ChangeAccount from '../screens/ChangeAccount';

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
    Search: {
        screen: Search,
    },
    Category: {
        screen: Category,
    },
    CategoryResult: {
        screen: CategoryResult,
    },
    SearchResult: {
        screen: SearchResult,
    },
    ChangeAccount: {
        screen: ChangeAccount,
    }
},  
    {
        initialRouteName: 'Movie',
        horizontalTransitionConfig,
    }
);

const Drawer = DrawerSection

const drawer = createDrawerNavigator(
  {
    Initial: RootStack
  },
  {
    contentComponent: Drawer
  }
);

const MainNav = createAppContainer(drawer)

const appContainer = () => {
    return(
        <BaseScreen>
            <MainNav />
        </BaseScreen>
    )
}

export default appContainer;