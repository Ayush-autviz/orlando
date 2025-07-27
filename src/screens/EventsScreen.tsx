import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView,
  ImageBackground 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Calendar, MapPin, ExternalLink, Star } from 'lucide-react-native';
import Header from '../components/Header';

const EventsScreen: React.FC = ({ navigation }: any) => {
  const eventCategories = [
    {
      id: 'venues',
      title: 'Orlando Venues & Events',
      description: 'Discover major entertainment venues hosting concerts, sports, and shows',
      icon: <MapPin size={24} color="#ffffff" />,
      color: ['#581c87', '#3730a3'],
      action: () => navigation.navigate('entertainment'),
    },
    {
      id: 'concerts',
      title: 'Concert Calendar',
      description: 'Find upcoming concerts at venues across Orlando',
      icon: <Star size={24} color="#ffffff" />,
      color: ['#dc2626', '#ea580c'],
      action: () => navigation.navigate('entertainment'),
    },
    {
      id: 'sports',
      title: 'Sports Events',
      description: 'Orlando Magic, Orlando City, and more sporting events',
      icon: <Calendar size={24} color="#ffffff" />,
      color: ['#059669', '#0d9488'],
      action: () => navigation.navigate('entertainment'),
    },
  ];

  const renderCategoryCard = (category: any) => (
    <TouchableOpacity
      key={category.id}
      style={styles.categoryCard}
      onPress={category.action}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={category.color}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cardGradient}
      >
        <View style={styles.cardContent}>
          <View style={styles.cardIcon}>
            {category.icon}
          </View>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>{category.title}</Text>
            <Text style={styles.cardDescription}>{category.description}</Text>
          </View>
          <ExternalLink size={20} color="#ffffff" style={styles.cardArrow} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header showDrawerButton={true} title="Live Entertainment" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <LinearGradient
          colors={['#1e40af', '#3730a3']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Orlando Live Entertainment</Text>
            <Text style={styles.heroSubtitle}>
              Discover concerts, sports events, and shows happening across Orlando's premier venues
            </Text>
          </View>
        </LinearGradient>

        {/* Categories Section */}
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Entertainment Categories</Text>
          <Text style={styles.sectionSubtitle}>
            Explore different types of live entertainment in Orlando
          </Text>
          
          <View style={styles.categoriesGrid}>
            {eventCategories.map((category) => renderCategoryCard(category))}
          </View>
        </View>

        {/* Featured Venues Preview */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Venues</Text>
          <Text style={styles.sectionSubtitle}>
            Orlando's top entertainment destinations
          </Text>
          
          <TouchableOpacity
            style={styles.venuesPreviewCard}
            onPress={() => navigation.navigate('entertainment')}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#581c87', '#3730a3']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.previewGradient}
            >
              <View style={styles.previewContent}>
                <View style={styles.previewText}>
                  <Text style={styles.previewTitle}>Orlando Venues & Events</Text>
                  <Text style={styles.previewDescription}>
                    Explore 8+ major venues including Kia Center, Dr. Phillips Center, and more
                  </Text>
                </View>
                <View style={styles.previewAction}>
                  <Text style={styles.previewActionText}>View All</Text>
                  <ExternalLink size={16} color="#ffffff" />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>
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
  scrollView: {
    flex: 1,
  },
  hero: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  heroContent: {
    alignItems: 'center',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#c7d2fe',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
  },
  categoriesSection: {
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 24,
    lineHeight: 24,
  },
  categoriesGrid: {
    gap: 16,
  },
  categoryCard: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardGradient: {
    padding: 20,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    marginRight: 16,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 20,
  },
  cardArrow: {
    marginLeft: 12,
  },
  featuredSection: {
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: '#f9fafb',
  },
  venuesPreviewCard: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  previewGradient: {
    padding: 24,
  },
  previewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  previewText: {
    flex: 1,
  },
  previewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  previewDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 20,
  },
  previewAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  previewActionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default EventsScreen; 