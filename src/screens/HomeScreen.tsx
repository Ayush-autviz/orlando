import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Hero from '../components/Hero';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const listRef = useRef<any>(null);
  const indexRef = useRef(0);

  const topSpots = [
    {
      id: 'springs',
      label: 'Natural Springs',
      image: require('../../assets/montage/BlueSpringStatePark.jpeg'),
      onPress: () => (navigation as any).navigate('TabNavigator', { screen: 'Attractions', params: { category: 'Outdoor Adventures' } }),
    },
    {
      id: 'arcades',
      label: 'Arcades',
      image: require('../../assets/montage/ArcadeMonsters.jpeg'),
      onPress: () => (navigation as any).navigate('TabNavigator', { screen: 'Attractions', params: { category: 'Unique Attractions' } }),
    },
    {
      id: 'theme-parks',
      label: 'Theme Parks',
      image: require('../../assets/montage/UniversalEntrance.jpeg'),
      onPress: () => (navigation as any).navigate('TabNavigator', { screen: 'ThemeParks' }),
    },
    {
      id: 'attractions',
      label: 'Attractions',
      image: require('../../assets/montage/SEALIFEOrlandoAquarium.jpeg'),
      onPress: () => (navigation as any).navigate('TabNavigator', { screen: 'Attractions' }),
    },
    {
      id: 'hotels',
      label: 'Hotels',
      image: require('../../assets/montage/UniversalsPortofinoBayHotel.jpg'),
      onPress: () => (navigation as any).navigate('TabNavigator', { screen: 'Hotels' }),
    },
    {
      id: 'dining',
      label: 'Dining',
      image: require('../../assets/montage/DisneySprings.jpg'),
      onPress: () => (navigation as any).navigate('TabNavigator', { screen: 'Dining' }),
    },
    {
      id: 'shopping',
      label: 'Shopping',
      image: require('../../assets/montage/ICONPARK.jpeg'),
      onPress: () => (navigation as any).navigate('shopping'),
    },
    {
      id: 'epic',
      label: 'Epic Universe Guide',
      image: require('../../assets/images/epic-universe/epic-universe-map.jpg'),
      onPress: () => (navigation as any).navigate('EpicUniverseGuide'),
    },
  ];

  console.log('HomeScreen component mounted - starting to load Hero component');

  // Auto-slide the list every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % topSpots.length;
      try {
        listRef.current?.scrollToIndex({ index: indexRef.current, animated: true });
      } catch {}
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Hero navigation={navigation} />

      {/* Top Spots Section */}
      <View style={styles.topSpotsSection}>
        <Text style={styles.topSpotsTitle}>Top Spots in Orlando</Text>

        {/* Horizontal sliding list of 8 items */}
        <FlatList horizontal ref={listRef} data={topSpots} keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.spotCardItem} activeOpacity={0.85} onPress={item.onPress}>
              <Image source={item.image} style={styles.spotImage} resizeMode="cover" />
              <View style={styles.spotOverlay} />
              <Text style={styles.spotLabel}>{item.label}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={CARD_WIDTH + CARD_GAP}
          contentContainerStyle={styles.topSpotsList}
          getItemLayout={(_, index) => ({ length: CARD_WIDTH + CARD_GAP, offset: (CARD_WIDTH + CARD_GAP) * index, index })}
        />
      </View>
    </ScrollView>
  );
};

const CARD_WIDTH = 260;
const CARD_GAP = 12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSpotsSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#F8FAFC',
  },
  topSpotsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
  },
  topSpotsList: {
    paddingRight: 16,
  },
  spotCardItem: {
    width: CARD_WIDTH,
    height: 140,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#000',
    marginRight: CARD_GAP,
  },
  spotImage: {
    width: '100%',
    height: '100%',
  },
  spotOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  spotLabel: {
    position: 'absolute',
    left: 12,
    bottom: 12,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default HomeScreen;
