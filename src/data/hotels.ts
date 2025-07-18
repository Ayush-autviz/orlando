// Hard-coded hotels data to prevent cards from disappearing

export interface HardcodedHotel {
  id: number;
  name: string;
  category: string;
  neighborhood: string;
  description: string;
  price: string;
  rating: number;
  image_url: string;
  link?: string;
  tags?: string[];
  amenities?: string[];
  address?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

const hotels: HardcodedHotel[] = [
  {
    id: 101,
    name: "Disney's Grand Floridian Resort & Spa",
    category: "Hotels",
    neighborhood: "Lake Buena Vista",
    description: "Disney's Grand Floridian Resort & Spa is a luxurious Victorian-style resort that embodies the essence of elegance and sophistication. Located near the Magic Kingdom, this resort provides guests with an enchanting experience that combines modern luxury with classic charm. The resort features two outdoor pools, including the Beach Pool with a 181-foot-long waterslide, and the Courtyard Pool, which includes an adjacent kiddie pool and whirlpool spa. The Grand Floridian Spa offers a range of unique therapies and services, including massages, body wraps, and haircuts. Guests can also stay fit at the high-tech health club or indulge in live music in the awe-inspiring lobby. With its prime location and exceptional amenities, Disney's Grand Floridian Resort & Spa is the perfect destination for those seeking a luxurious and memorable stay.",
    price: "$$$$$",
    rating: 4.7,
    image_url: "/images/hotels/disney-grand-floridian-optimized.jpg",
    link: "https://disneyworld.disney.go.com/resorts/grand-floridian-resort-and-spa/",
    tags: ["Luxury", "Family Friendly", "Resort"],
    amenities: ["Pool", "Spa", "Fine Dining", "Monorail", "Character Dining"],
    address: "4401 Floridian Way, Lake Buena Vista, FL 32830",
    coordinates: {
      lat: 28.4111,
      lng: -81.5864
    }
  },
  {
    id: 102,
    name: "Disney's Contemporary Resort",
    category: "Hotels",
    neighborhood: "Lake Buena Vista",
    description: "Disney's Contemporary Resort is a premier destination for those seeking luxury and convenience. This iconic resort, part of the Walt Disney World family, offers an unparalleled experience with its modern design and exceptional service. Guests can enjoy breathtaking views of Magic Kingdom Park from the Main Tower or relax in the tranquil surroundings of the Garden Wing. The resort shares all its amenities, including pools, dining, and recreation, with Bay Lake Tower, ensuring that every guest has access to top-notch facilities. Whether you're looking for a romantic getaway or a family vacation, Disney's Contemporary Resort provides the perfect blend of comfort and excitement.",
    price: "$$$$",
    rating: 4.5,
    image_url: "/images/hotels/disneys-contemporary-resort.jpeg",
    link: "https://disneyworld.disney.go.com/resorts/contemporary-resort/",
    tags: ["Modern", "Family Friendly", "Resort"],
    amenities: ["Pool", "Character Dining", "Monorail", "Fitness Center", "Marina"],
    address: "4600 North World Dr, Lake Buena Vista, FL 32830",
    coordinates: {
      lat: 28.4155,
      lng: -81.5792
    }
  },
  {
    id: 103,
    name: "Universal's Portofino Bay Hotel",
    category: "Hotels",
    neighborhood: "Universal Area",
    description: "Luxury resort at Universal Orlando Resort recreating the ambiance of the Italian Riviera, offering upscale rooms, multiple pools, and complimentary Express Pass benefits for theme park attractions.",
    price: "$$$$$",
    rating: 4.6,
    image_url: "/images/hotels/portofino-bay-hotel.jpg",
    link: "https://www.universalorlando.com/web/en/us/places-to-stay/loews-portofino-bay-hotel",
    tags: ["Luxury", "Resort", "Italian Theme"],
    amenities: ["Multiple Pools", "Universal Express Pass", "Early Park Admission", "Water Taxi", "Spa"],
    address: "5601 Universal Blvd, Orlando, FL 32819",
    coordinates: {
      lat: 28.4778,
      lng: -81.4703
    }
  },
  {
    id: 104,
    name: "Hard Rock Hotel at Universal Orlando",
    category: "Hotels",
    neighborhood: "Universal Area",
    description: "Music-themed resort at Universal Orlando with rock memorabilia throughout, featuring a sand beach pool with underwater speakers, upscale dining, and complimentary Express Pass benefits.",
    price: "$$$$",
    rating: 4.6,
    image_url: "/images/hotels/hard-rock-hotel-2.jpg",
    link: "https://www.universalorlando.com/web/en/us/places-to-stay/hard-rock-hotel",
    tags: ["Rock Theme", "Resort", "Family Friendly"],
    amenities: ["Beach Pool", "Universal Express Pass", "Early Park Admission", "Rock Memorabilia", "Fitness Center"],
    address: "5800 Universal Blvd, Orlando, FL 32819",
    coordinates: {
      lat: 28.4759,
      lng: -81.4688
    }
  },
  {
    id: 105,
    name: "Ritz-Carlton Orlando, Grande Lakes",
    category: "Hotels",
    neighborhood: "Grande Lakes",
    description: "Inspired by the opulent era of Florida's historic hotels, The Ritz-Carlton Orlando, Grande Lakes stands as the premier resort destination. Our luxury hotel in Orlando boasts a remarkable range of offerings, from rejuvenating spa experiences and championship golf to delectable farm-to-table dining, family activities, and exquisite pools featuring luxurious new cabanas. Unparalleled opportunities for relaxation, recreation, and adventure beckon families, couples, groups, and all travelers. Nestled amidst over 500 acres of pristine natural landscapes, tranquil lakes and a thriving farm, The Ritz-Carlton Orlando, Grande Lakes transcends the conventional notion of a mere luxury hotel—it is an exceptional escape.",
    price: "$$$$$",
    rating: 4.7,
    image_url: "/images/hotels/ritz-carlton-orlando-optimized.jpg",
    link: "https://www.ritzcarlton.com/en/hotels/mcorz-the-ritz-carlton-orlando-grande-lakes/overview/",
    tags: ["Luxury", "Golf", "Spa", "Resort"],
    amenities: ["Golf Course", "Spa", "Multiple Pools", "Fine Dining", "Fitness Center"],
    address: "4012 Central Florida Pkwy, Orlando, FL 32837",
    coordinates: {
      lat: 28.4053,
      lng: -81.4279
    }
  },
  {
    id: 106,
    name: "Four Seasons Resort Orlando at Walt Disney World",
    category: "Hotels",
    neighborhood: "Lake Buena Vista",
    description: "Luxury resort within Walt Disney World featuring a 5-acre water park, rooftop steakhouse with fireworks views, adults-only pool, and complimentary transportation to Disney theme parks.",
    price: "$$$$$",
    rating: 4.8,
    image_url: "/images/hotels/four-seasons-orlando-optimized.jpg",
    link: "https://www.fourseasons.com/orlando/",
    tags: ["Luxury", "Resort", "Water Park"],
    amenities: ["Water Park", "Disney Benefits", "Golf", "Spa", "Character Breakfast"],
    address: "10100 Dream Tree Blvd, Lake Buena Vista, FL 32836",
    coordinates: {
      lat: 28.3841,
      lng: -81.5370
    }
  },
  {
    id: 107,
    name: "Disney's Animal Kingdom Lodge",
    category: "Hotels",
    neighborhood: "Lake Buena Vista",
    description: "Disney's Animal Kingdom Lodge is a deluxe resort that immerses guests in the wonders of Africa. The hotel features beautifully themed rooms and suites, each designed to evoke the grandeur of African savannas. Guests can enjoy a variety of luxurious amenities, including in-room babysitting, complimentary transportation, and concierge services. The resort also offers multiple dining options, including Jiko – The Cooking Place, Boma – Flavors of Africa, and Sanaa. For relaxation, guests can unwind at the Uzima Springs Pool or enjoy a rejuvenating treatment at the Mandara Spa. The hotel's unique savanna views and wildlife observation areas make it an unforgettable experience for families and nature lovers alike.",
    price: "$$$$",
    rating: 4.7,
    image_url: "/images/hotels/disneys-animal-kingdom-lodge-optimized.jpg",
    link: "https://disneyworld.disney.go.com/resorts/animal-kingdom-lodge/",
    tags: ["African Theme", "Wildlife", "Resort"],
    amenities: ["Safari View", "Pool", "Cultural Activities", "Fine Dining", "Fitness Center"],
    address: "2901 Osceola Parkway, Bay Lake, FL 34747",
    coordinates: {
      lat: 28.3553,
      lng: -81.6009
    }
  },
  {
    id: 108,
    name: "Waldorf Astoria Orlando",
    category: "Hotels",
    neighborhood: "Bonnet Creek",
    description: "The Waldorf Astoria Orlando is a premier luxury hotel located in the Bonnet Creek area, just minutes from Walt Disney World. This 15-floor resort boasts 498 guest rooms and 171 suites, including two presidential suites. Each room is meticulously designed to provide a comfortable and luxurious stay, featuring premium Frette bed linens, high-definition 55-inch LCD televisions with streaming capabilities, and full-size kitchens in the suites. Guests can enjoy stunning balcony views overlooking the Waldorf Astoria Golf Course and Bonnet Creek Nature Preserve. The hotel offers a range of exclusive amenities, including a spa, golf course, and multiple dining options. Whether you're looking to relax or explore the surrounding attractions, the Waldorf Astoria Orlando provides an unforgettable experience.",
    price: "$$$$",
    rating: 4.6,
    image_url: "/images/hotels/waldorf-astoria-2-optimized.jpg",
    link: "https://www.waldorfastoriaorlando.com/",
    tags: ["Luxury", "Golf", "Resort"],
    amenities: ["Golf Course", "Spa", "Pool Complex", "Fine Dining", "Disney Transportation"],
    address: "14200 Bonnet Creek Resort Ln, Orlando, FL 32821",
    coordinates: {
      lat: 28.3737,
      lng: -81.5335
    }
  },
  {
    id: 109,
    name: "Loews Royal Pacific Resort at Universal Orlando",
    category: "Hotels",
    neighborhood: "Universal Area",
    description: "South Pacific-themed deluxe resort at Universal Orlando featuring a lagoon-style pool, Polynesian decor, and included Express Pass benefits allowing guests to skip regular lines at most Universal attractions.",
    price: "$$$$",
    rating: 4.5,
    image_url: "/images/hotels/loews-royal-pacific-resort.jpg",
    link: "https://www.universalorlando.com/web/en/us/places-to-stay/loews-royal-pacific-resort",
    tags: ["South Pacific Theme", "Resort", "Family Friendly"],
    amenities: ["Lagoon Pool", "Universal Express Pass", "Early Park Admission", "Water Taxi", "Weekly Luau"],
    address: "6300 Hollywood Way, Orlando, FL 32819",
    coordinates: {
      lat: 28.4715,
      lng: -81.4707
    }
  },
  {
    id: 110,
    name: "Universal's Cabana Bay Beach Resort",
    category: "Hotels",
    neighborhood: "Universal Area",
    description: "Retro 1950s-60s themed value resort at Universal Orlando featuring family suites, two pool areas with a lazy river and waterslide, and a 10-lane bowling alley. Offers walking paths to Universal's Volcano Bay water park.",
    price: "$$",
    rating: 4.5,
    image_url: "/images/hotels/universal-cabana-bay-beach-resort.jpg",
    link: "https://www.universalorlando.com/web/en/us/places-to-stay/universals-cabana-bay-beach-resort",
    tags: ["Retro Theme", "Value", "Family Friendly"],
    amenities: ["Lazy River", "Waterslide", "Bowling Alley", "Early Park Admission", "Family Suites"],
    address: "6550 Adventure Way, Orlando, FL 32819",
    coordinates: {
      lat: 28.4694,
      lng: -81.4735
    }
  },
  {
    id: 111,
    name: "Disney's Polynesian Village Resort",
    category: "Hotels",
    neighborhood: "Lake Buena Vista",
    description: "Disney's Polynesian Village Resort is a premier destination for those seeking luxury and Disney magic. The resort is situated near Magic Kingdom park, making it an ideal choice for families and couples looking to immerse themselves in the Disney experience. The Polynesian Village Resort boasts a tropical island theme, complete with lush vegetation, waterfalls, and volcanic landscapes. Guests can enjoy a variety of recreational activities, including swimming in the newly renovated Lava and Oasis Pools, participating in campfire activities, and watching Movies Under the Stars. The resort also offers motorized boat rentals, catch-and-release fishing, volleyball, and a jogging trail that offers stunning views of Magic Kingdom park and Disney’s Wedding Pavilion. For relaxation, guests can unwind at the hot tub with an infinity edge overlooking Seven Seas Lagoon or enjoy a dip in the zero-entry Lava Pool with its 142-foot-long waterslide and towering volcano. The resort's dining options range from casual poolside bars to fine dining experiences like 'Ohana, which serves Hawaiian-inspired cuisine. The Electrical Water Pageant sails by the shore in the evenings, providing a magical backdrop to the resort's evening activities. With its luxurious amenities and exceptional guest services, Disney's Polynesian Village Resort is the epitome of luxury and Disney magic.",
    price: "$$$$",
    rating: 4.6,
    image_url: "/images/hotels/disneys-polynesian-village-resort.jpg",
    link: "https://disneyworld.disney.go.com/resorts/polynesian-resort/",
    tags: ["South Pacific Theme", "Resort", "Family Friendly"],
    amenities: ["Beach", "Pool", "Character Dining", "Monorail", "Water Activities"],
    address: "1600 Seven Seas Dr, Lake Buena Vista, FL 32830",
    coordinates: {
      lat: 28.4097,
      lng: -81.5834
    }
  },
  {
    id: 112,
    name: "Disney's Wilderness Lodge",
    category: "Hotels",
    neighborhood: "Lake Buena Vista",
    description: "Disney's Wilderness Lodge is a luxurious theme-park hotel that immerses guests in the grandeur of the American wilderness. This resort offers a variety of accommodations, from cozy rooms to spacious villas, each designed to provide a comfortable and relaxing stay. The lodge features stunning architecture inspired by the great lodges of the American West, complete with rustic-chic decor and natural elements like wood and stone. Guests can enjoy a range of activities, including swimming in the resort's pool, exploring the nearby trails, and relaxing in the hot tub on their private porch. The resort also offers several dining options, including Whispering Canyon Cafe and Geyser Point Bar & Grill, which serve delicious meals in a warm and inviting atmosphere. Whether you're looking to unwind after a day at the parks or enjoy some quality time with family and friends, Disney's Wilderness Lodge is the perfect choice for a luxurious and memorable stay.",
    price: "$$$$",
    rating: 4.6,
    image_url: "/images/hotels/disneys-wilderness-lodge.jpeg",
    link: "https://disneyworld.disney.go.com/resorts/wilderness-lodge-resort/",
    tags: ["Rustic", "Pacific Northwest Theme", "Resort"],
    amenities: ["Geyser", "Pools", "Boat Transportation", "Dining", "Fire Rock Geyser"],
    address: "901 Timberline Dr, Lake Buena Vista, FL 32830",
    coordinates: {
      lat: 28.4113,
      lng: -81.5694
    }
  },
  {
    id: 113,
    name: "Disney's Pop Century Resort",
    category: "Hotels",
    neighborhood: "Lake Buena Vista",
    description: "Disney's Pop Century Resort is a value-priced resort located in the ESPN Wide World of Sports Resort Area at Walt Disney World in Lake Buena Vista, Florida. Opened on December 14, 2003, this resort is themed around 20th-century American pop culture, featuring iconic decades from the 1950s to the 1990s. The resort offers 2,880 rooms, each designed to reflect the vibrant and playful spirit of its era. Guests can enjoy a variety of amenities, including multiple pools, a food court, and recreational activities like a playground and game room. The resort's convenient location and efficient transportation options make it an ideal choice for families and travelers looking for an affordable yet memorable stay at Walt Disney World.",
    price: "$$",
    rating: 4.3,
    image_url: "/images/hotels/disneys-pop-century-resort.jpeg",
    link: "https://disneyworld.disney.go.com/resorts/pop-century-resort/",
    tags: ["Value", "Pop Culture Theme", "Family Friendly"],
    amenities: ["Multiple Pools", "Food Court", "Disney Transportation", "Arcade", "Jogging Trail"],
    address: "1050 Century Dr, Lake Buena Vista, FL 32830",
    coordinates: {
      lat: 28.3516,
      lng: -81.5448
    }
  },
  {
    id: 114,
    name: "Margaritaville Resort Orlando",
    category: "Hotels",
    neighborhood: "Kissimmee",
    description: "Jimmy Buffett-inspired resort featuring casual luxury accommodations, a water park, dining and entertainment district, and vacation cottages. Offers a relaxed, tropical atmosphere close to major attractions.",
    price: "$$$",
    rating: 4.4,
    image_url: "/images/hotels/margaritaville-resort-optimized.jpg",
    link: "https://www.margaritavilleresorts.com/margaritaville-resort-orlando",
    tags: ["Tropical", "Resort", "Family Friendly"],
    amenities: ["Water Park", "Pools", "Multiple Restaurants", "Entertainment", "Cottages"],
    address: "8000 Fins Up Cir, Kissimmee, FL 34747",
    coordinates: {
      lat: 28.3212,
      lng: -81.5951
    }
  }
];

export default hotels;