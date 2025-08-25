import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CustomFooter from '../components/CustomFooter';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  console.log('HomeScreen component mounted - starting to load Hero component');

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Hero navigation={navigation} />
      <CustomFooter navigation={navigation} />
    </ScrollView>   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen; 