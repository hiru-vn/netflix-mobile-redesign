import TabMovie from '../components/TabMovie'
import TabDocumentary from '../components/TabDocumentary'
import TabShow from '../components/TabShow'
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'

const TabScreen = createMaterialTopTabNavigator(
  {
    TabShow: { screen: TabShow },
    Movie: { screen: TabMovie },
    Documentary: { screen: TabDocumentary },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      upperCaseLabel: false,
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#f8f8f8',
      style: {
        backgroundColor: '#1B1B1B',
        height: 45,
      },
      labelStyle: {
        textAlign: 'center',
        fontSize: 14,
      },
      indicatorStyle: {
        borderTopColor: '#db0000',
        borderTopWidth: 3,
        backgroundColor: '#181818',
      },
    },
  }
);

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  switch: TabScreen,
  //Inner: ReportTabNavigator,
});

export default createAppContainer(switchNavigator);
