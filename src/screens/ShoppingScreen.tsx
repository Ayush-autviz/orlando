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
import { MapPin, ExternalLink, ChevronRight, ShoppingBag } from 'lucide-react-native';
import Header from '../components/Header';
import { shoppingMalls, ShoppingMall } from '../data/shoppingmalldata';

const { width } = Dimensions.get('window');

const ShoppingScreen: React.FC = ({ navigation }: any) => {
  const [malls, setMalls] = useState<ShoppingMall[]>([]);

  useEffect(() => {
    setMalls(shoppingMalls);
  }, []);

  const handleMallPress = (mall: ShoppingMall) => {
    navigation.navigate('ShoppingDetail', { mallId: mall.id });
  };

  const handleWebsitePress = (url: string) => {
    navigation.navigate('WebView', { 
      url: url, 
      title: 'Official Website' 
    });
  };

  const handleMapPress = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    Linking.openURL(mapUrl).catch(() => {
      Alert.alert('Error', 'Could not open map');
    });
  };

  const renderMallCard = (mall: ShoppingMall) => (
    <TouchableOpacity
      key={mall.id}
      style={styles.mallCard}
      onPress={() => handleMallPress(mall)}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        <Image source={mall.heroImage} style={styles.mallImage} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.7)']}
          style={styles.imageOverlay}
        />
        
        {/* Badges */}
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{mall.details.storeCount}+ Stores</Text>
          </View>
          <View style={[styles.badge, styles.neighborhoodBadge]}>
            <Text style={styles.neighborhoodBadgeText}>{mall.location.neighborhood}</Text>
          </View>
        </View>

        {/* Mall name */}
        <Text style={styles.mallName}>{mall.name}</Text>
      </View>

      <View style={styles.cardContent}>
        <Text style={styles.mallDescription} numberOfLines={3}>
          {mall.shortDescription}
        </Text>

        {/* Location */}
        <View style={styles.locationContainer}>
          <MapPin size={16} color="#6b7280" />
          <Text style={styles.locationText} numberOfLines={1}>
            {mall.location.address}
          </Text>
        </View>

        {/* Action buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => handleMallPress(mall)}
          >
            <Text style={styles.exploreButtonText}>Explore Details</Text>
            <ChevronRight size={16} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.websiteButton}
            onPress={() => handleWebsitePress(mall.contactInfo.website)}
          >
            <Text style={styles.websiteButtonText}>Official Website</Text>
            <ExternalLink size={12} color="#ea580c" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header showDrawerButton={true} title="Shopping" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          {/* <LinearGradient
            colors={['#ea580c', '#0d9488']}
            style={styles.heroGradient}
          > */}
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>
                <Text style={styles.heroTitleWhite}>WORLD</Text>
                <Text style={styles.heroTitleTeal}> CLASS </Text>
                <Text style={styles.heroTitleWhite}>SHOPPING</Text>
              </Text>
              <View style={styles.heroUnderline} />
            </View>
          {/* </LinearGradient> */}
        </View>

        {/* Shopping Mall Cards */}
        <View style={styles.mallsContainer}>
          <Text style={styles.sectionTitle}>Premier Shopping Destinations</Text>
          {malls.map(renderMallCard)}
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
  scrollView: {
    flex: 1,
  },
  heroSection: {
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  heroGradient: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  heroContent: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
    color: '#f97316',
  },
  heroTitleWhite: {
    color: '#f97316',
  },
  heroTitleTeal: {
    color: '#f97316',
  },
  heroUnderline: {
    width: 120,
    height: 2,
    //backgroundColor: 'rgba(255,255,255,0.4)',
    marginTop: 8,
    borderRadius: 1,
  },
  mallsContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 24,
    textAlign: 'center',
  },
  mallCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 200,
    position: 'relative',
  },
  mallImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 60,
    left: 16,
    flexDirection: 'row',
    gap: 8,
  },
  badge: {
    backgroundColor: '#ea580c',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  neighborhoodBadge: {
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  neighborhoodBadgeText: {
    color: '#374151',
    fontSize: 12,
    fontWeight: '600',
  },
  mallName: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContent: {
    padding: 16,
  },
  mallDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationText: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
    flex: 1,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exploreButton: {
    backgroundColor: '#ea580c',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  exploreButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  websiteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  websiteButtonText: {
    color: '#ea580c',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ShoppingScreen; 