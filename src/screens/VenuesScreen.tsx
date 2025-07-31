import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Linking,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { ExternalLink, MapPin } from 'lucide-react-native';
import { TOP_VENUES } from '../data/topvenues';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

const VenuesScreen: React.FC = () => {
  const handleWebsitePress = (url: string) => {
    Linking.openURL(url);
  };

  const handleMapPress = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    Linking.openURL(url);
  };

  const renderEventTypeBadge = (type: string, index: number) => (
    <View key={index} style={styles.badge}>
      <Text style={styles.badgeText}>{type}</Text>
    </View>
  );

  const renderVenueCard = (venue: any) => (
    <View key={venue.id} style={styles.card}>
      <ImageBackground
        source={venue.image}
        style={styles.cardImage}
        imageStyle={styles.cardImageStyle}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.8)']}
          style={styles.imageGradient}
        >
          <View style={styles.imageContent}>
            <Text style={styles.venueName}>{venue.name}</Text>
            <View style={styles.locationContainer}>
              <MapPin size={14} color="#ffffff" />
              <Text style={styles.locationText}>{venue.neighborhood}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      
      <View style={styles.cardContent}>
        <Text style={styles.venueDescription}>{venue.description}</Text>
        
        <View style={styles.badgesContainer}>
          {venue.eventTypes.map((type: string, index: number) => 
            renderEventTypeBadge(type, index)
          )}
        </View>
        
        {venue.address && (
          <View style={styles.addressContainer}>
            <View style={styles.addressRow}>
              <MapPin size={16} color="#64748b" style={styles.addressIcon} />
              <Text style={styles.addressText}>{venue.address}</Text>
            </View>
            <TouchableOpacity 
              style={styles.mapItButton}
              onPress={() => handleMapPress(venue.address)}
            >
              <MapPin size={12} color="#7c3aed" />
              <Text style={styles.mapItText}>Map It</Text>
            </TouchableOpacity>
          </View>
        )}
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.websiteButton]}
            onPress={() => handleWebsitePress(venue.link)}
          >
            <ExternalLink size={14} color="#ffffff" />
            <Text style={styles.buttonText}>Official Website</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.button, styles.calendarButton]}
            onPress={() => handleWebsitePress(venue.calendarLink)}
          >
            <ExternalLink size={14} color="#ffffff" />
            <Text style={styles.buttonText}>Event Calendar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header showDrawerButton={true}/>
      {/* Header Section */}
      <LinearGradient
        colors={['#581c87', '#3730a3']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        {/* Background Pattern */}
        <View style={styles.patternOverlay}>
          <View style={styles.gridPattern} />
        </View>
        
        <View style={styles.headerContent}>
          <View style={styles.titleSection}>
            <View style={styles.titleRow}>
              <View style={styles.titleAccent} />
              <Text style={styles.title}>Orlando Venues & Events</Text>
            </View>
            <Text style={styles.subtitle}>
              Major entertainment venues to plan your visit around
            </Text>
          </View>
          
          {/* <View style={styles.badgeRow}>
            <View style={styles.headerBadge}>
              <View style={styles.badgeDot} />
              <Text style={styles.headerBadgeText}>Concerts</Text>
            </View>
            <View style={styles.headerBadge}>
              <View style={styles.badgeDot} />
              <Text style={styles.headerBadgeText}>Sports</Text>
            </View>
            <View style={styles.headerBadge}>
              <View style={styles.badgeDot} />
              <Text style={styles.headerBadgeText}>Shows</Text>
            </View>
          </View> */}
        </View>
      </LinearGradient>

      {/* Venues Section */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.venuesSection}>
          <Text style={styles.sectionTitle}>Top Entertainment Venues</Text>
          
          <View style={styles.venuesGrid}>
            {TOP_VENUES.map((venue) => renderVenueCard(venue))}
          </View>
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
  header: {
   // paddingTop: 20,
    // paddingBottom: 12,
   // paddingHorizontal: 16,
    // position: 'relative',
    // overflow: 'hidden',
    // borderBottomWidth: 1,
    borderBottomColor: '#4338ca',
  },
  patternOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
  },
  gridPattern: {
    flex: 1,
    backgroundColor: 'transparent',
    // Add grid pattern using borderColor if needed
  },
  headerContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    zIndex: 1,
  },
  titleSection: {
    marginBottom: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  titleAccent: {
    height: 20,
    width: 4,
    backgroundColor: '#a78bfa',
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 14,
    color: '#c7d2fe',
    marginTop: 4,
    paddingLeft: 12,
    fontWeight: '300',
    letterSpacing: 0.5,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  headerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'rgba(67, 56, 202, 0.7)',
    borderRadius: 4,
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#a78bfa',
    marginRight: 6,
  },
  headerBadgeText: {
    fontSize: 12,
    color: '#c7d2fe',
  },
  scrollView: {
    flex: 1,
  },
  venuesSection: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#1f2937',
  },
  venuesGrid: {
    gap: 24,
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
  },
  cardImage: {
    height: 192,
    justifyContent: 'flex-end',
  },
  cardImageStyle: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  imageGradient: {
    height: 192,
    justifyContent: 'flex-end',
  },
  imageContent: {
    padding: 16,
  },
  venueName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginLeft: 4,
  },
  cardContent: {
    padding: 16,
  },
  venueDescription: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 16,
    lineHeight: 20,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 16,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 12,
    color: '#475569',
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
    fontSize: 14,
    color: '#64748b',
    flex: 1,
  },
  mapItButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 4,
  },
  mapItText: {
    fontSize: 12,
    color: '#7c3aed',
    marginLeft: 4,
    textDecorationLine: 'underline',
  },
  buttonsContainer: {
    gap: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    gap: 4,
  },
  websiteButton: {
    backgroundColor: '#ea580c',
  },
  calendarButton: {
    backgroundColor: '#0d9488',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default VenuesScreen; 