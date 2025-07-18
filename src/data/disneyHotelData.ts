//import { DisneyHotel } from "../types/disney";

// Disney hotels organized by park proximity
export const disneyHotelData: Record<string, DisneyHotel> = {
  // Magic Kingdom Area
  "contemporary-resort": {
    name: "Disney's Contemporary Resort",
    category: "Deluxe",
    description: "Stay in modern luxury at Disney's Contemporary Resort with sleek rooms, monorail access, and prime Magic Kingdom proximity. This iconic A-frame hotel features Chef Mickey's character dining and stunning views of Bay Lake.",
    parkArea: "Magic Kingdom",
    price_range: "Deluxe",
    imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneysites/wdw/accommodations/contemporary-resort/Contemporary_Resort_Pool_V_f11-16x9.jpg",
    websiteUrl: "https://disneyworld.disney.go.com/resorts/contemporary-resort/",
    diningOptions: [
      "Chef Mickey's (Character Dining)",
      "California Grill (Signature Dining)",
      "Steakhouse 71",
      "Contempo Café"
    ],
    amenities: [
      "Monorail access",
      "Walking path to Magic Kingdom",
      "Outdoor pools",
      "Fitness center",
      "Marina rentals",
      "Children's activities",
      "Electrical Water Pageant views",
      "Merchandise stores"
    ],
    transportationOptions: [
      "Monorail to Magic Kingdom and Epcot",
      "Bus to other parks and Disney Springs",
      "Walking path to Magic Kingdom",
      "Water launch to Wilderness Lodge and Fort Wilderness"
    ],
    roomTypes: [
      "Standard Room",
      "Garden View",
      "Bay Lake View",
      "Theme Park View",
      "Club Level",
      "1-Bedroom Suite",
      "2-Bedroom Suite"
    ],
    proximity: {
      magicKingdom: "Walking distance (0.5 miles) or monorail (2 minutes)",
      epcot: "Monorail with transfer (25 minutes)",
      hollywoodStudios: "Bus (15-20 minutes)",
      animalKingdom: "Bus (20-25 minutes)",
      disneySprings: "Bus (20 minutes)"
    },
    insiderTips: [
      "Book Theme Park View rooms for Magic Kingdom fireworks views from your balcony",
      "California Grill offers special fireworks viewing with dinner reservations",
      "Visit Top of the World Lounge (for DVC members) for spectacular views",
      "Walking to Magic Kingdom is often faster than monorail during peak periods"
    ]
  },
  "grand-floridian-resort": {
    name: "Disney's Grand Floridian Resort & Spa",
    category: "Deluxe",
    description: "Indulge in Victorian elegance at Disney's Grand Floridian Resort & Spa, Disney World's flagship luxury resort. Experience opulent accommodations, fine dining including Victoria & Albert's (AAA Five Diamond), and direct monorail access to Magic Kingdom.",
    parkArea: "Magic Kingdom",
    price_range: "Deluxe",
    imageUrl: "/images/hotels/disney-grand-floridian-optimized.jpg",
    websiteUrl: "https://disneyworld.disney.go.com/resorts/grand-floridian-resort-and-spa/",
    diningOptions: [
      "Victoria & Albert's (AAA Five Diamond)",
      "Narcoossee's (Waterfront Fine Dining)",
      "Cítricos (Signature Dining)",
      "Grand Floridian Café",
      "1900 Park Fare (Character Dining)",
      "Gasparilla Island Grill"
    ],
    amenities: [
      "Full-service spa",
      "Two pools with waterslide",
      "Beach access",
      "Monorail access",
      "Walking path to Magic Kingdom",
      "Electrical Water Pageant views",
      "Live orchestra in lobby",
      "Marina rentals",
      "Wedding pavilion",
      "High tea service"
    ],
    transportationOptions: [
      "Monorail to Magic Kingdom and Epcot (with transfer)",
      "Bus to other parks and Disney Springs",
      "Water launch to Magic Kingdom",
      "Walking path to Magic Kingdom",
      "Water launch to Polynesian Village"
    ],
    roomTypes: [
      "Standard Room",
      "Garden View",
      "Lagoon View",
      "Theme Park View",
      "Club Level",
      "1-Bedroom Suite",
      "2-Bedroom Suite",
      "Grand Suite",
      "DVC Villas"
    ],
    proximity: {
      magicKingdom: "Walking distance (0.7 miles) or monorail (3 minutes)",
      epcot: "Monorail with transfer (25 minutes)",
      hollywoodStudios: "Bus (15-20 minutes)",
      animalKingdom: "Bus (20-25 minutes)",
      disneySprings: "Bus (20 minutes)"
    },
    insiderTips: [
      "Book dinner at Narcoossee's for fireworks views across the lagoon",
      "Visit the Enchanted Rose Lounge for Beauty and the Beast themed cocktails",
      "Main building rooms are closest to dining and transportation",
      "Victoria & Albert's requires advance reservations (often 6+ months)",
      "Walking path to Magic Kingdom offers beautiful waterfront views"
    ]
  },
  "polynesian-village-resort": {
    name: "Disney's Polynesian Village Resort",
    category: "Deluxe",
    description: "Escape to the South Pacific at Disney's Polynesian Village Resort. This tropical paradise offers tiki-themed rooms, dining including 'Ohana and Trader Sam's Grog Grotto, and the famous Dole Whip at Pineapple Lanai. Enjoy direct monorail access to Magic Kingdom.",
    parkArea: "Magic Kingdom",
    price_range: "Deluxe",
    imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneysites/wdw/accommodations/polynesian-resort/overview/polynesian-resort-16x9.jpg",
    websiteUrl: "https://disneyworld.disney.go.com/resorts/polynesian-village-resort/",
    diningOptions: [
      "'Ohana (Family-Style Polynesian)",
      "Kona Cafe",
      "Trader Sam's Grog Grotto",
      "Pineapple Lanai (Dole Whip)",
      "Capt. Cook's",
      "Oasis Bar & Grill"
    ],
    amenities: [
      "Lava Pool with volcano slide",
      "Oasis quiet pool",
      "Beach access",
      "Monorail access",
      "Children's activities",
      "Electrical Water Pageant views",
      "Spirit of Aloha Dinner Show",
      "Marina rentals"
    ],
    transportationOptions: [
      "Monorail to Magic Kingdom and Epcot (with transfer)",
      "Bus to other parks and Disney Springs",
      "Water launch to Magic Kingdom",
      "Water launch to Grand Floridian"
    ],
    roomTypes: [
      "Standard Room",
      "Lagoon View",
      "Theme Park View",
      "Club Level",
      "Suites",
      "DVC Bungalows (over water)",
      "DVC Studios and Villas"
    ],
    proximity: {
      magicKingdom: "Monorail (5 minutes) or water launch (10 minutes)",
      epcot: "Monorail with transfer (20 minutes)",
      hollywoodStudios: "Bus (15-20 minutes)",
      animalKingdom: "Bus (20-25 minutes)",
      disneySprings: "Bus (20 minutes)"
    },
    insiderTips: [
      "Try the Tonga Toast at Kona Cafe for a famous breakfast treat",
      "Visit Trader Sam's Grog Grotto for interactive tiki cocktails",
      "Theme Park View rooms offer Magic Kingdom fireworks views",
      "The beach offers excellent fireworks viewing spots",
      "Get Dole Whip without park admission at Pineapple Lanai"
    ]
  },
  "wilderness-lodge": {
    name: "Disney's Wilderness Lodge",
    category: "Deluxe",
    description: "Embrace rustic charm at Disney's Wilderness Lodge, inspired by America's National Park lodges. This Pacific Northwest-themed resort features a stunning lobby with an 82-foot fireplace, geyser, creek, and waterfall flowing into the themed pool.",
    parkArea: "Magic Kingdom",
    price_range: "Deluxe",
    imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/places-to-stay/wilderness-lodge/overview/wilderness-lodge-gallery-00-16x9.jpg",
    websiteUrl: "https://disneyworld.disney.go.com/resorts/wilderness-lodge/",
    diningOptions: [
      "Artist Point (Character Dining: Storybook Dining with Snow White)",
      "Whispering Canyon Cafe",
      "Geyser Point Bar & Grill",
      "Roaring Fork"
    ],
    amenities: [
      "Two themed pools",
      "Copper Creek Springs Pool with waterslide",
      "Boulder Ridge Cove Pool",
      "Fitness center",
      "Reunion Station",
      "Fire Rock Geyser (erupts hourly)",
      "Waterfront trail",
      "Marina rentals",
      "Beach area (no swimming)"
    ],
    transportationOptions: [
      "Bus to all parks and Disney Springs",
      "Water launch to Magic Kingdom",
      "Water launch to Fort Wilderness and Contemporary"
    ],
    roomTypes: [
      "Standard Room",
      "Courtyard View",
      "Nature View",
      "Club Level",
      "1-Bedroom Suite",
      "2-Bedroom Suite",
      "DVC Studios and Villas (Copper Creek, Boulder Ridge)"
    ],
    proximity: {
      magicKingdom: "Water launch (10 minutes) or bus (10 minutes)",
      epcot: "Bus (15-20 minutes)",
      hollywoodStudios: "Bus (15-20 minutes)",
      animalKingdom: "Bus (15-20 minutes)",
      disneySprings: "Bus (20 minutes)"
    },
    insiderTips: [
      "Look for Hidden Mickeys in the lobby's giant Native American-inspired rug",
      "Whispering Canyon Cafe offers fun, interactive dining experiences",
      "Take an early morning stroll along the nature trail to Fort Wilderness",
      "Geyser Point offers waterfront dining with Magic Kingdom fireworks views",
      "Flag Family program lets select guests raise/lower the American flag daily"
    ]
  },
  
  // Epcot Area
  // "beach-club-resort": {
  //   name: "Disney's Beach Club Resort",
  //   category: "Deluxe",
  //   description: "Disney's Beach Club Resort is a favorite among both families and adults, offering a beach oasis experience with numerous Disney amenities. The resort is situated around Crescent Lake, featuring a mini water park, sandy beaches, and various recreation and dining options. Guests can enjoy walking distance to EPCOT and access to the Boardwalk area. The lobby is adorned with a larger-than-life gingerbread carousel during the holidays, adding to the festive atmosphere. The resort's exterior boasts bright blue colors, giving it a vibrant yet classy beach flair. It is also connected to Disney's Yacht Club Resort, sharing amenities and creating a seamless experience for guests.",
  //   parkArea: "Epcot",
  //   price_range: "Deluxe",
  //   imageUrl: "/images/hotels/disneys-beach-club-resort.jpg",
  //   websiteUrl: "https://disneyworld.disney.go.com/resorts/beach-club-resort/",
  //   diningOptions: [
  //     "Cape May Cafe (Character Breakfast; Seafood Dinner)",
  //     "Beaches & Cream Soda Shop",
  //     "Beach Club Marketplace",
  //     "Hurricane Hanna's Waterside Bar & Grill",
  //     "Martha's Vineyard Lounge"
  //   ],
  //   amenities: [
  //     "Stormalong Bay (3-acre waterpark pool with sand bottom)",
  //     "Three leisure pools",
  //     "Beach access",
  //     "Volleyball court",
  //     "Walking distance to Epcot",
  //     "Ship Shape fitness center",
  //     "Marina rentals",
  //     "Sandcastle Club children's activity center"
  //   ],
  //   transportationOptions: [
  //     "Walking path to Epcot (5-10 minutes)",
  //     "Walking path or Friendship boat to Hollywood Studios (20 minutes)",
  //     "Bus to Magic Kingdom, Animal Kingdom, and Disney Springs",
  //     "Skyliner access nearby (at International Gateway)"
  //   ],
  //   roomTypes: [
  //     "Standard Room",
  //     "Garden View",
  //     "Lagoon View",
  //     "Club Level",
  //     "1-Bedroom Suite",
  //     "2-Bedroom Suite",
  //     "DVC Studios and Villas (Beach Club Villas)"
  //   ],
  //   proximity: {
  //     magicKingdom: "Bus (15-20 minutes)",
  //     epcot: "Walking distance (5-10 minutes to International Gateway)",
  //     hollywoodStudios: "Boat (15 minutes) or walking (20 minutes)",
  //     animalKingdom: "Bus (20 minutes)",
  //     disneySprings: "Bus (15 minutes)"
  //   },
  //   insiderTips: [
  //     "Stormalong Bay is exclusive to Beach Club and Yacht Club guests",
  //     "Try the Kitchen Sink sundae at Beaches & Cream",
  //     "Walking to Epcot through International Gateway is faster than bus",
  //     "Request upper-floor rooms for better views",
  //     "Book early for Epcot festival periods when this resort fills quickly"
  //   ]
  // },
  // "yacht-club-resort": {
  //   name: "Disney's Yacht Club Resort",
  //   category: "Deluxe",
  //   description: "Sail into luxury at Disney's Yacht Club Resort, designed after New England yacht clubs with nautical theming. Share the amazing Stormalong Bay pool complex with Beach Club, enjoy steakhouse dining at Yachtsman Steakhouse, and walk to Epcot in minutes.",
  //   parkArea: "Epcot",
  //   price_range: "Deluxe",
  //   imageUrl: "/images/hotels/disneys-yacht-club-resort.jpg",
  //   websiteUrl: "https://disneyworld.disney.go.com/resorts/yacht-club-resort/",
  //   diningOptions: [
  //     "Yachtsman Steakhouse (Signature Dining)",
  //     "Ale & Compass Restaurant",
  //     "Ale & Compass Lounge",
  //     "Crew's Cup Lounge",
  //     "Market at Ale & Compass",
  //     "Hurricane Hanna's Waterside Bar & Grill"
  //   ],
  //   amenities: [
  //     "Stormalong Bay (3-acre waterpark pool with sand bottom)",
  //     "Three leisure pools",
  //     "Beach access",
  //     "Ship Shape fitness center",
  //     "Walking distance to Epcot",
  //     "Marina rentals",
  //     "Convention center facilities"
  //   ],
  //   transportationOptions: [
  //     "Walking path to Epcot (5-10 minutes)",
  //     "Walking path or Friendship boat to Hollywood Studios (20 minutes)",
  //     "Bus to Magic Kingdom, Animal Kingdom, and Disney Springs",
  //     "Skyliner access nearby (at International Gateway)"
  //   ],
  //   roomTypes: [
  //     "Standard Room",
  //     "Garden View",
  //     "Lagoon View",
  //     "Club Level",
  //     "Junior Suite",
  //     "1-Bedroom Suite",
  //     "2-Bedroom Suite",
  //     "Presidential Suite"
  //   ],
  //   proximity: {
  //     magicKingdom: "Bus (15-20 minutes)",
  //     epcot: "Walking distance (5-10 minutes to International Gateway)",
  //     hollywoodStudios: "Boat (15 minutes) or walking (20 minutes)",
  //     animalKingdom: "Bus (20 minutes)",
  //     disneySprings: "Bus (15 minutes)"
  //   },
  //   insiderTips: [
  //     "Yacht Club is typically quieter than Beach Club (popular with convention guests)",
  //     "Yachtsman Steakhouse is one of Disney's best signature restaurants",
  //     "Walking to Hollywood Studios is often faster than the boat",
  //     "The quiet Admiral pool offers a break from busy Stormalong Bay",
  //     "For fireworks views, request a room facing the Boardwalk"
  //   ]
  // },
  // "boardwalk-inn": {
  //   name: "Disney's BoardWalk Inn",
  //   category: "Deluxe",
  //   description: "Step into 1940s Atlantic City at Disney's BoardWalk Inn, surrounded by the lively entertainment district of Disney's BoardWalk. Enjoy the luna park-inspired pool, fine dining at Flying Fish, and easy walking access to both Epcot and Hollywood Studios.",
  //   parkArea: "Epcot",
  //   price_range: "Deluxe",
  //   imageUrl: "/images/hotels/disneys-boardwalk-inn.jpeg",
  //   websiteUrl: "https://disneyworld.disney.go.com/resorts/boardwalk-inn/",
  //   diningOptions: [
  //     "Flying Fish (Signature Dining)",
  //     "Trattoria al Forno (Character Breakfast)",
  //     "BoardWalk Bakery",
  //     "Pizza Window",
  //     "AbracadaBar",
  //     "Belle Vue Lounge",
  //     "BoardWalk Ice Cream",
  //     "Various BoardWalk vendors and restaurants"
  //   ],
  //   amenities: [
  //     "Luna Park Pool with Keister Coaster slide",
  //     "Two leisure pools",
  //     "Muscles & Bustles fitness center",
  //     "Walking distance to Epcot",
  //     "Nighttime entertainment on the BoardWalk",
  //     "Surrey bike rentals",
  //     "Marina",
  //     "ESPN Club",
  //     "Carnival games and street performers"
  //   ],
  //   transportationOptions: [
  //     "Walking path to Epcot (5-10 minutes)",
  //     "Walking path or Friendship boat to Hollywood Studios (15-20 minutes)",
  //     "Bus to Magic Kingdom, Animal Kingdom, and Disney Springs",
  //     "Skyliner access nearby (at International Gateway)"
  //   ],
  //   roomTypes: [
  //     "Standard Room",
  //     "Water View",
  //     "Garden View",
  //     "BoardWalk View",
  //     "Club Level",
  //     "1-Bedroom Suite",
  //     "2-Bedroom Suite",
  //     "DVC Studios and Villas (BoardWalk Villas)"
  //   ],
  //   proximity: {
  //     magicKingdom: "Bus (15-20 minutes)",
  //     epcot: "Walking distance (5-10 minutes to International Gateway)",
  //     hollywoodStudios: "Boat (15 minutes) or walking (20 minutes)",
  //     animalKingdom: "Bus (20 minutes)",
  //     disneySprings: "Bus (15 minutes)"
  //   },
  //   insiderTips: [
  //     "BoardWalk view rooms offer lively evening entertainment views",
  //     "Street performers appear on the BoardWalk in the evenings",
  //     "Jellyrolls dueling piano bar is a popular adult nightlife spot",
  //     "Fewer families stay here compared to Beach Club, often quieter",
  //     "Many rooms have balconies overlooking the activities below"
  //   ]
  // },


  // Animal Kingdom Area
  "animal-kingdom-lodge": {
    name: "Disney's Animal Kingdom Lodge",
    category: "Deluxe",
    description: "Immerse in African savanna vibes at Disney's Animal Kingdom Lodge, where over 30 species of wildlife roam outside your window. Experience authentic African cuisine, cultural activities, and stunning savanna views in this architecturally impressive resort.",
    parkArea: "Animal Kingdom",
    price_range: "Deluxe",
    imageUrl: "/images/hotels/disneys-animal-kingdom-lodge-optimized.jpg",
    websiteUrl: "https://disneyworld.disney.go.com/resorts/animal-kingdom-lodge/",
    diningOptions: [
      "Jiko - The Cooking Place (Signature Dining)",
      "Boma - Flavors of Africa (Buffet)",
      "Sanaa (Table Service with savanna views)",
      "The Mara (Quick Service)",
      "Cape Town Lounge and Wine Bar",
      "Victoria Falls Lounge"
    ],
    amenities: [
      "Uzima Springs Pool with slide",
      "Samawati Springs Pool (Kidani Village)",
      "Uwanja Camp water playground",
      "Savanna viewing areas",
      "Survival of the Fittest fitness center",
      "Zahanati Massage & Fitness Center",
      "Jogging trail",
      "Simba's Clubhouse",
      "Cultural activities and safari guides",
      "Night vision animal viewing"
    ],
    transportationOptions: [
      "Bus to all parks and Disney Springs"
    ],
    roomTypes: [
      "Standard Room",
      "Pool View",
      "Savanna View",
      "Club Level",
      "1-Bedroom Suite",
      "2-Bedroom Suite",
      "DVC Studios and Villas (Jambo House and Kidani Village)"
    ],
    proximity: {
      magicKingdom: "Bus (20-25 minutes)",
      epcot: "Bus (15-20 minutes)",
      hollywoodStudios: "Bus (15-20 minutes)",
      animalKingdom: "Bus (5-10 minutes)",
      disneySprings: "Bus (15 minutes)"
    },
    insiderTips: [
      "Savanna view rooms are worth the splurge for animal viewing",
      "Sanaa's bread service is a must-try culinary experience",
      "Free cultural activities include cooking demonstrations and animal tracking",
      "Arusha Savanna usually has the most animal activity",
      "Request upper floors for the best savanna views",
      "Evening night vision goggle sessions let you see nocturnal animals"
    ]
  },

  "pop-century-resort": {
    name: "Disney's Pop Century Resort",
    category: "Value",
    description: "Journey through American pop culture decades (1950s-1990s) at Disney's Pop Century Resort. This value resort features oversized icons from each decade, recently renovated rooms, the Hippy Dippy Pool, and direct Skyliner access to Epcot and Hollywood Studios.",
    parkArea: "Hollywood Studios",
    price_range: "Value",
    imageUrl: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneysites/wdw/accommodations/pop-century-resort/resort-overview/pop-century-resort-16x9.jpg",
    websiteUrl: "https://disneyworld.disney.go.com/resorts/pop-century-resort/",
    diningOptions: [
      "Everything POP Shopping & Dining",
      "Petals Pool Bar",
      "Pizza Delivery"
    ],
    amenities: [
      "Hippy Dippy Pool (flower-shaped) with water jets",
      "Bowling Pin Pool (1950s area)",
      "Computer Pool (1990s area)",
      "Playground",
      "Arcade",
      "Jogging trail around lake",
      "Giant pop culture icons throughout resort",
      "Movies under the stars",
      "Skyliner station"
    ],
    transportationOptions: [
      "Disney Skyliner to Epcot and Hollywood Studios",
      "Bus to Magic Kingdom, Animal Kingdom, and Disney Springs"
    ],
    roomTypes: [
      "Standard Room",
      "Pool View",
      "Preferred Room (closer to main building)",
      "King Bed Room"
    ],
    proximity: {
      magicKingdom: "Bus (15-20 minutes)",
      epcot: "Skyliner (15 minutes to International Gateway)",
      hollywoodStudios: "Skyliner (10 minutes)",
      animalKingdom: "Bus (15 minutes)",
      disneySprings: "Bus (15 minutes)"
    },
    insiderTips: [
      "All rooms have been renovated with queen beds (one converts to a table)",
      "1960s buildings are closest to the Skyliner station",
      "Preferred rooms are in the 1950s-60s sections near Classic Hall",
      "Bridge to Art of Animation offers a nice walking path and additional food options",
      "Skyliner lines can be long at park closing; consider leaving early or late",
      "Request upper floors for better views and less noise"
    ]
  },
  
  // Disney Springs Area
  "saratoga-springs-resort": {
    name: "Disney's Saratoga Springs Resort & Spa",
    category: "Deluxe Villa",
    description: "Relax at Disney's Saratoga Springs Resort & Spa, inspired by historic Saratoga Springs, New York. This sprawling resort offers Disney Vacation Club villas, multiple pools, a full-service spa, and walking distance to Disney Springs shopping and dining.",
    parkArea: "Disney Springs",
    price_range: "Deluxe Villa",
    imageUrl: "/images/hotels/disneys-saratoga-springs-resort.jpeg",
    websiteUrl: "https://disneyworld.disney.go.com/resorts/saratoga-springs-resort-and-spa/",
    diningOptions: [
      "The Turf Club Bar and Grill",
      "The Artist's Palette",
      "The Paddock Grill",
      "Backstretch Pool Bar",
      "On the Rocks Pool Bar"
    ],
    amenities: [
      "High Rock Spring Pool with waterslide",
      "The Paddock Pool with waterslide",
      "Three leisure pools",
      "Senses Spa",
      "Lake Buena Vista Golf Course",
      "Tennis courts",
      "Basketball court",
      "Bicycle rentals",
      "Community Hall",
      "Arcade",
      "Jogging trails",
      "Treehouse Villas"
    ],
    transportationOptions: [
      "Bus to all parks",
      "Walking path to Disney Springs",
      "Boat to Disney Springs",
      "Internal bus transportation between sections"
    ],
    roomTypes: [
      "Deluxe Studio",
      "1-Bedroom Villa",
      "2-Bedroom Villa",
      "3-Bedroom Treehouse Villa",
      "3-Bedroom Grand Villa"
    ],
    proximity: {
      magicKingdom: "Bus (15-20 minutes)",
      epcot: "Bus (15 minutes)",
      hollywoodStudios: "Bus (15 minutes)",
      animalKingdom: "Bus (15-20 minutes)",
      disneySprings: "Walking (5-20 minutes depending on section) or boat (10 minutes)"
    },
    insiderTips: [
      "Congress Park section offers closest access to Disney Springs walking path",
      "Unique Treehouse Villas are elevated 10 feet off the ground",
      "The Paddock Pool is popular with families due to the zero-entry pool and slide",
      "Resort is very spread out - request rooms close to transportation",
      "The Turf Club is often overlooked and easier to get reservations",
      "Preferred rooms in The Springs are closest to main amenities"
    ]
  },
  "old-key-west-resort": {
    name: "Disney's Old Key West Resort",
    category: "Deluxe Villa",
    description: "Savor Florida Keys charm at Disney's Old Key West Resort, the original Disney Vacation Club property. Features the largest rooms on property, casual island atmosphere, boat transportation to Disney Springs, and Olivia's Cafe - a beloved hidden gem restaurant.",
    parkArea: "Disney Springs",
    price_range: "Deluxe Villa",
    imageUrl: "/images/hotels/disneys-old-key-west-resort.jpeg",
    websiteUrl: "https://disneyworld.disney.go.com/resorts/old-key-west-resort/",
    diningOptions: [
      "Olivia's Cafe",
      "Good's Food to Go",
      "Turtle Shack Poolside Snacks",
      "Gurgling Suitcase Libations & Spirits"
    ],
    amenities: [
      "Sandcastle Pool with waterslide",
      "Three leisure pools",
      "Fitness center",
      "Tennis courts",
      "Basketball court",
      "Volleyball court",
      "Boat rentals",
      "Bicycle rentals",
      "Community Hall",
      "Jogging paths",
      "Playground"
    ],
    transportationOptions: [
      "Bus to all parks",
      "Boat to Disney Springs",
      "Internal bus transportation between sections"
    ],
    roomTypes: [
      "Deluxe Studio",
      "1-Bedroom Villa",
      "2-Bedroom Villa",
      "3-Bedroom Grand Villa"
    ],
    proximity: {
      magicKingdom: "Bus (15-20 minutes)",
      epcot: "Bus (15 minutes)",
      hollywoodStudios: "Bus (15 minutes)",
      animalKingdom: "Bus (15-20 minutes)",
      disneySprings: "Boat (15 minutes)"
    },
    insiderTips: [
      "Rooms are approximately 20% larger than comparable rooms at other DVC resorts",
      "Hospitality House area has most convenient access to dining and transportation",
      "Request upper floors for better views and vaulted ceilings in some buildings",
      "Olivia's Cafe is known for Southernmost Buttermilk Chicken and banana bread pudding",
      "Resort shuttle is helpful due to the spread-out nature of the property",
      "All 1+ bedroom villas have full-size washer/dryers (not stackable units)"
    ]
  }
};

// Map of Disney Park areas to their corresponding hotels
export const disneyHotelsByPark = {
  magicKingdom: [
    "contemporary-resort",
    "grand-floridian-resort",
    "polynesian-village-resort",
    "wilderness-lodge"
  ],
  epcot: [
    "beach-club-resort",
    "yacht-club-resort",
    "boardwalk-inn",
    "riviera-resort"
  ],
  hollywoodStudios: [
    "caribbean-beach-resort",
    "art-of-animation",
    "pop-century-resort"
  ],
  animalKingdom: [
    "animal-kingdom-lodge",
    "coronado-springs-resort"
  ],
  disneySprings: [
    "saratoga-springs-resort",
    "old-key-west-resort"
  ],
  all: [
    "contemporary-resort",
    "grand-floridian-resort",
    "polynesian-village-resort",
    "wilderness-lodge",
    "beach-club-resort",
    "yacht-club-resort",
    "boardwalk-inn",
    "riviera-resort",
    "animal-kingdom-lodge",
    "coronado-springs-resort",
    "caribbean-beach-resort",
    "art-of-animation",
    "pop-century-resort",
    "saratoga-springs-resort", 
    "old-key-west-resort"
  ]
};

// Disney links
export const disneyLinks = {
  resorts: "https://disneyworld.disney.go.com/resorts/",
  tickets: "https://disneyworld.disney.go.com/admission/tickets/",
  disneyWorld: "https://disneyworld.disney.go.com/",
  magicKingdom: "https://disneyworld.disney.go.com/destinations/magic-kingdom/",
  epcot: "https://disneyworld.disney.go.com/destinations/epcot/",
  hollywoodStudios: "https://disneyworld.disney.go.com/destinations/hollywood-studios/",
  animalKingdom: "https://disneyworld.disney.go.com/destinations/animal-kingdom/",
  waterParks: "https://disneyworld.disney.go.com/destinations/typhoon-lagoon/",
  disneyMobileApp: "https://disneyworld.disney.go.com/plan/my-disney-experience/mobile-apps/"
};