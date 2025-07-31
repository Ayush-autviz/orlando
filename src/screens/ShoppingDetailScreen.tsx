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
  Share,
  Alert,
} from 'react-native';
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
  Share2
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
  const [selectedTab, setSelectedTab] = useState('stores');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  useEffect(() => {
    if (mallId) {
      const mallData = getShoppingMallById(mallId);
      setMall(mallData || null);
      if (mallData) {
        setSelectedImage(mallData.heroImage);
      }
      setLoading(false);
    }
  }, [mallId]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleWebsitePress = (url: string) => {
    navigation.navigate('WebView', { 
      url: url, 
      title: 'Official Website' 
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
    Linking.openURL(mapUrl);
  };

  const handleShare = async () => {
    if (!mall) return;
    
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

  const renderStoresTab = () => (
    <View style={styles.tabContent}>
      <Text style={styles.tabTitle}>Notable Stores</Text>
      <View style={styles.storesGrid}>
        {mall.notableStores.map((store, index) => (
          <View key={index} style={[
            styles.storeCard,
            store.flagship && styles.flagshipCard
          ]}>
            <View style={styles.storeCardContent}>
              <View style={styles.storeCardHeader}>
                <Text style={styles.storeCardName}>{store.name}</Text>
                {store.flagship && (
                  <View style={styles.flagshipBadge}>
                    <Star size={12} color="#FFFFFF" fill="#FFFFFF" />
                    <Text style={styles.flagshipBadgeText}>Flagship</Text>
                  </View>
                )}
              </View>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryBadgeText}>{store.category}</Text>
              </View>
              <Text style={styles.storeCardDescription} numberOfLines={3}>
                {store.description}
              </Text>
              
              <View style={styles.storeCardSeparator} />
              
              <View style={styles.storeCardFooter}>
                {store.location && (
                  <View style={styles.storeLocation}>
                    <View style={styles.locationIcon}>
                      <MapPin size={12} color="#6B7280" />
                    </View>
                    <Text style={styles.storeLocationText}>{store.location}</Text>
                  </View>
                )}
                {store.website && (
                  <TouchableOpacity 
                    style={styles.storeWebsiteLink}
                    onPress={() => navigation.navigate('WebView', { 
                      url: store.website!, 
                      title: `${store.name} Website` 
                    })}
                  >
                    <Text style={styles.storeWebsiteText}>Visit Store</Text>
                    <ExternalLink size={12} color="#EA580C" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  const renderDiningTab = () => (
    <View style={styles.tabContent}>
      <Text style={styles.tabTitle}>Dining Options</Text>
      <View style={styles.diningGrid}>
        {mall.diningOptions.map((dining, index) => (
          <View key={index} style={styles.diningCard}>
            <View style={styles.diningCardHeader}>
              <View style={styles.diningIconContainer}>
                <Coffee size={32} color="#EA580C" />
              </View>
              {/* <View style={[
                styles.priceBadge,
                dining.priceRange === '$$$$' && styles.priceBadgeExpensive,
                dining.priceRange === '$$$' && styles.priceBadgeModerate,
                dining.priceRange === '$$' && styles.priceBadgeAffordable
              ]}>
                <Text style={styles.priceBadgeText}>{dining.priceRange}</Text>
              </View> */}
            </View>
            
            <View style={styles.diningCardContent}>
              <Text style={styles.diningCardName}>{dining.name}</Text>
              <View style={styles.cuisineBadge}>
                <Text style={styles.cuisineBadgeText}>{dining.cuisine}</Text>
              </View>
              <Text style={styles.diningCardDescription} numberOfLines={3}>
                {dining.description}
              </Text>
              
              <View style={styles.diningCardSeparator} />
              
              <View style={styles.diningCardFooter}>
                {dining.location && (
                  <View style={styles.diningLocation}>
                    <View style={styles.locationIcon}>
                      <MapPin size={12} color="#6B7280" />
                    </View>
                    <Text style={styles.diningLocationText}>{dining.location}</Text>
                  </View>
                )}
                {dining.website && (
                  <TouchableOpacity 
                    style={styles.diningWebsiteLink}
                    onPress={() => navigation.navigate('WebView', { 
                      url: dining.website!, 
                      title: `${dining.name} Website` 
                    })}
                  >
                    <Text style={styles.diningWebsiteText}>View Menu</Text>
                    <ExternalLink size={12} color="#EA580C" />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  const renderFeaturesTab = () => (
    <View style={styles.tabContent}>
      <Text style={styles.tabTitle}>Mall Features</Text>
      <View style={styles.featuresGrid}>
        {mall.features.map((feature, index) => {
          let iconColor = '#EA580C';
          let bgColor = '#FEF3C7';
          let borderColor = '#F59E0B';
          
          if (feature.toLowerCase().includes('wifi')) {
            iconColor = '#0D9488';
            bgColor = '#CCFBF1';
            borderColor = '#14B8A6';
          } else if (feature.toLowerCase().includes('parking')) {
            iconColor = '#3B82F6';
            bgColor = '#DBEAFE';
            borderColor = '#2563EB';
          } else if (feature.toLowerCase().includes('currency') || feature.toLowerCase().includes('exchange')) {
            iconColor = '#10B981';
            bgColor = '#D1FAE5';
            borderColor = '#059669';
          } else if (feature.toLowerCase().includes('concierge') || feature.toLowerCase().includes('service')) {
            iconColor = '#6366F1';
            bgColor = '#E0E7FF';
            borderColor = '#4F46E5';
          }
          
          return (
            <View key={index} style={[styles.featureCard, { backgroundColor: bgColor, borderColor }]}>
              <View style={styles.featureIconContainer}>
                <ShoppingBag size={24} color={iconColor} />
              </View>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with breadcrumb and back button */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <ChevronLeft size={16} color="#6B7280" />
          <Text style={styles.backButtonText}>Back to Shopping</Text>
        </TouchableOpacity>
          {/* <View style={styles.breadcrumb}>
            <Text style={styles.breadcrumbText}>Home</Text>
            <Text style={styles.breadcrumbSeparator}>/</Text>
            <Text style={styles.breadcrumbText}>Shopping</Text>
            <Text style={styles.breadcrumbSeparator}>/</Text>
            <Text style={styles.breadcrumbActive}>{mall.name}</Text>
          </View> */}
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero section */}
        <View style={styles.heroSection}>
          <Image source={mall.heroImage} style={styles.heroImage} />
          <View style={styles.heroOverlay} />
          <View style={styles.heroPattern} />
          
          {/* Share button */}
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Share2 size={20} color="#374151" />
          </TouchableOpacity>
          
          {/* Hero content */}
          <View style={styles.heroContent}>
            <View style={styles.geometricAccent}>
              <View style={styles.accentLine} />
              <View style={styles.accentLineShort} />
              <View style={styles.accentLine} />
        </View>

            <Text numberOfLines={2} style={styles.heroTitle}>{mall.name}</Text>
            <Text style={styles.heroTagline}>{mall.tagline}</Text>
            
            <View style={styles.heroBadges}>
              <View style={styles.heroBadge}>
                <Text style={styles.heroBadgeText}>{mall.details.storeCount}+ Stores</Text>
            </View>
              <View style={styles.heroBadgeTeal}>
                <Text style={styles.heroBadgeText}>{mall.location.neighborhood}</Text>
            </View>
              <View style={styles.heroBadgeWhite}>
                <Text style={styles.heroBadgeTextDark}>{mall.hours.regular.split(',')[0]}</Text>
            </View>
          </View>

            <View style={styles.geometricAccent}>
              <View style={styles.accentLineShort} />
              <View style={styles.accentLine} />
              <View style={styles.accentLineShort} />
          </View>

            <View style={styles.heroButtons}>
            <TouchableOpacity 
                style={styles.heroWebsiteButton}
                onPress={() => handleWebsitePress(mall.contactInfo.website)}
            >
                <Text style={styles.heroWebsiteButtonText}>Official Website</Text>
                <ExternalLink size={16} color="#FFFFFF" />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.heroPhoneButton}
              onPress={() => handlePhonePress(mall.contactInfo.phone)}
            >
                <Phone size={16} color="#FFFFFF" />
                <Text style={styles.heroPhoneButtonText}>{mall.contactInfo.phone}</Text>
            </TouchableOpacity>
            </View>
          </View>

          {/* <View style={styles.heroBottomGradient} /> */}
          </View>

        {/* Main content */}
        <View style={styles.mainContent}>
          <View style={styles.contentGrid}>
            {/* Left column - Main content */}
            <View style={styles.mainColumn}>
              {/* Overview */}
              <View style={styles.overviewSection}>
                <Text style={styles.overviewTitle}>Overview</Text>
                <Text style={styles.overviewText}>{mall.description}</Text>
                      </View>
              
              {/* Gallery */}
              <View style={styles.gallerySection}>
                <Text style={styles.galleryTitle}>Gallery</Text>
                <View style={styles.mainGalleryImage}>
                  {selectedImage && (
                    <Image source={selectedImage} style={styles.galleryImage} />
                    )}
                  </View>
                <View style={styles.galleryThumbnails}>
                  {[mall.heroImage, ...mall.galleryImages].map((image, index) => (
                    <TouchableOpacity 
                      key={index}
                      style={[
                        styles.galleryThumbnail,
                        selectedImage === image && styles.galleryThumbnailSelected
                      ]}
                      onPress={() => setSelectedImage(image)}
                    >
                      <Image source={image} style={styles.thumbnailImage} />
                    </TouchableOpacity>
              ))}
            </View>
          </View>

              {/* Tabs */}
              <View style={styles.tabsSection}>
                <View style={styles.tabsList}>
                    <TouchableOpacity 
                    style={[styles.tabTrigger, selectedTab === 'stores' && styles.tabTriggerActive]}
                    onPress={() => setSelectedTab('stores')}
                  >
                    <ShoppingBag size={16} color={selectedTab === 'stores' ? '#FFFFFF' : '#6B7280'} />
                    <Text style={[styles.tabTriggerText, selectedTab === 'stores' && styles.tabTriggerTextActive]}>
                      Stores
                    </Text>
                    </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={[styles.tabTrigger, selectedTab === 'dining' && styles.tabTriggerActive]}
                    onPress={() => setSelectedTab('dining')}
                  >
                    <Coffee size={16} color={selectedTab === 'dining' ? '#FFFFFF' : '#6B7280'} />
                    <Text style={[styles.tabTriggerText, selectedTab === 'dining' && styles.tabTriggerTextActive]}>
                      Dining
                    </Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity 
                    style={[styles.tabTrigger, selectedTab === 'features' && styles.tabTriggerActive]}
                    onPress={() => setSelectedTab('features')}
                  >
                    <Info size={16} color={selectedTab === 'features' ? '#FFFFFF' : '#6B7280'} />
                    <Text style={[styles.tabTriggerText, selectedTab === 'features' && styles.tabTriggerTextActive]}>
                      Features
                    </Text>
                  </TouchableOpacity>
                </View>
                
                {selectedTab === 'stores' && renderStoresTab()}
                {selectedTab === 'dining' && renderDiningTab()}
                {selectedTab === 'features' && renderFeaturesTab()}
              </View>
            </View>
            
            {/* Right column - Sidebar */}
            <View style={styles.sidebarColumn}>
              <View style={styles.sidebarSticky}>
                {/* Mall Info Card */}
                <View style={styles.mallInfoCard}>
                  <Text style={styles.mallInfoTitle}>Mall Information</Text>
                  
                  <View style={styles.mallInfoContent}>
                    <View style={styles.mallInfoItem}>
                      <MapPin size={20} color="#6B7280" />
                      <View style={styles.mallInfoItemContent}>
                        <Text style={styles.mallInfoLabel}>Location</Text>
                        <View style={styles.mallInfoAddress}>
                          <Text style={styles.mallInfoText}>{mall.location.address}</Text>
                          <Text style={styles.mallInfoText}>{mall.location.neighborhood}</Text>
                  <TouchableOpacity 
                            style={styles.mallInfoMapButton}
                            onPress={() => handleMapPress(mall.location.address)}
                  >
                            <MapPin size={12} color="#EA580C" />
                            <Text style={styles.mallInfoMapText}>Map It</Text>
                  </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    
                    <View style={styles.mallInfoItem}>
                      <Clock size={20} color="#6B7280" />
                      <View style={styles.mallInfoItemContent}>
                        <Text style={styles.mallInfoLabel}>Hours</Text>
                        <Text style={styles.mallInfoText}>{mall.hours.regular.replace(/,/g, '\n')}</Text>
                        {mall.hours.holiday && (
                          <Text style={styles.mallInfoHoliday}>{mall.hours.holiday}</Text>
                )}
              </View>
            </View>
                    
                    <View style={styles.mallInfoSeparator} />
                    
                    <View style={styles.mallInfoItem}>
                      <Phone size={20} color="#6B7280" />
                      <View style={styles.mallInfoItemContent}>
                        <Text style={styles.mallInfoLabel}>Phone</Text>
                        <TouchableOpacity onPress={() => handlePhonePress(mall.contactInfo.phone)}>
                          <Text style={styles.mallInfoLink}>{mall.contactInfo.phone}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    
                    <View style={styles.mallInfoItem}>
                      <Globe size={20} color="#6B7280" />
                      <View style={styles.mallInfoItemContent}>
                        <Text style={styles.mallInfoLabel}>Website</Text>
                                                 <TouchableOpacity onPress={() => handleWebsitePress(mall.contactInfo.website)}>
                           <Text style={styles.mallInfoLink}>
                             {mall.contactInfo.website.replace(/^https?:\/\//, '').replace(/\/.*$/, '')}
                           </Text>
                           <ExternalLink size={12} color="#EA580C" />
                         </TouchableOpacity>
                      </View>
                    </View>
                    
                    <View style={styles.mallInfoSeparator} />
                    
                    <View style={styles.mallInfoItem}>
                      <Store size={20} color="#6B7280" />
                      <View style={styles.mallInfoItemContent}>
                        <Text style={styles.mallInfoLabel}>Mall Details</Text>
                        <Text style={styles.mallInfoText}>Size: {mall.details.squareFeet}</Text>
                        <Text style={styles.mallInfoText}>Stores: {mall.details.storeCount}+</Text>
                        <Text style={styles.mallInfoText}>Levels: {mall.details.levels}</Text>
                        <Text style={styles.mallInfoText}>Opened: {mall.details.openingYear}</Text>
                      </View>
                    </View>
                    
                    <View style={styles.mallInfoItem}>
                      <Car size={20} color="#6B7280" />
                      <View style={styles.mallInfoItemContent}>
                        <Text style={styles.mallInfoLabel}>Parking</Text>
                        <Text style={styles.mallInfoText}>{mall.details.parkingInfo}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        
        {/* Call to action */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Explore {mall.name}?</Text>
          <Text style={styles.ctaSubtitle}>
            Visit {mall.name} today to experience luxury shopping, dining, and entertainment.
          </Text>
          <TouchableOpacity 
            style={styles.ctaButton}
            onPress={() => handleWebsitePress(mall.contactInfo.website)}
          >
            <Text style={styles.ctaButtonText}>Official Website</Text>
            <ExternalLink size={16} color="#EA580C" />
          </TouchableOpacity>
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
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 20,
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#F9FAFB',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 16,
    color: '#6B7280',
    marginLeft: 8,
  },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  breadcrumbText: {
    fontSize: 14,
    color: '#6B7280',
  },
  breadcrumbSeparator: {
    fontSize: 14,
    color: '#6B7280',
    marginHorizontal: 8,
  },
  breadcrumbActive: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
     height: 500,
    position: 'relative',
    overflow: 'hidden',
  },
  heroImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 10,
  },
  heroPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    zIndex: 10,
  },
  shareButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 8,
    borderRadius: 8,
    zIndex: 30,
  },
  heroContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    zIndex: 20,
  },
  geometricAccent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  accentLine: {
    height: 2,
    width: Math.min(64, width * 0.15),
    backgroundColor: '#FB923C',
  },
  accentLineShort: {
    height: 2,
    width: Math.min(32, width * 0.08),
    backgroundColor: '#2DD4BF',
    marginHorizontal: Math.min(12, width * 0.03),
  },
  heroTitle: {
    fontSize: Math.min(56, width * 0.12),
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  heroTagline: {
    fontSize: Math.min(24, width * 0.05),
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  heroBadges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
  },
  heroBadge: {
    backgroundColor: '#EA580C',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  heroBadgeTeal: {
    backgroundColor: '#0D9488',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  heroBadgeWhite: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  heroBadgeText: {
    color: '#FFFFFF',
    fontSize: Math.min(14, width * 0.035),
    fontWeight: '600',
  },
  heroBadgeTextDark: {
    color: '#374151',
    fontSize: Math.min(14, width * 0.035),
    fontWeight: '600',
  },
  heroButtons: {
    flexDirection: 'column',
    gap: 12,
    width: '100%',
    paddingHorizontal: 20,
  },
  heroWebsiteButton: {
    backgroundColor: '#EA580C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  heroWebsiteButtonText: {
    color: '#FFFFFF',
    fontSize: Math.min(18, width * 0.045),
    fontWeight: '600',
    marginRight: 8,
  },
  heroPhoneButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  heroPhoneButtonText: {
    color: '#FFFFFF',
    fontSize: Math.min(18, width * 0.045),
    fontWeight: '600',
    marginLeft: 8,
  },
  heroBottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 96,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 10,
  },
  mainContent: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  contentGrid: {
    flexDirection: 'column',
    gap: 24,
  },
  mainColumn: {
    flex: 1,
  },
  sidebarColumn: {
    flex: 1,
  },
  sidebarSticky: {
    position: 'relative',
    top: 24,
  },
  overviewSection: {
    marginBottom: 48,
  },
  overviewTitle: {
    fontSize: Math.min(32, width * 0.08),
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 16,
  },
  overviewText: {
    fontSize: Math.min(18, width * 0.045),
    color: '#6B7280',
    lineHeight: 24,
  },
  gallerySection: {
    marginBottom: 24,
  },
  galleryTitle: {
    fontSize: Math.min(32, width * 0.08),
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 16,
  },
  mainGalleryImage: {
    height: Math.min(400, width * 0.6),
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#F3F4F6',
    overflow: 'hidden',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  galleryThumbnails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  galleryThumbnail: {
    width: Math.min(96, width * 0.2),
    height: Math.min(96, width * 0.2),
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    overflow: 'hidden',
  },
  galleryThumbnailSelected: {
    borderColor: '#EA580C',
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  tabsSection: {
    marginBottom: 24,
  },
  tabsList: {
    flexDirection: 'row',
    marginBottom: 32,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 4,
  },
  tabTrigger: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    gap: 8,
  },
  tabTriggerActive: {
    backgroundColor: '#EA580C',
  },
  tabTriggerText: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
  },
  tabTriggerTextActive: {
    color: '#FFFFFF',
  },
  tabContent: {
    marginTop: 16,
  },
  tabTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 16,
  },
  storesGrid: {
    flexDirection: 'column',
    gap: 16,
  },
  storeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  flagshipCard: {
    borderColor: '#FED7AA',
    backgroundColor: '#FFFBEB',
  },
  storeCardContent: {
    padding: 16,
  },
  storeCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  storeCardName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
  },
  flagshipBadge: {
    backgroundColor: '#EA580C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  flagshipBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  categoryBadge: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  categoryBadgeText: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '500',
  },
  storeCardDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  storeCardSeparator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 16,
  },
  storeCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  storeLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  storeLocationText: {
    fontSize: 14,
    color: '#6B7280',
  },
  storeWebsiteLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  storeWebsiteText: {
    color: '#EA580C',
    fontSize: 14,
    fontWeight: '500',
  },
  diningGrid: {
    flexDirection: 'column',
    gap: 16,
  },
  diningCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  diningCardHeader: {
    height: 112,
    backgroundColor: 'rgba(251, 146, 60, 0.1)',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diningIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  priceBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
  },
  priceBadgeExpensive: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  priceBadgeModerate: {
    backgroundColor: '#D1FAE5',
    borderColor: '#10B981',
  },
  priceBadgeAffordable: {
    backgroundColor: '#DBEAFE',
    borderColor: '#3B82F6',
  },
  priceBadgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  diningCardContent: {
    padding: 16,
  },
  diningCardName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  cuisineBadge: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  cuisineBadgeText: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '500',
  },
  diningCardDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  diningCardSeparator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 16,
  },
  diningCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  diningLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  diningLocationText: {
    fontSize: 14,
    color: '#6B7280',
  },
  diningWebsiteLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  diningWebsiteText: {
    color: '#EA580C',
    fontSize: 14,
    fontWeight: '500',
  },
  featuresGrid: {
    flexDirection: 'column',
    gap: 12,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featureIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  featureText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    flex: 1,
  },
  mallInfoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  mallInfoTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  mallInfoContent: {
    gap: 16,
  },
  mallInfoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  mallInfoItemContent: {
    marginLeft: 12,
    flex: 1,
  },
  mallInfoLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  mallInfoText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  mallInfoAddress: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  mallInfoMapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FED7AA',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 4,
    marginLeft: 8,
  },
  mallInfoMapText: {
    fontSize: 12,
    color: '#EA580C',
    fontWeight: '500',
  },
  mallInfoHoliday: {
    fontSize: 14,
    color: '#EA580C',
    marginTop: 4,
  },
  mallInfoSeparator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 8,
  },
  mallInfoLink: {
    fontSize: 14,
    color: '#EA580C',
    textDecorationLine: 'underline',
  },
  ctaSection: {
    backgroundColor: '#EA580C',
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 24,
    maxWidth: 600,
  },
  ctaButton: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  ctaButtonText: {
    color: '#EA580C',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ShoppingDetailScreen; 