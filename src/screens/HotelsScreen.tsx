import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Hotel, HotelFilterType } from '../types/Hotel';
import { getAllHotels, getHotelsBySubcategory, getFeaturedHotels } from '../data/hotelDataHandler';
import HotelCard from '../components/HotelCard';
import HotelDetailModal from '../components/HotelDetailModal';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

interface HotelFilter {
  id: HotelFilterType;
  name: string;
  description: string;
}

const hotelFilters: HotelFilter[] = [
  {
    id: 'all',
    name: 'All Accommodations',
    description: 'Browse all available hotels and resorts',
  },
  {
    id: 'luxury',
    name: 'Luxury Hotels',
    description: 'Premium accommodations with exceptional service',
  },
  {
    id: 'by-location',
    name: 'Hotels by Location',
    description: 'Find hotels near theme parks and attractions',
  },
];

// Match exact location mapping from web version
const locationMap: { [key: string]: string[] } = {
  'Disney Area': ['Lake Buena Vista', 'Disney Springs', 'Buena Vista', 'Disney World', 'Walt Disney World', 'Disney', 'Kissimmee', 'Celebration', 'Old Town Kissimmee', 'Reunion Resort', 'Howey-in-the-Hills'],
  'Universal Area': ['Universal Orlando Resort', 'Universal Boulevard', 'Universal Studios', 'Universal', 'Orlando Universal', 'Universal Orlando'],
  'SeaWorld Area': ['SeaWorld Orlando', 'Sea World Drive', 'SeaWorld', 'Seaworld', 'Sea World'],
  'International Drive': ['International Drive', 'I-Drive', 'I Drive', 'IDrive', 'ICON Park', 'Convention Center'],
  'Downtown Orlando': ['Downtown Orlando', 'Downtown', 'Orlando Downtown', 'Downtown Area'],
  'Airport Area': ['Airport', 'MCO', 'Orlando International Airport'],
  'Winter Park': ['Winter Park', 'Alfond Inn']
};

// Helper functions to match web version logic exactly
const isUniversalHotel = (hotel: Hotel): boolean => {
  return hotel.name.includes("Universal") ||
         hotel.name.includes("Loews") ||
         hotel.name.includes("Hard Rock") ||
         !!(hotel.website && hotel.website.includes("universal")) ||
         !!(hotel.tags && hotel.tags.some(tag =>
           tag.includes("Universal") || tag.includes("Epic Universe")));
};

const HotelsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState<HotelFilterType>('by-location'); // Default to by-location like web
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  useEffect(() => {
    // Load all hotels on component mount
    const allHotels = getAllHotels();
    setHotels(allHotels);
    console.log("Total hotels loaded:", allHotels.length);
    
    // Debug: Check for data mismatches
    console.log("=== HOTEL DATA DEBUG ===");
    const featuredHotels = getFeaturedHotels();
    console.log("Featured luxury hotels:", featuredHotels.luxury?.length || 0);
    console.log("Featured luxury hotel names:", featuredHotels.luxury?.map(h => h.name) || []);
    
    // Check for specific hotels that might be missing
    const jwMarriott = allHotels.find(h => h.name.includes("JW Marriott"));
    const fourSeasons = allHotels.find(h => h.name.includes("Four Seasons"));
    const grandFloridian = allHotels.find(h => h.name.includes("Grand Floridian"));
    
    console.log("JW Marriott found:", !!jwMarriott, jwMarriott?.name);
    console.log("Four Seasons found:", !!fourSeasons, fourSeasons?.name);
    console.log("Grand Floridian found:", !!grandFloridian, grandFloridian?.name);
    
    // Check categories
    const luxury = getHotelsBySubcategory('luxury');
    const themePark = getHotelsBySubcategory('theme-park');
    const budget = getHotelsBySubcategory('budget-friendly');
    
    console.log("Luxury hotels count:", luxury.length);
    console.log("Theme park hotels count:", themePark.length);
    console.log("Budget hotels count:", budget.length);
    console.log("=========================");
  }, []);

  useEffect(() => {
    // Filter hotels based on selected filter - matches web logic exactly
    let filtered: Hotel[] = [];

    if (selectedFilter === 'all') {
      filtered = hotels;
      console.log("Showing all hotels:", filtered.length);
    } 
    else if (selectedFilter === 'by-location') {
      // Filter hotels to those matching any of our mapped neighborhoods
      filtered = hotels.filter(hotel => {
        if (!hotel.neighborhood) return false;
        
        // Check if hotel's neighborhood is in any of our mapped locations
        const matchesLocation = Object.values(locationMap).some(neighborhoods => 
          neighborhoods.some(n => hotel.neighborhood && hotel.neighborhood.toLowerCase().includes(n.toLowerCase()))
        );
        
        return matchesLocation;
      });
      console.log("Filtered by location:", filtered.length, "hotels");
    }
    else {
      // Get hotels by subcategory (luxury, theme-park, etc.)
      filtered = getHotelsBySubcategory(selectedFilter);
      console.log(`Filtered by subcategory ${selectedFilter}:`, filtered.length, "hotels");
    }

    // Apply additional location filter if set
    if (selectedLocation && selectedFilter === 'by-location') {
      console.log("Applying location filter:", selectedLocation);
      filtered = filtered.filter(hotel => {
        if (!hotel.neighborhood) return false;
        
        // If this is a Universal hotel and we're NOT filtering by Universal Area, exclude it
        if (isUniversalHotel(hotel) && selectedLocation !== "Universal Area") {
          console.log("Excluding Universal hotel from non-Universal area:", hotel.name);
          return false;
        }
        
        // Special case for Universal properties - handle all Universal-related hotels
        if (selectedLocation === "Universal Area" && isUniversalHotel(hotel)) {
          console.log("Match found for", hotel.name, "in", selectedLocation);
          return true;
        }
        
        // Get the neighborhoods for the selected location
        const neighborhoods = locationMap[selectedLocation as keyof typeof locationMap] || [];
        
        // Check if hotel's neighborhood matches any in the list
        const matchesByNeighborhood = neighborhoods.some(n => 
          hotel.neighborhood.toLowerCase().includes(n.toLowerCase())
        );
        
        // Special case for Disney Area (which now includes Kissimmee) - check name, website and tags
        if (selectedLocation === "Disney Area" && 
            (hotel.name.includes("Disney") || 
             (hotel.website && hotel.website.includes("disney")) ||
             (hotel.neighborhood && (
               hotel.neighborhood.includes("Lake Buena Vista") || 
               hotel.neighborhood.includes("Kissimmee") ||
               hotel.neighborhood.includes("Celebration")
             ))
            )) {
          console.log("Match found for", hotel.name, "in", selectedLocation);
          return true;
        }
        
        // Also check tags for matches
        const matchesByTag = hotel.tags && hotel.tags.some(tag => {
          if (selectedLocation === "Disney Area" && 
              (tag.includes("Disney") || 
               tag.includes("Walt Disney World") || 
               tag.includes("Kissimmee") || 
               tag.includes("Celebration"))) {
            return true;
          }
          if (selectedLocation === "Universal Area" && 
              (tag.includes("Universal") || tag.includes("Universal Orlando"))) {
            return true;
          }
          if (selectedLocation === "SeaWorld Area" && 
              (tag.includes("SeaWorld") || tag.includes("Sea World"))) {
            return true;
          }
          return false;
        });
        
        const matches = matchesByNeighborhood || matchesByTag;
        
        if (matches) {
          console.log("Match found for", hotel.name, "in", selectedLocation);
        }
        
        return matches;
      });
    }
    
    setFilteredHotels(filtered);
  }, [selectedFilter, hotels, selectedLocation]);

  const handleFilterPress = (filterId: HotelFilterType) => {
    setSelectedFilter(filterId);
    setSelectedLocation(null); // Reset location filter when changing main filter
  };

  const handleLocationPress = (location: string) => {
    // Force setSelectedType to be "by-location" when a location filter is applied
    if (selectedFilter !== "by-location") {
      setSelectedFilter("by-location");
    }
    
    // Set the active filter directly (without toggling)
    setSelectedLocation(location);
  };

  const handleHotelPress = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setIsDetailModalVisible(true);
  };

  const handleWebsitePress = (hotel: Hotel) => {
    if (hotel.website) {
      navigation.navigate('WebView' as never, {
        url: hotel.website,
        title: hotel.name
      } as never);
    }
  };

  const handleCloseModal = () => {
    setIsDetailModalVisible(false);
    setSelectedHotel(null);
  };

  // Get featured hotels for display on the main page
  const featuredHotelsMap = getFeaturedHotels();
  
  // Get featured locations (display names)
  const featuredLocations = Object.keys(locationMap);

  const renderHotelCard = ({ item }: { item: Hotel }) => (
    <View style={styles.cardContainer}>
      <HotelCard
        hotel={item}
        onPress={handleHotelPress}
        onWebsitePress={handleWebsitePress}
        fullWidth={true}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Banner - Match web version exactly */}
        <LinearGradient
          colors={['#3b82f6', '#22d3ee']} // blue-500 to cyan-400
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.heroBanner}
        >
          <Text style={styles.heroTitle}>AWESOME ACCOMMODATIONS</Text>
          <Text style={styles.heroSubtitle}>Find Your Perfect Orlando Vacation Stay</Text>
          
          {/* Quick Jump Categories - Enhanced Buttons */}
          <View style={styles.quickJumpContainer}>
            {hotelFilters.slice(1).map((filter) => (
              <TouchableOpacity
                key={filter.id}
                style={[
                  styles.quickJumpButton,
                  selectedFilter === filter.id && styles.quickJumpButtonActive
                ]}
                onPress={() => handleFilterPress(filter.id)}
              >
                <Text style={[
                  styles.quickJumpButtonText,
                  selectedFilter === filter.id && styles.quickJumpButtonTextActive
                ]}>
                  {filter.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </LinearGradient>

        {/* Filter Tabs */}
        {/* <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterScrollView}
          contentContainerStyle={styles.filterContainer}
        >
          {hotelFilters.map((filter) => (
            <TouchableOpacity
              key={filter.id}
              style={[
                styles.filterTab,
                selectedFilter === filter.id && styles.filterTabActive,
              ]}
              onPress={() => handleFilterPress(filter.id)}
            >
              <Text
                style={[
                  styles.filterTabText,
                  selectedFilter === filter.id && styles.filterTabTextActive,
                ]}
              >
                {filter.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView> */}

        {/* Category Header */}
        {selectedFilter !== "all" && (
          <View style={styles.categoryHeader}>
            <Text style={styles.categoryTitle}>
              {selectedFilter.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Hotels & Accommodations
            </Text>
            
            {/* Location filters for Hotels by Location page */}
            {selectedFilter === 'by-location' && (
              <View style={styles.locationFilterContainer}>
                <View style={styles.locationFilterHeader}>
                  <Text style={styles.locationFilterTitle}>Filter by Location</Text>
                  {selectedLocation && (
                    <TouchableOpacity 
                      style={styles.clearButton}
                      onPress={() => setSelectedLocation(null)}
                    >
                      <Text style={styles.clearButtonText}>✕ Clear</Text>
                    </TouchableOpacity>
                  )}
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.locationScrollView}
                >
                  {featuredLocations.map(location => {
                    // Customize colors based on location theme - match web exactly
                    let chipStyle = styles.locationChip;
                    let textStyle = styles.locationChipText;
                    
                    if (selectedLocation === location) {
                      if (location === "Disney Area") {
                        chipStyle = {...styles.locationChip, ...styles.locationChipActiveOrange};
                        textStyle = {...styles.locationChipText, ...styles.locationChipTextActiveOrange};
                      } else if (location === "Universal Area") {
                        chipStyle = {...styles.locationChip, ...styles.locationChipActiveBlue};
                        textStyle = {...styles.locationChipText, ...styles.locationChipTextActiveBlue};
                      } else if (location === "SeaWorld Area") {
                        chipStyle = {...styles.locationChip, ...styles.locationChipActiveTeal};
                        textStyle = {...styles.locationChipText, ...styles.locationChipTextActiveTeal};
                      } else {
                        chipStyle = {...styles.locationChip, ...styles.locationChipActivePrimary};
                        textStyle = {...styles.locationChipText, ...styles.locationChipTextActivePrimary};
                      }
                    } else {
                      if (location === "Disney Area") {
                        chipStyle = {...styles.locationChip, ...styles.locationChipOrange};
                        textStyle = {...styles.locationChipText, ...styles.locationChipTextOrange};
                      } else if (location === "Universal Area") {
                        chipStyle = {...styles.locationChip, ...styles.locationChipBlue};
                        textStyle = {...styles.locationChipText, ...styles.locationChipTextBlue};
                      } else if (location === "SeaWorld Area") {
                        chipStyle = {...styles.locationChip, ...styles.locationChipTeal};
                        textStyle = {...styles.locationChipText, ...styles.locationChipTextTeal};
                      }
                    }
                    
                    return (
                      <TouchableOpacity
                        key={location}
                        style={chipStyle}
                        onPress={() => handleLocationPress(location)}
                      >
                        <Text style={textStyle}>
                          {/* Add themed icons for major locations */}
                          {location === "Disney Area" && "🏰 "}
                          {location === "Universal Area" && "🌐 "}
                          {location === "SeaWorld Area" && "🐬 "}
                          {location}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
                
                <Text style={styles.locationFilterSubtext}>Filter hotels by area</Text>
              </View>
            )}
            
            {/* Results Count */}
            <Text style={styles.resultsText}>
              Showing {filteredHotels.length} {filteredHotels.length === 1 ? 'accommodation' : 'accommodations'}
            </Text>
          </View>
        )}

        {/* Show filtered hotels list when viewing a category - HORIZONTAL SCROLL */}
        {selectedFilter !== "all" && (
          <View style={styles.hotelsContainer}>
            <FlatList
              data={filteredHotels}
              renderItem={renderHotelCard}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.hotelsHorizontalList}
            />
            {filteredHotels.length === 0 && (
              <View style={styles.noResults}>
                <Text style={styles.noResultsText}>No hotels found matching your criteria.</Text>
              </View>
            )}
          </View>
        )}

        {/* Only show these sections on the main hotels page */}
        {selectedFilter === "all" && (
          <View style={styles.mainContent}>
            {/* LUXURY HOTELS SECTION */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <View>
                  <Text style={styles.sectionTitle}>Premier Resorts</Text>
                  <Text style={styles.sectionSubtitle}>Amazing accommodations with exceptional amenities and service</Text>
                </View>
                <TouchableOpacity 
                  style={styles.viewAllButton}
                  onPress={() => handleFilterPress('luxury')}
                >
                  <Text style={styles.viewAllButtonText}>View All →</Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={featuredHotelsMap.luxury}
                renderItem={renderHotelCard}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.hotelsHorizontalList}
              />
            </View>

            {/* HOTELS BY LOCATION SECTION */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <View>
                  <Text style={styles.sectionTitle}>Perfect Locations</Text>
                  <Text style={styles.sectionSubtitle}>Find the ideal spot for your Orlando vacation adventures</Text>
                </View>
                <TouchableOpacity 
                  style={styles.viewAllButton}
                  onPress={() => handleFilterPress('by-location')}
                >
                  <Text style={styles.viewAllButtonText}>View All →</Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={hotels
                  .filter(hotel => 
                    hotel.neighborhood && 
                    // Map our featured locations to actual neighborhoods in the data
                    (hotel.neighborhood.includes("Disney") || 
                     hotel.neighborhood.includes("Universal") ||
                     hotel.neighborhood === "International Drive" ||
                     hotel.neighborhood === "Kissimmee" ||
                     hotel.neighborhood === "Downtown Orlando")
                  )
                  .slice(0, 6)}
                renderItem={renderHotelCard}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.hotelsHorizontalList}
              />
            </View>

            {/* SEO-FOCUSED CONTENT */}
            <View style={styles.seoContent}>
              <Text style={styles.seoTitle}>Awesome Orlando Hotel Tips</Text>
              <Text style={styles.seoText}>
                Finding the right place to stay can make your Orlando vacation even more amazing! With so many 
                awesome options from theme park resorts to comfy budget stays, Orlando has perfect accommodations 
                for every type of vacation.
              </Text>
              <Text style={styles.seoText}>
                The main things to think about are location, fun amenities, and special perks. Hotels at theme parks 
                often give you earlier access and free transportation, while staying on International Drive puts you 
                close to restaurants, shopping, and lots of attractions.
              </Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Hotel Detail Modal */}
      <HotelDetailModal
        hotel={selectedHotel}
        visible={isDetailModalVisible}
        onClose={handleCloseModal}
        onWebsitePress={handleWebsitePress}
      />
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
  
  // Hero Banner Styles - Match web exactly
  heroBanner: {
    // paddingVertical: 20,
    // paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 0,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
    marginTop: 15,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    maxWidth: width * 0.9,
  },
  quickJumpContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    marginTop: 12,
    marginBottom: 22,
  },
  quickJumpButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#1e3a8a', // Blue-700
  },
  quickJumpButtonActive: {
    backgroundColor: '#ffffff',
  },
  quickJumpButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  quickJumpButtonTextActive: {
    color: '#3b82f6', // Blue-600
  },
  
  // Filter Tabs - Match web blue theme
  filterScrollView: {
    marginBottom: 16,
    marginTop: 16,
  },
  filterContainer: {
    paddingHorizontal: 20,
    gap: 12,
  },
  filterTab: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    backgroundColor: '#f3f4f6',
    marginRight: 12,
  },
  filterTabActive: {
    backgroundColor: '#3b82f6', // Blue-600
  },
  filterTabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
  },
  filterTabTextActive: {
    color: '#ffffff',
  },
  
  // Category Header
  categoryHeader: {
    backgroundColor: '#f9fafb',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 24,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
    textTransform: 'capitalize',
  },
  
  // Location Filter Styles - Match web colors exactly
  locationFilterContainer: {
    marginBottom: 16,
  },
  locationFilterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationFilterTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  clearButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  clearButtonText: {
    fontSize: 12,
    color: '#6b7280',
  },
  locationScrollView: {
    marginBottom: 8,
  },
  locationChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginRight: 8,
  },
  locationChipText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6b7280',
  },
  
  // Disney Area Colors
  locationChipOrange: {
    backgroundColor: 'rgba(255, 237, 213, 0.4)',
    borderColor: '#fed7aa',
  },
  locationChipTextOrange: {
    color: '#c2410c',
  },
  locationChipActiveOrange: {
    backgroundColor: '#ffedd5',
    borderColor: '#f97316',
    borderWidth: 2,
  },
  locationChipTextActiveOrange: {
    color: '#c2410c',
  },
  
  // Universal Area Colors
  locationChipBlue: {
    backgroundColor: 'rgba(219, 234, 254, 0.4)',
    borderColor: '#bfdbfe',
  },
  locationChipTextBlue: {
    color: '#1d4ed8',
  },
  locationChipActiveBlue: {
    backgroundColor: '#dbeafe',
    borderColor: '#3b82f6',
    borderWidth: 2,
  },
  locationChipTextActiveBlue: {
    color: '#1d4ed8',
  },
  
  // SeaWorld Area Colors
  locationChipTeal: {
    backgroundColor: 'rgba(204, 251, 241, 0.4)',
    borderColor: '#99f6e4',
  },
  locationChipTextTeal: {
    color: '#0f766e',
  },
  locationChipActiveTeal: {
    backgroundColor: '#ccfbf1',
    borderColor: '#14b8a6',
    borderWidth: 2,
  },
  locationChipTextActiveTeal: {
    color: '#0f766e',
  },
  
  // Default Primary Colors
  locationChipActivePrimary: {
    backgroundColor: '#dbeafe',
    borderColor: '#3b82f6',
    borderWidth: 2,
  },
  locationChipTextActivePrimary: {
    color: '#1d4ed8',
  },
  
  locationFilterSubtext: {
    fontSize: 12,
    color: '#6b7280',
    fontStyle: 'italic',
    marginTop: 8,
  },
  
  resultsText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
    marginTop: 8,
  },
  
  // Hotels Container - SINGLE COLUMN
  hotelsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  hotelsList: {
    paddingBottom: 20,
  },
  hotelsHorizontalList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cardContainer: {
    marginBottom: 16,
    marginRight: 16,
    width: width * 0.8, // Make cards wider for horizontal scrolling
  },
  noResults: {
    paddingVertical: 48,
    alignItems: 'center',
  },
  noResultsText: {
    color: '#6b7280',
    fontSize: 16,
  },
  
  // Main Content (All Hotels page)
  mainContent: {
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b82f6', // Blue-600
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  viewAllButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 6,
    backgroundColor: '#ffffff',
  },
  viewAllButtonText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  
  // SEO Content
  seoContent: {
    backgroundColor: '#eff6ff', // Blue-50
    padding: 20,
    borderRadius: 12,
    marginBottom: 32,
  },
  seoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b82f6', // Blue-600
    marginBottom: 16,
  },
  seoText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 16,
  },
});

export default HotelsScreen;