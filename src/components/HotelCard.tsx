import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Linking,
  Share,
} from 'react-native';
import { MapPin, ExternalLink, Globe, Hotel as HotelIcon, Share2 } from 'lucide-react-native';
import { Hotel } from '../types/Hotel';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 2 columns with padding

interface HotelCardProps {
  hotel: Hotel;
  onPress?: (hotel: Hotel) => void;
  onWebsitePress?: (hotel: Hotel) => void;
  fullWidth?: boolean;
}

const HotelCard: React.FC<HotelCardProps> = ({ 
  hotel, 
  onPress, 
  onWebsitePress,
  fullWidth = false 
}) => {
  const getSubcategoryLabel = (subcategory: string): string => {
    switch (subcategory) {
      case 'theme-park':
        return 'Theme Park';
      case 'budget-friendly':
        return 'Budget';
      case 'luxury':
        return 'Luxury';
      case 'resorts':
        return 'Resort';
      case 'villas':
        return 'Villa';
      case 'business':
        return 'Business';
      default:
        return 'Hotel';
    }
  };

  const getSubcategoryColor = (subcategory: string): string => {
    switch (subcategory) {
      case 'luxury':
        return '#3b82f6'; // Blue-600 (default blue like web)
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

  const handlePress = () => {
    onPress?.(hotel);
  };

  const handleWebsitePress = (e: any) => {
    e.stopPropagation();
    onWebsitePress?.(hotel);
  };

  const handleMapPress = (e: any) => {
    e.stopPropagation();
    const query = encodeURIComponent(hotel.address || `${hotel.name} ${hotel.neighborhood || ''} Orlando FL`);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    Linking.openURL(url);
  };

  const handleShare = async (e: any) => {
    e.stopPropagation();
    
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

  // Default image for hotels without images
  const defaultImage = require('../../assets/images/DisneySprings.jpg');
  
  return (
    <TouchableOpacity
      style={[
        styles.card,
        fullWidth ? styles.fullWidthCard : { width: cardWidth }
      ]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      {/* Hotel Image */}
      <View style={styles.imageContainer}>
        {hotel.imageUrl ? (
          <Image
            source={
              typeof hotel.imageUrl === 'string' && hotel.imageUrl.startsWith('http')
                ? { uri: hotel.imageUrl }
                : hotel.imageUrl || defaultImage
            }
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.placeholderContainer}>
            <HotelIcon size={64} color="#9ca3af" />
          </View>
        )}
        
        {/* Category Badge in top-left */}
        <View style={[styles.categoryBadge, { backgroundColor: getSubcategoryColor(hotel.subcategory) }]}>
          <Text style={styles.categoryText}>
            {getSubcategoryLabel(hotel.subcategory)}
          </Text>
        </View>

        {/* Share button in top-right - FIXED TO MATCH WEB */}
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Share2 size={16} color="#374151" />
        </TouchableOpacity>

        {/* Neighborhood overlay at bottom */}
        {hotel.neighborhood && (
          <View style={styles.neighborhoodOverlay}>
            <MapPin size={12} color="#ffffff" />
            <Text style={styles.neighborhoodText} numberOfLines={1}>
              {hotel.neighborhood}
            </Text>
          </View>
        )}
      </View>

      {/* Hotel Content */}
      <View style={styles.content}>
        <Text style={styles.hotelName} numberOfLines={2}>
          {hotel.name}
        </Text>

        {/* Map It link */}
        <TouchableOpacity style={styles.mapLink} onPress={handleMapPress}>
          <MapPin size={12} color="#3b82f6" />
          <Text style={styles.mapLinkText}>Map It</Text>
        </TouchableOpacity>
        
        <Text style={styles.description} numberOfLines={3}>
          {hotel.description || "Experience the ultimate Orlando vacation at this exceptional accommodation."}
        </Text>

        {/* Amenities */}
        {hotel.amenities && hotel.amenities.length > 0 && (
          <View style={styles.amenitiesContainer}>
            {hotel.amenities.slice(0, 3).map((amenity, index) => (
              <View key={index} style={styles.amenityTag}>
                <Text style={styles.amenityText}>{amenity}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Footer with website and details button - FIXED COLORS TO MATCH WEB EXACTLY */}
        <View style={styles.footer}>
          {hotel.website ? (
            <TouchableOpacity
              style={styles.websiteButton}
              onPress={handleWebsitePress}
            >
              <Globe size={14} color="#ffffff" />
              <Text style={styles.websiteButtonText}>Official Website</Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}
          
          <TouchableOpacity style={styles.detailsButton} onPress={handlePress}>
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(229, 231, 235, 0.8)', // border-border/80
  },
  fullWidthCard: {
    width: '100%',
  },
  imageContainer: {
    height: 208, // h-52 from web (13rem = 208px)
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f3f4f6', // bg-muted/80
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  shareButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 6,
    borderRadius: 6,
  },
  neighborhoodOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  neighborhoodText: {
    color: '#ffffff',
    fontSize: 12,
    marginLeft: 6,
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 8,
    flex: 1,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
    lineHeight: 22,
  },
  mapLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  mapLinkText: {
    fontSize: 12,
    color: '#3b82f6',
    fontWeight: '500',
    marginLeft: 4,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 12,
  },
  amenityTag: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  amenityText: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(229, 231, 235, 0.5)', // border-border/50
    marginTop: 'auto',
  },
  // FIXED: Official Website button to match web exactly (orlando-orange background)
  websiteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#ff5500', // var(--orlando-orange) from web CSS
  },
  websiteButtonText: {
    fontSize: 12,
    color: '#ffffff',
    marginLeft: 4,
    fontWeight: '500',
  },
  // FIXED: Details button to match web exactly (orlando-teal border)
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#009688', // var(--orlando-teal) from web CSS
    borderRadius: 6,
    backgroundColor: '#ffffff',
  },
  detailsButtonText: {
    fontSize: 12,
    color: '#009688', // var(--orlando-teal) from web CSS
    marginLeft: 4,
    fontWeight: '500',
  },
});

export default HotelCard;
