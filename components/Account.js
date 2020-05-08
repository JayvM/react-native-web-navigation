import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function Account({navigation}) {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.headerButtonText}>Go to settings</Text>
      </TouchableOpacity>
    ),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account page</Text>
      <Button title='Go back' onPress={() => navigation.goBack()}></Button>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginBottom: 16,
    fontSize: 20
  }
});
