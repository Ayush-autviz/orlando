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
  Modal,
  Share,
  Linking,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { 
  Flag, 
  MapPin, 
  Clock, 
  Star,
  ExternalLink,
  Phone,
  Globe,
  Club,
  Compass,
  ThumbsUp,
  X,
  ChevronRight,
  ArrowRight,
  Share2
} from 'lucide-react-native';
import { GOLF_COURSES, GolfCourse, getGolfCoursesByCategory } from '../data/golfProviderData';
import Header from '../components/Header';

const { width, height } = Dimensions.get('window');

type FilterCategory = 'all' | 'resort' | 'public' | 'private' | 'semi-private';

const GolfScreen: React.FC = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<FilterCategory>('all');
  const [filteredCourses, setFilteredCourses] = useState<GolfCourse[]>(GOLF_COURSES);
  const [selectedCourse, setSelectedCourse] = useState<GolfCourse | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({});
  const [detailImageIndex, setDetailImageIndex] = useState(0);

  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredCourses(GOLF_COURSES);
    } else {
      setFilteredCourses(getGolfCoursesByCategory(activeTab));
    }
  }, [activeTab]);

  const handleCoursePress = (course: GolfCourse) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    setDetailImageIndex(0);
  };

  const handleWebsitePress = (course: GolfCourse) => {
    if (course.website) {
      setSelectedCourse(null);
      setIsModalOpen(false);
      navigation.navigate('WebView' as never, {
        url: course.website,
        title: `${course.name} Website`
      } as never);
    }
  };

  const handleMapPress = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    Linking.openURL(mapUrl);
  };

  const handleShare = async (course: GolfCourse) => {
    try {
      const shareUrl = `https://www.awesomeorlando.com/golf/${course.id}`;
      const shareTitle = `${course.name} | Orlando Golf Course`;
      const shareMessage = `Check out this amazing ${getCategoryName(course.category).toLowerCase()} in ${course.neighborhood}! ${course.description.substring(0, 100)}... ${shareUrl}`;

      await Share.share({
        message: shareMessage,
        url: shareUrl,
        title: shareTitle,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const scrollToNextImage = (courseId: string) => {
    const course = GOLF_COURSES.find(c => c.id === courseId);
    if (!course || !course.gallery) return;
    
    const currentIndex = currentImageIndex[courseId] || 0;
    const nextIndex = (currentIndex + 1) % course.gallery.length;
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [courseId]: nextIndex
    }));
  };

  const scrollToNextDetailImage = () => {
    if (!selectedCourse || !selectedCourse.gallery) return;
    
    const nextIndex = (detailImageIndex + 1) % selectedCourse.gallery.length;
    setDetailImageIndex(nextIndex);
  };

  const getCategoryColor = (category: GolfCourse['category']) => {
    switch (category) {
      case 'resort':
        return { bg: '#E5E7EB', text: '#7C2D12' }; // violet equivalent
      case 'public':
        return { bg: '#DCFCE7', text: '#166534' }; // green
      case 'private':
        return { bg: '#FEF3C7', text: '#92400E' }; // amber
      case 'semi-private':
        return { bg: '#DBEAFE', text: '#1E40AF' }; // blue
      default:
        return { bg: '#F3F4F6', text: '#374151' }; // gray
    }
  };

  const getCategoryName = (category: GolfCourse['category']) => {
    switch (category) {
      case 'resort':
        return 'Resort Course';
      case 'public':
        return 'Public Course';
      case 'private':
        return 'Private Club';
      case 'semi-private':
        return 'Semi-Private';
      default:
        return category;
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All Courses', count: GOLF_COURSES.length },
    { id: 'resort', label: 'Resort', count: getGolfCoursesByCategory('resort').length },
    { id: 'public', label: 'Public', count: getGolfCoursesByCategory('public').length },
    { id: 'semi-private', label: 'Semi-Private', count: getGolfCoursesByCategory('semi-private').length },
    { id: 'private', label: 'Private', count: getGolfCoursesByCategory('private').length },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#064E3B" barStyle="light-content" />
      <Header showDrawerButton={true} title="" />
      
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Hero Section - Exactly like web */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <View style={styles.heroLeft}>
              <View style={styles.headerBadges}>
                <View style={styles.badgeContainer}>
                  <Club width={12} height={12} color="#6EE7B7" />
                  <Text style={styles.badgeText}>RESORT COURSES</Text>
                </View>
                <Text style={styles.separator}>•</Text>
                <View style={styles.badgeContainer}>
                  <Flag width={12} height={12} color="#6EE7B7" />
                  <Text style={styles.badgeText}>PUBLIC COURSES</Text>
                </View>
                <Text style={styles.separator}>•</Text>
                <View style={styles.badgeContainer}>
                  <Star width={12} height={12} color="#6EE7B7" />
                  <Text style={styles.badgeText}>PRIVATE CLUBS</Text>
                </View>
              </View>
              
              <View style={styles.titleContainer}>
                <Text style={styles.heroTitle}>ORLANDO GOLF</Text>
                <View style={styles.titleUnderline} />
              </View>
              
              <Text style={styles.heroSubtitle}>
                Explore world-class golf in the Sunshine State!
              </Text>
            </View>
            
            <View style={styles.heroRight}>
              <LinearGradient
                colors={['#059669', '#22C55E']} // emerald-600 to green-500
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.decorativeBar}
              >
                <View style={styles.decorativePattern} />
              </LinearGradient>
            </View>
          </View>
        </View>

        {/* Main Content Section */}
        <View style={styles.mainContent}>
          {/* Section Header */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>World-Class Golf Destinations</Text>
            <Text style={styles.sectionSubtitle}>
              From PGA Tour venues to hidden gems, discover the perfect course for your next Orlando golf adventure.
            </Text>
            
                         {/* Filter Tabs - Exactly like web */}
             <View style={styles.tabsContainer}>
               <View style={[styles.tabsGrid, width < 640 && styles.tabsGridMobile]}>
                 {filterTabs.map((tab) => (
                   <TouchableOpacity
                     key={tab.id}
                     style={[
                       styles.tab,
                       width < 640 && styles.tabMobile,
                       activeTab === tab.id && styles.activeTab
                     ]}
                     onPress={() => setActiveTab(tab.id as FilterCategory)}
                   >
                     <Text style={[
                       styles.tabText,
                       width < 640 && styles.tabTextMobile,
                       activeTab === tab.id && styles.activeTabText
                     ]}>
                       {tab.label}
                     </Text>
                   </TouchableOpacity>
                 ))}
               </View>
             </View>
          </View>

          {/* Golf Courses Grid */}
          <View style={styles.coursesGrid}>
            {filteredCourses.map(course => (
              <TouchableOpacity
                key={course.id}
                style={styles.courseCard}
                onPress={() => handleCoursePress(course)}
                activeOpacity={0.9}
              >
                {/* Image Section with Gallery */}
                <View style={styles.imageContainer}>
                  <Image
                    source={course.gallery && course.gallery.length > 0 
                      ? course.gallery[currentImageIndex[course.id] || 0]
                      : course.image
                    }
                    style={styles.courseImage}
                    resizeMode="cover"
                  />
                  <View style={styles.imageOverlay} />
                  
                  {/* Gallery navigation */}
                  {course.gallery && course.gallery.length > 1 && (
                    <TouchableOpacity
                      style={styles.nextImageButton}
                      onPress={(e) => {
                        e.stopPropagation();
                        scrollToNextImage(course.id);
                      }}
                    >
                      <ArrowRight width={16} height={16} color="#FFFFFF" />
                    </TouchableOpacity>
                  )}
                  
                  {/* Dot indicators */}
                  {course.gallery && course.gallery.length > 1 && (
                    <View style={styles.dotIndicators}>
                      {course.gallery.map((_, index) => (
                        <View 
                          key={index}
                          style={[
                            styles.dot,
                            index === (currentImageIndex[course.id] || 0) && styles.activeDot
                          ]}
                        />
                      ))}
                    </View>
                  )}
                  
                  {/* Category Badge */}
                  <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(course.category).bg }]}>
                    <Text style={[styles.categoryBadgeText, { color: getCategoryColor(course.category).text }]}>
                      {getCategoryName(course.category)}
                    </Text>
                  </View>

                  {/* Share Button */}
                  <TouchableOpacity
                    style={styles.shareButton}
                    onPress={(e) => {
                      e.stopPropagation();
                      handleShare(course);
                    }}
                  >
                    <Share2 width={16} height={16} color="#10B981" />
                  </TouchableOpacity>

                  {/* Course Info Overlay */}
                  <View style={styles.courseInfoOverlay}>
                    <Text style={styles.courseNameOverlay} numberOfLines={2}>
                      {course.name}
                    </Text>
                    <View style={styles.locationOverlay}>
                      <MapPin width={12} height={12} color="rgba(255,255,255,0.9)" />
                      <Text style={styles.addressOverlay} numberOfLines={1}>
                        {course.address}
                      </Text>
                    </View>
                    <View style={styles.neighborhoodOverlay}>
                      <Compass width={12} height={12} color="rgba(255,255,255,0.8)" />
                      <Text style={styles.neighborhoodText}>
                        {course.neighborhood}
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Card Content */}
                <View style={styles.cardContent}>
                  <View style={styles.hoursContainer}>
                    <Clock width={12} height={12} color="#10B981" />
                    <Text style={styles.hoursText}>
                      {course.hours.split(',')[0]}
                    </Text>
                  </View>
                  
                  <View style={styles.courseDetails}>
                    <Text style={styles.courseDetailsText}>
                      <Text style={styles.boldText}>Par:</Text> {course.par || 'N/A'} | <Text style={styles.boldText}>Holes:</Text> {course.holes}
                    </Text>
                    <View style={styles.courseActions}>
                      <TouchableOpacity
                        style={styles.mapItButton}
                        onPress={(e) => {
                          e.stopPropagation();
                          handleMapPress(course.address);
                        }}
                      >
                        <MapPin width={12} height={12} color="#10B981" />
                        <Text style={styles.mapItText}>Map It</Text>
                      </TouchableOpacity>
                      {course.website && (
                        <TouchableOpacity
                          style={styles.websiteButton}
                          onPress={(e) => {
                            e.stopPropagation();
                            handleWebsitePress(course);
                          }}
                        >
                          <Globe width={12} height={12} color="#FFFFFF" />
                          <Text style={styles.websiteText}>Website</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>

                  <Text style={styles.description} numberOfLines={3}>
                    {course.description}
                  </Text>

                  {/* Features */}
                  <View style={styles.featuresContainer}>
                    {course.features.map((feature, index) => (
                      <View key={index} style={styles.featureBadge}>
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>

                  <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() => handleCoursePress(course)}
                  >
                    <Text style={styles.detailsButtonText}>View Course Details</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Detail Modal - Exactly like web */}
      <Modal
        visible={isModalOpen}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setIsModalOpen(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          {selectedCourse && (
            <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
              {/* Modal Header Image */}
              <View style={styles.modalImageContainer}>
                <Image
                  source={selectedCourse.gallery && selectedCourse.gallery.length > 0 
                    ? selectedCourse.gallery[detailImageIndex]
                    : selectedCourse.image
                  }
                  style={styles.modalImage}
                  resizeMode="cover"
                />
                <View style={styles.modalImageOverlay} />

                {/* Image navigation */}
                {selectedCourse.gallery && selectedCourse.gallery.length > 1 && (
                  <TouchableOpacity
                    style={styles.modalNextButton}
                    onPress={scrollToNextDetailImage}
                  >
                    <ArrowRight width={20} height={20} color="#FFFFFF" />
                  </TouchableOpacity>
                )}

                {/* Dot indicators */}
                {selectedCourse.gallery && selectedCourse.gallery.length > 1 && (
                  <View style={styles.modalDotIndicators}>
                    {selectedCourse.gallery.map((_, index) => (
                      <View 
                        key={index}
                        style={[
                          styles.modalDot,
                          index === detailImageIndex && styles.modalActiveDot
                        ]}
                      />
                    ))}
                  </View>
                )}

                {/* Modal Course Info Overlay */}
                <View style={styles.modalInfoOverlay}>
                  <View style={[styles.modalCategoryBadge, { backgroundColor: getCategoryColor(selectedCourse.category).bg }]}>
                    <Text style={[styles.modalCategoryText, { color: getCategoryColor(selectedCourse.category).text }]}>
                      {getCategoryName(selectedCourse.category)}
                    </Text>
                  </View>
                  <Text style={styles.modalCourseName}>
                    {selectedCourse.name}
                  </Text>
                  <View style={styles.modalLocationInfo}>
                    <MapPin width={16} height={16} color="rgba(255,255,255,0.9)" />
                    <Text style={styles.modalAddress}>
                      {selectedCourse.address}
                    </Text>
                  </View>
                  <View style={styles.modalNeighborhoodInfo}>
                    <Compass width={12} height={12} color="rgba(255,255,255,0.7)" />
                    <Text style={styles.modalNeighborhood}>
                      {selectedCourse.neighborhood}
                    </Text>
                  </View>
                </View>

                {/* Modal Action Buttons */}
                <View style={styles.modalActionButtons}>
                  <TouchableOpacity
                    style={styles.modalShareButton}
                    onPress={() => handleShare(selectedCourse)}
                  >
                    <Share2 width={16} height={16} color="#10B981" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={() => setIsModalOpen(false)}
                  >
                    <X width={20} height={20} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Modal Content */}
              <View style={styles.modalBody}>
                {/* Features */}
                <View style={styles.modalFeaturesContainer}>
                  {selectedCourse.features.map((feature, index) => (
                    <View key={index} style={styles.modalFeatureBadge}>
                      <Text style={styles.modalFeatureText}>{feature}</Text>
                    </View>
                  ))}
                </View>

                {/* Info Cards */}
                <View style={styles.infoCardsContainer}>
                  <View style={styles.infoCard}>
                    <View style={styles.infoCardHeader}>
                      <Clock width={16} height={16} color="#10B981" />
                      <Text style={styles.infoCardTitle}>Hours</Text>
                    </View>
                    <Text style={styles.infoCardContent}>{selectedCourse.hours}</Text>
                  </View>

                  <View style={styles.infoCard}>
                    <View style={styles.infoCardHeader}>
                      <Club width={16} height={16} color="#10B981" />
                      <Text style={styles.infoCardTitle}>Course Details</Text>
                    </View>
                    <Text style={styles.infoCardContent}>
                      <Text style={styles.boldText}>Par:</Text> {selectedCourse.par || 'N/A'}{'\n'}
                      <Text style={styles.boldText}>Holes:</Text> {selectedCourse.holes}
                    </Text>
                  </View>

                  <View style={styles.infoCard}>
                    <View style={styles.infoCardHeader}>
                      <Phone width={16} height={16} color="#10B981" />
                      <Text style={styles.infoCardTitle}>Contact</Text>
                    </View>
                    {selectedCourse.phone && (
                      <TouchableOpacity onPress={() => Linking.openURL(`tel:${selectedCourse.phone}`)}>
                        <Text style={[styles.infoCardContent, styles.phoneLink]}>
                          {selectedCourse.phone}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>

                {/* About Section */}
                <View style={styles.aboutSection}>
                  <Text style={styles.aboutTitle}>About {selectedCourse.name}</Text>
                  <Text style={styles.aboutText}>
                    {selectedCourse.longDescription || selectedCourse.description}
                  </Text>
                </View>

                {/* Amenities */}
                {selectedCourse.amenities && selectedCourse.amenities.length > 0 && (
                  <View style={styles.amenitiesSection}>
                    <Text style={styles.amenitiesTitle}>Amenities & Features</Text>
                    <View style={styles.amenitiesGrid}>
                      {selectedCourse.amenities.map((amenity, index) => (
                        <View key={index} style={styles.amenityItem}>
                          <ThumbsUp width={16} height={16} color="#10B981" />
                          <Text style={styles.amenityText}>{amenity}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                )}

                {/* Action Buttons */}
                <View style={styles.modalActions}>
                  <TouchableOpacity
                    style={styles.modalWebsiteButton}
                    onPress={() => handleWebsitePress(selectedCourse)}
                  >
                    <Globe width={16} height={16} color="#FFFFFF" />
                    <Text style={styles.modalActionText}>Visit Official Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalMapButton}
                    onPress={() => handleMapPress(selectedCourse.address)}
                  >
                    <MapPin width={16} height={16} color="#FFFFFF" />
                    <Text style={styles.modalActionText}>Map It</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.modalCloseButton2}
                  onPress={() => setIsModalOpen(false)}
                >
                  <Text style={styles.modalCloseText}>Close</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </SafeAreaView>
      </Modal>
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
  
  // Hero Section - Exactly like web
  heroSection: {
    backgroundColor: '#064E3B', // emerald-900
    paddingTop: 25, // pt-10
    paddingBottom: 8, // pb-2
    borderBottomWidth: 1,
    borderBottomColor: '#047857', // emerald-800
  },
  heroContent: {
    maxWidth: width - 32,
    marginHorizontal: 16,
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  heroLeft: {
    //flex: 3, // sm:w-3/5 (60%)
  },
  headerBadges: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 6, // mb-1.5
    gap: 2,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  badgeText: {
    fontSize: 11, // text-xs
    fontWeight: '500', // font-medium
    color: '#6EE7B7', // text-emerald-400
  },
  separator: {
    color: '#6EE7B7',
    fontSize: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  heroTitle: {
    fontSize: width > 640 ? 30 : 24, // text-2xl sm:text-3xl
    fontWeight: '800', // font-bold
    color: '#FFFFFF', // text-white
    letterSpacing: -0.5, // tracking-tight
    marginRight: 12,
  },
  titleUnderline: {
    height: 2, // h-0.5
    width: 40, // w-10
    backgroundColor: '#10B981', // bg-emerald-500
    borderRadius: 2,
    display: width > 640 ? 'flex' : 'none', // hidden sm:block
  },
  heroSubtitle: {
    fontSize: 14, // text-sm
    color: '#D1D5DB', // text-gray-300
    marginTop: 4, // mt-1
  },
  heroRight: {
    flex: 2, // sm:w-2/5 (40%)
    marginTop: width > 640 ? 0 : 12, // mt-3 sm:mt-0
  },
  decorativeBar: {
    height: width > 640 ? 32 : 24, // h-6 sm:h-8
    borderRadius: 4,
    opacity: 0.9,
    overflow: 'hidden',
    marginBottom: 10,
  },
  decorativePattern: {
    height: '100%',
    width: '100%',
    opacity: 0.2,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },

  // Main Content
  mainContent: {
    paddingVertical: 32,
    backgroundColor: '#FFFFFF',
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: 6,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1E293B', // slate-800
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#64748B', // slate-600
    textAlign: 'center',
    maxWidth: 300,
    marginBottom: 24,
    lineHeight: 20,
  },

    // Filter Tabs - Exactly like web
  tabsContainer: {
    width: '100%',
    maxWidth: width < 640 ? width - 32 : 1024, // max-w-4xl, responsive width
    alignSelf: 'center',
    paddingHorizontal: width < 640 ? 16 : 0,
  },
  tabsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32, // mb-8
    backgroundColor: '#F8FAFC', // bg-slate-50 (TabsList background)
    borderRadius: 8,
    padding: 4,
  },
  tabsGridMobile: {
    gap: 4,
  },
    tab: {
    flex: 0,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    marginVertical: 2,
  },
  tabMobile: {
    paddingHorizontal: 8,
    flexShrink: 0,
  },
  activeTab: {
    backgroundColor: '#FFFFFF', // Active tab background
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  tabText: {
    fontSize: width < 640 ? 10 : 10,
    fontWeight: '500',
    color: '#64748B', // text-slate-600
    textAlign: 'center',
    flexShrink: 0,
  },
  tabTextMobile: {
    fontSize: 13,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#0F172A', // text-slate-900 for active
    fontWeight: '600',
  },

  // Course Grid
  coursesGrid: {
    paddingHorizontal: 16,
    gap: 24,
  },
  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },

  // Image Section
  imageContainer: {
    position: 'relative',
    height: 224, // h-56 equivalent
    overflow: 'hidden',
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
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.0)',
    // Gradient from black/80 to transparent
  },
  nextImageButton: {
    position: 'absolute',
    top: '50%',
    right: 8,
    transform: [{ translateY: -16 }],
    width: 32,
    height: 32,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  dotIndicators: {
    position: 'absolute',
    bottom: 64,
    right: 12,
    flexDirection: 'row',
    gap: 4,
    zIndex: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
  },
  categoryBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    zIndex: 10,
  },
  categoryBadgeText: {
    fontSize: 10,
    fontWeight: '500',
  },
  shareButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  courseInfoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  courseNameOverlay: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  locationOverlay: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 2,
  },
  addressOverlay: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500',
    flex: 1,
  },
  neighborhoodOverlay: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  neighborhoodText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
  },

  // Card Content
  cardContent: {
    padding: 20,
  },
  hoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 12,
  },
  hoursText: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '500',
  },
  courseDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  courseDetailsText: {
    fontSize: 14,
    color: '#334155', // slate-700
  },
  boldText: {
    fontWeight: '500',
  },
  courseActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  mapItButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  mapItText: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '500',
  },
  websiteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#10B981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  websiteText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    color: '#64748B', // slate-600
    lineHeight: 20,
    marginBottom: 16,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 16,
  },
  featureBadge: {
    backgroundColor: '#ECFDF5', // emerald-50
    borderColor: '#D1FAE5', // emerald-200
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  featureText: {
    fontSize: 12,
    color: '#047857', // emerald-700
  },
  detailsButton: {
    backgroundColor: '#10B981',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  detailsButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },

  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalContent: {
    flex: 1,
  },
  modalImageContainer: {
    position: 'relative',
    height: 350,
    overflow: 'hidden',
  },
  modalImage: {
    width: '100%',
    height: '100%',
  },
  modalImageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalNextButton: {
    position: 'absolute',
    top: '50%',
    right: 16,
    transform: [{ translateY: -20 }],
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDotIndicators: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    flexDirection: 'row',
    gap: 6,
  },
  modalDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  modalActiveDot: {
    backgroundColor: '#FFFFFF',
  },
  modalInfoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
  },
  modalCategoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 8,
  },
  modalCategoryText: {
    fontSize: 12,
    fontWeight: '500',
  },
  modalCourseName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  modalLocationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  modalAddress: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    flex: 1,
  },
  modalNeighborhoodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  modalNeighborhood: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
  },
  modalActionButtons: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    gap: 8,
    zIndex: 10,
  },
  modalShareButton: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCloseButton: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Modal Body
  modalBody: {
    padding: 24,
  },
  modalFeaturesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginBottom: 24,
  },
  modalFeatureBadge: {
    backgroundColor: '#ECFDF5',
    borderColor: '#D1FAE5',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  modalFeatureText: {
    fontSize: 12,
    color: '#047857',
  },

  // Info Cards
  infoCardsContainer: {
    gap: 16,
    marginBottom: 24,
  },
  infoCard: {
    backgroundColor: '#F8FAFC', // slate-50
    padding: 16,
    borderRadius: 12,
  },
  infoCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  infoCardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0F172A', // slate-900
  },
  infoCardContent: {
    fontSize: 14,
    color: '#64748B', // slate-600
    lineHeight: 20,
  },
  phoneLink: {
    color: '#10B981',
  },

  // About Section
  aboutSection: {
    marginBottom: 24,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#0F172A',
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },

  // Amenities
  amenitiesSection: {
    marginBottom: 32,
  },
  amenitiesTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#0F172A',
    marginBottom: 12,
  },
  amenitiesGrid: {
    gap: 8,
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  amenityText: {
    fontSize: 14,
    color: '#64748B',
    flex: 1,
  },

  // Modal Actions
  modalActions: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  modalWebsiteButton: {
    flex: 1,
    backgroundColor: '#10B981',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: 8,
  },
  modalMapButton: {
    flex: 1,
    backgroundColor: '#10B981',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: 8,
  },
  modalActionText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  modalCloseButton2: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalCloseText: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default GolfScreen;
