import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Link } from '@react-navigation/native';

export default function NavigationBar(props) {
  return (
    <View style={styles.container}>
      <Link style={[styles.link, props.activeLink === 'home' ? styles.active : null]} to='/home'>Home</Link>
      <Link style={[styles.link, props.activeLink === 'account' ? styles.active : null]} to='/account'>Account</Link>
      <Link style={[styles.link, props.activeLink === 'settings' ? styles.active : null]} to='/account/settings?name=Max'>Settings</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: '#3CB371'
  },
  link: {
    marginRight: 16,
    fontSize: 18,
    color: '#333333'
  },
  active: {
    textDecorationLine: 'underline'
  }
});
