import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
  Flag, 
  MapPin, 
  Clock, 
  Star,
  ExternalLink,
  Phone,
  Globe
} from 'lucide-react-native';
import { GOLF_COURSES, GolfCourse, getGolfCoursesByCategory } from '../data/golfProviderData';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

type FilterCategory = 'all' | 'resort' | 'public' | 'private' | 'semi-private';

const GolfScreen: React.FC = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<FilterCategory>('all');
  const [filteredCourses, setFilteredCourses] = useState<GolfCourse[]>(GOLF_COURSES);

  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredCourses(GOLF_COURSES);
    } else {
      setFilteredCourses(getGolfCoursesByCategory(activeTab));
    }
  }, [activeTab]);

  const handleCoursePress = (course: GolfCourse) => {
    navigation.navigate('GolfDetail' as never, { courseId: course.id } as never);
  };

  const handleWebsitePress = (course: GolfCourse) => {
    if (course.website) {
      navigation.navigate('WebView' as never, {
        url: course.website,
        title: course.name
      } as never);
    }
  };

  const handlePhonePress = (phone: string) => {
    // Handle phone call
  };

  const filterTabs = [
    { id: 'all', label: 'All Courses', count: GOLF_COURSES.length },
    { id: 'resort', label: 'Resort', count: getGolfCoursesByCategory('resort').length },
    { id: 'public', label: 'Public', count: getGolfCoursesByCategory('public').length },
    { id: 'semi-private', label: 'Semi Private', count: getGolfCoursesByCategory('semi-private').length },
    { id: 'private', label: 'Private', count: getGolfCoursesByCategory('private').length },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.headerWrapper}>
            <View style={styles.headerGradient} />
            <Text style={styles.headerText}>
              ORLANDO<Text style={styles.headerAccent}>GOLF</Text>
            </Text>
            <View style={styles.headerUnderline} />
          </View>
        </View>

        {/* Filter Tabs */}
        <View style={styles.tabsContainer}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabsScrollContainer}
          >
            {filterTabs.map((tab) => (
              <TouchableOpacity
                key={tab.id}
                style={[
                  styles.tab,
                  activeTab === tab.id && styles.activeTab
                ]}
                onPress={() => setActiveTab(tab.id as FilterCategory)}
              >
                <Text style={[
                  styles.tabText,
                  activeTab === tab.id && styles.activeTabText
                ]}>
                  {tab.label}
                </Text>
                <View style={[
                  styles.tabBadge,
                  activeTab === tab.id && styles.activeTabBadge
                ]}>
                  <Text style={[
                    styles.tabBadgeText,
                    activeTab === tab.id && styles.activeTabBadgeText
                  ]}>
                    {tab.count}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Golf Courses Grid */}
        <View style={styles.coursesContainer}>
          {filteredCourses.map(course => (
            <TouchableOpacity
              key={course.id}
              style={styles.courseCard}
              onPress={() => handleCoursePress(course)}
              activeOpacity={0.9}
            >
              {/* Image Section */}
              <View style={styles.imageContainer}>
                <Image
                  source={course.image}
                  style={styles.courseImage}
                  resizeMode="cover"
                />
                <View style={styles.imageOverlay} />
                
                {/* Category Badge */}
                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryBadgeText}>
                    {course.category.replace('-', ' ').toUpperCase()}
                  </Text>
                </View>

                {/* Rating */}
                <View style={styles.ratingContainer}>
                  <Star size={14} color="#FFD700" fill="#FFD700" />
                  <Text style={styles.ratingText}>{course.rating}</Text>
                </View>
              </View>

              {/* Content Section */}
              <View style={styles.contentContainer}>
                <Text style={styles.courseName} numberOfLines={2}>
                  {course.name}
                </Text>
                
                <View style={styles.locationContainer}>
                  <MapPin size={16} color="#6B7280" />
                  <Text style={styles.neighborhoodText} numberOfLines={1}>
                    {course.neighborhood}
                  </Text>
                </View>

                <Text style={styles.descriptionText} numberOfLines={3}>
                  {course.description}
                </Text>

                {/* Course Info */}
                <View style={styles.courseInfoContainer}>
                  {course.par && (
                    <View style={styles.infoItem}>
                      <Flag size={14} color="#10B981" />
                      <Text style={styles.infoText}>Par {course.par}</Text>
                    </View>
                  )}
                  {course.holes && (
                    <View style={styles.infoItem}>
                      <Text style={styles.infoText}>{course.holes} Holes</Text>
                    </View>
                  )}
                </View>

                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>{course.priceRange}</Text>
                </View>

                {/* Action Buttons */}
                <View style={styles.actionButtonsContainer}>
                  {course.website && (
                    <TouchableOpacity
                      style={styles.actionButton}
                      onPress={(e) => {
                        e.stopPropagation();
                        handleWebsitePress(course);
                      }}
                    >
                      <Globe size={16} color="#FFFFFF" />
                      <Text style={styles.actionButtonText}>Website</Text>
                    </TouchableOpacity>
                  )}
                  
                  <TouchableOpacity
                    style={[styles.actionButton, styles.detailsButton]}
                    onPress={() => handleCoursePress(course)}
                  >
                    <ExternalLink size={16} color="#FFFFFF" />
                    <Text style={styles.actionButtonText}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {filteredCourses.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No golf courses found in this category</Text>
          </View>
        )}
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
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
    paddingHorizontal: 12,
  },
  headerWrapper: {
    position: 'relative',
    alignItems: 'center',
  },
  headerGradient: {
    position: 'absolute',
    top: -4,
    left: -4,
    right: -4,
    bottom: -4,
    borderRadius: 8,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
  },
  headerText: {
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 2,
    color: '#10B981',
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  headerAccent: {
    color: '#059669',
  },
  headerUnderline: {
    height: 2,
    width: 96,
    marginTop: 8,
    backgroundColor: '#10B981',
  },
  tabsContainer: {
    marginBottom: 24,
  },
  tabsScrollContainer: {
    paddingHorizontal: 16,
    gap: 12,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    gap: 8,
  },
  activeTab: {
    backgroundColor: '#10B981',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  tabBadge: {
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    minWidth: 24,
    alignItems: 'center',
  },
  activeTabBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  tabBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6B7280',
  },
  activeTabBadgeText: {
    color: '#FFFFFF',
  },
  coursesContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 200,
  },
  courseImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  categoryBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  ratingContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
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
    fontSize: 12,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 16,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 4,
  },
  neighborhoodText: {
    fontSize: 14,
    color: '#6B7280',
    flex: 1,
  },
  descriptionText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 12,
  },
  courseInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
  },
  priceContainer: {
    marginBottom: 12,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10B981',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    backgroundColor: '#10B981',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    flex: 1,
    justifyContent: 'center',
    gap: 4,
  },
  detailsButton: {
    backgroundColor: '#059669',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  emptyContainer: {
    paddingVertical: 48,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#6B7280',
  },
});

export default GolfScreen;
