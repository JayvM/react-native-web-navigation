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

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen name="Account" component={AccountScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const options = {
  headerStyle: {
    backgroundColor: '#3CB371',
  },
  headerTintColor: '#333333'
};

const navigationOptions = ({navigation}) => ({
  headerLeft: () => (
    <Icon style={{marginLeft: 16}} color='#333333' size={24} name='bars' onPress={() => navigation.openDrawer()}></Icon>
  ),
  ...options
});

function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name='Home' component={Home} options={navigationOptions}></Stack.Screen>
    </Stack.Navigator>
  );
}

function AccountScreen() {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen name='Account' component={Account} options={navigationOptions}></Stack.Screen>
      <Stack.Screen name='Settings' component={Settings} options={options}></Stack.Screen>
    </Stack.Navigator>
  );
}
