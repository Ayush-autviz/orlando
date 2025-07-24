import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Share,
  Linking,
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
  Share2,
} from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Attraction } from '../data/attractions';
import { getAttractionDetailsByName, AttractionDetailsType } from '../data/attraction-detail-data';
import { getImageSource } from '../data/imageMap';

const { width } = Dimensions.get('window');

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

  const handleShare = async () => {
    const shareUrl = `https://www.awesomeorlando.com/attraction/${encodeURIComponent(attraction.name)}`;
    const shareTitle = `${attraction.name} | Awesome Orlando ${attraction.category}`;
    const shareMessage = `Check out ${attraction.name} in ${attraction.neighborhood || 'Orlando'} - ${attraction.description.substring(0, 100)}... ${shareUrl}`;
    
    try {
      await Share.share({
        message: shareMessage,
        url: shareUrl,
        title: shareTitle,
      });
    } catch (error) {
      console.error('Error sharing attraction:', error);
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
        {/* Back button */}
        <View style={[styles.backButtonContainer, { paddingTop: insets.top + 16 }]}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <ArrowLeft size={20} color="#374151" />
            <Text style={styles.backButtonText}>Back to Attractions</Text>
          </TouchableOpacity>
        </View>

        {/* Main content */}
        <View style={styles.mainContent}>
          {/* Hero image */}
          <View style={styles.heroImageContainer}>
            <Image
              source={getImageSource(attraction.image)}
              style={styles.heroImage}
              resizeMode="cover"
            />
            {/* Share button on top right */}
            <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
              <Share2 size={20} color="#374151" />
            </TouchableOpacity>
          </View>
          
          {/* Content */}
          <View style={styles.contentSection}>
            <Text style={styles.attractionTitle}>{attraction.name}</Text>
            
            {/* Description paragraphs */}
            <View style={styles.descriptionContainer}>
              {getDescriptionParagraphs().map((paragraph, index) => (
                <Text key={index} style={styles.descriptionParagraph}>
                  {removeCitations(paragraph)}
                </Text>
              ))}
            </View>
            
            {/* Insider tips */}
            {detailedData?.tips && detailedData.tips.length > 0 && (
              <View style={styles.tipsSection}>
                <Text style={styles.tipsTitle}>Insider Tips</Text>
                <View style={styles.tipsContainer}>
                  {detailedData.tips.map((tip, index) => (
                    <View key={index} style={styles.tipItem}>
                      <Star size={20} color="#ea580c" />
                      <Text style={styles.tipText}>{removeCitations(tip)}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>

        {/* Info sidebar */}
        <View style={styles.sidebarSection}>
          <View style={styles.visitorInfoCard}>
            <Text style={styles.visitorInfoTitle}>Visitor Information</Text>
            
            {/* Visit website button */}
            <TouchableOpacity style={styles.websiteButton} onPress={openWebsite}>
              <Text style={styles.websiteButtonText}>Visit Official Website</Text>
              <ExternalLink size={16} color="#ffffff" />
            </TouchableOpacity>
            
            <View style={styles.infoContainer}>
              {/* Address */}
              {(detailedData?.address || attraction.address) && (
                <View style={styles.infoItem}>
                  <MapPin size={20} color="#ea580c" />
                  <View style={styles.infoContent}>
                    <Text style={styles.infoLabel}>Address</Text>
                    <View style={styles.addressContainer}>
                      <Text style={styles.infoValue}>{detailedData?.address || attraction.address}</Text>
                      <TouchableOpacity 
                        style={styles.mapItButton}
                        onPress={() => {
                          const address = detailedData?.address || attraction.address;
                          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
                          Linking.openURL(googleMapsUrl);
                        }}
                      >
                        <MapPin size={12} color="#ea580c" />
                        <Text style={styles.mapItText}>Map It</Text>
                      </TouchableOpacity>
                    </View>
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
  scrollView: {
    flex: 1,
  },
  backButtonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  backButtonText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 8,
    fontWeight: '500',
  },
  mainContent: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  heroImageContainer: {
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
  },
  heroImage: {
    width: '100%',
    height: 300,
  },
  shareButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 8,
    borderRadius: 8,
  },
  contentSection: {
    marginBottom: 24,
  },
  attractionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  descriptionContainer: {
    marginBottom: 24,
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
  },
  tipsTitle: {
    fontSize: 20,
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
    color: '#374151',
  },
  sidebarSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  visitorInfoCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  visitorInfoTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  websiteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ea580c',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
    gap: 8,
  },
  websiteButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  infoContainer: {
    gap: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
    flex: 1,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mapItButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fed7aa',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 4,
  },
  mapItText: {
    fontSize: 12,
    color: '#ea580c',
    fontWeight: '500',
  },
});

export default AttractionDetailScreen;
