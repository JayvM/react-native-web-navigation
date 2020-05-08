import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { Link } from '@react-navigation/native';

import NavigationBar from './NavigationBar';
import { NavigationConfig } from '../navigation.config';

export default function Account(props) {
  props.navigation.setOptions({
    title: 'Account',
    headerRight: () => (
      <TouchableOpacity style={styles.headerButton} onPress={() => props.navigation.navigate('settings', {name: 'Max'})}>
        <Text style={styles.headerButtonText}>Go to settings</Text>
      </TouchableOpacity>
    ),
  });

  return (
    <View style={styles.container}>
      {!NavigationConfig.native && <NavigationBar activeLink='account'></NavigationBar>}
      <View style={styles.content}>
        <Text style={styles.title}>Account page</Text>
        {!NavigationConfig.native && <Link style={styles.link} to='/account/settings?name=Max'>Go to Settings</Link>}
        <Button title='Go to Home' onPress={() => props.navigation.navigate('rootHome', {screen: 'home'})}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    marginRight: 16
  },
  headerButtonText: {
    fontSize: 18,
    color: '#333333'
  },
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginBottom: 16,
    fontSize: 20
  },
  link: {
    marginBottom: 16
  }
});
