import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ChevronLeft, MapPin } from 'lucide-react-native';
import { 
  getRestaurantsByCategory, 
  Restaurant, 
  RestaurantCategory,
  cuisineCategories
} from '../data/restaurant';
import Header from '../components/Header';

interface RouteParams {
  categoryId: RestaurantCategory;
}

const DiningCategoryScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { categoryId } = route.params as RouteParams;
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const categoryDetails = cuisineCategories[categoryId];

  useEffect(() => {
    if (categoryId) {
      const categoryRestaurants = getRestaurantsByCategory(categoryId);
      setRestaurants(categoryRestaurants);
    }
  }, [categoryId]);

  const handleRestaurantPress = (restaurant: Restaurant) => {
    navigation.navigate('RestaurantDetail' as never, { restaurantId: restaurant.id } as never);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  if (!categoryId || !categoryDetails) {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Category not found</Text>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>Return to Dining Overview</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header with Back Button */}
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButtonContainer} onPress={handleBackPress}>
            <ChevronLeft size={20} color="#6B7280" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.categoryTitle}>{categoryDetails.title}</Text>
        </View>

        {/* Category Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.categoryDescription}>{categoryDetails.description}</Text>
        </View>

        {/* Restaurants Grid */}
        <View style={styles.restaurantsContainer}>
          {restaurants.map(restaurant => (
            <TouchableOpacity
              key={restaurant.id}
              style={styles.restaurantCard}
              onPress={() => handleRestaurantPress(restaurant)}
              activeOpacity={0.9}
            >
              {/* Image Section */}
              <View style={styles.imageContainer}>
                <Image
                  source={restaurant.image}
                  style={styles.restaurantImage}
                  resizeMode="cover"
                />
                <View style={styles.cuisineBadge}>
                  <Text style={styles.cuisineBadgeText}>{restaurant.cuisine}</Text>
                </View>
              </View>

              {/* Content Section */}
              <View style={styles.contentContainer}>
                <Text style={styles.restaurantName} numberOfLines={2}>
                  {restaurant.name}
                </Text>
                
                <View style={styles.locationContainer}>
                  <MapPin size={16} color="#6B7280" />
                  <Text style={styles.neighborhoodText}>{restaurant.neighborhood}</Text>
                </View>
                
                <Text style={styles.addressText} numberOfLines={1}>
                  {restaurant.address}
                </Text>

                <Text style={styles.descriptionText} numberOfLines={3}>
                  {restaurant.shortDescription || restaurant.description}
                </Text>

                {/* <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>{restaurant.priceRange}</Text>
                </View> */}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {restaurants.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No restaurants found in this category</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  backText: {
    fontSize: 16,
    color: '#6B7280',
    marginLeft: 4,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EA580C',
    flex: 1,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  categoryDescription: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  restaurantsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  restaurantCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 200,
  },
  restaurantImage: {
    width: '100%',
    height: '100%',
  },
  cuisineBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#EA580C',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  cuisineBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  contentContainer: {
    padding: 16,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  neighborhoodText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  addressText: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 12,
  },
  priceContainer: {
    alignSelf: 'flex-start',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EA580C',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#6B7280',
    marginBottom: 16,
  },
  backButton: {
    backgroundColor: '#EA580C',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyContainer: {
    paddingVertical: 48,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#6B7280',
  },
});

export default DiningCategoryScreen;
