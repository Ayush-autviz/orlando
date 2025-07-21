import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Linking,
  Dimensions,
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
  CheckCircle
} from 'lucide-react-native';
import { getRestaurantById, Restaurant } from '../data/restaurant';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

interface RouteParams {
  restaurantId: string;
}

const RestaurantDetailScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { restaurantId } = route.params as RouteParams;
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (restaurantId) {
      const restaurantData = getRestaurantById(restaurantId);
      setRestaurant(restaurantData || null);
      setLoading(false);
    }
  }, [restaurantId]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePhonePress = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleWebsitePress = (website: string) => {
    navigation.navigate('WebView' as never, {
      url: website,
      title: restaurant?.name || 'Restaurant Website'
    } as never);
  };

  const handleMapPress = (address: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading restaurant information...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!restaurant) {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Restaurant not found</Text>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Back Button */}
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButtonContainer} onPress={handleBackPress}>
            <ChevronLeft size={20} color="#6B7280" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>

        {/* Main Image */}
        <View style={styles.imageContainer}>
          <Image
            source={restaurant.image}
            style={styles.mainImage}
            resizeMode="cover"
          />
          <View style={styles.cuisineBadge}>
            <Text style={styles.cuisineBadgeText}>{restaurant.cuisine}</Text>
          </View>
        </View>

        {/* Restaurant Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          
          <View style={styles.locationRow}>
            <MapPin size={16} color="#6B7280" />
            <Text style={styles.neighborhoodText}>{restaurant.neighborhood}</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.addressRow}
            onPress={() => handleMapPress(restaurant.address)}
          >
            <Text style={styles.addressText}>{restaurant.address}</Text>
            <ExternalLink size={14} color="#EA580C" />
          </TouchableOpacity>

          <Text style={styles.description}>{restaurant.description}</Text>

          {/* Price Range */}
          {/* <View style={styles.priceContainer}>
            <DollarSign size={20} color="#EA580C" />
            <Text style={styles.priceText}>{restaurant.priceRange}</Text>
          </View> */}

          {/* Hours */}
          {restaurant.hours && (
            <View style={styles.hoursContainer}>
              <Clock size={20} color="#6B7280" />
              <Text style={styles.hoursText}>{restaurant.hours}</Text>
            </View>
          )}

          {/* Contact Info */}
          <View style={styles.contactContainer}>
            {restaurant.phone && (
              <TouchableOpacity 
                style={styles.contactButton}
                onPress={() => handlePhonePress(restaurant.phone!)}
              >
                <Phone size={20} color="#FFFFFF" />
                <Text style={styles.contactButtonText}>Call</Text>
              </TouchableOpacity>
            )}
            
            {restaurant.website && (
              <TouchableOpacity 
                style={styles.contactButton}
                onPress={() => handleWebsitePress(restaurant.website!)}
              >
                <Globe size={20} color="#FFFFFF" />
                <Text style={styles.contactButtonText}>Website</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Signature Dishes */}
          {restaurant.signature && restaurant.signature.length > 0 && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Signature Dishes</Text>
              {restaurant.signature.map((dish, index) => (
                <View key={index} style={styles.listItem}>
                  <CheckCircle size={16} color="#EA580C" />
                  <Text style={styles.listItemText}>{dish}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Recommended For */}
          {restaurant.recommendedFor && restaurant.recommendedFor.length > 0 && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Recommended For</Text>
              <View style={styles.tagsContainer}>
                {restaurant.recommendedFor.map((item, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Dietary Options */}
          {restaurant.dietaryOptions && restaurant.dietaryOptions.length > 0 && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Dietary Options</Text>
              <View style={styles.tagsContainer}>
                {restaurant.dietaryOptions.map((option, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{option}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Amenities */}
          {restaurant.amenities && restaurant.amenities.length > 0 && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Amenities</Text>
              {restaurant.amenities.map((amenity, index) => (
                <View key={index} style={styles.listItem}>
                  <CheckCircle size={16} color="#EA580C" />
                  <Text style={styles.listItemText}>{amenity}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Parking Info */}
          {restaurant.parkingInfo && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Parking</Text>
              <Text style={styles.parkingText}>{restaurant.parkingInfo}</Text>
            </View>
          )}
        </View>
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
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#6B7280',
    marginLeft: 4,
  },
  imageContainer: {
    position: 'relative',
    height: 300,
    marginBottom: 20,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  cuisineBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#EA580C',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  cuisineBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  infoContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  neighborhoodText: {
    fontSize: 16,
    color: '#6B7280',
    marginLeft: 8,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  addressText: {
    fontSize: 14,
    color: '#EA580C',
    flex: 1,
  },
  description: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EA580C',
    marginLeft: 8,
  },
  hoursContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  hoursText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 8,
    flex: 1,
  },
  contactContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 12,
  },
  contactButton: {
    backgroundColor: '#EA580C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  listItemText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 8,
    flex: 1,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 14,
    color: '#374151',
  },
  parkingText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#6B7280',
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
});

export default RestaurantDetailScreen;
