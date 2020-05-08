import 'react-native-gesture-handler';

import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from './components/Home';
import Account from './components/Account';
import Settings from './components/Settings';
import { appConfig } from './app.config';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const linking = {
  config: {
    rootHome: {
      path: 'home',
      screens: {
        home: 'home'
      }
    },
    rootAccount: {
      path: 'account',
      screens: {
        account: 'account',
        settings: 'account/settings'
      }
    }
  }
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Drawer.Navigator>
        <Drawer.Screen name="rootHome" component={HomeStack} options={{title: 'Home'}}></Drawer.Screen>
        <Drawer.Screen name="rootAccount" component={AccountStack} options={{title: 'Account'}}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const options = {
  ...(!appConfig.nativeNavigation ? {headerShown: false} : null),
  headerStyle: {
    backgroundColor: '#3CB371'
  },
  headerTintColor: '#333333',
  //animationEnabled: true
};

const rootOptions = ({navigation}) => ({
  headerLeft: () => (
    <Icon style={{marginLeft: 16}} color='#333333' size={24} name='bars' onPress={() => navigation.openDrawer()}></Icon>
  ),
  ...options
});

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='home' component={Home} options={rootOptions}></Stack.Screen>
    </Stack.Navigator>
  );
}

function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='account' component={Account} options={rootOptions}></Stack.Screen>
      <Stack.Screen name='settings' component={Settings} options={options}></Stack.Screen>
    </Stack.Navigator>
  );
}
