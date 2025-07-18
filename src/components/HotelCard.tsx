import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { MapPin, ExternalLink, Star } from 'lucide-react-native';
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
        return '#f59e0b';
      case 'theme-park':
        return '#8b5cf6';
      case 'budget-friendly':
        return '#10b981';
      case 'resorts':
        return '#3b82f6';
      case 'villas':
        return '#ec4899';
      case 'business':
        return '#6b7280';
      default:
        return '#f97316';
    }
  };

  const handlePress = () => {
    onPress?.(hotel);
  };

  const handleWebsitePress = (e: any) => {
    e.stopPropagation();
    onWebsitePress?.(hotel);
  };

  // Default image for hotels without images - using a theme park image as placeholder
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
        <Image
          source={hotel.imageUrl ? { uri: hotel.imageUrl } : defaultImage}
          style={styles.image}
          resizeMode="cover"
        />
        
        {/* Category Badge */}
        <View style={[styles.categoryBadge, { backgroundColor: getSubcategoryColor(hotel.subcategory) }]}>
          <Text style={styles.categoryText}>
            {getSubcategoryLabel(hotel.subcategory)}
          </Text>
        </View>

        {/* Rating Badge */}
        {hotel.rating && (
          <View style={styles.ratingBadge}>
            <Star size={12} color="#fbbf24" fill="#fbbf24" />
            <Text style={styles.ratingText}>{hotel.rating.toFixed(1)}</Text>
          </View>
        )}
      </View>

      {/* Hotel Content */}
      <View style={styles.content}>
        <Text style={styles.hotelName} numberOfLines={2}>
          {hotel.name}
        </Text>
        
        {hotel.neighborhood && (
          <View style={styles.locationContainer}>
            <MapPin size={12} color="#6b7280" />
            <Text style={styles.locationText} numberOfLines={1}>
              {hotel.neighborhood}
            </Text>
          </View>
        )}

        <Text style={styles.description} numberOfLines={3}>
          {hotel.description}
        </Text>

        {/* Amenities */}
        {hotel.amenities && hotel.amenities.length > 0 && (
          <View style={styles.amenitiesContainer}>
            {hotel.amenities.slice(0, 2).map((amenity, index) => (
              <View key={index} style={styles.amenityTag}>
                <Text style={styles.amenityText}>{amenity}</Text>
              </View>
            ))}
            {hotel.amenities.length > 2 && (
              <View style={styles.amenityTag}>
                <Text style={styles.amenityText}>+{hotel.amenities.length - 2}</Text>
              </View>
            )}
          </View>
        )}

        {/* Price and Actions */}
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            {hotel.price && (
              <Text style={styles.priceText}>{hotel.price}</Text>
            )}
          </View>
          
          <View style={styles.actionsContainer}>
            {hotel.website && (
              <TouchableOpacity
                style={styles.websiteButton}
                onPress={handleWebsitePress}
              >
                <ExternalLink size={14} color="#ffffff" />
              </TouchableOpacity>
            )}
          </View>
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
  },
  fullWidthCard: {
    width: '100%',
  },
  imageContainer: {
    height: 160,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
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
  },
  ratingBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  ratingText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '600',
  },
  content: {
    padding: 12,
    flex: 1,
  },
  hotelName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
    lineHeight: 18,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 4,
  },
  locationText: {
    fontSize: 11,
    color: '#6b7280',
    flex: 1,
  },
  description: {
    fontSize: 11,
    color: '#6b7280',
    lineHeight: 14,
    marginBottom: 8,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 8,
  },
  amenityTag: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  amenityText: {
    fontSize: 9,
    color: '#6b7280',
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  priceContainer: {
    flex: 1,
  },
  priceText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#059669',
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  websiteButton: {
    backgroundColor: '#3b82f6',
    padding: 6,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HotelCard;
