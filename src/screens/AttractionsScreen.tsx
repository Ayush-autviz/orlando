import React, { useState, useEffect } from 'react';
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
  Share,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  MapPin,
  ExternalLink,
  Info,
  Star,
  Sparkles,
  Share2
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

  const handleShare = async (attraction: Attraction) => {
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

  // Category data matching the web version
  const categoryData = [
    {
      id: "Unique Attractions",
      name: "Unique",
      count: getAttractionsByCategory("Unique Attractions").length,
      icon: "🎪",
      color: "#f59e0b"
    },
    {
      id: "Outdoor Adventures",
      name: "Outdoor",
      count: getAttractionsByCategory("Outdoor Adventures").length,
      icon: "🌿",
      color: "#10b981"
    },
    {
      id: "Cultural/Educational",
      name: "Cultural",
      count: getAttractionsByCategory("Cultural/Educational").length,
      icon: "🏛️",
      color: "#8b5cf6"
    },
    {
      id: "Dinner Shows",
      name: "Dinner Shows",
      count: getAttractionsByCategory("Dinner Shows").length,
      icon: "🍽️",
      color: "#3b82f6"
    }
  ];

  const totalAttractionsCount = attractionsData.length - 1;

  const renderAttractionCard = ({ item: attraction }: { item: Attraction }) => (
    <View style={styles.attractionCard}>
      {/* Card Image with Title */}
      <View style={styles.cardImageContainer}>
        <Image
          source={getImageSource(attraction.image)}
          style={styles.cardImage}
          resizeMode="cover"
        />
        
        {/* Share button in top-right */}
        <TouchableOpacity 
          style={styles.shareButton} 
          onPress={() => handleShare(attraction)}
        >
          <Share2 size={16} color="#374151" />
        </TouchableOpacity>
        
        {/* Gradient overlay */}
        <View style={styles.cardImageOverlay}>
          <View style={styles.cardImageContent}>
            <Text style={styles.cardTitle} numberOfLines={2}>{attraction.name}</Text>
            <Text style={styles.cardNeighborhood}>{attraction.neighborhood}</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContent}>
        {/* Category and Location Info */}
        <View style={styles.cardHeader}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryBadgeText}>{attraction.category}</Text>
          </View>
          <View style={styles.locationInfo}>
            <MapPin size={14} color="#6b7280" />
            <Text style={styles.locationText}>{attraction.neighborhood || "Orlando"}</Text>
          </View>
        </View>
        
        {/* Map It link - color varies based on category for better visibility */}
        <View style={styles.mapItContainer}>
          <TouchableOpacity
            style={styles.mapItButton}
            onPress={() => {
              const address = attraction.address || `${attraction.name} ${attraction.neighborhood || ''} Orlando FL`;
              const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
              Linking.openURL(url);
            }}
          >
            <MapPin size={12} color={getMapItColor(attraction.category)} />
            <Text style={[styles.mapItText, { color: getMapItColor(attraction.category) }]}>Map It</Text>
          </TouchableOpacity>
        </View>
        
        {/* Description */}
        <Text style={styles.cardDescription} numberOfLines={4}>
          {attraction.description}
        </Text>
      </View>
      
      {/* Website and Details Buttons */}
      <View style={styles.cardFooter}>
        {attraction.link ? (
          <TouchableOpacity
            style={styles.websiteButton}
            onPress={() => openWebsite(attraction.link!, attraction.name)}
          >
            <ExternalLink size={14} color="#ffffff" />
            <Text style={styles.websiteButtonText}>Website</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.noWebsiteButton}>
            <ExternalLink size={14} color="#777777" />
            <Text style={styles.noWebsiteButtonText}>No Website</Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() => openAttractionDetail(attraction)}
        >
          <Info size={14} color="#009688" />
          <Text style={styles.detailsButtonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Helper function to get Map It button color based on category
  const getMapItColor = (category: string) => {
    const categoryLower = category.toLowerCase();
    if (categoryLower.includes('dining')) return '#ea580c'; // orange-600
    if (categoryLower.includes('shopping')) return '#0d9488'; // teal-600
    if (categoryLower.includes('cultural')) return '#9333ea'; // purple-600
    if (categoryLower.includes('outdoor')) return '#16a34a'; // green-600
    if (categoryLower.includes('nightlife')) return '#4f46e5'; // indigo-600
    return '#ea580c'; // Default orange
  };

  const renderCategoryFilter = (category: any) => (
    <TouchableOpacity
      key={category.id}
      style={[
        styles.categoryFilter,
        selectedCategory === category.id && { backgroundColor: category.color }
      ]}
      onPress={() => setSelectedCategory(category.id)}
    >
      <Text style={styles.categoryIcon}>{category.icon}</Text>
      <Text style={[
        styles.categoryFilterText,
        selectedCategory === category.id && styles.categoryFilterTextActive
      ]}>
        {category.name}
      </Text>
      {/* Count badge */}
      <View style={[
        styles.categoryCount,
        selectedCategory === category.id && styles.categoryCountActive
      ]}>
        <Text style={[
          styles.categoryCountText,
          selectedCategory === category.id && { color: '#374151' }
        ]}>
          {category.count}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section - Exact match to web version */}
        <View style={styles.heroSection}>
          {/* Decorative background pattern */}
          <View style={styles.heroBackgroundPattern} />
          
          <View style={styles.heroContent}>
            {/* Title with decorative element */}
            <View style={styles.heroTitleContainer}>
              <View style={styles.heroTitle}>
                <Text style={styles.heroTitleText}>
                  ORLANDO<Text style={styles.heroTitleAccent}>ATTRACTIONS</Text>
                </Text>
              </View>
              {/* Small decorative element */}
              <View style={styles.heroTitleDecoration} />
            </View>
            
            {/* Content area */}
            <View style={styles.heroContentArea}>
              <Text style={styles.heroDescription}>
                Discover Orlando's unique attractions beyond the major theme parks.
              </Text>
              
              <View style={styles.heroTags}>
                <View style={styles.heroTag}>
                  <MapPin size={12} color="#ffffff" />
                  <Text style={styles.heroTagText}>Cultural Sites</Text>
                </View>
                <View style={styles.heroTag}>
                  <Sparkles size={12} color="#ffffff" />
                  <Text style={styles.heroTagText}>Unique Experiences</Text>
                </View>
                <View style={styles.heroTag}>
                  <Info size={12} color="#ffffff" />
                  <Text style={styles.heroTagText}>Hidden Gems</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Category filters - Exact match to web version */}
        <View style={styles.categoryFiltersContainer}>
          {/* Category counter */}
          <View style={styles.categoryCounter}>
            <Text style={styles.categoryCounterText}>
              Browse <Text style={styles.categoryCounterBold}>{totalAttractionsCount}</Text> Orlando attractions
            </Text>
          </View>
          
          {/* Category filter buttons */}
          <View style={styles.categoryFiltersWrapper}>
            <View style={styles.categoryFiltersContent}>
              {categoryData.map(renderCategoryFilter)}
            </View>
          </View>
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
            numColumns={1}
            contentContainerStyle={styles.attractionsGrid}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={styles.cardSeparator} />}
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
    backgroundColor: '#10b981', // emerald-500
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginHorizontal: 12,
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  heroBackgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    backgroundColor: '#ffffff',
    // This creates a subtle pattern effect similar to the web version
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  heroTitleContainer: {
    position: 'relative',
    marginBottom: 12,
    alignItems: 'center',
  },
  heroTitle: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    transform: [{ rotate: '-2deg' }],
    borderWidth: 1,
    borderColor: '#5eead4', // teal-200
    alignItems: 'center',
  },
  heroTitleText: {
    fontSize: Math.min(width * 0.06, 24), // Responsive font size
    fontWeight: '900',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    textAlign: 'center',
  },
  heroTitleAccent: {
    color: '#fde047', // yellow-300
  },
  heroTitleDecoration: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fbbf24', // orange-300
    opacity: 0.8,
  },
  heroContentArea: {
    alignItems: 'center',
    width: '100%',
  },
  heroDescription: {
    fontSize: Math.min(width * 0.035, 14), // Responsive font size
    color: '#ffffff',
    marginBottom: 12,
    textAlign: 'center',
    lineHeight: Math.min(width * 0.04, 18),
    paddingHorizontal: 8,
  },
  heroTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: 8,
  },
  heroTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  heroTagText: {
    fontSize: Math.min(width * 0.025, 11), // Responsive font size
    color: '#ffffff',
    fontWeight: '500',
  },
  categoryFiltersContainer: {
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  categoryCounter: {
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryCounterText: {
    fontSize: Math.min(width * 0.03, 13), // Responsive font size
    color: '#6b7280',
    textAlign: 'center',
  },
  categoryCounterBold: {
    fontWeight: '600',
  },
  categoryFiltersWrapper: {
    alignItems: 'center',
    marginHorizontal:5
  },
  categoryFiltersContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'rgba(243, 244, 246, 0.7)',
    borderRadius: 8,
    padding: 10,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    width: '100%',
  },
  categoryFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Math.min(width * 0.04, 16),
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: 'transparent',
    gap: 6,
    minWidth: 100, // Responsive minimum width
  },
  categoryIcon: {
    fontSize: Math.min(width * 0.04, 18), // Responsive icon size
  },
  categoryFilterText: {
    fontSize: Math.min(width * 0.03, 13), // Responsive font size
    fontWeight: '500',
    color: '#6b7280',
    textAlign: 'center',
  },
  categoryFilterTextActive: {
    color: '#ffffff',
  },
  categoryCount: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    minWidth: 16,
    alignItems: 'center',
  },
  categoryCountActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  categoryCountText: {
    fontSize: Math.min(width * 0.02, 9), // Responsive font size
    color: '#ffffff',
    fontWeight: '500',
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
  cardSeparator: {
    height: 20,
  },
  attractionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#d3d3d3',
  },
  cardImageContainer: {
    height: 160,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  shareButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 6,
    borderRadius: 6,
    zIndex: 10,
  },
  cardImageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 12,
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
    padding: 12,
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  categoryBadge: {
    backgroundColor: '#fed7aa',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
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
    fontSize: 12,
    color: '#6b7280',
  },
  mapItContainer: {
    marginBottom: 8,
  },
  mapItButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  mapItText: {
    fontSize: 12,
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
    flexDirection: 'row',
    gap: 8,
    padding: 12,
    paddingTop: 0,
  },
  websiteButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6b35', // var(--orlando-orange)
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 4,
    gap: 4,
  },
  websiteButtonText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '500',
  },
  noWebsiteButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 4,
    gap: 4,
  },
  noWebsiteButtonText: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '500',
  },
  detailsButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#009688', // var(--orlando-teal)
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 4,
    gap: 4,
  },
  detailsButtonText: {
    fontSize: 12,
    color: '#009688', // var(--orlando-teal)
    fontWeight: '500',
  },
});

export default AttractionsScreen;