import hotels, { HardcodedHotel } from '../data/hotels';
import { disneyHotelData } from '../data/disneyHotelData';
import { universalHotelData } from '../data/universalHotelData';
import { additionalHotels } from '../data/additionalHotels';
import { additionalBudgetHotels } from '../data/budgetHotels';

// Interface for the consolidated hotel data
export interface ConsolidatedHotel {
  id: number;
  name: string;
  category: string;
  subcategory: string; // luxury, theme-park, budget-friendly, etc.
  neighborhood: string;
  description: string;
  address?: string; // Added to match additionalHotels.ts data
  price?: string;
  imageUrl?: string;
  website?: string;
  amenities?: string[];
  perks?: string;
  rating?: number;
  tags?: string[];
}

// Map Disney hotels to our consolidated format
const processDisneyHotels = (): ConsolidatedHotel[] => {
  let id = 1000; // Starting ID for Disney hotels
  return Object.values(disneyHotelData).map(hotel => {
    // Default to "theme-park" for all Disney hotels
    let subcategory = "theme-park";
    
    // List of luxury Disney hotels based on master list
    const luxuryDisneyHotels = [
      "Disney's Grand Floridian Resort & Spa",
      "Disney's Contemporary Resort",
      "Disney's Animal Kingdom Lodge",
      "Disney's Polynesian Village Resort",
      "Disney's Wilderness Lodge",

      "Disney's Beach Club Resort",
      "Disney's Yacht Club Resort",
      "Disney's BoardWalk Inn"
    ];
    
    // Luxury property check
    if (luxuryDisneyHotels.includes(hotel.name)) {
      subcategory = "luxury";
    }
    
    // Budget property check - all Value resorts
    if (hotel.category === "Value" || hotel.price_range === "Value" || 
        hotel.name.includes("All-Star") || hotel.name.includes("Pop Century") || 
        hotel.name.includes("Art of Animation")) {
      subcategory = "budget-friendly";
    }
    
    return {
      id: id++,
      name: hotel.name,
      category: "Hotels",
      subcategory,
      neighborhood: hotel.parkArea || "Lake Buena Vista",
      description: hotel.description,
      price: subcategory === "luxury" ? "$$$$$" : 
             subcategory === "budget-friendly" ? "$$" : "$$$",
      imageUrl: hotel.imageUrl,
      website: hotel.websiteUrl,
      amenities: hotel.amenities?.slice(0, 6) || [],
      perks: "Early Theme Park Entry, Disney Dining Plan, and complimentary transportation throughout Walt Disney World Resort.",
      tags: ["Disney", hotel.category, "Theme Park"],
      rating: subcategory === "luxury" ? 4.8 : 
              subcategory === "budget-friendly" ? 4.2 : 4.5
    };
  });
};

// Map Universal hotels to our consolidated format
const processUniversalHotels = (): ConsolidatedHotel[] => {
  let id = 2000; // Starting ID for Universal hotels
  return Object.values(universalHotelData).map(hotel => {
    let subcategory = "theme-park";
    
    // Categorize Universal hotels
    if (hotel.priceRange === "Premier" || hotel.category === "Premier") {
      subcategory = "luxury";
    } else if (hotel.priceRange === "Value" || hotel.category === "Value" || 
              hotel.name.includes("Endless Summer")) {
      subcategory = "budget-friendly";
    } else if (hotel.priceRange === "Preferred" || hotel.category === "Preferred") {
      subcategory = "resorts";
    }
    
    return {
      id: id++,
      name: hotel.name,
      category: "Hotels",
      subcategory,
      neighborhood: "Universal Area", // Changed from hotel.location to ensure consistency
      description: hotel.description,
      price: hotel.priceRange === "Premier" ? "$$$$" : 
             hotel.priceRange === "Preferred" ? "$$$" : "$$",
      imageUrl: hotel.imageUrl,
      website: hotel.websiteUrl,
      amenities: hotel.amenities?.slice(0, 6) || [],
      perks: hotel.parkBenefits?.join(", ") || "Early Park Admission to Universal theme parks.",
      rating: 4.5,
      tags: ["Universal", hotel.category, "Theme Park"]
    };
  });
};

// Map basic hotels to our consolidated format
const processStandardHotels = (): ConsolidatedHotel[] => {
  return hotels.map(hotel => {
    let subcategory = "resorts";
    
    // Categorize based on price and name/description
    if (hotel.price === "$$$$$" || hotel.name.includes("Ritz") || 
        hotel.name.includes("Four Seasons") || hotel.name.includes("Waldorf")) {
      subcategory = "luxury";
    } else if ((hotel.price === "$$" || hotel.price === "$") ||
              hotel.name.includes("Value") || hotel.description.toLowerCase().includes("budget")) {
      subcategory = "budget-friendly";
    } else if (hotel.name.toLowerCase().includes("disney") || 
              hotel.name.toLowerCase().includes("universal")) {
      subcategory = "theme-park";
    } else if (hotel.name.toLowerCase().includes("villa") || 
              hotel.description.toLowerCase().includes("villa")) {
      subcategory = "villas";
    }
    
    return {
      id: hotel.id,
      name: hotel.name,
      category: "Hotels",
      subcategory,
      neighborhood: hotel.neighborhood || "Orlando",
      description: hotel.description,
      price: hotel.price,
      imageUrl: hotel.image_url,
      website: hotel.link,
      amenities: hotel.amenities || [],
      perks: "",
      rating: hotel.rating || (
        subcategory === "luxury" ? 4.7 : 
        subcategory === "theme-park" ? 4.5 : 
        subcategory === "villas" ? 4.4 : 
        subcategory === "resorts" ? 4.3 : 4.0
      ),
      tags: hotel.tags
    };
  });
};

// Process Epic Universe hotels
const processEpicUniverseHotels = (): ConsolidatedHotel[] => {
  // DISABLED: These hotels are now defined in additionalHotels.ts (IDs 5018-5020)
  // Returning an empty array to prevent duplication in the hotel database
  return [];
  
  /* Original implementation commented out to prevent duplication
  // Updated Epic Universe hotels data with additional details
  const epicUniverseHotels = [
    {
      name: "Universal Stella Nova Resort",
      classification: "Prime Value",
      description: "Universal Stella Nova Resort is a Prime Value hotel located adjacent to the new Universal Epic Universe theme park. It offers 750 double-queen guest rooms, providing a mix of services and amenities for comfort and affordability. The hotel features thoughtful, resort-style conveniences, an array of fast-casual dining options, and exclusive theme park benefits. The theming is designed to be modern and sleek, with a focus on providing a convenient and enjoyable stay for guests.",
      amenities: [
        "Resort-style conveniences",
        "Fast-casual dining options",
        "Exclusive theme park benefits",
        "Modern and sleek theming",
        "Thoughtful guest services"
      ],
      status: "Now open"
    },
    {
      name: "Universal Terra Luna Resort",
      classification: "Prime Value",
      description: "Universal Terra Luna Resort is another Prime Value hotel located adjacent to Universal Epic Universe. It also offers 750 double-queen guest rooms, providing a similar mix of services and amenities as Stella Nova. The hotel features an array of fast-casual dining options, exclusive theme park benefits, and thoughtful resort-style conveniences. The theming is designed to be elegant and inviting, with a focus on creating a comfortable stay for guests.",
      amenities: [
        "Resort-style conveniences",
        "Fast-casual dining options",
        "Exclusive theme park benefits",
        "Elegant and inviting theming",
        "Thoughtful guest services"
      ],
      status: "Now open"
    },
    {
      name: "Universal Helios Grand Hotel",
      classification: "Signature Collection",
      description: "Universal Helios Grand Hotel is a Signature Collection hotel located near Universal Epic Universe. It offers 500 rooms and is part of Universal Orlando's Signature Collection, which includes other high-end hotels like Loews Portofino Bay Hotel and Hard Rock Hotel. The hotel features expansive full-service amenities, exceptional dining options, distinguished service, immersive theming, and an array of exclusive theme park benefits. The theming is designed to be luxurious and sophisticated, with a focus on providing an exceptional stay for guests.",
      amenities: [
        "Expansive full-service amenities",
        "Exceptional dining options",
        "Distinguished service",
        "Immersive theming",
        "Luxurious and sophisticated atmosphere"
      ],
      status: "Now open"
    }
  ];

  let id = 3000; // Starting ID for Epic Universe hotels
  return epicUniverseHotels.map(hotel => {
    let subcategory = "theme-park";
    
    // Categorize Epic Universe hotels
    if (hotel.classification === "Signature Collection") {
      subcategory = "luxury";
    } else if (hotel.classification === "Prime Value") {
      subcategory = "budget-friendly";
    }
    
    return {
      id: id++,
      name: hotel.name,
      category: "Hotels",
      subcategory,
      neighborhood: "Epic Universe",
      description: hotel.description,
      price: hotel.classification === "Signature Collection" ? "$$$$" : 
             hotel.classification === "Preferred" ? "$$$" : "$$",
      imageUrl: "https://orlandoparkstop.com/wp-content/uploads/2022/08/Epic-Universe-Hotel-2-1536x864.jpg",
      website: "https://www.universalorlando.com/web/en/us/places-to-stay",
      amenities: hotel.amenities || ["Pool", "Theme Park Access", "Family Friendly"],
      perks: "Early Park Admission to Epic Universe, complimentary transportation to Universal Orlando parks.",
      rating: hotel.classification === "Signature Collection" ? 4.9 : 4.7,
      tags: ["Universal", "Epic Universe", hotel.status, "Theme Park"]
    };
  });
  */
};

// Process hotels from attached assets
const processCardHotels = (): ConsolidatedHotel[] => {
  try {
    // List of known hotels already in our system to avoid duplicates
    const knownHotels = new Set([
      ...hotels.map(h => h.name.toLowerCase()),
      ...Object.values(disneyHotelData).map(h => h.name.toLowerCase()),
      ...Object.values(universalHotelData).map(h => h.name.toLowerCase())
    ]);
    
    // Hotels from the attached assets files
    const additionalHotels = [
      // From Disney's All-Star Music Resort Family Suites
      {
        name: "Disney's All-Star Music Resort Family Suites",
        category: "Hotels",
        neighborhood: "Lake Buena Vista",
        description: "Enjoy spacious accommodations at Disney's All-Star Music Resort Family Suites in Lake Buena Vista, at 1801 W Buena Vista Dr. Offers music-themed suites for larger families, Disney park perks, open 24/7, rooms ~$200–$400/night. A major Orlando family resort. Book your melodic stay!",
        image: "/images/hotels/disneys-all-star-music-resort-family-suites.jpg",
        link: "https://disneyworld.disney.go.com/resorts/all-star-music-resort/",
        hours: "24/7",
        price: "~$200–$400/night",
        rating: 4.6
      },

      {
        name: "DoubleTree by Hilton at the Entrance to Universal Orlando",
        category: "Hotels",
        neighborhood: "International Drive",
        description: "Stay steps from Universal at DoubleTree by Hilton at the Entrance to Universal Orlando, at 5780 Major Blvd. Offers modern rooms, early park entry, and warm cookies, open 24/7, rooms ~$120–$250/night. A major Orlando hotel for park-goers. Book your convenient stay!",
        image: "/images/hotels/doubletree-by-hilton-at-the-entrance-to-universal-orlando.jpeg",
        link: "https://www.hilton.com/en/hotels/orluddt-doubletree-hilton-entrance-universal-orlando/",
        hours: "24/7",
        price: "~$120–$250/night",
        rating: 4.6
      },
      {
        name: "Marriott Orlando Downtown",
        category: "Hotels",
        neighborhood: "Downtown Orlando",
        description: "Experience urban luxury at Marriott Orlando Downtown, at 400 W Livingston St. Offers sleek rooms, rooftop dining, and proximity to Dr. Phillips Center, open 24/7, rooms ~$150–$350/night. A major Orlando city hotel. Book your downtown stay!",
        image: "/images/hotels/marriott-orlando-downtown-new.jpg",
        link: "https://www.marriott.com/hotels/travel/mcodo-marriott-orlando-downtown/",
        hours: "24/7",
        price: "~$150–$350/night",
        rating: 4.7
      },

      {
        name: "Hilton Orlando Lake Buena Vista",
        category: "Hotels",
        neighborhood: "Lake Buena Vista",
        description: "Stay near Disney at Hilton Orlando Lake Buena Vista, at 1751 Hotel Plaza Blvd. Offers modern rooms, Disney Springs access, character breakfasts, open 24/7, rooms ~$150–$300/night. A major Orlando hotel. Book your Disney-adjacent stay!",
        image: "/assets/hilton-lake-buena-vista.jpg",
        link: "https://www.hilton.com/en/hotels/orllbhf-hilton-orlando-lake-buena-vista/",
        hours: "24/7",
        price: "~$150–$300/night",
        rating: 4.7
      },
      {
        name: "Grand Bohemian Hotel Orlando",
        category: "Hotels",
        neighborhood: "Downtown Orlando",
        description: "Experience artistic luxury at Grand Bohemian Hotel Orlando in Downtown Orlando, at 325 S Orange Ave. Offers art-filled rooms, rooftop pool, fine dining at The Boheme, open 24/7, rooms ~$200–$400/night. A major Orlando hotel. Book your cultured stay!",
        image: "/images/hotels/grand-bohemian-hotel-orlando.jpg",
        link: "https://www.kesslercollection.com/bohemian-orlando/",
        hours: "24/7",
        price: "~$200–$400/night",
        rating: 4.8
      },
      {
        name: "The Alfond Inn",
        category: "Hotels",
        neighborhood: "Winter Park",
        description: "Indulge in boutique elegance at The Alfond Inn in Winter Park, at 300 E New England Ave. Offers stylish rooms, art collection, proximity to Park Avenue, open 24/7, rooms ~$200–$400/night. A major Orlando hotel. Book your refined stay!",
        image: "/images/hotels/alfond-inn.webp",
        link: "https://www.thealfondinn.com/",
        hours: "24/7",
        price: "~$200–$400/night",
        rating: 4.8
      },
      // Adding the hotels you asked about
      {
        name: "Caribe Royale Orlando",
        category: "Hotels",
        neighborhood: "Lake Buena Vista",
        description: "Relax at Caribe Royale Orlando, a tropical-themed resort in Lake Buena Vista with a lagoon-style pool and dining at 8101 World Center Dr. Offers free Disney shuttles. Open 24/7, rooms ~$150–$300/night. Ideal for families visiting Orlando theme parks. Book your stay for a sunny escape!",
        image: "/images/hotels/caribe-royale-orlando.jpg",
        link: "https://www.cariberoyale.com/",
        hours: "24/7",
        price: "~$150–$300/night",
        rating: 4.6
      },
      {
        name: "JW Marriott Orlando, Grande Lakes",
        category: "Hotels",
        neighborhood: "South Orlando",
        description: "Relax in style at JW Marriott Orlando, Grande Lakes in South Orlando, at 4040 Central Florida Pkwy. Offers elegant rooms, a lazy river, and dining, open 24/7, rooms ~$300–$600/night. A luxurious Orlando hotel. Book your sophisticated stay!",
        image: "/images/hotels/jw-marriott-hotel.jpeg",
        link: "https://www.marriott.com/en-us/hotels/mcojw-jw-marriott-orlando-grande-lakes/overview/",
        hours: "24/7",
        price: "~$300–$600/night",
        rating: 4.9
      },
      {
        name: "JW Marriott Orlando Bonnet Creek Resort & Spa",
        category: "Hotels",
        neighborhood: "Lake Buena Vista",
        description: "Relax at JW Marriott Orlando Bonnet Creek Resort & Spa in Lake Buena Vista, at 14900 Chelonia Pkwy. Offers a spa, rooftop dining, and Disney proximity, open 24/7, rooms ~$200–$400/night. An upscale Orlando hotel. Book your luxurious stay!",
        image: "/images/hotels/jw-marriott-bonnet-creek.jpg",
        link: "https://www.marriott.com/en-us/hotels/mcojb-jw-marriott-orlando-bonnet-creek-resort-and-spa/overview/",
        hours: "24/7",
        price: "~$200–$400/night",
        rating: 4.8
      }
    ];
    
    // Filter out hotels that are already in our system
    const uniqueHotels = additionalHotels.filter(
      hotel => !knownHotels.has(hotel.name.toLowerCase())
    );
    
    // Map to standard format
    let id = 4000; // Starting ID for additional hotels
    return uniqueHotels.map(hotel => {
      // Determine subcategory based on price and description
      let subcategory = "resorts"; // Default
      
      // Special case for Marriott Orlando Downtown
      if (hotel.name === "Marriott Orlando Downtown") {
        subcategory = "business";
      } else if (hotel.name.includes("Disney") || hotel.name.includes("Universal")) {
        subcategory = "theme-park";
      } else if (hotel.price.includes("400") || hotel.rating >= 4.8) {
        subcategory = "luxury";
      } else if (hotel.price.toLowerCase().includes("budget") || 
                parseInt(hotel.price.match(/\$(\d+)/)?.[1] || "200") < 120) {
        subcategory = "budget-friendly";
      }
      
      // Extract numeric price value for display
      const priceMatch = hotel.price.match(/\$(\d+)/);
      const priceValue = priceMatch ? priceMatch[1] : "179";
      
      return {
        id: id++,
        name: hotel.name,
        category: "Hotels",
        subcategory,
        neighborhood: hotel.neighborhood,
        description: hotel.description,
        price: "$" + priceValue,
        imageUrl: hotel.image,
        website: hotel.link,
        amenities: ["Pool", "Wi-Fi", "24-hour Front Desk"],
        perks: hotel.name.includes("Disney") ? "Early Theme Park Entry" : 
               hotel.name.includes("Universal") ? "Early Park Admission" : "Complimentary breakfast",
        rating: hotel.rating,
        tags: [hotel.neighborhood, subcategory]
      };
    });
  } catch (error) {
    console.error("Error processing card hotels:", error);
    return [];
  }
};

// Combine all hotel data sources
export const getAllHotels = (): ConsolidatedHotel[] => {
  const disneyHotels = processDisneyHotels();
  const universalHotels = processUniversalHotels();
  const standardHotels = processStandardHotels();
  const epicUniverseHotels = processEpicUniverseHotels();
  const cardHotels = processCardHotels();
  
  // Debug additionalHotels
  console.log("ADDITIONAL HOTELS COUNT:", additionalHotels.length);
  if (additionalHotels.length > 0) {
    console.log("FIRST ADDITIONAL HOTEL:", additionalHotels[0]?.name);
  }
  
  // Check for JW Marriott in additionalHotels
  const jwMarriottInAdditional = additionalHotels.find(h => h.name.includes("JW Marriott Orlando Bonnet Creek"));
  if (jwMarriottInAdditional) {
    console.log("JW MARRIOTT BONNET CREEK FOUND IN ADDITIONAL HOTELS:", 
      jwMarriottInAdditional.name,
      "subcategory:", jwMarriottInAdditional.subcategory,
      "imageUrl:", jwMarriottInAdditional.imageUrl);
  } else {
    console.log("JW MARRIOTT BONNET CREEK NOT FOUND IN ADDITIONAL HOTELS");
  }
  
  // Combine all hotel sources
  const combinedHotels = [
    ...standardHotels, 
    ...disneyHotels, 
    ...universalHotels, 
    ...epicUniverseHotels, 
    ...cardHotels, 
    ...additionalHotels, 
    ...additionalBudgetHotels
  ];
  
  // Create a map to handle duplicate detection with name normalization
  const hotelMap = new Map<string, ConsolidatedHotel>();
  
  // List of hotel name variations that should be considered the same hotel
  const nameVariations: Record<string, string[]> = {
    "JW Marriott Orlando Bonnet Creek Resort & Spa": [
      "JW Marriott Orlando Bonnet Creek Resort & Spa",
      "JW Marriott Orlando Bonnet Creek Resort and Spa",
      "JW Marriott Bonnet Creek"
    ],
    "Hard Rock Hotel": [
      "Hard Rock Hotel",
      "Hard Rock Hotel at Universal Orlando", 
      "Hard Rock Hotel® at Universal Orlando"
    ],
    "Loews Portofino Bay Hotel": [
      "Loews Portofino Bay Hotel",
      "Loews Portofino Bay Hotel at Universal Orlando",
      "Universal's Portofino Bay Hotel"
    ],
    "Loews Royal Pacific Resort": [
      "Loews Royal Pacific Resort",
      "Loews Royal Pacific Resort at Universal Orlando"
    ],
    "Disney's Grand Floridian Resort & Spa": [
      "Disney's Grand Floridian Resort & Spa",
      "Grand Floridian Resort & Spa",
      "Disney's Grand Floridian Resort"
    ],
    "Disney's Contemporary Resort": [
      "Disney's Contemporary Resort",
      "Contemporary Resort"
    ],
    "Disney's Polynesian Village Resort": [
      "Disney's Polynesian Village Resort",
      "Polynesian Village Resort",
      "Disney's Polynesian Resort"
    ],
    "Disney's Animal Kingdom Lodge": [
      "Disney's Animal Kingdom Lodge",
      "Animal Kingdom Lodge"
    ],
    "Disney's Wilderness Lodge": [
      "Disney's Wilderness Lodge",
      "Wilderness Lodge"
    ],
    "Eō Inn & Spa": [
      "Eō Inn & Spa",
      "The Eo Inn - Downtown",
      "Eo Inn"
    ],
    "Four Seasons Resort Orlando at Walt Disney World Resort": [
      "Four Seasons Resort Orlando at Walt Disney World Resort",
      "Four Seasons Resort Orlando at Walt Disney World",
      "Four Seasons Orlando"
    ]
  };
  
  // Create a function to normalize hotel names
  const getNormalizedKey = (name: string): string => {
    // Check if this name is a variation of another hotel
    for (const [primaryName, variations] of Object.entries(nameVariations)) {
      if (variations.some(variation => 
        name.toLowerCase().includes(variation.toLowerCase()))) {
        return primaryName;
      }
    }
    return name;
  };
  
  // Process each hotel, handling duplicates
  combinedHotels.forEach(hotel => {
    const normalizedKey = getNormalizedKey(hotel.name);
    
    // If we haven't seen this hotel before, add it
    if (!hotelMap.has(normalizedKey)) {
      hotelMap.set(normalizedKey, hotel);
    } else {
      console.log(`Skipping duplicate hotel: ${hotel.name} (normalized as ${normalizedKey})`);
    }
  });
  
  // Convert map back to array
  return Array.from(hotelMap.values());
};

// Filter hotels by subcategory
export const getHotelsBySubcategory = (subcategory: string): ConsolidatedHotel[] => {
  const allHotels = getAllHotels();
  console.log(`Total hotels before filtering: ${allHotels.length}`);
  
  // Debug specific hotel
  const jwMarriott = allHotels.find(h => h.name.includes("JW Marriott"));
  if (jwMarriott) {
    console.log("JW MARRIOTT FOUND:", jwMarriott.name, "subcategory:", jwMarriott.subcategory, "image:", jwMarriott.imageUrl);
  } else {
    console.log("JW MARRIOTT NOT FOUND IN COMBINED HOTELS LIST");
  }
  
  const hotels = allHotels.filter(hotel => hotel.subcategory === subcategory);
  console.log(`Found ${hotels.length} hotels with subcategory: ${subcategory}`);
  
  if (subcategory === "luxury") {
    // Debug luxury hotels
    console.log("LUXURY HOTELS:", hotels.map(h => h.name));
    console.log("LUXURY HOTELS WITH IMAGES:", hotels.filter(h => h.imageUrl).length);
    console.log("LUXURY HOTELS WITHOUT IMAGES:", hotels.filter(h => !h.imageUrl).length);
  }
  else if (subcategory === "theme-park") {
    // Debug theme park hotels
    console.log("THEME PARK HOTELS:", hotels.map(h => h.name));
    
    // Check websites for Disney/Universal
    console.log("Disney websites:", hotels.filter(h => h.website?.includes("disney")).length);
    console.log("Universal websites:", hotels.filter(h => h.website?.includes("universal")).length);
  }
  
  return hotels;
};

// Get featured hotels for each category
export const getFeaturedHotels = (): Record<string, ConsolidatedHotel[]> => {
  const allHotels = getAllHotels();
  
  // Define featured categories
  const categories = ["luxury", "theme-park", "budget-friendly", "resorts", "villas"];
  
  // Create featured hotels record
  const featuredHotels: Record<string, ConsolidatedHotel[]> = {};
  
  categories.forEach(category => {
    // Get hotels for this category
    const categoryHotels = allHotels.filter(hotel => hotel.subcategory === category);
    
    // Ensure we have at least 3 hotels per category or all available if less than 3
    const maxToShow = 3;
    
    // First, prioritize hotels with images
    const hotelsWithImages = categoryHotels.filter(hotel => hotel.imageUrl);
    let selectedHotels = hotelsWithImages.slice(0, maxToShow);
    
    // If we don't have enough hotels with images, add others without images
    if (selectedHotels.length < maxToShow) {
      const remainingHotels = categoryHotels
        .filter(hotel => !hotel.imageUrl)
        .slice(0, maxToShow - selectedHotels.length);
      
      selectedHotels = [...selectedHotels, ...remainingHotels];
    }
    
    // If still not enough, just use whatever hotels we have for this category
    featuredHotels[category] = selectedHotels.length > 0 
      ? selectedHotels 
      : categoryHotels.slice(0, maxToShow);
  });
  
  return featuredHotels;
};

// Debug function to log hotel categories and all hotel subcategories
export const logBudgetHotels = (): void => {
  const allHotels = getAllHotels();
  console.log("===== HOTEL DEBUG =====");
  console.log("Total hotels:", allHotels.length);
  
  // Show hotel categories count
  const categories: Record<string, number> = {};
  allHotels.forEach(hotel => {
    if (!categories[hotel.subcategory]) {
      categories[hotel.subcategory] = 0;
    }
    categories[hotel.subcategory]++;
  });
  console.log("Hotel categories:", categories);
  
  // Show budget-friendly hotels
  const budgetHotels = getHotelsBySubcategory('budget-friendly');
  console.log("BUDGET HOTELS COUNT:", budgetHotels.length);
  console.log("BUDGET HOTEL NAMES:", budgetHotels.map(h => h.name));
  
  // Show luxury hotels
  const luxuryHotels = getHotelsBySubcategory('luxury');
  console.log("LUXURY HOTELS COUNT:", luxuryHotels.length);
  console.log("LUXURY HOTEL NAMES:", luxuryHotels.map(h => h.name));
  
  // Count how many hotels have location data
  const hotelsWithLocation = allHotels.filter(h => h.neighborhood && h.neighborhood.trim().length > 0);
  console.log("HOTELS WITH LOCATION DATA:", hotelsWithLocation.length);
  
  console.log("========================");
};

// Export all functionality
export default {
  getAllHotels,
  getHotelsBySubcategory,
  getFeaturedHotels,
  logBudgetHotels
};