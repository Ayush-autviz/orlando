import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Linking 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { 
  MapPin, 
  Star, 
  Utensils, 
  Bed, 
  ShoppingCart, 
  Calendar, 
  Beer, 
  Flag, 
  Leaf, 
  DoorOpen,
  Ticket,
  Info,
  Shield,
  FileText
} from 'lucide-react-native';

interface CustomFooterProps {
  navigation: any;
}

const CustomFooter: React.FC<CustomFooterProps> = ({ navigation }) => {
  
  const handleLinkPress = (route: string) => {
    switch (route) {
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
        navigation.navigate('spas');
        break;
      case 'neighborhoods':
        navigation.navigate('neighborhoods');
        break;
      case 'epic-universe':
        // Navigate to Epic Universe guide screen
        navigation.navigate('EpicUniverseGuide');
        break;
      default:
        console.log('Footer link pressed:', route);
    }
  };

  const FooterLink = ({ title, route, icon }: { title: string; route: string; icon?: any }) => {
    const IconComponent = icon;
    
    return (
      <TouchableOpacity
        style={styles.footerLink}
        onPress={() => handleLinkPress(route)}
        activeOpacity={0.7}
      >
        {icon && <IconComponent size={12} color="#6b7280" style={styles.linkIcon} />}
        <Text style={styles.footerLinkText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.footer}>
        {/* Featured Guides Section - Epic Universe Rides Guide */}
        <View style={styles.featuredSection}>
          <TouchableOpacity
            style={styles.epicUniverseButton}
            onPress={() => handleLinkPress('epic-universe')}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#2563eb', '#7c3aed']}
              style={styles.epicUniverseGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <View style={{
                paddingHorizontal: 12,
                paddingVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}>
              <Text style={styles.epicUniverseIcon}>✨</Text>
              <Text style={styles.epicUniverseText}>Epic Universe Rides Guide</Text>
              <Text style={styles.epicUniverseIcon}>✨</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Main Footer Content */}
        <View style={styles.mainContent}>
          {/* Awesome Orlando Section */}
          <View style={styles.brandSection}>
            <Text style={styles.brandTitle}>Awesome Orlando</Text>
            <Text style={styles.brandDescription}>
              Your comprehensive guide to Orlando.
            </Text>
          </View>

          {/* Explore & Connect Section */}
          <View style={styles.combinedSection}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Explore</Text>
              <FooterLink title="Theme Parks" route="theme-parks" icon={DoorOpen} />
              <FooterLink title="Attractions" route="attractions" icon={Ticket} />
              <FooterLink title="Hotels" route="hotels" icon={Bed} />
              <FooterLink title="Dining" route="dining" icon={Utensils} />
              <FooterLink title="Shopping" route="shopping" icon={ShoppingCart} />
              <FooterLink title="Live Entertainment" route="entertainment" icon={Calendar} />
              <FooterLink title="Locals Bar Hop" route="bar-hop" icon={Beer} />
              <FooterLink title="Golf" route="golf" icon={Flag} />
              <FooterLink title="Spas" route="spas" icon={Leaf} />
              <FooterLink title="Neighborhoods" route="neighborhoods" icon={MapPin} />
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Connect</Text>
              <FooterLink title="About Us" route="about" icon={Info} />
              <FooterLink title="Privacy Policy" route="privacy" icon={Shield} />
              <FooterLink title="Terms of Service" route="terms" icon={FileText} />
            </View>
          </View>
        </View>

        {/* Copyright Section */}
        <View style={styles.copyrightSection}>
          <Text style={styles.copyrightText}>
            © {new Date().getFullYear()} Awesome Orlando. All rights reserved.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8fafc', // bg-muted equivalent
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  featuredSection: {
    marginBottom: 16,
    alignItems: 'center',
  },
  epicUniverseButton: {
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  epicUniverseGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: 8,
    // paddingHorizontal: 16,
    borderRadius: 8,
  },
  epicUniverseText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
    marginHorizontal: 8,
  },
  epicUniverseIcon: {
    fontSize: 16,
    color: '#fbbf24', // text-yellow-300
  },
  mainContent: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  brandSection: {
    flex: 1,
    minWidth: 150,
    marginBottom: 16,
  },
  brandTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 4,
  },
  brandDescription: {
    fontSize: 12,
    color: '#6b7280',
    lineHeight: 16,
  },
  combinedSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  section: {
    flex: 1,
    minWidth: 120,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  footerLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  linkIcon: {
    marginRight: 4,
  },
  footerLinkText: {
    fontSize: 12,
    color: '#6b7280',
    lineHeight: 16,
  },
  copyrightSection: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 8,
    alignItems: 'center',
  },
  copyrightText: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
});

export default CustomFooter; 