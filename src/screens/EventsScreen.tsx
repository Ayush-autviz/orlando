import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';

const EventsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Events</Text>
        <Text style={styles.subtitle}>Coming soon...</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
});

export default EventsScreen; 