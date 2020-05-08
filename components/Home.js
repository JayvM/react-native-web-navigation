import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Link } from '@react-navigation/native';

import NavigationBar from './NavigationBar';
import { navigationConfig } from '../navigation.config';

export default function Home(props) {
  props.navigation.setOptions({title: 'Home'});

  return (
    <View style={styles.container}>
      {!navigationConfig.native && <NavigationBar activeLink='home'></NavigationBar>}
      <View style={styles.content}>
        <Text style={styles.title}>Home page</Text>
        <Button title='Go to Account' onPress={() => props.navigation.navigate('rootAccount', {screen: 'account'})}></Button>
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
  }
});
