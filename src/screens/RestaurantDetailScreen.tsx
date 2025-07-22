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
  CheckCircle,
  Utensils,
  Heart,
  Users,
  Car,
  Share2,
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
    navigation.navigate('WebView' as never, {
      url: url,
      title: `${restaurant?.name || 'Restaurant'} - Location`
    } as never);
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

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Hero Image */}
          <View style={styles.heroImageContainer}>
            <Image
              source={restaurant.image}
              style={styles.heroImage}
              resizeMode="cover"
            />
            <View style={styles.cuisineBadge}>
              <Text style={styles.cuisineBadgeText}>{restaurant.cuisine}</Text>
            </View>
            <TouchableOpacity style={styles.shareButton}>
              <Share2 size={20} color="#374151" />
            </TouchableOpacity>
            <View style={styles.heroOverlay}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <View style={styles.locationInfo}>
                <MapPin size={16} color="rgba(255, 255, 255, 0.9)" />
                <Text style={styles.locationText}>
                  {restaurant.neighborhood} • {restaurant.address}
                </Text>
              </View>
            </View>
          </View>

          {/* Description */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{restaurant.description}</Text>
          </View>

          {/* Signature Dishes and Recommended For */}
          {(restaurant.signature || restaurant.recommendedFor) && (
            <View style={styles.featuresContainer}>
              {restaurant.signature && (
                <View style={styles.featureCard}>
                  <View style={styles.featureHeader}>
                    <Utensils size={20} color="#EA580C" />
                    <Text style={styles.featureTitle}>Signature Dishes</Text>
                  </View>
                  <View style={styles.featureList}>
                    {restaurant.signature.map((dish, index) => (
                      <View key={index} style={styles.listItem}>
                        <CheckCircle size={16} color="#EA580C" />
                        <Text style={styles.listItemText}>{dish}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {restaurant.recommendedFor && (
                <View style={styles.featureCard}>
                  <View style={styles.featureHeader}>
                    <Heart size={20} color="#EA580C" />
                    <Text style={styles.featureTitle}>Perfect For</Text>
                  </View>
                  <View style={styles.featureList}>
                    {restaurant.recommendedFor.map((item, index) => (
                      <View key={index} style={styles.listItem}>
                        <CheckCircle size={16} color="#EA580C" />
                        <Text style={styles.listItemText}>{item}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>
          )}

          {/* Amenities */}
          {restaurant.amenities && restaurant.amenities.length > 0 && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Amenities</Text>
              <View style={styles.tagsContainer}>
                {restaurant.amenities.map((amenity, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{amenity}</Text>
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
                  <View key={index} style={styles.dietaryTag}>
                    <Text style={styles.dietaryTagText}>{option}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>

        {/* Sidebar */}
        <View style={styles.sidebarSection}>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardTitle}>Information</Text>
            
            <View style={styles.infoContainer}>
              {/* Hours */}
              {restaurant.hours && (
                <View style={styles.infoItem}>
                  <Clock size={20} color="#6B7280" />
                  <View style={styles.infoContent}>
                    <Text style={styles.infoLabel}>Hours</Text>
                    <Text style={styles.infoValue}>{restaurant.hours}</Text>
                  </View>
                </View>
              )}

              {/* Cuisine */}
              <View style={styles.infoItem}>
                <Utensils size={20} color="#6B7280" />
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Cuisine</Text>
                  <Text style={styles.infoValue}>{restaurant.cuisine}</Text>
                </View>
              </View>

              {/* Reservations */}
              {restaurant.reservations !== undefined && (
                <View style={styles.infoItem}>
                  <Users size={20} color="#6B7280" />
                  <View style={styles.infoContent}>
                    <Text style={styles.infoLabel}>Reservations</Text>
                    <Text style={styles.infoValue}>
                      {restaurant.reservations ? 'Recommended' : 'Not required'}
                    </Text>
                  </View>
                </View>
              )}

              <View style={styles.separator} />

              {/* Address */}
              <View style={styles.infoItem}>
                <MapPin size={20} color="#6B7280" />
                <View style={styles.infoContent}>
                  <Text style={styles.infoLabel}>Address</Text>
                  <View style={styles.addressContainer}>
                    <Text style={styles.infoValue}>{restaurant.address}</Text>
                                         <TouchableOpacity 
                       style={styles.mapItButton}
                       onPress={() => handleMapPress(restaurant.address)}
                       activeOpacity={0.7}
                     >
                       <MapPin size={12} color="#EA580C" />
                       <Text style={styles.mapItText}>Map It</Text>
                     </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Parking */}
              {restaurant.parkingInfo && (
                <View style={styles.infoItem}>
                  <Car size={20} color="#6B7280" />
                  <View style={styles.infoContent}>
                    <Text style={styles.infoLabel}>Parking</Text>
                    <Text style={styles.infoValue}>{restaurant.parkingInfo}</Text>
                  </View>
                </View>
              )}

              <View style={styles.separator} />

              {/* Phone */}
              {restaurant.phone && (
                <View style={styles.infoItem}>
                  <Phone size={20} color="#6B7280" />
                  <View style={styles.infoContent}>
                    <Text style={styles.infoLabel}>Phone</Text>
                    <TouchableOpacity onPress={() => handlePhonePress(restaurant.phone!)}>
                      <Text style={styles.linkText}>{restaurant.phone}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {/* Website */}
              {restaurant.website && (
                <View style={styles.infoItem}>
                  <Globe size={20} color="#6B7280" />
                  <View style={styles.infoContent}>
                    <Text style={styles.infoLabel}>Website</Text>
                    <TouchableOpacity onPress={() => handleWebsitePress(restaurant.website!)}>
                      <Text style={styles.linkText}>
                        Website Link <ExternalLink size={12} color="#EA580C" />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </View>
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
  mainContent: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  heroImageContainer: {
    position: 'relative',
    height: 300,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
  },
  heroImage: {
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
  shareButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 8,
    borderRadius: 8,
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginLeft: 4,
  },
  descriptionContainer: {
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  featuresContainer: {
    flexDirection: 'column',
    gap: 16,
    marginBottom: 24,
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 8,
  },
  featureList: {
    gap: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  listItemText: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 8,
    flex: 1,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
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
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  tagText: {
    fontSize: 14,
    color: '#374151',
  },
  dietaryTag: {
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#86EFAC',
  },
  dietaryTagText: {
    fontSize: 14,
    color: '#166534',
  },
  sidebarSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  infoCardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  infoContainer: {
    gap: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoContent: {
    marginLeft: 12,
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 14,
    color: '#6B7280',
  },
  addressContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
  },
  mapItButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FED7AA',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    gap: 4,
    alignSelf: 'flex-start',
  },
  mapItText: {
    fontSize: 12,
    color: '#EA580C',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 8,
  },
  linkText: {
    fontSize: 14,
    color: '#EA580C',
    textDecorationLine: 'underline',
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
