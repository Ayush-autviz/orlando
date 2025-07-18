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

// Location mapping for filtering hotels by location
const locationMap: { [key: string]: string[] } = {
  'Disney Area': ['Disney', 'Lake Buena Vista', 'Bay Lake'],
  'Universal Area': ['Universal', 'International Drive'],
  'Downtown Orlando': ['Downtown Orlando', 'Orlando'],
  'International Drive': ['International Drive', 'I-Drive'],
  'Kissimmee': ['Kissimmee'],
  'Airport Area': ['Airport', 'South Orlando'],
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
          const locationNeighborhoods = locationMap[selectedLocation] || [];
          filtered = hotels.filter(hotel =>
            hotel.neighborhood &&
            locationNeighborhoods.some(neighborhood =>
              hotel.neighborhood!.toLowerCase().includes(neighborhood.toLowerCase())
            )
          );
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