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
  Share,
  Alert,
  Linking,
  ImageBackground,
} from 'react-native';  
import { MapPin, ExternalLink, ChevronRight, ShoppingBag, Store, Coffee, Share2 } from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Path } from 'react-native-svg';
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
    Linking.openURL(mapUrl);
  };

  const handleShare = async (mall: ShoppingMall) => {
    try {
      const shareUrl = `https://www.awesomeorlando.com/shopping/${mall.id}`;
      const shareTitle = `${mall.name} | Awesome Orlando Shopping`;
      const shareMessage = `Check out ${mall.name} in ${mall.location.neighborhood} - ${mall.shortDescription} ${shareUrl}`;

      await Share.share({
        message: shareMessage,
        url: shareUrl,
        title: shareTitle,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const renderMallCard = (mall: ShoppingMall) => (
    <View key={mall.id} style={styles.mallCard}>
      {/* Image Section */}
      <View style={styles.imageSection}>
        <Image source={mall.heroImage} style={styles.mallImage} />
        <View style={styles.imageOverlay} />
        
        {/* Badges */}
        <View style={styles.badgeContainer}>
          <View style={styles.storeBadge}>
            <Text style={styles.storeBadgeText}>{mall.details.storeCount}+ Stores</Text>
          </View>
          <View style={styles.neighborhoodBadge}>
            <Text style={styles.neighborhoodBadgeText}>{mall.location.neighborhood}</Text>
          </View>
        </View>

        {/* Share button */}
        <TouchableOpacity
          style={styles.shareButton}
          onPress={() => handleShare(mall)}
        >
          <Share2 size={16} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Mall name */}
        <Text numberOfLines={1} style={styles.mallName}>{mall.name}</Text>
      </View>

      {/* Content Section */}
      <View style={styles.contentSection}>
        <Text style={styles.mallDescription}>
          {mall.shortDescription}
        </Text>
        
        {/* Store Mix and Dining Grid */}
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Store size={20} color="#9CA3AF" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Store Mix</Text>
              <Text style={styles.infoValue}>
                {mall.notableStores?.slice(0, 2).map(store => store.name).join(', ')}...
              </Text>
            </View>
          </View>
          
          <View style={styles.infoItem}>
            <Coffee size={20} color="#9CA3AF" />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Dining</Text>
              <Text style={styles.infoValue} numberOfLines={2}>
                {mall.diningOptions?.slice(0, 2).map(dining => dining.name).join(', ')}...
              </Text>
            </View>
          </View>
        </View>
        
        {/* Location with Map It */}
        <View style={styles.locationContainer}>
          <MapPin size={16} color="#9CA3AF" />
          <View style={styles.locationContent}>
            <Text style={styles.locationText} numberOfLines={1}>{mall.location.address}</Text>
            <TouchableOpacity 
              style={styles.mapItButton}
              onPress={() => handleMapPress(mall.location.address)}
            >
              <Text style={styles.mapItText}>Map It</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footerSection}>
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => handleMallPress(mall)}
        >
          <Text style={styles.exploreButtonText}>Explore Details</Text>
          <ChevronRight size={16} color="#FFFFFF" />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.websiteLink}
          onPress={() => handleWebsitePress(mall.contactInfo.website)}
        >
          <Text style={styles.websiteLinkText}>Official Website</Text>
          <ExternalLink size={12} color="#EA580C" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header showDrawerButton={true} title="Shopping" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section with gradient background and pattern */}
        <View style={styles.heroSection}>
          <LinearGradient
            colors={['#ea580c', '#0d9488']} // orange-600 to teal-600
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.heroGradient}
          >  {/* Overlay gradient to match web version's opacity */}
          </LinearGradient>
          <ImageBackground
            source={require('../../assets/images/Rectangle4.png')}
            style={styles.heroImageBackground}
            resizeMode="cover"
          >
          <View style={styles.heroContent}>
            <View style={styles.heroTitleContainer}>
              <View style={styles.heroTitleGlow} />
              <Text style={styles.heroTitle}>
                <Text style={styles.heroTitleWhite}>WORLD</Text>
                <Text style={styles.heroTitleTeal}> CLASS </Text>
                <Text style={styles.heroTitleWhite}>SHOPPING</Text>
              </Text>
              <View style={styles.heroUnderline} />
            </View>
          </View>
          </ImageBackground>
        </View>

        {/* Shopping Mall Cards */}
        <View style={styles.mallsContainer}>
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
 //   marginTop: 16,
//    marginHorizontal: 12,
//    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    paddingVertical: 35,
//    paddingHorizontal: 16,
    // Responsive padding
    // ...(width >= 640 && { paddingVertical: 32 }),
    // ...(width >= 768 && { paddingVertical: 40 }),
    // ...(width >= 1024 && { paddingVertical: 64 }),
  },
  heroGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  heroPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    backgroundColor: 'transparent',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  patternSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  heroContent: {
    alignItems: 'center',
    position: 'relative',
    zIndex: 10,
  },
  heroTitleContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  heroTitleGlow: {
    position: 'absolute',
    top: -4,
    left: -4,
    right: -4,
    bottom: -4,
   // backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 8,
    // Note: React Native doesn't support CSS blur, this is a fallback
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    position: 'relative',
    zIndex: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    // Responsive font sizes
    ...(width >= 640 && { fontSize: 30 }),
    ...(width >= 768 && { fontSize: 36 }),
    ...(width >= 1024 && { fontSize: 48 }),
  },
  heroTitleWhite: {
    color: '#FFFFFF',
  },
  heroTitleTeal: {
    color: '#CCFBF1', // teal-100
  },
  heroUnderline: {
    width: 112,
    height: 1,
    marginTop: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 0.5,
    // Responsive widths
    ...(width >= 640 && { width: 144 }),
    ...(width >= 768 && { width: 192 }),
    ...(width >= 1024 && { width: 192 }),
    // Note: Web version uses gradient from-white/40 to-teal-300/70
    // This is a fallback color that matches the gradient
  },
  mallsContainer: {
    paddingHorizontal: 16,
    paddingTop: 35,
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
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 24,
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
    height: 240,
  },
  mallImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 60,
    left: 16,
    right: 16,
    flexDirection: 'row',
    gap: 8,
  },
  storeBadge: {
    backgroundColor: '#EA580C',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  storeBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  neighborhoodBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
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
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentSection: {
    padding: 24,
    paddingTop: 24,
  },
  mallDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  infoGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  infoItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoContent: {
    marginLeft: 8,
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
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  locationContent: {
    marginLeft: 4,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 8,
  },
  locationText: {
    fontSize: 14,
    color: '#6B7280',
    flex: 1,
  },
  mapItButton: {
    backgroundColor: '#0D9488',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  mapItText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  footerSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exploreButton: {
    backgroundColor: '#EA580C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    gap: 4,
  },
  exploreButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  websiteLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  websiteLinkText: {
    color: '#EA580C',
    fontSize: 14,
    fontWeight: '500',
  },
  shareButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  heroImageBackground: {
    alignSelf: 'center',
    paddingHorizontal: 12,

  },
});

export default ShoppingScreen; 