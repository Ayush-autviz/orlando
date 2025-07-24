import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Linking,
  Dimensions,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { 
  ChevronLeft, 
  MapPin, 
  Clock, 
  ExternalLink,
  Phone,
  Globe,
  Flag,
  Star,
  CheckCircle,
  Info,
  Users
} from 'lucide-react-native';
import { getGolfCourseById, GolfCourse } from '../data/golfProviderData';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

interface RouteParams {
  courseId: string;
}

const GolfDetailScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { courseId } = route.params as RouteParams;
  const [course, setCourse] = useState<GolfCourse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (courseId) {
      const courseData = getGolfCourseById(courseId);
      setCourse(courseData || null);
      setLoading(false);
    }
  }, [courseId]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePhonePress = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleWebsitePress = (website: string) => {
    navigation.navigate('WebView' as never, {
      url: website,
      title: course?.name || 'Golf Course Website'
    } as never);
  };

  const handleMapPress = (address: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading golf course information...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!course) {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Golf course not found</Text>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Back Button */}
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButtonContainer} onPress={handleBackPress}>
            <ChevronLeft size={20} color="#6B7280" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>

        {/* Main Image */}
        <View style={styles.imageContainer}>
          <Image
            source={course.image}
            style={styles.mainImage}
            resizeMode="cover"
          />
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryBadgeText}>
              {course.category.replace('-', ' ').toUpperCase()}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <Star size={16} color="#FFD700" fill="#FFD700" />
            <Text style={styles.ratingText}>{course.rating}</Text>
          </View>
        </View>

        {/* Course Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.courseName}>{course.name}</Text>
          
          <View style={styles.locationRow}>
            <MapPin size={16} color="#6B7280" />
            <Text style={styles.neighborhoodText}>{course.neighborhood}</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.addressRow}
            onPress={() => handleMapPress(course.address)}
          >
            <Text style={styles.addressText}>{course.address}</Text>
            <ExternalLink size={14} color="#10B981" />
          </TouchableOpacity>

          <Text style={styles.description}>
            {course.longDescription || course.description}
          </Text>

          {/* Course Stats */}
          <View style={styles.statsContainer}>
            {course.par && (
              <View style={styles.statItem}>
                <Flag size={20} color="#10B981" />
                <Text style={styles.statLabel}>Par</Text>
                <Text style={styles.statValue}>{course.par}</Text>
              </View>
            )}
            {course.holes && (
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Holes</Text>
                <Text style={styles.statValue}>{course.holes}</Text>
              </View>
            )}
            {course.length && (
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Length</Text>
                <Text style={styles.statValue}>{course.length}</Text>
              </View>
            )}
          </View>

          {/* Price Range */}
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{course.priceRange}</Text>
          </View>

          {/* Hours */}
          <View style={styles.hoursContainer}>
            <Clock size={20} color="#6B7280" />
            <Text style={styles.hoursText}>{course.hours}</Text>
          </View>

          {/* Contact Info */}
          <View style={styles.contactContainer}>
            {course.phone && (
              <TouchableOpacity 
                style={styles.contactButton}
                onPress={() => handlePhonePress(course.phone!)}
              >
                <Phone size={20} color="#FFFFFF" />
                <Text style={styles.contactButtonText}>Call</Text>
              </TouchableOpacity>
            )}
            
            {course.website && (
              <TouchableOpacity 
                style={styles.contactButton}
                onPress={() => handleWebsitePress(course.website!)}
              >
                <Globe size={20} color="#FFFFFF" />
                <Text style={styles.contactButtonText}>Website</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Features */}
          {course.features && course.features.length > 0 && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Course Features</Text>
              <View style={styles.tagsContainer}>
                {course.features.map((feature, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{feature}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Amenities */}
          {course.amenities && course.amenities.length > 0 && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Amenities</Text>
              {course.amenities.map((amenity, index) => (
                <View key={index} style={styles.listItem}>
                  <CheckCircle size={16} color="#10B981" />
                  <Text style={styles.listItemText}>{amenity}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Pro Tips */}
          {course.proTips && course.proTips.length > 0 && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Pro Tips</Text>
              {course.proTips.map((tip, index) => (
                <View key={index} style={styles.listItem}>
                  <Info size={16} color="#10B981" />
                  <Text style={styles.listItemText}>{tip}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Signature Hole */}
          {course.signature && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Signature Hole</Text>
              <Text style={styles.signatureText}>{course.signature}</Text>
            </View>
          )}

          {/* Course Details */}
          {(course.designer || course.yearBuilt || course.slope) && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Course Details</Text>
              {course.designer && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Designer:</Text>
                  <Text style={styles.detailValue}>{course.designer}</Text>
                </View>
              )}
              {course.yearBuilt && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Year Built:</Text>
                  <Text style={styles.detailValue}>{course.yearBuilt}</Text>
                </View>
              )}
              {course.slope && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Slope Rating:</Text>
                  <Text style={styles.detailValue}>{course.slope}</Text>
                </View>
              )}
            </View>
          )}

          {/* Nearby Attractions */}
          {course.nearbyAttractions && course.nearbyAttractions.length > 0 && (
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Nearby Attractions</Text>
              <View style={styles.tagsContainer}>
                {course.nearbyAttractions.map((attraction, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{attraction}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    color: '#6B7280',
    marginLeft: 4,
  },
  imageContainer: {
    position: 'relative',
    height: 300,
    marginBottom: 20,
  },
  mainImage: {
    width: '100%',
    height: '100%',
  },
  categoryBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#10B981',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  categoryBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  ratingContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  courseName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  neighborhoodText: {
    fontSize: 16,
    color: '#6B7280',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  addressText: {
    fontSize: 14,
    color: '#10B981',
    flex: 1,
  },
  description: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    gap: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
  },
  statValue: {
    fontSize: 16,
    color: '#111827',
    fontWeight: 'bold',
  },
  priceContainer: {
    marginBottom: 12,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10B981',
  },
  hoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  hoursText: {
    fontSize: 14,
    color: '#6B7280',
  },
  contactContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 12,
  },
  contactButton: {
    backgroundColor: '#10B981',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    gap: 8,
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    gap: 8,
  },
  listItemText: {
    fontSize: 16,
    color: '#374151',
    flex: 1,
    lineHeight: 22,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 14,
    color: '#374151',
  },
  signatureText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    fontStyle: 'italic',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '600',
  },
  detailValue: {
    fontSize: 16,
    color: '#374151',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#6B7280',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#6B7280',
    marginBottom: 16,
  },
  backButton: {
    backgroundColor: '#10B981',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GolfDetailScreen;
