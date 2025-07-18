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
} from 'react-native';
import {
  X,
  MapPin,
  Star,
  ExternalLink,
  Wifi,
  Car,
  Utensils,
  Waves,
  Dumbbell,
  Coffee,
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
        return 'Budget Friendly';
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
    onWebsitePress?.(hotel);
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
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <X size={24} color="#374151" />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1}>
            Hotel Details
          </Text>
          <View style={styles.headerSpacer} />
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Hero Image */}
          <View style={styles.imageContainer}>
            <Image
              source={
                hotel.imageUrl && typeof hotel.imageUrl === 'string' && hotel.imageUrl.startsWith('http')
                  ? { uri: hotel.imageUrl }
                  : hotel.imageUrl || defaultImage
              }
              style={styles.heroImage}
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
                <Star size={16} color="#fbbf24" fill="#fbbf24" />
                <Text style={styles.ratingText}>{hotel.rating.toFixed(1)}</Text>
              </View>
            )}
          </View>

          {/* Content */}
          <View style={styles.content}>
            {/* Hotel Name and Location */}
            <View style={styles.titleSection}>
              <Text style={styles.hotelName}>{hotel.name}</Text>
              {hotel.neighborhood && (
                <View style={styles.locationContainer}>
                  <MapPin size={16} color="#6b7280" />
                  <Text style={styles.locationText}>{hotel.neighborhood}</Text>
                </View>
              )}
            </View>

            {/* Price */}
            {hotel.price && (
              <View style={styles.priceSection}>
                <Text style={styles.priceLabel}>Starting from</Text>
                <Text style={styles.priceText}>{hotel.price}</Text>
              </View>
            )}

            {/* Description */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>About</Text>
              <Text style={styles.description}>{hotel.description}</Text>
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

        {/* Footer Actions */}
        <View style={styles.footer}>
          {hotel.website && (
            <TouchableOpacity
              style={styles.websiteButton}
              onPress={handleWebsitePress}
            >
              <ExternalLink size={20} color="#ffffff" />
              <Text style={styles.websiteButtonText}>Visit Website</Text>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  closeButton: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    marginHorizontal: 16,
  },
  headerSpacer: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    height: 250,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
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
  },
  ratingBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    padding: 20,
  },
  titleSection: {
    marginBottom: 16,
  },
  hotelName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  locationText: {
    fontSize: 16,
    color: '#6b7280',
  },
  priceSection: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
  },
  priceLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#059669',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
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
    gap: 6,
    marginBottom: 8,
  },
  amenityText: {
    fontSize: 14,
    color: '#374151',
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
    backgroundColor: '#3b82f6',
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
  },
});

export default HotelDetailModal;
