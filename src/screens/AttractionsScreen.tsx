import React, { useState, useMemo, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  MapPin,
  ExternalLink,
  Info,
  Star,
  Sparkles
} from 'lucide-react-native';
import Header from '../components/Header';
import { getImageSource } from '../data/imageMap';

export interface Attraction {
  id: number;
  name: string;
  category: string;
  neighborhood: string;
  description: string;
  image?: string;
  link?: string;
  hours?: string;
  price?: string;
  rating?: number;
  metaTitle?: string;
  metaDescription?: string;
  lat?: number;
  lng?: number;
  tips?: string[];
  address?: string;
  phone?: string;
}

// Import the complete attractions data from the web
import attractionsJson from '../data/attractions.json';

export const attractionsData: Attraction[] = attractionsJson.map((attraction: any) => ({
  id: attraction.id,
  name: attraction.name,
  category: attraction.category,
  neighborhood: attraction.neighborhood,
  description: attraction.description,
  image: attraction.image?.startsWith('/')
    ? `https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=90`
    : attraction.image || `https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=90`,
  link: attraction.link,
  hours: attraction.hours,
  price: attraction.price,
  rating: attraction.rating,
  lat: attraction.lat,
  lng: attraction.lng,
  metaTitle: attraction.metaTitle,
  metaDescription: attraction.metaDescription,
  address: attraction.address,
  phone: attraction.phone,
  tips: attraction.tips
}));

export const categories = [
  "Unique Attractions",
  "Outdoor Adventures",
  "Cultural/Educational",
  "Dinner Shows"
];

export const getAttractionsByCategory = (category: string): Attraction[] => {
  return attractionsData.filter(attraction => attraction.category === category);
};

export const getAttractionById = (id: number): Attraction | undefined => {
  return attractionsData.find(attraction => attraction.id === id);
};

export const getAttractionByName = (name: string): Attraction | undefined => {
  return attractionsData.find(attraction => 
    attraction.name.toLowerCase() === name.toLowerCase()
  );
};

export const searchAttractions = (query: string): Attraction[] => {
  const lowercaseQuery = query.toLowerCase();
  return attractionsData.filter(attraction =>
    attraction.name.toLowerCase().includes(lowercaseQuery) ||
    attraction.description.toLowerCase().includes(lowercaseQuery) ||
    attraction.category.toLowerCase().includes(lowercaseQuery) ||
    attraction.neighborhood.toLowerCase().includes(lowercaseQuery)
  );
};

//import { attractionsData, categories, getAttractionsByCategory, Attraction } from '../data/attractions';

const { width } = Dimensions.get('window');

const AttractionsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('Unique Attractions');


  const [filteredAttractions, setFilteredAttractions] = useState<Attraction[]>([]);

  console.log(filteredAttractions,'filetered attrctions')

  useEffect(() => {
    setFilteredAttractions(getAttractionsByCategory(selectedCategory));
  }, [selectedCategory]);

  const openWebsite = (url: string, title: string) => {
    navigation.navigate('WebView' as never, { url, title } as never);
  };

  const openAttractionDetail = (attraction: Attraction) => {
    navigation.navigate('AttractionDetail' as never, { attraction } as never);
  };

  const renderAttractionCard = ({ item: attraction }: { item: Attraction }) => (
    <TouchableOpacity
      style={styles.attractionCard}
      onPress={() => openAttractionDetail(attraction)}
      activeOpacity={0.7}
    >
      <View style={styles.cardImageContainer}>
        <Image
          source={getImageSource(attraction.image)}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.cardImageOverlay}>
          <View style={styles.cardImageContent}>
            <Text style={styles.cardTitle} numberOfLines={2}>{attraction.name}</Text>
            <Text style={styles.cardNeighborhood}>{attraction.neighborhood}</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryBadgeText}>{attraction.category}</Text>
          </View>
          <View style={styles.locationInfo}>
            <MapPin size={12} color="#6b7280" />
            <Text style={styles.locationText}>{attraction.neighborhood || "Orlando"}</Text>
          </View>
        </View>

        <Text style={styles.cardDescription} numberOfLines={2}>
          {attraction.description}
        </Text>

        <View style={styles.cardFooter}>
          {attraction.link ? (
            <TouchableOpacity
              style={styles.websiteButton}
              onPress={(e) => {
                e.stopPropagation();
                openWebsite(attraction.link!, attraction.name);
              }}
            >
              <ExternalLink size={14} color="#ffffff" />
              <Text style={styles.websiteButtonText}>Website</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.noWebsiteButton}>
              <ExternalLink size={14} color="#9ca3af" />
              <Text style={styles.noWebsiteButtonText}>No Website</Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => openAttractionDetail(attraction)}
          >
            <Info size={14} color="#ffffff" />
            <Text style={styles.detailsButtonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCategoryFilter = (category: string) => (
    <TouchableOpacity
      key={category}
      style={[
        styles.categoryFilter,
        selectedCategory === category && styles.categoryFilterActive
      ]}
      onPress={() => setSelectedCategory(category)}
    >
      <Text style={[
        styles.categoryFilterText,
        selectedCategory === category && styles.categoryFilterTextActive
      ]}>
        {category}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section - Matching ThemeParksScreen design */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <View style={styles.heroTitle}>
              <Text style={styles.heroTitleText}>
                ORLANDO<Text style={styles.heroTitleAccent}>ATTRACTIONS</Text>
              </Text>
            </View>
            <Text style={styles.heroDescription}>
              Discover Orlando's unique attractions beyond the major theme parks.
            </Text>
            <View style={styles.heroTags}>
              <View style={styles.heroTag}>
                <View style={styles.heroTagContent}>
                  <MapPin size={14} color="#ffffff" />
                  <Text style={styles.heroTagText}>Cultural Sites</Text>
                </View>
              </View>
              <View style={styles.heroTag}>
                <View style={styles.heroTagContent}>
                  <Sparkles size={14} color="#ffffff" />
                  <Text style={styles.heroTagText}>Unique Experiences</Text>
                </View>
              </View>
              <View style={styles.heroTag}>
                <View style={styles.heroTagContent}>
                  <Info size={14} color="#ffffff" />
                  <Text style={styles.heroTagText}>Hidden Gems</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Category Filter Tabs */}
        <View style={styles.categoryTabsContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryTabsContent}
            style={styles.categoryTabsScrollView}
          >
            {categories?.filter(cat => cat !== 'All').map(renderCategoryFilter)}
          </ScrollView>
        </View>

        {/* Results Count */}
        <View style={styles.resultsSection}>
          <Text style={styles.resultsText}>
            Showing {filteredAttractions.length} attractions in {selectedCategory}
          </Text>
        </View>

        {/* Attractions Grid */}
        <View style={styles.attractionsContainer}>
          <FlatList
            data={filteredAttractions}
            renderItem={renderAttractionCard}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.attractionsGrid}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
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
  heroSection: {
    backgroundColor: '#0d9488',
    paddingHorizontal: 20,
    paddingVertical: 24,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 20,
    borderRadius: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  },
  heroTitle: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    transform: [{ rotate: '-1deg' }],
  },
  heroTitleText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  heroTitleAccent: {
    color: '#fde047',
  },
  heroDescription: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 16,
    maxWidth: width - 80,
  },
  heroTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  heroTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  heroTagContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  heroTagText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '500',
  },
  categoryTabsContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoryTabsScrollView: {
    flexGrow: 0,
  },
  categoryTabsContent: {
    paddingHorizontal: 4,
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryFilter: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    backgroundColor: '#f3f4f6',
    borderWidth: 2,
    borderColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryFilterActive: {
    backgroundColor: '#0891b2',
    borderColor: '#0891b2',
  },
  categoryFilterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    textAlign: 'center',
  },
  categoryFilterTextActive: {
    color: '#ffffff',
  },
  attractionsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  resultsSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  resultsText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    fontWeight: '500',
  },
  attractionsGrid: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 0,
  },
  attractionCard: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderWidth: 0.5,
    borderColor: '#d3d3d3',
    elevation: 8,
    overflow: 'hidden',
    maxWidth: (width - 64) / 2, // Responsive width
  },
  cardImageContainer: {
    height: 150,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardImageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  cardImageContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  cardNeighborhood: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  cardContent: {
    padding: 10,
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 8,
    gap: 6,
  },
  categoryBadge: {
    backgroundColor: '#fed7aa',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  categoryBadgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#ea580c',
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 11,
    color: '#6b7280',
    fontWeight: '500',
  },
  cardDescription: {
    fontSize: 12,
    color: '#6b7280',
    lineHeight: 18,
    marginBottom: 16,
    flex: 1,
  },
  cardFooter: {
    flexDirection: 'column',
    gap: 8,
  },
  websiteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0891b2',
    paddingVertical: 10,
    borderRadius: 8,
    gap: 6,
  },
  websiteButtonText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
  },
  noWebsiteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
    paddingVertical: 10,
    borderRadius: 8,
    gap: 6,
  },
  noWebsiteButtonText: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: '600',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ea580c',
    paddingVertical: 10,
    borderRadius: 8,
    gap: 6,
  },
  detailsButtonText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default AttractionsScreen;