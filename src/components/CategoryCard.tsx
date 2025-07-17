import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { CategoryType } from '../types';

interface CategoryCardProps {
  category: CategoryType;
  onPress?: () => void;
}

const { width } = Dimensions.get('window');

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground
        source={{ uri: category.image }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{category.title}</Text>
          <Text style={styles.count}>{category.count}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (width - 48) / 2, // 2 columns with padding
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  count: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
});

export default CategoryCard; 