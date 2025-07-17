import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import { CategoryType } from '../types';

const categories: CategoryType[] = [
  {
    id: 1,
    title: "Theme Parks",
    count: "20+ magical experiences",
    image: "https://images.unsplash.com/photo-1569074187113-fd9a04f7cb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "Luxury Dining",
    count: "50+ culinary destinations",
    image: "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "Premium Hotels",
    count: "30+ luxury stays",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#"
  },
  {
    id: 4,
    title: "Entertainment",
    count: "40+ nightlife venues",
    image: "https://images.unsplash.com/photo-1595629116586-8e180b8da08a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#"
  }
];

const FeaturedCategories: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Experience Orlando's Finest</Text>
        <Text style={styles.subtitle}>
          From world-class theme parks to culinary adventures and luxury accommodations, 
          find the perfect experiences for your Orlando getaway.
        </Text>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    backgroundColor: '#f9fafb',
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 300,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
});

export default FeaturedCategories; 