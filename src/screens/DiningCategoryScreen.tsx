import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Share,
  Linking,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { 
  ChevronLeft, 
  MapPin, 
  DollarSign, 
  Clock, 
  ExternalLink,
  Phone,
  Globe,
  CheckCircle,
  Utensils,
  Heart,
  Users,
  Car,
  Share2,
  Info,
} from 'lucide-react-native';
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

  const handleMapPress = (address: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };

  const handleWebsitePress = (website: string) => {
    navigation.navigate('WebView' as never, {
      url: website,
      title: 'Restaurant Website'
    } as never);
  };

  const handleShare = async (restaurant: Restaurant) => {
    const shareUrl = `https://www.awesomeorlando.com/dining/restaurant/${restaurant.id}`;
    const shareTitle = `${restaurant.name} | Awesome Orlando ${restaurant.cuisine}`;
    const shareMessage = `Check out ${restaurant.name} in ${restaurant.neighborhood || 'Orlando'} - ${restaurant.shortDescription || restaurant.description.substring(0, 100)}... ${shareUrl}`;
    
    try {
      await Share.share({
        message: shareMessage,
        url: shareUrl,
        title: shareTitle,
      });
    } catch (error) {
      console.error('Error sharing restaurant:', error);
    }
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

  const renderRestaurantCard = (restaurant: Restaurant) => (
    <View key={restaurant.id} style={styles.restaurantCard}>
      {/* Image Section */}
      <View style={styles.imageSection}>
        <Image
          source={restaurant.image}
          style={styles.restaurantImage}
          resizeMode="cover"
        />
        <View style={styles.cuisineBadge}>
          <Text style={styles.cuisineBadgeText}>{restaurant.cuisine}</Text>
        </View>
        {/* Share button in top-right */}
        <TouchableOpacity 
          style={styles.shareButton} 
          onPress={() => handleShare(restaurant)}
        >
          <Share2 size={16} color="#374151" />
        </TouchableOpacity>
      </View>
      
      {/* Content Section */}
      <View style={styles.contentSection}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        
        <View style={styles.locationContainer}>
          <MapPin size={16} color="#6B7280" />
          <Text style={styles.neighborhoodText}>{restaurant.neighborhood}</Text>
        </View>
        
        <Text style={styles.addressText}>{restaurant.address}</Text>
        
        <TouchableOpacity 
          style={styles.mapItButton}
          onPress={() => handleMapPress(restaurant.address)}
        >
          <MapPin size={12} color="#EA580C" />
          <Text style={styles.mapItText}>Map It</Text>
        </TouchableOpacity>
        
        <Text style={styles.descriptionText}>
          {restaurant.shortDescription || restaurant.description.substring(0, 150) + '...'}
        </Text>
        
        {/* Button Container */}
        <View style={styles.buttonContainer}>
          {/* Website Button */}
          <TouchableOpacity
            style={restaurant.website ? styles.websiteButton : styles.noWebsiteButton}
            onPress={() => restaurant.website && handleWebsitePress(restaurant.website)}
            disabled={!restaurant.website}
          >
            <Globe size={16} color={restaurant.website ? "#FFFFFF" : "#777777"} />
            <Text style={[styles.buttonText, restaurant.website ? styles.websiteButtonText : styles.noWebsiteButtonText]}>
              {restaurant.website ? "Website" : "No Website"}
            </Text>
          </TouchableOpacity>
          
          {/* Details Button */}
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => handleRestaurantPress(restaurant)}
          >
            <Info size={16} color="#FFFFFF" />
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

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
          {restaurants.map(renderRestaurantCard)}
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
  imageSection: {
    position: 'relative',
    height: 192,
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
    borderRadius: 16,
  },
  cuisineBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  shareButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 6,
    borderRadius: 6,
  },
  contentSection: {
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
    marginBottom: 4,
  },
  mapItButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 12,
    gap: 4,
  },
  mapItText: {
    fontSize: 12,
    color: '#EA580C',
    fontWeight: '500',
  },
  descriptionText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  websiteButton: {
    backgroundColor: '#FF5500',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flex: 1,
    gap: 4,
  },
  noWebsiteButton: {
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flex: 1,
    gap: 4,
  },
  detailsButton: {
    backgroundColor: '#009688',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    flex: 1,
    gap: 4,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
  },
  websiteButtonText: {
    color: '#FFFFFF',
  },
  noWebsiteButtonText: {
    color: '#777777',
  },
  detailsButtonText: {
    color: '#FFFFFF',
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
