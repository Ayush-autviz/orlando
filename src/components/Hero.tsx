import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { FerrisWheel, Landmark, Building, Soup, Shirt, PartyPopper, GlassWater, Flag, Sparkles, Map } from "lucide-react-native";
import { WhiteLabelConfig } from '../WhiteLabelConfig';

const { width, height } = Dimensions.get('window');

const getResponsiveDimensions = () => {
  const containerHeight = height * 0.5;

  return {
    containerHeight,
    titleFontSize: Math.max(28, width * 0.065),
    subtitleFontSize: 16,
  };
};

// Single static background image
const backgroundImage = require('../../assets/montage/UniversalEntrance.jpeg');
const categories = [
  { id: 'theme-parks', label: 'Theme Parks', icon: FerrisWheel },
  { id: 'attractions', label: 'Attractions', icon: Landmark },
  { id: 'hotels', label: 'Hotels', icon: Building },
  { id: 'dining', label: 'Dining', icon: Soup },
  { id: 'shopping', label: 'Shopping', icon: Shirt },
  { id: 'entertainment', label: 'Live Entertainment', icon: PartyPopper },
  { id: 'bar-hop', label: 'Locals Bar Hop', icon: GlassWater },
  { id: 'golf', label: 'Golf', icon: Flag },
  { id: 'spas', label: 'Spas', icon: Sparkles },
  { id: 'neighborhoods', label: 'Neighborhoods', icon: Map },
];

export default function Hero({ navigation }: any) {
  const responsive = getResponsiveDimensions();

  const CategoryButton = ({ item }: any) => {
    const Icon = item.icon;
    return (
      <TouchableOpacity style={styles.categoryButton}>
        <View style={[styles.categoryContent, { backgroundColor: WhiteLabelConfig.hero.categoryColor }]}>
          <Icon size={18} color="#fff" />
          <Text style={styles.categoryText}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { height: responsive.containerHeight }]}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* STATIC BACKGROUND IMAGE */}
      <Image source={backgroundImage} style={styles.backgroundImage} resizeMode="cover" />

      {/* DARK OVERLAY */}
      <LinearGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.25)', 'rgba(0,0,0,0.4)']} style={styles.overlay} />

      {/* CONTENT */}
      <SafeAreaView style={styles.content}>
        <Text style={[styles.title, { fontSize: responsive.titleFontSize }]}>
          {WhiteLabelConfig.appName + WhiteLabelConfig.hero.titleSuffix}
        </Text>

        <Text style={[styles.subtitle, { fontSize: responsive.subtitleFontSize }]}>
          {WhiteLabelConfig.tagline}
        </Text>

        <View style={styles.categoriesGrid}>
          {categories.map((c) => (
            <CategoryButton key={c.id} item={c} />
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },

  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },

  overlay: { ...StyleSheet.absoluteFillObject },

  content: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' },

  title: {
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    color: '#fff',
    opacity: 0.9,
    textAlign: 'center',
    marginBottom: 20,
  },

  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },

  categoryButton: {},

  categoryContent: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 50,
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: '#fff',
  },

  categoryText: {
    color: '#fff',
    fontWeight: '600',
  },
});
