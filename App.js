import 'react-native-gesture-handler';

import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './components/Home';
import Account from './components/Account';
import Settings from './components/Settings';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const linking = {
  config: {
    home: '/home',
    account: '/account',
    settings: 'settings'
  }
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Drawer.Navigator>
        <Drawer.Screen name="home" component={HomeRoot}></Drawer.Screen>
        <Drawer.Screen name="account" component={AccountRoot}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const options = {
  headerStyle: {
    backgroundColor: '#3CB371',
  },
  headerTintColor: '#333333'
  //animationEnabled: true
};

const navigationOptions = ({navigation}) => ({
  headerLeft: () => (
    <Icon style={{marginLeft: 16}} color='#333333' size={24} name='bars' onPress={() => navigation.openDrawer()}></Icon>
  ),
  ...options
});

function HomeRoot() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='main' component={Home} options={navigationOptions}></Stack.Screen>
    </Stack.Navigator>
  );
}

function AccountRoot() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='main' component={Account} options={navigationOptions}></Stack.Screen>
      <Stack.Screen name='settings' component={Settings} options={options}></Stack.Screen>
    </Stack.Navigator>
  );
}
