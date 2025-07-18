import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hotel, HotelFilterType } from '../types/Hotel';
import { getAllHotels, getHotelsBySubcategory } from '../data/hotelDataHandler';
import HotelCard from '../components/HotelCard';
import HotelDetailModal from '../components/HotelDetailModal';
import Header from '../components/Header';

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

// Location mapping for filtering hotels by location - matches web version exactly
const locationMap: { [key: string]: string[] } = {
  'Disney Area': ['Lake Buena Vista', 'Disney Springs', 'Buena Vista', 'Disney World', 'Walt Disney World', 'Disney', 'Kissimmee', 'Celebration', 'Old Town Kissimmee', 'Reunion Resort', 'Howey-in-the-Hills'],
  'Universal Area': ['Universal Orlando Resort', 'Universal Boulevard', 'Universal Studios', 'Universal', 'Orlando Universal', 'Universal Orlando'],
  'SeaWorld Area': ['SeaWorld Orlando', 'Sea World Drive', 'SeaWorld', 'Seaworld', 'Sea World'],
  'International Drive': ['International Drive', 'I-Drive', 'I Drive', 'IDrive', 'ICON Park', 'Convention Center'],
  'Downtown Orlando': ['Downtown Orlando', 'Downtown', 'Orlando Downtown', 'Downtown Area'],
  'Winter Park': ['Winter Park', 'Alfond Inn'],
  'Airport Area': ['Airport', 'South Orlando', 'MCO', 'Orlando International Airport'],
};

// Helper functions to match web version logic
const isUniversalHotel = (hotel: Hotel): boolean => {
  return hotel.name.includes("Universal") ||
         hotel.name.includes("Loews") ||
         hotel.name.includes("Hard Rock") ||
         !!(hotel.website && hotel.website.includes("universal")) ||
         !!(hotel.tags && hotel.tags.some(tag =>
           tag.includes("Universal") || tag.includes("Epic Universe")));
};

const isDisneyHotel = (hotel: Hotel): boolean => {
  return hotel.name.includes("Disney") ||
         !!(hotel.website && hotel.website.includes("disney")) ||
         !!(hotel.tags && hotel.tags.some(tag => tag.includes("Disney")));
};

const HotelsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState<HotelFilterType>('all');
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>([]);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  useEffect(() => {
    // Load all hotels on component mount
    const allHotels = getAllHotels();
    setHotels(allHotels);
    setFilteredHotels(allHotels);
  }, []);

  useEffect(() => {
    // Filter hotels based on selected filter
    let filtered: Hotel[] = [];

    switch (selectedFilter) {
      case 'all':
        filtered = hotels;
        break;
      case 'luxury':
        filtered = getHotelsBySubcategory('luxury');
        break;
      case 'by-location':
        if (selectedLocation) {
          filtered = hotels.filter(hotel => {
            if (!hotel.neighborhood) return false;

            // If this is a Universal hotel and we're NOT filtering by Universal Area, exclude it
            if (isUniversalHotel(hotel) && selectedLocation !== "Universal Area") {
              return false;
            }

            // Special case for Universal Area - use helper function
            if (selectedLocation === "Universal Area" && isUniversalHotel(hotel)) {
              return true;
            }

            // Special case for Disney Area - use helper function and check neighborhoods
            if (selectedLocation === "Disney Area" &&
                (isDisneyHotel(hotel) ||
                 hotel.neighborhood.includes("Lake Buena Vista") ||
                 hotel.neighborhood.includes("Kissimmee") ||
                 hotel.neighborhood.includes("Celebration") ||
                 hotel.neighborhood.includes("Old Town Kissimmee") ||
                 hotel.neighborhood.includes("Reunion Resort") ||
                 hotel.neighborhood.includes("Howey-in-the-Hills"))) {
              return true;
            }

            // Check neighborhood mapping
            const locationNeighborhoods = locationMap[selectedLocation] || [];
            const matchesByNeighborhood = locationNeighborhoods.some(neighborhood =>
              hotel.neighborhood!.toLowerCase().includes(neighborhood.toLowerCase())
            );

            // Prevent cross-contamination between similar areas
            if (selectedLocation === "International Drive") {
              // Exclude hotels that are specifically SeaWorld area
              if (hotel.neighborhood === "SeaWorld Area" ||
                  (hotel.tags && hotel.tags.some(tag =>
                    tag.includes("SeaWorld") || tag.includes("Sea World")))) {
                return false;
              }
            }

            if (selectedLocation === "SeaWorld Area") {
              // Exclude hotels that are specifically International Drive but not SeaWorld
              if (hotel.neighborhood === "International Drive" &&
                  !(hotel.tags && hotel.tags.some(tag =>
                    tag.includes("SeaWorld") || tag.includes("Sea World")))) {
                return false;
              }
            }

            // Check tags for matches
            const matchesByTag = hotel.tags && hotel.tags.some(tag => {
              if (selectedLocation === "Disney Area" &&
                  (tag.includes("Disney") ||
                   tag.includes("Walt Disney World") ||
                   tag.includes("Kissimmee") ||
                   tag.includes("Celebration") ||
                   tag.includes("Old Town Kissimmee") ||
                   tag.includes("Reunion Resort"))) {
                return true;
              }
              if (selectedLocation === "Universal Area" &&
                  (tag.includes("Universal") ||
                   tag.includes("Universal Orlando") ||
                   tag.includes("Epic Universe"))) {
                return true;
              }
              if (selectedLocation === "SeaWorld Area" &&
                  (tag.includes("SeaWorld") ||
                   tag.includes("Sea World") ||
                   tag.includes("Seaworld") ||
                   hotel.neighborhood === "SeaWorld Area")) {
                return true;
              }
              if (selectedLocation === "Winter Park" &&
                  (tag.includes("Winter Park") ||
                   tag.includes("Alfond"))) {
                return true;
              }
              return false;
            });

            return matchesByNeighborhood || matchesByTag;
          });
        } else {
          // Show hotels from featured locations
          filtered = hotels.filter(hotel =>
            hotel.neighborhood &&
            Object.values(locationMap).flat().some(neighborhood =>
              hotel.neighborhood!.toLowerCase().includes(neighborhood.toLowerCase())
            )
          );
        }
        break;
      default:
        filtered = hotels;
    }

    setFilteredHotels(filtered);
  }, [selectedFilter, hotels, selectedLocation]);

  const handleFilterPress = (filterId: HotelFilterType) => {
    setSelectedFilter(filterId);
    setSelectedLocation(null); // Reset location filter when changing main filter
  };

  const handleLocationPress = (location: string) => {
    setSelectedLocation(selectedLocation === location ? null : location);
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

  const renderHotelCard = ({ item, index }: { item: Hotel; index: number }) => (
    <View style={[styles.cardContainer, index % 2 === 1 && styles.cardContainerRight]}>
      <HotelCard
        hotel={item}
        onPress={handleHotelPress}
        onWebsitePress={handleWebsitePress}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Orlando Hotels</Text>
          <Text style={styles.subtitle}>
            Find the perfect place to stay for your Orlando vacation
          </Text>
        </View>

        {/* Filter Tabs */}
        <ScrollView
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
        </ScrollView>

        {/* Location Filter (only show when by-location is selected) */}
        {selectedFilter === 'by-location' && (
          <View style={styles.locationFilterContainer}>
            <Text style={styles.locationFilterTitle}>Filter by Location:</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.locationScrollView}
            >
              {Object.keys(locationMap).map((location) => (
                <TouchableOpacity
                  key={location}
                  style={[
                    styles.locationChip,
                    selectedLocation === location && styles.locationChipActive,
                  ]}
                  onPress={() => handleLocationPress(location)}
                >
                  <Text
                    style={[
                      styles.locationChipText,
                      selectedLocation === location && styles.locationChipTextActive,
                    ]}
                  >
                    {location}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Results Count */}
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsText}>
            {filteredHotels.length} hotel{filteredHotels.length !== 1 ? 's' : ''} found
          </Text>
        </View>

        {/* Hotels Grid */}
        <View style={styles.hotelsContainer}>
          <FlatList
            data={filteredHotels}
            renderItem={renderHotelCard}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.hotelsList}
          />
        </View>
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
  titleContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 22,
  },
  filterScrollView: {
    marginBottom: 16,
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
    backgroundColor: '#3b82f6',
  },
  filterTabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
  },
  filterTabTextActive: {
    color: '#ffffff',
  },
  locationFilterContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  locationFilterTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  locationScrollView: {
    marginBottom: 8,
  },
  locationChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginRight: 8,
  },
  locationChipActive: {
    backgroundColor: '#dbeafe',
    borderColor: '#3b82f6',
  },
  locationChipText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6b7280',
  },
  locationChipTextActive: {
    color: '#3b82f6',
  },
  resultsContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  resultsText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  hotelsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  hotelsList: {
    paddingBottom: 20,
  },
  cardContainer: {
    flex: 1,
    paddingRight: 8,
  },
  cardContainerRight: {
    paddingRight: 0,
    paddingLeft: 8,
  },
});

export default HotelsScreen;