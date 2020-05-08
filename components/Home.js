import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Link } from '@react-navigation/native';

import NavigationBar from './NavigationBar';
import { appConfig } from '../app.config';

export default function Home(props) {
  props.navigation.setOptions({title: 'Home'});

  return (
    <View style={styles.container}>
      {!appConfig.nativeNavigation && <NavigationBar activeLink='home'></NavigationBar>}
      <View style={styles.content}>
        <Text style={styles.title}>Home page</Text>
        <Link style={styles.link} to='/account'>Go to Account</Link>
        <Button title='Go to Account' onPress={() => props.navigation.navigate('account')}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
