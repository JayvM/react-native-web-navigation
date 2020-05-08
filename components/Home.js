import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from '@react-navigation/native';

export default function Home(props) {
  props.navigation.setOptions({title: 'Home'});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home page</Text>
      <Link style={styles.link} to='/account'>Go to Account</Link>
      <Button title='Go to Account' onPress={() => props.navigation.navigate('account')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
