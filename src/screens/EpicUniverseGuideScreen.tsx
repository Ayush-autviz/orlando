import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
  ChevronLeft,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Header from '../components/Header';

const { width, height } = Dimensions.get('window');

const EpicUniverseGuideScreen: React.FC = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef<ScrollView>(null);
  const [selectedSection, setSelectedSection] = useState('');
  
  // Use refs to store section views for direct measurement
  const sectionRefs = useRef<Record<string, View | null>>({});

  const scrollToSection = (item: any) => {
    const sectionId = item.value;
    
    // Small delay to ensure dropdown closes first
    setTimeout(() => {
      const sectionRef = sectionRefs.current[sectionId];
      if (sectionRef && scrollViewRef.current) {
        sectionRef.measureLayout(
          scrollViewRef.current as any,
          (x, y) => {
            const offset = 120; // Fixed offset for mobile header and navigation
            const targetY = Math.max(0, y - offset);
            
            scrollViewRef.current?.scrollTo({
              y: targetY,
              animated: true,
            });
          },
          () => {
            console.log('Failed to measure section:', sectionId);
          }
        );
      }
    }, 150);
    
    setSelectedSection(sectionId);
  };

  const navigationSections = [
    { label: 'Introduction', value: 'intro' },
    { label: 'Super Nintendo World', value: 'nintendo' },
    { label: 'How to Train Your Dragon', value: 'dragons' },
    { label: 'Dark Universe', value: 'dark' },
    { label: 'Wizarding World', value: 'wizarding' },
    { label: 'Celestial Park', value: 'celestial' },
    { label: 'Ride Distribution Chart', value: 'chart' },
    { label: 'Visit Planning', value: 'planning' },
    { label: 'Frequently Asked Questions', value: 'faq' },
  ];

  const ThrillMeter = ({ rating }: { rating: number }) => (
    <View style={styles.thrillMeter}>
      <Text style={styles.thrillMeterText}>Thrill Meter: {rating}/5.0</Text>
    </View>
  );

  const TypeBadge = ({ type }: { type: string }) => (
    <View style={styles.typeBadge}>
      <Text style={styles.typeBadgeText}>Type: {type}</Text>
    </View>
  );

  const HeightBadge = ({ height }: { height: string }) => (
    <View style={styles.heightBadge}>
      <Text style={styles.heightBadgeText}>Height: {height}</Text>
    </View>
  );

  const RideCard = ({ 
    title, 
    thrillRating, 
    type, 
    height, 
    images, 
    description, 
    whyLoveIt, 
    goodToKnow, 
    threeWords,
    backgroundColor 
  }: {
    title: string;
    thrillRating: number;
    type: string;
    height: string;
    images: any[];
    description: string;
    whyLoveIt: string;
    goodToKnow: string;
    threeWords: string;
    backgroundColor: string;
  }) => (
    <View style={[styles.rideCard, { backgroundColor }]}>
      <View style={styles.rideBadges}>
        <ThrillMeter rating={thrillRating} />
        <TypeBadge type={type} />
        <HeightBadge height={height} />
      </View>

      <View style={styles.rideImages}>
        {images.map((image, index) => (
          <View key={index} style={styles.rideImageContainer}>
            <Image source={image} style={styles.rideImage} resizeMode="cover" />
          </View>
        ))}
      </View>

      <View style={styles.rideContent}>
        <Text style={styles.rideSubtitle}>What's the Vibe?</Text>
        <Text style={styles.rideDescription}>{description}</Text>

        <Text style={styles.rideSubtitle}>Why You'll Love It</Text>
        <Text style={styles.rideDescription}>{whyLoveIt}</Text>

        <Text style={styles.rideSubtitle}>Good to Know</Text>
        <Text style={styles.rideDescription}>{goodToKnow}</Text>

        <Text style={styles.threeWordsLabel}>In Three Words:</Text>
        <Text style={styles.threeWords}>{threeWords}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1E40AF" barStyle="light-content" />
      <Header showDrawerButton={true} title="" />

      <ScrollView ref={scrollViewRef} style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Navigation Link */}
        <View style={styles.navigationLink}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <ChevronLeft width={16} height={16} color="#2563EB" />
            <Text style={styles.backButtonText}>Back to Awesome Orlando</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroOverlay} />
          <View style={styles.heroContent}>
            <View style={styles.heroGrid}>
              <View style={styles.heroLeft}>
                <Text style={styles.heroTitle}>
                  <Text style={styles.heroTitleBlue}>Universal's </Text>
                  <Text style={styles.heroTitleGradient}>Epic Universe</Text>
                  <Text style={styles.heroTitleSubtitle}>{'\n'}Rides Guide</Text>
                </Text>
                <Text style={styles.heroSubtitle}>
                  Preview of all 11 groundbreaking attractions opening in 2025.
                </Text>
              </View>
              
              <View style={styles.heroRight}>
                <View style={styles.heroImageContainer}>
                  <Image 
                    source={require('../../assets/images/epic-universe/epic-universe-map.jpg')}
                    style={styles.heroImage}
                    resizeMode="cover"
                  />
                  <View style={styles.heroImageOverlay} />
                  <Text style={styles.heroImageCaption}>
                    Official park map showcasing all five themed worlds
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Mobile Navigation Dropdown */}
        <View style={styles.mobileNavigation}>
          <View style={styles.mobileNavRow}>
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={styles.mobileBackButton}
            >
              <ChevronLeft width={20} height={20} color="#2563EB" />
            </TouchableOpacity>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              itemTextStyle={styles.itemTextStyle}
              data={navigationSections}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Navigate to section..."
              value={selectedSection}
              onChange={scrollToSection}
              containerStyle={styles.dropdownContainer}
              dropdownPosition="bottom"
            />
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Introduction */}
          <View 
            style={styles.section}
            ref={(ref) => { sectionRefs.current['intro'] = ref; }}
          >
            <Text style={styles.mainTitle}>Epic Universe Rides Guide for 2025</Text>
            <Text style={styles.subtitle}>Your Ultimate Adventure with Awesome Orlando</Text>
            <Text style={styles.introText}>
              Hey thrill-seekers and family adventurers, welcome to <Text style={styles.italic}>Awesome Orlando</Text>, your top spot for uncovering the magic of Orlando's theme parks! Epic Universe, Universal Orlando's game-changing park, opened on May 22, 2025, and it's packed with 11 incredible rides across five immersive worlds: Super Nintendo World, Celestial Park, How to Train Your Dragon – Isle of Berk, Dark Universe, and The Wizarding World of Harry Potter – Ministry of Magic.
            </Text>
          </View>

          {/* Super Nintendo World */}
          <View 
            style={styles.section}
            ref={(ref) => { sectionRefs.current['nintendo'] = ref; }}
          >
            <Text style={styles.sectionTitle}>Super Nintendo World: Pixel-Powered Thrills</Text>
            <Text style={styles.sectionIntro}>
              Super Nintendo World brings Mario, Donkey Kong, and Yoshi to life with three rides that blend video game energy with theme park magic.
            </Text>

            {/* Yoshi's Adventure */}
            <View style={styles.rideSection}>
              <Text style={styles.rideTitle}>1. Yoshi's Adventure</Text>
              <RideCard
                title="Yoshi's Adventure"
                thrillRating={0.5}
                type="Family-friendly ride"
                height="34 inches (under 48 inches needs an adult)"
                images={[
                  require('../../assets/images/epic-universe/yoshis-egg-hunt-1.jpg'),
                  require('../../assets/images/epic-universe/yoshis-egg-hunt-2.jpg')
                ]}
                description="Cruise through Mushroom Kingdom on a colorful Yoshi in this family-friendly adventure. Press a button to join the fun while soaking in iconic Mario scenery with vibrant details at every turn."
                whyLoveIt="It's a chill, interactive ride perfect for kids or anyone wanting a sunny, slow-paced adventure through the whimsical Nintendo world."
                goodToKnow="Some outdoor sections mean sun exposure—pack sunscreen. Think of it as a gentle Mario stroll with plenty of photo opportunities."
                threeWords="Playful Yoshi adventure"
                backgroundColor="#F0FDF4"
              />
            </View>

            {/* Mario Kart */}
            <View style={styles.rideSection}>
              <Text style={styles.rideTitle}>2. Mario Kart: Bowser's Challenge</Text>
              <RideCard
                title="Mario Kart: Bowser's Challenge"
                thrillRating={2.0}
                type="Interactive dark ride"
                height="40 inches (under 48 inches needs an adult)"
                images={[
                  require('../../assets/images/epic-universe/mario-kart-bowsers-bash-1.jpg'),
                  require('../../assets/images/epic-universe/mario-kart-bowsers-bash-2.jpg')
                ]}
                description="Strap on AR goggles and race through a life-sized Mario Kart track with Mario and Luigi. Hurl shells, grab coins, and compete with three other riders in a vibrant, twisting kart. The ride begins in Bowser's imposing castle and winds through elaborately themed racing environments."
                whyLoveIt="The mix of physical sets and digital effects feels like you're truly in the game. You'll race past iconic Mario Kart locations while experiencing the thrill of competition. A hit for both dedicated gamers and families!"
                goodToKnow="The AR goggles might feel snug for some riders, and the twists and turns could cause dizziness for those sensitive to motion. The queue features interactive elements that build excitement for the race ahead."
                threeWords="High-speed kart showdown"
                backgroundColor="#FEF2F2"
              />
            </View>

            {/* Donkey Kong */}
            <View style={styles.rideSection}>
              <Text style={styles.rideTitle}>3. Donkey Kong's Mine Cart Madness</Text>
              <RideCard
                title="Donkey Kong's Mine Cart Madness"
                thrillRating={3.0}
                type="Indoor-outdoor roller coaster"
                height="40 inches"
                images={[
                  require('../../assets/images/epic-universe/donkey-kong-mine-cart-1.jpg'),
                  require('../../assets/images/epic-universe/donkey-kong-mine-cart-2.jpg')
                ]}
                description="Zoom through Donkey Kong Country's lush jungle in this thrilling mine cart adventure. Four riders per cart dodge apparent track gaps and race past Golden Temple theming with playful jump scares. The ride recreates the madcap mine cart levels from the classic games with impressive attention to detail."
                whyLoveIt="Quick scenery shifts and video game vibes make it exciting yet approachable for coaster newbies. The immersive jungle environment with banana-collecting opportunities creates a uniquely Nintendo experience."
                goodToKnow="The illusion of track gaps looks scarier from afar but is completely safe and fun up close. Great for kids ready for a mild thrill and a perfect stepping stone to more intense coasters."
                threeWords="Jungle coaster romp"
                backgroundColor="#FFFBEB"
              />
            </View>
          </View>

          {/* How to Train Your Dragon */}
          <View 
            style={styles.section}
            ref={(ref) => { sectionRefs.current['dragons'] = ref; }}
          >
            <Text style={styles.sectionTitle}>How to Train Your Dragon – Isle of Berk: Viking Valor Meets Dragon Flight</Text>
            <Text style={styles.sectionIntro}>
              Isle of Berk delivers Viking adventure with three rides that channel the spirit of dragons and bravery.
            </Text>

            {/* Fyre Drill */}
            <View style={styles.rideSection}>
              <Text style={styles.rideTitle}>4. Fyre Drill</Text>
              <RideCard
                title="Fyre Drill"
                thrillRating={1.0}
                type="Interactive water ride"
                height="Under 48 inches needs an adult; no handheld infants"
                images={[
                  require('../../assets/images/epic-universe/viking-water-blast-1.jpg'),
                  require('../../assets/images/epic-universe/viking-water-blast-2.jpg')
                ]}
                description="Board beautifully crafted Viking boats and blast water cannons at fiery targets (and maybe rival boats!) in a gentle float through Berk's rugged landscape. The ride features elaborate dragon-themed elements and Viking scenery throughout the journey. No big drops, just splashy, interactive fun."
                whyLoveIt="It's a refreshing way to cool off with no pressure. The interactive water cannons give everyone something to do, making this perfect for families with different age groups. Expect to get wet, so ponchos are handy for those who want to stay dry!"
                goodToKnow="Watch out, bystanders—water cannons don't play favorites, and some viewing areas might get splashed. There's no scoring system, just pure aquatic chaos and laughter. A great opportunity for memorable family photos with everyone enjoying the watery battle."
                threeWords="Splashy Viking showdown"
                backgroundColor="#EFF6FF"
              />
            </View>

            {/* Dragon Racer's Rally */}
            <View style={styles.rideSection}>
              <Text style={styles.rideTitle}>5. Dragon Racer's Rally</Text>
              <RideCard
                title="Dragon Racer's Rally"
                thrillRating={3.0}
                type="Aerial adventure ride"
                height="48 inches"
                images={[
                  require('../../assets/images/epic-universe/dragon-racers-rally-1.jpg'),
                  require('../../assets/images/epic-universe/dragon-racers-rally-2.jpg')
                ]}
                description="Ride your own dragon, swooping and tilting through Berk's skies. Lean to control wobbles, and with skill, you might flip upside-down in this acrobatic thrill."
                whyLoveIt="It's a unique Orlando ride, mixing carnival energy with Viking flair. The open-air setup amps up the excitement."
                goodToKnow="Height and potential flips might spook some, but accidental inversions are rare. A must for thrill-seekers."
                threeWords="Dragon-soaring acrobatics"
                backgroundColor="#F0FDFA"
              />
            </View>

            {/* Hiccup's Wing Gliders */}
            <View style={styles.rideSection}>
              <Text style={styles.rideTitle}>6. Hiccup's Wing Gliders</Text>
              <RideCard
                title="Hiccup's Wing Gliders"
                thrillRating={4.0}
                type="Outdoor roller coaster"
                height="40 inches"
                images={[
                  require('../../assets/images/epic-universe/hiccups-dragon-1.jpg'),
                  require('../../assets/images/epic-universe/hiccups-dragon-2.jpg')
                ]}
                description="Strap into Hiccup's mechanical bravery test for a thrilling ride through Berk. With a 45 mph top speed, it's packed with surprises, Viking theming, and a Toothless cameo. The coaster's intricate track design offers a perfect blend of speed and themed storytelling."
                whyLoveIt="It's got enough kick for thrill-seekers but won't scare off coaster beginners. The Viking story shines through every element of the ride, from the queue to the track design, creating an immersive experience that fans of the franchise will appreciate."
                goodToKnow="Looks tame from the ground but delivers sneaky intensity with unexpected twists and turns. Perfect for teens and adults who want a good balance of theming and thrills. This coaster often has a shorter wait time in the early morning."
                threeWords="Viking-speed thrills"
                backgroundColor="#FFFBEB"
              />
            </View>
          </View>

          {/* Dark Universe */}
          <View 
            style={styles.section}
            ref={(ref) => { sectionRefs.current['dark'] = ref; }}
          >
            <Text style={styles.sectionTitle}>Dark Universe: Spooky Scares and Monster Mayhem</Text>
            <Text style={styles.sectionIntro}>
              Dark Universe dives into classic horror with two rides that blend creepy vibes and high thrills.
            </Text>

            {/* Curse of the Werewolf */}
            <View style={styles.rideSection}>
              <Text style={styles.rideTitle}>7. Curse of the Werewolf</Text>
              <RideCard
                title="Curse of the Werewolf"
                thrillRating={3.5}
                type="Spinning roller coaster"
                height="48 inches"
                images={[
                  require('../../assets/images/epic-universe/werewolf-whirl-1.jpg'),
                  require('../../assets/images/epic-universe/werewolf-whirl-2.jpg')
                ]}
                description="Spin through a haunted forest in four-person cars that twirl as they race at 37 mph. Dead-end hills, eerie howls, and werewolf sightings keep you on edge throughout this atmospheric adventure. The detailed woodland theming creates a perfectly spooky backdrop for this unique coaster experience."
                whyLoveIt="The spinning adds a fresh twist to the traditional coaster experience, and the atmospheric horror theming is thrilling without being too terrifying for most riders. Each run delivers a different experience as the cars spin unpredictably through the course."
                goodToKnow="Constant spinning might unsettle sensitive stomachs, but it's a blast for those who love motion rides. The queue is almost as impressive as the ride itself, with detailed werewolf lore and immersive scenery building the anticipation."
                threeWords="Twirling werewolf chase"
                backgroundColor="#F9FAFB"
              />
            </View>

            {/* Monsters Unchained */}
            <View style={styles.rideSection}>
              <Text style={styles.rideTitle}>8. Monsters Unchained: The Frankenstein Experiment</Text>
              <RideCard
                title="Monsters Unchained: The Frankenstein Experiment"
                thrillRating={4.5}
                type="Dark ride"
                height="48 inches"
                images={[
                  require('../../assets/images/epic-universe/frankenstein-lab-1.jpg'),
                  require('../../assets/images/epic-universe/frankenstein-lab-2.jpg')
                ]}
                description="Enter Dr. Victoria Frankenstein's gothic manor to confront classic monsters including Dracula, Wolf Man, and more. Robotic arms swing you through electrifying chaos, with lunging animatronics and atmospheric effects creating spine-tingling chills throughout this immersive horror experience."
                whyLoveIt="The monster-packed story and wild motion make it a standout for horror fans. The detailed sets transport you directly into a Universal Monsters movie, with cutting-edge technology enhancing the frightful atmosphere and creating genuinely startling moments."
                goodToKnow="Close-up monsters and intense motion might trigger nausea or startle sensitive riders. It's described as Universal's 'most chilling' ride experience, so this is definitely best for thrill-seekers and horror enthusiasts rather than young children or those easily frightened."
                threeWords="Monstrous gothic chaos"
                backgroundColor="#F9FAFB"
              />
            </View>
          </View>

          {/* Wizarding World */}
          <View 
            style={styles.section}
            ref={(ref) => { sectionRefs.current['wizarding'] = ref; }}
          >
            <Text style={styles.sectionTitle}>The Wizarding World of Harry Potter – Ministry of Magic: Magical Mishaps</Text>
            <Text style={styles.sectionIntro}>
              This magical land transports you to the Ministry of Magic for one unforgettable ride.
            </Text>

            {/* Harry Potter Battle */}
            <View style={styles.rideSection}>
              <Text style={styles.rideTitle}>9. Harry Potter and the Battle at the Ministry</Text>
              <RideCard
                title="Harry Potter and the Battle at the Ministry"
                thrillRating={4.5}
                type="Motion simulator dark ride"
                height="40 inches"
                images={[
                  require('../../assets/images/epic-universe/ministry-magic-1.jpg'),
                  require('../../assets/images/epic-universe/ministry-magic-2.jpg')
                ]}
                description="Join Harry and friends in a wild chase through the Ministry during Dolores Umbridge's trial. Ride magical lifts with jolting, omnidirectional moves and stunning visual effects that make the magical world come alive around you. The detailed queue is a Potterhead's paradise, featuring authentic props and immersive Ministry of Magic theming."
                whyLoveIt="Immersive Ministry of Magic sets and unpredictable motion make it a must for Harry Potter fans. The ride combines next-generation projection technology with physical sets to create a seamless magical adventure that brings iconic moments from the wizarding world to life in breathtaking detail."
                goodToKnow="Sudden shifts might rattle motion-sensitive riders, and the giant erumpent animatronic could startle younger wizards. For the best experience, familiarize yourself with Harry Potter lore before riding, though even Muggles will enjoy the spectacle. Justice wins in the end!"
                threeWords="Spellbinding magical frenzy"
                backgroundColor="#FAF5FF"
              />
            </View>
          </View>

          {/* Celestial Park */}
          <View 
            style={styles.section}
            ref={(ref) => { sectionRefs.current['celestial'] = ref; }}
          >
            <Text style={styles.sectionTitle}>Celestial Park: Cosmic Wonders and Epic Thrills</Text>
            <Text style={styles.sectionIntro}>
              Celestial Park, the park's central hub, offers two rides that range from gentle to jaw-dropping.
            </Text>

            {/* Constellation Carousel */}
            <View style={styles.rideSection}>
              <Text style={styles.rideTitle}>10. Constellation Carousel</Text>
              <RideCard
                title="Constellation Carousel"
                thrillRating={1.0}
                type="Kiddie carousel"
                height="Under 48 inches needs an adult; no handheld infants"
                images={[
                  require('../../assets/images/epic-universe/starry-spin-carousel-1.jpg'),
                  require('../../assets/images/epic-universe/starry-spin-carousel-2.jpg')
                ]}
                description="Twirl under Celestial Park's grand dome on cosmic creatures like Lepus, a starry rabbit, and other constellation-inspired mounts. This enchanting carousel reverses direction and gently lifts riders up to 6 feet for a dreamy spin beneath a ceiling adorned with twinkling stars and cosmic patterns."
                whyLoveIt="The rotating floor and elegant celestial theming create a magical, otherworldly atmosphere. It's both a great photo opportunity and an educational introduction to constellations for young riders. The colorful, beautifully crafted cosmic creatures make this much more than a typical carousel."
                goodToKnow="The modest height might worry extremely height-averse folks, but secure harnesses ensure complete safety. This is an ideal attraction for families with young children and a perfect break activity between more intense rides. The air-conditioned pavilion also provides welcome relief on hot days."
                threeWords="Starlit carousel dreams"
                backgroundColor="#F0F9FF"
              />
            </View>

            {/* Stardust Racers */}
            <View style={styles.rideSection}>
              <Text style={styles.rideTitle}>11. Stardust Racers</Text>
              <RideCard
                title="Stardust Racers"
                thrillRating={5.0}
                type="Dueling roller coaster"
                height="48 inches"
                images={[
                  require('../../assets/images/epic-universe/stardust-speedway-1.jpg'),
                  require('../../assets/images/epic-universe/stardust-speedway-2.jpg')
                ]}
                description="Epic's most intense ride! This dual-launch coaster (Photon and Pulsar tracks) hits 62 mph with inversions, hills, and dueling moments as trains zoom past each other in a cosmic showdown."
                whyLoveIt="The adrenaline and near-miss thrills make it a coaster junkie's dream. The starry theming is epic!"
                goodToKnow="Its intensity sneaks up on you. Motion sickness-prone? Maybe skip it. A top pick for thrill-seekers."
                threeWords="Galactic coaster madness"
                backgroundColor="#EFF6FF"
              />
            </View>
          </View>

          {/* Ride Distribution Chart */}
          <View 
            style={styles.section}
            ref={(ref) => { sectionRefs.current['chart'] = ref; }}
          >
            <Text style={styles.sectionTitle}>Rides by Thematic World</Text>
            <Text style={styles.sectionIntro}>
              To visualize how rides are spread across Epic Universe's worlds, here's a breakdown showing the number of rides per land:
            </Text>

            <View style={styles.chartContainer}>
              <Text style={styles.chartTitle}>Ride Distribution by Land</Text>
              
              <View style={styles.chartItem}>
                <View style={styles.chartRow}>
                  <Text style={styles.chartLabel}>Super Nintendo World</Text>
                  <Text style={styles.chartValue}>3 rides</Text>
                </View>
                <View style={styles.chartBar}>
                  <View style={[styles.chartFill, { width: '60%', backgroundColor: '#EF4444' }]} />
                </View>
              </View>

              <View style={styles.chartItem}>
                <View style={styles.chartRow}>
                  <Text style={styles.chartLabel}>Isle of Berk</Text>
                  <Text style={styles.chartValue}>3 rides</Text>
                </View>
                <View style={styles.chartBar}>
                  <View style={[styles.chartFill, { width: '60%', backgroundColor: '#10B981' }]} />
                </View>
              </View>

              <View style={styles.chartItem}>
                <View style={styles.chartRow}>
                  <Text style={styles.chartLabel}>Dark Universe</Text>
                  <Text style={styles.chartValue}>2 rides</Text>
                </View>
                <View style={styles.chartBar}>
                  <View style={[styles.chartFill, { width: '40%', backgroundColor: '#6B7280' }]} />
                </View>
              </View>

              <View style={styles.chartItem}>
                <View style={styles.chartRow}>
                  <Text style={styles.chartLabel}>Ministry of Magic</Text>
                  <Text style={styles.chartValue}>1 ride</Text>
                </View>
                <View style={styles.chartBar}>
                  <View style={[styles.chartFill, { width: '20%', backgroundColor: '#8B5CF6' }]} />
                </View>
              </View>

              <View style={styles.chartItem}>
                <View style={styles.chartRow}>
                  <Text style={styles.chartLabel}>Celestial Park</Text>
                  <Text style={styles.chartValue}>2 rides</Text>
                </View>
                <View style={styles.chartBar}>
                  <View style={[styles.chartFill, { width: '40%', backgroundColor: '#3B82F6' }]} />
                </View>
              </View>
            </View>
          </View>

          {/* Planning Section */}
          <View 
            style={styles.section}
            ref={(ref) => { sectionRefs.current['planning'] = ref; }}
          >
            <Text style={styles.sectionTitle}>Why Epic Universe is a Must-Visit in 2025</Text>
            <Text style={styles.sectionIntro}>
              Epic Universe redefines Orlando theme parks with its blend of cutting-edge tech and beloved stories. Whether you're racing with Mario, soaring with dragons, battling monsters, casting spells, or chasing cosmic thrills, these 11 rides deliver unforgettable moments. Here's how to plan your visit:
            </Text>

            <View style={styles.planningContainer}>
              <Text style={styles.planningTitle}>Visit Planning by Thrill Level</Text>
              
              <View style={styles.planningSection}>
                <Text style={styles.planningSubtitle}>Kid-Friendly Picks (Thrill Meter 0.5-1.0)</Text>
                <Text style={styles.planningList}>• Yoshi's Adventure</Text>
                <Text style={styles.planningList}>• Constellation Carousel</Text>
                <Text style={styles.planningList}>• Fyre Drill</Text>
              </View>

              <View style={styles.planningSection}>
                <Text style={styles.planningSubtitle}>Family Adventures (Thrill Meter 2.0-3.0)</Text>
                <Text style={styles.planningList}>• Mario Kart: Bowser's Challenge</Text>
                <Text style={styles.planningList}>• Donkey Kong's Mine Cart Madness</Text>
                <Text style={styles.planningList}>• Dragon Racer's Rally</Text>
              </View>

              <View style={styles.planningSection}>
                <Text style={styles.planningSubtitle}>Thrill-Seeker Heaven (Thrill Meter 3.5-5.0)</Text>
                <Text style={styles.planningList}>• Hiccup's Wing Gliders</Text>
                <Text style={styles.planningList}>• Curse of the Werewolf</Text>
                <Text style={styles.planningList}>• Monsters Unchained: The Frankenstein Experiment</Text>
                <Text style={styles.planningList}>• Harry Potter and the Battle at the Ministry</Text>
                <Text style={styles.planningList}>• Stardust Racers</Text>
              </View>

              <View style={styles.planningSection}>
                <Text style={styles.planningSubtitle}>Height Requirements Summary</Text>
                <Text style={styles.planningDescription}>
                  Most rides require 40-48 inches, with kiddie rides allowing 34 inches with an adult. Stardust Racers, Dragon Racer's Rally, and Monsters Unchained are strict at 48 inches.
                </Text>
              </View>
            </View>
          </View>

          {/* FAQ Section */}
          <View 
            style={styles.section}
            ref={(ref) => { sectionRefs.current['faq'] = ref; }}
          >
            <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
            
            <View style={styles.faqContainer}>
              <View style={styles.faqItem}>
                <Text style={styles.faqQuestion}>
                  What is the best time to visit Epic Universe to avoid crowds?
                </Text>
                <Text style={styles.faqAnswer}>
                  Typically, weekdays (Tuesday through Thursday) during non-holiday periods and non-summer months (September, early November, and late January) offer lower crowds. The first hour after park opening is also less crowded for popular attractions.
                </Text>
              </View>

              <View style={styles.faqItem}>
                <Text style={styles.faqQuestion}>
                  Does Epic Universe offer Express Pass options similar to other Universal parks?
                </Text>
                <Text style={styles.faqAnswer}>
                  Yes, Epic Universe offers Express Pass options that let you skip the regular lines at most attractions. Universal hotel guests at Premier category hotels (like Royal Pacific, Hard Rock, and Portofino Bay) receive complimentary Express Passes included with their stay.
                </Text>
              </View>

              <View style={styles.faqItem}>
                <Text style={styles.faqQuestion}>
                  Which Epic Universe rides are accessible for guests with mobility challenges?
                </Text>
                <Text style={styles.faqAnswer}>
                  Most Epic Universe attractions offer modified accessibility options. Yoshi's Adventure, Starry Spin Carousel, and Harry Potter: Ministry Magic have wheelchair-accessible vehicles or transfer options. Guest Services at the park entrance provides detailed accessibility guides for all attractions.
                </Text>
              </View>

              <View style={styles.faqItem}>
                <Text style={styles.faqQuestion}>
                  How does Epic Universe connect with the other Universal Orlando parks?
                </Text>
                <Text style={styles.faqAnswer}>
                  Epic Universe has its own dedicated transportation system connecting it to Universal's other parks and CityWalk. Complimentary shuttle buses run frequently throughout the day, and park-to-park tickets allow you to visit multiple Universal parks on the same day.
                </Text>
              </View>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Last updated: May 2025</Text>
            <Text style={styles.footerSubtext}>
              <Text style={styles.italic}>
                Awesome Orlando is your guide to making your 2025 theme park adventures epic. 
                Stay tuned for more Orlando guides and insider tricks!
              </Text>
            </Text>
          </View>
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

  // Navigation
  navigationLink: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  backButtonText: {
    color: '#2563EB',
    fontSize: 14,
  },

  // Hero Section
  heroSection: {
    position: 'relative',
    marginBottom: 32,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(30, 58, 138, 0.8)', // blue-900/80 to indigo-900/90
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    paddingHorizontal: 14,
    paddingVertical: 24,
  },
  heroGrid: {
    flexDirection: 'column',
    gap: 24,
  },
  heroLeft: {
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroTitleBlue: {
    color: '#BFDBFE', // blue-200
  },
  heroTitleGradient: {
    color: '#A5B4FC', // indigo-300 (gradient simulation)
  },
  heroTitleSubtitle: {
    color: '#BFDBFE', // blue-100
    fontSize: 24,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#BFDBFE', // blue-100
    textAlign: 'center',
    maxWidth: 400,
  },
  heroRight: {
    alignItems: 'center',
  },
  heroImageContainer: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    width: '100%',
    maxWidth: 400,
  },
  heroImage: {
    width: '100%',
   height:300
  },
  heroImageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(30, 58, 138, 0.3)',
  },
  heroImageCaption: {
    position: 'absolute',
    bottom: 8,
    left: 12,
    right: 12,
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },

  // Mobile Navigation
  mobileNavigation: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 32,
  },
  mobileNavRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  mobileBackButton: {
    padding: 8,
  },
  // React Native Element Dropdown Styles
  dropdown: {
    flex: 1,
    height: 50,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#6B7280',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#374151',
  },
  itemTextStyle: {
    fontSize: 16,
    color: '#374151',
  },
  dropdownContainer: {
    borderColor: '#D1D5DB',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },

  // Main Content
  mainContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },

  // Section Styles
  section: {
    marginBottom: 64,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 16,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 20,
    color: '#4B5563',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 24,
    lineHeight: 32,
  },
  sectionIntro: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 24,
  },
  introText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  italic: {
    fontStyle: 'italic',
  },

  // Ride Styles
  rideSection: {
    marginBottom: 24,
  },
  rideTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  rideCard: {
    borderRadius: 8,
    padding: 24,
    marginBottom: 24,
  },
  rideBadges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  thrillMeter: {
    backgroundColor: '#10B981',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  thrillMeterText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  typeBadge: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  typeBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  heightBadge: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  heightBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  rideImages: {
    flexDirection: 'column',
    gap: 16,
    marginBottom: 24,
  },
  rideImageContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rideImage: {
    width: '100%',
    height: 200,
   // aspectRatio: 16/9, // More web-like ratio, less tall
    borderRadius: 4,
  },
  rideContent: {
    gap: 12,
  },
  rideSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 8,
  },
  rideDescription: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 16,
  },
  threeWordsLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
    fontStyle: 'italic',
  },
  threeWords: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
    fontStyle: 'italic',
  },

  // Chart Styles
  chartContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 24,
  },
  chartItem: {
    marginBottom: 24,
  },
  chartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  chartLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  chartValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
  },
  chartBar: {
    height: 10,
    backgroundColor: '#F3F4F6',
    borderRadius: 5,
    overflow: 'hidden',
  },
  chartFill: {
    height: '100%',
    borderRadius: 5,
  },

  // Planning Styles
  planningContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  planningTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 24,
  },
  planningSection: {
    marginBottom: 24,
  },
  planningSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2563EB',
    marginBottom: 8,
  },
  planningList: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
    paddingLeft: 20,
  },
  planningDescription: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },

  // FAQ Styles
  faqContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  faqItem: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },

  // Footer
  footer: {
    alignItems: 'center',
    paddingTop: 32,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  footerSubtext: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default EpicUniverseGuideScreen; 