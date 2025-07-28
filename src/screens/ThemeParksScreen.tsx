import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import Video from 'react-native-video';
import {
  Sparkles,
  Rocket,
  Film,
  Waves,
  Calendar,
  Star,
  Gamepad2,
  Mountain,
  ExternalLink,
  Globe,
  Palmtree,
  Droplet
} from 'lucide-react-native';
import Header from '../components/Header';

const ThemeParksScreen: React.FC = () => {
  const navigation = useNavigation();
  const pingAnimation = new Animated.Value(1);

  useEffect(() => {
    const startPingAnimation = () => {
      Animated.sequence([
        Animated.timing(pingAnimation, {
          toValue: 1.5,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(pingAnimation, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]).start(() => startPingAnimation());
    };

    startPingAnimation();
  }, []);

  const openWebsite = (url: string, title?: string) => {
    navigation.navigate('WebView' as never, { url, title } as never);
  };



  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <LinearGradient
            colors={['#2563eb', '#8b5cf6', '#ec4899']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.heroGradientBackground}
          >
            <View style={styles.heroPatternOverlay}>
              <Svg width="100%" height="100%" style={styles.patternSvg}>
                {/* Create a more visible dot pattern */}
                {Array.from({ length: 8 }).map((_, rowIndex) =>
                  Array.from({ length: 6 }).map((_, colIndex) => (
                    <Path
                      key={`${rowIndex}-${colIndex}`}
                      d="M30 30c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm20 10c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm-20 0c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zM10 40c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm20 0c-5.523 0-10-4.477-10-10S24.477 0 30 0s10 4.477 10 10-4.477 10-10 10zm20 0c-5.523 0-10-4.477-10-10S44.477 0 50 0s10 4.477 10 10-4.477 10-10 10z"
                      fill="#ffffff"
                      fillOpacity="0.4"
                      fillRule="evenodd"
                      transform={`translate(${colIndex * 60}, ${rowIndex * 60})`}
                    />
                  ))
                )}
              </Svg>
            </View>
            <View style={styles.heroContent}>
              <View style={styles.heroTitleContainer}>
                <View style={styles.heroTitle}>
                  <Text style={styles.heroTitleText}>
                    ORLANDO<Text style={styles.heroTitleAccent}>THEME PARKS</Text>
                  </Text>
                </View>
                <Animated.View 
                  style={[
                    styles.heroTitleDecoration,
                    {
                      transform: [{ scale: pingAnimation }],
                      opacity: pingAnimation.interpolate({
                        inputRange: [1, 1.5],
                        outputRange: [0.8, 0],
                      }),
                    }
                  ]} 
                />
              </View>
              <View style={styles.heroContentArea}>
                <Text style={styles.heroDescription}>
                  Discover the magic of world-class theme parks that make Orlando the Theme Park Capital of the World.
                </Text>
                <View style={styles.heroTags}>
                  <View style={styles.heroTag}>
                    <Rocket size={10} color="#ffffff" style={{ marginRight: 2 }} />
                    <Text style={styles.heroTagText}>Thrilling Rides</Text>
                  </View>
                  <View style={styles.heroTag}>
                    <Sparkles size={10} color="#ffffff" style={{ marginRight: 2 }} />
                    <Text style={styles.heroTagText}>Magical Experiences</Text>
                  </View>
                  <View style={styles.heroTag}>
                    <Palmtree size={10} color="#ffffff" style={{ marginRight: 2 }} />
                    <Text style={styles.heroTagText}>Adventures</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Disney World Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIcon}>
              <Sparkles size={20} color="#ffffff" />
            </View>
            <Text style={styles.sectionTitle}>Walt Disney World Resort</Text>
          </View>

          {/* Disney Main Card with Castle Video Background */}
          <TouchableOpacity
            style={styles.mainCard}
            onPress={() => openWebsite('https://disneyworld.disney.go.com/', 'Walt Disney World')}
          >
            <View style={styles.videoContainer}>
              <Video
                source={require('../../assets/images/castle-video1.mp4')}
                style={styles.mainCardImage}
                resizeMode="cover"
                repeat
                muted
                playInBackground={false}
                playWhenInactive={false}
              />
            </View>
            <View style={styles.mainCardOverlay}>
              <View style={styles.mainCardContent}>
                <Text style={styles.mainCardTitle}>Walt Disney World</Text>
                <Text style={styles.mainCardDescription}>
                  Experience the magic of four iconic theme parks, two water parks, and Disney Springs in the most magical place on earth.
                </Text>
                <View style={styles.mainCardButton}>
                  <View style={styles.buttonContent}>
                    <Sparkles size={16} color="#ffffff" />
                    <Text style={styles.mainCardButtonText}>Official Site</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* Disney Parks Grid */}
          <View style={styles.parksGrid}>
            <View style={styles.gridTitleContainer}>
              <Sparkles size={18} color="#2563eb" />
              <Text style={styles.gridTitle}>Visit the Magic of Disney Parks</Text>
            </View>

            {/* Row 1 */}
            <View style={styles.gridRow}>
              <TouchableOpacity
                style={[styles.gridItem, { flex: 1 }]}
                onPress={() => openWebsite('https://disneyworld.disney.go.com/destinations/magic-kingdom/')}
              >
                <Image
                  source={require('../../assets/images/DonaldDuck.jpeg')}
                  style={styles.gridItemImage}
                  resizeMode="cover"
                />
                <View style={styles.gridItemOverlay}>
                  <Text style={styles.gridItemTitle}>Magic Kingdom</Text>
                  {/* <View style={styles.gridItemBadge}>
                    <Text style={styles.gridItemBadgeText}>Official Site</Text>
                  </View> */}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.gridItem, { flex: 1 }]}
                onPress={() => openWebsite('https://disneyworld.disney.go.com/destinations/epcot/')}
              >
                <Image
                  source={require('../../assets/images/epcot.webp')}
                  style={styles.gridItemImage}
                  resizeMode="cover"
                />
                <View style={styles.gridItemOverlay}>
                  <Text style={styles.gridItemTitle}>EPCOT</Text>
                  {/* <View style={styles.gridItemBadge}>
                    <Text style={styles.gridItemBadgeText}>Official Site</Text>
                  </View> */}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.gridItem, { flex: 1 }]}
                onPress={() => openWebsite('https://disneyworld.disney.go.com/destinations/hollywood-studios/')}
              >
                <Image
                  source={require('../../assets/images/HollywoodStudios.jpeg')}
                  style={styles.gridItemImage}
                  resizeMode="cover"
                />
                <View style={styles.gridItemOverlay}>
                  <Text style={styles.gridItemTitle}>Hollywood Studios</Text>
                  {/* <View style={styles.gridItemBadge}>
                    <Text style={styles.gridItemBadgeText}>Official Site</Text>
                  </View> */}
                </View>
              </TouchableOpacity>
            </View>

            {/* Row 2 */}
            <View style={styles.gridRow}>
              <TouchableOpacity
                style={[styles.gridItem, { flex: 1 }]}
                onPress={() => openWebsite('https://disneyworld.disney.go.com/destinations/animal-kingdom/')}
              >
                <Image
                  source={require('../../assets/images/AnimalKingdom.jpg')}
                  style={styles.gridItemImage}
                  resizeMode="cover"
                />
                <View style={styles.gridItemOverlay}>
                  <Text style={styles.gridItemTitle}>Animal Kingdom</Text>
                  {/* <View style={styles.gridItemBadge}>
                    <Text style={styles.gridItemBadgeText}>Official Site</Text>
                  </View> */}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.gridItem, { flex: 1 }]}
                onPress={() => openWebsite('https://www.disneysprings.com')}
              >
                <Image
                  source={require('../../assets/images/DisneySprings.jpg')}
                  style={styles.gridItemImage}
                  resizeMode="cover"
                />
                <View style={styles.gridItemOverlay}>
                  <Text style={styles.gridItemTitle}>Disney Springs</Text>
                  {/* <View style={styles.gridItemBadge}>
                    <Text style={styles.gridItemBadgeText}>Official Site</Text>
                  </View> */}
                </View>
              </TouchableOpacity>
            </View>

            {/* Row 3 */}
            <View style={styles.gridRow}>
              <TouchableOpacity
                style={[styles.gridItem, { flex: 1 }]}
                onPress={() => openWebsite('https://disneyworld.disney.go.com/destinations/animal-kingdom/pandora-world-of-avatar/')}
              >
                <Image
                  source={require('../../assets/images/Avatar.webp')}
                  style={styles.gridItemImage}
                  resizeMode="cover"
                />
                <View style={styles.gridItemOverlay}>
                  <Text style={styles.gridItemTitle}>Pandora</Text>
                  {/* <View style={styles.gridItemBadge}>
                    <Text style={styles.gridItemBadgeText}>Official Site</Text>
                  </View> */}
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.gridItem, { flex: 1 }]}
                onPress={() => openWebsite('https://disneyworld.disney.go.com/destinations/hollywood-studios/star-wars-galaxys-edge/')}
              >
                <Image
                  source={require('../../assets/images/StarWars.webp')}
                  style={styles.gridItemImage}
                  resizeMode="cover"
                />
                <View style={styles.gridItemOverlay}>
                  <Text style={styles.gridItemTitle}>Galaxy's Edge</Text>
                  {/* <View style={styles.gridItemBadge}>
                    <Text style={styles.gridItemBadgeText}>Official Site</Text>
                  </View> */}
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Disney Water Parks */}
          <View style={styles.waterParksSection}>
            <Text style={styles.waterParksTitle}>Disney Water Parks</Text>
            <View style={styles.waterParksGrid}>
              <TouchableOpacity
                style={styles.waterParkCard}
                onPress={() => openWebsite('https://disneyworld.disney.go.com/destinations/typhoon-lagoon/')}
              >
                <Image
                  source={require('../../assets/images/TyphoonLagoon.jpg')}
                  style={styles.waterParkImage}
                  resizeMode="cover"
                />
                <View style={styles.waterParkOverlay}>
                  <Text style={styles.waterParkTitle}>Disney's Typhoon Lagoon</Text>
                  <Text style={styles.waterParkDescription}>
                    Tropical paradise water park featuring one of America's largest wave pools, thrilling water slides, and lazy river.
                  </Text>
                  <View style={styles.waterParkButton}>
                    <View style={styles.buttonContent}>
                      <Waves size={14} color="#ffffff" />
                      <Text style={styles.waterParkButtonText}>Official Site</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.waterParkCard}
                onPress={() => openWebsite('https://disneyworld.disney.go.com/destinations/blizzard-beach/')}
              >
                <Image
                  source={require('../../assets/images/BlizzardBeach.jpg')}
                  style={styles.waterParkImage}
                  resizeMode="cover"
                />
                <View style={styles.waterParkOverlay}>
                  <Text style={styles.waterParkTitle}>Disney's Blizzard Beach</Text>
                  <Text style={styles.waterParkDescription}>
                    Ski resort themed water park featuring Summit Plummet, one of the tallest and fastest water slides in the world.
                  </Text>
                  <View style={styles.waterParkButton}>
                    <View style={styles.buttonContent}>
                      <Waves size={14} color="#ffffff" />
                      <Text style={styles.waterParkButtonText}>Official Site</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Universal Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={[styles.sectionIcon, { backgroundColor: '#dc2626' }]}>
              <Rocket size={20} color="#ffffff" />
            </View>
            <Text style={[styles.sectionTitle, { color: '#dc2626' }]}>Universal Orlando Resort</Text>
          </View>

          {/* Universal Main Card */}
          <TouchableOpacity
            style={styles.mainCard}
            onPress={() => openWebsite('https://www.universalorlando.com/', 'Universal Orlando')}
          >
            <Image
              source={require('../../assets/images/UniversalEntrance.webp')}
              style={styles.mainCardImage}
              resizeMode="cover"
            />
            <View style={[styles.mainCardOverlay, { backgroundColor: 'rgba(220, 38, 38, 0.6)' }]}>
              <View style={styles.mainCardContent}>
                <Text style={styles.mainCardTitle}>Universal Orlando Resort</Text>
                <Text style={styles.mainCardDescription}>
                  Immerse yourself in thrilling adventures across Universal Studios, Islands of Adventure, and the upcoming Epic Universe.
                </Text>
                <View style={[styles.mainCardButton, { backgroundColor: '#dc2626' }]}>
                  <View style={styles.buttonContent}>
                    <Rocket size={16} color="#ffffff" />
                    <Text style={styles.mainCardButtonText}>Official Site</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* Universal Parks */}
          <View style={styles.parksGrid}>
            <Text style={styles.gridTitle}>Explore Universal's Incredible Theme Parks</Text>

            <View style={[styles.universalParksContainer, { backgroundColor: '#fef2f2' }]}>
              <View style={styles.gridRow}>
                <TouchableOpacity
                  style={[styles.gridItem, { flex: 1 }]}
                  onPress={() => openWebsite('https://www.universalorlando.com/web/en/us/theme-parks/universal-studios-florida')}
                >
                  <Image
                    source={require('../../assets/images/UniversalStudiosFL.jpeg')}
                    style={styles.gridItemImage}
                    resizeMode="cover"
                  />
                  <View style={styles.gridItemOverlay}>
                    <Text style={styles.gridItemTitle}>Universal Studios Florida</Text>
                    {/* <View style={[styles.gridItemBadge, { backgroundColor: '#dc2626' }]}>
                      <Text style={styles.gridItemBadgeText}>Official Site</Text>
                    </View> */}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.gridItem, { flex: 1 }]}
                  onPress={() => openWebsite('https://www.universalorlando.com/web/en/us/theme-parks/islands-of-adventure')}
                >
                  <Image
                    source={require('../../assets/images/IslandsOfAdventure.jpeg')}
                    style={styles.gridItemImage}
                    resizeMode="cover"
                  />
                  <View style={styles.gridItemOverlay}>
                    <Text style={styles.gridItemTitle}>Islands of Adventure</Text>
                    {/* <View style={[styles.gridItemBadge, { backgroundColor: '#dc2626' }]}>
                      <Text style={styles.gridItemBadgeText}>Official Site</Text>
                    </View> */}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={[styles.gridTitle, { color: '#7c3aed',marginVertical:15 }]}>Universal's Epic Universe</Text>

          <TouchableOpacity
            style={styles.mainCard}
            onPress={() => openWebsite('https://www.universalorlando.com/web/en/us/theme-parks/epic-universe', 'Universal Epic Universe')}
          >
            <View style={styles.videoContainer}>
              <Video
                source={require('../../assets/images/EpicEntrance.mp4')}
                style={styles.mainCardImage}
                resizeMode="cover"
                repeat
                muted
                playInBackground={false}
                playWhenInactive={false}
              />
            </View>
            <View style={[styles.mainCardOverlay, { backgroundColor: 'rgba(124, 58, 237, 0.4)' }]}>
              <View style={styles.mainCardContent}>
                <Text style={styles.mainCardDescription}>
                  Experience the magic of Universal's Epic Universe - Now Open!
                </Text>
                <TouchableOpacity 
                  style={[styles.mainCardButton, { backgroundColor: '#7c3aed' }]}
                  onPress={() => openWebsite('https://www.universalorlando.com/', 'Universal Orlando')}
                >
                  <View style={styles.buttonContent}>
                    <ExternalLink size={16} color="#ffffff" />
                    <Text style={styles.mainCardButtonText}>Official Site</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          {/* BRAND NEW ATTRACTIONS Section */}
          <View style={styles.brandNewSection}>
            <Text style={styles.brandNewTitle}>BRAND NEW ATTRACTIONS</Text>

            <View style={styles.brandNewGrid}>
              {/* Row 1 - Ministry of Magic & Super Nintendo World */}
              <View style={styles.brandNewRow}>
                <TouchableOpacity
                  style={[styles.brandNewCard, { flex: 1 }]}
                  onPress={() => openWebsite('https://www.universalorlando.com/web/en/us/theme-parks/epic-universe')}
                >
                  <Image
                    source={require('../../assets/images/epic-ministry-of-magic.jpg')}
                    style={styles.brandNewImage}
                    resizeMode="cover"
                  />
                  <View style={styles.brandNewOverlay}>
                    <Text style={styles.brandNewCardTitle}>Ministry of Magic</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.brandNewRow}>
              <TouchableOpacity
                  style={[styles.brandNewCard, { flex: 1 }]}
                  onPress={() => openWebsite('https://www.universalorlando.com/web/en/us/theme-parks/epic-universe')}
                >
                  <Image
                    source={require('../../assets/images/epic-nintendo-world.jpg')}
                    style={styles.brandNewImage}
                    resizeMode="cover"
                  />
                  <View style={styles.brandNewOverlay}>
                    <Text style={styles.brandNewCardTitle}>Super Nintendo World</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.brandNewRow}>
              <TouchableOpacity
                  style={[styles.brandNewCard, { flex: 1 }]}
                  onPress={() => openWebsite('https://www.universalorlando.com/web/en/us/theme-parks/epic-universe')}
                >
                  <Image
                    source={require('../../assets/images/epic-isle-of-berk.jpg')}
                    style={styles.brandNewImageSmall}
                    resizeMode="cover"
                  />
                  <View style={styles.brandNewOverlay}>
                    <Text style={styles.brandNewCardTitle}>Isle of Berk</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.brandNewRow}>
              <TouchableOpacity
                  style={[styles.brandNewCard, { flex: 1 }]}
                  onPress={() => openWebsite('https://www.universalorlando.com/web/en/us/theme-parks/epic-universe')}
                >
                  <Image
                    source={require('../../assets/images/epic-dark-universe.jpg')}
                    style={styles.brandNewImageSmall}
                    resizeMode="cover"
                  />
                  <View style={styles.brandNewOverlay}>
                    <Text style={styles.brandNewCardTitle}>Dark Universe</Text>
                  </View>
                </TouchableOpacity>
              </View>



              {/* Row 2 - Isle of Berk, Dark Universe, Celestial Park */}
              <View style={styles.brandNewRow}>




                <TouchableOpacity
                  style={[styles.brandNewCard, { flex: 1 }]}
                  onPress={() => openWebsite('https://www.universalorlando.com/web/en/us/theme-parks/epic-universe')}
                >
                  <Image
                    source={require('../../assets/images/epic-celestial-park.jpg')}
                    style={styles.brandNewImageSmall}
                    resizeMode="cover"
                  />
                  <View style={styles.brandNewOverlay}>
                    <Text style={styles.brandNewCardTitle}>Celestial Park</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.epicUniverseSubtext}>
              Universal's Epic Universe - Orlando's newest theme park - Now Open!
            </Text>
          </View>

          {/* Volcano Bay */}
          <TouchableOpacity
            style={styles.volcanoBayCard}
            onPress={() => openWebsite('https://www.universalorlando.com/web/en/us/theme-parks/volcano-bay')}
          >
            <Image
              source={require('../../assets/images/VolcanoBay.webp')}
              style={styles.volcanoBayImage}
              resizeMode="cover"
            />
            <View style={styles.volcanoBayOverlay}>
              <Text style={styles.volcanoBayTitle}>Universal's Volcano Bay</Text>
              <Text style={styles.volcanoBayDescription}>
                A tropical paradise featuring thrilling water slides, lazy rivers, and the iconic Krakatau volcano.
              </Text>
              <View style={styles.volcanoBayButton}>
                <View style={styles.buttonContent}>
                  <ExternalLink size={16} color="#ffffff" />
                  <Text style={styles.volcanoBayButtonText}>Official Site</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* More Amazing Adventures Section */}
        <View style={styles.section}>
          <View style={styles.moreAdventuresHeader}>
            {/* <View style={styles.moreAdventuresIcon}>
              <Star size={20} color="#ffffff" />
            </View> */}
            <Text style={styles.moreAdventuresTitle}>More Amazing Adventures</Text>
          </View>

          {/* SeaWorld Parks & Entertainment */}
          <View style={styles.seaworldSection}>
            <View style={styles.seaworldSectionHeader}>
              <View style={styles.seaworldSectionIcon}>
                <Waves size={20} color="#ffffff" />
              </View>
              <Text style={styles.seaworldSectionTitle}>SeaWorld Parks & Entertainment</Text>
            </View>

            <TouchableOpacity
              style={styles.seaworldMainCard}
              onPress={() => openWebsite('https://seaworld.com/orlando/')}
            >
              <Image
                source={require('../../assets/images/Seaworld5.jpg')}
                style={styles.seaworldMainImage}
                resizeMode="cover"
              />
              <View style={styles.seaworldMainOverlay}>
                <Text style={styles.seaworldMainTitle}>SeaWorld Orlando</Text>
                <Text style={styles.seaworldMainDescription}>
                  Experience marine life up close, thrilling coasters, and educational exhibits at Orlando's premier marine theme park.
                </Text>
                <View style={styles.seaworldMainButton}>
                  <View style={styles.buttonContent}>
                    <ExternalLink size={16} color="#ffffff" />
                    <Text style={styles.seaworldMainButtonText}>Official Site</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* Experience the Magic of SeaWorld */}
            <View style={styles.seaworldExperience}>
              <Text style={styles.seaworldExperienceTitle}>Experience the Magic of SeaWorld</Text>
              <View style={styles.seaworldExperienceGrid}>
                {/* Dolphin Show */}
                <TouchableOpacity style={styles.seaworldExperienceCard}>
                  <Image
                    source={require('../../assets/images/Seaworld.png')}
                    style={styles.seaworldExperienceImage}
                    resizeMode="cover"
                  />
                  <View style={styles.seaworldExperienceOverlay}>
                    <Text style={styles.seaworldExperienceLabel}>Dolphin Encounter</Text>
                  </View>
                </TouchableOpacity>
                
                {/* Roller Coaster */}
                <TouchableOpacity style={styles.seaworldExperienceCard}>
                  <Image
                    source={require('../../assets/images/Seaworld3.webp')}
                    style={styles.seaworldExperienceImage}
                    resizeMode="cover"
                  />
                  <View style={styles.seaworldExperienceOverlay}>
                    <Text style={styles.seaworldExperienceLabel}>Thrilling Coasters</Text>
                  </View>
                </TouchableOpacity>
                
                {/* Sesame Street */}
                <TouchableOpacity style={styles.seaworldExperienceCard}>
                  <Image
                    source={require('../../assets/images/SesameStreet.webp')}
                    style={styles.seaworldExperienceImage}
                    resizeMode="cover"
                  />
                  <View style={styles.seaworldExperienceOverlay}>
                    <Text style={styles.seaworldExperienceLabel}>Sesame Street Land</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            
            {/* Aquatica and Discovery Cove smaller cards */}
            <View style={styles.seaworldWaterParksGrid}>
              {/* Aquatica Card */}
              <TouchableOpacity
                style={styles.seaworldWaterParkCard}
                onPress={() => openWebsite('https://aquatica.com/orlando/')}
              >
                <Image
                  source={require('../../assets/images/Aquatica.jpg')}
                  style={styles.seaworldWaterParkImage}
                  resizeMode="cover"
                />
                <View style={styles.seaworldWaterParkOverlay}>
                  <Text style={styles.seaworldWaterParkTitle}>Aquatica Orlando</Text>
                  <Text style={styles.seaworldWaterParkDescription}>
                    SeaWorld's water park with thrilling slides and animal encounters in a South Seas-inspired setting.
                  </Text>
                  <TouchableOpacity 
                    style={styles.seaworldWaterParkButton}
                    onPress={() => openWebsite('https://aquatica.com/orlando/')}
                  >
                    <Waves size={12} color="#ffffff" />
                    <Text style={styles.seaworldWaterParkButtonText}>Visit Aquatica</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              
              {/* Discovery Cove Card */}
              <TouchableOpacity
                style={styles.seaworldWaterParkCard}
                onPress={() => openWebsite('https://discoverycove.com/')}
              >
                <Image
                  source={require('../../assets/images/DiscoveryCove.jpg')}
                  style={styles.seaworldWaterParkImage}
                  resizeMode="cover"
                />
                <View style={styles.seaworldWaterParkOverlay}>
                  <Text style={styles.seaworldWaterParkTitle}>Discovery Cove</Text>
                  <Text style={styles.seaworldWaterParkDescription}>
                    All-inclusive day resort with dolphin swims, snorkeling, and tropical relaxation.
                  </Text>
                  <TouchableOpacity 
                    style={styles.seaworldWaterParkButton}
                    onPress={() => openWebsite('https://discoverycove.com/')}
                  >
                    <Droplet size={12} color="#ffffff" />
                    <Text style={styles.seaworldWaterParkButtonText}>Discover Paradise</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* LEGOLAND Florida */}
          <View style={styles.legolandSection}>
            <View style={styles.legolandSectionHeader}>
              <View style={styles.legolandSectionIcon}>
                <Gamepad2 size={20} color="#ffffff" />
              </View>
              <Text style={styles.legolandSectionTitle}>LEGOLAND Florida</Text>
            </View>

            <TouchableOpacity
              style={styles.legolandMainCard}
              onPress={() => openWebsite('https://www.legoland.com/florida/')}
            >
              <Image
                source={require('../../assets/images/LegoLand3.webp')}
                style={styles.legolandMainImage}
                resizeMode="contain"
              />
              <View style={styles.legolandMainOverlay}>
                <Text style={styles.legolandMainTitle}>LEGOLAND Florida</Text>
                <Text style={styles.legolandMainDescription}>
                  A colorful family playground with LEGO-themed rides, Peppa Pig Land, shows, and attractions perfect for kids 2-12.
                </Text>
                <View style={styles.legolandMainButton}>
                  <View style={styles.buttonContent}>
                    <ExternalLink size={16} color="#ffffff" />
                    <Text style={styles.legolandMainButtonText}>Official Site</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Seasonal Events Section */}
        <View style={styles.seasonalEventsSection}>
          <View style={styles.seasonalEventsHeader}>
            {/* <View style={styles.seasonalEventsIcon}>
              <Calendar size={24} color="#ffffff" />
            </View> */}
            <Text style={styles.seasonalEventsTitle}>Magical Seasonal Events</Text>
          </View>

          <View style={styles.seasonalEventsContainer}>
            <View style={styles.majorEventsHeader}>
              <View style={styles.majorEventsIcon}>
                <Sparkles size={16} color="#ffffff" />
              </View>
              <Text style={styles.majorEventsTitle}>Major Annual Events</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tableScrollContainer}>
              <View style={styles.tableContainer}>
                {/* Table Header */}
                <View style={styles.tableHeader}>
                  <Text style={[styles.tableHeaderCell, styles.eventColumn]}>Event</Text>
                  <Text style={[styles.tableHeaderCell, styles.venueColumn]}>Venue</Text>
                  <Text style={[styles.tableHeaderCell, styles.whenColumn]}>When</Text>
                  <Text style={[styles.tableHeaderCell, styles.websiteColumn]}>Website</Text>
                </View>

                {/* Table Rows */}
                <TouchableOpacity
                  style={styles.tableRow}
                  onPress={() => openWebsite('https://www.universalorlando.com/web/en/us/things-to-do/events/halloween-horror-nights')}
                >
                  <Text style={[styles.tableCell, styles.tableCellBold, styles.eventColumn]}>Halloween Horror Nights</Text>
                  <Text style={[styles.tableCell, styles.venueColumn]}>Universal Studios Florida</Text>
                  <Text style={[styles.tableCell, styles.whenColumn]}>Sept-Oct</Text>
                  <View style={[styles.tableLinkCell, styles.websiteColumn]}>
                    <Text style={styles.tableLink}>Visit</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.tableRow}
                  onPress={() => openWebsite('https://disneyworld.disney.go.com/events-tours/epcot/epcot-international-food-and-wine-festival/')}
                >
                  <Text style={[styles.tableCell, styles.tableCellBold, styles.eventColumn]}>EPCOT Food & Wine Festival</Text>
                  <Text style={[styles.tableCell, styles.venueColumn]}>EPCOT</Text>
                  <Text style={[styles.tableCell, styles.whenColumn]}>Aug-Nov</Text>
                  <View style={[styles.tableLinkCell, styles.websiteColumn]}>
                    <Text style={styles.tableLink}>Visit</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.tableRow}
                  onPress={() => openWebsite('https://disneyworld.disney.go.com/events-tours/magic-kingdom/mickeys-not-so-scary-halloween-party/')}
                >
                  <Text style={[styles.tableCell, styles.tableCellBold, styles.eventColumn]}>Mickey's Not-So-Scary Halloween Party</Text>
                  <Text style={[styles.tableCell, styles.venueColumn]}>Magic Kingdom</Text>
                  <Text style={[styles.tableCell, styles.whenColumn]}>Aug-Oct</Text>
                  <View style={[styles.tableLinkCell, styles.websiteColumn]}>
                    <Text style={styles.tableLink}>Visit</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.tableRow}
                  onPress={() => openWebsite('https://disneyworld.disney.go.com/events-tours/magic-kingdom/mickeys-very-merry-christmas-party/')}
                >
                  <Text style={[styles.tableCell, styles.tableCellBold, styles.eventColumn]}>Mickey's Very Merry Christmas Party</Text>
                  <Text style={[styles.tableCell, styles.venueColumn]}>Magic Kingdom</Text>
                  <Text style={[styles.tableCell, styles.whenColumn]}>Nov-Dec</Text>
                  <View style={[styles.tableLinkCell, styles.websiteColumn]}>
                    <Text style={styles.tableLink}>Visit</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.tableRow}
                  onPress={() => openWebsite('https://disneyworld.disney.go.com/events-tours/epcot/epcot-international-flower-and-garden-festival/')}
                >
                  <Text style={[styles.tableCell, styles.tableCellBold, styles.eventColumn]}>EPCOT Flower & Garden Festival</Text>
                  <Text style={[styles.tableCell, styles.venueColumn]}>EPCOT</Text>
                  <Text style={[styles.tableCell, styles.whenColumn]}>Mar-Jul</Text>
                  <View style={[styles.tableLinkCell, styles.websiteColumn]}>
                    <Text style={styles.tableLink}>Visit</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.tableRow}
                  onPress={() => openWebsite('https://disneyworld.disney.go.com/events-tours/epcot/epcot-international-festival-of-the-holidays/')}
                >
                  <Text style={[styles.tableCell, styles.tableCellBold, styles.eventColumn]}>EPCOT Festival of the Holidays</Text>
                  <Text style={[styles.tableCell, styles.venueColumn]}>EPCOT</Text>
                  <Text style={[styles.tableCell, styles.whenColumn]}>Nov-Dec</Text>
                  <View style={[styles.tableLinkCell, styles.websiteColumn]}>
                    <Text style={styles.tableLink}>Visit</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
            
            {/* Seasonal Cards Grid */}
            <View style={styles.seasonalCardsGrid}>
              {/* Spring Card */}
              <View style={styles.seasonalCardSpring}>
                <View style={styles.seasonalCardHeader}>
                  <View style={styles.seasonalCardIconSpring}>
                    <Palmtree size={16} color="#ffffff" />
                  </View>
                  <Text style={styles.seasonalCardTitleSpring}>Spring Magic</Text>
                </View>
                <View style={styles.seasonalCardList}>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletSpring} />
                    <Text style={styles.seasonalCardText}>SeaWorld Seven Seas Food Festival</Text>
                  </View>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletSpring} />
                    <Text style={styles.seasonalCardText}>Easter celebrations at all major parks</Text>
                  </View>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletSpring} />
                    <Text style={styles.seasonalCardText}>Disney's Star Wars Galactic Nights</Text>
                  </View>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletSpring} />
                    <Text style={styles.seasonalCardText}>Discovery Cove Spring Break events</Text>
                  </View>
                </View>
              </View>
              
              {/* Summer Card */}
              <View style={styles.seasonalCardSummer}>
                <View style={styles.seasonalCardHeader}>
                  <View style={styles.seasonalCardIconSummer}>
                    <Droplet size={16} color="#ffffff" />
                  </View>
                  <Text style={styles.seasonalCardTitleSummer}>Summer Fun</Text>
                </View>
                <View style={styles.seasonalCardList}>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletSummer} />
                    <Text style={styles.seasonalCardText}>Universal Summer Concert Series</Text>
                  </View>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletSummer} />
                    <Text style={styles.seasonalCardText}>Extended evening hours at all parks</Text>
                  </View>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletSummer} />
                    <Text style={styles.seasonalCardText}>Special summer fireworks displays</Text>
                  </View>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletSummer} />
                    <Text style={styles.seasonalCardText}>Water park peak season operations</Text>
                  </View>
                </View>
              </View>
              
              {/* Fall Card */}
              <View style={styles.seasonalCardFall}>
                <View style={styles.seasonalCardHeader}>
                  <View style={styles.seasonalCardIconFall}>
                    <Sparkles size={16} color="#ffffff" />
                  </View>
                  <Text style={styles.seasonalCardTitleFall}>Fall Adventures</Text>
                </View>
                <View style={styles.seasonalCardList}>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletFall} />
                    <Text style={styles.seasonalCardText}>SeaWorld Spooktacular Weekends</Text>
                  </View>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletFall} />
                    <Text style={styles.seasonalCardText}>LEGOLAND Brick-or-Treat</Text>
                  </View>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletFall} />
                    <Text style={styles.seasonalCardText}>Gaylord Palms Fall Festivities</Text>
                  </View>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletFall} />
                    <Text style={styles.seasonalCardText}>Fun Spot's Halloween events</Text>
                  </View>
                </View>
              </View>
              
              {/* Winter Card */}
              <View style={styles.seasonalCardWinter}>
                <View style={styles.seasonalCardHeader}>
                  <View style={styles.seasonalCardIconWinter}>
                    <Rocket size={16} color="#ffffff" />
                  </View>
                  <Text style={styles.seasonalCardTitleWinter}>Winter Wonders</Text>
                </View>
                <View style={styles.seasonalCardList}>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletWinter} />
                    <Text style={styles.seasonalCardText}>Epcot Festival of the Holidays</Text>
                  </View>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletWinter} />
                    <Text style={styles.seasonalCardText}>Disney Springs Christmas Tree Trail</Text>
                  </View>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletWinter} />
                    <Text style={styles.seasonalCardText}>LEGOLAND Holidays</Text>
                  </View>
                  <View style={styles.seasonalCardItem}>
                    <View style={styles.seasonalCardBulletWinter} />
                    <Text style={styles.seasonalCardText}>ICE! at Gaylord Palms</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
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
  webViewHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  closeButton: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  webView: {
    flex: 1,
  },
  heroSection: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  heroContent: {
    padding: 12,
    paddingHorizontal: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
  heroTitle: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    transform: [{ rotate: '-2deg' }],
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.2)',
  },
  heroTitleText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  heroTitleAccent: {
    color: '#fde047',
  },
  heroDescription: {
    fontSize: 10,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 4,
    lineHeight: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  heroTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4,
  },
  heroTag: {
    backgroundColor: 'rgba(147, 51, 234, 0.3)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(147, 51, 234, 0.3)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  heroTagText: {
    fontSize: 9,
    color: '#ffffff',
    fontWeight: '500',
  },
  heroTagContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  heroGradientBackground: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  heroPatternOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    backgroundColor: 'transparent',
  },
  patternSvg: {
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  heroTitleContainer: {
    position: 'relative',
    marginRight: 0,
    marginBottom: 8,
  },
  heroTitleDecoration: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#fde047',
    opacity: 0.8,
  },
  heroContentArea: {
    flex: 1,
    marginTop: 0,
    alignItems: 'center',
  },
  section: {
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1e40af',
    flex: 1,
  },
  mainCard: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  mainCardImage: {
    width: '100%',
    height: 380,
  },
  mainCardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
   // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  mainCardContent: {
    alignItems: 'flex-start',
  },
  mainCardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  mainCardDescription: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 16,
    lineHeight: 22,
  },
  mainCardButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  mainCardButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 999,
  },
  parksGrid: {
    marginTop: 16,
  },
  gridTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 16,
  },
  gridTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
  },
  gridRow: {
    flexDirection: 'row',
    marginBottom: 8,
    gap: 8,
  },
  gridItem: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    height: 120,
  },
  gridItemLarge: {
    height: 120,
  },
  gridItemImage: {
    width: '100%',
    height: 120,
  },
  gridItemOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 12,
    alignItems: 'center',
  },
  gridItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  universalCard: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  universalCardImage: {
    width: '100%',
    height: 200,
  },
  universalCardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
  },
  universalCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  universalCardDescription: {
    fontSize: 14,
    color: '#ffffff',
    lineHeight: 20,
  },
  seaworldMainCard: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  seaworldMainImage: {
    width: '100%',
    height: 320,
  },
  seaworldMainOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  seaworldMainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  seaworldMainDescription: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 22,
  },
  seaworldGrid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  seaworldCard: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  seaworldCardImage: {
    width: '100%',
    height: 200,
  },
  seaworldCardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 12,
  },
  seaworldCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  seaworldCardDescription: {
    fontSize: 12,
    color: '#ffffff',
    lineHeight: 16,
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: 380,
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(37, 99, 235, 0.4)',
  },
  gridItemBadge: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#2563eb',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    opacity: 0.9,
  },
  gridItemBadgeText: {
    fontSize: 10,
    color: '#ffffff',
    fontWeight: '500',
  },
  waterParksSection: {
    marginTop: 24,
  },
  waterParksTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 16,
  },
  waterParksGrid: {
    flexDirection: 'column',
    gap: 16,
  },
  waterParkCard: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
   // paddingTop: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  waterParkImage: {
    width: '100%',
    height: 200,
  },
  waterParkOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 16,
  },
  waterParkTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  waterParkDescription: {
    fontSize: 12,
    color: '#ffffff',
    lineHeight: 16,
    marginBottom: 12,
  },
  waterParkButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  waterParkButtonText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
  },
  seasonalEventsSection: {
    marginTop: 0,
    paddingHorizontal: 16,
  },
  seasonalEventsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  seasonalEventsIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ec4899',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  seasonalEventsTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ec4899',
  },
  seasonalEventsContainer: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  tableContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    minWidth: 530, // Minimum width to accommodate all columns
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#1e293b',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tableHeaderCell: {
    flex: 1,
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  tableCell: {
    flex: 1,
    fontSize: 12,
    color: '#374151',
  },
  tableCellBold: {
    fontWeight: '600',
    color: '#1e293b',
  },
  tableLinkCell: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableLink: {
    fontSize: 12,
    color: '#ea580c',
    fontWeight: '500',
  },
  tableScrollContainer: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  eventColumn: {
    width: 200,
    minWidth: 200,
  },
  venueColumn: {
    width: 150,
    minWidth: 150,
  },
  whenColumn: {
    width: 100,
    minWidth: 100,
  },
  websiteColumn: {
    width: 80,
    minWidth: 80,
  },
  // Seasonal Cards Styles
  seasonalCardsGrid: {
    flexDirection: 'column',
    gap: 16,
    marginTop: 24,
  },
  seasonalCardSpring: {
    backgroundColor: '#faf5ff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#e9d5ff',
  },
  seasonalCardSummer: {
    backgroundColor: '#fff7ed',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#fed7aa',
  },
  seasonalCardFall: {
    backgroundColor: '#fffbeb',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#fde68a',
  },
  seasonalCardWinter: {
    backgroundColor: '#eff6ff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#bfdbfe',
  },
  seasonalCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  seasonalCardIconSpring: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#a855f7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  seasonalCardIconSummer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fb923c',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  seasonalCardIconFall: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f59e0b',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  seasonalCardIconWinter: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  seasonalCardTitleSpring: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7c3aed',
  },
  seasonalCardTitleSummer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ea580c',
  },
  seasonalCardTitleFall: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d97706',
  },
  seasonalCardTitleWinter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1d4ed8',
  },
  seasonalCardList: {
    gap: 8,
  },
  seasonalCardItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seasonalCardBulletSpring: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#a855f7',
    marginRight: 8,
  },
  seasonalCardBulletSummer: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#fb923c',
    marginRight: 8,
  },
  seasonalCardBulletFall: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#f59e0b',
    marginRight: 8,
  },
  seasonalCardBulletWinter: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#3b82f6',
    marginRight: 8,
  },
  seasonalCardText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  // Major Events Header Styles
  majorEventsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  majorEventsIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  majorEventsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  universalParksContainer: {
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
  },
  epicUniverseSection: {
    marginTop: 24,
  },
  epicUniverseTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 16,
  },
  epicUniverseCard: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  epicUniverseImage: {
    width: '100%',
    height: 200,
  },
  epicUniverseOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
  },
  epicUniverseCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  epicUniverseDescription: {
    fontSize: 14,
    color: '#ffffff',
    lineHeight: 20,
    marginBottom: 12,
  },
  epicUniverseButton: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  epicUniverseButtonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
  // Brand New Attractions Styles
  brandNewSection: {
    marginTop: 24,
  },
  brandNewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7c3aed',
    textAlign: 'center',
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  brandNewGrid: {
    marginBottom: 16,
  },
  brandNewRow: {
    flexDirection: 'row',
    marginBottom: 8,
    gap: 8,
  },
  brandNewCard: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  brandNewImage: {
    width: '100%',
    height: 160,
  },
  brandNewImageSmall: {
    width: '100%',
    height: 120,
  },
  brandNewOverlay: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
  },
  brandNewCardTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  epicUniverseSubtext: {
    fontSize: 12,
    color: '#6b7280',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 8,
  },
  // Volcano Bay Styles
  volcanoBayCard: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  volcanoBayImage: {
    width: '100%',
    height: 280,
  },
  volcanoBayOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
  },
  volcanoBayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  volcanoBayDescription: {
    fontSize: 14,
    color: '#ffffff',
    lineHeight: 20,
    marginBottom: 12,
  },
  volcanoBayButton: {
    backgroundColor: '#ea580c',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  volcanoBayButtonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
  // More Amazing Adventures Styles
  moreAdventuresHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
   
  },
  moreAdventuresIcon: {
    width: 32,
    height: 32,
    borderRadius: 24,
    backgroundColor: '#14b8a6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  moreAdventuresTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#14b8a6',
  },
  // SeaWorld Section Styles
  seaworldSection: {
    marginBottom: 32,
  },
  seaworldSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  seaworldSectionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#0891b2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  seaworldSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0891b2',
  },
  seaworldMainButton: {
    backgroundColor: '#0891b2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  seaworldMainButtonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
  seaworldExperience: {
    marginTop: 24,
  },
  seaworldExperienceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0891b2',
    marginBottom: 12,
  },
  seaworldExperienceGrid: {
    flexDirection: 'column',
    gap: 12,
    marginBottom: 24,
  },
  seaworldExperienceCard: {
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  seaworldExperienceImage: {
    width: '100%',
    height: '100%',
  },
  seaworldExperienceOverlay: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
  },
  seaworldExperienceLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  seaworldWaterParksGrid: {
    flexDirection: 'column',
    gap: 16,
  },
  seaworldWaterParkCard: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  seaworldWaterParkImage: {
    width: '100%',
    height: 200,
  },
  seaworldWaterParkOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  seaworldWaterParkTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  seaworldWaterParkDescription: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  seaworldWaterParkButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 4,
  },
  seaworldWaterParkButtonText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
  },
  // LEGOLAND Section Styles
  legolandSection: {
    marginTop: 12,
  },
  legolandSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  legolandSectionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#eab308',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  legolandSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#eab308',
  },
  legolandMainCard: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: '#f0f8ff',
  },
  legolandMainImage: {
    width: '100%',
    height: 300,
    transform: [{ scale: 1.2 }],
  },
  legolandMainOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 20,
  },
  legolandMainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  legolandMainDescription: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 22,
    marginBottom: 12,
  },
  legolandMainButton: {
    backgroundColor: '#eab308',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  legolandMainButtonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default ThemeParksScreen;