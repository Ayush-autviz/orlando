/**
 * Orlando Shopping Malls Data
 * 
 * This file contains comprehensive information about Orlando's premier shopping destinations,
 * presenting each mall as a luxury attraction with detailed information about shops,
 * restaurants, amenities, and more.
 */

export interface ShoppingMall {
    id: string;                     // Unique identifier
    name: string;                   // Mall name
    tagline: string;                // Short marketing tagline
    description: string;            // Detailed description
    shortDescription: string;       // Brief overview for cards
    heroImage: any;                 // Main showcase image (require() return type)
    galleryImages: any[];           // Gallery images (require() return type)
    location: {
      address: string;              // Full address
      neighborhood: string;         // Area of Orlando
      coordinates: {                // For map integration
        lat: number;
        lng: number;
      }
    };
    details: {
      squareFeet: string;           // Size information
      storeCount: number;           // Number of stores
      levels: number;               // Number of floors/levels
      openingYear: number;          // Year established
      parkingInfo: string;          // Parking details
    };
    hours: {
      regular: string;              // Regular hours
      holiday?: string;             // Special holiday hours if applicable
    };
    contactInfo: {
      phone: string;                // Contact number
      website: string;              // Official website
      socialMedia?: {               // Social media presence
        facebook?: string;
        instagram?: string;
        twitter?: string;
      }
    };
    features: string[];             // Notable features/amenities
    notableStores: Store[];         // Featured stores (anchor/luxury)
    diningOptions: DiningOption[];  // Restaurant highlights
    virtualTour?: string;           // Virtual tour link if available
  }
  
  export interface Store {
    name: string;                   // Store name
    category: string;               // Type of store (Fashion, Electronics, etc.)
    description: string;            // Brief description
    logo?: string;                  // Store logo
    website?: string;               // Store website
    location?: string;              // Location within mall (e.g., "Level 2, Near Food Court")
    flagship?: boolean;             // Whether it's a flagship store
  }
  
  export interface DiningOption {
    name: string;                   // Restaurant name
    cuisine: string;                // Type of cuisine
    description: string;            // Brief description
    priceRange: string;             // Price indicator ($ to $$$$$)
    image?: string;                 // Restaurant image
    website?: string;               // Restaurant website
    location?: string;              // Location within mall
  }
  
  
  
  export const shoppingMalls: ShoppingMall[] = [
    {
      id: "mall-millenia",
      name: "The Mall at Millenia",
      tagline: "Central Florida's Premier Luxury Shopping Destination",
      description: "The Mall at Millenia is Orlando's most upscale shopping destination, featuring an exceptional collection of over 150 stores, including the finest in luxury retail. With its soaring architecture, natural light, and modern design, the mall creates an unparalleled atmosphere of sophistication. Housing anchor stores like Neiman Marcus, Bloomingdale's, and Macy's alongside elite designers such as Louis Vuitton, Chanel, Gucci, and Tiffany & Co., The Mall at Millenia offers a true luxury shopping experience. Complementing the retail offerings is a curated selection of exceptional dining establishments, from fine restaurants to casual eateries. Located just minutes from Orlando's world-class attractions and International Drive, The Mall at Millenia has established itself as a must-visit destination for luxury shoppers from around the world seeking the finest in fashion, accessories, jewelry, and home goods.",
      shortDescription: "Orlando's premier luxury shopping destination featuring over 150 stores including high-end designer boutiques, exclusive brands, and upscale dining in an architecturally stunning setting.",
      heroImage: require("../../assets/images/mall-at-millenia.jpg"),
      galleryImages: [
        require("../../assets/images/mall-at-millenia-2.jpg")
      ],
      location: {
        address: "4200 Conroy Road, Orlando, FL 32839",
        neighborhood: "Millenia",
        coordinates: {
          lat: 28.4851,
          lng: -81.4344
        }
      },
      details: {
        squareFeet: "1.2 million sq ft",
        storeCount: 150,
        levels: 2,
        openingYear: 2002,
        parkingInfo: "Free valet parking available at all mall entrances. Complimentary self-parking in the spacious lots surrounding the mall."
      },
      hours: {
        regular: "Monday-Saturday: 10AM-9PM, Sunday: 11AM-7PM",
        holiday: "Extended hours during holiday seasons. Check website for current hours."
      },
      contactInfo: {
        phone: "(407) 363-3555",
        website: "https://www.mallatmillenia.com",
        socialMedia: {
          facebook: "https://www.facebook.com/MallatMillenia",
          instagram: "https://www.instagram.com/mallatmillenia",
          twitter: "https://twitter.com/MilleniaMall"
        }
      },
      features: [
        "Luxury collection of retailers",
        "Award-winning architecture",
        "Concierge services",
        "Currency exchange",
        "Valet parking",
        "Free Wi-Fi",
        "Electric vehicle charging stations",
        "Visitor services center",
        "Stroller and wheelchair rentals",
        "Personal shopping services"
      ],
      notableStores: [
        {
          name: "Louis Vuitton",
          category: "Luxury Fashion",
          description: "Iconic French luxury fashion house specializing in leather goods, ready-to-wear, accessories, and jewelry. The boutique offers personalized shopping experiences and exclusive limited edition collections.",
          website: "https://www.louisvuitton.com",
          location: "Upper Level, Grand Court",
          flagship: true
        },
        {
          name: "Neiman Marcus",
          category: "Department Store",
          description: "Luxury department store offering designer apparel, accessories, beauty products, and home collections. Features personal shopping services and exclusive designer trunk shows.",
          website: "https://www.neimanmarcus.com",
          location: "East Anchor",
          flagship: true
        },
        {
          name: "Tiffany & Co.",
          category: "Jewelry",
          description: "Renowned jewelry retailer known for diamond engagement rings, fine jewelry, and luxury accessories. The boutique offers private consultations for bridal and high jewelry collections.",
          website: "https://www.tiffany.com",
          location: "Upper Level, Grand Court"
        },
        {
          name: "Apple Store",
          category: "Electronics",
          description: "Flagship store offering the latest Apple products, accessories, and in-store technical support. Features a Genius Bar and regular creative workshops.",
          website: "https://www.apple.com/retail/mallatmillenia",
          location: "Lower Level, Grand Court"
        },
        {
          name: "Chanel",
          category: "Luxury Fashion",
          description: "Prestigious French fashion house offering haute couture, ready-to-wear, accessories, and fragrances. The boutique provides an immersive Chanel experience with dedicated beauty advisors.",
          website: "https://www.chanel.com",
          location: "Upper Level, Neiman Marcus Wing",
          flagship: true
        },
        {
          name: "Gucci",
          category: "Luxury Fashion",
          description: "Italian luxury brand of fashion and leather goods, offering clothing, shoes, accessories, and home decor. The store features Gucci's latest collections in an elegantly designed space.",
          website: "https://www.gucci.com",
          location: "Upper Level, Grand Court",
          flagship: true
        },
        {
          name: "Bloomingdale's",
          category: "Department Store",
          description: "Upscale department store offering designer clothing, accessories, beauty, and home products. Known for its iconic 'Little Brown Bag' and excellent customer service.",
          website: "https://www.bloomingdales.com",
          location: "West Anchor"
        },
        {
          name: "Cartier",
          category: "Jewelry",
          description: "French luxury goods conglomerate specializing in fine jewelry, watches, and accessories. The boutique offers private appointments for viewing high jewelry collections and rare timepieces.",
          website: "https://www.cartier.com",
          location: "Upper Level, Bloomingdale's Wing"
        },
        {
          name: "Saint Laurent",
          category: "Luxury Fashion",
          description: "Parisian luxury fashion house renowned for its modern and iconic designs. The boutique showcases ready-to-wear collections, leather goods, shoes, and accessories in a sleek architectural space.",
          website: "https://www.ysl.com",
          location: "Upper Level, Neiman Marcus Wing",
          flagship: true
        },
        {
          name: "Balenciaga",
          category: "Luxury Fashion",
          description: "Innovative luxury fashion brand known for avant-garde designs and contemporary silhouettes. The store features limited edition collections and exclusive accessories.",
          website: "https://www.balenciaga.com",
          location: "Upper Level, Bloomingdale's Wing"
        },
        {
          name: "Fendi",
          category: "Luxury Fashion",
          description: "Italian luxury fashion house specializing in fur, ready-to-wear, leather goods, shoes, fragrances, and accessories. Known for its iconic Baguette bag and creative designs.",
          website: "https://www.fendi.com",
          location: "Upper Level, Neiman Marcus Wing"
        },
        {
          name: "Bottega Veneta",
          category: "Luxury Fashion",
          description: "Italian luxury goods house best known for its leather goods featuring the signature 'intrecciato' woven leather technique. The boutique offers personalized services and craftsmanship demonstrations.",
          website: "https://www.bottegaveneta.com",
          location: "Upper Level, Grand Court"
        },
        {
          name: "Rolex",
          category: "Luxury Watches",
          description: "Prestigious Swiss luxury watchmaker offering high-precision timepieces. The boutique features private viewing rooms and expert horologists to assist with selections.",
          website: "https://www.rolex.com",
          location: "Upper Level, near Cartier",
          flagship: true
        },
        {
          name: "Hermès",
          category: "Luxury Fashion",
          description: "French high-fashion luxury goods manufacturer established in 1837, specializing in leather goods, lifestyle accessories, home furnishings, perfumery, jewelry, and ready-to-wear clothing.",
          website: "https://www.hermes.com",
          location: "Upper Level, Neiman Marcus Wing",
          flagship: true
        },
        {
          name: "Bulgari",
          category: "Jewelry & Watches",
          description: "Italian luxury brand known for its exquisite jewelry, watches, accessories, and fragrances. The boutique offers a private viewing salon for high jewelry collections.",
          website: "https://www.bulgari.com",
          location: "Upper Level, near Tiffany & Co."
        },
        {
          name: "Jimmy Choo",
          category: "Luxury Footwear",
          description: "British luxury fashion house specializing in handmade women's shoes, handbags, accessories, and fragrances. The boutique features exclusive limited-edition collections.",
          website: "https://www.jimmychoo.com",
          location: "Upper Level, Bloomingdale's Wing"
        }
      ],
      diningOptions: [
        {
          name: "The Capital Grille",
          cuisine: "Steakhouse",
          description: "Upscale steakhouse known for dry-aged steaks, fresh seafood, and an award-winning wine list in an elegant atmosphere.",
          priceRange: "$$$$",
          website: "https://www.thecapitalgrille.com",
          location: "Upper Level, Main Entrance"
        },
        {
          name: "Cheesecake Factory",
          cuisine: "American",
          description: "Popular restaurant with an extensive menu featuring over 250 items including specialty cheesecakes and desserts.",
          priceRange: "$$$",
          website: "https://www.thecheesecakefactory.com",
          location: "Lower Level, Main Entrance"
        },
        {
          name: "Earls Kitchen + Bar",
          cuisine: "Contemporary American",
          description: "Upscale casual restaurant offering a globally inspired menu with locally sourced ingredients.",
          priceRange: "$$$",
          website: "https://www.earlsrestaurants.com",
          location: "Upper Level, Bloomingdale's Wing"
        },
        {
          name: "Brio Italian Grille",
          cuisine: "Italian",
          description: "Tuscan-inspired restaurant serving authentic northern Italian cuisine in an elegant setting.",
          priceRange: "$$$",
          website: "https://www.brioitalian.com",
          location: "Upper Level, Near Neiman Marcus"
        },
        {
          name: "Häagen-Dazs",
          cuisine: "Desserts",
          description: "Premium ice cream shop offering various flavors of ice cream, sorbet, and frozen yogurt along with specialty desserts.",
          priceRange: "$$",
          website: "https://www.haagendazs.us",
          location: "Lower Level, Food Court"
        }
      ],
      virtualTour: "https://www.mallatmillenia.com/virtualtour"
    },
    {
      id: "florida-mall",
      name: "The Florida Mall",
      tagline: "Orlando's Largest Shopping Center",
      description: "The Florida Mall is Central Florida's largest shopping center, spanning over 1.8 million square feet and featuring more than 250 stores and restaurants. This impressive retail destination offers a dynamic mix of department stores, specialty retailers, and exclusive brands not found elsewhere in the market. Anchored by Macy's, Dillard's, JCPenney, and Dick's Sporting Goods, the mall provides extensive shopping options for every taste and budget. The Florida Mall is also home to many unique attractions such as American Girl, the Crayola Experience, and M&M's World, making it a favorite destination for families. The mall's Dining Pavilion offers an international array of quick-service options, while several full-service restaurants satisfy more substantial dining needs. With its modern design, bright and airy spaces, and family-friendly amenities, The Florida Mall provides a comprehensive shopping experience for Orlando residents and visitors alike, just minutes from Orlando International Airport and the region's world-famous attractions.",
      shortDescription: "Central Florida's largest shopping center with over 250 stores including exclusive brands, specialty retailers, family attractions, and diverse dining options in a modern, spacious environment.",
      heroImage: require("../../assets/images/the-florida-mall.jpg"),
      galleryImages: [
        require("../../assets/images/the-florida-mall-1.jpg")
      ],
      location: {
        address: "8001 South Orange Blossom Trail, Orlando, FL 32809",
        neighborhood: "South Orlando",
        coordinates: {
          lat: 28.4478,
          lng: -81.3947
        }
      },
      details: {
        squareFeet: "1.8 million sq ft",
        storeCount: 250,
        levels: 1,
        openingYear: 1986,
        parkingInfo: "Free self-parking available in multiple lots surrounding the mall. Valet parking available at main entrance. Designated areas for rideshare services."
      },
      hours: {
        regular: "Monday-Saturday: 10AM-9PM, Sunday: 12PM-7PM",
        holiday: "Extended holiday hours begin in November. Check website for details."
      },
      contactInfo: {
        phone: "(407) 851-6255",
        website: "https://www.simon.com/mall/the-florida-mall",
        socialMedia: {
          facebook: "https://www.facebook.com/TheFloridaMall",
          instagram: "https://www.instagram.com/thefloridamall",
          twitter: "https://twitter.com/FloridaMall"
        }
      },
      features: [
        "Family-friendly attractions",
        "Children's play area",
        "Nursing mothers' lounge",
        "Free Wi-Fi",
        "Dining Pavilion",
        "Stroller and wheelchair rentals",
        "Package carry-out assistance",
        "ATMs throughout the mall",
        "Foreign currency exchange",
        "Electric vehicle charging stations"
      ],
      notableStores: [
        {
          name: "Apple Store",
          category: "Electronics",
          description: "Flagship store offering the full line of Apple products, accessories, and services with in-store specialists. Features regular workshops, Genius Bar appointments, and the latest technological innovations in an architecturally stunning environment.",
          website: "https://www.apple.com/retail/floridamall",
          location: "Center of Mall",
          flagship: true
        },
        {
          name: "Zara",
          category: "Fashion",
          description: "Spanish fashion retailer offering the latest trends for men, women, and children at affordable prices. Known for rapidly translating runway styles into accessible fashion with new merchandise arriving twice weekly.",
          website: "https://www.zara.com",
          location: "South Entrance"
        },
        {
          name: "American Girl",
          category: "Specialty",
          description: "Immersive retail experience devoted to the popular doll brand with a bistro, doll hair salon, and exclusive merchandise. Offers special events, personalized shopping experiences, and educational activities that celebrate girls and their stories.",
          website: "https://www.americangirl.com",
          location: "East Wing",
          flagship: true
        },
        {
          name: "M&M's World",
          category: "Specialty",
          description: "Colorful 17,000-square-foot store dedicated to the M&M's candy brand featuring exclusive merchandise, interactive displays, and personalized candy options. Includes a 3D movie experience and photo opportunities with life-sized character statues.",
          website: "https://www.mmsworld.com",
          location: "North Entrance",
          flagship: true
        },
        {
          name: "Crayola Experience",
          category: "Attraction",
          description: "25,000 square foot family attraction with 26 hands-on activities inspired by Crayola products and creativity. Features interactive stations where visitors can name and wrap their own crayon, create digital art, and participate in color chemistry demonstrations.",
          website: "https://www.crayolaexperience.com/orlando",
          location: "East Wing",
          flagship: true
        },
        {
          name: "H&M",
          category: "Fashion",
          description: "Swedish fashion retailer known for trendy, affordable clothing for men, women, and children. The two-story flagship location features expanded collections, including H&M Home and premium fashion lines not found in other locations.",
          website: "https://www.hm.com",
          location: "Center of Mall",
          flagship: true
        },
        {
          name: "Victoria's Secret",
          category: "Lingerie",
          description: "Popular women's lingerie, beauty products, and accessories retailer with a wide selection of undergarments. The expansive store includes a PINK section and offers personalized bra fitting services by trained specialists.",
          website: "https://www.victoriassecret.com",
          location: "West Wing"
        },
        {
          name: "Sephora",
          category: "Beauty",
          description: "French multinational retailer of personal care and beauty products featuring nearly 300 brands. Offers complimentary beauty classes, personalized skincare consultations, and makeovers from professional makeup artists.",
          website: "https://www.sephora.com",
          location: "South Entrance"
        },
        {
          name: "Morphe",
          category: "Beauty",
          description: "Professional-grade makeup and beauty tools retailer known for high-quality brushes and artist-curated eyeshadow palettes. Features makeup demonstrations and collaborations with influential beauty content creators.",
          website: "https://www.morphe.com",
          location: "North Wing"
        },
        {
          name: "UNIQLO",
          category: "Fashion",
          description: "Japanese casual wear designer and retailer known for high-quality basics and innovative fabrics like HEATTECH and AIRism. The spacious store showcases minimalist design and seasonal capsule collections.",
          website: "https://www.uniqlo.com",
          location: "Center of Mall"
        },
        {
          name: "LUSH",
          category: "Beauty & Bath",
          description: "Fresh handmade cosmetics retailer known for ethical, cruelty-free bath bombs, soaps, and skincare. The sensory-rich store features product demonstrations and allows customers to test products before purchasing.",
          website: "https://www.lushusa.com",
          location: "West Wing"
        },
        {
          name: "Hollister Co.",
          category: "Fashion",
          description: "Southern California-inspired casual apparel retailer with a beach house storefront design. Features an immersive atmosphere with signature scent, music, and low lighting to create a unique shopping experience.",
          website: "https://www.hollisterco.com",
          location: "East Wing"
        },
        {
          name: "LEGO Store",
          category: "Toys",
          description: "Interactive retail destination featuring exclusive LEGO sets, a Pick-A-Brick wall, and impressive LEGO sculptures. Offers monthly building events and a digital box that shows 3D models of boxed sets when scanned.",
          website: "https://www.lego.com",
          location: "North Wing",
          flagship: true
        },
        {
          name: "Pandora",
          category: "Jewelry",
          description: "Danish jewelry manufacturer and retailer known for its customizable charm bracelets and designer rings. The boutique offers personalized styling consultations and jewelry cleaning services.",
          website: "https://www.pandora.net",
          location: "Center Court"
        },
        {
          name: "Foot Locker",
          category: "Athletic Footwear",
          description: "Premier athletic footwear and apparel retailer featuring the latest releases from Nike, Jordan, Adidas, and more. The two-level store includes House of Hoops and specialty collections not found elsewhere.",
          website: "https://www.footlocker.com",
          location: "South Wing",
          flagship: true
        },
        {
          name: "Bath & Body Works",
          category: "Beauty & Home Fragrance",
          description: "Popular retailer of body care and home fragrance products with seasonal collections and signature scents. Features an extensive White Barn candle shop within the store and regular product demonstrations.",
          website: "https://www.bathandbodyworks.com",
          location: "West Wing"
        }
      ],
      diningOptions: [
        {
          name: "California Pizza Kitchen",
          cuisine: "American/Pizza",
          description: "Casual restaurant specializing in California-style pizzas with innovative toppings along with pasta, salads, and appetizers.",
          priceRange: "$$$",
          website: "https://www.cpk.com",
          location: "External Entrance, East Wing"
        },
  
        {
          name: "American Girl Bistro",
          cuisine: "American",
          description: "Casual American fare in a family-friendly setting with special accommodations for dolls to join the dining experience.",
          priceRange: "$$$",
          website: "https://www.americangirl.com/retail/orlando-bistro",
          location: "Inside American Girl Store, East Wing"
        },
        {
          name: "Carlo's Bakery",
          cuisine: "Bakery",
          description: "Famous bakery from the TV show 'Cake Boss' offering signature cakes, pastries, cookies, and cannoli.",
          priceRange: "$$",
          website: "https://www.carlosbakery.com",
          location: "Center of Mall"
        },
        {
          name: "Shake Shack",
          cuisine: "American/Fast Casual",
          description: "Popular fast-casual restaurant known for premium burgers, chicken sandwiches, hot dogs, frozen custard, and shakes.",
          priceRange: "$$",
          website: "https://www.shakeshack.com",
          location: "Dining Pavilion"
        }
      ]
    },
    {
      id: "orlando-international-premium-outlets",
      name: "Orlando International Premium Outlets",
      tagline: "Orlando's Ultimate Luxury Outlet Shopping Experience",
      description: "Orlando International Premium Outlets is Florida's largest outlet shopping destination, featuring an impressive collection of 180 designer and name-brand outlet stores offering everyday savings of 25% to 65%. This outdoor shopping center combines the thrill of finding exceptional deals with an upscale shopping environment. Located on International Drive near Universal Orlando Resort, this premier outlet center attracts both locals and tourists seeking significant savings on top brands. The center features an extensive collection of designer names including Coach, Burberry, Kate Spade New York, Nike, Michael Kors, Armani, and many more. Beyond shopping, visitors can enjoy a variety of dining options at the food court or relax at one of the casual restaurants. With its convenient location in the heart of Orlando's tourist district, attractive architecture, and unparalleled selection of discounted luxury and designer brands, Orlando International Premium Outlets delivers a premier shopping experience that combines value and luxury.",
      shortDescription: "Florida's largest outlet shopping destination featuring 180 designer and name-brand stores offering 25% to 65% savings daily in an upscale outdoor shopping environment.",
      heroImage: require("../../assets/images/orlando-premium-outlets.jpg"),
      galleryImages: [
        require("../../assets/images/orlando-premium-outlets.jpeg")
      ],
      location: {
        address: "5220 International Drive, Orlando, FL 32819",
        neighborhood: "International Drive",
        coordinates: {
          lat: 28.4748,
          lng: -81.4498
        }
      },
      details: {
        squareFeet: "773,000 sq ft",
        storeCount: 180,
        levels: 1,
        openingYear: 2000,
        parkingInfo: "Free self-parking available in multiple lots. Paid premium parking available near main entrances. Valet parking available on weekends and holidays."
      },
      hours: {
        regular: "Monday-Saturday: 10AM-9PM, Sunday: 10AM-7PM",
        holiday: "Extended hours during holiday shopping season and peak tourist seasons."
      },
      contactInfo: {
        phone: "(407) 352-9600",
        website: "https://www.premiumoutlets.com/outlet/orlando-international",
        socialMedia: {
          facebook: "https://www.facebook.com/OrlandoInternationalPremiumOutlets",
          instagram: "https://www.instagram.com/orlandopremiumoutlets",
          twitter: "https://twitter.com/OrlandoOutlets"
        }
      },
      features: [
        "Designer outlet shopping",
        "Covered walkways",
        "Outdoor shopping environment",
        "Free Wi-Fi",
        "ATMs throughout center",
        "Currency exchange services",
        "Stroller and wheelchair rentals",
        "Package carryout assistance",
        "Tourist information center",
        "I-Ride Trolley stop"
      ],
      notableStores: [
        {
          name: "Burberry",
          category: "Luxury Fashion",
          description: "British luxury fashion house offering discounted outerwear, accessories, and apparel featuring their iconic check pattern. The outlet store provides significant savings on heritage trench coats, cashmere scarves, and signature accessories with the same quality standards as regular retail locations.",
          website: "https://www.burberry.com",
          location: "Center Court",
          flagship: true
        },
        {
          name: "Coach",
          category: "Leather Goods",
          description: "American luxury design house specializing in leather handbags, accessories, and ready-to-wear apparel at outlet prices. The spacious store features current and past season merchandise with exclusive outlet-only designs and collections.",
          website: "https://www.coach.com",
          location: "Main Entrance",
          flagship: true
        },
        {
          name: "Nike Factory Store",
          category: "Athletic Apparel",
          description: "Extensive collection of athletic footwear, apparel, and accessories for men, women, and children at discounted prices. The two-level flagship outlet features special collections, limited editions, and performance gear organized by sport category.",
          website: "https://www.nike.com",
          location: "North Wing",
          flagship: true
        },
        {
          name: "Kate Spade New York",
          category: "Fashion",
          description: "American luxury fashion design company offering handbags, clothing, jewelry, and other fashion items at outlet prices. Known for colorful, playful designs with sophisticated aesthetic, the store features special outlet collections and seasonal promotions.",
          website: "https://www.katespade.com",
          location: "South Wing"
        },
        {
          name: "Polo Ralph Lauren",
          category: "Fashion",
          description: "American designer fashion store featuring classic American clothing, accessories, and home products at discounted prices. The expansive outlet offers separate men's, women's, and children's sections with a dedicated home collection area.",
          website: "https://www.ralphlauren.com",
          location: "East Wing",
          flagship: true
        },
        {
          name: "Michael Kors",
          category: "Fashion",
          description: "American luxury accessories and apparel brand offering discounted handbags, watches, shoes, and ready-to-wear products. The boutique-style outlet features organized displays of current styles with special outlet exclusives not available in retail stores.",
          website: "https://www.michaelkors.com",
          location: "Main Entrance"
        },
        {
          name: "Adidas Outlet",
          category: "Athletic Apparel",
          description: "German sportswear manufacturer outlet featuring athletic footwear, apparel, and accessories at reduced prices. The tech-forward store includes interactive displays showcasing the latest performance innovations at outlet prices.",
          website: "https://www.adidas.com",
          location: "West Wing"
        },
        {
          name: "Saks Fifth Avenue OFF 5TH",
          category: "Department Store",
          description: "Luxury off-price retail store offering discounted designer fashion, jewelry, and accessories from top brands. The 20,000-square-foot anchor store features organized designer boutiques and a dedicated luxury accessories section.",
          website: "https://www.saksoff5th.com",
          location: "North Wing",
          flagship: true
        },
        {
          name: "Prada Outlet",
          category: "Luxury Fashion",
          description: "Italian luxury fashion house offering significant savings on high-end ready-to-wear clothing, leather goods, footwear, and accessories. The minimalist designed store features carefully curated collections from previous seasons.",
          website: "https://www.prada.com",
          location: "VIP Wing",
          flagship: true
        },
        {
          name: "Tory Burch",
          category: "Fashion",
          description: "American lifestyle brand offering classic, bohemian-preppy women's clothing, handbags, shoes, and accessories at outlet prices. The store features a warm, residential atmosphere with exclusive outlet designs.",
          website: "https://www.toryburch.com",
          location: "South Wing"
        },
        {
          name: "Salvatore Ferragamo",
          category: "Luxury Fashion",
          description: "Italian luxury goods company specializing in shoes, leather goods, and ready-to-wear fashion at outlet prices. Known for exceptional craftsmanship and innovative designs with signature styles available at significant discounts.",
          website: "https://www.ferragamo.com",
          location: "VIP Wing"
        },
        {
          name: "Under Armour Factory House",
          category: "Athletic Apparel",
          description: "Performance athletic wear retailer offering technical clothing, footwear, and accessories at outlet prices. The industrial-designed space showcases sport-specific training gear with interactive displays.",
          website: "https://www.underarmour.com",
          location: "West Wing",
          flagship: true
        },
        {
          name: "Versace",
          category: "Luxury Fashion",
          description: "Italian luxury fashion company offering bold, glamorous designs in ready-to-wear clothing and accessories at outlet prices. The opulent store environment features the brand's iconic Medusa logo and Greek key patterns.",
          website: "https://www.versace.com",
          location: "VIP Wing"
        },
        {
          name: "UGG",
          category: "Footwear & Apparel",
          description: "Premium footwear and lifestyle brand offering their iconic sheepskin boots along with clothing, accessories, and home goods at outlet prices. The cozy store atmosphere showcases seasonal collections and exclusive outlet styles.",
          website: "https://www.ugg.com",
          location: "East Wing"
        },
        {
          name: "Diesel",
          category: "Fashion",
          description: "Italian retail clothing company offering innovative denim, casual wear, and accessories at outlet prices. Known for edgy designs and premium denim treatments with significant discounts on current and past collections.",
          website: "https://www.diesel.com",
          location: "West Wing"
        },
        {
          name: "Theory",
          category: "Contemporary Fashion",
          description: "Contemporary fashion brand offering minimalist, sophisticated apparel for men and women at outlet prices. The clean, modern store design showcases tailored workwear and elevated casual pieces at significant savings.",
          website: "https://www.theory.com",
          location: "South Wing"
        }
      ],
      diningOptions: [
        {
          name: "Vinito Ristorante",
          cuisine: "Italian",
          description: "Full-service Italian restaurant offering authentic pasta, seafood, steaks, and a carefully curated wine list.",
          priceRange: "$$$",
          website: "https://www.vinitoiristorante.com",
          location: "Main Entrance, External Access"
        },
        {
          name: "Subway",
          cuisine: "Sandwiches",
          description: "Quick-service sandwich shop offering made-to-order subs, wraps, and salads.",
          priceRange: "$",
          website: "https://www.subway.com",
          location: "Food Court"
        },
        {
          name: "Panda Express",
          cuisine: "Chinese",
          description: "Fast-casual restaurant serving American Chinese cuisine, including their famous orange chicken and chow mein.",
          priceRange: "$",
          website: "https://www.pandaexpress.com",
          location: "Food Court"
        },
        {
          name: "Haagen-Dazs",
          cuisine: "Dessert",
          description: "Premium ice cream shop serving various flavors of ice cream, sorbet, frozen yogurt, and specialty desserts.",
          priceRange: "$$",
          website: "https://www.haagendazs.us",
          location: "Center Court"
        },
        {
          name: "Churromania",
          cuisine: "Dessert",
          description: "Specialty shop serving fresh, handmade churros with various fillings and toppings, along with coffee and other beverages.",
          priceRange: "$",
          website: "https://www.churromania.com",
          location: "Food Court"
        }
      ]
    },
    {
      id: "disney-springs",
      name: "Disney Springs",
      tagline: "The Ultimate Disney Shopping, Dining, and Entertainment Destination",
      description: "Disney Springs is an expansive waterfront district at Walt Disney World Resort that immerses visitors in a vibrant blend of shopping, dining, and entertainment. This meticulously designed complex features over 150 venues spread across four distinct neighborhoods: The Landing, Town Center, West Side, and Marketplace, each with its own unique character and charm. The district seamlessly combines Disney magic with high-end brands, exclusive boutiques, and one-of-a-kind shops, creating a retail experience that can't be found anywhere else. Disney Springs is also home to more than 60 dining options, ranging from quick-service locations to signature restaurants created by celebrity chefs like Masaharu Morimoto, Wolfgang Puck, and José Andrés. Throughout the district, visitors encounter exceptional entertainment including live music, interactive experiences, and the breathtaking Cirque du Soleil show 'Drawn to Life.' With its picturesque waterfront setting, pedestrian-friendly layout, and distinctly Disney touches, Disney Springs offers a premium destination experience that extends the magic of Disney beyond the theme parks in a sophisticated, adult-friendly environment that still welcomes families.",
      shortDescription: "A waterfront shopping, dining, and entertainment district at Walt Disney World featuring over 150 venues across four themed neighborhoods with Disney magic woven throughout the experience.",
      heroImage: require("../../assets/images/disney-springs.jpg"),
      galleryImages: [
        require("../../assets/images/disney-springs-1.webp")
      ],
      location: {
        address: "1486 Buena Vista Drive, Lake Buena Vista, FL 32830",
        neighborhood: "Lake Buena Vista",
        coordinates: {
          lat: 28.3702,
          lng: -81.5196
        }
      },
      details: {
        squareFeet: "120 acres",
        storeCount: 103,
        levels: 1,
        openingYear: 1975,
        parkingInfo: "Free self-parking in multiple garages and surface lots. Preferred parking available for a fee. Complimentary Disney Resort transportation via bus and water taxi."
      },
      hours: {
        regular: "Sunday-Thursday: 10AM-11PM, Friday-Saturday: 10AM-11:30PM",
        holiday: "Extended hours may apply during holidays and peak seasons. Check the website for current hours."
      },
      contactInfo: {
        phone: "(407) 939-6244",
        website: "https://www.disneysprings.com",
        socialMedia: {
          facebook: "https://www.facebook.com/DisneySpringsBuenaVista",
          instagram: "https://www.instagram.com/disneysprings",
          twitter: "https://twitter.com/DisneySprings"
        }
      },
      features: [
        "Four themed neighborhoods",
        "Waterfront promenade",
        "Live entertainment venues",
        "Character experiences",
        "Disney-exclusive merchandise",
        "Amphicar tours",
        "Aerophile balloon flight",
        "Interactive fountains",
        "Cirque du Soleil theater",
        "Complimentary Disney transportation"
      ],
      notableStores: [
        {
          name: "World of Disney",
          category: "Disney Merchandise",
          description: "The largest Disney store in the world spanning 50,000+ square feet and offering an unparalleled selection of Disney merchandise, collectibles, and souvenirs. The immersive retail experience features themed rooms with interactive elements, magical touches, and the most comprehensive Disney product assortment anywhere.",
          website: "https://www.disneysprings.com/shops/world-of-disney",
          location: "Marketplace",
          flagship: true
        },
        {
          name: "Anthropologie",
          category: "Fashion",
          description: "American lifestyle retailer offering women's apparel, accessories, home décor, and gifts in a bohemian and vintage-inspired style. The two-story location features dramatic architectural elements, curated vignettes, and exclusive Disney Springs collections.",
          website: "https://www.anthropologie.com",
          location: "Town Center"
        },
        {
          name: "LEGO Store",
          category: "Toys",
          description: "Interactive LEGO store featuring exclusive Disney and Star Wars sets, an expansive pick-a-brick wall, build-your-own minifigure station, and impressive Disney-themed LEGO sculptures including a sea monster in the adjacent lagoon. Regular building events and demonstrations make this a destination for LEGO enthusiasts of all ages.",
          website: "https://www.lego.com",
          location: "Marketplace",
          flagship: true
        },
        {
          name: "Sephora",
          category: "Beauty",
          description: "French multinational retailer of personal care and beauty products featuring nearly 300 brands. The bright, modern store offers complimentary beauty services, virtual try-on technology, and Disney-exclusive beauty collaborations throughout the year.",
          website: "https://www.sephora.com",
          location: "Town Center"
        },
        {
          name: "Uniqlo",
          category: "Fashion",
          description: "Japanese casual wear designer, manufacturer, and retailer known for high-quality, affordable basics for men, women, and children. The spacious store features UT graphic t-shirt collections with Disney and Star Wars designs exclusive to this location.",
          website: "https://www.uniqlo.com",
          location: "Town Center"
        },
        {
          name: "The Art of Disney",
          category: "Disney Art",
          description: "Gallery and store featuring Disney artwork, collectibles, and animations with regular artist appearances for signings. The curated space showcases limited edition prints, original paintings, and high-end sculptures from Disney's most celebrated artists and animators.",
          website: "https://www.disneysprings.com/shops/the-art-of-disney",
          location: "Marketplace"
        },
        {
          name: "Basin",
          category: "Bath & Body",
          description: "Bath and body care shop offering handmade soaps, bath bombs, skin care products, and other personal care items. Features interactive testing stations with running water where guests can sample products, and offers exclusive Disney-themed bath bombs and soaps.",
          website: "https://www.basin.com",
          location: "Marketplace"
        },
        {
          name: "ZARA",
          category: "Fashion",
          description: "Spanish fashion retailer offering the latest trends in men's, women's, and children's clothing and accessories at affordable prices. The multi-level flagship location features digital integration with smart mirrors and mobile checkout options.",
          website: "https://www.zara.com",
          location: "Town Center",
          flagship: true
        },
        {
          name: "Disney's Days of Christmas",
          category: "Holiday Merchandise",
          description: "Year-round Christmas store featuring an extensive selection of Disney-themed holiday decorations, ornaments, stockings, and seasonal home décor. Offers personalization services for ornaments and features room vignettes showcasing holiday decorating ideas.",
          website: "https://www.disneysprings.com/shops/disneys-days-of-christmas",
          location: "Marketplace"
        },
        {
          name: "Pandora Jewelry",
          category: "Jewelry",
          description: "Danish jewelry manufacturer and retailer featuring their signature customizable charm bracelets and necklaces. The boutique offers an exclusive Disney collection with character-inspired charms not available elsewhere.",
          website: "https://www.pandora.net",
          location: "Town Center"
        },
        {
          name: "Sunglass Hut",
          category: "Eyewear",
          description: "Premium sunglass retailer offering designer and high-performance eyewear brands. The Disney Springs location features special Mickey Mouse and character-inspired collaborations with brands like Ray-Ban and Oakley.",
          website: "https://www.sunglasshut.com",
          location: "The Landing"
        },
        {
          name: "The LEGO Store",
          category: "Toys",
          description: "Interactive LEGO retail experience featuring exclusive sets, impressive LEGO sculptures, and hands-on building opportunities. The store includes Disney-exclusive LEGO sets and an outdoor play area with large LEGO bricks.",
          website: "https://www.lego.com",
          location: "Marketplace",
          flagship: true
        },
        {
          name: "Coach",
          category: "Luxury Fashion",
          description: "American luxury leather goods company featuring handbags, wallets, footwear, and accessories in a sophisticated boutique setting. The store offers exclusive Disney x Coach collaboration pieces featuring iconic characters on classic Coach designs.",
          website: "https://www.coach.com",
          location: "Town Center"
        },
        {
          name: "Vera Bradley",
          category: "Fashion Accessories",
          description: "American luggage and handbag design company known for colorful, quilted cotton patterns. The Disney Springs location features exclusive Disney prints and patterns on their signature bags and accessories.",
          website: "https://www.verabradley.com",
          location: "Marketplace"
        },
        {
          name: "Disney Dress Shop",
          category: "Fashion",
          description: "Specialty boutique offering women's apparel and accessories inspired by Disney characters and attractions. The designs incorporate subtle and stylish nods to Disney films and characters in vintage-inspired silhouettes.",
          website: "https://www.disneysprings.com/shops/the-dress-shop",
          location: "Marketplace"
        },
        {
          name: "Star Wars Galactic Outpost",
          category: "Specialty",
          description: "Star Wars themed store offering merchandise from across the galactic saga, including apparel, toys, collectibles, and replica items. Features life-size character displays and interactive elements.",
          website: "https://www.disneysprings.com/shops/star-wars-galactic-outpost",
          location: "West Side"
        }
      ],
      diningOptions: [
        {
          name: "Morimoto Asia",
          cuisine: "Pan-Asian",
          description: "Signature restaurant by Iron Chef Masaharu Morimoto featuring a unique exhibition kitchen and dishes from across Asia.",
          priceRange: "$$$$",
          website: "https://www.morimotoasia.com",
          location: "The Landing"
        },
        {
          name: "The BOATHOUSE",
          cuisine: "Seafood/Steakhouse",
          description: "Upscale, waterfront dining experience featuring Florida seafood, steaks, and unique experiences like amphicar tours.",
          priceRange: "$$$$",
          website: "https://www.theboathouseorlando.com",
          location: "The Landing"
        },
        {
          name: "Wine Bar George",
          cuisine: "Wine Bar/American",
          description: "The only Master Sommelier-led wine bar in Florida, offering over 140 wines by the glass and bottle with small plates and charcuterie.",
          priceRange: "$$$",
          website: "https://www.winebargeorge.com",
          location: "The Landing"
        },
        {
          name: "Chef Art Smith's Homecomin'",
          cuisine: "Southern",
          description: "Farm-to-fork restaurant by celebrity chef Art Smith featuring Southern classics like fried chicken and shrimp & grits.",
          priceRange: "$$$",
          website: "https://www.homecominkitchen.com",
          location: "The Landing"
        },
        {
          name: "Ghirardelli Soda Fountain & Chocolate Shop",
          cuisine: "Desserts",
          description: "Famous San Francisco chocolate company offering decadent ice cream sundaes, chocolate treats, and specialty coffees.",
          priceRange: "$$",
          website: "https://www.ghirardelli.com",
          location: "Marketplace"
        }
      ],
      virtualTour: "https://www.disneysprings.com/virtual-tour"
    }
  ];
  
  export function getAllShoppingMalls(): ShoppingMall[] {
    return shoppingMalls;
  }
  
  export function getShoppingMallById(id: string): ShoppingMall | undefined {
    return shoppingMalls.find(mall => mall.id === id);
  }