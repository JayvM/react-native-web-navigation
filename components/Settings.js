import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Settings(props) {
  props.navigation.setOptions({title: 'Settings'});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings page</Text>
      <Text style={styles.text}>Passed parameter: {props.route.params.name}</Text>
      <Button title='Go back' onPress={() => props.navigation.goBack()}></Button>
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
    fontSize: 20,
    marginBottom: 16
  },
  text: {
    marginBottom: 16
  }
});
