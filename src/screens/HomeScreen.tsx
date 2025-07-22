import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import Hero from '../components/Hero';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Hero />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default HomeScreen; 