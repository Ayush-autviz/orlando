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
  MapPin,
  DoorOpen,
  Ticket
} from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

// Responsive dimensions based on screen size
const getResponsiveDimensions = () => {
  const screenWidth = width;
  const screenHeight = height;
  
  // Fixed heights for different device sizes
  let containerHeight;
  if (screenWidth < 375) { // Small phones
    containerHeight = 600;
  } else if (screenWidth < 768) { // Medium phones and small tablets
    containerHeight = 500;
  } else { // Large tablets and desktops
    containerHeight = 800;
  }
  
  return {
    containerHeight,
    row1ImageWidth: screenWidth * 0.85,
    row1ImageHeight: containerHeight * 0.38,
    row2ImageWidth: screenWidth * 0.65,
    row2ImageHeight: containerHeight * 0.28,
    row3ImageWidth: screenWidth * 0.45,
    row3ImageHeight: containerHeight * 0.18,
    titleFontSize: Math.max(28, screenWidth * 0.065),
    subtitleFontSize: 14,
    categoryFontSize: Math.max(13, screenWidth * 0.038),
    categoryPadding: 10,
    categoryGap: 10,
    contentPadding: 20,
  };
};

// Orlando-themed images from local montage folder - matching website exactly
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
  require('../../assets/montage/BlueManGroup.jpeg'),
  require('../../assets/montage/HardRockLive.jpg'),
  require('../../assets/montage/BlueSpringStatePark.jpeg'),
  require('../../assets/montage/ArcadeMonsters.jpeg'),
  require('../../assets/montage/DaveBusterOrlando.jpeg'),
  require('../../assets/montage/BoggyCreekAirboatAdventures.jpeg'),
  require('../../assets/montage/BuenaVistaWatersports.jpeg'),
  require('../../assets/montage/EpicPaddleAdventures.jpeg'),
  require('../../assets/montage/DisneyCharacters.jpeg'),
  require('../../assets/montage/DisneyWildernessLodge.jpeg'),
  require('../../assets/montage/DisneySaratogaSpringsResortSpa.jpeg'),
  require('../../assets/montage/DisneysAnimalKingdomLodge1.jpg'),
  require('../../assets/montage/FourSeasonsOrlandoHotel.jpg'),
  require('../../assets/montage/GrandBohemianDowntownHotel.jpg'),
  require('../../assets/montage/CastleHotelAutographCollection.jpg'),
  require('../../assets/montage/HoopDeeDooMusicalRevue.jpeg'),
];

// Enhanced categories with Lucide icons matching the screenshot
const categories = [
  { id: 'theme-parks', label: 'Theme Parks', icon: DoorOpen, color: '#0D9488' },
  { id: 'attractions', label: 'Attractions', icon: Ticket, color: '#0D9488' },
  { id: 'hotels', label: 'Hotels', icon: Hotel, color: '#0D9488' },
  { id: 'dining', label: 'Dining', icon: Utensils, color: '#0D9488' },
  { id: 'shopping', label: 'Shopping', icon: ShoppingCart, color: '#0D9488' },
  { id: 'entertainment', label: 'Live Entertainment', icon: Calendar, color: '#0D9488' },
  { id: 'bar-hop', label: 'Locals Bar Hop', icon: Beer, color: '#0D9488' },
  { id: 'golf', label: 'Golf', icon: Flag, color: '#0D9488' },
  { id: 'spas', label: 'Spas', icon: Leaf, color: '#0D9488' },
  { id: 'neighborhoods', label: 'Neighborhoods', icon: MapPin, color: '#0D9488' },
];

interface HeroProps {
  navigation: any;
}

const Hero: React.FC<HeroProps> = ({ navigation }) => {
  const responsiveDims = getResponsiveDimensions();
  
  // Animation values for smooth parallax scrolling - matching website speeds exactly
  const scrollX1 = useRef(new Animated.Value(0)).current;
  const scrollX2 = useRef(new Animated.Value(0)).current;
  const scrollX3 = useRef(new Animated.Value(0)).current;
  
  // Enhanced content animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(60)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  
  // Floating animation for categories
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Calculate total width for each row based on image count
    const totalWidth1 = responsiveDims.row1ImageWidth * orlandoImages.length;
    const totalWidth2 = responsiveDims.row2ImageWidth * orlandoImages.length;
    const totalWidth3 = responsiveDims.row3ImageWidth * orlandoImages.length;
    
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
    
    // Exact animation speeds matching website
    const createSmoothAnimation = (animValue: Animated.Value, duration: number, reverse: boolean = false) => {
      return Animated.loop(
        Animated.timing(animValue, {
          toValue: reverse ? totalWidth1 : -totalWidth1,
          duration: duration * 1000, // Convert to milliseconds
          useNativeDriver: true,
        })
      );
    };

    // Slower speeds for more gentle scrolling
    createSmoothAnimation(scrollX1, 400).start(); // Row 1: Left to right (400s)
    createSmoothAnimation(scrollX2, 350, true).start(); // Row 2: Right to left (350s)
    createSmoothAnimation(scrollX3, 450).start(); // Row 3: Left to right (450s)
  }, [responsiveDims]);

  const renderImageRow = (images: any[], animatedValue: Animated.Value, isMiddleRow: boolean = false, imageWidth: number, imageHeight: number) => (
    <Animated.View
      style={[
        styles.imageRow,
        {
          transform: [{ translateX: animatedValue }],
          flexDirection: isMiddleRow ? 'row-reverse' : 'row',
        },
      ]}>
      {[...images, ...images, ...images, ...images, ...images].map((imageSource, index) => (
        <View key={index} style={[styles.imageContainer, { width: imageWidth, height: imageHeight, marginHorizontal: responsiveDims.categoryGap / 2 }]}>
          <Image
            source={imageSource}
            style={[styles.backgroundImage, { width: imageWidth, height: imageHeight, borderRadius: 8 }]}
            resizeMode="cover"
          />
        </View>
      ))}
    </Animated.View>
  );

  const CategoryButton = ({ category }: { category: typeof categories[0] }) => {
    const IconComponent = category.icon;
    
    const handleCategoryPress = () => {
      switch (category.id) {
        case 'theme-parks':
          navigation.navigate('TabNavigator', { screen: 'ThemeParks' });
          break;
        case 'attractions':
          navigation.navigate('TabNavigator', { screen: 'Attractions' });
          break;
        case 'hotels':
          navigation.navigate('TabNavigator', { screen: 'Hotels' });
          break;
        case 'dining':
          navigation.navigate('TabNavigator', { screen: 'Dining' });
          break;
        case 'shopping':
          navigation.navigate('shopping');
          break;
        case 'entertainment':
          navigation.navigate('entertainment');
          break;
        case 'bar-hop':
          navigation.navigate('entertainment');
          break;
        case 'golf':
          navigation.navigate('golf');
          break;
        case 'spas':
          navigation.navigate('TabNavigator', { screen: 'Attractions' });
          break;
        case 'neighborhoods':
          navigation.navigate('neighborhoods');
          break;
        default:
          console.log('Category selected:', category.id);
      }
    };
    
    return (
      <TouchableOpacity
        style={[
          styles.categoryButton,
        ]}
        onPress={handleCategoryPress}
        activeOpacity={0.7}>
        <View style={[styles.categoryContent, { paddingHorizontal: responsiveDims.categoryPadding, paddingVertical: responsiveDims.categoryPadding }]}>
          <IconComponent 
            size={Math.max(16, width * 0.04)} 
            color="#ffffff" 
            style={styles.categoryIcon}
          />
          <Text
            style={[
              styles.categoryText,
              {
                color: '#ffffff',
                fontSize: responsiveDims.categoryFontSize,
              },
            ]}>
            {category.label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { height: responsiveDims.containerHeight }]}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      {/* Exact gradient background matching website */}
      <LinearGradient
        colors={['#f97316', '#14b8a6']} // from-orange-400 to-teal-400
        style={styles.gradientBackground}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
      
      {/* Three-row scrolling background with exact website structure */}
      <View style={styles.backgroundContainer}>
        {/* First Row - large flagship images */}
        <View style={[styles.backgroundRow, { height: responsiveDims.row1ImageHeight, marginBottom: responsiveDims.categoryGap * 2 }]}>
          {renderImageRow(orlandoImages, scrollX1, false, responsiveDims.row1ImageWidth, responsiveDims.row1ImageHeight)}
        </View>
        
        {/* Second Row - medium-sized images */}
        <View style={[styles.backgroundRow, { height: responsiveDims.row2ImageHeight, marginBottom: responsiveDims.categoryGap * 2 }]}>
          {renderImageRow(orlandoImages, scrollX2, true, responsiveDims.row2ImageWidth, responsiveDims.row2ImageHeight)}
        </View>
        
        {/* Third Row - smaller images */}
        <View style={[styles.backgroundRow, { height: responsiveDims.row3ImageHeight, marginBottom: responsiveDims.categoryGap * 2 }]}>
          {renderImageRow(orlandoImages, scrollX3, false, responsiveDims.row3ImageWidth, responsiveDims.row3ImageHeight)}
        </View>
      </View>

      {/* Content overlay */}
      <LinearGradient
        colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.4)']}
        style={styles.overlay}
      />
      
      <SafeAreaView style={[styles.content, { paddingHorizontal: responsiveDims.contentPadding }]}>
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
            <Text style={[styles.title, { fontSize: responsiveDims.titleFontSize }]}>Awesome Orlando Guide</Text>
            <View style={styles.subtitleContainer}>
              <Text style={[styles.subtitle, { fontSize: responsiveDims.subtitleFontSize }]}>Your complete resource for exploring Orlando</Text>
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
          <View style={[styles.categoriesGrid, { gap: responsiveDims.categoryGap }]}>
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
    position: 'relative',
    backgroundColor: '#10B981',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  backgroundRow: {
    overflow: 'hidden',
  },
  imageRow: {
    flexDirection: 'row',
  },
  imageContainer: {
    position: 'relative',
  },
  backgroundImage: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
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
    position: 'relative',
    paddingBottom: 20, // Add space for footer
  },
  header: {
    alignItems: 'center',
    //marginTop: Math.max(20, height * 0.03),
    marginBottom: 15,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 0, height: 6 },
    textShadowRadius: 20,
    letterSpacing: 2,
    marginBottom: Math.max(15, height * 0.02),
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
  categoriesWrapper: {
    flex: 1,
    marginTop: 0,
  },
  categoriesContainer: {
    paddingBottom: 140,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 0,
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
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#0D9488',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#ffffff',
    flexDirection: 'row',
    gap: 4,
  },
  categoryIcon: {
    marginRight: 4,
  },
  categoryText: {
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