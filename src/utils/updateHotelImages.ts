// Utility to map hotel names to local image paths
// This maps hotel names to their corresponding local image files in assets/images

export const hotelImageMapping: { [key: string]: any } = {
  // Disney Hotels
  "Disney's Grand Floridian Resort & Spa": require('../../assets/images/disney-grand-floridian-optimized.jpg'),
  "Disney's Contemporary Resort": require('../../assets/images/disneys-contemporary-resort.jpeg'),
  "Disney's Polynesian Village Resort": require('../../assets/images/disneys-polynesian-village-resort.jpg'),
  "Disney's Animal Kingdom Lodge": require('../../assets/images/disneys-animal-kingdom-lodge-optimized.jpg'),
  "Disney's Wilderness Lodge": require('../../assets/images/disneys-wilderness-lodge.jpeg'),
  "Disney's Beach Club Resort": require('../../assets/images/disneys-beach-club-resort.jpg'),
  "Disney's Yacht Club Resort": require('../../assets/images/disneys-yacht-club-resort.jpg'),
  "Disney's BoardWalk Inn": require('../../assets/images/disneys-boardwalk-inn.jpeg'),
  "Disney's Old Key West Resort": require('../../assets/images/disneys-old-key-west-resort.jpeg'),
  "Disney's Saratoga Springs Resort & Spa": require('../../assets/images/disneys-saratoga-springs-resort.jpeg'),
  "Disney's All-Star Movies Resort": require('../../assets/images/disneys-all-star-movies-resort.jpg'),
  "Disney's All-Star Music Resort": require('../../assets/images/disneys-all-star-music-resort-family-suites.jpg'),
  "Disney's All-Star Music Resort Family Suites": require('../../assets/images/disneys-all-star-music-resort-family-suites.jpg'),
  "Disney's All-Star Sports Resort": require('../../assets/images/disneys-all-star-sports-resort.jpg'),
  "Disney's Pop Century Resort": require('../../assets/images/disneys-pop-century-resort.jpeg'),
  "Disney's Port Orleans Resort - French Quarter": require('../../assets/images/port-orleans-french-quarter-optimized.jpg'),
  "Disney's Port Orleans Resort - Riverside": require('../../assets/images/port-orleans-riverside.webp'),

  // Universal Hotels
  "Hard Rock Hotel® at Universal Orlando": require('../../assets/images/hard-rock-hotel-2.jpg'),
  "Hard Rock Hotel": require('../../assets/images/hard-rock-hotel-2.jpg'),
  "Loews Portofino Bay Hotel at Universal Orlando": require('../../assets/images/portofino-bay-hotel.jpg'),
  "Loews Portofino Bay Hotel": require('../../assets/images/portofino-bay-hotel.jpg'),
  "Loews Royal Pacific Resort": require('../../assets/images/loews-royal-pacific-resort.jpg'),
  "Loews Sapphire Falls Resort": require('../../assets/images/loews-sapphire-falls-resort.jpg'),
  "Universal's Cabana Bay Beach Resort": require('../../assets/images/universal-cabana-bay-beach-resort.jpg'),
  "Universal's Aventura Hotel": require('../../assets/images/universals-aventura-hotel.webp'),
  "Universal's Endless Summer Resort - Surfside Inn and Suites": require('../../assets/images/universals-endless-summer-resort-surfside.jpg'),
  "Universal's Endless Summer Resort - Dockside Inn and Suites": require('../../assets/images/universals-endless-summer-resort-dockside.jpg'),

  // Luxury Hotels
  "Four Seasons Resort Orlando at Walt Disney World Resort": require('../../assets/images/four-seasons-orlando-optimized.jpg'),
  "Four Seasons Resort Orlando": require('../../assets/images/four-seasons-orlando-optimized.jpg'),
  "Waldorf Astoria Orlando": require('../../assets/images/waldorf-astoria-2-optimized.jpg'),
  "Ritz-Carlton Orlando, Grande Lakes": require('../../assets/images/ritz-carlton-orlando-optimized.jpg'),
  "The Ritz-Carlton Orlando, Grande Lakes": require('../../assets/images/ritz-carlton-orlando-optimized.jpg'),
  "Grand Bohemian Hotel Orlando": require('../../assets/images/grand-bohemian-hotel-orlando.jpg'),
  "JW Marriott Orlando Bonnet Creek Resort & Spa": require('../../assets/images/jw-marriott-bonnet-creek.jpg'),
  "JW Marriott Orlando Grande Lakes": require('../../assets/images/jw-marriott-hotel.jpeg'),
  "Conrad Orlando": require('../../assets/images/conrad-hotel-1-optimized.jpg'),
  "Evermore Orlando Resort": require('../../assets/images/evermore-resort-optimized.jpg'),
  "Lake Nona Wave Hotel": require('../../assets/images/lake-nona-wave-hotel-optimized.jpg'),
  "Hyatt Regency Grand Cypress": require('../../assets/images/hyatt-regency-grand-cypress-optimized.webp'),
  "Caribe Royale Orlando": require('../../assets/images/caribe-royale-orlando.jpg'),
  "Rosen Centre Hotel": require('../../assets/images/rosen-centre-hotel-optimized.jpg'),

  // Other Hotels
  "DoubleTree by Hilton at the Entrance to Universal Orlando": require('../../assets/images/doubletree-by-hilton.jpeg'),
  "Hilton Orlando Lake Buena Vista": require('../../assets/images/hilton-orlando-buena-vista-palace.jpg'),
  "The Alfond Inn": require('../../assets/images/alfond-inn.webp'),
  "Marriott Orlando Downtown": require('../../assets/images/hyatt-regency-orlando.jpeg'), // Using similar hotel image
  "B Resort & Spa Lake Buena Vista": require('../../assets/images/b-resort-and-spa.jpg'),
  "DoubleTree Suites by Hilton Orlando - Disney Springs": require('../../assets/images/doubletree-suites-disney-springs.jpg'),
  "Embassy Suites by Hilton Orlando Lake Buena Vista South": require('../../assets/images/embassy-suites-lbv-south.jpg'),
  "Holiday Inn Orlando - Disney Springs": require('../../assets/images/holiday-inn-orlando-disney-springs.jpg'),
  "Encantada Resort": require('../../assets/images/encantada-resort.jpg'),
  "Magic Village Yards": require('../../assets/images/magic-village-yards.jpg'),
  "Reunion Resort": require('../../assets/images/reunion-resort-optimized.jpg'),
  "Margaritaville Resort Orlando": require('../../assets/images/margaritaville-resort-optimized.jpg'),
  "Walt Disney World Swan": require('../../assets/images/walt-disney-swan-hotel-optimized.webp'),
  "Castle Hotel, Autograph Collection": require('../../assets/images/castle-hotel-autograph-collection.jpg'),
  "Crowne Plaza Orlando - Universal Blvd": require('../../assets/images/crowne-plaza-orlando-universal-blvd.jpg'),
  "Extended Stay America Orlando Convention Center": require('../../assets/images/extended-stay-america-orlando-convention-center.jpeg'),
  "Wyndham Garden Orlando": require('../../assets/images/wyndham-garden-lake-buena-vista.jpg'),
  "Hyatt Place Orlando/Convention Center": require('../../assets/images/hyatt-place-convention-center.jpg'),
  "Hyatt Regency Orlando":require('../../assets/images/hyatt-regency-orlando.jpeg'),
  "Westgate Palace Resort":require('../../assets/images/westgate-palace-resort.jpg'),
  "La Quinta":require("../../assets/images/la-quinta-idrive.jpg"),
  "Hyatt Regency Orlando International Airport":require("../../assets/images/hyatt-regency-orlando-airport.jpg"),
"Hampton Inn & Suites Orlando Airport":require("../../assets/images/hampton-inn-orlando-airport.jpg"),
"Orlando Airport Marriott Lakeside":require("../../assets/images/orlando-airport-marriott.jpg"),
"DoubleTree by Hilton Orlando Airport":require("../../assets/images/doubletree-orlando-airport.jpg"),
"Hilton Garden Inn Orlando Airport":require("../../assets/images/hilton-garden-inn-orlando-airport.jpg"),
"Homewood Suites by Hilton Orlando Airport":require("../../assets/images/homewood-suites-orlando-airport.jpg"),
"Fairfield Inn & Suites Orlando Airport":require("../../assets/images/fairfield-inn-orlando-airport.jpg"),
"Springhill Suites Orlando Airport":require("../../assets/images/springhill-suites-orlando-airport.jpg"),
"Embassy Suites by Hilton Orlando Airport":require("../../assets/images/embassy-suites-orlando-airport.jpg"),
"Staybridge Suites Orlando Airport South":require("../../assets/images/staybridge-suites-orlando-airport.jpg"),
"The Point Hotel & Suites":require("../../assets/images/the-point-hotel.jpg"),
"CoCo Key Hotel and Water Resort":require("../../assets/images/coco-key-resort.jpg"),
"The Enclave Hotel & Suites":require("../../assets/images/enclave-hotel.jpg"),
"DoubleTree Suites by Hilton Orlando - Disney Springs Area":require("../../assets/images/doubletree-suites-disney-springs.jpg"),
"Vacation Village at Parkway":require("../../assets/images/vacation-village-parkway.jpg"),
"Westgate Vacation Villas Resort":require("../../assets/images/westgate-vacation-villas.jpg"),
"Gaylord Palms Resort & Convention Center":require("../../assets/images/gaylord-palms-hotel.jpg"),
"Orlando World Center Marriott":require("../../assets/images/orlando-center-world-marriott-hotel.jpg"),
"TownePlace Suites by Marriott Orlando at SeaWorld":require("../../assets/images/towneplace-suites-seaworld.jpg"),
"Avanti International Resort":require("../../assets/images/avanti-international-resort.jpg"),
"TownePlace Suites Orlando Downtown":require("../../assets/images/towneplace-suites-orlando-downtown.jpg"),
"The Delaney Hotel":require("../../assets/images/the-delaney-hotel.jpg"),
"Eo Inn - Downtown":require("../../assets/images/eo-inn-downtown.jpg"),
"Embassy Suites Orlando Downtown":require("../../assets/images/embassy-suites-orlando-downtown.jpg"),
"Aloft Orlando Downtown":require("../../assets/images/aloft-orlando-downtown.jpg"),
"Courtyard Orlando Downtown":require("../../assets/images/courtyard-orlando-downtown.jpg"),
"AC Hotel Orlando Downtown":require("../../assets/images/ac-hotel-orlando-downtown.jpg"),
//"Grand Bohemian Hotel Orlando":require("../../assets/images/grand-bohemian-hotel-orlando.jpg"),

};

// Function to get the correct image path for a hotel
export const getHotelImagePath = (hotelName: string): any => {
  // Try exact match first
  if (hotelImageMapping[hotelName]) {
    return hotelImageMapping[hotelName];
  }

  // Try partial matches for hotels with similar names
  const normalizedName = hotelName.toLowerCase();
  
  for (const [mappedName, imagePath] of Object.entries(hotelImageMapping)) {
    const normalizedMappedName = mappedName.toLowerCase();
    
    // Check if the hotel name contains key identifying words
    if (normalizedName.includes('grand floridian') && normalizedMappedName.includes('grand floridian')) {
      return imagePath;
    }
    if (normalizedName.includes('alfond inn') && normalizedMappedName.includes('alfond inn')) {
      return imagePath;
    }
    if (normalizedName.includes('contemporary') && normalizedMappedName.includes('contemporary')) {
      return imagePath;
    }
    if (normalizedName.includes('polynesian') && normalizedMappedName.includes('polynesian')) {
      return imagePath;
    }
    if (normalizedName.includes('animal kingdom lodge') && normalizedMappedName.includes('animal kingdom lodge')) {
      return imagePath;
    }
    if (normalizedName.includes('wilderness lodge') && normalizedMappedName.includes('wilderness lodge')) {
      return imagePath;
    }
    if (normalizedName.includes('beach club') && normalizedMappedName.includes('beach club')) {
      return imagePath;
    }
    if (normalizedName.includes('yacht club') && normalizedMappedName.includes('yacht club')) {
      return imagePath;
    }
    if (normalizedName.includes('boardwalk') && normalizedMappedName.includes('boardwalk')) {
      return imagePath;
    }
    if (normalizedName.includes('hard rock') && normalizedMappedName.includes('hard rock')) {
      return imagePath;
    }
    if (normalizedName.includes('portofino') && normalizedMappedName.includes('portofino')) {
      return imagePath;
    }
    if (normalizedName.includes('royal pacific') && normalizedMappedName.includes('royal pacific')) {
      return imagePath;
    }
    if (normalizedName.includes('four seasons') && normalizedMappedName.includes('four seasons')) {
      return imagePath;
    }
    if (normalizedName.includes('waldorf astoria') && normalizedMappedName.includes('waldorf astoria')) {
      return imagePath;
    }
    if (normalizedName.includes('ritz-carlton') && normalizedMappedName.includes('ritz-carlton')) {
      return imagePath;
    }
    if (normalizedName.includes('grand bohemian') && normalizedMappedName.includes('grand bohemian')) {
      return imagePath;
    }
    if (normalizedName.includes('jw marriott') && normalizedMappedName.includes('jw marriott')) {
      return imagePath;
    }
    if (normalizedName.includes('conrad') && normalizedMappedName.includes('conrad')) {
      return imagePath;
    }
    if (normalizedName.includes('evermore') && normalizedMappedName.includes('evermore')) {
      return imagePath;
    }
    if (normalizedName.includes('caribe royale') && normalizedMappedName.includes('caribe royale')) {
      return imagePath;
    }
    if (normalizedName.includes('rosen centre') && normalizedMappedName.includes('rosen centre')) {
      return imagePath;
    }
    if (normalizedName.includes('hilton orlando') && normalizedMappedName.includes('hilton orlando')) {
      return imagePath;
    }
    if (normalizedName.includes('wyndham garden') && normalizedMappedName.includes('wyndham garden')) {
      return imagePath;
    }
    if (normalizedName.includes('holiday inn') && normalizedMappedName.includes('holiday inn')) {
      return imagePath;
    }
    if (normalizedName.includes('reunion') && normalizedMappedName.includes('reunion')) {
      return imagePath;
    }
    if (normalizedName.includes('rosen') && normalizedMappedName.includes('rosen')) {
      return imagePath;
    }
      if (normalizedName.includes('extended') && normalizedMappedName.includes('extended')) {
        return imagePath;
      }
    if (normalizedName.includes('la quinta') && normalizedMappedName.includes('la quinta')) {
      return imagePath;
    }
    if (normalizedName.includes('grande lakes') && normalizedMappedName.includes('grande lakes')) {
      return imagePath;
    }
    if (normalizedName.includes('bonnet creek') && normalizedMappedName.includes('bonnet creek')) {
      return imagePath;
    }
    if (normalizedName.includes('doubletree') && normalizedName.includes('universal') && normalizedMappedName.includes('doubletree')) {
      return imagePath;
    }
    if (normalizedName.includes('marriott') && normalizedName.includes('downtown') && normalizedMappedName.includes('marriott')) {
      return imagePath;
    }
    if (normalizedName.includes('hilton') && normalizedName.includes('lake buena vista') && normalizedMappedName.includes('hilton')) {
      return imagePath;
    }
    if (normalizedName.includes('alfond') && normalizedMappedName.includes('alfond')) {
      return imagePath;
    }
    if (normalizedName.includes('all-star music') && normalizedMappedName.includes('all-star music')) {
      return imagePath;
    }
  }

  return undefined;
};

// Function to update a hotel object with the correct local image path
export const updateHotelWithLocalImage = (hotel: any): any => {
  const localImagePath = getHotelImagePath(hotel.name);
  
  if (localImagePath) {
    return {
      ...hotel,
      imageUrl: localImagePath
    };
  }
  
  return hotel;
};
