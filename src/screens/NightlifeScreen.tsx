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

  const handleWebsitePress = (url: string) => {
    setSelectedLocation(null)
    navigation.navigate('WebView' as never, { 
      url, 
      title: 'Nightlife Website' 
    } as never);
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
          {location.features.map((feature: string, index: number) => (
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



  const renderTabContent = () => {
    if (!selectedLocation) return null;

    return (
      <View style={styles.modalContentGrid}>
        {/* Left Column - Main Content */}
        <View style={styles.leftColumn}>
          {/* About Section */}
          <View style={styles.aboutSection}>
            <Text style={styles.aboutTitle}>About This Spot</Text>
            <Text style={styles.aboutDescription}>
              {selectedLocation.longDescription || selectedLocation.description}
            </Text>
          </View>
          
          {/* Must Try Section */}
          {selectedLocation.mustTry && selectedLocation.mustTry.length > 0 && (
            <View style={styles.mustTrySection}>
              <View style={styles.sectionHeader}>
                <ThumbsUp size={20} color="#92400e" />
                <Text style={styles.sectionTitle}>Must Try</Text>
              </View>
              <View style={styles.mustTryList}>
                {selectedLocation.mustTry.map((item: string, index: number) => (
                  <View key={index} style={styles.mustTryItem}>
                    <View style={styles.mustTryNumber}>
                      <Text style={styles.mustTryNumberText}>{index + 1}</Text>
                    </View>
                    <Text style={styles.mustTryText}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
          
          {/* Insider Tips Section */}
          {selectedLocation.insiderTips && selectedLocation.insiderTips.length > 0 && (
            <View style={styles.tipsSection}>
              <View style={styles.sectionHeader}>
                <Info size={20} color="#1e40af" />
                <Text style={styles.sectionTitle}>Insider Tips</Text>
              </View>
              <View style={styles.tipsList}>
                {selectedLocation.insiderTips.map((tip: string, index: number) => (
                  <View key={index} style={styles.tipItem}>
                    <CornerDownRight size={16} color="#3b82f6" />
                    <Text style={styles.tipText}>{tip}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
        
        {/* Right Column - Sidebar */}
        <View style={styles.rightColumn}>
          {/* What To Expect Section */}
          <View style={styles.expectSection}>
            <Text style={styles.expectTitle}>What To Expect</Text>
            <View style={styles.featuresContainer}>
              {selectedLocation.features.map((feature: string, index: number) => (
                <View key={index} style={styles.modalFeatureBadge}>
                  <Text style={styles.modalFeatureBadgeText}>{feature}</Text>
                </View>
              ))}
            </View>
            
            <View style={styles.hoursContainer}>
              <Clock size={16} color="#ea580c" />
              <View style={styles.hoursInfo}>
                <Text style={styles.hoursLabel}>Hours</Text>
                <View style={styles.hoursList}>
                  {selectedLocation.hours.split(',').map((time: string, index: number) => (
                    <Text key={index} style={styles.hoursText}>{time.trim()}</Text>
                  ))}
                </View>
              </View>
            </View>
          </View>
          
          {/* Special Events Section */}
          {selectedLocation.specialEvents && selectedLocation.specialEvents.length > 0 && (
            <View style={styles.eventsSection}>
              <View style={styles.sectionHeader}>
                <Calendar size={16} color="#7c3aed" />
                <Text style={styles.sectionTitle}>Upcoming Events</Text>
              </View>
              <View style={styles.eventsList}>
                {selectedLocation.specialEvents.map((event: string, index: number) => (
                  <View key={index} style={styles.eventItem}>
                    <View style={styles.eventIcon}>
                      <Music size={12}  color="#7c3aed" />
                    </View>
                    <Text style={styles.eventText}>{event}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
          
          {/* Nearby Attractions Section */}
          {selectedLocation.nearbyAttractions && selectedLocation.nearbyAttractions.length > 0 && (
            <View style={styles.nearbySection}>
              <View style={styles.sectionHeader}>
                <Compass size={16} color="#0f766e" />
                <Text style={styles.sectionTitle}>Nearby Spots</Text>
              </View>
              <View style={styles.nearbyList}>
                {selectedLocation.nearbyAttractions.map((attraction: string, index: number) => (
                  <View key={index} style={styles.nearbyItem}>
                    <View style={styles.nearbyIcon}>
                      <MapPin size={12} color="#0f766e" />
                    </View>
                    <Text style={styles.nearbyText}>{attraction}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </View>
    );
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

        {/* Comprehensive Directory Section */}
        <View style={styles.directorySection}>
          <Text style={styles.directoryTitle}>Complete Orlando Nightlife Directory</Text>
          
          {/* Speakeasies List */}
          <View style={styles.categorySection}>
            <View style={styles.categoryHeader}>
              <GlassWater size={20} color="#6b21a8" />
              <Text style={[styles.categoryTitle, { color: '#6b21a8' }]}>Speakeasies in Orlando</Text>
            </View>
            
            <View style={styles.locationList}>
              <View style={styles.neighborhoodGroup}>
                <Text style={styles.neighborhoodTitle}>Downtown Orlando</Text>
                <View style={styles.locationItem}>
                  <Text style={styles.directoryLocationName}>Mathers Social Gathering</Text>
                  <Text style={styles.directoryLocationAddress}>30 S Magnolia Ave, Downtown Orlando</Text>
                  <Text style={styles.locationDetails}>Boutique spirits, dress code, 5 PM–2 AM</Text>
                  <View style={styles.locationActions}>
                    <TouchableOpacity 
                      style={styles.websiteButton}
                      onPress={() => handleWebsitePress('https://mathersorlando.com')}
                    >
                      <Text style={styles.websiteButtonText}>Visit Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.mapButton}
                      onPress={() => handleMapPress('30 S Magnolia Ave Orlando FL')}
                    >
                      <Text style={styles.mapButtonText}>Map It</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                
                <View style={styles.locationItem}>
                  <Text style={styles.directoryLocationName}>The Courtesy Bar</Text>
                  <Text style={styles.directoryLocationAddress}>114 N Orange Ave, Winter Park</Text>
                  <Text style={styles.locationDetails}>Craft cocktails, 5 PM–2 AM</Text>
                  <View style={styles.locationActions}>
                    <TouchableOpacity 
                      style={styles.websiteButton}
                      onPress={() => handleWebsitePress('https://www.thecourtesybar.com')}
                    >
                      <Text style={styles.websiteButtonText}>Visit Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.mapButton}
                      onPress={() => handleMapPress('114 N Orange Ave Winter Park FL')}
                    >
                      <Text style={styles.mapButtonText}>Map It</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                
                <View style={styles.locationItem}>
                  <Text style={styles.directoryLocationName}>Hanson's Shoe Repair</Text>
                  <Text style={styles.directoryLocationAddress}>27 E Pine St, Downtown Orlando</Text>
                  <Text style={styles.locationDetails}>Password-protected, 8 PM–2 AM</Text>
                  <View style={styles.locationActions}>
                    <TouchableOpacity 
                      style={styles.websiteButton}
                      onPress={() => handleWebsitePress('https://www.facebook.com/hansonsshoerepair')}
                    >
                      <Text style={styles.websiteButtonText}>Visit Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.mapButton}
                      onPress={() => handleMapPress('27 E Pine St Orlando FL')}
                    >
                      <Text style={styles.mapButtonText}>Map It</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                
                <View style={styles.locationItem}>
                  <Text style={styles.directoryLocationName}>The Treehouse</Text>
                  <Text style={styles.directoryLocationAddress}>68 E Pine St, Downtown Orlando</Text>
                  <Text style={styles.locationDetails}>Secret club vibe, 8 PM–2 AM</Text>
                  <View style={styles.locationActions}>
                    <TouchableOpacity 
                      style={styles.mapButton}
                      onPress={() => handleMapPress('68 E Pine St Orlando FL')}
                    >
                      <Text style={styles.mapButtonText}>Map It</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              
              <View style={styles.neighborhoodGroup}>
                <Text style={styles.neighborhoodTitle}>Greater Orlando Area</Text>
                <View style={styles.locationItem}>
                  <Text style={styles.directoryLocationName}>The Imperial Wine & Beer Garden</Text>
                  <Text style={styles.directoryLocationAddress}>1800 N Orange Ave, Ivanhoe Village</Text>
                  <Text style={styles.locationDetails}>Furniture store by day, 5 PM–12 AM</Text>
                  <View style={styles.locationActions}>
                    <TouchableOpacity 
                      style={styles.websiteButton}
                      onPress={() => handleWebsitePress('https://imperialfurniture.com')}
                    >
                      <Text style={styles.websiteButtonText}>Visit Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.mapButton}
                      onPress={() => handleMapPress('1800 N Orange Ave Orlando FL')}
                    >
                      <Text style={styles.mapButtonText}>Map It</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                
                <View style={styles.locationItem}>
                  <Text style={styles.directoryLocationName}>Permanent Vacation</Text>
                  <Text style={styles.directoryLocationAddress}>1111 N Orlando Ave, Maitland</Text>
                  <Text style={styles.locationDetails}>Tiki-themed, hidden in Copper Rocket Pub, 5 PM–2 AM</Text>
                  <View style={styles.locationActions}>
                    <TouchableOpacity 
                      style={styles.websiteButton}
                      onPress={() => handleWebsitePress('https://copperrocketpub.com/permanent-vacation')}
                    >
                      <Text style={styles.websiteButtonText}>Visit Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.mapButton}
                      onPress={() => handleMapPress('1111 N Orlando Ave Maitland FL')}
                    >
                      <Text style={styles.mapButtonText}>Map It</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                
                <View style={styles.locationItem}>
                  <Text style={styles.directoryLocationName}>Lorelai Wine Bar</Text>
                  <Text style={styles.directoryLocationAddress}>113 S Orange Ave, Downtown Orlando</Text>
                  <Text style={styles.locationDetails}>Opening Feb 2025, European wines, 4 PM–12 AM</Text>
                  <View style={styles.locationActions}>
                    <TouchableOpacity 
                      style={styles.mapButton}
                      onPress={() => handleMapPress('113 S Orange Ave Orlando FL')}
                    >
                      <Text style={styles.mapButtonText}>Map It</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              
              <View style={styles.neighborhoodGroup}>
                <Text style={styles.neighborhoodTitle}>Tourist District</Text>
                <View style={styles.locationItem}>
                  <Text style={styles.directoryLocationName}>Enzo's Hideaway Tunnel Bar</Text>
                  <Text style={styles.directoryLocationAddress}>1560 E Buena Vista Dr, Disney Springs</Text>
                  <Text style={styles.locationDetails}>Prohibition-era cocktails, 11:30 AM–11 PM</Text>
                  <View style={styles.locationActions}>
                    <TouchableOpacity 
                      style={styles.websiteButton}
                      onPress={() => handleWebsitePress('https://enzoshideawayfla.com')}
                    >
                      <Text style={styles.websiteButtonText}>Visit Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.mapButton}
                      onPress={() => handleMapPress('1560 E Buena Vista Dr Lake Buena Vista FL')}
                    >
                      <Text style={styles.mapButtonText}>Map It</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                
                <View style={styles.locationItem}>
                  <Text style={styles.directoryLocationName}>Roka Hula</Text>
                  <Text style={styles.directoryLocationAddress}>7624 W Sand Lake Rd, Restaurant Row</Text>
                  <Text style={styles.locationDetails}>Asian tiki bar, hidden in Voodoo Bayou, 5 PM–12 AM</Text>
                  <View style={styles.locationActions}>
                    <TouchableOpacity 
                      style={styles.websiteButton}
                      onPress={() => handleWebsitePress('https://voodoo-bayou.com')}
                    >
                      <Text style={styles.websiteButtonText}>Visit Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.mapButton}
                      onPress={() => handleMapPress('7624 W Sand Lake Rd Orlando FL')}
                    >
                      <Text style={styles.mapButtonText}>Map It</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                
                <View style={styles.locationItem}>
                  <Text style={styles.directoryLocationName}>Epilogue</Text>
                  <Text style={styles.directoryLocationAddress}>10100 Dream Tree Blvd, Four Seasons Resort</Text>
                  <Text style={styles.locationDetails}>Library-themed, adults-only, opened Oct 2024, 5 PM–12 AM</Text>
                  <View style={styles.locationActions}>
                    <TouchableOpacity 
                      style={styles.websiteButton}
                      onPress={() => handleWebsitePress('https://www.fourseasons.com/orlando/dining/lounges/epilogue/')}
                    >
                      <Text style={styles.websiteButtonText}>Visit Website</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.mapButton}
                      onPress={() => handleMapPress('10100 Dream Tree Blvd Orlando FL')}
                    >
                      <Text style={styles.mapButtonText}>Map It</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          
          {/* Breweries List */}
          <View style={styles.categorySection}>
            <View style={styles.categoryHeader}>
              <Beer size={20} color="#92400e" />
              <Text style={[styles.categoryTitle, { color: '#92400e' }]}>Craft Breweries in Orlando</Text>
            </View>
            
            <View style={styles.breweryGrid}>
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>Ivanhoe Park Brewing Co.</Text>
                <Text style={styles.locationAddress}>1300 Alden Rd, Ivanhoe Village</Text>
                <Text style={styles.locationDetails}>Joyland-inspired, 12 PM–10 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.ivanhoeparkbrewing.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('1300 Alden Rd Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>Park Pizza & Brewing Company</Text>
                <Text style={styles.locationAddress}>6941 Lake Nona Blvd, Lake Nona</Text>
                <Text style={styles.locationDetails}>Wood-fired pizza, 11 AM–10 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.parkpizzalakenona.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('6941 Lake Nona Blvd Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>Twelve Talons Beerworks</Text>
                <Text style={styles.locationAddress}>2805 E Kaley St, The Milk District</Text>
                <Text style={styles.locationDetails}>Unique flavors, 4 PM–10 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://twelvetalons.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('2805 E Kaley St Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>Brewlando Brewing</Text>
                <Text style={styles.locationAddress}>6820 Hoffner Ave, Southeast Orlando</Text>
                <Text style={styles.locationDetails}>Orlando-centric names, 12 PM–10 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.brewlandobrewing.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('6820 Hoffner Ave Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>Cask & Larder</Text>
                <Text style={styles.locationAddress}>Orlando International Airport</Text>
                <Text style={styles.locationDetails}>James Beard-recognized, hours vary</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.caskandlarder.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('Cask and Larder Orlando International Airport')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>Hourglass Brewing</Text>
                <Text style={styles.locationAddress}>2500 Curry Ford Rd, Hourglass District</Text>
                <Text style={styles.locationDetails}>Nostalgic decor, 4 PM–12 AM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.hourglassbrewing.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('2500 Curry Ford Rd Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>Motorworks Brewing</Text>
                <Text style={styles.locationAddress}>1014 E Pine St, City District</Text>
                <Text style={styles.locationDetails}>24 drafts, open-air deck, 11 AM–12 AM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://motorworksbrewing.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('1014 E Pine St Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>Redlight Redlight</Text>
                <Text style={styles.locationAddress}>2810 Corrine Dr, Audubon Park</Text>
                <Text style={styles.locationDetails}>20+ page beer list, 4 PM–2 AM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.redlightredlightbeerparlour.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('2810 Corrine Dr Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>RockPit Brewing</Text>
                <Text style={styles.locationAddress}>10 W Illiana St, SODO</Text>
                <Text style={styles.locationDetails}>20 drafts, barbecue, 4 PM–11 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.rockpitbrewing.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('10 W Illiana St Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>Sideward Brewing</Text>
                <Text style={styles.locationAddress}>210 N Bumby Ave, The Milk District</Text>
                <Text style={styles.locationDetails}>Pub fare, 12 PM–11 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.sidewardbrewing.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('210 N Bumby Ave Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>Tactical Brewing Co.</Text>
                <Text style={styles.locationAddress}>4882 New Broad St, Baldwin Park</Text>
                <Text style={styles.locationDetails}>Veteran-founded, 3 PM–12 AM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.tacticalbrewingco.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('4882 New Broad St Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>Ten10 Brewing Company</Text>
                <Text style={styles.locationAddress}>1010 Virginia Dr, Mills 50</Text>
                <Text style={styles.locationDetails}>Pure ingredients, 3 PM–12 AM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.ten10brewing.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('1010 Virginia Dr Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>New York Beer Project</Text>
                <Text style={styles.locationAddress}>923 N Plant St, Winter Garden</Text>
                <Text style={styles.locationDetails}>NYC-themed, 11 AM–11 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.newyorkbeerproject.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('923 N Plant St Winter Garden FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>Bowigens Beer Company</Text>
                <Text style={styles.locationAddress}>13060 Avalon Lake Dr, Avalon Park</Text>
                <Text style={styles.locationDetails}>Innovative brews, 3 PM–11 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.bowigens.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('13060 Avalon Lake Dr Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>Crooked Can Brewing Company</Text>
                <Text style={styles.locationAddress}>426 W Plant St, Winter Garden</Text>
                <Text style={styles.locationDetails}>Plant Street Market, 11 AM–11 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.crookedcan.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('426 W Plant St Winter Garden FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.breweryItem}>
                <Text style={styles.locationName}>Gatlin Hall Brewing</Text>
                <Text style={styles.locationAddress}>4720 S Orange Ave, South Orlando</Text>
                <Text style={styles.locationDetails}>Family-friendly patio, 11 AM–10 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.gatlinhall.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('4720 S Orange Ave Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          
          {/* Wineries List */}
          <View style={styles.categorySection}>
            <View style={styles.categoryHeader}>
              <Wine size={20} color="#991b1b" />
              <Text style={[styles.categoryTitle, { color: '#991b1b' }]}>Wineries & Wine Bars in Orlando</Text>
            </View>
            
            <View style={styles.wineryGrid}>
              <View style={styles.wineryItem}>
                <Text style={styles.locationName}>Lakeridge Winery & Vineyards</Text>
                <Text style={styles.locationAddress}>19239 US-27, Clermont (35-min drive)</Text>
                <Text style={styles.locationDetails}>80-acre vineyard, tastings, 10 AM–5 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.lakeridgewinery.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('19239 US-27 Clermont FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.wineryItem}>
                <Text style={styles.locationName}>Cooper's Hawk Winery & Restaurant</Text>
                <Text style={styles.locationAddress}>8005 International Dr, I-Drive</Text>
                <Text style={styles.locationDetails}>Hand-crafted wines, 11 AM–10 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.coopershawkwinery.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('8005 International Dr Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.wineryItem}>
                <Text style={styles.locationName}>Quantum Leap Winery</Text>
                <Text style={styles.locationAddress}>1312 Wilfred Dr, Orlando</Text>
                <Text style={styles.locationDetails}>Sustainable wines, available at local venues</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.quantumleapwinery.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('1312 Wilfred Dr Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.wineryItem}>
                <Text style={styles.locationName}>Wine Bar George</Text>
                <Text style={styles.locationAddress}>1610 E Buena Vista Dr, Disney Springs</Text>
                <Text style={styles.locationDetails}>Master-sommelier-led, 11 AM–11 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://winebargeorge.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('1610 E Buena Vista Dr Lake Buena Vista FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.wineryItem}>
                <Text style={styles.locationName}>VINIA Wine & Kitchen</Text>
                <Text style={styles.locationAddress}>110 S Orlando Ave, Winter Park</Text>
                <Text style={styles.locationDetails}>Italian-Brazilian menu, 5 PM–10 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://viniawine.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('110 S Orlando Ave Winter Park FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.wineryItem}>
                <Text style={styles.locationName}>Swirlery Wine Bar</Text>
                <Text style={styles.locationAddress}>1508 E Michigan St, SODO</Text>
                <Text style={styles.locationDetails}>Tasting room, retail, 4 PM–10 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.swirlery.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('1508 E Michigan St Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.wineryItem}>
                <Text style={styles.locationName}>RusTeak Restaurant & Wine Bar</Text>
                <Text style={styles.locationAddress}>101 S Eola Dr, Thornton Park</Text>
                <Text style={styles.locationDetails}>New American, 11 AM–10 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.rusteakwinebar.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('101 S Eola Dr Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.wineryItem}>
                <Text style={styles.locationName}>Vines Grille & Wine Bar</Text>
                <Text style={styles.locationAddress}>7533 W Sand Lake Rd, Restaurant Row</Text>
                <Text style={styles.locationDetails}>Boutique wines, 4 PM–11 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.vinesgrille.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('7533 W Sand Lake Rd Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.wineryItem}>
                <Text style={styles.locationName}>The Wine Room on Park Avenue</Text>
                <Text style={styles.locationAddress}>270 S Park Ave, Winter Park</Text>
                <Text style={styles.locationDetails}>Self-serve dispensers, 12 PM–11 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://thewineroomonline.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('270 S Park Ave Winter Park FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.wineryItem}>
                <Text style={styles.locationName}>Eola Wine Company</Text>
                <Text style={styles.locationAddress}>430 E Central Blvd, Thornton Park</Text>
                <Text style={styles.locationDetails}>Boutique wines, 4 PM–11 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.eolawinecompany.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('430 E Central Blvd Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.wineryItem}>
                <Text style={styles.locationName}>Digress Wine</Text>
                <Text style={styles.locationAddress}>2603 Edgewater Dr, College Park</Text>
                <Text style={styles.locationDetails}>Unique pairings, 4 PM–10 PM</Text>
                <View style={styles.locationActions}>
                  <TouchableOpacity 
                    style={styles.websiteButton}
                    onPress={() => handleWebsitePress('https://www.digresswine.com')}
                  >
                    <Text style={styles.websiteButtonText}>Visit Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.mapButton}
                    onPress={() => handleMapPress('2603 Edgewater Dr Orlando FL')}
                  >
                    <Text style={styles.mapButtonText}>Map It</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
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
            <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
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

              {renderTabContent()}
            </ScrollView>
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
    borderRadius: 999,
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
    // fontSize: 20,
    // fontWeight: '500',
    // color: '#000000',
    // marginBottom: 4,
    // textShadowColor: 'rgba(0, 0, 0, 0.3)',
    // textShadowOffset: { width: 0, height: 1 },
    // textShadowRadius: 2,
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
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
   // justifyContent: 'space-between',
    gap:2,
    flexWrap:'wrap',
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
    backgroundColor: '#fff7ed',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ea580c',
  },
  featureBadgeText: {
    fontSize: 12,
    color: '#c2410c',
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
    borderRadius: 999,
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
    //paddingHorizontal: 24,
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
  modalContentGrid: {
    flexDirection: 'column',
    gap: 20,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 1,
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
  mustTrySection: {
    backgroundColor: '#fef3c7',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  mustTryList: {
    marginTop: 12,
  },
  mustTryItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
  tipsSection: {
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  tipsList: {
    marginTop: 12,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  tipText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  expectSection: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  expectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 16,
  },
  featureBadge: {
    backgroundColor: '#fff7ed',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ea580c',
  },
  featureBadgeText: {
    fontSize: 12,
    color: '#c2410c',
    fontWeight: '600',
  },
  // Modal feature badges (neutral styling like web)
  modalFeatureBadge: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  modalFeatureBadgeText: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '600',
  },
  hoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  hoursInfo: {
    marginLeft: 12,
  },
  hoursLabel: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
  },
  hoursList: {
    flexDirection: 'column',
    gap: 2,
  },
  hoursText: {
    fontSize: 14,
    color: '#ea580c',
    fontWeight: '600',
  },
  eventsSection: {
    backgroundColor: '#f3e8ff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  eventsList: {
    marginTop: 12,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  eventIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E0b0FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    flexShrink: 0,
   
  },
  eventText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  nearbySection: {
    backgroundColor: '#e0f2fe',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  nearbyList: {
    marginTop: 12,
  },
  nearbyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  nearbyIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#aaf0c9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    flexShrink: 0,
  },
  nearbyText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginLeft: 8,
  },
  // Directory Section Styles
  directorySection: {
    backgroundColor: '#f9fafb',
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  directoryTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 32,
  },
  categorySection: {
    marginBottom: 40,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginLeft: 8,
  },
  locationList: {
    gap: 24,
  },
  neighborhoodGroup: {
    marginBottom: 24,
  },
  neighborhoodTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  locationItem: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  directoryLocationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  directoryLocationAddress: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  locationDetails: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  locationActions: {
    flexDirection: 'row',
    gap: 8,
  },
  websiteButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  websiteButtonText: {
    fontSize: 12,
    color: '#3b82f6',
    fontWeight: '500',
  },
  mapButton: {
    backgroundColor: '#7c3aed',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  mapButtonText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '500',
  },
  breweryGrid: {
    gap: 12,
  },
  breweryItem: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  wineryGrid: {
    gap: 12,
  },
  wineryItem: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
});

export default NightlifeScreen; 