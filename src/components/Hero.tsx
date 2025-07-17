import React, { useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  StatusBar, 
  Dimensions, 
  Animated,
  Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient  from 'react-native-linear-gradient';
import { 
  Building2, 
  Mountain, 
  Hotel, 
  Utensils, 
  ShoppingCart, 
  Calendar, 
  Beer, 
  Flag, 
  Leaf, 
  MapPin 
} from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

// Orlando-themed images from local montage folder
const orlandoImages = [
  require('../../assets/montage/DonaldDuck.jpeg'),
  require('../../assets/montage/AnimalKingdom.jpeg'),
  require('../../assets/montage/HarryPotter1.jpeg'),
  require('../../assets/montage/Starwars1.jpeg'),
  require('../../assets/montage/Frozen.jpeg'),
  require('../../assets/montage/Avatar1.jpeg'),
  require('../../assets/montage/Minions1.jpeg'),
  require('../../assets/montage/transformers.jpeg'),
  require('../../assets/montage/DisneySprings.jpg'),
  require('../../assets/montage/Seaworld3.jpeg'),
  require('../../assets/montage/Seaworld4.jpeg'),
  require('../../assets/montage/Seaworld5.jpeg'),
  require('../../assets/montage/DiscoveryCove.jpeg'),
  require('../../assets/montage/Aquatica.jpg'),
  require('../../assets/montage/BlizzardBeach.jpg'),
  require('../../assets/montage/Gatorland.jpg'),
];

// Enhanced categories with Lucide icons matching the screenshot
const categories = [
  { id: 'theme-parks', label: 'Theme Parks', icon: Building2, color: '#0D9488' },
  { id: 'attractions', label: 'Attractions', icon: Mountain, color: '#0D9488' },
  { id: 'hotels', label: 'Hotels', icon: Hotel, color: '#0D9488' },
  { id: 'dining', label: 'Dining', icon: Utensils, color: '#0D9488' },
  { id: 'shopping', label: 'Shopping', icon: ShoppingCart, color: '#0D9488' },
  { id: 'entertainment', label: 'Live Entertainment', icon: Calendar, color: '#0D9488' },
  { id: 'bar-hop', label: 'Locals Bar Hop', icon: Beer, color: '#0D9488' },
  { id: 'golf', label: 'Golf', icon: Flag, color: '#0D9488' },
  { id: 'spas', label: 'Spas', icon: Leaf, color: '#0D9488' },
  { id: 'neighborhoods', label: 'Neighborhoods', icon: MapPin, color: '#0D9488' },
];

// Enhanced image dimensions
const imageWidth = width / 2.1;
const imageHeight = 225;

const Hero: React.FC = () => {
  
  // Animation values for smooth parallax scrolling
  const scrollX1 = useRef(new Animated.Value(0)).current;
  const scrollX2 = useRef(new Animated.Value(0)).current;
  const scrollX3 = useRef(new Animated.Value(0)).current;
  
  // Enhanced content animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(60)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  
  // Floating animation for categories
  const floatAnim = useRef(new Animated.Value(0)).current;
  
  // Sparkle animation
  const sparkleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const totalWidth = imageWidth * orlandoImages.length;
    
    // Enhanced content entrance animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      })
    ]).start();
    
    // Floating animation for categories
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        })
      ])
    ).start();
    
    // Sparkle animation
    Animated.loop(
      Animated.timing(sparkleAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      })
    ).start();
    
    // Enhanced smooth scrolling animations with easing
    const createSmoothAnimation = (animValue: Animated.Value, duration: number, reverse: boolean = false) => {
      return Animated.loop(
        Animated.timing(animValue, {
          toValue: reverse ? totalWidth : -totalWidth,
          duration: duration,
          useNativeDriver: true,
        })
      );
    };

    createSmoothAnimation(scrollX1, 85000).start(); // Row 1: Left to right
    createSmoothAnimation(scrollX2, 70000, true).start(); // Row 2: Right to left (reverse)
    createSmoothAnimation(scrollX3, 95000).start(); // Row 3: Left to right
  }, []);

  const renderImageRow = (images: any[], animatedValue: Animated.Value, isMiddleRow: boolean = false) => (
    <Animated.View
      style={[
        styles.imageRow,
        {
          transform: [{ translateX: animatedValue }],
          flexDirection: isMiddleRow ? 'row-reverse' : 'row',
        },
      ]}>
      {isMiddleRow
        ? [...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images].map((imageSource, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image
                source={imageSource}
                style={styles.backgroundImage}
                resizeMode="cover"
              />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.3)']}
                style={styles.imageOverlay}
              />
            </View>
          ))
        : [...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images].map((imageSource, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image
                source={imageSource}
                style={styles.backgroundImage}
                resizeMode="cover"
              />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.3)']}
                style={styles.imageOverlay}
              />
            </View>
          ))
      }
    </Animated.View>
  );

  const CategoryButton = ({ category }: { category: typeof categories[0] }) => {
    const IconComponent = category.icon;
    
    return (
      <TouchableOpacity
        style={[
          styles.categoryButton,
        ]}
        onPress={() => console.log('Category selected:', category.id)}
        activeOpacity={0.7}>
        <View style={styles.categoryContent}>
          <IconComponent 
            size={20} 
            color="#ffffff" 
            style={styles.categoryIcon}
          />
          <Text
            style={[
              styles.categoryText,
              {
                color: '#ffffff',
              },
            ]}>
            {category.label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      {/* Enhanced gradient background - changed to green */}
      <LinearGradient
  colors={['#D6B59C', '#A47551', '#8B5E3C']}
  style={styles.gradientBackground}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
/>
      
      {/* Animated background pattern */}
      {/* <Animated.View
        style={[
          styles.backgroundPattern,
          {
            opacity: sparkleAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.1, 0.3],
            }),
          },
        ]}
      /> */}
      
      {/* Enhanced multi-row scrolling background */}
      <View style={styles.backgroundContainer}>
        <View style={styles.backgroundRow}>
          {renderImageRow(orlandoImages, scrollX1)}
        </View>
        <View style={styles.backgroundRow}>
          {renderImageRow(orlandoImages, scrollX2, true)}
        </View>
        <View style={styles.backgroundRow}>
          {renderImageRow(orlandoImages, scrollX3)}
        </View>
      </View>

      {/* Enhanced content overlay */}
      {/* <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.1)']}
        style={styles.overlay}
      /> */}
      
      <SafeAreaView style={styles.content}>
        <Animated.View 
          style={[
            styles.header,
            {
              opacity: fadeAnim,
              transform: [
                { translateY: slideAnim },
                { scale: scaleAnim },
              ],
            }
          ]}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Awesome Orlando</Text>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>Your Ultimate Guide to the Magic City</Text>
              {/* <Animated.View
                style={[
                  styles.sparkle,
                  {
                    opacity: sparkleAnim,
                    transform: [
                      {
                        scale: sparkleAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0.5, 1.5],
                        }),
                      },
                    ],
                  },
                ]}
              /> */}
            </View>
          </View>
        </Animated.View>

        <Animated.View 
          style={[
            styles.categoriesWrapper,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            }
          ]}>
          <View style={styles.categoriesGrid}>
            {categories.map((category) => (
              <CategoryButton key={category.id} category={category} />
            ))}
          </View>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10B981',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 65,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  backgroundRow: {
    height: imageHeight,
    overflow: 'hidden',
    marginBottom: 20,
  },
  imageRow: {
    flexDirection: 'row',
    height: imageHeight,
  },
  imageContainer: {
    width: imageWidth,
    height: imageHeight,
    marginHorizontal: 10,
    position: 'relative',
  },
  backgroundImage: {
    width: imageWidth,
    height: imageHeight,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 15,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 50,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 52,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 0, height: 6 },
    textShadowRadius: 20,
    letterSpacing: 2,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
      android: {
        fontFamily: 'sans-serif-medium',
      },
    }),
  },
  subtitleContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 22,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 12,
    lineHeight: 28,
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
      android: {
        fontFamily: 'sans-serif-light',
      },
    }),
  },
  sparkle: {
    position: 'absolute',
    top: -10,
    right: -20,
    width: 20,
    height: 20,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  categoriesWrapper: {
    flex: 1,
    marginTop: 20,
  },
  categoriesContainer: {
    paddingBottom: 140,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
   paddingHorizontal: 20,
  },
  categoryButton: {
    borderRadius: 999,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  selectedCategory: {
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 18,
  },
  categoryContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
    position: 'relative',
    backgroundColor: '#0D9488',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#ffffff',
    flexDirection: 'row',
    gap: 8,
  },
  categoryIcon: {
    marginRight: 4,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#ffffff',
    ...Platform.select({
      ios: {
        fontFamily: 'System',
      },
      android: {
        fontFamily: 'sans-serif-medium',
      },
    }),
  },
  selectedIndicator: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 12,
    height: 12,
    backgroundColor: '#FFD700',
    borderRadius: 6,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default Hero;