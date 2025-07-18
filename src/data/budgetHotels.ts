import { ConsolidatedHotel } from "../utils/hotelDataHandler";

// New budget hotels to add from master list
export const additionalBudgetHotels: ConsolidatedHotel[] = [
  {
    id: 1001,
    name: "Rosen Inn International",
    category: "Hotels",
    subcategory: "budget-friendly",
    neighborhood: "International Drive",
    description: "The Rosen Inn International is a budget-friendly hotel conveniently located on International Drive near ICON Park. This affordable accommodation offers comfortable rooms, free scheduled shuttles to major theme parks, and amenities including swimming pools, a restaurant, and a convenience store. It's an excellent choice for travelers looking to maximize their Orlando vacation budget while staying in the heart of the tourist district.",
    price: "$80+",
    imageUrl: "/images/hotels/rosen-inn-international.jpg",
    website: "https://www.rosenhotels.com/rosen-inn-international/",
    amenities: ["Free Theme Park Shuttles", "Swimming Pools", "Restaurant", "Convenience Store", "Free Parking"],
    tags: []
  },
  {
    id: 1002,
    name: "Universal Stella Nova Resort",
    category: "Hotels",
    subcategory: "budget-friendly",
    neighborhood: "International Drive",
    description: "Set to open in 2025, the Universal Stella Nova Resort will be a space-themed, prime value hotel offering early park admission to Universal theme parks. This budget-friendly property will feature themed rooms, dining options, swimming pools, and other amenities designed for families and theme park enthusiasts looking for affordable accommodations with Universal perks.",
    price: "$150+",
    imageUrl: "https://orlandoinformer.com/wp-content/uploads/2023/02/Universal-Epic-Universe-Stella-Nova-Resort-concept-art-night.jpg",
    website: "https://www.universalorlando.com",
    amenities: ["Early Park Admission", "Swimming Pool", "Themed Rooms", "Dining Options"],
    tags: ["Universal"]
  },
  {
    id: 1003,
    name: "Rosen Inn at Pointe Orlando",
    category: "Hotels", 
    subcategory: "budget-friendly",
    neighborhood: "International Drive",
    description: "The Rosen Inn at Pointe Orlando offers affordable accommodations in the heart of International Drive, within walking distance of Pointe Orlando entertainment complex. This budget-friendly hotel features comfortable rooms, three swimming pools, a restaurant, and complimentary shuttles to major theme parks, making it an excellent choice for cost-conscious travelers who want to be close to attractions.",
    price: "$85+",
    imageUrl: "https://www.rosenhotels.com/wp-content/uploads/2022/07/Rosen-Inn-Pointe-Orlando-Exterior-1920x1080-1.jpg",
    website: "https://www.rosenhotels.com/rosen-inn-pointe-orlando/",
    amenities: ["Free Theme Park Shuttles", "Three Swimming Pools", "Restaurant", "Playground", "Free Parking"],
    tags: []
  },
  {
    id: 1004,
    name: "Holiday Inn Express & Suites - ICON Park",
    category: "Hotels",
    subcategory: "budget-friendly",
    neighborhood: "International Drive",
    description: "The Holiday Inn Express & Suites near ICON Park provides budget-friendly accommodations with modern amenities on International Drive. Guests enjoy complimentary hot breakfast, an outdoor pool, and convenient access to ICON Park's attractions. This hotel offers excellent value for families and business travelers who want comfortable, affordable lodging in a prime tourist location.",
    price: "$100+",
    imageUrl: "/images/hotels/holiday-inn-express-icon-park.jpg",
    website: "https://www.ihg.com/holidayinnexpress/hotels/us/en/orlando/mcoie/hoteldetail",
    amenities: ["Free Hot Breakfast", "Outdoor Pool", "Fitness Center", "Free Wi-Fi", "Business Center"],
    tags: []
  },
  {
    id: 1005,
    name: "La Quinta Inn & Suites by Wyndham Orlando I-Drive",
    category: "Hotels",
    subcategory: "budget-friendly",
    neighborhood: "International Drive",
    description: "La Quinta Inn & Suites on International Drive offers budget-friendly accommodations with modern amenities including free breakfast, an outdoor pool, and pet-friendly rooms. This affordable hotel is centrally located near major attractions, restaurants, and shopping, making it a convenient choice for travelers seeking value without sacrificing comfort or location.",
    price: "$90+",
    imageUrl: "/images/hotels/la-quinta-idrive.jpg",
    website: "https://www.wyndhamhotels.com/laquinta/orlando-florida/la-quinta-orlando-international-drive-north/overview",
    amenities: ["Free Hot Breakfast", "Outdoor Pool", "Pet-Friendly", "Free Wi-Fi", "Fitness Center"],
    tags: []
  },
  {
    id: 1006,
    name: "Avanti International Resort",
    category: "Hotels",
    subcategory: "budget-friendly",
    neighborhood: "International Drive",
    description: "The Avanti International Resort offers affordable accommodations on International Drive with impressive amenities including a large outdoor pool with a sun deck, hot tub, and poolside bar. This budget-friendly hotel features comfortable rooms, a fitness center, and on-site dining, all within walking distance of restaurants, shops, and attractions, providing excellent value for Orlando visitors.",
    price: "$95+",
    imageUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/353636459.jpg?k=d5aa912de3151560e45a9d9532e1c29d2a982c15c27c0717a92ce4180eabab02&o=&hp=1",
    website: "https://www.avantiresort.com/",
    amenities: ["Large Outdoor Pool", "Poolside Bar", "Fitness Center", "Game Room", "On-site Restaurant"],
    tags: []
  }
];