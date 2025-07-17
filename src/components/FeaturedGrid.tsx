import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Image } from 'react-native';

const { width } = Dimensions.get('window');

interface FeaturedItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

const FeaturedGrid: React.FC = () => {
  const featuredItems: FeaturedItem[] = [
    { id: 1, title: 'Bumblebee', image: 'https://images.unsplash.com/photo-1569074187113-fd9a04f7cb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1335&q=80', category: 'Theme Parks' },
    { id: 2, title: 'Kia Center', image: 'https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'Entertainment' },
    { id: 3, title: 'City Skyline', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'Neighborhoods' },
    { id: 4, title: 'Roller Coaster', image: 'https://images.unsplash.com/photo-1595629116586-8e180b8da08a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'Attractions' },
    { id: 5, title: 'Resort Pool', image: 'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2274&q=80', category: 'Hotels' },
    { id: 6, title: 'Beach Scene', image: 'https://images.unsplash.com/photo-1569074187113-fd9a04f7cb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1335&q=80', category: 'Attractions' },
    { id: 7, title: 'Spider-Man', image: 'https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'Theme Parks' },
    { id: 8, title: 'Avatar Flight', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'Theme Parks' },
    { id: 9, title: 'Alligator', image: 'https://images.unsplash.com/photo-1595629116586-8e180b8da08a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'Attractions' },
    { id: 10, title: 'Disney Castle', image: 'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2274&q=80', category: 'Theme Parks' },
    { id: 11, title: 'Hotel Building', image: 'https://images.unsplash.com/photo-1569074187113-fd9a04f7cb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1335&q=80', category: 'Hotels' },
    { id: 12, title: 'Shopping Mall', image: 'https://images.unsplash.com/photo-1519690889869-e705e59f72e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'Shopping' },
  ];

  const handleItemPress = (item: FeaturedItem) => {
    console.log('Featured item pressed:', item.title);
    // TODO: Navigate to item detail screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Featured Attractions</Text>
        <Text style={styles.subtitle}>Discover Orlando's most popular destinations</Text>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.gridContainer}
        style={styles.scrollView}
      >
        {featuredItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.gridItem}
            onPress={() => handleItemPress(item)}
          >
            <View style={styles.imageContainer}>
              <View style={[styles.imageBox, { backgroundColor: getRandomColor(item.id) }]}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemCategory}>{item.category}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

// Helper function to get consistent colors
const getRandomColor = (id: number) => {
  const colors = [
    '#ff7b25', '#2196f3', '#4caf50', '#9c27b0', '#3f51b5', '#e91e63',
    '#f44336', '#673ab7', '#009688', '#ffc107', '#cddc39', '#ff5722'
  ];
  return colors[id % colors.length];
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    backgroundColor: '#ffffff',
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
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  scrollView: {
    flex: 1,
  },
  gridContainer: {
    paddingHorizontal: 16,
    gap: 12,
  },
  gridItem: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  imageContainer: {
    flex: 1,
  },
  imageBox: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 12,
  },
  itemTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  itemCategory: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default FeaturedGrid; 