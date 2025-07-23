import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  Linking,
  Share,
} from 'react-native';
import {
  X,
  MapPin,
  ExternalLink,
  Globe,
  Hotel as HotelIcon,
  Wifi,
  Car,
  Utensils,
  Waves,
  Dumbbell,
  Coffee,
  Share2,
} from 'lucide-react-native';
import { Hotel } from '../types/Hotel';

const { width, height } = Dimensions.get('window');

interface HotelDetailModalProps {
  hotel: Hotel | null;
  visible: boolean;
  onClose: () => void;
  onWebsitePress?: (hotel: Hotel) => void;
}

const HotelDetailModal: React.FC<HotelDetailModalProps> = ({
  hotel,
  visible,
  onClose,
  onWebsitePress,
}) => {
  if (!hotel) return null;

  const getSubcategoryLabel = (subcategory: string): string => {
    switch (subcategory) {
      case 'theme-park':
        return 'Theme Park Hotel';
      case 'budget-friendly':
        return 'Budget Friendly Hotel';
      case 'luxury':
        return 'Luxury Hotel';
      case 'resorts':
        return 'Resort';
      case 'villas':
        return 'Villa';
      case 'business':
        return 'Business Hotel';
      default:
        return 'Hotel';
    }
  };

  const getSubcategoryColor = (subcategory: string): string => {
    switch (subcategory) {
      case 'luxury':
        return '#3b82f6'; // Blue-600 (default like web)
      case 'theme-park':
        return '#dc2626'; // Red-600 (destructive like web)
      case 'budget-friendly':
        return '#6b7280'; // Gray-600 (secondary like web)
      case 'resorts':
        return '#3b82f6'; // Blue-600
      case 'villas':
        return '#3b82f6'; // Blue-600
      case 'business':
        return '#6b7280'; // Gray-600
      default:
        return '#3b82f6'; // Blue-600
    }
  };

  const getAmenityIcon = (amenity: string) => {
    const amenityLower = amenity.toLowerCase();
    if (amenityLower.includes('wifi') || amenityLower.includes('internet')) {
      return <Wifi size={16} color="#6b7280" />;
    }
    if (amenityLower.includes('parking') || amenityLower.includes('valet')) {
      return <Car size={16} color="#6b7280" />;
    }
    if (amenityLower.includes('restaurant') || amenityLower.includes('dining')) {
      return <Utensils size={16} color="#6b7280" />;
    }
    if (amenityLower.includes('pool') || amenityLower.includes('spa')) {
      return <Waves size={16} color="#6b7280" />;
    }
    if (amenityLower.includes('gym') || amenityLower.includes('fitness')) {
      return <Dumbbell size={16} color="#6b7280" />;
    }
    return <Coffee size={16} color="#6b7280" />;
  };

  const handleWebsitePress = () => {
    onClose();
    onWebsitePress?.(hotel);
  };

  const handleMapPress = () => {
    const query = encodeURIComponent(hotel.address || `${hotel.name} ${hotel.neighborhood || ''} Orlando FL`);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    Linking.openURL(url);
  };

  const handleShare = async () => {
    const shareUrl = `https://www.awesomeorlando.com/hotel/${hotel.id}`;
    const shareTitle = `${hotel.name} | Awesome Orlando ${
      hotel.subcategory === 'luxury' ? 'Luxury Hotel' : 
      hotel.subcategory === 'theme-park' ? 'Theme Park Hotel' : 
      hotel.subcategory === 'budget-friendly' ? 'Budget-Friendly Hotel' : 
      'Orlando Hotel'
    }`;
    const shareMessage = `Check out this amazing ${hotel.subcategory?.replace('-', ' ') || ''} hotel in ${hotel.neighborhood || 'Orlando'} - ${hotel.description?.substring(0, 100)}... ${shareUrl}`;
    
    try {
      await Share.share({
        message: shareMessage,
        url: shareUrl,
        title: shareTitle,
      });
    } catch (error) {
      console.error('Error sharing hotel:', error);
    }
  };

  const defaultImage = require('../../assets/images/DisneySprings.jpg');

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        {/* Header - Match web version exactly */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <X size={24} color="#374151" />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1}>
            Hotel Details
          </Text>
          {/* Share button like web */}
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Share2 size={20} color="#374151" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Hero Image - Match web exactly */}
          <View style={styles.imageContainer}>
            {hotel.imageUrl ? (
              <Image
                source={
                  typeof hotel.imageUrl === 'string' && hotel.imageUrl.startsWith('http')
                    ? { uri: hotel.imageUrl }
                    : hotel.imageUrl || defaultImage
                }
                style={styles.heroImage}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.placeholderContainer}>
                <HotelIcon size={80} color="#9ca3af" />
              </View>
            )}
            
            {/* Category Badge */}
            <View style={[styles.categoryBadge, { backgroundColor: getSubcategoryColor(hotel.subcategory) }]}>
              <Text style={styles.categoryText}>
                {getSubcategoryLabel(hotel.subcategory)}
              </Text>
            </View>

            {/* Neighborhood overlay at bottom like web */}
            {hotel.neighborhood && (
              <View style={styles.neighborhoodOverlay}>
                <MapPin size={14} color="#ffffff" />
                <Text style={styles.neighborhoodText}>{hotel.neighborhood}</Text>
              </View>
            )}
          </View>

          {/* Content */}
          <View style={styles.content}>
            {/* Hotel Name and Location */}
            <View style={styles.titleSection}>
              <Text style={styles.hotelName}>{hotel.name}</Text>
              
              {/* Map It link */}
              <TouchableOpacity style={styles.mapLink} onPress={handleMapPress}>
                <MapPin size={16} color="#3b82f6" />
                <Text style={styles.mapLinkText}>Map It</Text>
              </TouchableOpacity>
            </View>

            {/* Description */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>About</Text>
              <Text style={styles.description}>
                {hotel.description || "Experience the ultimate Orlando vacation at this exceptional accommodation."}
              </Text>
            </View>

            {/* Amenities */}
            {hotel.amenities && hotel.amenities.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Amenities</Text>
                <View style={styles.amenitiesGrid}>
                  {hotel.amenities.map((amenity, index) => (
                    <View key={index} style={styles.amenityItem}>
                      {getAmenityIcon(amenity)}
                      <Text style={styles.amenityText}>{amenity}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Perks */}
            {hotel.perks && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Special Perks</Text>
                <Text style={styles.perksText}>{hotel.perks}</Text>
              </View>
            )}

            {/* Tags */}
            {hotel.tags && hotel.tags.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tags</Text>
                <View style={styles.tagsContainer}>
                  {hotel.tags.map((tag, index) => (
                    <View key={index} style={styles.tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        </ScrollView>

        {/* Footer Actions - Match web exactly */}
        <View style={styles.footer}>
          {hotel.website && (
            <TouchableOpacity
              style={styles.websiteButton}
              onPress={handleWebsitePress}
            >
              <Globe size={20} color="#ffffff" />
              <Text style={styles.websiteButtonText}>Visit Official Website</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  closeButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  shareButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    height: 280, // Slightly taller for mobile
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  placeholderContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  neighborhoodOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  neighborhoodText: {
    color: '#ffffff',
    fontSize: 14,
    marginLeft: 6,
    fontWeight: '500',
  },
  content: {
    padding: 20,
  },
  titleSection: {
    marginBottom: 20,
  },
  hotelName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
    lineHeight: 34,
  },
  mapLink: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  mapLinkText: {
    fontSize: 14,
    color: '#3b82f6',
    fontWeight: '500',
    marginLeft: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  amenitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  amenityText: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 6,
    fontWeight: '500',
  },
  perksText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    fontStyle: 'italic',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#e5e7eb',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    color: '#374151',
    fontWeight: '500',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  websiteButton: {
    backgroundColor: '#3b82f6', // Blue-600 like web
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  websiteButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default HotelDetailModal;
