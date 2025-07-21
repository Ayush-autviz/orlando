import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Linking,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { 
  ChevronLeft, 
  MapPin, 
  Clock, 
  Phone, 
  Globe, 
  ShoppingBag, 
  Store, 
  Coffee, 
  CalendarDays, 
  Car, 
  ExternalLink, 
  Instagram, 
  Facebook, 
  Twitter, 
  Info, 
  Star,
  ArrowLeft
} from 'lucide-react-native';
import { getShoppingMallById, ShoppingMall } from '../data/shoppingmalldata';

const { width } = Dimensions.get('window');

interface ShoppingDetailScreenProps {
  route: {
    params: {
      mallId: string;
    };
  };
  navigation: any;
}

const ShoppingDetailScreen: React.FC<ShoppingDetailScreenProps> = ({ route, navigation }) => {
  const { mallId } = route.params;
  const [mall, setMall] = useState<ShoppingMall | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (mallId) {
      const mallData = getShoppingMallById(mallId);
      setMall(mallData || null);
      setLoading(false);
    }
  }, [mallId]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleWebsitePress = (url: string) => {
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'Could not open website');
    });
  };

  const handlePhonePress = (phone: string) => {
    Linking.openURL(`tel:${phone}`).catch(() => {
      Alert.alert('Error', 'Could not make phone call');
    });
  };

  const handleMapPress = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    Linking.openURL(mapUrl).catch(() => {
      Alert.alert('Error', 'Could not open map');
    });
  };

  const handleSocialMediaPress = (url: string) => {
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'Could not open social media');
    });
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading mall information...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!mall) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Shopping destination not found</Text>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>Return to Shopping Overview</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <ArrowLeft size={24} color="#374151" />
          <Text style={styles.backButtonText}>Back to Shopping</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image source={mall.heroImage} style={styles.heroImage} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.6)']}
            style={styles.heroOverlay}
          />
          
          {/* Mall name overlay */}
          <View style={styles.heroContent}>
            <Text style={styles.mallName}>{mall.name}</Text>
            <Text style={styles.mallTagline}>{mall.tagline}</Text>
          </View>
        </View>

        {/* Mall Information */}
        <View style={styles.contentContainer}>
          {/* Quick Info */}
          <View style={styles.quickInfoContainer}>
            <View style={styles.infoItem}>
              <Store size={20} color="#ea580c" />
              <Text style={styles.infoText}>{mall.details.storeCount}+ Stores</Text>
            </View>
            <View style={styles.infoItem}>
              <MapPin size={20} color="#ea580c" />
              <Text style={styles.infoText}>{mall.location.neighborhood}</Text>
            </View>
            <View style={styles.infoItem}>
              <Clock size={20} color="#ea580c" />
              <Text style={styles.infoText}>{mall.hours.regular}</Text>
            </View>
          </View>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About {mall.name}</Text>
            <Text style={styles.description}>{mall.description}</Text>
          </View>

          {/* Location & Contact */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Location & Contact</Text>
            
            <TouchableOpacity 
              style={styles.contactItem}
              onPress={() => handleMapPress(mall.location.address)}
            >
              <MapPin size={20} color="#6b7280" />
              <Text style={styles.contactText}>{mall.location.address}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.contactItem}
              onPress={() => handlePhonePress(mall.contactInfo.phone)}
            >
              <Phone size={20} color="#6b7280" />
              <Text style={styles.contactText}>{mall.contactInfo.phone}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.contactItem}
              onPress={() => handleWebsitePress(mall.contactInfo.website)}
            >
              <Globe size={20} color="#6b7280" />
              <Text style={styles.contactText}>Official Website</Text>
              <ExternalLink size={16} color="#ea580c" />
            </TouchableOpacity>
          </View>

          {/* Features */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Features & Amenities</Text>
            <View style={styles.featuresContainer}>
              {mall.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Text style={styles.featureText}>• {feature}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Notable Stores */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notable Stores</Text>
            <View style={styles.storesContainer}>
              {mall.notableStores.slice(0, 6).map((store, index) => (
                <View key={index} style={styles.storeItem}>
                  <View style={styles.storeHeader}>
                    <Text style={styles.storeName}>{store.name}</Text>
                    {store.flagship && (
                      <View style={styles.flagshipBadge}>
                        <Text style={styles.flagshipText}>Flagship</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.storeCategory}>{store.category}</Text>
                  <Text style={styles.storeDescription} numberOfLines={2}>
                    {store.description}
                  </Text>
                  {store.website && (
                    <TouchableOpacity 
                      style={styles.storeWebsite}
                      onPress={() => handleWebsitePress(store.website!)}
                    >
                      <Text style={styles.websiteText}>Visit Website</Text>
                      <ExternalLink size={12} color="#ea580c" />
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </View>
          </View>

          {/* Dining Options */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Dining Options</Text>
            <View style={styles.diningContainer}>
              {mall.diningOptions.slice(0, 4).map((restaurant, index) => (
                <View key={index} style={styles.restaurantItem}>
                  <View style={styles.restaurantHeader}>
                    <Text style={styles.restaurantName}>{restaurant.name}</Text>
                    <Text style={styles.priceRange}>{restaurant.priceRange}</Text>
                  </View>
                  <Text style={styles.cuisineType}>{restaurant.cuisine}</Text>
                  <Text style={styles.restaurantDescription} numberOfLines={2}>
                    {restaurant.description}
                  </Text>
                  {restaurant.website && (
                    <TouchableOpacity 
                      style={styles.restaurantWebsite}
                      onPress={() => handleWebsitePress(restaurant.website!)}
                    >
                      <Text style={styles.websiteText}>Visit Website</Text>
                      <ExternalLink size={12} color="#ea580c" />
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </View>
          </View>

          {/* Social Media */}
          {mall.contactInfo.socialMedia && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Follow Us</Text>
              <View style={styles.socialContainer}>
                {mall.contactInfo.socialMedia.facebook && (
                  <TouchableOpacity 
                    style={styles.socialButton}
                    onPress={() => handleSocialMediaPress(mall.contactInfo.socialMedia!.facebook!)}
                  >
                    <Facebook size={20} color="#1877f2" />
                    <Text style={styles.socialText}>Facebook</Text>
                  </TouchableOpacity>
                )}
                {mall.contactInfo.socialMedia.instagram && (
                  <TouchableOpacity 
                    style={styles.socialButton}
                    onPress={() => handleSocialMediaPress(mall.contactInfo.socialMedia!.instagram!)}
                  >
                    <Instagram size={20} color="#e4405f" />
                    <Text style={styles.socialText}>Instagram</Text>
                  </TouchableOpacity>
                )}
                {mall.contactInfo.socialMedia.twitter && (
                  <TouchableOpacity 
                    style={styles.socialButton}
                    onPress={() => handleSocialMediaPress(mall.contactInfo.socialMedia!.twitter!)}
                  >
                    <Twitter size={20} color="#1da1f2" />
                    <Text style={styles.socialText}>Twitter</Text>
                  </TouchableOpacity>
                )}
              </View>
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
    backgroundColor: '#ffffff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#6b7280',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 20,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
  },
  heroContainer: {
    height: 300,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
  },
  heroContent: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  mallName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  mallTagline: {
    fontSize: 16,
    color: '#f3f4f6',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  quickInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
    paddingVertical: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
  },
  infoItem: {
    alignItems: 'center',
    flex: 1,
  },
  infoText: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#6b7280',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  contactText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 12,
    flex: 1,
  },
  featuresContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  featureItem: {
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  storesContainer: {
    gap: 16,
  },
  storeItem: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  storeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  storeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
  },
  flagshipBadge: {
    backgroundColor: '#ea580c',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  flagshipText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
  },
  storeCategory: {
    fontSize: 14,
    color: '#ea580c',
    marginBottom: 8,
  },
  storeDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 8,
  },
  storeWebsite: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  websiteText: {
    fontSize: 14,
    color: '#ea580c',
    marginRight: 4,
  },
  diningContainer: {
    gap: 16,
  },
  restaurantItem: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  restaurantHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
  },
  priceRange: {
    fontSize: 14,
    color: '#ea580c',
    fontWeight: '600',
  },
  cuisineType: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  restaurantDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 8,
  },
  restaurantWebsite: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
  },
  socialText: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 8,
  },
});

export default ShoppingDetailScreen; 