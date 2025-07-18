// Hard-coded Universal Studios hotel details
export interface UniversalHotelDetails {
  name: string;
  description: string;
  category: string;
  priceRange: string;
  location: string;
  amenities: string[];
  roomTypes: string[];
  parkBenefits: string[];
  dining: string[];
  insiderTips: string;
  websiteUrl?: string;
  imageUrl?: string;
}

export const universalHotelData: Record<string, UniversalHotelDetails> = {
  "Loews Portofino Bay Hotel": {
    name: "Loews Portofino Bay Hotel",
    description: "Loews Portofino Bay Hotel is a luxury resort that meticulously recreates the atmosphere of the seaside village of Portofino, Italy, centered around a picturesque harbor with colorful façades reflecting in tranquil waters. This premium property features 750 rooms and suites decorated in an elegant Mediterranean style with rich furnishings, marble accents, and sophisticated color palettes. The hotel's design includes cobblestone streets, cypress trees, and outdoor cafés that create immersive Italian vignettes throughout the property. Three themed swimming pools cater to different experiences: the main Beach Pool with a Roman aqueduct-inspired slide and sandy beach, the secluded Villa Pool for refined relaxation, and the family-friendly Hillside Pool. Evening entertainment includes live opera performances on the harbor piazza balconies, completing the illusion of an Italian coastal vacation. As Universal Orlando's flagship hotel, Portofino Bay offers the highest level of amenities, service, and theming among the resort's properties, providing a luxury escape that feels worlds away from the energy of the theme parks while remaining conveniently connected.",
    category: "Premier",
    priceRange: "$$$$ (Starting around $399-599 per night, varying by season)",
    location: "About a 20-minute walk or 5-minute water taxi ride to Universal CityWalk and theme parks",
    amenities: [
      "Three themed swimming pools with cabana rentals",
      "Mandara Spa with full service treatments",
      "Complimentary fitness center",
      "Eight restaurants and lounges including fine dining options",
      "Supervised children's activity center (with fee)",
      "Complimentary WiFi",
      "24-hour room service",
      "Business center",
      "Concierge services",
      "Nightly opera performances on the harbor"
    ],
    roomTypes: [
      "Garden View Rooms",
      "Bay View Rooms",
      "Deluxe Rooms",
      "Club Level Rooms with dedicated lounge access",
      "Portofino Suites",
      "Villa Suites",
      "Hospitality Suites",
      "Presidential Suites",
      "Despicable Me Kids Suites"
    ],
    parkBenefits: [
      "Unlimited Express Passes (skip the regular lines in both theme parks)",
      "Early Park Admission (enter the theme parks 1 hour before regular opening)",
      "Priority seating at select restaurants throughout Universal Orlando",
      "Complimentary water taxi and shuttle transportation to the parks",
      "Resort-wide charging privileges with room key",
      "Complimentary delivery of merchandise purchased throughout Universal Orlando to the hotel",
      "Golf Universal Orlando program with preferred tee times and complimentary transportation"
    ],
    dining: [
      "Mama Della's Ristorante (Italian family-style dining with roaming musicians)",
      "Bice Ristorante (upscale Italian fine dining)",
      "Trattoria del Porto (casual Italian and American buffet restaurant)",
      "Sal's Market Deli (quick-service Italian deli and pizza)",
      "Splendido Bar & Grill (poolside dining)",
      "The Thirsty Fish (harbor-side wine bar)",
      "Bar American (elegant lobby bar)",
      "Gelateria (traditional Italian ice cream and coffee shop)"
    ],
    insiderTips: "Request a harbor view room for the most atmospheric accommodations with balconies overlooking the central lagoon - these rooms also face away from the adjacent interstate for a quieter stay. Club Level access, while more expensive, provides excellent value for families who take advantage of the included continental breakfast, afternoon snacks, and evening appetizers with wine and beer. The hotel is the furthest resort from the parks, so utilize the complimentary water taxis that run continuously rather than walking. The Harbor Nights event (held quarterly) transforms the piazza into an Italian food and wine festival with special tastings and entertainment. For the quietest accommodations, request the Villa Wing or East Wing, which are furthest from the highway. When dining at Mama Della's, tables in 'Mama's Kitchen' area provide the most interactive experience with roaming musicians.",
    websiteUrl: "https://www.universalorlando.com/web/en/us/places-to-stay/loews-portofino-bay-hotel",
    imageUrl: "https://www.universalorlando.com/webdata/k2/en/us/places-to-stay/portofino-bay-hotel/portofino-bay-hotel-exterior-harbor-piazza-night-1600x900.jpg"
  },
  "Hard Rock Hotel": {
    name: "Hard Rock Hotel",
    description: "Hard Rock Hotel at Universal Orlando combines rock-star luxury with California mission-style architecture to create a vibrant, energetic resort experience. This 650-room hotel immerses guests in music culture with over $1 million worth of rock memorabilia displayed throughout the property, including instruments, costumes, and handwritten lyrics from legendary artists. The central feature is a massive 12,000-square-foot pool complex shaped like a Gibson Les Paul guitar, visible from overhead, with underwater speakers, a slide, sand beach, and interactive fountains. Guest rooms feature contemporary styling with subtle rock influences, high-end amenities, and Fender guitar loan service allowing guests to borrow electric guitars and headphone amplifiers during their stay. Located closest to Universal Studios Florida, this high-energy property maintains a sophisticated atmosphere while incorporating playful rock elements, striking a balance between luxury resort amenities and the brand's music-centric identity. Live music performances, DJ sessions at the pool, and special music-focused amenities create an atmosphere that appeals to both rock enthusiasts and guests seeking upscale accommodations with personality.",
    category: "Premier",
    priceRange: "$$$$ (Starting around $375-525 per night, varying by season)",
    location: "About a 5-minute walk or short water taxi ride to Universal CityWalk and theme parks (closest hotel to the parks)",
    amenities: [
      "12,000-square-foot pool complex with underwater sound system",
      "Sandy beach and interactive water play areas",
      "Sound booth with professional mixing equipment",
      "The Sound of Your Stay program (Fender guitar loans and curated playlists)",
      "Rock Shop merchandise store",
      "Fitness center with Technogym equipment",
      "Complimentary WiFi",
      "24-hour room service",
      "Business center",
      "Concierge services",
      "Valet and self-parking options"
    ],
    roomTypes: [
      "Standard Rooms (Garden or Pool View)",
      "Deluxe Rooms",
      "Club Level Rooms with dedicated lounge access",
      "King Suites",
      "Deluxe Suites",
      "Hospitality Suites",
      "Future Rock Star Suites with kids' areas",
      "Presidential Suite"
    ],
    parkBenefits: [
      "Unlimited Express Passes (skip the regular lines in both theme parks)",
      "Early Park Admission (enter the theme parks 1 hour before regular opening)",
      "Priority seating at select restaurants throughout Universal Orlando",
      "Complimentary water taxi and shuttle transportation to the parks",
      "Resort-wide charging privileges with room key",
      "Complimentary delivery of merchandise purchased throughout Universal Orlando to the hotel",
      "Golf Universal Orlando program with preferred tee times and complimentary transportation"
    ],
    dining: [
      "The Palm Restaurant (upscale steakhouse, part of the famous New York chain)",
      "The Kitchen (casual family restaurant with special weekend character breakfast)",
      "Emack & Bolio's (ice cream and dessert shop)",
      "Beach Club (poolside bar and grill)",
      "Velvet Bar (sophisticated lobby bar with specialty cocktails)",
      "Constant Grind (coffee shop with light breakfast and lunch options)"
    ],
    insiderTips: "Request a room in the Lennon or McCartney wings (the resort's newest sections) for upgraded amenities and quieter accommodations away from the pool area. The Future Rock Star Suites offer excellent value for families, featuring a separate kids' room with its own TV and special decor. For shorter walking distances to the parks, request lower-numbered rooms which are closer to the garden walkway entrance. Pool cabanas can be reserved in advance and include dedicated service, a refrigerator with bottled water, and a secure safe. Take advantage of the free Fender guitar loan program - guitars can be delivered to your room with headphone amplifiers for silent practice. The Velvet Bar hosts a special 'Velvet Sessions' concert series on select evenings, featuring well-known musicians in an intimate setting (requires separate tickets purchased in advance).",
    websiteUrl: "https://www.universalorlando.com/web/en/us/places-to-stay/hard-rock-hotel",
    imageUrl: "https://www.universalorlando.com/webdata/k2/en/us/places-to-stay/hard-rock-hotel/hard-rock-hotel-orlando-exterior-pool-aerial-b.jpg"
  },
  "Loews Royal Pacific Resort": {
    name: "Loews Royal Pacific Resort",
    description: "Loews Royal Pacific Resort transports guests to the South Pacific with its tropical island ambiance, lush landscaping, and Polynesian-inspired architecture. This 1,000-room resort recreates the elegant colonial-era hotels of islands like Bali, Hawaii, and Fiji, featuring a lagoon-style pool with a white sand beach, tiki torches, and swaying palm trees. The open-air lobby with dark wood accents, ceiling fans, and exotic decor sets the tone for the immersive tropical experience. Guest rooms combine contemporary luxury with tasteful island-inspired design elements, featuring bamboo-style fixtures, tropical color schemes, and modern amenities. Throughout the resort, water features, orchid gardens, and authentic sculptures sourced from Pacific islands enhance the theming. Weekly events include a poolside torch lighting ceremony and the Wantilan Luau featuring Polynesian cuisine and traditional entertainment with fire dancers, musicians, and hula performers. This premier hotel balances its tropical resort atmosphere with convenient theme park access, offering the perfect retreat after a day of excitement at Universal's parks.",
    category: "Premier",
    priceRange: "$$$-$$$$ (Starting around $350-450 per night, varying by season)",
    location: "About a 10-minute walk or short water taxi ride to Universal CityWalk and theme parks",
    amenities: [
      "16,000-square-foot lagoon-style swimming pool with beach area",
      "Royal Bali Sea interactive water play area for children",
      "Weekly torch lighting ceremony and island entertainment",
      "Weekly Wantilan Luau dinner show (additional fee)",
      "Themed ping pong and pool tables in the recreation area",
      "Fitness center with cardio and strength equipment",
      "Supervised children's activity center (with fee)",
      "Complimentary WiFi",
      "24-hour room service",
      "Business center",
      "Concierge services"
    ],
    roomTypes: [
      "Standard Rooms (Standard or Water View)",
      "Club Level Rooms with dedicated lounge access",
      "King Suites",
      "Royal Club Suites",
      "Captain's Presidential Suite",
      "Jurassic World Kids' Suites"
    ],
    parkBenefits: [
      "Unlimited Express Passes (skip the regular lines in both theme parks)",
      "Early Park Admission (enter the theme parks 1 hour before regular opening)",
      "Priority seating at select restaurants throughout Universal Orlando",
      "Complimentary water taxi and shuttle transportation to the parks",
      "Resort-wide charging privileges with room key",
      "Complimentary delivery of merchandise purchased throughout Universal Orlando to the hotel",
      "Golf Universal Orlando program with preferred tee times and complimentary transportation"
    ],
    dining: [
      "Islands Dining Room (casual table service with regular character breakfasts)",
      "Jake's American Bar (relaxed table service dining and drinks)",
      "Orchid Court Lounge & Sushi Bar (lobby lounge with Asian-inspired small plates)",
      "Tuk Tuk Market (grab-and-go market with coffee, pastries, and quick meals)",
      "Bula Bar & Grille (poolside dining)",
      "Wantilan Luau (weekly Polynesian dinner show, separate reservation required)"
    ],
    insiderTips: "The Jurassic World Kids' Suites feature a separate children's room with themed décor from the films - these popular accommodations should be booked well in advance. Water view rooms overlooking the pool area provide the most atmospheric views, though rooms facing the waterway to CityWalk offer convenient boat-watching. Club Level access includes continental breakfast, afternoon snacks, and evening hors d'oeuvres with beer and wine - especially valuable for families who make use of all offerings. The resort features actual Balinese decorative elements and statues sourced from Pacific islands, creating authentic cultural touches throughout the property. Pool cabanas can be reserved in advance and provide shade, dedicated service, and amenities for a more premium pool experience. The weekly Wantilan Luau (Saturdays, reservations required) offers one of Orlando's most authentic Polynesian shows with excellent food and entertainment.",
    websiteUrl: "https://www.universalorlando.com/web/en/us/places-to-stay/loews-royal-pacific-resort",
    imageUrl: "/images/hotels/loews-royal-pacific-resort.jpg"
  },
  "Loews Sapphire Falls Resort": {
    name: "Loews Sapphire Falls Resort",
    description: "Loews Sapphire Falls Resort creates a Caribbean island retreat with a theme centered around a majestic waterfall that flows into a crystalline lagoon. This 1,000-room resort presents a contemporary interpretation of tropical design, blending modern architecture with rustic elements like reclaimed wood, stone, and natural textures that evoke the relaxed elegance of island destinations like Jamaica, Cuba, and Trinidad. The resort's water features are its most distinctive element, with cascading waterfalls visible from the lobby's floor-to-ceiling windows, tropical landscaping throughout the grounds, and a massive 16,000-square-foot zero-entry pool that serves as the property's centerpiece. Guest rooms feature a soothing color palette of whites, neutrals, and blues with subtle maritime and Caribbean influences, creating bright, airy accommodations with modern amenities. Throughout the property, design elements reference the fictional backstory of a sugar cane plantation that harnessed the power of the sapphire blue waterfalls, with sugar mill remnants and water features incorporating this narrative into the resort experience.",
    category: "Preferred",
    priceRange: "$$-$$$ (Starting around $250-350 per night, varying by season)",
    location: "About a 15-minute walk or short water taxi ride to Universal CityWalk and theme parks",
    amenities: [
      "16,000-square-foot zero-entry pool with water slide and sandy beach",
      "Fire pit and interactive water play area",
      "Game room with arcade games and activities",
      "Fitness center with cardio and strength equipment",
      "Universal Studios Store with merchandise and sundries",
      "Complimentary WiFi",
      "Room service available during limited hours",
      "Business center",
      "Concierge services",
      "Self-parking and valet options"
    ],
    roomTypes: [
      "Standard Rooms (Standard or Lagoon View)",
      "Pool View Rooms",
      "King Suites",
      "Sapphire Suite",
      "Hospitality Suite",
      "Presidential Suite",
      "Kids' Suites with separate themed sleeping area"
    ],
    parkBenefits: [
      "Early Park Admission (enter the theme parks 1 hour before regular opening)",
      "Complimentary water taxi and shuttle transportation to the parks",
      "Resort-wide charging privileges with room key",
      "Complimentary delivery of merchandise purchased throughout Universal Orlando to the hotel",
      "Golf Universal Orlando program with preferred tee times and complimentary transportation"
    ],
    dining: [
      "Amatista Cookhouse (table service restaurant featuring Caribbean cuisine)",
      "Strong Water Tavern (rum bar with tapas-style dining)",
      "Drhum Club Kantine (poolside bar and grill)",
      "New Dutch Trading Co. (grab-and-go marketplace with coffee, pastries, and quick meals)"
    ],
    insiderTips: "Strong Water Tavern features over 100 rums and rum education experiences - their rum specialists can guide you through tastings of rare selections. Request a lagoon view room for the most scenic vistas, preferably on higher floors. The water taxi service runs continuously to CityWalk and the theme parks, providing more relaxing transportation than the walking path. For the best pool experience, claim chairs early in the morning or reserve a cabana in advance (extra fee applies). The resort sometimes offers rum tasting events and special tropical cocktail demonstrations - check with concierge upon arrival for current offerings. Connecting rooms are available for larger families and groups - request these at time of booking as they are limited. The fire pit area near the pool offers complimentary marshmallow roasting on select evenings.",
    websiteUrl: "https://www.universalorlando.com/web/en/us/places-to-stay/loews-sapphire-falls-resort",
    imageUrl: "/images/hotels/loews-sapphire-falls-resort.jpg"
  },
  "Universal's Cabana Bay Beach Resort": {
    name: "Universal's Cabana Bay Beach Resort",
    description: "Universal's Cabana Bay Beach Resort is a vibrant, retro-themed property that celebrates the iconic beach resorts of the 1950s and 60s with its mid-century modern architecture, vintage color palette, and nostalgic design elements. This 2,200-room hotel is Universal's first value-category resort, offering affordable accommodations without sacrificing theming or amenities. The property is divided into sections featuring both standard rooms and family suites, with exterior sections resembling classic mid-century motor hotels and interior corridors reflecting the grand lobby spaces of Miami Beach resorts. The hotel features two massive pool areas: the Cabana Courtyard with its iconic dive tower waterslide and the Lazy River Courtyard with a winding waterway surrounded by tropical landscaping. Throughout the property, authentic retro details include restored vintage cars, period advertisements, classic artwork, retro furniture, and even authentic toiletry packaging in the bathrooms. The playful atmosphere extends to recreational amenities including a 10-lane bowling alley, retro arcade, and fitness center designed to resemble Jack LaLanne's original gymnasium.",
    category: "Prime Value",
    priceRange: "$-$$ (Starting around $150-220 per night, varying by season)",
    location: "About a 20-minute walk or 5-minute shuttle bus ride to Universal CityWalk and theme parks, with a dedicated walking path to Volcano Bay water theme park",
    amenities: [
      "Two themed pool areas including a lazy river, waterslide, and sand beaches",
      "Galaxy Bowl - 10-lane bowling alley (additional fee)",
      "Game-O-Rama arcade",
      "Jack LaLanne Physical Fitness Studio",
      "Universal Studios Store with merchandise and sundries",
      "Complimentary WiFi",
      "Self-laundry facilities",
      "Concierge services",
      "Self-parking (fee applies)"
    ],
    roomTypes: [
      "Standard Rooms (Two Queen beds or One King bed)",
      "Poolside Rooms",
      "Family Suites with kitchenette and separate bedroom",
      "Volcano View Rooms (overlooking Volcano Bay)",
      "Interior Entry or Exterior Entry options"
    ],
    parkBenefits: [
      "Early Park Admission (enter the theme parks 1 hour before regular opening)",
      "Complimentary shuttle bus transportation to the parks",
      "Resort-wide charging privileges with room key",
      "Complimentary delivery of merchandise purchased throughout Universal Orlando to the hotel",
      "Walking path to Volcano Bay water theme park"
    ],
    dining: [
      "Bayliner Diner (food court with multiple stations and meal periods)",
      "Galaxy Bowl Restaurant (table service dining connected to the bowling alley)",
      "Swizzle Lounge (retro-themed lobby bar)",
      "The Hideaway Bar & Grill (poolside dining at the Lazy River Courtyard)",
      "Atomic Tonic (poolside bar at the Cabana Courtyard)",
      "Starbucks (full-service coffee shop in the lobby)"
    ],
    insiderTips: "Family Suites offer excellent value for families, featuring a kitchenette with microwave and mini-refrigerator, a living area with pull-out sofa, and a separate bedroom with privacy door. The Lazy River Courtyard tends to be quieter and more relaxed than the more energetic Cabana Courtyard pool area - choose your room location based on your preference. Towers 4 and 5 offer the closest access to the walking path to Volcano Bay water theme park. For convenience to the main lobby, food court, and transportation, request rooms in the Continental or Americana buildings. The Bayliner Diner food court can get crowded during peak breakfast and dinner hours - consider slightly earlier or later meals to avoid lines. A refillable souvenir cup program offers unlimited fountain beverages throughout your stay for one price.",
    websiteUrl: "https://www.universalorlando.com/web/en/us/places-to-stay/universals-cabana-bay-beach-resort",
    imageUrl: "/images/hotels/universal-cabana-bay-beach-resort.jpg"
  },
  "Universal's Aventura Hotel": {
    name: "Universal's Aventura Hotel",
    description: "Universal's Aventura Hotel offers a sleek, modern hospitality experience focused on clean design, smart technology, and spectacular views. This 600-room tower hotel represents Universal's contemporary value option, featuring minimalist decor, floor-to-ceiling windows, and a landmark rooftop bar with panoramic vistas of all three Universal theme parks. Guest rooms employ a clean-lined, space-efficient design with integrated technology, including in-room tablets that control temperature, lighting, and television while also facilitating food orders and providing park information. The hotel's soaring 17-story glass tower provides a striking contrast to Universal's more thematic resorts, appealing to design-conscious travelers who prefer modern aesthetics and technological convenience over elaborate theming. Public spaces maintain this contemporary approach with a dramatic open lobby featuring multi-story windows, minimal ornamentation, and subtle lighting. The property's signature feature is Bar 17 Bistro, the resort's rooftop lounge offering craft cocktails, small plates, and unmatched views across Universal Orlando Resort and beyond.",
    category: "Prime Value",
    priceRange: "$-$$ (Starting around $140-200 per night, varying by season)",
    location: "About a 15-minute walk or 5-minute shuttle bus ride to Universal CityWalk and theme parks, adjacent to Volcano Bay water theme park with dedicated walking path",
    amenities: [
      "Rooftop bar and observation deck with panoramic views",
      "Resort-style pool with hot tub and kids' splash area",
      "Virtual reality game room",
      "Fitness center with cardio and strength equipment",
      "Universal Studios Store with merchandise and sundries",
      "Complimentary WiFi",
      "In-room tablets controlling room functions and services",
      "Concierge services via tablet and lobby desk",
      "Self-parking (fee applies)"
    ],
    roomTypes: [
      "Standard Rooms (Two Queen beds or One King bed)",
      "Deluxe Rooms (slightly larger with additional seating)",
      "Kids' Suites with separate themed sleeping area",
      "Skyline View Rooms (upper floors with premium views)"
    ],
    parkBenefits: [
      "Early Park Admission (enter the theme parks 1 hour before regular opening)",
      "Complimentary shuttle bus transportation to the parks",
      "Resort-wide charging privileges with room key",
      "Complimentary delivery of merchandise purchased throughout Universal Orlando to the hotel",
      "Walking path to Volcano Bay water theme park"
    ],
    dining: [
      "Urban Pantry (modern food hall with multiple stations and cuisines)",
      "Bar 17 Bistro (rooftop bar with small plates and signature cocktails)",
      "barVentura (lobby bar with drinks and light bites)",
      "Starbucks (full-service coffee shop in the lobby)"
    ],
    insiderTips: "Request a room on floors 10-16 for the best views - even-numbered rooms face the theme parks while odd-numbered rooms face International Drive. The in-room tablet allows for ordering food delivered to your room or scheduled for pickup without waiting in line at the food hall. Bar 17 Bistro on the rooftop becomes very popular around sunset - arrive at least 30 minutes before sundown to secure a good table for optimal views. The kids' virtual reality game room charges by time blocks rather than per game, providing better value for longer play sessions. The hotel appeals most to couples, singles, and families with older children who appreciate modern design and technology over elaborate theming. Smart technology features include the ability to text requests to the front desk and receive notifications when your room is ready.",
    websiteUrl: "https://www.universalorlando.com/web/en/us/places-to-stay/universals-aventura-hotel",
    imageUrl: "/images/hotels/universals-aventura-hotel-1-optimized.webp"
  },
  "Universal's Endless Summer Resort - Surfside Inn and Suites": {
    name: "Universal's Endless Summer Resort - Surfside Inn and Suites",
    description: "Universal's Endless Summer Resort - Surfside Inn and Suites brings the laid-back vibe of coastal surf culture to Universal Orlando's value category accommodations. This 750-room property features a relaxed surf theme throughout, with design elements including surfboards, ocean colors, and wave-inspired architecture. The hotel offers both standard rooms and spacious two-bedroom suites, arranged in an exterior corridor layout around a central surfboard-shaped swimming pool, creating a bright, beachy atmosphere. Guest rooms employ a bright blue and white color palette with surf-inspired artwork, wood tones reminiscent of driftwood, and clever storage solutions to maximize space efficiency. Public areas continue the surf theme with a casual atmosphere, including a lobby adorned with a dramatic wave design and surfing photography. The property represents Universal's most affordable price point while maintaining quality accommodations and essential amenities, making it particularly appealing to budget-conscious families and larger groups seeking suite options without premium resort pricing.",
    category: "Value",
    priceRange: "$ (Starting around $85-140 per night, varying by season)",
    location: "Located on Universal Boulevard about 2 miles from the main Universal Orlando campus, with complimentary shuttle bus transportation provided",
    amenities: [
      "Surfboard-shaped swimming pool with beach area",
      "Game room with arcade games",
      "Fitness center with cardio and strength equipment",
      "Universal Studios Store with merchandise and sundries",
      "Complimentary WiFi",
      "Self-laundry facilities",
      "Self-parking (fee applies)"
    ],
    roomTypes: [
      "Standard Rooms (Two Queen beds)",
      "2-Bedroom Suites (sleeping up to six with three queen beds)",
      "Pool View options available for both room types"
    ],
    parkBenefits: [
      "Early Park Admission (enter the theme parks 1 hour before regular opening)",
      "Complimentary shuttle bus transportation to the parks",
      "Resort-wide charging privileges with room key"
    ],
    dining: [
      "Beach Break Cafe (quick-service food court with varied options)",
      "Sand Bar (pool bar serving drinks and light food items)"
    ],
    insiderTips: "The 2-Bedroom Suites provide exceptional value for families or small groups, offering three queen beds, two separate rooms, and a kitchenette with picnic table-style dining area - all for often just $40-50 more per night than standard rooms. The resort's Value category pricing means it books up quickly during peak periods - reserve well in advance for holiday periods and summer vacation. For shortest waits for the shuttle bus to the parks, consider leaving extra early (at least 45 minutes before Early Park Admission begins) or after the initial morning rush. Rooms closer to the central building offer more convenient access to dining, transportation, and the pool area. The Beach Break Cafe offers a Refillable Mug Program that provides unlimited fountain beverages throughout your stay for one price.",
    websiteUrl: "https://www.universalorlando.com/web/en/us/places-to-stay/universals-endless-summer-resort-surfside-inn-and-suites",
    imageUrl: "/images/hotels/universals-endless-summer-resort-surfside-inn-and-suites.jpg"
  },
  "Universal's Endless Summer Resort - Dockside Inn and Suites": {
    name: "Universal's Endless Summer Resort - Dockside Inn and Suites",
    description: "Universal's Endless Summer Resort - Dockside Inn and Suites complements its sister property Surfside with a relaxed coastal theme inspired by sunsets, sand, and the tranquility of a perfect evening at a seaside retreat. This 2,050-room resort maintains Universal's value price point while featuring coastal-themed décor throughout, including sunset-inspired color palettes, driftwood accents, and nautical elements that evoke the feeling of a modest seaside hotel. The property is arranged in two separate buildings surrounding two large pools, including a chill pool for relaxation and a more active pool with a children's play area. Like Surfside, Dockside offers both standard rooms and two-bedroom suites, with interiors featuring sunset imagery, maritime decorative elements, and space-efficient layouts. The resort emphasizes affordability and relaxation, creating a laid-back environment for budget-conscious travelers who want a comfortable base for their theme park vacation without elaborate theming or premium amenities.",
    category: "Value",
    priceRange: "$ (Starting around $85-140 per night, varying by season)",
    location: "Located on Universal Boulevard about 2 miles from the main Universal Orlando campus, with complimentary shuttle bus transportation provided",
    amenities: [
      "Two large swimming pools (one quiet, one more active)",
      "Game room with arcade games",
      "Fitness center with cardio and strength equipment",
      "Universal Studios Store with merchandise and sundries",
      "Complimentary WiFi",
      "Self-laundry facilities",
      "Self-parking (fee applies)"
    ],
    roomTypes: [
      "Standard Rooms (Two Queen beds)",
      "2-Bedroom Suites (sleeping up to six with three queen beds)",
      "Pool View options available for both room types"
    ],
    parkBenefits: [
      "Early Park Admission (enter the theme parks 1 hour before regular opening)",
      "Complimentary shuttle bus transportation to the parks",
      "Resort-wide charging privileges with room key"
    ],
    dining: [
      "Pier 8 Market (quick-service food court with varied options)",
      "Sunset Lounge (lobby bar with drinks and light menu)",
      "The Oasis Beach Bar (pool bar serving drinks and light food items)",
      "Starbucks (full-service coffee shop in the lobby)"
    ],
    insiderTips: "With over 2,000 rooms across two buildings, the resort is quite large - request a room near the central facilities if walking distance is a concern. The 2-Bedroom Suites include a picnic table-style dining area, kitchenette with microwave and mini-refrigerator, and separate bedroom with privacy door - ideal for families. The resort offers two distinct pool experiences - the quieter pool is best for relaxation, while the main pool features more activities and music. For best shuttle availability, avoid peak transportation times (8:00-10:00 AM for departures to parks, and the hour after park closing for returns). Pier 8 Market and Sunset Lounge often feature special sunset-inspired cocktails and themed food items not available at other Universal hotels.",
    websiteUrl: "https://www.universalorlando.com/web/en/us/places-to-stay/universals-endless-summer-resort-dockside-inn-and-suites",
    imageUrl: "/images/hotels/universals-endless-summer-resort-dockside-inn-and-suites.jpg"
  }
};