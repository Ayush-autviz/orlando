import React, { useState, useRef } from 'react';
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
  Coffee, 
  Utensils, 
  Music, 
  ShoppingBag, 
  Camera, 
  Trees, 
  Glasses, 
  Building2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Share2,
  Clock,
  Phone
} from 'lucide-react-native';
import Header from '../components/Header';

// Import neighborhood data
import { NEIGHBORHOODS } from '../data/neighbourhood';

const { width } = Dimensions.get('window');

interface NeighborhoodsScreenProps {
  navigation: any;
}

const NeighborhoodsScreen: React.FC<NeighborhoodsScreenProps> = ({ navigation }) => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>("about");
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: string]: number}>({});

  const handleWebsitePress = (url: string) => {
    navigation.navigate('WebViewScreen', { 
      url, 
      title: 'Neighborhood Website' 
    });
    setSelectedNeighborhood(null)
  };

  const handleMapPress = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    Linking.openURL(url);
  };

  const handleNeighborhoodClick = (neighborhood: any) => {
    setSelectedNeighborhood(neighborhood);
    setActiveTab("about");
  };

  const handleShare = async (neighborhood: any) => {
    const shareUrl = `https://awesomeorlando.com/neighborhoods/${neighborhood.id}`;
    const shareTitle = `Explore ${neighborhood.name} in Orlando`;
    const shareMessage = `Discover ${neighborhood.name} in Orlando - ${neighborhood.tagline}. ${shareUrl}`;
    
    try {
      await Share.share({
        message: shareMessage,
        url: shareUrl,
        title: shareTitle,
      });
    } catch (error) {
      console.error('Error sharing neighborhood:', error);
    }
  };

  // Image Carousel component - copied exactly from SpaScreen
  const renderImageCarousel = (images: any[], height: number = 240, isModal: boolean = false, itemId?: string) => {
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

  // Icons for attraction types
  const AttractionIcon = ({ type }: { type: string }) => {
    switch (type) {
      case "dining":
        return <Utensils size={16} color="#ea580c" />;
      case "shopping":
        return <ShoppingBag size={16} color="#0891b2" />;
      case "culture":
        return <Camera size={16} color="#7c3aed" />;
      case "outdoors":
        return <Trees size={16} color="#059669" />;
      case "nightlife":
        return <Glasses size={16} color="#dc2626" />;
      case "landmark":
        return <Building2 size={16} color="#d97706" />;
      case "sports":
        return <Coffee size={16} color="#dc2626" />;
      case "entertainment":
        return <Music size={16} color="#3b82f6" />;
      case "foodDirectory":
        return <Coffee size={16} color="#ea580c" />;
      case "nightlifeDirectory":
        return <Glasses size={16} color="#dc2626" />;
      default:
        return <MapPin size={16} color="#64748b" />;
    }
  };

  const renderNeighborhoodCard = (neighborhood: any) => (
    <TouchableOpacity 
      key={neighborhood.id} 
      style={styles.card}
      onPress={() => handleNeighborhoodClick(neighborhood)}
      activeOpacity={0.8}
    >
      <View style={styles.cardImageContainer}>
        {renderImageCarousel(neighborhood.images, 240, false, neighborhood.id)}
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.imageGradient}
        />
        
        {/* Share Button */}
        <TouchableOpacity
          style={styles.shareButton}
          onPress={(e) => {
            e.stopPropagation();
            handleShare(neighborhood);
          }}
        >
          <Share2 size={16} color="#374151" />
        </TouchableOpacity>
        
        {/* Bottom Content */}
        <View style={styles.cardBottomContent}>
          <Text style={styles.neighborhoodName}>{neighborhood.name}</Text>
          <Text style={styles.neighborhoodTagline}>{neighborhood.tagline}</Text>
        </View>
      </View>
      
      <View style={styles.cardContent}>
        <View style={styles.tagsContainer}>
          {neighborhood.tags.map((tag: string, index: number) => (
            <View key={index} style={styles.tagBadge}>
              <Text style={styles.tagBadgeText}>{tag}</Text>
            </View>
          ))}
        </View>
        
        <Text style={styles.neighborhoodDescription}>
          {neighborhood.description}
        </Text>
        
        <View style={styles.knownForContainer}>
          <Text style={styles.knownForLabel}>KNOWN FOR:</Text>
          {neighborhood.knownFor.map((item: string, index: number) => (
            <View key={index} style={styles.knownForItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.knownForText}>{item}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.cardActions}>
          <TouchableOpacity 
            style={styles.mapItButton}
            onPress={(e) => {
              e.stopPropagation();
              handleMapPress(neighborhood.name + ' Orlando FL');
            }}
          >
            <MapPin size={12} color="#3b82f6" />
            <Text style={styles.mapItText}>Map It</Text>
          </TouchableOpacity>
          
          {neighborhood.website && (
            <TouchableOpacity 
              style={styles.websiteButton}
              onPress={(e) => {
                e.stopPropagation();
                handleWebsitePress(neighborhood.website);
              }}
            >
              <ExternalLink size={16} color="#ffffff" />
              <Text style={styles.websiteButtonText}>Official Website</Text>
            </TouchableOpacity>
          )}
          
          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => handleNeighborhoodClick(neighborhood)}
          >
            <Text style={styles.exploreButtonText}>Explore {neighborhood.name}</Text>
          </TouchableOpacity>
        </View>
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
    if (!selectedNeighborhood) return null;

    switch (activeTab) {
      case 'about':
        return (
          <View style={styles.tabContent}>
            <View style={styles.aboutSection}>
              <Text style={styles.aboutTitle}>Overview</Text>
              <Text style={styles.aboutDescription}>
                {selectedNeighborhood.longDescription}
              </Text>
            </View>
            
            {selectedNeighborhood.website && (
              <View style={styles.websiteSection}>
                <Text style={styles.websiteTitle}>Official Website</Text>
                <TouchableOpacity
                  style={styles.websiteLinkButton}
                  onPress={() => handleWebsitePress(selectedNeighborhood.website)}
                >
                  <ExternalLink size={16} color="#0891b2" />
                  <Text style={styles.websiteLinkText}>
                    {selectedNeighborhood.website.replace(/^https?:\/\//, '')}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            
            <View style={styles.knownForModalSection}>
              <Text style={styles.knownForModalTitle}>Known For</Text>
              <View style={styles.knownForModalTags}>
                {selectedNeighborhood.knownFor.map((item: string, index: number) => (
                  <View key={index} style={styles.knownForModalTag}>
                    <Text style={styles.knownForModalTagText}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        );
      case 'attractions':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.attractionsTitle}>Top Attractions & Places</Text>
            {selectedNeighborhood.attractions
              .filter((attraction: any) => attraction.type !== "foodDirectory" && attraction.type !== "nightlifeDirectory")
              .map((attraction: any, index: number) => (
                <View key={index} style={styles.attractionItem}>
                  <View style={styles.attractionHeader}>
                    <View style={styles.attractionTitleRow}>
                      <AttractionIcon type={attraction.type} />
                      <Text numberOfLines={1} style={styles.attractionName}>{attraction.name}</Text>
                    </View>
                    <View style={styles.attractionActions}>
                      {attraction.link && (
                        <TouchableOpacity
                          style={styles.attractionVisitButton}
                          onPress={() => handleWebsitePress(attraction.link)}
                        >
                          <ExternalLink size={12} color="#7c3aed" />
                          <Text style={styles.attractionVisitText}>Visit</Text>
                        </TouchableOpacity>
                      )}
                      <TouchableOpacity
                        style={styles.attractionMapButton}
                        onPress={() => handleMapPress(attraction.name + ' ' + selectedNeighborhood.name + ' Orlando FL')}
                      >
                        <MapPin size={12} color="#ffffff" />
                        <Text style={styles.attractionMapText}>Map It</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={styles.attractionDescription}>
                    {attraction.description}
                  </Text>
                </View>
              ))}
          </View>
        );
      case 'foodDirectory':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.directoryTitle}>
              {selectedNeighborhood.id === "restaurant-row" ? "Restaurant Row Complete Directory" : "Mills 50 Food Directory"}
            </Text>
            {selectedNeighborhood.attractions
              .filter((attraction: any) => attraction.type === "foodDirectory")
              .map((foodDirectory: any, idx: number) => (
                <View key={idx}>
                  {/* Classic Section */}
                  {foodDirectory.content?.classic && foodDirectory.content.classic.length > 0 && (
                    <View style={styles.directorySection}>
                      <Text style={[styles.directorySectionTitle, { color: '#ea580c' }]}>
                        {selectedNeighborhood.id === "restaurant-row" ? "Classic Steakhouses & Fine Dining" : "Classic Mills 50"}
                      </Text>
                      {foodDirectory.content.classic.map((item: any, i: number) => (
                        <View key={i} style={styles.directoryItem}>
                          <Text style={styles.directoryItemName}>{item.name}</Text>
                          <Text style={styles.directoryItemDescription}>{item.description}</Text>
                          {item.address && <Text style={styles.directoryItemAddress}>Address: {item.address}</Text>}
                          {item.phone && <Text style={styles.directoryItemAddress}>Phone: {item.phone}</Text>}
                          <View style={styles.directoryItemActions}>
                            {item.website && (
                              <TouchableOpacity
                                style={styles.directoryWebsiteButton}
                                onPress={() => handleWebsitePress(item.website)}
                              >
                                <Text style={styles.directoryWebsiteText}>Visit Website</Text>
                              </TouchableOpacity>
                            )}
                            {item.address && (
                              <TouchableOpacity
                                style={[styles.directoryMapButton, { backgroundColor: '#ea580c' }]}
                                onPress={() => handleMapPress(item.address)}
                              >
                                <Text style={styles.directoryMapText}>Map It</Text>
                              </TouchableOpacity>
                            )}
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
                  
                  {/* New Kids Section */}
                  {foodDirectory.content?.newKids && foodDirectory.content.newKids.length > 0 && (
                    <View style={styles.directorySection}>
                      <Text style={[styles.directorySectionTitle, { color: '#0891b2' }]}>
                        {selectedNeighborhood.id === "restaurant-row" ? "Trendy & Contemporary" : "New Kids on the Block"}
                      </Text>
                      {foodDirectory.content.newKids.map((item: any, i: number) => (
                        <View key={i} style={styles.directoryItem}>
                          <Text style={styles.directoryItemName}>{item.name}</Text>
                          <Text style={styles.directoryItemDescription}>{item.description}</Text>
                          {item.address && <Text style={styles.directoryItemAddress}>Address: {item.address}</Text>}
                          {item.phone && <Text style={styles.directoryItemAddress}>Phone: {item.phone}</Text>}
                          <View style={styles.directoryItemActions}>
                            {item.website && (
                              <TouchableOpacity
                                style={styles.directoryWebsiteButton}
                                onPress={() => handleWebsitePress(item.website)}
                              >
                                <Text style={styles.directoryWebsiteText}>Visit Website</Text>
                              </TouchableOpacity>
                            )}
                            {item.address && (
                              <TouchableOpacity
                                style={[styles.directoryMapButton, { backgroundColor: '#0891b2' }]}
                                onPress={() => handleMapPress(item.address)}
                              >
                                <Text style={styles.directoryMapText}>Map It</Text>
                              </TouchableOpacity>
                            )}
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
                  
                  {/* Markets Section (Mills 50 only) */}
                  {foodDirectory.content?.markets && foodDirectory.content.markets.length > 0 && (
                    <View style={styles.directorySection}>
                      <Text style={[styles.directorySectionTitle, { color: '#3b82f6' }]}>Markets</Text>
                      {foodDirectory.content.markets.map((item: any, i: number) => (
                        <View key={i} style={styles.directoryItem}>
                          <Text style={styles.directoryItemName}>{item.name}</Text>
                          <Text style={styles.directoryItemDescription}>{item.description}</Text>
                          {item.address && <Text style={styles.directoryItemAddress}>Address: {item.address}</Text>}
                          {item.phone && <Text style={styles.directoryItemAddress}>Phone: {item.phone}</Text>}
                          <View style={styles.directoryItemActions}>
                            {item.website && (
                              <TouchableOpacity
                                style={styles.directoryWebsiteButton}
                                onPress={() => handleWebsitePress(item.website)}
                              >
                                <Text style={styles.directoryWebsiteText}>Visit Website</Text>
                              </TouchableOpacity>
                            )}
                            {item.address && (
                              <TouchableOpacity
                                style={[styles.directoryMapButton, { backgroundColor: '#3b82f6' }]}
                                onPress={() => handleMapPress(item.address)}
                              >
                                <Text style={styles.directoryMapText}>Map It</Text>
                              </TouchableOpacity>
                            )}
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
                  
                  {/* Coffee Shops Section (Mills 50 only) */}
                  {foodDirectory.content?.coffeeShops && foodDirectory.content.coffeeShops.length > 0 && (
                    <View style={styles.directorySection}>
                      <Text style={[styles.directorySectionTitle, { color: '#d97706' }]}>Coffee Shops</Text>
                      {foodDirectory.content.coffeeShops.map((item: any, i: number) => (
                        <View key={i} style={styles.directoryItem}>
                          <Text style={styles.directoryItemName}>{item.name}</Text>
                          <Text style={styles.directoryItemDescription}>{item.description}</Text>
                          {item.address && <Text style={styles.directoryItemAddress}>Address: {item.address}</Text>}
                          {item.phone && <Text style={styles.directoryItemAddress}>Phone: {item.phone}</Text>}
                          <View style={styles.directoryItemActions}>
                            {item.website && (
                              <TouchableOpacity
                                style={styles.directoryWebsiteButton}
                                onPress={() => handleWebsitePress(item.website)}
                              >
                                <Text style={styles.directoryWebsiteText}>Visit Website</Text>
                              </TouchableOpacity>
                            )}
                            {item.address && (
                              <TouchableOpacity
                                style={[styles.directoryMapButton, { backgroundColor: '#d97706' }]}
                                onPress={() => handleMapPress(item.address)}
                              >
                                <Text style={styles.directoryMapText}>Map It</Text>
                              </TouchableOpacity>
                            )}
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
                  
                  {/* International Section (Restaurant Row only) */}
                  {foodDirectory.content?.international && foodDirectory.content.international.length > 0 && (
                    <View style={styles.directorySection}>
                      <Text style={[styles.directorySectionTitle, { color: '#3b82f6' }]}>International Cuisine</Text>
                      {foodDirectory.content.international.map((item: any, i: number) => (
                        <View key={i} style={styles.directoryItem}>
                          <Text style={styles.directoryItemName}>{item.name}</Text>
                          <Text style={styles.directoryItemDescription}>{item.description}</Text>
                          {item.address && <Text style={styles.directoryItemAddress}>Address: {item.address}</Text>}
                          {item.phone && <Text style={styles.directoryItemAddress}>Phone: {item.phone}</Text>}
                          <View style={styles.directoryItemActions}>
                            {item.website && (
                              <TouchableOpacity
                                style={styles.directoryWebsiteButton}
                                onPress={() => handleWebsitePress(item.website)}
                              >
                                <Text style={styles.directoryWebsiteText}>Visit Website</Text>
                              </TouchableOpacity>
                            )}
                            {item.address && (
                              <TouchableOpacity
                                style={[styles.directoryMapButton, { backgroundColor: '#3b82f6' }]}
                                onPress={() => handleMapPress(item.address)}
                              >
                                <Text style={styles.directoryMapText}>Map It</Text>
                              </TouchableOpacity>
                            )}
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
                  
                  {/* Casual Section (Restaurant Row only) */}
                  {foodDirectory.content?.casual && foodDirectory.content.casual.length > 0 && (
                    <View style={styles.directorySection}>
                      <Text style={[styles.directorySectionTitle, { color: '#d97706' }]}>Casual Dining</Text>
                      {foodDirectory.content.casual.map((item: any, i: number) => (
                        <View key={i} style={styles.directoryItem}>
                          <Text style={styles.directoryItemName}>{item.name}</Text>
                          <Text style={styles.directoryItemDescription}>{item.description}</Text>
                          {item.address && <Text style={styles.directoryItemAddress}>Address: {item.address}</Text>}
                          {item.phone && <Text style={styles.directoryItemAddress}>Phone: {item.phone}</Text>}
                          <View style={styles.directoryItemActions}>
                            {item.website && (
                              <TouchableOpacity
                                style={styles.directoryWebsiteButton}
                                onPress={() => handleWebsitePress(item.website)}
                              >
                                <Text style={styles.directoryWebsiteText}>Visit Website</Text>
                              </TouchableOpacity>
                            )}
                            {item.address && (
                              <TouchableOpacity
                                style={[styles.directoryMapButton, { backgroundColor: '#d97706' }]}
                                onPress={() => handleMapPress(item.address)}
                              >
                                <Text style={styles.directoryMapText}>Map It</Text>
                              </TouchableOpacity>
                            )}
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              ))}
          </View>
        );
      case 'nightlifeDirectory':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.directoryTitle}>Downtown Orlando Nightlife Directory</Text>
            {selectedNeighborhood.attractions
              .filter((attraction: any) => attraction.type === "nightlifeDirectory")
              .map((nightlifeDirectory: any, idx: number) => (
                <View key={idx}>
                  {/* Bars Section */}
                  {nightlifeDirectory.content?.bars && nightlifeDirectory.content.bars.length > 0 && (
                    <View style={styles.directorySection}>
                      <Text style={[styles.directorySectionTitle, { color: '#7c3aed' }]}>Bars & Lounges</Text>
                      {nightlifeDirectory.content.bars.map((item: any, i: number) => (
                        <View key={i} style={styles.directoryItem}>
                          <Text style={styles.directoryItemName}>{item.name}</Text>
                          <Text style={styles.directoryItemDescription}>{item.description}</Text>
                          {item.address && <Text style={styles.directoryItemAddress}>Address: {item.address}</Text>}
                          {item.phone && <Text style={styles.directoryItemAddress}>Phone: {item.phone}</Text>}
                          <View style={styles.directoryItemActions}>
                            {item.website && (
                              <TouchableOpacity
                                style={styles.directoryWebsiteButton}
                                onPress={() => handleWebsitePress(item.website)}
                              >
                                <Text style={styles.directoryWebsiteText}>Visit Website</Text>
                              </TouchableOpacity>
                            )}
                            {item.address && (
                              <TouchableOpacity
                                style={[styles.directoryMapButton, { backgroundColor: '#7c3aed' }]}
                                onPress={() => handleMapPress(item.address)}
                              >
                                <Text style={styles.directoryMapText}>Map It</Text>
                              </TouchableOpacity>
                            )}
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
                  
                  {/* Clubs Section */}
                  {nightlifeDirectory.content?.clubs && nightlifeDirectory.content.clubs.length > 0 && (
                    <View style={styles.directorySection}>
                      <Text style={[styles.directorySectionTitle, { color: '#ec4899' }]}>Nightclubs</Text>
                      {nightlifeDirectory.content.clubs.map((item: any, i: number) => (
                        <View key={i} style={styles.directoryItem}>
                          <Text style={styles.directoryItemName}>{item.name}</Text>
                          <Text style={styles.directoryItemDescription}>{item.description}</Text>
                          {item.address && <Text style={styles.directoryItemAddress}>Address: {item.address}</Text>}
                          {item.phone && <Text style={styles.directoryItemAddress}>Phone: {item.phone}</Text>}
                          <View style={styles.directoryItemActions}>
                            {item.website && (
                              <TouchableOpacity
                                style={styles.directoryWebsiteButton}
                                onPress={() => handleWebsitePress(item.website)}
                              >
                                <Text style={styles.directoryWebsiteText}>Visit Website</Text>
                              </TouchableOpacity>
                            )}
                            {item.address && (
                              <TouchableOpacity
                                style={[styles.directoryMapButton, { backgroundColor: '#ec4899' }]}
                                onPress={() => handleMapPress(item.address)}
                              >
                                <Text style={styles.directoryMapText}>Map It</Text>
                              </TouchableOpacity>
                            )}
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
                  
                  {/* Entertainment Section */}
                  {nightlifeDirectory.content?.entertainment && nightlifeDirectory.content.entertainment.length > 0 && (
                    <View style={styles.directorySection}>
                      <Text style={[styles.directorySectionTitle, { color: '#6366f1' }]}>Entertainment Venues</Text>
                      {nightlifeDirectory.content.entertainment.map((item: any, i: number) => (
                        <View key={i} style={styles.directoryItem}>
                          <Text style={styles.directoryItemName}>{item.name}</Text>
                          <Text style={styles.directoryItemDescription}>{item.description}</Text>
                          {item.address && <Text style={styles.directoryItemAddress}>Address: {item.address}</Text>}
                          {item.phone && <Text style={styles.directoryItemAddress}>Phone: {item.phone}</Text>}
                          <View style={styles.directoryItemActions}>
                            {item.website && (
                              <TouchableOpacity
                                style={styles.directoryWebsiteButton}
                                onPress={() => handleWebsitePress(item.website)}
                              >
                                <Text style={styles.directoryWebsiteText}>Visit Website</Text>
                              </TouchableOpacity>
                            )}
                            {item.address && (
                              <TouchableOpacity
                                style={[styles.directoryMapButton, { backgroundColor: '#6366f1' }]}
                                onPress={() => handleMapPress(item.address)}
                              >
                                <Text style={styles.directoryMapText}>Map It</Text>
                              </TouchableOpacity>
                            )}
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
                  
                  {/* Breweries Section */}
                  {nightlifeDirectory.content?.breweries && nightlifeDirectory.content.breweries.length > 0 && (
                    <View style={styles.directorySection}>
                      <Text style={[styles.directorySectionTitle, { color: '#d97706' }]}>Local Breweries</Text>
                      {nightlifeDirectory.content.breweries.map((item: any, i: number) => (
                        <View key={i} style={styles.directoryItem}>
                          <Text style={styles.directoryItemName}>{item.name}</Text>
                          <Text style={styles.directoryItemDescription}>{item.description}</Text>
                          {item.address && <Text style={styles.directoryItemAddress}>Address: {item.address}</Text>}
                          {item.phone && <Text style={styles.directoryItemAddress}>Phone: {item.phone}</Text>}
                          <View style={styles.directoryItemActions}>
                            {item.website && (
                              <TouchableOpacity
                                style={styles.directoryWebsiteButton}
                                onPress={() => handleWebsitePress(item.website)}
                              >
                                <Text style={styles.directoryWebsiteText}>Visit Website</Text>
                              </TouchableOpacity>
                            )}
                            {item.address && (
                              <TouchableOpacity
                                style={[styles.directoryMapButton, { backgroundColor: '#d97706' }]}
                                onPress={() => handleMapPress(item.address)}
                              >
                                <Text style={styles.directoryMapText}>Map It</Text>
                              </TouchableOpacity>
                            )}
                          </View>
                        </View>
                      ))}
                    </View>
                  )}
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
      <Header showDrawerButton={true} title="Orlando Neighborhoods" />
      
      {/* Hero Section */}


      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

      <View style={styles.hero}>
        <View style={styles.heroContent}>
          <View style={styles.heroHeader}>
            <View style={styles.blueAccent} />
            <Text style={styles.heroSubtitle}>BEYOND THE PARKS</Text>
          </View>
          
          <Text style={styles.heroTitle}>
            Discover Orlando's Neighborhoods
          </Text>
          
          <Text style={styles.heroDescription}>
            Explore authentic Orlando where locals live, dine, and play
          </Text>
        </View>
        
        <View style={styles.heroTags}>
          <View style={styles.tagItem}>
            <View style={styles.tagDot} />
            <Text style={styles.tagText}>Culture</Text>
          </View>
          <View style={styles.tagItem}>
            <View style={styles.tagDot} />
            <Text style={styles.tagText}>Dining</Text>
          </View>
          <View style={styles.tagItem}>
            <View style={styles.tagDot} />
            <Text style={styles.tagText}>Local Life</Text>
          </View>
        </View>
      </View>
        {/* Introduction */}
        <View style={styles.introSection}>
          <Text style={styles.introTitle}>Explore Like a Local</Text>
          <Text style={styles.introSubtitle}>
            Orlando is more than just theme parks. The city boasts diverse neighborhoods each with unique character, 
            from historic Winter Park's brick streets to Mills 50's vibrant cultural scene. Discover these authentic 
            communities where locals actually live, dine, shop, and enjoy the real Florida.
          </Text>
        </View>

        {/* Neighborhoods Grid */}
        <View style={styles.neighborhoodsGrid}>
          {NEIGHBORHOODS.map((neighborhood) => renderNeighborhoodCard(neighborhood))}
        </View>

        {/* Why Explore Section */}
        <View style={styles.whyExploreSection}>
          <Text style={styles.whyExploreTitle}>Why Explore Beyond the Parks?</Text>
          <View style={styles.reasonsGrid}>
            <View style={styles.reasonCard}>
              <Coffee size={20} color="#ea580c" />
              <Text style={styles.reasonTitle}>Authentic Experiences</Text>
              <Text style={styles.reasonDescription}>
                Discover where locals actually eat, shop and gather. Experience the real Orlando culture and lifestyle beyond the tourist attractions.
              </Text>
            </View>
            <View style={styles.reasonCard}>
              <Utensils size={20} color="#ea580c" />
              <Text style={styles.reasonTitle}>Local Cuisine</Text>
              <Text style={styles.reasonDescription}>
                Sample chef-driven restaurants, ethnic eateries, and neighborhood cafes that showcase Florida's diverse culinary landscape.
              </Text>
            </View>
            <View style={styles.reasonCard}>
              <Music size={20} color="#ea580c" />
              <Text style={styles.reasonTitle}>Arts & Culture</Text>
              <Text style={styles.reasonDescription}>
                Explore museums, galleries, music venues, and theaters that highlight Orlando's growing cultural scene and creative communities.
              </Text>
            </View>
            <View style={styles.reasonCard}>
              <ShoppingBag size={20} color="#ea580c" />
              <Text style={styles.reasonTitle}>Distinctive Shopping</Text>
              <Text style={styles.reasonDescription}>
                Browse independent boutiques, vintage shops, and local markets for unique souvenirs and gifts you won't find at theme parks.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Neighborhood Detail Modal */}
      <Modal
        visible={!!selectedNeighborhood}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setSelectedNeighborhood(null)}
      >
        {selectedNeighborhood && (
          <SafeAreaView style={styles.modalContainer}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              {renderImageCarousel(selectedNeighborhood.images, 320, true, selectedNeighborhood.id)}
              <LinearGradient
                colors={['rgba(30, 41, 59, 0.5)', 'rgba(30, 41, 59, 0.9)']}
                style={styles.modalHeaderGradient}
              />
              
              {/* Top Controls */}
              <View style={styles.modalTopControls}>
                <TouchableOpacity
                  style={styles.modalShareButton}
                  onPress={() => handleShare(selectedNeighborhood)}
                >
                  <Share2 size={16} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={() => setSelectedNeighborhood(null)}
                >
                  <X size={18} color="#ffffff" />
                </TouchableOpacity>
              </View>
              
              {/* Bottom Content */}
              <View style={styles.modalHeaderContent}>
                <Text style={styles.modalTitle}>{selectedNeighborhood.name}</Text>
                <View style={styles.modalAddressRow}>
                  <MapPin size={16} color="rgba(255, 255, 255, 0.9)" />
                  <Text style={styles.modalAddress}>
                    {selectedNeighborhood.mapLocation}
                  </Text>
                  {selectedNeighborhood.website && (
                    <>
                      <Text style={styles.modalAddressSeparator}> • </Text>
                      <TouchableOpacity onPress={() => handleWebsitePress(selectedNeighborhood.website)}>
                        <View style={styles.modalWebsiteLink}>
                          <ExternalLink size={16} color="rgba(255, 255, 255, 0.9)" />
                          <Text style={styles.modalWebsiteText}>Official Website</Text>
                        </View>
                      </TouchableOpacity>
                    </>
                  )}
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
                    {renderModalTab('attractions', 'Attractions')}
                    {selectedNeighborhood.attractions.some((a: any) => a.type === "foodDirectory") && 
                      renderModalTab('foodDirectory', selectedNeighborhood.id === "restaurant-row" ? "Full Restaurant List" : "Full Foodie List")}
                    {selectedNeighborhood.attractions.some((a: any) => a.type === "nightlifeDirectory") && 
                      renderModalTab('nightlifeDirectory', "Full Nightlife List")}
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
    backgroundColor: '#1f2937',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  heroContent: {
    marginBottom: 16,
  },
  heroHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  blueAccent: {
    width: 12,
    height: 12,
    backgroundColor: '#3b82f6',
    borderRadius: 2,
    marginRight: 8,
  },
  heroSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9ca3af',
    letterSpacing: 1,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    lineHeight: 32,
  },
  heroDescription: {
    fontSize: 14,
    color: '#d1d5db',
    paddingRight: 16,
  },
  heroTags: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
  },
  tagItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  tagDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  tagText: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: '500',
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
    maxWidth: 400,
  },
  neighborhoodsGrid: {
    paddingHorizontal: 16,
    gap: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    marginBottom: 16,
  },
  cardImageContainer: {
    position: 'relative',
  },
  imageGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    zIndex: 2,
  },
  shareButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  cardBottomContent: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    zIndex: 3,
  },
  neighborhoodName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  neighborhoodTagline: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  cardContent: {
    padding: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 16,
  },
  tagBadge: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  tagBadgeText: {
    fontSize: 12,
    color: '#475569',
  },
  neighborhoodDescription: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
    marginBottom: 16,
  },
  knownForContainer: {
    marginBottom: 16,
  },
  knownForLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  knownForItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#ea580c',
    marginRight: 8,
    marginTop: 1,
  },
  knownForText: {
    fontSize: 12,
    color: '#64748b',
    flex: 1,
  },
  cardActions: {
    gap: 8,
  },
  mapItButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 4,
  },
  mapItText: {
    fontSize: 14,
    color: '#3b82f6',
    fontWeight: '600',
  },
  websiteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#0891b2',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  websiteButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  exploreButton: {
    backgroundColor: '#ea580c',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
  },
  exploreButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  whyExploreSection: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#f8fafc',
    marginTop: 32,
  },
  whyExploreTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 24,
  },
  reasonsGrid: {
    gap: 16,
  },
  reasonCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  reasonTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginTop: 8,
    marginBottom: 8,
  },
  reasonDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  // Carousel Styles
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
    bottom: 16,
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
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  modalHeader: {
    height: 320,
    position: 'relative',
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 8,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 8,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeaderContent: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
    zIndex: 2,
  },
  modalTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  modalAddressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  modalAddress: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
    marginLeft: 4,
  },
  modalAddressSeparator: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  modalWebsiteLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  modalWebsiteText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  tabsContainer: {
    marginVertical: 20,
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
  // About Tab Styles
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
  websiteSection: {
    marginBottom: 24,
  },
  websiteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  websiteLinkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  websiteLinkText: {
    fontSize: 16,
    color: '#0891b2',
    fontWeight: '600',
  },
  knownForModalSection: {
    marginBottom: 24,
  },
  knownForModalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  knownForModalTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  knownForModalTag: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  knownForModalTagText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  // Attractions Tab Styles
  attractionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  attractionItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    paddingBottom: 16,
    marginBottom: 16,
  },
  attractionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  attractionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 8,
  },
  attractionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    flex: 1,
  },
  attractionActions: {
    marginLeft: 10,
    flexDirection: 'row',
    gap: 8,
  },
  attractionVisitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#7c3aed',
    borderRadius: 4,
  },
  attractionVisitText: {
    fontSize: 12,
    color: '#7c3aed',
    fontWeight: '600',
  },
  attractionMapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#ea580c',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  attractionMapText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
  },
  attractionDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  // Directory Styles
  directoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 24,
  },
  directorySection: {
    marginBottom: 24,
  },
  directorySectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  directoryItem: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    marginBottom: 8,
  },
  directoryItemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  directoryItemDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  directoryItemAddress: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 2,
  },
  directoryItemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  directoryWebsiteButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  directoryWebsiteText: {
    fontSize: 12,
    color: '#3b82f6',
  },
  directoryMapButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  directoryMapText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default NeighborhoodsScreen; 