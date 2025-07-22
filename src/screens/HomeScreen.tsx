import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Hero from '../components/Hero';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Hero navigation={navigation} />
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