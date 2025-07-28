import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { cuisineCategories, RestaurantCategory } from '../data/restaurant';
import { ArrowRight } from 'lucide-react-native';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

const DiningScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (categoryId: RestaurantCategory) => {
    navigation.navigate('DiningCategory' as never, { categoryId } as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require('../../assets/images/Rectangle2.png')}
            style={styles.headerWrapper}
            resizeMode="contain"
          >
            <Text style={styles.headerText}>
              TASTE<Text style={styles.headerAccent}>ORLANDO</Text>
            </Text>
            <View style={styles.headerUnderline} />
          </ImageBackground>
        </View>

        {/* Categories Grid */}
        <View style={styles.categoriesContainer}>
          {(Object.entries(cuisineCategories) as [RestaurantCategory, any][]).map(([key, category]) => (
            <TouchableOpacity
              key={key}
              style={styles.categoryCard}
              onPress={() => handleCategoryPress(key)}
              activeOpacity={0.9}
            >
              {/* Image Section */}
              <View style={styles.imageContainer}>
                <Image
                  source={category.image}
                  style={styles.categoryImage}
                  resizeMode="cover"
                />
                <View style={styles.imageOverlay} />
                <View style={styles.imageTextContainer}>
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                </View>
              </View>

              {/* Content Section */}
              <View style={styles.contentContainer}>
                <Text style={styles.categoryDescription} numberOfLines={4}>
                  {category.description}
                </Text>
              </View>

              {/* Button Section */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.exploreButton}
                  onPress={() => handleCategoryPress(key)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.buttonText}>
                    Explore {category.title}
                  </Text>
                  <ArrowRight size={16} color="#FFFFFF" style={styles.buttonIcon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 40,
   // paddingHorizontal: 12,
  },
  headerWrapper: {
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 28,
   // borderRadius: 8,
    // shadowColor: '#EA580C',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.3,
    // shadowRadius: 8,
    // elevation: 4,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 2,
    color: '#EA580C',
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  headerAccent: {
    color: '#B45309',
  },
  headerUnderline: {
    height: 2,
    width: 96,
    marginTop: 4,
    backgroundColor: '#EA580C',
    borderRadius: 1,
  },
  categoriesContainer: {
    paddingHorizontal: 12,
    paddingBottom: 24,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 192,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  imageTextContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  contentContainer: {
    padding: 16,
    flex: 1,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  buttonContainer: {
    padding: 16,
    paddingTop: 0,
  },
  exploreButton: {
    backgroundColor: '#EA580C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonIcon: {
    marginLeft: 8,
  },
});

export default DiningScreen;