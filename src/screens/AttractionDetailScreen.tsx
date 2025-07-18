import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ArrowLeft,
  ExternalLink,
  MapPin,
  Clock,
  DollarSign,
  Star,
} from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Attraction } from '../data/attractions';
import { getAttractionDetailsByName, AttractionDetailsType } from '../data/attraction-detail-data';
import { getImageSource } from '../data/imageMap';

const AttractionDetailScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const insets = useSafeAreaInsets();
  const { attraction } = route.params as { attraction: Attraction };
  const [detailedData, setDetailedData] = useState<AttractionDetailsType | null>(null);

  useEffect(() => {
    // Get detailed data from attraction-detail-data.ts
    const details = getAttractionDetailsByName(attraction.name);
    setDetailedData(details);
  }, [attraction.name]);

  const handleBack = () => {
    navigation.goBack();
  };

  const openWebsite = () => {
    const websiteUrl = detailedData?.website || attraction.link;
    if (websiteUrl) {
      navigation.navigate('WebView' as never, {
        url: websiteUrl,
        title: attraction.name
      } as never);
    }
  };

  // Function to remove citation references like [1], [1][2], etc. from text
  const removeCitations = (text: string): string => {
    if (!text) return '';
    return text.replace(/\[\d+\](?:\[\d+\])*/g, '');
  };

  // Split description into paragraphs
  const getDescriptionParagraphs = () => {
    const description = detailedData?.description || attraction.description;
    return description.split('\n\n').filter(p => p.trim().length > 0);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} size={16} color="#fbbf24" fill="#fbbf24" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" size={16} color="#fbbf24" fill="#fbbf24" style={{ opacity: 0.5 }} />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={16} color="#d1d5db" />
      );
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <View style={styles.heroImageContainer}>
          <Image
            source={getImageSource(attraction.image)}
            style={styles.heroImage}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={styles.heroImageOverlay}
          />

          {/* Back Button Overlay */}
          <TouchableOpacity
            style={[styles.backButtonOverlay, { top: insets.top  }]}
            onPress={handleBack}
          >
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>

          <View style={styles.heroImageContent}>
            <Text style={styles.heroTitle}>{attraction.name}</Text>
            <View style={styles.heroSubtitle}>
              <MapPin size={16} color="#ffffff" />
              <Text style={styles.heroLocation}>{attraction.neighborhood}</Text>
            </View>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Category Badge */}
          <View style={styles.categorySection}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryBadgeText}>{attraction.category}</Text>
            </View>
          </View>

          {/* Rating */}
          {attraction.rating && (
            <View style={styles.ratingSection}>
              <View style={styles.ratingStars}>
                {renderStars(attraction.rating)}
              </View>
              <Text style={styles.ratingText}>
                {attraction.rating.toFixed(1)} out of 5 stars
              </Text>
            </View>
          )}

          {/* Visitor Information Card */}
          <View style={styles.visitorInfoCard}>
            <Text style={styles.visitorInfoTitle}>Visitor Information</Text>

            {/* Website Button */}
            <TouchableOpacity style={styles.websiteButton} onPress={openWebsite}>
              <ExternalLink size={20} color="#ffffff" />
              <Text style={styles.websiteButtonText}>Visit Official Website</Text>
            </TouchableOpacity>

            <View style={styles.infoGrid}>
              {/* Address */}
              {(detailedData?.address || attraction.address) && (
                <View style={styles.infoItem}>
                  <MapPin size={20} color="#ea580c" />
                  <View style={styles.infoContent}>
                    <Text style={styles.infoLabel}>Address</Text>
                    <Text style={styles.infoValue}>{detailedData?.address || attraction.address}</Text>
                  </View>
                </View>
              )}

              {/* Hours */}
              {(detailedData?.hours || attraction.hours) && (
                <View style={styles.infoItem}>
                  <Clock size={20} color="#ea580c" />
                  <View style={styles.infoContent}>
                    <Text style={styles.infoLabel}>Hours</Text>
                    <Text style={styles.infoValue}>{removeCitations(detailedData?.hours || attraction.hours)}</Text>
                  </View>
                </View>
              )}

              {/* Price */}
              {(detailedData?.price || attraction.price) && (
                <View style={styles.infoItem}>
                  <DollarSign size={20} color="#ea580c" />
                  <View style={styles.infoContent}>
                    <Text style={styles.infoLabel}>Price</Text>
                    <Text style={styles.infoValue}>{removeCitations(detailedData?.price || attraction.price)}</Text>
                  </View>
                </View>
              )}
            </View>
          </View>

          {/* Description */}
          <View style={styles.descriptionSection}>
            <Text style={styles.sectionTitle}>About {attraction.name}</Text>
            <View style={styles.descriptionContent}>
              {getDescriptionParagraphs().map((paragraph, index) => (
                <Text key={index} style={styles.descriptionParagraph}>
                  {removeCitations(paragraph)}
                </Text>
              ))}
            </View>
          </View>

          {/* Insider Tips */}
          {detailedData?.tips && detailedData.tips.length > 0 && (
            <View style={styles.tipsSection}>
              <Text style={styles.tipsTitle}>Insider Tips</Text>
              <View style={styles.tipsContainer}>
                {detailedData.tips.map((tip, index) => (
                  <View key={index} style={styles.tipItem}>
                    <Star size={16} color="#ea580c" />
                    <Text style={styles.tipText}>{removeCitations(tip)}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backButtonOverlay: {
    position: 'absolute',
    left: 16,
    zIndex: 20,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scrollView: {
    flex: 1,
  },
  heroImageContainer: {
    height: 300,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroImageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
  },
  heroImageContent: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  heroSubtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  heroLocation: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.9,
  },
  content: {
    padding: 20,
  },
  categorySection: {
    marginBottom: 16,
  },
  categoryBadge: {
    backgroundColor: '#fed7aa',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  categoryBadgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ea580c',
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  ratingStars: {
    flexDirection: 'row',
    gap: 2,
  },
  ratingText: {
    fontSize: 14,
    color: '#6b7280',
  },
  quickInfoSection: {
    marginBottom: 24,
  },
  quickInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    gap: 16,
  },
  quickInfoContent: {
    flex: 1,
  },
  quickInfoLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
  },
  quickInfoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  visitorInfoCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  visitorInfoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  infoGrid: {
    marginTop: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  infoContent: {
    marginLeft: 12,
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  descriptionSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  descriptionContent: {
    gap: 16,
  },
  descriptionParagraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
    marginBottom: 16,
  },
  tipsSection: {
    backgroundColor: '#fef3e2',
    borderWidth: 1,
    borderColor: '#fed7aa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ea580c',
    marginBottom: 16,
  },
  tipsContainer: {
    gap: 12,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: '#6b7280',
  },
  addressSection: {
    marginBottom: 24,
  },
  addressItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  addressText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
    color: '#6b7280',
  },
  websiteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0891b2',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 12,
    marginTop: 0,
  },
  websiteButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default AttractionDetailScreen;
