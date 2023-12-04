import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    verticalAlign: 'middle',
    marginVertical: 20,
  },
});
