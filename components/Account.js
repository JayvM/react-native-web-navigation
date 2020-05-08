import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { Link } from '@react-navigation/native';

import NavigationBar from './NavigationBar';
import { appConfig } from '../app.config';

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
      {!appConfig.nativeNavigation && <NavigationBar activeLink='account'></NavigationBar>}
      <View style={styles.content}>
        <Text style={styles.title}>Account page</Text>
        <Link style={styles.link} to='/account/settings?name=Max'>Go to Settings</Link>
        <Link style={styles.link} to='/home'>Go to Home</Link>
        <Button title='Go to Home' onPress={() => props.navigation.navigate('home')}></Button>
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
