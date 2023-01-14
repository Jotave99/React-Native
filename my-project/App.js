import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Title from './src/components/title';
import Main from './src/components/main';
import Form from './src/components/form';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá, tudo bem?</Text>
      <Title/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80,
  },
});
