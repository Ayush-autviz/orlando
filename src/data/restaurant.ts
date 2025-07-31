/**
 * Orlando Restaurants Data
 * 
 * This file contains all the hard-coded data for restaurants in the Orlando area.
 * The data is organized by categories: fine-dining, theme-park, international, local-favorites
 */


export interface Restaurant {
  id: string;                    // Unique identifier, kebab-case
  name: string;                  // Full restaurant name
  description: string;           // Detailed description
  shortDescription?: string;     // Optional shorter description for cards
  image: any;                    // Main image (URL or imported image)
  gallery?: any[];               // Optional additional images
  neighborhood: string;          // Location in Orlando
  address: string;               // Full address
  priceRange: string;            // $ to $$$$ scale
  cuisine: string;               // Type of cuisine
  category: RestaurantCategory;  // Primary category
  subcategories?: string[];      // Optional additional categories
  hours?: string;                // Operating hours
  phone?: string;                // Contact phone
  website?: string;              // Official website
  // No numerical ratings as per requirements
  signature?: string[];          // Signature dishes/items
  recommendedFor?: string[];     // Occasions/experiences
  dietaryOptions?: string[];     // Vegetarian, vegan, gluten-free, etc.
  reservations?: boolean;        // Whether reservations are recommended
  amenities?: string[];          // Features like outdoor seating, bar, etc.
  parkingInfo?: string;          // Parking details
  coordinates?: {                // For map integrations
    lat: number;
    lng: number;
  };
}


const eddieVs2Image = require('../../assets/images/EddiePrimeSeafood2.jpeg');


const capa2Image = require('../../assets/images/Capa2.jpeg');


const californiaGrill2Image = require('../../assets/images/CaliforniaGrill2.jpeg');
// Chayote images

const chayote2Image = require('../../assets/images/chayote2.jpeg');
// Norman's images

const normans2Image = require('../../assets/images/Normans2.jpeg');
// Le Cellier Steakhouse images

const leCellier2Image = require('../../assets/images/LeCellier2.jpg');
// Knife & Spoon images

const knifeAndSpoon2Image = require('../../assets/images/Knife&Spoon2.jpeg');
// Bull & Bear images

const bullAndBear2Image = require('../../assets/images/Bull&Bear2.jpeg');
// Victoria & Albert's images

const victoriaAndAlberts2Image = require('../../assets/images/Victoria&Alberts2.jpeg');
// Kadence images

const kadence2Image = require('../../assets/images/Kadence2.jpeg');
// Christner's images

const christners2Image = require('../../assets/images/Chistners2.jpeg');
// Ocean Prime images

const oceanPrime2Image = require('../../assets/images/OceanPrime2.jpeg');
// Primo images

const primo2Image = require('../../assets/images/Primo1.jpeg');
// Morimoto Asia images

const morimotoAsia2Image = require('../../assets/images/MorimotoAsia2.jpeg');
// The Boheme images

const boheme2Image = require('../../assets/images/TheBoheme2.jpeg');
// The Ravenous Pig images

const ravenousPig2Image = require('../../assets/images/TheRavenousPig2.jpeg');
// Prato images

const prato2Image = require('../../assets/images/Prato2.jpeg');
// Santiago's Bodega images

const santiagosBodega2Image = require('../../assets/images/SantiagoBodega2.jpeg');
// Briarpatch Restaurant images

const briarpatch2Image = require('../../assets/images/Briarpatch2.jpeg');
// Maxine's on Shine images

const maxinesOnShine2Image = require('../../assets/images/MaxineonShine2.jpeg');
// The Hangry Bison images

const hangryBison2Image = require('../../assets/images/TheHangryBison2.jpeg');
// Sixty Vines images

const sixtyVines2Image = require('../../assets/images/SixtyVines2.jpeg');
// Enzo's on the Lake images

const enzosOnTheLake2Image = require('../../assets/images/EnzoontheLake2.jpeg');
// 4 Rivers Smokehouse images

const fourRivers2Image = require('../../assets/images/4RiversSmokehouse2.jpeg');
// The Osprey Tavern images

const ospreyTavern2Image = require('../../assets/images/TheOspreyTavern2.jpeg');
// Flying Fish images

const flyingFish2Image = require('../../assets/images/FlyingFish2.jpeg');
// Ravello images

const ravello2Image = require('../../assets/images/Ravello2.jpeg');
// deep blu Seafood Grille images

const deepBlu2Image = require('../../assets/images/deepblu2.jpeg');
// Hillstone images

const hillstone2Image = require('../../assets/images/hillstone2.jpeg');
// Be Our Guest Restaurant images

const beOurGuest2Image = require('../../assets/images/BeOurGuestRestaurant2.jpeg');
// Cinderella's Royal Table images

const cinderellasRoyalTable2Image = require('../../assets/images/CinderellaRoyalTable2.jpeg');
// Mythos Restaurant images

const mythosRestaurant2Image = require('../../assets/images/MythosRestaurant2.jpeg');
// Sci-Fi Dine-In Theater Restaurant images

const sciFiDineIn2Image = require('../../assets/images/SciFiDineInTheater2.jpeg');
// Tiffins images

const tiffins2Image = require('../../assets/images/Tiffins2.jpeg');
// Space 220 images

const space2202Image = require('../../assets/images/Space2202.jpeg');
// Jungle Navigation Co. LTD Skipper Canteen images

const skipperCanteen2Image = require('../../assets/images/JungleNavigationCoLtdSkipperCanteen2.jpeg');
// Confisco Grille images

const confiscoGrille2Image = require('../../assets/images/ConfiscoGrille2.jpeg');
// Toothsome Chocolate Emporium images

const toothsome2Image = require('../../assets/images/ToothsomeChocolateEmporium2.jpeg');
// Three Broomsticks images

const threeBroomsticks2Image = require('../../assets/images/ThreeBroomsticks2.jpeg');
// San Angel Inn Restaurante images

const sanAngelInn2Image = require('../../assets/images/SanAngelInnRestaurante2.jpeg');
// Mama Melrose's Ristorante Italiano images

const mamaMelrose2Image = require('../../assets/images/MamaMelroseRistoranteItaliano2.jpeg');
// Biergarten Restaurant images

const biergarten1Image = require('../../assets/images/BiergartenRestaurant1.jpeg');
// The Cowfish Sushi Burger Bar images

const cowfish2Image = require('../../assets/images/TheCowfishSushiBurgerBar2.jpeg');
// Monsieur Paul images

const monsieurPaul2Image = require('../../assets/images/MonsieurPaul2.jpeg');
// Finnegan's Bar and Grill images

const finnegans2Image = require('../../assets/images/FinneganBarandGrill2.jpeg');
// T-Rex Cafe images

const tRexCafe2Image = require('../../assets/images/TRexCafe2.jpeg');
// Theme Park category image
const themeParkCategoryImage = require('../../assets/images/ThemePark.jpeg');
// Reyes Mezcaleria images

const reyesMezcaleria2Image = require('../../assets/images/ReyesMezcaleria2.jpeg');

// AVA MediterrAegean images

const avaMediterraegean2Image = require('../../assets/images/AVAMediterrAegean2.jpeg');

// The Moderne images

const theModerne2Image = require('../../assets/images/TheModerne2.jpeg');

// JALEO by José Andrés images - using renamed files to avoid special characters

const jaleo2Image = require('../../assets/images/jaleo2.jpeg');

// Domu images

const domu2Image = require('../../assets/images/domu2.jpeg');

// Café Tu Tu Tango images - using renamed files to avoid special characters

const cafeTutu2Image = require('../../assets/images/cafe_tutu2.jpeg');

// Kabooki Sushi images

const kabooki2Image = require('../../assets/images/kabooki2.jpeg');

// Bosphorous Turkish Cuisine images

const bosphorous2Image = require('../../assets/images/bosphorous2.jpg');

// Superica images

const superica2Image = require('../../assets/images/superica2.jpeg');

// The Drake Kitchen and Bar images

const drakeKitchen2Image = require('../../assets/images/thedrakekitchenandbar2.jpeg');

// Luke's Kitchen and Bar images

const lukesKitchen2Image = require('../../assets/images/LukeKitchenandbar2.jpeg');

// Lamp & Shade Craft Kitchen images

const lampShade2Image = require('../../assets/images/LampandShadeCraftKitchen2.jpeg');

// The Monroe images

const monroe2Image = require('../../assets/images/TheMonroe2.jpeg');

// Category images
const internationalCuisineCategoryImage = require('../../assets/images/international_cuisine.jpeg');
const localFavoritesCategoryImage = '/images/Local Favorites.jpeg';

export type RestaurantCategory = 
  | 'fine-dining'
  | 'theme-park' 
  | 'international'
  | 'local-favorites'

// Hard-coded restaurant data
export const restaurantsData: Record<RestaurantCategory, Restaurant[]> = {
  "fine-dining": [
    {
      "id": "eddie-vs",
      "name": "Eddie V's Prime Seafood",
      "description": "Eddie V's Prime Seafood is an upscale dining destination known for its premium seafood, hand-carved steaks, and sophisticated atmosphere. Located on Restaurant Row, this elegant establishment offers an exceptional culinary experience with the freshest seafood flown in daily from pristine waters around the world. The restaurant features a stylish dining room, a vibrant V Lounge with live jazz music, and impeccable service that creates a memorable fine dining experience.",
      "image": require("../../assets/images/EddiePrimeSeafood.jpeg"),
      "gallery": [
        eddieVs2Image
      ],
      "neighborhood": "Dr. Phillips",
      "address": "7488 W Sand Lake Rd, Orlando, FL 32819",
      "priceRange": "$$$$",
      "cuisine": "Seafood & Steakhouse",
      "category": "fine-dining",
      "hours": "Monday-Thursday: 4:00 PM - 10:00 PM, Friday-Saturday: 4:00 PM - 11:00 PM, Sunday: 4:00 PM - 9:00 PM",
      "phone": "(407) 355-3011",
      "website": "https://www.eddiev.com/locations/fl/orlando/orlando-sand-lake-road/8508",
      "signature": [
        "Chilean Sea Bass",
        "Georges Bank Scallops",
        "Cold Water Lobster Tails",
        "Center-cut Filet Mignon"
      ],
      "recommendedFor": [
        "Special occasions",
        "Business dinners",
        "Date night",
        "Seafood enthusiasts"
      ],
      "dietaryOptions": [
        "Gluten-free options",
        "Vegetarian selections"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Live jazz music",
        "Private dining rooms",
        "Elegant atmosphere"
      ],
      "parkingInfo": "Complimentary valet parking available"
    },
    {
      "id": "capa",
      "name": "Capa",
      "description": "Rooftop Spanish steakhouse at the Four Seasons Resort offering panoramic views of Disney World's nightly fireworks. With a sophisticated atmosphere and elegant décor inspired by the matador's costume, Capa delivers an elevated dining experience with a menu that blends traditional Spanish flavors with contemporary steakhouse fare. The restaurant's outdoor terrace provides one of Orlando's most romantic dining settings.",
      "image": require("../../assets/images/Capa.jpeg"),
      "gallery": [
        capa2Image
      ],
      "neighborhood": "Lake Buena Vista",
      "address": "10100 Dream Tree Blvd, Lake Buena Vista, FL 32836",
      "priceRange": "$$$$",
      "cuisine": "Spanish Steakhouse",
      "category": "fine-dining",
      "hours": "5:00 PM - 10:00 PM",
      "phone": "(407) 313-7777",
      "website": "https://www.fourseasons.com/orlando/dining/restaurants/capa/",
      "signature": [
        "44 Farms Tomahawk",
        "Paella Capa",
        "Wagyu Beef",
        "Spanish-inspired tapas"
      ],
      "recommendedFor": [
        "Special occasions",
        "Romantic dining",
        "View seekers",
        "Wine enthusiasts"
      ],
      "reservations": true,
      "amenities": [
        "Dress code",
        "Full bar",
        "Outdoor terrace",
        "Valet parking"
      ],
      "parkingInfo": "Complimentary valet parking with restaurant validation"
    },
    {
      "id": "california-grill",
      "name": "California Grill",
      "description": "Signature fine dining restaurant perched atop Disney's Contemporary Resort with panoramic views of Magic Kingdom and Seven Seas Lagoon. Known for its seasonal menu featuring California fusion cuisine with a focus on fresh, local ingredients and sustainable seafood. The restaurant's timing of dinner service is deliberately aligned with Magic Kingdom fireworks viewing, creating a magical dining atmosphere.",
      "image": require("../../assets/images/CaliforniaGrill.jpeg"),
      "gallery": [
        californiaGrill2Image
      ],
      "neighborhood": "Lake Buena Vista",
      "address": "4600 World Dr, Lake Buena Vista, FL 32830",
      "priceRange": "$$$$",
      "cuisine": "Contemporary American",
      "category": "fine-dining",
      "hours": "5:00 PM - 10:00 PM",
      "phone": "(407) 939-3463",
      "website": "https://disneyworld.disney.go.com/dining/contemporary-resort/california-grill/",
      "signature": [
        "Oak-fired Filet of Beef",
        "Seasonal Sushi",
        "Sonoma Goat Cheese Ravioli",
        "Artisanal Cheese Selection"
      ],
      "recommendedFor": [
        "Special occasions",
        "Fireworks viewing",
        "Date night",
        "Wine enthusiasts"
      ],
      "reservations": true,
      "amenities": [
        "Dress code",
        "Full bar",
        "Fireworks viewing",
        "Wine list"
      ],
      "parkingInfo": "Resort parking available with dining validation"
    },
    // Temporarily removing Norman's - we'll add it back after the next restaurant
    {
      "id": "le-cellier",
      "name": "Le Cellier Steakhouse",
      "description": "A culinary journey to Canada in a setting reminiscent of a wine cellar in a grand château. Located in EPCOT's Canada pavilion, this intimate restaurant offers premium steaks, fresh seafood, and Canadian-inspired cuisine. The warm ambiance with stone arches, wood beams, and subtle lighting creates a sophisticated dining environment within the theme park setting.",
      "image": require("../../assets/images/LeCellier.jpeg"),
      "gallery": [
        leCellier2Image
      ],
      "neighborhood": "EPCOT",
      "address": "EPCOT, 200 Epcot Center Dr, Lake Buena Vista, FL 32830",
      "priceRange": "$$$$",
      "cuisine": "Canadian Steakhouse",
      "category": "fine-dining",
      "hours": "Lunch: 12:00 PM - 3:30 PM, Dinner: 4:00 PM - 9:00 PM",
      "phone": "(407) 939-3463",
      "website": "https://disneyworld.disney.go.com/dining/epcot/le-cellier-steakhouse/",
      "signature": [
        "Canadian Cheddar Cheese Soup",
        "Le Cellier Filet Mignon",
        "Maple-brined Pork Chop",
        "Canadian Poutine"
      ],
      "recommendedFor": [
        "Steak enthusiasts",
        "EPCOT visitors",
        "Special occasions",
        "International dining experience"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Wine list",
        "Theme park dining"
      ],
      "parkingInfo": "EPCOT parking (theme park admission required)"
    },
    {
      "id": "knife-spoon",
      "name": "Knife & Spoon",
      "description": "Sophisticated steak and seafood restaurant at The Ritz-Carlton Orlando, helmed by award-winning Chef John Tesar. This elegant venue combines the precision of a steakhouse with creative seafood preparations, focusing on premium dry-aged steaks and fresh Florida-sourced ingredients. The refined atmosphere with lakefront views complements the artful presentation of each dish.",
      "image": require("../../assets/images/KnifeAndSpoon.jpeg"),
      "gallery": [
        knifeAndSpoon2Image
      ],
      "neighborhood": "Grande Lakes",
      "address": "4012 Central Florida Pkwy, Orlando, FL 32837",
      "priceRange": "$$$$",
      "cuisine": "Steakhouse & Seafood",
      "category": "fine-dining",
      "hours": "Wednesday-Sunday: 5:30 PM - 10:00 PM",
      "phone": "(407) 393-4333",
      "website": "https://www.knifeandspoonrc.com",
      "signature": [
        "45-Day Dry-Aged Steaks",
        "Florida Stone Crab",
        "Caviar Service",
        "Chef's Seasonal Tasting Menu"
      ],
      "recommendedFor": [
        "Luxury dining experience",
        "Business dinners",
        "Special celebrations",
        "Steak connoisseurs"
      ],
      "reservations": true,
      "amenities": [
        "Dress code",
        "Full bar",
        "Premium wine list",
        "Lakefront views"
      ],
      "parkingInfo": "Valet parking available"
    },
    {
      "id": "bull-and-bear",
      "name": "Bull & Bear",
      "description": "Sophisticated steakhouse located in the Waldorf Astoria Orlando offering reimagined classics and legendary service. The elegant dining room with custom chandeliers, rich leather seating, and panoramic views of the resort's golf courses creates an atmosphere of refined luxury. The restaurant's tableside preparations and signature dishes combine classic steakhouse traditions with innovative culinary techniques.",
      "image": require("../../assets/images/BullAndBear.jpeg"),
      "gallery": [
        bullAndBear2Image
      ],
      "neighborhood": "Bonnet Creek",
      "address": "Waldorf Astoria Orlando, 14200 Bonnet Creek Resort Ln, Orlando, FL 32821",
      "priceRange": "$$$$",
      "cuisine": "Steakhouse, American",
      "category": "fine-dining",
      "hours": "Tuesday-Saturday: 6:00 PM - 10:00 PM",
      "phone": "(407) 597-5500",
      "website": "https://www.waldorfastoriaorlando.com/dining/bull-and-bear/",
      "signature": [
        "Fried Chicken (30-hour process)",
        "Tableside Caesar Salad",
        "Tomahawk Ribeye for Two",
        "Escargot & Gnocchi"
      ],
      "recommendedFor": [
        "Special celebrations",
        "Business dinners",
        "Romantic evenings",
        "Wine enthusiasts"
      ],
      "reservations": true,
      "amenities": [
        "Dress code (Business casual)",
        "Extensive wine list",
        "Tableside preparations",
        "Private dining options"
      ],
      "parkingInfo": "Valet parking available with validation"
    },
    {
      "id": "norman-s",
      "name": "Norman's",
      "description": "Award-winning fine dining restaurant showcasing the signature New World cuisine of celebrated Chef Norman Van Aken. Featuring a sophisticated blend of Latin, Caribbean, and Asian flavors with traditional European techniques. Located in an elegant setting with impeccable service, Norman's delivers a culinary experience that has earned it multiple James Beard nominations and universal acclaim from food critics.",
      "image": require("../../assets/images/Normans.jpeg"),
      "gallery": [
        normans2Image
      ],
      "neighborhood": "Restaurant Row",
      "address": "7924 Via Dellagio Way, Orlando, FL 32819",
      "priceRange": "$$$$",
      "cuisine": "New World",
      "category": "fine-dining",
      "hours": "Tuesday-Saturday: 6:00 PM - 10:00 PM",
      "phone": "(407) 404-6440",
      "website": "https://www.normans.com/",
      "signature": [
        "Yuca Stuffed Crispy Shrimp",
        "Pork Havana",
        "Key West Yellowtail",
        "Chef's Tasting Menu"
      ],
      "recommendedFor": [
        "Culinary enthusiasts",
        "Special occasions",
        "Romantic dining",
        "Fine dining experience"
      ],
      "reservations": true,
      "amenities": [
        "Dress code",
        "Full bar",
        "Private dining",
        "Chef's table"
      ],
      "parkingInfo": "Valet and self-parking available"
    },
    {
      "id": "victoria-and-alberts",
      "name": "Victoria & Albert's",
      "description": "Disney's premier fine dining experience and Central Florida's only AAA Five Diamond restaurant. Located in Disney's Grand Floridian Resort & Spa, the restaurant offers an intimate setting with personalized service and an ever-changing menu of contemporary American cuisine. The Victorian-inspired décor with harpist entertainment creates a formal, luxury dining atmosphere unmatched in Orlando.",
      "image": require("../../assets/images/VictoriaAndAlberts.jpeg"),
      "gallery": [
        victoriaAndAlberts2Image
      ],
      "neighborhood": "Lake Buena Vista",
      "address": "Disney's Grand Floridian Resort & Spa, 4401 Floridian Way, Lake Buena Vista, FL 32830",
      "priceRange": "$$$$",
      "cuisine": "Contemporary American",
      "category": "fine-dining",
      "hours": "Monday-Saturday: 5:00 PM - 7:30 PM (seatings)",
      "phone": "(407) 939-3862",
      "website": "https://disneyworld.disney.go.com/dining/grand-floridian-resort-and-spa/victoria-and-alberts/",
      "signature": [
        "Chef's Tasting Menu",
        "Queen Victoria Room Experience",
        "Chef's Table in the Kitchen",
        "Wine Pairing Experience"
      ],
      "recommendedFor": [
        "Special milestone celebrations",
        "Exclusive dining experiences",
        "Culinary enthusiasts",
        "Wine connoisseurs"
      ],
      "reservations": true,
      "amenities": [
        "Formal dress code (Jackets required)",
        "Personalized menus",
        "Award-winning wine cellar",
        "Harpist entertainment"
      ],
      "parkingInfo": "Complimentary valet parking with restaurant validation"
    },
    {
      "id": "kadence",
      "name": "Kadence",
      "description": "Intimate omakase-style sushi restaurant with just nine seats surrounding a chef's counter. This minimalist space in Orlando's Audubon Park Garden District focuses entirely on the interaction between chefs and guests. The unmarked black building exterior gives way to a serene interior where the three chef-owners prepare multi-course tasting menus of pristine sushi and Japanese-inspired dishes using traditional techniques and global influences.",
      "image": require("../../assets/images/Kadence.jpeg"),
      "gallery": [
        kadence2Image
      ],
      "neighborhood": "Audubon Park",
      "address": "1809 Winter Park Rd, Orlando, FL 32803",
      "priceRange": "$$$$",
      "cuisine": "Japanese, Sushi",
      "category": "fine-dining",
      "hours": "Thursday-Sunday: 5:00 PM - 10:00 PM",
      "phone": "(407) 265-8416",
      "website": "https://www.kadenceorlando.com/",
      "signature": [
        "Omakase Tasting Menu",
        "Seasonal Nigiri Selection",
        "House-made Miso Soup",
        "Sake Pairings"
      ],
      "recommendedFor": [
        "Sushi aficionados",
        "Intimate dining",
        "Culinary adventures",
        "Special occasions"
      ],
      "reservations": true,
      "amenities": [
        "Chef's counter seating only",
        "Personalized service",
        "Premium sake selection",
        "Chef interaction"
      ],
      "parkingInfo": "Street parking available nearby"
    },
    {
      "id": "christners-prime-steak",
      "name": "Christner's Prime Steak & Lobster",
      "description": "Family-owned steakhouse celebrating over 30 years as an Orlando fine dining institution. The old-world atmosphere with dark wood paneling, stained glass windows, and private dining rooms creates a classic, high-end steakhouse experience. Known for exceptional USDA Prime steaks aged in-house, classic tableside preparations, and an award-winning wine collection housed in a spectacular glass-encased wine room.",
      "image": require("../../assets/images/Chistners.jpg"),
      "gallery": [
        christners2Image
      ],
      "neighborhood": "Lee Vista",
      "address": "729 Lee Road, Orlando, FL 32810",
      "priceRange": "$$$$",
      "cuisine": "Steakhouse",
      "category": "fine-dining",
      "hours": "Monday-Saturday: 5:00 PM - 10:00 PM, Sunday: 5:00 PM - 9:00 PM",
      "phone": "(407) 645-4443",
      "website": "https://christnersprimesteakandlobster.com/",
      "signature": [
        "USDA Prime Steaks",
        "Cold Water Lobster Tail",
        "Mandarin Orange Soufflé (for dessert)",
        "Classic Tableside Caesar Salad"
      ],
      "recommendedFor": [
        "Steak enthusiasts",
        "Business dinners",
        "Special celebrations",
        "Wine connoisseurs"
      ],
      "reservations": true,
      "amenities": [
        "Private dining rooms",
        "Award-winning wine list",
        "Tableside preparations",
        "Piano entertainment (select evenings)"
      ],
      "parkingInfo": "Complimentary valet parking"
    },
    {
      "id": "ocean-prime",
      "name": "Ocean Prime",
      "description": "Modern American supper club combining a vibrant bar scene, stunning décor, and exceptional cuisine. Located on Orlando's Restaurant Row, the restaurant offers a sophisticated dining experience with dramatic lighting, plush seating, and attentive service. The menu features premium seafood, prime steaks, and handcrafted cocktails prepared with theatrical flair and attention to detail.",
      "image": require("../../assets/images/OceanPrime.jpeg"),
      "gallery": [
        oceanPrime2Image
      ],
      "neighborhood": "Dr. Phillips",
      "address": "7339 W Sand Lake Rd, Orlando, FL 32819",
      "priceRange": "$$$$",
      "cuisine": "Seafood & Steakhouse",
      "category": "fine-dining",
      "hours": "Monday-Thursday: 5:00 PM - 10:00 PM, Friday-Saturday: 5:00 PM - 11:00 PM, Sunday: 5:00 PM - 9:00 PM",
      "phone": "(407) 781-4880",
      "website": "https://www.ocean-prime.com/locations-menus/orlando",
      "signature": [
        "Chilean Sea Bass",
        "Blackened Snapper",
        "Smoking Shellfish Tower",
        "Berries and Bubbles Cocktail"
      ],
      "recommendedFor": [
        "Business dinners",
        "Date night",
        "Special occasions",
        "Cocktail enthusiasts"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Outdoor terrace",
        "Private dining rooms",
        "Live piano music"
      ],
      "parkingInfo": "Complimentary valet parking"
    },

    {
      "id": "primo",
      "name": "Primo",
      "description": "Farm-to-table Italian restaurant by renowned Chef Melissa Kelly, located at the JW Marriott Grande Lakes. The elegant, warm dining space with an open kitchen and garden views creates a sophisticated yet inviting atmosphere. The restaurant maintains its own organic garden on property, supplying fresh herbs and vegetables for the seasonal menu that showcases classic Italian techniques with modern interpretations.",
      "image": require("../../assets/images/Primo.jpeg"),
      "gallery": [
        primo2Image
      ],
      "neighborhood": "Grande Lakes",
      "address": "JW Marriott Grande Lakes, 4040 Central Florida Pkwy, Orlando, FL 32837",
      "priceRange": "$$$",
      "cuisine": "Italian, Farm-to-Table",
      "category": "fine-dining",
      "hours": "Tuesday-Saturday: 5:30 PM - 10:00 PM",
      "phone": "(407) 393-4444",
      "website": "https://www.primojw.com",
      "signature": [
        "House-Made Pasta",
        "Wood-Fired Pizzas",
        "Garden Vegetable Dishes",
        "Seasonal Risotto"
      ],
      "recommendedFor": [
        "Italian cuisine enthusiasts",
        "Sustainable dining advocates",
        "Wine lovers",
        "Special occasions"
      ],
      "reservations": true,
      "amenities": [
        "On-site organic garden",
        "Extensive Italian wine list",
        "Open kitchen",
        "Seasonal menu"
      ],
      "parkingInfo": "Valet parking available with validation"
    },
    {
      "id": "morimoto-asia",
      "name": "Morimoto Asia",
      "description": "Upscale Pan-Asian restaurant by Iron Chef Masaharu Morimoto in Disney Springs. The stunning two-story interior with glass chandeliers, exposed beams, and a dramatic 270-foot-long bar creates a sophisticated, theatrical dining environment. The menu showcases cuisine from across Asia with a focus on Chinese, Japanese, and Korean dishes, all prepared with Chef Morimoto's signature attention to detail and presentation.",
      "image": require("../../assets/images/MorimotoAsia.jpeg"),
      "gallery": [
        morimotoAsia2Image
      ],
      "neighborhood": "Lake Buena Vista",
      "address": "Disney Springs, 1600 E Buena Vista Dr, Orlando, FL 32830",
      "priceRange": "$$$",
      "cuisine": "Pan-Asian",
      "category": "fine-dining",
      "hours": "Sunday-Thursday: 11:30 AM - 10:00 PM, Friday-Saturday: 11:30 AM - 11:00 PM",
      "phone": "(407) 939-6686",
      "website": "https://www.morimotoasia.com",
      "signature": [
        "Peking Duck",
        "Sushi & Sashimi Platters",
        "Sticky Ribs",
        "Rock Shrimp Tempura"
      ],
      "recommendedFor": [
        "Asian cuisine enthusiasts",
        "Celebrity chef experience",
        "Special occasions",
        "Group dining"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Private dining",
        "Rooftop lounge",
        "Exhibition kitchen"
      ],
      "parkingInfo": "Disney Springs parking garages"
    },
    {
      "id": "the-boheme",
      "name": "The Boheme",
      "description": "Sophisticated fine dining restaurant in the Grand Bohemian Hotel Orlando, featuring contemporary American cuisine in an artistic setting. The opulent dining room with red velvet seating, original artwork, and grand piano creates a theatrical, bohemian-inspired atmosphere. Located in Downtown Orlando, the restaurant offers an elegant dining experience complemented by the hotel's extensive art collection and vibrant design.",
      "image": require("../../assets/images/TheBoheme.jpeg"),
      "gallery": [
        boheme2Image
      ],
      "neighborhood": "Downtown Orlando",
      "address": "Grand Bohemian Hotel, 325 S Orange Ave, Orlando, FL 32801",
      "priceRange": "$$$",
      "cuisine": "Contemporary American",
      "category": "fine-dining",
      "hours": "Breakfast: 6:30 AM - 11:00 AM, Lunch: 11:00 AM - 2:00 PM, Dinner: 5:30 PM - 10:00 PM",
      "phone": "(407) 313-9000",
      "website": "https://www.theboheme.com",
      "signature": [
        "Grilled Filet Mignon",
        "Duck Breast",
        "Lobster Bisque",
        "Sunday Jazz Brunch"
      ],
      "recommendedFor": [
        "Art enthusiasts",
        "Business dining",
        "Pre-theater dinner",
        "Sunday brunch"
      ],
      "reservations": true,
      "amenities": [
        "Live jazz (Sunday brunch)",
        "Art collection",
        "Full bar",
        "Private dining options"
      ],
      "parkingInfo": "Valet parking available"
    },
    {
      "id": "flying-fish",
      "name": "Flying Fish",
      "description": "Upscale seafood restaurant at Disney's BoardWalk with an open kitchen and sophisticated coastal atmosphere. The elegant dining room with ocean-inspired art, blown glass fixtures, and undulating ceiling creates a refined, nautical ambiance. The menu focuses on sustainable seafood and seasonal ingredients, prepared with contemporary techniques and artistic presentations that showcase the restaurant's commitment to culinary excellence.",
      "image": require("../../assets/images/FlyingFish.jpeg"),
      "gallery": [
        flyingFish2Image
      ],
      "neighborhood": "Lake Buena Vista",
      "address": "Disney's BoardWalk, 2101 Epcot Resorts Blvd, Orlando, FL 32830",
      "priceRange": "$$$$",
      "cuisine": "Seafood, American",
      "category": "fine-dining",
      "hours": "5:00 PM - 9:30 PM",
      "phone": "(407) 939-2359",
      "website": "https://disneyworld.disney.go.com/dining/boardwalk/flying-fish/",
      "signature": [
        "Sustainable Fish",
        "Chef's Tasting of Artisanal Cheeses",
        "Potato-wrapped Red Snapper",
        "Wagyu Filet Mignon"
      ],
      "recommendedFor": [
        "Seafood enthusiasts",
        "Wine pairings",
        "Special occasions",
        "Boardwalk dining"
      ],
      "reservations": true,
      "amenities": [
        "Chef's counter seating",
        "Open kitchen",
        "Wine list",
        "Waterfront location"
      ],
      "parkingInfo": "BoardWalk Resort parking with validation"
    },

    {
      "id": "ravello",
      "name": "Ravello",
      "description": "Italian restaurant at Four Seasons Resort Orlando offering authentic cuisine inspired by the Amalfi Coast. The bright, airy dining room with marble surfaces, rustic wood accents, and open kitchen creates a sophisticated yet relaxed Mediterranean atmosphere. The menu features handmade pastas, wood-fired pizzas, and regional Italian specialties prepared with imported ingredients and local produce from the resort's garden.",
      "image": require("../../assets/images/Ravello.jpeg"),
      "gallery": [
        ravello2Image
      ],
      "neighborhood": "Lake Buena Vista",
      "address": "Four Seasons Resort Orlando, 10100 Dream Tree Blvd, Lake Buena Vista, FL 32836",
      "priceRange": "$$$$",
      "cuisine": "Italian",
      "category": "fine-dining",
      "hours": "Breakfast: 7:00 AM - 11:00 AM, Dinner: 5:30 PM - 10:00 PM",
      "phone": "(407) 313-6161",
      "website": "https://www.fourseasons.com/orlando/dining/restaurants/ravello/",
      "signature": [
        "House-made Pastas",
        "Neapolitan Pizzas",
        "Whole Fish Preparations",
        "Character Breakfast (select days)"
      ],
      "recommendedFor": [
        "Italian food enthusiasts",
        "Family dining",
        "Character breakfast",
        "Special occasions"
      ],
      "reservations": true,
      "amenities": [
        "Open kitchen",
        "Wine list featuring Italian selections",
        "Character dining",
        "Private dining options"
      ],
      "parkingInfo": "Resort valet parking with validation"
    },
    {
      "id": "deep-blu-seafood-grille",
      "name": "deep blu Seafood Grille",
      "description": "Contemporary seafood restaurant in the Wyndham Grand Orlando Resort Bonnet Creek, featuring global influences and sustainable practices. The sophisticated, modern dining room with blue-toned lighting, artistic fixtures, and natural elements creates an upscale aquatic-inspired atmosphere. The menu showcases fresh seafood with international flavors, premium steaks, and innovative cocktails, all presented with artistic flair.",
      "image": require("../../assets/images/deepblu.jpeg"),
      "gallery": [
        deepBlu2Image
      ],
      "neighborhood": "Lake Buena Vista",
      "address": "Wyndham Grand Orlando Resort Bonnet Creek, 14651 Chelonia Pkwy, Orlando, FL 32821",
      "priceRange": "$$$",
      "cuisine": "Seafood",
      "category": "fine-dining",
      "hours": "Tuesday-Saturday: 5:30 PM - 10:00 PM",
      "phone": "(407) 390-2420",
      "website": "https://www.deepbluorlando.com",
      "signature": [
        "Seafood Tower",
        "Chilean Sea Bass",
        "Dry-Aged Steaks",
        "Lobster Mac & Cheese"
      ],
      "recommendedFor": [
        "Seafood enthusiasts",
        "Special occasions",
        "Business dinners",
        "Resort dining"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Extensive wine list",
        "Private dining",
        "Sushi bar"
      ],
      "parkingInfo": "Complimentary valet with restaurant validation"
    },
    {
      "id": "hillstone",
      "name": "Hillstone",
      "description": "Upscale American restaurant in Winter Park offering classic favorites with sophisticated preparation and high-quality ingredients. The warm, elegant interior features rich wood paneling, intimate lighting, and a sophisticated bar area, while the lakeside patio provides a scenic waterfront dining option. Known for consistently excellent service and a menu that balances familiar comfort foods with refined execution.",
      "image": require("../../assets/images/hillstone.jpeg"),
      "gallery": [
        hillstone2Image
      ],
      "neighborhood": "Winter Park",
      "address": "215 S Orlando Ave, Winter Park, FL 32789",
      "priceRange": "$$$",
      "cuisine": "American",
      "category": "fine-dining",
      "hours": "Monday-Thursday: 11:30 AM - 10:00 PM, Friday-Saturday: 11:30 AM - 11:00 PM, Sunday: 11:30 AM - 10:00 PM",
      "phone": "(407) 740-4005",
      "website": "https://hillstonerestaurant.com/locations/winterpark/",
      "signature": [
        "Famous French Dip",
        "Hawaiian Ribeye",
        "Jumbo Lump Crab Cakes",
        "House-Made Veggie Burger"
      ],
      "recommendedFor": [
        "Business lunches",
        "Romantic dinners",
        "Reliable dining experience",
        "Lakeside dining"
      ],
      "reservations": false,
      "amenities": [
        "Full bar",
        "Waterfront patio",
        "Extensive wine list",
        "Private dining options"
      ],
      "parkingInfo": "Free valet parking"
    }
  ],
  "theme-park": [
    {
      "id": "be-our-guest",
      "name": "Be Our Guest Restaurant",
      "description": "Dine in the Beast's castle with French-inspired cuisine. Features three themed dining rooms from Beauty and the Beast - the Grand Ballroom, the mysterious West Wing, and the Castle Gallery. This unique dining experience brings the beloved Disney classic to life with ornate details, enchanted roses, and even a special appearance by the Beast himself during dinner service.",
      "image": require("../../assets/images/BeOurGuestRestaurant.jpeg"),
      "gallery": [
        beOurGuest2Image
      ],
      "neighborhood": "Magic Kingdom",
      "address": "Magic Kingdom Park, Walt Disney World Resort, Orlando, FL",
      "priceRange": "$$$",
      "cuisine": "French",
      "category": "theme-park",
      "hours": "Breakfast: 8:00 AM - 10:30 AM, Lunch: 11:00 AM - 2:30 PM, Dinner: 4:00 PM - 9:30 PM",
      "phone": "(407) 939-5277",
      "website": "https://disneyworld.disney.go.com/dining/magic-kingdom/be-our-guest-restaurant/",
      "signature": [
        "Prix Fixe Dinner Menu",
        "The Grey Stuff (it's delicious!)",
        "French Onion Soup",
        "Center-cut Filet Mignon"
      ],
      "recommendedFor": [
        "Disney fans",
        "Families with children",
        "Character dining experience",
        "Special occasions"
      ],
      "reservations": true,
      "amenities": [
        "Themed dining rooms",
        "Character appearance",
        "Alcohol served"
      ],
      "parkingInfo": "Magic Kingdom parking (theme park admission required)"
    },
    {
      "id": "mythos-restaurant",
      "name": "Mythos Restaurant",
      "description": "Award-winning theme park restaurant set inside a cavernous grotto at Universal's Islands of Adventure. The dramatic rock formations, cascading waterfalls, and ancient-themed décor create a unique Mediterranean dining atmosphere. Consistently recognized as one of the world's best theme park restaurants, Mythos blends upscale cuisine with a theatrical environment.",
      "image": require("../../assets/images/MythosRestaurant.jpeg"),
      "gallery": [
        mythosRestaurant2Image
      ],
      "neighborhood": "Universal Islands of Adventure",
      "address": "Universal's Islands of Adventure, 6000 Universal Blvd, Orlando, FL 32819",
      "priceRange": "$$",
      "cuisine": "Mediterranean",
      "category": "theme-park",
      "hours": "11:00 AM - 4:00 PM",
      "phone": "(407) 224-4012",
      "website": "https://www.universalorlando.com/web/en/us/things-to-do/dining/mythos-restaurant",
      "signature": [
        "Mediterranean Flat Bread",
        "Pad Thai",
        "Risotto of the Day",
        "Beef Medallions"
      ],
      "recommendedFor": [
        "Theme park dining",
        "Unique atmosphere",
        "Mid-day break",
        "Upscale casual option"
      ],
      "reservations": true,
      "amenities": [
        "Themed environment",
        "Full bar",
        "Vegetarian options",
        "Indoor dining"
      ],
      "parkingInfo": "Universal Orlando parking (theme park admission required)"
    },
    {
      "id": "cinderellas-royal-table",
      "name": "Cinderella's Royal Table",
      "description": "Dine like royalty inside Cinderella Castle, the iconic centerpiece of Magic Kingdom. This fairytale dining experience includes character interactions with Disney Princesses in a medieval castle setting. Guests enter through the grand castle corridor, complete with suits of armor, royal banners, and stained-glass windows that tell Cinderella's story.",
      "image": require("../../assets/images/CinderellaRoyal.jpeg"),
      "gallery": [
        cinderellasRoyalTable2Image
      ],
      "neighborhood": "Magic Kingdom",
      "address": "Magic Kingdom Park, Walt Disney World Resort, Orlando, FL",
      "priceRange": "$$$$",
      "cuisine": "American, Character Dining",
      "category": "theme-park",
      "hours": "Breakfast: 8:00 AM - 10:30 AM, Lunch: 11:30 AM - 2:45 PM, Dinner: 3:30 PM - 9:00 PM",
      "phone": "(407) 939-3463",
      "website": "https://disneyworld.disney.go.com/dining/magic-kingdom/cinderella-royal-table/",
      "signature": [
        "Royal Chef's Breakfast Feast",
        "Beef Tenderloin",
        "Major Domo's Dessert Plate",
        "Castle-Inspired Cocktails"
      ],
      "recommendedFor": [
        "Princess fans",
        "Special occasions",
        "Families with children",
        "Character dining experience"
      ],
      "reservations": true,
      "amenities": [
        "Character dining",
        "Castle setting",
        "Commemorative photo",
        "Alcohol served"
      ],
      "parkingInfo": "Magic Kingdom parking (theme park admission required)"
    },
    {
      "id": "sci-fi-dine-in",
      "name": "Sci-Fi Dine-In Theater Restaurant",
      "description": "Unique dining experience recreating a 1950s drive-in movie theater, complete with car-shaped dining tables and a starry night sky. Located in Disney's Hollywood Studios, this immersive restaurant plays classic sci-fi movie clips and vintage commercials on a large screen while guests dine in convertible car booths under simulated nighttime lighting.",
      "image": require("../../assets/images/SciFiDineIn.jpeg"),
      "gallery": [
        sciFiDineIn2Image
      ],
      "neighborhood": "Disney's Hollywood Studios",
      "address": "Disney's Hollywood Studios, 351 S Studio Dr, Lake Buena Vista, FL 32830",
      "priceRange": "$$",
      "cuisine": "American",
      "category": "theme-park",
      "hours": "Lunch: 11:00 AM - 3:55 PM, Dinner: 4:00 PM - 9:00 PM",
      "phone": "(407) 939-3463",
      "website": "https://disneyworld.disney.go.com/dining/hollywood-studios/sci-fi-dine-in-theater-restaurant/",
      "signature": [
        "The Drive-in BBQ Burger",
        "Flying Saucer Impossible Burger",
        "Famous All-American Picnic Burger",
        "Classic Milkshakes"
      ],
      "recommendedFor": [
        "Movie enthusiasts",
        "Unique dining atmospheres",
        "Families",
        "Casual dining"
      ],
      "reservations": true,
      "amenities": [
        "Themed environment",
        "Car-shaped dining booths",
        "Movie screen",
        "Casual attire"
      ],
      "parkingInfo": "Hollywood Studios parking (theme park admission required)"
    },
    {
      "id": "tiffins",
      "name": "Tiffins",
      "description": "Upscale signature restaurant in Disney's Animal Kingdom celebrating the art of travel with a diverse menu inspired by African, Asian, and Latin cuisines. Themed around the adventures and research trips that inspired the creation of the park, Tiffins offers an elegant dining experience with gallery spaces showcasing sketches, photographs, and artifacts that illuminate the imagineers' journey.",
      "image": require("../../assets/images/Tiffins.jpeg"),
      "gallery": [
        tiffins2Image
      ],
      "neighborhood": "Disney's Animal Kingdom",
      "address": "Disney's Animal Kingdom, 2901 Osceola Pkwy, Lake Buena Vista, FL 32830",
      "priceRange": "$$$",
      "cuisine": "Global, African, Asian, Latin",
      "category": "theme-park",
      "hours": "11:30 AM - 9:00 PM",
      "phone": "(407) 939-3463",
      "website": "https://disneyworld.disney.go.com/dining/animal-kingdom/tiffins/",
      "signature": [
        "Surf and Turf",
        "Whole-fried Sustainable Fish",
        "Spiced Chickpea Falafel",
        "Tiffins Signature Bread Service"
      ],
      "recommendedFor": [
        "Food enthusiasts",
        "Special occasions",
        "Adult dining",
        "Cultural experiences"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Wine list",
        "Three gallery dining rooms",
        "Connected to Nomad Lounge"
      ],
      "parkingInfo": "Animal Kingdom parking (theme park admission required)"
    },
    {
      "id": "space-220",
      "name": "Space 220",
      "description": "Immersive dining experience that simulates a journey 220 miles above Earth to a space station. Located in EPCOT's Mission: SPACE pavilion, this restaurant features a simulated space elevator and panoramic screens displaying Earth from orbit. The futuristic atmosphere with ambient lighting and special effects complements a menu of contemporary American cuisine with creative, space-themed presentations.",
      "image": require("../../assets/images/Space220.jpeg"),
      "gallery": [
        space2202Image
      ],
      "neighborhood": "EPCOT",
      "address": "EPCOT, Mission: SPACE Pavilion, 1375 E Buena Vista Dr, Lake Buena Vista, FL 32830",
      "priceRange": "$$$",
      "cuisine": "American, Space-Themed",
      "category": "theme-park",
      "hours": "Lunch: 11:30 AM - 3:30 PM, Dinner: 4:00 PM - 9:00 PM",
      "phone": "(407) 939-3463",
      "website": "https://disneyworld.disney.go.com/dining/epcot/space-220/",
      "signature": [
        "Big Bang Burrata",
        "Bluehouse Salmon",
        "Space Greens",
        "Galactic Lobster Globe"
      ],
      "recommendedFor": [
        "Families with children",
        "Immersive dining experiences",
        "Science fiction enthusiasts",
        "Special occasions in the park"
      ],
      "reservations": true,
      "amenities": [
        "Unique space elevator experience",
        "Panoramic space views",
        "Cocktail lounge",
        "Prix fixe menu options"
      ],
      "parkingInfo": "EPCOT parking (theme park admission required)"
    },

    {
      "id": "confisco-grille",
      "name": "Confisco Grille",
      "description": "Eclectic full-service restaurant in Universal's Islands of Adventure, reimagined as a crossroads establishment where travelers and explorers from different lands gather and trade exotic goods. The recently renovated interior features global artifacts, maps, and treasures from various themed islands of the park. The menu draws inspiration from multiple world cuisines, reflecting the restaurant's position at the crossroads of adventure.",
      "image": require("../../assets/images/ConfiscoGrille.jpeg"),
      "gallery": [
        confiscoGrille2Image
      ],
      "neighborhood": "Universal Islands of Adventure",
      "address": "Universal's Islands of Adventure, Port of Entry, 6000 Universal Blvd, Orlando, FL 32819",
      "priceRange": "$$",
      "cuisine": "Global Fusion",
      "category": "theme-park",
      "hours": "11:00 AM - Park Close",
      "phone": "(407) 224-4012",
      "website": "https://www.universalorlando.com/web/en/us/things-to-do/dining/confisco-grille",
      "signature": [
        "Pork Belly Banh-Mi",
        "Chili Ginger Shrimp Pad Thai",
        "Grilled Lamb Chops",
        "Trending Cocktails"
      ],
      "recommendedFor": [
        "Park-goers seeking a sit-down meal",
        "Global cuisine enthusiasts",
        "Groups with varied tastes",
        "Cocktail enthusiasts"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Air conditioning",
        "Themed environment",
        "Table service"
      ],
      "parkingInfo": "Universal Orlando parking (theme park admission required)"
    },
    {
      "id": "toothsome-chocolate-emporium",
      "name": "Toothsome Chocolate Emporium & Savory Feast Kitchen",
      "description": "Steampunk-themed restaurant at Universal CityWalk featuring an elaborate backstory about Professor Doctor Penelope Toothsome and her chocolate inventions. The industrial-Victorian design with smokestacks, gears, and clockwork elements creates a fantastical dining environment. Known for over-the-top desserts and milkshakes alongside a full menu of savory dishes, the restaurant also features character interactions with Professor Toothsome and her robot companion Jacques.",
      "image": require("../../assets/images/ToothsomeChocolate.jpeg"),
      "gallery": [
        toothsome2Image
      ],
      "neighborhood": "Universal CityWalk",
      "address": "Universal CityWalk, 6000 Universal Blvd, Orlando, FL 32819",
      "priceRange": "$$",
      "cuisine": "American, Dessert-focused",
      "category": "theme-park",
      "hours": "Sunday-Thursday: 11:00 AM - 11:00 PM, Friday-Saturday: 11:00 AM - 11:30 PM",
      "phone": "(407) 224-3663",
      "website": "https://www.universalorlando.com/web/en/us/things-to-do/dining/toothsome-chocolate-emporium-and-savory-feast-kitchen",
      "signature": [
        "Specialty Milkshakes",
        "Chocolate-themed Desserts",
        "Flatbreads",
        "Pork Belly Sliders"
      ],
      "recommendedFor": [
        "Dessert lovers",
        "Families with children",
        "Instagram-worthy photos",
        "Steampunk aesthetics fans"
      ],
      "reservations": true,
      "amenities": [
        "Character experiences",
        "Chocolate shop",
        "Full bar",
        "Elaborate theming"
      ],
      "parkingInfo": "Universal Orlando parking (parking fees apply, free after 6pm)"
    },
    {
      "id": "three-broomsticks",
      "name": "Three Broomsticks",
      "description": "Detailed recreation of the famous wizarding pub from the Harry Potter series, located in The Wizarding World of Harry Potter - Hogsmeade at Universal's Islands of Adventure. The rustic tavern features high-vaulted ceilings, massive wooden beams, and antler chandeliers creating an authentic atmosphere straight from the films. The British pub-style menu offers hearty fare familiar to Harry Potter fans, and the adjacent Hog's Head pub serves signature beverages including Butterbeer.",
      "image": require("../../assets/images/ThreeBroomsticks.jpeg"),
      "gallery": [
        threeBroomsticks2Image
      ],
      "neighborhood": "Universal Islands of Adventure",
      "address": "The Wizarding World of Harry Potter - Hogsmeade, Universal's Islands of Adventure, 6000 Universal Blvd, Orlando, FL 32819",
      "priceRange": "$$",
      "cuisine": "British",
      "category": "theme-park",
      "hours": "9:00 AM - Park Close",
      "phone": "(407) 224-4012",
      "website": "https://www.universalorlando.com/web/en/us/things-to-do/dining/three-broomsticks",
      "signature": [
        "Great Feast Platter",
        "Fish & Chips",
        "Shepherd's Pie",
        "Butterbeer"
      ],
      "recommendedFor": [
        "Harry Potter fans",
        "Families with children",
        "Immersive themed dining",
        "British cuisine enthusiasts"
      ],
      "reservations": false,
      "amenities": [
        "Quick-service format",
        "Indoor and outdoor seating",
        "Detailed movie theming",
        "Hog's Head pub"
      ],
      "parkingInfo": "Universal Orlando parking (theme park admission required)"
    },
    {
      "id": "san-angel-inn",
      "name": "San Angel Inn Restaurante",
      "description": "Mexican restaurant set in a perpetual twilight atmosphere inside EPCOT's Mexico pavilion. Modeled after a 17th-century hacienda near Mexico City, the restaurant overlooks the pavilion's Mayan pyramid and the Gran Fiesta Tour boat ride, creating a romantic, torch-lit dining experience beside a flowing river. The elaborate setting with star-lit skies and colorful market stalls transports guests to an eternal evening in ancient Mexico.",
      "image": require("../../assets/images/SanAngelInnRestaurant.jpeg"),
      "gallery": [
        sanAngelInn2Image
      ],
      "neighborhood": "EPCOT",
      "address": "EPCOT, Mexico Pavilion, 200 Epcot Center Dr, Lake Buena Vista, FL 32830",
      "priceRange": "$$$",
      "cuisine": "Mexican",
      "category": "theme-park",
      "hours": "11:30 AM - 9:00 PM",
      "phone": "(407) 939-3463",
      "website": "https://disneyworld.disney.go.com/dining/epcot/san-angel-inn-restaurante/",
      "signature": [
        "Carne Asada",
        "Pollo a las Rajas",
        "Tacos de Ribeye",
        "Premium Margaritas"
      ],
      "recommendedFor": [
        "Atmospheric dining",
        "Mexican cuisine enthusiasts",
        "Romantic meals",
        "EPCOT World Showcase exploration"
      ],
      "reservations": true,
      "amenities": [
        "Unique ambiance",
        "Views of boat ride",
        "Full bar with tequila selection",
        "Adjacent marketplace"
      ],
      "parkingInfo": "EPCOT parking (theme park admission required)"
    },
    {
      "id": "mama-melrose-ristorante-italiano",
      "name": "Mama Melrose's Ristorante Italiano",
      "description": "Italian restaurant in Disney's Hollywood Studios with a backstory about a California girl who came to Hollywood to become an actress but ended up opening a restaurant with her family recipes. The rustic interior with brick walls, hanging garlic and peppers, twinkling lights, and vintage movie posters creates a warm, family-style Italian eatery atmosphere. The menu features traditional Italian-American favorites in a casual yet themed environment.",
      "image": require("../../assets/images/MamaMelrose.jpeg"),
      "gallery": [
        mamaMelrose2Image
      ],
      "neighborhood": "Disney's Hollywood Studios",
      "address": "Disney's Hollywood Studios, 351 S Studio Dr, Lake Buena Vista, FL 32830",
      "priceRange": "$$",
      "cuisine": "Italian",
      "category": "theme-park",
      "hours": "Lunch and Dinner: 11:30 AM - 8:00 PM",
      "phone": "(407) 939-3463",
      "website": "https://disneyworld.disney.go.com/dining/hollywood-studios/mama-melroses-ristorante-italiano/",
      "signature": [
        "Charred Strip Steak",
        "Oven-baked Chicken alla Parmigiana",
        "Margherita Flatbread",
        "Mama's Italian Pasta"
      ],
      "recommendedFor": [
        "Italian food lovers",
        "Families",
        "Casual dining in the park",
        "Fantasmic! dining packages"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Fantasmic! dining packages",
        "Italian-themed decor",
        "Indoor seating"
      ],
      "parkingInfo": "Hollywood Studios parking (theme park admission required)"
    },
    {
      "id": "biergarten-restaurant",
      "name": "Biergarten Restaurant",
      "description": "Bavarian-style beer hall in EPCOT's Germany pavilion offering traditional German cuisine in a festive communal dining setting. The spacious interior is designed to resemble an outdoor German town square during Oktoberfest, complete with a central stage for live entertainment, string lights, and facades of traditional German buildings. The restaurant offers an immersive cultural experience with German music, food, and beer served in an authentic atmosphere.",
      "image": require("../../assets/images/Biergarten.jpeg"),
      "gallery": [
        biergarten1Image
      ],
      "neighborhood": "EPCOT",
      "address": "EPCOT, Germany Pavilion, 200 Epcot Center Dr, Lake Buena Vista, FL 32830",
      "priceRange": "$$",
      "cuisine": "German",
      "category": "theme-park",
      "hours": "Lunch: 12:00 PM - 3:30 PM, Dinner: 4:00 PM - 8:00 PM",
      "phone": "(407) 939-3463",
      "website": "https://disneyworld.disney.go.com/dining/epcot/biergarten-restaurant/",
      "signature": [
        "German Buffet",
        "Bratwurst & Sauerkraut",
        "Rotisserie Chicken",
        "Apple Strudel"
      ],
      "recommendedFor": [
        "German cuisine enthusiasts",
        "Beer lovers",
        "Group dining",
        "Entertainment dining"
      ],
      "reservations": true,
      "amenities": [
        "Live German music",
        "Communal seating",
        "Traditional beer steins",
        "German beer selection"
      ],
      "parkingInfo": "EPCOT parking (theme park admission required)"
    },
    {
      "id": "cowfish-sushi-burger-bar",
      "name": "The Cowfish Sushi Burger Bar",
      "description": "Unique restaurant at Universal CityWalk combining an innovative sushi bar with a gourmet burger joint. The playful, modern space with vibrant colors, whimsical artwork, and interactive digital displays creates an energetic, family-friendly atmosphere. The restaurant's signature 'Burgushi' cuisine combines elements of burgers and sushi in creative, unexpected ways, while also offering traditional options from both culinary traditions.",
      "image": require("../../assets/images/Cowfish.jpeg"),
      "gallery": [
        cowfish2Image
      ],
      "neighborhood": "Universal CityWalk",
      "address": "Universal CityWalk, 6000 Universal Blvd, Orlando, FL 32819",
      "priceRange": "$$",
      "cuisine": "American, Sushi Fusion",
      "category": "theme-park",
      "hours": "Sunday-Thursday: 11:00 AM - 11:00 PM, Friday-Saturday: 11:00 AM - 12:00 AM",
      "phone": "(407) 224-2691",
      "website": "https://www.universalorlando.com/web/en/us/things-to-do/dining/the-cowfish",
      "signature": [
        "Burgushi Rolls",
        "Bento Boxes",
        "The C.B.C.L.T Burger",
        "Spiked Milkshakes"
      ],
      "recommendedFor": [
        "Adventurous eaters",
        "Families",
        "Sushi and burger fans",
        "Group dining"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Interactive tables",
        "Outside seating",
        "Unique fusion menu"
      ],
      "parkingInfo": "Universal Orlando parking (free after 6 PM)"
    },
    {
      "id": "monsieur-paul",
      "name": "Monsieur Paul",
      "description": "Elegant French restaurant located upstairs in EPCOT's France pavilion, named after legendary chef Paul Bocuse. The refined dining room with soft lighting, white tablecloths, and large windows overlooking the World Showcase promenade creates a sophisticated, intimate atmosphere. The menu features classical French cuisine with modern techniques, offering an authentic taste of France's gastronomic tradition in a theme park setting.",
      "image": require("../../assets/images/MonsieurPaul.jpeg"),
      "gallery": [
        monsieurPaul2Image
      ],
      "neighborhood": "EPCOT",
      "address": "EPCOT, France Pavilion, 200 Epcot Center Dr, Lake Buena Vista, FL 32830",
      "priceRange": "$$$$",
      "cuisine": "French",
      "category": "theme-park",
      "hours": "Dinner: 5:00 PM - 8:30 PM",
      "phone": "(407) 939-3463",
      "website": "https://disneyworld.disney.go.com/dining/epcot/monsieur-paul/",
      "signature": [
        "Black Truffle Soup",
        "Escargots de Bourgogne",
        "French Classics",
        "Dessert Soufflés"
      ],
      "recommendedFor": [
        "Fine dining enthusiasts",
        "Special occasions",
        "Adult dining",
        "French cuisine lovers"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "French wine list",
        "World Showcase views",
        "Upscale atmosphere"
      ],
      "parkingInfo": "EPCOT parking (theme park admission required)"
    },
    {
      "id": "finnegans-bar-and-grill",
      "name": "Finnegan's Bar and Grill",
      "description": "Irish pub and restaurant located in the New York area of Universal Studios Florida. The warm, traditional Irish pub interior with dark wood, Celtic décor, and vintage photographs creates an authentic Dublin atmosphere. The restaurant offers Irish and American comfort food along with beer and cocktails in a relaxed setting, providing a welcome respite from the theme park while maintaining the immersive theming of the New York street.",
      "image": require("../../assets/images/Finnegan.jpeg"),
      "gallery": [
        finnegans2Image
      ],
      "neighborhood": "Universal Studios Florida",
      "address": "Universal Studios Florida, 6000 Universal Blvd, Orlando, FL 32819",
      "priceRange": "$$",
      "cuisine": "Irish, American",
      "category": "theme-park",
      "hours": "11:00 AM - Park Close",
      "phone": "(407) 224-3663",
      "website": "https://www.universalorlando.com/web/en/us/things-to-do/dining/finnegans-bar-and-grill",
      "signature": [
        "Scotch Eggs",
        "Shepherd's Pie",
        "Guinness Beef Stew",
        "Fish and Chips"
      ],
      "recommendedFor": [
        "Irish pub atmosphere",
        "Beer enthusiasts",
        "Casual dining",
        "Break from park activities"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Irish beer selection",
        "Pub atmosphere",
        "Air conditioning"
      ],
      "parkingInfo": "Universal Orlando parking (theme park admission required)"
    },
    {
      "id": "t-rex-cafe",
      "name": "T-Rex Cafe",
      "description": "Prehistoric-themed restaurant at Disney Springs featuring life-sized animatronic dinosaurs and immersive Ice Age, forest, and undersea environments. The dramatic dining atmosphere includes meteor showers every 20 minutes, an interactive fossil dig site, and a massive octopus bar suspended from the ceiling. The family-friendly restaurant combines educational elements with theatrical dining in an elaborately themed environment that appeals to dinosaur enthusiasts of all ages.",
      "image": require("../../assets/images/T-RexCafe.jpeg"),
      "gallery": [
        tRexCafe2Image
      ],
      "neighborhood": "Disney Springs",
      "address": "Disney Springs, 1676 E Buena Vista Dr, Lake Buena Vista, FL 32830",
      "priceRange": "$$",
      "cuisine": "American",
      "category": "theme-park",
      "hours": "Sunday-Thursday: 11:00 AM - 10:00 PM, Friday-Saturday: 11:00 AM - 11:00 PM",
      "phone": "(407) 828-8739",
      "website": "https://www.trexcafe.com",
      "signature": [
        "Jurassic Chicken Pasta",
        "Mega Mess Burger",
        "Triassic Trio Appetizer",
        "Chocolate Extinction Dessert"
      ],
      "recommendedFor": [
        "Families with children",
        "Dinosaur enthusiasts",
        "Unique dining experiences",
        "Disney Springs visitors"
      ],
      "reservations": true,
      "amenities": [
        "Gift shop",
        "Build-A-Dino Workshop",
        "Fossil dig site",
        "Themed bar"
      ],
      "parkingInfo": "Free Disney Springs parking"
    }
  ],
  "international": [
    {
      "id": "reyes-mezcaleria",
      "name": "Reyes Mezcaleria",
      "description": "Modern Mexican restaurant in Downtown Orlando, focusing on regional Mexican cuisine and craft mezcal cocktails. The stylish space with terracotta accents, vibrant tiles, and custom woodwork creates a contemporary interpretation of Mexican design traditions. From restaurateur Jason Chin and Chef Wendy Lopez, this upscale venue offers refined dishes from various Mexican regions alongside one of Orlando's most extensive collections of agave spirits.",
      "image": require("../../assets/images/ReyesMezcaleria.jpeg"),
      "gallery": [
        reyesMezcaleria2Image
      ],
      "neighborhood": "Downtown Orlando",
      "address": "821 N Orange Ave, Orlando, FL 32801",
      "priceRange": "$$$",
      "cuisine": "Regional Mexican",
      "category": "international",
      "hours": "Tuesday-Thursday: 5:00 PM - 10:00 PM, Friday-Saturday: 5:00 PM - 11:00 PM, Sunday: 11:30 AM - 3:00 PM, 5:00 PM - 9:00 PM",
      "phone": "(407) 868-9007",
      "website": "https://www.reyesmex.com/",
      "signature": [
        "Molcajete",
        "Cochinita Pibil",
        "Mezcal Flights",
        "House-made Moles"
      ],
      "recommendedFor": [
        "Mexican cuisine enthusiasts",
        "Mezcal and tequila connoisseurs",
        "Date night",
        "Sunday brunch"
      ],
      "reservations": true,
      "amenities": [
        "Mezcal bar",
        "Outdoor seating",
        "Full bar",
        "Sunday brunch"
      ],
      "parkingInfo": "Street parking and paid lots nearby"
    },
    {
      "id": "ava-mediterraegean",
      "name": "AVA MediterrAegean",
      "description": "AVA MediterrAegean offers a sophisticated dining experience inspired by the coastal cuisines of the Mediterranean and Aegean seas. The restaurant combines authentic flavors with contemporary culinary techniques, creating a menu that celebrates the rich gastronomic traditions of Greece, Turkey, and surrounding regions. With its elegant atmosphere, attentive service, and commitment to using fresh, high-quality ingredients, AVA provides guests with an immersive journey through Mediterranean and Aegean cuisine.",
      "image": require("../../assets/images/AVAMediterrAegean.jpeg"),
      "gallery": [
        avaMediterraegean2Image
      ],
      "neighborhood": "Winter Park",
      "address": "290 S Park Ave, Winter Park, FL 32789",
      "priceRange": "$$$",
      "cuisine": "Mediterranean, Aegean",
      "category": "international",
      "hours": "Monday-Thursday: 5:00 PM - 10:00 PM, Friday-Saturday: 5:00 PM - 11:00 PM, Sunday: 5:00 PM - 9:00 PM",
      "phone": "(407) 794-9896",
      "website": "https://www.avamediterraegean.com",
      "signature": [
        "Fresh seafood",
        "Mediterranean mezze",
        "Grilled specialties",
        "Craft cocktails"
      ],
      "recommendedFor": [
        "Upscale dining",
        "Date night",
        "Special occasions",
        "Mediterranean cuisine lovers"
      ],
      "dietaryOptions": [
        "Vegetarian options",
        "Seafood-focused",
        "Gluten-free options"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Elegant ambiance",
        "Outdoor seating",
        "Private dining options"
      ],
      "parkingInfo": "Valet parking available"
    },
    {
      "id": "the-moderne",
      "name": "The Moderne",
      "description": "The Moderne is a sophisticated restaurant offering international cuisine with a contemporary twist. With its elegant ambiance and innovative menu, The Moderne creates a unique dining experience that blends global flavors and culinary techniques. The restaurant features a diverse menu with dishes inspired by cuisines from around the world, expertly crafted by skilled chefs committed to using fresh, high-quality ingredients.",
      "image": require("../../assets/images/TheModerne.jpeg"),
      "gallery": [
        theModerne2Image
      ],
      "neighborhood": "Downtown Orlando",
      "address": "151 E Washington St, Orlando, FL 32801",
      "priceRange": "$$$",
      "cuisine": "International Fusion",
      "category": "international",
      "hours": "5:00 PM - 11:00 PM, Monday-Sunday",
      "phone": "(407) 440-4950",
      "website": "https://www.themodernebar.com",
      "signature": [
        "Global small plates",
        "Craft cocktails",
        "Fusion entrees"
      ],
      "recommendedFor": [
        "Date night",
        "Business dining",
        "Special occasions"
      ],
      "dietaryOptions": [
        "Vegetarian options",
        "Gluten-free options"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Upscale ambiance",
        "Downtown views"
      ]
    },
    {
      "id": "jaleo",
      "name": "JALEO by José Andrés",
      "description": "Vibrant Spanish restaurant from acclaimed chef José Andrés, showcasing authentic tapas, paellas, and regional specialties from Spain. The bold, artistic space features a central open kitchen with a wood-fired paella pit. Located at Disney Springs, Jaleo brings the lively spirit of Spanish dining culture to Orlando with shared plates, robust flavors, and festive atmosphere.",
      "image": require("../../assets/images/jaleo.jpeg"),
      "gallery": [
        jaleo2Image
      ],
      "neighborhood": "Lake Buena Vista",
      "address": "1482 E Buena Vista Dr, Lake Buena Vista, FL 32830",
      "priceRange": "$$$",
      "cuisine": "Spanish",
      "category": "international",
      "hours": "Sunday-Thursday: 11:30 AM - 10:00 PM, Friday-Saturday: 11:30 AM - 11:00 PM",
      "phone": "(321) 348-3211",
      "website": "https://www.jaleo.com/location/jaleo-disney-springs/",
      "signature": [
        "Traditional Paellas",
        "Jamón Ibérico de Bellota",
        "Gambas al Ajillo",
        "Croquetas de Pollo"
      ],
      "recommendedFor": [
        "Tapas enthusiasts",
        "Wine lovers",
        "Group dining",
        "Spanish cuisine aficionados"
      ],
      "reservations": true,
      "amenities": [
        "Outdoor seating",
        "Full bar",
        "Spanish wine list",
        "Lively atmosphere"
      ],
      "parkingInfo": "Disney Springs parking available"
    },
    {
      "id": "domu",
      "name": "Domu",
      "description": "Contemporary ramen restaurant with creative Asian fusion dishes located in East End Market. Known for handmade noodles and broths simmered for 18+ hours. The sleek, modern interior with communal tables creates a social dining environment, while the open kitchen allows guests to watch the chefs craft their culinary creations.",
      "image": require("../../assets/images/domu.jpeg"),
      "gallery": [
        domu2Image
      ],
      "neighborhood": "Audubon Park",
      "address": "3201 Corrine Dr, Orlando, FL 32803",
      "priceRange": "$$",
      "cuisine": "Japanese, Ramen",
      "category": "international",
      "hours": "Tuesday-Thursday: 5:00 PM - 10:00 PM, Friday-Saturday: 11:30 AM - 3:00 PM, 5:00 PM - 11:00 PM, Sunday: 11:30 AM - 3:00 PM, 5:00 PM - 10:00 PM",
      "phone": "(407) 960-1228",
      "website": "https://www.domufl.com/",
      "signature": [
        "Richie Rich Ramen",
        "Kimchi Butter Wings",
        "Tokyo Style Shoyu",
        "Cheezus Ramen"
      ],
      "recommendedFor": [
        "Ramen enthusiasts",
        "Foodies",
        "Casual dinner",
        "Social dining"
      ],
      "reservations": false,
      "amenities": [
        "Full bar",
        "Craft cocktails",
        "Communal tables",
        "Open kitchen"
      ],
      "parkingInfo": "Free parking in East End Market lot"
    },
    {
      "id": "cafe-tu-tu-tango",
      "name": "Café Tu Tu Tango",
      "description": "Eclectic tapas restaurant inspired by an artist's loft, featuring small plates from around the world in a colorful, bohemian setting with local artists creating works as you dine. The vibrant atmosphere includes rotating art displays, spontaneous entertainment, and a communal dining approach that encourages sharing and conversation.",
      "image": require("../../assets/images/cafetutu.jpeg"),
      "gallery": [
        cafeTutu2Image
      ],
      "neighborhood": "International Drive",
      "address": "8625 International Dr, Orlando, FL 32819",
      "priceRange": "$$",
      "cuisine": "Global Tapas",
      "category": "international",
      "hours": "Sunday-Thursday: 11:00 AM - 10:00 PM, Friday-Saturday: 11:00 AM - 11:00 PM",
      "phone": "(407) 248-2222",
      "website": "https://cafetututango.com/",
      "signature": [
        "Asian Sticky Wings",
        "Cajun Egg Rolls",
        "Brick Oven Flatbreads",
        "Paella"
      ],
      "recommendedFor": [
        "Group dining",
        "Art enthusiasts",
        "Food exploration",
        "Lively atmosphere"
      ],
      "reservations": true,
      "amenities": [
        "Working artists",
        "Outdoor patio",
        "Full bar",
        "Weekend entertainment"
      ],
      "parkingInfo": "Free validated parking in garage"
    },
    {
      "id": "kabooki-sushi",
      "name": "Kabooki Sushi",
      "description": "Contemporary Japanese restaurant combining traditional sushi techniques with modern culinary innovations. The sleek, minimalist interior with ambient lighting and an open sushi bar creates an upscale dining experience. Founded by chef Henry Moso, a multiple-time James Beard Award semifinalist, Kabooki has gained national recognition for its artistic presentations and commitment to the highest quality ingredients.",
      "image": require("../../assets/images/kabooki.jpeg"),
      "gallery": [
        kabooki2Image
      ],
      "neighborhood": "Colonial Drive",
      "address": "3122 E Colonial Dr, Orlando, FL 32803",
      "priceRange": "$$$",
      "cuisine": "Japanese, Sushi",
      "category": "international",
      "hours": "Monday-Thursday: 5:00 PM - 10:00 PM, Friday-Saturday: 12:00 PM - 2:30 PM, 5:00 PM - 11:00 PM, Sunday: 12:00 PM - 2:30 PM, 5:00 PM - 10:00 PM",
      "phone": "(407) 228-3839",
      "website": "https://kabookisushi.com/",
      "signature": [
        "Omakase Experience",
        "Truffle Salmon",
        "Hamachi Jalapeño",
        "Torch Roll"
      ],
      "recommendedFor": [
        "Sushi connoisseurs",
        "Date night",
        "Special occasions",
        "Culinary adventures"
      ],
      "reservations": true,
      "amenities": [
        "Sushi bar seating",
        "Full bar",
        "Sake selection",
        "Intimate atmosphere"
      ],
      "parkingInfo": "Parking lot available"
    },
    {
      "id": "bosphorous-turkish-cuisine",
      "name": "Bosphorous Turkish Cuisine",
      "description": "Authentic Turkish restaurant showcasing traditional cuisine from Istanbul and beyond. The warm, elegant space with Turkish décor elements, including hand-painted ceramics and ornate light fixtures, creates a cultural dining environment. The open kitchen with wood-fired ovens allows guests to watch the preparation of freshly baked Turkish breads and grilled specialties.",
      "image": require("../../assets/images/bosphorous.jpg"),
      "gallery": [
        bosphorous2Image
      ],
      "neighborhood": "Winter Park",
      "address": "108 S Park Ave, Winter Park, FL 32789",
      "priceRange": "$$",
      "cuisine": "Turkish",
      "category": "international",
      "hours": "Monday-Thursday: 11:00 AM - 10:00 PM, Friday-Saturday: 11:00 AM - 11:00 PM, Sunday: 11:00 AM - 10:00 PM",
      "phone": "(407) 644-8609",
      "website": "https://www.bosphorousrestaurant.com/",
      "signature": [
        "Lavas (Hollow Bread)",
        "Mixed Grill Platter",
        "Adana Kebab",
        "Turkish Tea"
      ],
      "recommendedFor": [
        "Mediterranean food enthusiasts",
        "Group dining",
        "Outdoor dining on Park Avenue",
        "Cultural experience"
      ],
      "reservations": true,
      "amenities": [
        "Outdoor seating",
        "Full bar",
        "Family-style dining options",
        "Turkish coffee service"
      ],
      "parkingInfo": "Public parking available nearby"
    },
    {
      "id": "superica",
      "name": "Superica",
      "description": "Authentic Tex-Mex restaurant by renowned chef Ford Fry, featuring traditional Mexican dishes with Texan influences in a vibrant, rustic setting. The stylish space with vintage-inspired decor, reclaimed wood elements, and southwestern accents creates a warm, energetic dining environment. Known for its high-quality ingredients, handmade tortillas, wood-grilled fajitas, and extensive tequila selection, the restaurant balances authentic recipes with contemporary preparations.",
      "image": require("../../assets/images/superica.jpeg"),
      "gallery": [
        superica2Image
      ],
      "neighborhood": "Winter Park",
      "address": "415 S. Orlando Ave, STE. 211, Winter Park, FL 32789",
      "priceRange": "$$",
      "cuisine": "Tex-Mex",
      "category": "international",
      "hours": "Monday-Thursday: 11:00 AM - 10:00 PM, Friday: 11:00 AM - 11:00 PM, Saturday: 10:00 AM - 11:00 PM, Sunday: 10:00 AM - 10:00 PM",
      "phone": "(407) 543-1313",
      "website": "https://superica.com/winter-park/",
      "signature": [
        "Wood-Grilled Fajitas",
        "Enchiladas",
        "Tacos Al Carbon",
        "House-Made Tortillas"
      ],
      "recommendedFor": [
        "Tex-Mex enthusiasts",
        "Tequila aficionados",
        "Brunch crowds",
        "Group dining"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Tequila selection",
        "Weekend brunch",
        "Outdoor seating"
      ],
      "parkingInfo": "Public parking available nearby"
    },
    {
      "id": "chayote",
      "name": "Chayote",
      "description": "Upscale New Latin restaurant blending flavors and techniques from South America, Central America, and the Caribbean with contemporary culinary innovations in an elegant setting. The stylish interior combines tropical elements with sophisticated modern design, creating a refined yet welcoming atmosphere. Focusing on fresh ingredients, creative presentations, and innovative cocktails, Chayote delivers a distinctive dining experience that showcases the diversity and richness of Latin American culinary traditions.",
      "image": require("../../assets/images/Chayote.jpeg"),
      "gallery": [
        chayote2Image
      ],
      "neighborhood": "Winter Park",
      "address": "527 Park Ave S, Winter Park, FL 32789",
      "priceRange": "$$$",
      "cuisine": "New Latin",
      "category": "international",
      "hours": "Tuesday-Thursday: 11:30 AM - 10:00 PM, Friday-Saturday: 11:30 AM - 11:00 PM, Sunday: 11:30 AM - 9:00 PM, Closed Monday",
      "phone": "(407) 543-8168",
      "website": "https://chayotewinterpark.com",
      "signature": [
        "Mole Poblano",
        "Ceviche de Pescado",
        "Enchiladas de Pato",
        "Cochinita Pibil"
      ],
      "recommendedFor": [
        "New Latin cuisine",
        "Date night",
        "Park Avenue shopping break",
        "Latin American flavors"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Pan-Latin cocktail program",
        "Outdoor seating",
        "Private dining options"
      ],
      "parkingInfo": "Street parking and public garages nearby"
    }
  ],
  "local-favorites": [
    {
      "id": "the-ravenous-pig",
      "name": "The Ravenous Pig",
      "description": "Pioneering gastropub that helped establish Orlando's farm-to-table movement, featuring seasonal American cuisine with Southern and global influences. Rustic-chic ambiance with exposed brick, wood accents, and an open kitchen creates a welcoming yet sophisticated atmosphere. In-house charcuterie program and rotating craft beer selection complement the menu of locally-sourced ingredients.",
      "image": require("../../assets/images/TheRavenousPig.jpeg"),
      "gallery": [
        ravenousPig2Image
      ],
      "neighborhood": "Winter Park",
      "address": "565 W Fairbanks Ave, Winter Park, FL 32789",
      "priceRange": "$$$",
      "cuisine": "American Gastropub",
      "category": "local-favorites",
      "hours": "Monday-Saturday: 11:30 AM - 10:00 PM, Sunday: 11:00 AM - 9:00 PM",
      "phone": "(407) 628-2333",
      "website": "https://www.theravenouspig.com/",
      "signature": [
        "Grilled Pork Porterhouse",
        "Shrimp & Grits",
        "House-made Charcuterie",
        "Seasonal Fish Crudo"
      ],
      "recommendedFor": [
        "Local food supporters",
        "Foodies",
        "Craft beer enthusiasts",
        "Casual fine dining"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Craft beer selection",
        "Seasonal menu",
        "Outdoor seating"
      ],
      "parkingInfo": "Street parking and public lot nearby"
    },

    {
      "id": "prato",
      "name": "Prato",
      "description": "Modern Italian restaurant with rustic farm-to-table cuisine in the heart of Winter Park's upscale shopping district. The industrial-chic space with an open kitchen, wood-fired oven, and indoor-outdoor seating creates a sophisticated yet casual ambiance. Renowned for housemade pastas, innovative cocktails, and a curated wine list emphasizing Italian varietals.",
      "image": require("../../assets/images/Prato.jpeg"),
      "gallery": [
        prato2Image
      ],
      "neighborhood": "Winter Park",
      "address": "124 N Park Ave, Winter Park, FL 32789",
      "priceRange": "$$$",
      "cuisine": "Italian",
      "category": "local-favorites",
      "hours": "Monday-Thursday: 11:30 AM - 10:00 PM, Friday-Saturday: 11:30 AM - 11:00 PM, Sunday: 11:30 AM - 10:00 PM",
      "phone": "(407) 262-0050",
      "website": "https://www.prato-wp.com/",
      "signature": [
        "Widowmaker Pizza",
        "Mustard Spaghettini",
        "Prato Meatballs",
        "Seasonal Pizzas from Wood-fired Oven"
      ],
      "recommendedFor": [
        "Date night",
        "Business lunch",
        "Park Avenue shopping break",
        "Italian food enthusiasts"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Sidewalk seating",
        "Open kitchen",
        "Weekend brunch"
      ],
      "parkingInfo": "Street parking and public garages nearby"
    },
    {
      "id": "santiago-s-bodega",
      "name": "Santiago's Bodega",
      "description": "Popular tapas restaurant serving internationally-inspired small plates in a colorful, bohemian setting. Converted historic buildings with stained glass windows, eclectic artwork, and warm lighting create an intimate and inviting atmosphere. The flexible dining concept encourages exploration of diverse flavors through the extensive tapas menu and global wine selection.",
      "image": require("../../assets/images/SantiagoBodega.jpeg"),
      "gallery": [
        santiagosBodega2Image
      ],
      "neighborhood": "Ivanhoe Village",
      "address": "802 Virginia Dr, Orlando, FL 32803",
      "priceRange": "$$",
      "cuisine": "Tapas",
      "category": "local-favorites",
      "hours": "Monday-Friday: 11:00 AM - 2:00 AM, Saturday-Sunday: 10:00 AM - 2:00 AM",
      "phone": "(407) 412-6979",
      "website": "https://santiagosbodega.com/",
      "signature": [
        "Yellowfin Tuna Ceviche",
        "Beef Tenderloin Carpaccio",
        "Spanakopita",
        "Patatas Bravas"
      ],
      "recommendedFor": [
        "Group dining",
        "Wine enthusiasts",
        "Weekend brunch",
        "Late night dining"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Weekend brunch buffet",
        "Late night menu",
        "Cozy atmosphere"
      ],
      "parkingInfo": "Street parking and small lot"
    },

    {
      "id": "briarpatch-restaurant",
      "name": "Briarpatch Restaurant",
      "description": "Beloved Winter Park breakfast and lunch spot known for scratch-made comfort food with a gourmet twist. The bright, airy space with both indoor and outdoor seating has become a Park Avenue institution. Famous for its indulgent breakfast creations and freshly baked pastries, this restaurant often has lines out the door on weekends, attesting to its popularity with locals and tourists alike.",
      "image": require("../../assets/images/Briarpatch.jpeg"),
      "gallery": [
        briarpatch2Image
      ],
      "neighborhood": "Winter Park",
      "address": "252 N Park Ave, Winter Park, FL 32789",
      "priceRange": "$$",
      "cuisine": "American, Breakfast",
      "category": "local-favorites",
      "hours": "Monday-Sunday: 7:00 AM - 3:00 PM",
      "phone": "(407) 628-8651",
      "website": "http://www.thebriarpatchrestaurant.com/",
      "signature": [
        "Raspberry Lemon Pancakes",
        "Southern Style Eggs Benedict",
        "Homemade Pastries",
        "Briarpatch Burger"
      ],
      "recommendedFor": [
        "Breakfast enthusiasts",
        "Weekend brunch",
        "Park Avenue shopping breaks",
        "Outdoor dining"
      ],
      "reservations": false,
      "amenities": [
        "Outdoor seating",
        "In-house bakery",
        "Counter service for pastries",
        "Full table service"
      ],
      "parkingInfo": "Street parking and public garages nearby"
    },

    {
      "id": "maxines-on-shine",
      "name": "Maxine's on Shine",
      "description": "Quirky neighborhood bistro owned by husband-and-wife team Kirt and Maxine Earhart in Orlando's Colonialtown neighborhood. The eclectic, bohemian space with local artwork, mismatched tables, and string lights creates a homey, personal dining atmosphere. Known for its emphasis on community, the restaurant hosts live music and encourages interaction between guests, creating an experience that feels like dining in someone's home.",
      "image": require("../../assets/images/MaxinesonShine.jpeg"),
      "gallery": [
        maxinesOnShine2Image
      ],
      "neighborhood": "Colonialtown",
      "address": "337 N Shine Ave, Orlando, FL 32803",
      "priceRange": "$$",
      "cuisine": "American, Eclectic",
      "category": "local-favorites",
      "hours": "Tuesday-Saturday: 11:00 AM - 2:00 PM, 5:00 PM - 9:00 PM, Sunday: 10:00 AM - 2:00 PM",
      "phone": "(407) 674-6841",
      "website": "https://www.maxinesonshine.com/",
      "signature": [
        "Maxine's Meatloaf",
        "Shine Burger",
        "Shrimp & Grits",
        "Sunday Jazz Brunch"
      ],
      "recommendedFor": [
        "Neighborhood dining",
        "Live music evenings",
        "Jazz brunch",
        "Local experience"
      ],
      "reservations": true,
      "amenities": [
        "Live music",
        "Full bar",
        "Pet-friendly patio",
        "Local artwork"
      ],
      "parkingInfo": "Street parking available"
    },




    {
      "id": "hangry-bison",
      "name": "The Hangry Bison",
      "description": "Craft burger and bourbon bar in Winter Park Village offering creative, high-quality burgers and sandwiches. The modern, rustic space with industrial elements, wood accents, and comfortable seating creates a relaxed gastropub atmosphere. Known for its premium beef blends, unique topping combinations, and extensive bourbon selection, this restaurant elevates the burger experience with chef-driven recipes and quality ingredients.",
      "image": require("../../assets/images/TheHangryBison.jpeg"),
      "gallery": [
        hangryBison2Image
      ],
      "neighborhood": "Winter Park",
      "address": "480 N Orlando Ave, Winter Park, FL 32789",
      "priceRange": "$$",
      "cuisine": "American, Burgers",
      "category": "local-favorites",
      "hours": "Monday-Thursday: 11:30 AM - 10:00 PM, Friday-Saturday: 11:30 AM - 11:00 PM, Sunday: 11:30 AM - 9:00 PM",
      "phone": "(407) 545-5113",
      "website": "https://thehangrybison.com/",
      "signature": [
        "Hangry Burger",
        "Bison Burger",
        "Bourbon Flights",
        "Loaded Tater Tots"
      ],
      "recommendedFor": [
        "Burger enthusiasts",
        "Bourbon lovers",
        "Casual dinner",
        "Weekend lunch"
      ],
      "reservations": false,
      "amenities": [
        "Full bar",
        "Bourbon selection",
        "Outdoor seating",
        "Happy hour specials"
      ],
      "parkingInfo": "Free parking in Winter Park Village lot"
    },


    {
      "id": "sixty-vines",
      "name": "Sixty Vines",
      "description": "Wine-focused restaurant offering California-inspired cuisine and 60 wines on tap. The spacious, airy interior with greenhouse elements, natural lighting, and wine barrel-themed decor creates a wine country dining atmosphere. The restaurant's sustainable approach includes the tap wine system that reduces packaging waste while keeping wines fresh, complemented by a seasonal menu emphasizing sustainable, locally-sourced ingredients.",
      "image": require("../../assets/images/SixtyVines.jpg"),
      "gallery": [
        sixtyVines2Image
      ],
      "neighborhood": "Winter Park",
      "address": "110 Orlando Ave, Winter Park, FL 32789",
      "priceRange": "$$",
      "cuisine": "American, Wine Country",
      "category": "local-favorites",
      "hours": "Monday-Thursday: 11:00 AM - 10:00 PM, Friday: 11:00 AM - 11:00 PM, Saturday: 10:00 AM - 11:00 PM, Sunday: 10:00 AM - 9:00 PM",
      "phone": "(407) 917-4852",
      "website": "https://www.sixtyvines.com/locations/winter-park",
      "signature": [
        "Wine Country Board",
        "Wood-Fired Pizzas",
        "Seasonal Pastas",
        "Wine Flights"
      ],
      "recommendedFor": [
        "Wine enthusiasts",
        "Business lunch",
        "Weekend brunch",
        "Casual upscale dining"
      ],
      "reservations": true,
      "amenities": [
        "Wine on tap",
        "Greenhouse-inspired setting",
        "Outdoor patio",
        "Wine tastings"
      ],
      "parkingInfo": "Free valet and adjacent lot"
    },
    {
      "id": "enzos-on-the-lake",
      "name": "Enzo's on the Lake",
      "description": "Enzo's on the Lake is a cherished local-favorite offering authentic Italian cuisine in a romantic lakeside setting. Housed in a converted lakefront residence with picturesque views of Lake Fairy, this elegant restaurant has been a culinary landmark in Orlando for over 40 years. Featuring handmade pasta, fresh seafood, and traditional Italian specialties prepared with imported ingredients, Enzo's combines Old World charm with Florida's natural beauty to create an unforgettable dining experience.",
      "image": require("../../assets/images/EnzosontheLake.jpeg"),
      "gallery": [
        enzosOnTheLake2Image
      ],
      "neighborhood": "Longwood",
      "address": "1130 S US Hwy 17-92, Longwood, FL 32750",
      "priceRange": "$$$",
      "cuisine": "Italian",
      "category": "local-favorites",
      "hours": "Tuesday-Saturday: 5:30 PM - 9:30 PM, Sunday: 5:30 PM - 8:30 PM, Closed Mondays",
      "phone": "(407) 834-9872",
      "website": "https://www.enzos.com",
      "signature": [
        "Bucatini Alla Enzo",
        "Veal Saltimbocca",
        "Fresh Seafood Specialties",
        "Antipasto Bar"
      ],
      "recommendedFor": [
        "Special occasions",
        "Romantic dinners",
        "Lakeside dining",
        "Authentic Italian cuisine"
      ],
      "reservations": true,
      "amenities": [
        "Lakefront views",
        "Garden patio",
        "Full bar",
        "Private dining areas"
      ],
      "parkingInfo": "Free parking lot available"
    },
    {
      "id": "4-rivers-smokehouse-local",
      "name": "4 Rivers Smokehouse",
      "description": "Legendary local barbecue chain with Texas-style smoked meats and Southern sides. The rustic, industrial-chic spaces with communal tables create a casual, community atmosphere. Founded by John Rivers, this Orlando institution has grown from a garage operation to multiple locations while maintaining rigorous standards for its slow-smoked, handcrafted barbecue. A Central Florida favorite that has become an essential part of the local food culture.",
      "image": require("../../assets/images/4Rivers.jpg"),
      "gallery": [
        fourRivers2Image
      ],
      "neighborhood": "Winter Park",
      "address": "1600 W Fairbanks Ave, Winter Park, FL 32789",
      "priceRange": "$$",
      "cuisine": "Texas-style Barbecue",
      "category": "local-favorites",
      "hours": "Monday-Saturday: 11:00 AM - 8:00 PM",
      "phone": "(844) 474-8377",
      "website": "https://www.4rsmokehouse.com/",
      "signature": [
        "18-Hour Smoked Angus Brisket",
        "Burnt Ends",
        "Signature Smoked Tri-Tip",
        "Six Shooter (Brisket Sandwich)"
      ],
      "recommendedFor": [
        "Barbecue enthusiasts",
        "Families",
        "Local food experience",
        "Hearty appetites"
      ],
      "reservations": false,
      "amenities": [
        "Counter service",
        "Indoor and outdoor seating",
        "Family-friendly",
        "Adjacent Sweet Shop"
      ],
      "parkingInfo": "Free parking lot"
    },
    {
      "id": "osprey-tavern",
      "name": "The Osprey Tavern",
      "description": "Sophisticated New American restaurant in Baldwin Park offering seasonal, chef-driven cuisine in an elegant yet approachable setting. The stylish interior features an open kitchen, custom brass and wood details, and a marble-topped bar creating a refined atmosphere with urban flair. Known for its exceptional culinary execution, artisanal cocktails, and upscale neighborhood vibe, The Osprey Tavern has established itself as a destination dining experience that bridges casual and fine dining.",
      "image": require("../../assets/images/TheOspreyTavern.jpeg"),
      "gallery": [
        ospreyTavern2Image
      ],
      "neighborhood": "Baldwin Park",
      "address": "4899 New Broad St, Orlando, FL 32814",
      "priceRange": "$$$",
      "cuisine": "New American",
      "category": "local-favorites",
      "hours": "Tuesday-Thursday: 5:00 PM - 10:00 PM, Friday-Saturday: 5:00 PM - 11:00 PM, Sunday: 10:30 AM - 2:30 PM, 5:00 PM - 9:00 PM",
      "phone": "(407) 960-7700",
      "website": "https://theospreyorlando.com",
      "signature": [
        "Wood-fired Oysters",
        "House-made Charcuterie",
        "Seasonal Seafood",
        "Artisanal Craft Cocktails"
      ],
      "recommendedFor": [
        "Date night",
        "Special occasions",
        "Sunday brunch",
        "Craft cocktail enthusiasts"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Open kitchen",
        "Private dining options",
        "Weekend brunch"
      ],
      "parkingInfo": "Street parking and nearby garage"
    },
    {
      "id": "the-drake-kitchen-and-bar",
      "name": "The Drake Kitchen and Bar",
      "description": "Contemporary American restaurant in Downtown Orlando offering a refined yet approachable dining experience with a focus on seasonal ingredients and craft cocktails. The stylish space features modern industrial design with warm wood accents, an open kitchen concept, and a vibrant bar area. Known for its innovative menu that balances familiar comfort foods with creative culinary techniques.",
      "image": require("../../assets/images/thedrakekitchenandbar.jpeg"),
      "gallery": [
        drakeKitchen2Image
      ],
      "neighborhood": "Downtown Orlando",
      "address": "361 N Rosalind Ave Suite 1, Orlando, FL 32801",
      "priceRange": "$$$",
      "cuisine": "Contemporary American",
      "category": "local-favorites",
      "hours": "Tuesday-Thursday: 4:00 PM - 10:00 PM, Friday-Saturday: 4:00 PM - 11:00 PM, Sunday: 10:30 AM - 3:00 PM (Brunch), 4:00 PM - 9:00 PM (Dinner)",
      "phone": "(407) 630-0367",
      "website": "https://www.thedrakeorl.com/",
      "signature": [
        "Seasonal Charcuterie Board",
        "Duck Confit Tacos",
        "Florida Snapper",
        "House-made Pasta"
      ],
      "recommendedFor": [
        "Date night",
        "Happy hour",
        "Sunday brunch",
        "Casual fine dining"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Craft cocktails",
        "Seasonal menu",
        "Weekend brunch"
      ],
      "parkingInfo": "Street parking and nearby public lot",
      "coordinates": {
        "lat": 28.5432,
        "lng": -81.3767
      }
    },
    {
      "id": "lukes-kitchen-and-bar",
      "name": "Luke's Kitchen and Bar",
      "description": "Upscale yet approachable American restaurant in Maitland featuring seasonally-driven cuisine with Southern influences. The inviting space combines rustic and modern elements with an open kitchen that allows diners to observe the culinary team at work. Founded by celebrated local chef Brandon McGlamery (of Prato and Luma fame), Luke's focuses on wood-fired cooking and farm-to-table ingredients.",
      "image": require("../../assets/images/LukesKitchenandbar.jpeg"),
      "gallery": [
        lukesKitchen2Image
      ],
      "neighborhood": "Maitland",
      "address": "640 S Orlando Ave, Maitland, FL 32751",
      "priceRange": "$$$",
      "cuisine": "New American",
      "category": "local-favorites",
      "hours": "Tuesday-Thursday: 5:00 PM - 9:00 PM, Friday-Saturday: 5:00 PM - 10:00 PM, Sunday: 11:00 AM - 2:30 PM, 5:00 PM - 9:00 PM",
      "phone": "(407) 674-2400",
      "website": "https://www.eatatlukes.com",
      "signature": [
        "Wood-Fired Steaks",
        "Daily Catch Seafood",
        "Seasonal Farm Vegetables",
        "Artisanal Cocktails"
      ],
      "recommendedFor": [
        "Business dinners",
        "Date night",
        "Sunday brunch",
        "Cocktail enthusiasts"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Open kitchen",
        "Seasonal menu",
        "Weekend brunch"
      ],
      "parkingInfo": "Free parking lot",
      "coordinates": {
        "lat": 28.6230,
        "lng": -81.3650
      }
    },
    {
      "id": "the-monroe",
      "name": "The Monroe",
      "description": "Contemporary American restaurant in Creative Village combining polished casual dining with community focus. Founded by award-winning chef Jason Shores (of sister restaurant Maxine's on Shine), The Monroe offers thoughtfully prepared comfort food with creative twists in a warm, welcoming space designed to be a neighborhood gathering place. Named after Dr. William 'Monroe' Wells, a prominent Black physician who built the historic Wells'Built Hotel, the restaurant honors Orlando's history while contributing to downtown's evolving culinary landscape.",
      "image": require("../../assets/images/TheMonroe.jpeg"),
      "gallery": [
        monroe2Image
      ],
      "neighborhood": "Downtown Orlando",
      "address": "448 N Terry Ave, Orlando, FL 32801",
      "priceRange": "$$$",
      "cuisine": "New American",
      "category": "local-favorites",
      "hours": "Tuesday-Thursday: 11:00 AM - 10:00 PM, Friday-Saturday: 11:00 AM - 11:00 PM, Sunday: 11:00 AM - 9:00 PM",
      "phone": "(407) 734-2102",
      "website": "https://www.themonroeorlando.com",
      "signature": [
        "Fried Green Tomatoes",
        "Smoked Fish Dip",
        "Monroe Burger",
        "Cast Iron Chicken"
      ],
      "recommendedFor": [
        "Casual dinners",
        "Business lunch",
        "Weekend brunch",
        "Happy hour"
      ],
      "reservations": true,
      "amenities": [
        "Full bar",
        "Craft cocktails",
        "Outdoor seating",
        "Weekend brunch"
      ],
      "parkingInfo": "Public parking garage nearby",
      "coordinates": {
        "lat": 28.5460,
        "lng": -81.3831
      }
    },
    {
      "id": "lamp-shade-craft-kitchen",
      "name": "Lamp & Shade Craft Kitchen and Cocktails",
      "description": "Asian-inspired tapas restaurant and cocktail bar housed in a beautifully restored historic building in the heart of Mills 50. This trendy establishment combines traditional Asian flavors with modern culinary techniques, offering an innovative small plates menu designed for sharing. The sophisticated cocktail program features creative drinks that complement the Asian-fusion tapas, with many cocktails incorporating Asian ingredients and flavor profiles. The historic architecture provides a unique backdrop with exposed brick walls, vintage details, and intimate lighting that creates a perfect atmosphere for date nights and social dining.",
      "image": require("../../assets/images/LampShade.jpeg"),
      "gallery": [
        lampShade2Image
      ],
      "neighborhood": "Mills 50",
      "address": "1336 N Mills Ave, Orlando, FL 32803",
      "priceRange": "$$$",
      "cuisine": "Asian Fusion",
      "category": "local-favorites",
      "hours": "Check website for current hours",
      "phone": "(321) 417-3477",
      "website": "https://throwsomeshadeorl.com",
      "signature": [
        "Asian-Fusion Small Plates",
        "Sake & Asian Spirit Cocktails",
        "Korean BBQ Bao Buns",
        "Sichuan Peppercorn Wings",
        "Miso Caramel Desserts"
      ],
      "recommendedFor": [
        "Date nights",
        "Small group dining",
        "Cocktail adventures",
        "Cultural food experience",
        "Historic building tours"
      ],
      "reservations": true,
      "amenities": [
        "Full bar with Asian spirits",
        "Historic building setting",
        "Small plates sharing style",
        "Intimate lighting",
        "Exposed brick walls"
      ],
      "parkingInfo": "Street parking available",
      "coordinates": {
        "lat": 28.5671,
        "lng": -81.3584
      }
    }
  ],
};

// Export categories metadata

export const cuisineCategories: Record<string, { title: string, description: string, image: any }> = {
  "fine-dining": {
    title: "Fine Dining",
    description: "Experience Orlando's finest upscale restaurants offering exceptional service, ambiance, and culinary artistry.",
    image: require("../../assets/images/FINEdining.jpeg")
  },
  "theme-park": {
    title: "Theme Park Dining",
    description: "Discover remarkable restaurants within Orlando's world-famous theme parks and entertainment complexes.",
    image: require("../../assets/images/themePark.jpeg")
  },
  "international": {
    title: "International Cuisine",
    description: "Explore global flavors with Orlando's diverse collection of authentic international restaurants.",
    image: require("../../assets/images/international.jpeg")
  },
  "local-favorites": {
    title: "Local Favorites",
    description: "Experience beloved Orlando establishments that highlight Florida flavors and regional specialties.",
    image: require("../../assets/images/localFavorites.jpeg")
  }
};

// Helper function to get all restaurants in a flat array
export function getAllRestaurants(): Restaurant[] {
  return [
    ...restaurantsData["fine-dining"],
    ...restaurantsData["theme-park"],
    ...restaurantsData["international"],
    ...restaurantsData["local-favorites"]
  ];
}

// Helper function to get restaurant by ID
export function getRestaurantById(id: string): Restaurant | undefined {
  return getAllRestaurants().find(restaurant => restaurant.id === id);
}

// Helper function to get restaurants by category
export function getRestaurantsByCategory(category: RestaurantCategory): Restaurant[] {
  return restaurantsData[category];
}



