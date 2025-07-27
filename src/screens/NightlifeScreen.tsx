import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Linking,
  Dimensions,
  Modal,
  Share,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { 
  MapPin, 
  Phone, 
  Globe, 
  X, 
  ExternalLink, 
  Star, 
  Share2,
  Clock,
  Beer,
  Wine,
  GlassWater,
  ThumbsUp,
  Info,
  CornerDownRight,
  Calendar,
  Compass,
  Music
} from 'lucide-react-native';
import Header from '../components/Header';



// Import nightlife data
import { NIGHTLIFE_LOCATIONS } from '../data/NightlifeLocation';

const { width } = Dimensions.get('screen');

console.log(width)

interface NightlifeScreenProps {
  navigation: any;
}

const NightlifeScreen: React.FC<NightlifeScreenProps> = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>("about");

  const handleWebsitePress = (url: string) => {
    navigation.navigate('WebViewScreen', { 
      url, 
      title: 'Nightlife Website' 
    });
  };

  const handleMapPress = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    Linking.openURL(url);
  };

  const handleLocationClick = (location: any) => {
    setSelectedLocation(location);
  };

  const handleShare = async (location: any) => {
    const shareUrl = `https://awesomeorlando.com/bar-hop/${location.id}`;
    const shareTitle = `${location.name} | Orlando Nightlife Spot`;
    const shareMessage = `Check out this amazing ${getCategoryName(location.category).toLowerCase()} spot in ${location.neighborhood}! ${location.description.substring(0, 100)}... ${shareUrl}`;
    
    try {
      await Share.share({
        message: shareMessage,
        url: shareUrl,
        title: shareTitle,
      });
    } catch (error) {
      console.error('Error sharing location:', error);
    }
  };

  // Category icons
  const categoryIcons = {
    speakeasy: <GlassWater size={20} color="#ffffff" />,
    brewery: <Beer size={20} color="#ffffff" />,
    winery: <Wine size={20} color="#ffffff" />
  };

  // Category colors
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'speakeasy':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'brewery':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'winery':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Category names for display
  const getCategoryName = (category: string) => {
    switch (category) {
      case 'speakeasy':
        return 'Speakeasy';
      case 'brewery':
        return 'Craft Brewery';
      case 'winery':
        return 'Winery & Wine Bar';
      default:
        return category;
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'speakeasy':
        return { backgroundColor: '#f3e8ff', color: '#7c3aed' };
      case 'brewery':
        return { backgroundColor: '#fef3c7', color: '#d97706' };
      case 'winery':
        return { backgroundColor: '#fecaca', color: '#dc2626' };
      default:
        return { backgroundColor: '#f3f4f6', color: '#374151' };
    }
  };

  const renderLocationCard = (location: any) => (
    <TouchableOpacity 
      key={location.id} 
      style={styles.card}
      onPress={() => handleLocationClick(location)}
      activeOpacity={0.8}
    >
      <ImageBackground
        source={location.image}
        style={styles.cardImage}
        imageStyle={styles.cardImageStyle}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.imageGradient}
        />
        
        {/* Category Badge */}
        <View style={[styles.categoryBadge, getCategoryBadgeColor(location.category)]}>
          <Text style={[styles.categoryBadgeText, { color: getCategoryBadgeColor(location.category).color }]}>
            {getCategoryName(location.category)}
          </Text>
        </View>
        
        {/* Share Button */}
        <TouchableOpacity
          style={styles.shareButton}
          onPress={(e) => {
            e.stopPropagation();
            handleShare(location);
          }}
        >
          <Share2 size={16} color="#374151" />
        </TouchableOpacity>
        
        {/* Bottom Content */}
        <View style={styles.cardBottomContent}>
          <Text style={styles.locationName}>{location.name}</Text>
          <View style={styles.addressRow}>
            <MapPin size={12} color="rgba(255, 255, 255, 0.9)" />
            <Text style={styles.addressText}>{location.address}</Text>
          </View>
          <View style={styles.neighborhoodRow}>
            <Compass size={12} color="rgba(255, 255, 255, 0.8)" />
            <Text style={styles.neighborhoodText}>{location.neighborhood}</Text>
          </View>
        </View>
      </ImageBackground>
      
      <View style={styles.cardContent}>
        <View style={styles.cardTopRow}>
          <View style={styles.hoursContainer}>
            <Clock size={12} color="#ea580c" />
            <Text style={styles.hoursText}>{location.hours.split(',')[0]}</Text>
          </View>
          <View style={styles.cardActions}>
            <TouchableOpacity 
              style={styles.mapItButton}
              onPress={(e) => {
                e.stopPropagation();
                handleMapPress(location.address);
              }}
            >
              <MapPin size={12} color="#ea580c" />
              <Text style={styles.mapItText}>Map It</Text>
            </TouchableOpacity>
            {location.website && (
              <TouchableOpacity 
                style={styles.visitButton}
                onPress={(e) => {
                  e.stopPropagation();
                  handleWebsitePress(location.website);
                }}
              >
                <Text style={styles.visitText}>Visit</Text>
                <ExternalLink size={12} color="#7c3aed" />
              </TouchableOpacity>
            )}
          </View>
        </View>
        
        <Text style={styles.locationDescription}>
          {location.description}
        </Text>
        
        <View style={styles.featuresContainer}>
          {location.features.slice(0, 3).map((feature: string, index: number) => (
            <View key={index} style={styles.featureBadge}>
              <Text style={styles.featureBadgeText}>{feature}</Text>
            </View>
          ))}
        </View>
        
        <TouchableOpacity
          style={styles.checkItOutButton}
          onPress={() => handleLocationClick(location)}
        >
          <Text style={styles.checkItOutButtonText}>Check It Out</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderModalTab = (tabName: string, label: string) => (
    <TouchableOpacity
      key={tabName}
      style={[
        styles.tabButton,
        activeTab === tabName && styles.activeTabButton
      ]}
      onPress={() => setActiveTab(tabName)}
    >
      <Text style={[
        styles.tabButtonText,
        activeTab === tabName && styles.activeTabButtonText
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderTabContent = () => {
    if (!selectedLocation) return null;

    switch (activeTab) {
      case 'about':
        return (
          <View style={styles.tabContent}>
            <View style={styles.aboutSection}>
              <Text style={styles.aboutTitle}>About This Spot</Text>
              <Text style={styles.aboutDescription}>
                {selectedLocation.longDescription || selectedLocation.description}
              </Text>
            </View>
            
            {selectedLocation.phone && (
              <View style={styles.phoneContainer}>
                <Phone size={16} color="#0d9488" />
                <View style={styles.phoneInfo}>
                  <Text style={styles.phoneLabel}>Contact</Text>
                  <Text style={styles.phoneNumber}>{selectedLocation.phone}</Text>
                </View>
              </View>
            )}
          </View>
        );
      case 'features':
        return (
          <View style={styles.tabContent}>
            {selectedLocation.features.map((feature: string, idx: number) => (
              <View key={idx} style={styles.featureItem}>
                <View style={styles.featureNumber}>
                  <Text style={styles.featureNumberText}>{idx + 1}</Text>
                </View>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        );
      case 'must-try':
        return (
          <View style={styles.tabContent}>
            {selectedLocation.mustTry?.map((item: string, idx: number) => (
              <View key={idx} style={styles.mustTryItem}>
                <View style={styles.mustTryNumber}>
                  <Text style={styles.mustTryNumberText}>{idx + 1}</Text>
                </View>
                <Text style={styles.mustTryText}>{item}</Text>
              </View>
            ))}
          </View>
        );
      case 'tips':
        return (
          <View style={styles.tabContent}>
            {selectedLocation.insiderTips?.map((tip: string, idx: number) => (
              <View key={idx} style={styles.tipItem}>
                <CornerDownRight size={16} color="#3b82f6" />
                <Text style={styles.tipText}>{tip}</Text>
              </View>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header showDrawerButton={true} title="Orlando Bar Hop" />
      
      {/* Hero Section - ORLANDO BAR HOP */}


      {/* <Image style={{width:width,height:140 }} resizeMode='contain' source={require("../../assets/images/barheader.png")}/> */}

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#0f172a', '#1e293b']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.hero}
      >
        <View style={styles.heroContent}>
          <View style={styles.tagsRow}>
            <View style={styles.tagContainer}>
              <Beer size={12} color="#fbbf24" />
              <Text style={styles.tagText}>BREWERIES</Text>
            </View>
            <Text style={styles.tagSeparator}>•</Text>
            <View style={styles.tagContainer}>
              <GlassWater size={12} color="#fbbf24" />
              <Text style={styles.tagText}>SPEAKEASIES</Text>
            </View>
            <Text style={styles.tagSeparator}>•</Text>
            <View style={styles.tagContainer}>
              <Wine size={12} color="#fbbf24" />
              <Text style={styles.tagText}>WINERIES</Text>
            </View>
          </View>
          
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>ORLANDO BAR HOP</Text>
            
          </View>
          
          <Text style={styles.heroSubtitle}>
            Discover Orlando's coolest local hangouts!
          </Text>

          <View style={styles.logoAccent} />
        </View>
        
        {/* <View style={styles.heroPattern}>
          <LinearGradient
            colors={['#d97706', '#ea580c']}
            style={styles.patternBar}
          />
        </View> */}
      </LinearGradient>
        {/* Introduction */}
        <View style={styles.introSection}>
          <Text style={styles.introTitle}>Discover Your Next Favorite Spot</Text>
          <Text style={styles.introSubtitle}>
            From secret cocktail lounges to local breweries with the coolest vibes in town - perfect for your next night out with friends!
          </Text>
        </View>

        {/* Locations Grid */}
        <View style={styles.locationsGrid}>
          {NIGHTLIFE_LOCATIONS.map((location) => renderLocationCard(location))}
        </View>
      </ScrollView>

      {/* Location Detail Modal */}
      <Modal
        visible={!!selectedLocation}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setSelectedLocation(null)}
      >
        {selectedLocation && (
          <SafeAreaView style={styles.modalContainer}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <ImageBackground
                source={selectedLocation.image}
                style={styles.modalHeaderImage}
                imageStyle={styles.modalHeaderImageStyle}
              >
                <LinearGradient
                  colors={['rgba(15, 23, 42, 0.5)', 'rgba(15, 23, 42, 0.9)']}
                  style={styles.modalHeaderGradient}
                />
                
                {/* Top Controls */}
                <View style={styles.modalTopControls}>
                  <TouchableOpacity
                    style={styles.modalShareButton}
                    onPress={() => handleShare(selectedLocation)}
                  >
                    <Share2 size={16} color="#ffffff" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={() => setSelectedLocation(null)}
                  >
                    <X size={18} color="#ffffff" />
                  </TouchableOpacity>
                </View>
                
                {/* Bottom Content */}
                <View style={styles.modalHeaderContent}>
                  <View style={[styles.modalCategoryBadge, getCategoryBadgeColor(selectedLocation.category)]}>
                    <Text style={[styles.modalCategoryBadgeText, { color: getCategoryBadgeColor(selectedLocation.category).color }]}>
                      {getCategoryName(selectedLocation.category)}
                    </Text>
                  </View>
                  <Text style={styles.modalTitle}>{selectedLocation.name}</Text>
                  <Text style={styles.modalAddress}>
                    {selectedLocation.address} • {selectedLocation.neighborhood}
                  </Text>
                </View>
              </ImageBackground>
            </View>

            {/* Action Buttons */}
            <View style={styles.modalActions}>
              {selectedLocation.website && (
                <TouchableOpacity
                  style={styles.modalActionButton}
                  onPress={() => handleWebsitePress(selectedLocation.website)}
                >
                  <Text style={styles.modalActionButtonText}>Visit Website</Text>
                  <ExternalLink size={16} color="#ffffff" />
                </TouchableOpacity>
              )}
              
              <TouchableOpacity
                style={styles.modalActionButton}
                onPress={() => handleMapPress(selectedLocation.address)}
              >
                <MapPin size={16} color="#ffffff" />
                <Text style={styles.modalActionButtonText}>Map It</Text>
              </TouchableOpacity>
              
              {selectedLocation.phone && (
                <TouchableOpacity
                  style={styles.modalPhoneButton}
                  onPress={() => Linking.openURL(`tel:${selectedLocation.phone}`)}
                >
                  <Phone size={16} color="#374151" />
                  <Text style={styles.modalPhoneButtonText}>{selectedLocation.phone}</Text>
                </TouchableOpacity>
              )}
              
              <View style={styles.modalHoursButton}>
                <Clock size={16} color="#374151" />
                <Text style={styles.modalHoursButtonText}>{selectedLocation.hours.split(',')[0]}</Text>
              </View>
            </View>

            {/* Modal Content */}
            <View style={styles.modalContent}>
              {/* Tabs */}
              <View style={styles.tabsContainer}>
                <ScrollView 
                  horizontal 
                  showsHorizontalScrollIndicator={false}
                  style={styles.tabsScrollView}
                >
                  <View style={styles.tabsList}>
                    {renderModalTab('about', 'About')}
                    {renderModalTab('features', 'Features')}
                    {selectedLocation.mustTry && selectedLocation.mustTry.length > 0 && renderModalTab('must-try', 'Must Try')}
                    {selectedLocation.insiderTips && selectedLocation.insiderTips.length > 0 && renderModalTab('tips', 'Tips')}
                  </View>
                </ScrollView>
              </View>

              <ScrollView style={styles.tabContentContainer} showsVerticalScrollIndicator={false}>
                {renderTabContent()}
              </ScrollView>
            </View>
          </SafeAreaView>
        )}
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  hero: {
   // paddingVertical: 24,
  //  paddingHorizontal: 16,
 //   position: 'relative',
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  heroContent: {
    zIndex: 1,
    paddingHorizontal:15,
    paddingVertical:25
  },
  tagsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
   // justifyContent: 'center',
    marginBottom: 12,
    gap: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  tagText: {
    fontSize: 12,
    color: '#fbbf24',
    fontWeight: '600',
  },
  tagSeparator: {
    fontSize: 12,
    color: '#fbbf24',
  },
  logoContainer: {
   // alignItems: 'center',
    marginBottom: 8,
  },
  logoText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: 1,
   //textAlign: 'left',
  },
  logoAccent: {
    height: 19,
    width: "100%",
    backgroundColor: '#fbbf24',
    borderRadius: 4,
    marginTop: 15,
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#94a3b8',
   // textAlign: 'center',
  },
  heroPattern: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 24,
    opacity: 0.9,
  },
  patternBar: {
    flex: 1,
    opacity: 0.2,
  },
  scrollView: {
    flex: 1,
  },
  introSection: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  introTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 12,
  },
  introSubtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 320,
  },
  locationsGrid: {
    paddingHorizontal: 16,
    gap: 24,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  cardImage: {
    height: 224,
    justifyContent: 'flex-end',
  },
  cardImageStyle: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  imageGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    zIndex: 1,
  },
  categoryBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryBadgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  shareButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  cardBottomContent: {
    padding: 16,
    zIndex: 2,
  },
  locationName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 2,
  },
  addressText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
  },
  neighborhoodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  neighborhoodText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  cardContent: {
    padding: 20,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  hoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  hoursText: {
    fontSize: 14,
    color: '#ea580c',
    fontWeight: '600',
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  mapItButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  mapItText: {
    fontSize: 14,
    color: '#ea580c',
    fontWeight: '600',
  },
  visitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  visitText: {
    fontSize: 14,
    color: '#7c3aed',
    fontWeight: '600',
  },
  locationDescription: {
    fontSize: 14,
    color: '#374155',
    lineHeight: 20,
    marginBottom: 16,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 16,
  },
  featureBadge: {
    backgroundColor: '#fed7aa',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ea580c',
  },
  featureBadgeText: {
    fontSize: 12,
    color: '#ea580c',
    fontWeight: '600',
  },
  checkItOutButton: {
    backgroundColor: '#ea580c',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  checkItOutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  modalHeader: {
    height: 350,
  },
  modalHeaderImage: {
    height: 350,
    justifyContent: 'space-between',
  },
  modalHeaderImageStyle: {
    backgroundColor: '#f1f5f9',
  },
  modalHeaderGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  modalTopControls: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    gap: 8,
    zIndex: 3,
  },
  modalShareButton: {
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    borderRadius: 20,
    padding: 8,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseButton: {
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    borderRadius: 20,
    padding: 8,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeaderContent: {
    padding: 24,
    zIndex: 2,
  },
  modalCategoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  modalCategoryBadgeText: {
    fontSize: 14,
    fontWeight: '600',
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  modalAddress: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
  },
  modalActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  modalActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#7c3aed',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  modalActionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  modalPhoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  modalPhoneButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  modalHoursButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  modalHoursButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  tabsContainer: {
    marginBottom: 20,
  },
  tabsScrollView: {
    backgroundColor: 'rgba(248, 250, 252, 0.7)',
    borderRadius: 8,
    padding: 4,
  },
  tabsList: {
    flexDirection: 'row',
    gap: 4,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: 'transparent',
  },
  activeTabButton: {
    backgroundColor: '#ffffff',
  },
  tabButtonText: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  activeTabButtonText: {
    color: '#1f2937',
  },
  tabContentContainer: {
    flex: 1,
  },
  tabContent: {
    paddingBottom: 20,
  },
  aboutSection: {
    backgroundColor: '#fed7aa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  aboutDescription: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
  },
  phoneInfo: {
    marginLeft: 12,
  },
  phoneLabel: {
    fontSize: 12,
    color: '#64748b',
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    marginBottom: 12,
  },
  featureNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(8, 145, 178, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    flexShrink: 0,
  },
  featureNumberText: {
    fontSize: 12,
    color: '#0891b2',
    fontWeight: '600',
  },
  featureText: {
    fontSize: 14,
    color: '#334155',
    flex: 1,
  },
  mustTryItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#fef3c7',
    borderRadius: 8,
    marginBottom: 12,
  },
  mustTryNumber: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#d97706',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    flexShrink: 0,
  },
  mustTryNumberText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  mustTryText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    backgroundColor: '#dbeafe',
    borderRadius: 8,
    marginBottom: 12,
    gap: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
});

export default NightlifeScreen; 