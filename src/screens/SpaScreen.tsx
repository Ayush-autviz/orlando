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
  FlatList,
  Share,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { MapPin, Phone, Globe, X, ExternalLink, Star, Share2, ChevronLeft, ChevronRight } from 'lucide-react-native';
import Header from '../components/Header';

// Import spa data
import spas from '../data/spa';

const { width } = Dimensions.get('window');

interface SpaScreenProps {
  navigation: any;
}

const SpaScreen: React.FC<SpaScreenProps> = ({ navigation }) => {
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [selectedSpa, setSelectedSpa] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>("about");
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});

  const handleWebsitePress = (url: string) => {
    navigation.navigate('WebViewScreen', { 
      url, 
      title: 'Spa Website' 
    });
    setSelectedSpa(null);
    
  };

  const handleMapPress = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    Linking.openURL(url);
  };

  const handleSpaClick = (spa: any) => {
    setSelectedSpa(spa);
  };

  const handleShare = async (spa: any) => {
    const shareUrl = `https://awesomeorlando.com/spas/${spa.id}`;
    const shareTitle = `${spa.name} | RELAXORLANDO`;
    const shareMessage = `Check out this amazing spa in ${spa.location.area}! ${spa.description.substring(0, 100)}... ${shareUrl}`;
    
    try {
      await Share.share({
        message: shareMessage,
        url: shareUrl,
        title: shareTitle,
      });
    } catch (error) {
      console.error('Error sharing spa:', error);
    }
  };

  const filteredSpas = selectedArea === "all" 
    ? spas 
    : selectedArea === "ThemeParks" 
      ? spas.filter(spa => 
          spa.location.area.includes("Disney") || 
          spa.location.area.includes("Universal") ||
          spa.location.area.includes("Bonnet Creek") || 
          spa.location.area.includes("Reunion") || 
          spa.location.area.includes("ChampionsGate") ||
          spa.location.area.includes("Lake Buena Vista") ||
          spa.location.area.includes("International Drive")
        )
      : selectedArea === "Beyond"
        ? spas.filter(spa => 
            !spa.location.area.includes("Disney") && 
            !spa.location.area.includes("Universal") &&
            !spa.location.area.includes("Bonnet Creek") && 
            !spa.location.area.includes("Reunion") && 
            !spa.location.area.includes("ChampionsGate") && 
            !spa.location.area.includes("Lake Buena Vista") && 
            !spa.location.area.includes("International Drive")
          )
        : spas.filter(spa => spa.location.area.includes(selectedArea));

  const areas = [
    { id: "all", name: "All Areas" },
    { id: "ThemeParks", name: "Theme Parks Area" },
    { id: "Beyond", name: "Beyond Theme Parks" },
  ];

  const renderImageCarousel = (images: any[], height: number = 224, isModal: boolean = false, itemId?: string) => {
    if (!images || images.length === 0) {
      return null;
    }

    // For single image, just show the image
    if (images.length === 1) {
      return (
        <Image 
          source={images[0]} 
          style={[
            { width: '100%', height },
            isModal ? {} : { borderTopLeftRadius: 8, borderTopRightRadius: 8 }
          ]} 
          resizeMode="cover"
        />
      );
    }

    const indexKey = `${itemId || 'default'}-${isModal ? 'modal' : 'card'}`;
    const currentIndex = currentImageIndex[indexKey] || 0;

    const goToPrevious = () => {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      setCurrentImageIndex(prev => ({ ...prev, [indexKey]: newIndex }));
    };

    const goToNext = () => {
      const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      setCurrentImageIndex(prev => ({ ...prev, [indexKey]: newIndex }));
    };

    // For multiple images, use controlled view with arrows
    return (
      <View style={{ height, position: 'relative' }}>
        <View style={{ height, overflow: 'hidden' }}>
          <ScrollView
            ref={(ref) => {
              if (ref) {
                const scrollToX = currentIndex * (isModal ? width : width - 32);
                ref.scrollTo({ x: scrollToX, animated: true });
              }
            }}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={{ height }}
            snapToInterval={isModal ? width : width - 32}
            decelerationRate="fast"
            onMomentumScrollEnd={(event) => {
              const contentOffsetX = event.nativeEvent.contentOffset.x;
              const newIndex = Math.round(contentOffsetX / (isModal ? width : width - 32));
              setCurrentImageIndex(prev => ({ ...prev, [indexKey]: newIndex }));
            }}
          >
            {images.map((image, index) => (
              <View 
                key={index} 
                style={[
                  isModal ? styles.modalCarouselImageContainer : styles.carouselImageContainer, 
                  { height }
                ]}
              >
                <Image 
                  source={image} 
                  style={[
                    isModal ? styles.modalCarouselImage : styles.carouselImage
                  ]} 
                  resizeMode="cover"
                />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Left Arrow */}
        <TouchableOpacity
          style={[styles.carouselArrow, styles.leftArrow]}
          onPress={goToPrevious}
        >
          <ChevronLeft size={20} color="#ffffff" />
        </TouchableOpacity>

        {/* Right Arrow */}
        <TouchableOpacity
          style={[styles.carouselArrow, styles.rightArrow]}
          onPress={goToNext}
        >
          <ChevronRight size={20} color="#ffffff" />
        </TouchableOpacity>

        {/* Dots Indicator */}
        <View style={styles.dotsContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex && styles.activeDot
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  const renderSpaCard = (spa: any) => (
    <View key={spa.id} style={styles.card}>
      <View style={styles.cardImageContainer}>
        {/* Image Carousel */}
        {renderImageCarousel(spa.images?.length ? spa.images : [spa.imageUrl], 224, false, spa.id.toString())}
        
        {/* Gradient Overlay */}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.imageGradient}
        />
        
        {/* Area Tag */}
        <View style={styles.areaTag}>
          <Text style={styles.areaTagText}>{spa.location.area}</Text>
        </View>
        
        {/* Share Button */}
        <TouchableOpacity
          style={styles.shareButton}
          onPress={() => handleShare(spa)}
        >
          <Share2 size={16} color="#374151" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.cardContent}>
        <Text style={styles.spaName}>{spa.name}</Text>
        
        <Text style={styles.spaDescription}>
          {spa.description.substring(0, 120)}...
        </Text>
        
        <View style={styles.addressContainer}>
          <View style={styles.addressRow}>
            <MapPin size={14} color="#0891b2" style={styles.addressIcon} />
            <Text style={styles.addressText}>{spa.location.address}</Text>
          </View>
          <TouchableOpacity 
            style={styles.mapItButton}
            onPress={() => handleMapPress(spa.location.address)}
          >
            <Text style={styles.mapItText}>Map It</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.detailsButton]}
            onPress={() => handleSpaClick(spa)}
          >
            <Text style={styles.detailsButtonText}>View Details</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.button, styles.websiteButton]}
            onPress={() => handleWebsitePress(spa.website)}
          >
            <Text style={styles.websiteButtonText}>Website</Text>
            <ExternalLink size={12} color="#475569" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    if (!selectedSpa) return null;

    switch (activeTab) {
      case 'about':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabDescription}>{selectedSpa.description}</Text>
            <View style={styles.phoneContainer}>
              <Phone size={16} color="#0d9488" />
              <View style={styles.phoneInfo}>
                <Text style={styles.phoneLabel}>Reservations</Text>
                <Text style={styles.phoneNumber}>{selectedSpa.phone}</Text>
              </View>
            </View>
          </View>
        );
      case 'features':
        return (
          <View style={styles.tabContent}>
            {selectedSpa.features.map((feature: string, idx: number) => (
              <View key={idx} style={styles.featureItem}>
                <View style={styles.featureNumber}>
                  <Text style={styles.featureNumberText}>{idx + 1}</Text>
                </View>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        );
      case 'treatments':
        return (
          <View style={styles.tabContent}>
            {selectedSpa.signature.map((treatment: string, idx: number) => (
              <View key={idx} style={styles.treatmentItem}>
                <Text style={styles.treatmentName}>{treatment}</Text>
                <Text style={styles.treatmentDescription}>
                  Available by appointment • Contact spa for details and reservations
                </Text>
              </View>
            ))}
          </View>
        );
      case 'photos':
        return (
          <View style={styles.tabContent}>
            <View style={styles.photosGrid}>
              {selectedSpa.images.map((image: any, idx: number) => (
                <TouchableOpacity key={idx} style={styles.photoItem}>
                  <ImageBackground
                    source={image}
                    style={styles.photoImage}
                    imageStyle={styles.photoImageStyle}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header showDrawerButton={true} title="Spas & Wellness" />
      
      {/* Hero Section - RELAXORLANDO */}


      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#075985', '#0891b2']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.hero}
      >
        <View style={styles.patternOverlay} />
        
        <View style={styles.heroContent}>
          <View style={styles.tagsRow}>
            <Text style={styles.tagText}>RESORT SPAS</Text>
            <Text style={styles.tagSeparator}>•</Text>
            <Text style={styles.tagText}>DAY SPAS</Text>
            <Text style={styles.tagSeparator}>•</Text>
            <Text style={styles.tagText}>MASSAGE</Text>
            <Text style={styles.tagSeparator}>•</Text>
            <Text style={styles.tagText}>WELLNESS</Text>
          </View>
          
          <View style={styles.logoContainer}>
            <View style={styles.logoGlow} />
            <LinearGradient
              colors={['#ffffff', '#f0f9ff']}
              style={styles.logoGradient}
            >
              <Text style={styles.logoText}>
                <Text style={styles.logoRelax}>RELAX</Text>
                <Text style={styles.logoOrlando}>ORLANDO</Text>
              </Text>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>

      {/* Filter Section */}
      <View style={styles.filterSection}>
        <View style={styles.filterContainer}>
          <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>Filter:</Text>
            <View style={styles.filterButtons}>
              {areas.map((area) => (
                <TouchableOpacity
                  key={area.id}
                  style={[
                    styles.filterButton,
                    selectedArea === area.id && styles.activeFilterButton
                  ]}
                  onPress={() => setSelectedArea(area.id)}
                >
                  <Text style={[
                    styles.filterButtonText,
                    selectedArea === area.id && styles.activeFilterButtonText
                  ]}>
                    {area.id === "all" ? "All" : area.id === "ThemeParks" ? "Theme Parks" : "Beyond"}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
        {/* Spa Collection Header */}
        <View style={styles.collectionHeader}>
          <View style={styles.collectionTitleRow}>
            <Text style={styles.collectionTitle}>
              <Text style={styles.spaCount}>{filteredSpas.length}</Text> Spa {filteredSpas.length === 1 ? 'Destination' : 'Destinations'}
            </Text>
            <Text style={styles.collectionSubtitle}>
              Showing: <Text style={styles.collectionArea}>
                {selectedArea === "all" ? "All Areas" : selectedArea === "ThemeParks" ? "Theme Parks Area" : "Beyond Theme Parks"}
              </Text>
            </Text>
          </View>
        </View>

        {/* Spa Grid */}
        <View style={styles.spaGrid}>
          {filteredSpas.map((spa) => renderSpaCard(spa))}
        </View>
      </ScrollView>

      {/* Spa Detail Modal */}
      <Modal
        visible={!!selectedSpa}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setSelectedSpa(null)}
      >
        {selectedSpa && (
          <SafeAreaView style={styles.modalContainer}>
            {/* Modal Header with Carousel */}
            <View style={styles.modalHeader}>
              <View style={styles.modalHeaderImageContainer}>
                {/* Image Carousel */}
                {renderImageCarousel(selectedSpa.images?.length ? selectedSpa.images : [selectedSpa.imageUrl], 256, true, selectedSpa.id.toString())}
                
                {/* Gradient Overlay */}
                <LinearGradient
                  colors={['rgba(15, 23, 42, 0.3)', 'rgba(15, 23, 42, 0.8)']}
                  style={styles.modalHeaderGradient}
                />
                
                {/* Top Right Controls */}
                <View style={styles.modalTopControls}>
                  <TouchableOpacity
                    style={styles.modalShareButton}
                    onPress={() => handleShare(selectedSpa)}
                  >
                    <Share2 size={16} color="#ffffff" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={() => setSelectedSpa(null)}
                  >
                    <X size={18} color="#ffffff" />
                  </TouchableOpacity>
                </View>
                
                {/* Bottom Content */}
                <View style={styles.modalHeaderContent}>
                  <Text style={styles.modalAreaText}>{selectedSpa.location.area}</Text>
                  <Text style={styles.modalTitle}>{selectedSpa.name}</Text>
                  <View style={styles.modalHeaderActions}>
                    <TouchableOpacity 
                      style={styles.mapItLink}
                      onPress={() => handleMapPress(selectedSpa.location.address)}
                    >
                      <MapPin size={12} color="rgba(255, 255, 255, 0.8)" />
                      <Text style={styles.mapItLinkText}>Map It</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerSeparator}>•</Text>
                    <TouchableOpacity onPress={() => handleWebsitePress(selectedSpa.website)}>
                      <Text style={styles.websiteLinkText}>Official Website</Text>
                    </TouchableOpacity>
                  </View>
                </View>
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
                    {renderModalTab('treatments', 'Treatments')}
                    {renderModalTab('photos', 'Photos')}
                  </View>
                </ScrollView>
              </View>

              <ScrollView style={styles.tabContentContainer} showsVerticalScrollIndicator={false}>
                {renderTabContent()}
              </ScrollView>

              {/* Modal Footer */}
              <View style={styles.modalFooter}>
                <Text style={styles.footerAddress}>{selectedSpa.location.address}</Text>
                <TouchableOpacity
                  style={styles.officialWebsiteButton}
                  onPress={() => handleWebsitePress(selectedSpa.website)}
                >
                  <Text style={styles.officialWebsiteButtonText}>Official Website</Text>
                </TouchableOpacity>
              </View>
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
   // paddingVertical: 16,
   // paddingHorizontal: 16,
    position: 'relative',
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: '#075985',
  },
  patternOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    backgroundColor: 'transparent',
  },
  heroContent: {
    alignItems: 'center',
    zIndex: 1,
    paddingVertical:20
  },
  tagsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#e0f2fe',
    fontWeight: '500',
  },
  tagSeparator: {
    fontSize: 12,
    color: '#0891b2',
    marginHorizontal: 8,
  },
  logoContainer: {
    position: 'relative',
    marginVertical: 12,
  },
  logoGlow: {
    position: 'absolute',
    top: -6,
    left: -6,
    right: -6,
    bottom: -6,
    borderRadius: 8,
    backgroundColor: 'rgba(59, 130, 246, 0.3)',
    opacity: 0.5,
  },
  logoGradient: {
    //paddingHorizontal: 32,
   // paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(147, 197, 253, 0.3)',
  },
  logoText: {
    paddingHorizontal:15,
    paddingVertical:15,
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
    textAlign: 'center',
  },
  logoRelax: {
    color: '#075985',
    marginRight: 4,
  },
  logoOrlando: {
    color: '#0891b2',
  },
  filterSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  filterContainer: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    padding: 10,
    borderRadius: 6,
  },
  filterRow: {
    // flexDirection: 'row',
   // alignItems: 'center',
    gap: 8,
  },
  filterLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#334155',
  },
  filterButtons: {

    flexDirection: 'row',
   // flex: 1,
    gap: 6,
  },
  filterButton: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
  },
  activeFilterButton: {
    backgroundColor: '#075985',
    borderColor: '#075985',
  },
  filterButtonText: {
    fontSize: 12,
    color: '#334155',
    fontWeight: '500',
  },
  activeFilterButtonText: {
    color: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  collectionHeader: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    marginBottom: 20,
  },
  collectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  collectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1f2937',
  },
  spaCount: {
    color: '#0891b2',
  },
  collectionSubtitle: {
    fontSize: 12,
    color: '#64748b',
  },
  collectionArea: {
    fontWeight: '500',
    color: '#0891b2',
  },
  spaGrid: {
    paddingHorizontal: 16,
    gap: 32,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardImageContainer: {
    position: 'relative',
    height: 224,
  },
  cardImage: {
    height: 224,
    justifyContent: 'flex-end',
  },
  cardImageStyle: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  carouselImageContainer: {
    width: width - 32,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  modalCarouselImageContainer: {
    width: width,
  },
  modalCarouselImage: {
    width: '100%',
    height: '100%',
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
    zIndex: 10,
  },
  carouselArrow: {
    position: 'absolute',
    top: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
    transform: [{ translateY: -20 }],
  },
  leftArrow: {
    left: 12,
  },
  rightArrow: {
    right: 12,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 12,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    zIndex: 5,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  activeDot: {
    backgroundColor: '#ffffff',
  },
  imageGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: 1,
  },
  areaTag: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 10,
  },
  areaTagText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0891b2',
  },
  cardContent: {
    padding: 20,
  },
  spaName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 8,
  },
  spaDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 16,
  },
  addressContainer: {
    marginBottom: 16,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  addressIcon: {
    marginRight: 4,
    marginTop: 2,
    flexShrink: 0,
  },
  addressText: {
    fontSize: 12,
    color: '#64748b',
    flex: 1,
  },
  mapItButton: {
    alignSelf: 'center',
    marginTop: 4,
  },
  mapItText: {
    fontSize: 12,
    color: '#0891b2',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  button: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsButton: {
    backgroundColor: '#075985',
  },
  detailsButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ffffff',
  },
  websiteButton: {
    backgroundColor: '#f1f5f9',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  websiteButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#475569',
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  modalHeader: {
    height: 256,
  },
  modalHeaderImageContainer: {
    height: 256,
    position: 'relative',
  },
  modalHeaderImage: {
    height: 256,
    justifyContent: 'flex-end',
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
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
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
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    borderRadius: 20,
    padding: 6,
  },
  modalHeaderContent: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    zIndex: 2,
  },
  modalAreaText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 4,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 8,
  },
  modalHeaderActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  mapItLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  mapItLinkText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  headerSeparator: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  websiteLinkText: {
    fontSize: 12,
    color: '#67e8f9',
    textDecorationLine: 'underline',
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
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
  tabDescription: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 20,
    marginBottom: 24,
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
  treatmentItem: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    borderRadius: 8,
    marginBottom: 16,
  },
  treatmentName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0891b2',
    marginBottom: 8,
  },
  treatmentDescription: {
    fontSize: 12,
    color: '#64748b',
  },
  photosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  photoItem: {
    width: (width - 48) / 2,
    aspectRatio: 16 / 9,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  photoImage: {
    flex: 1,
  },
  photoImageStyle: {
    borderRadius: 8,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    gap: 12,
  },
  footerAddress: {
    fontSize: 12,
    color: '#64748b',
    flex: 1,
  },
  officialWebsiteButton: {
    backgroundColor: '#0d9488',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  officialWebsiteButtonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default SpaScreen; 