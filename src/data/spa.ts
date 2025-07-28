export interface Spa {
    id: number;
    name: string;
    location: {
      address: string;
      area: string;
    };
    phone: string;
    description: string;
    features: string[];
    signature: string[];
    website: string;
    imageUrl: string; // Main image (for backward compatibility)
    images?: string[]; // Array of multiple images (optional)
  }
  
  const spas: Spa[] = [
    {
      id: 1,
      name: "The Ritz-Carlton Spa, Orlando, Grande Lakes",
      location: {
        address: "4012 Central Florida Parkway, Orlando, FL 32837",
        area: "Grande Lakes Area"
      },
      phone: "(407) 206-2400",
      description: "Set within the luxurious Ritz-Carlton Orlando, Grande Lakes, this 40,000-square-foot sanctuary offers a comprehensive wellness experience inspired by the healing properties of water and Florida's citrus heritage. The spa features private treatment rooms nestled in garden settings, custom-designed for various therapies that combine traditional techniques with innovative approaches. The design draws from Spanish and Italian influences, with honey-colored stone, natural woods, and elaborate water features creating a Mediterranean ambiance. The signature Grande Lakes Eco-Garden Massage incorporates herbs grown in the resort's organic garden, exemplifying the spa's commitment to sustainability and authentic local experiences.",
      features: [
        "40 treatment rooms including private garden suites",
        "Exclusive outdoor spa pool with private cabanas",
        "Wellness Café offering health-conscious cuisine",
        "Full-service salon for hair, makeup, and nail services",
        "Healing waters vitality pools with massage jets",
        "Aromatic steam rooms and experience showers",
        "Wellness classes including yoga and meditation",
        "Private spa packages for couples and groups"
      ],
      signature: [
        "Grande Lakes Eco-Garden Massage",
        "Citrus Grove Body Treatment",
        "Headwaters Himalayan Salt Stone Massage",
        "Organic Lavender Herbal Poultice Massage"
      ],
      website: "https://www.ritzcarlton.com/en/hotels/mcorz-the-ritz-carlton-orlando-grande-lakes/spa/",
      imageUrl: require("../../assets/images/ritz-carlton/spa-1.jpeg"),
      images: [
        require("../../assets/images/ritz-carlton/spa-1.jpeg"),
        require("../../assets/images/ritz-carlton/spa-2.jpeg"),
        require("../../assets/images/ritz-carlton/spa-3.jpeg")
      ]
    },
    {
      id: 2,
      name: "Waldorf Astoria Spa",
      location: {
        address: "14200 Bonnet Creek Resort Lane, Orlando, FL 32821",
        area: "Bonnet Creek Area"
      },
      phone: "(407) 597-5360",
      description: "The Waldorf Astoria Spa embodies timeless elegance, offering guests a transformative journey in a serene environment that honors the Waldorf Astoria's legacy of exceptional service. This refined sanctuary features marble accents, crystal chandeliers, and a soothing color palette that creates an atmosphere of sophisticated tranquility. Treatment suites are designed for complete privacy, with each therapy beginning with a personalized consultation to address individual wellness needs. The spa's signature Luxury Collection treatments feature the finest botanical products and incorporate specialized techniques from around the world, creating a truly bespoke experience for each guest. The spa also offers family-friendly options including specialized services for children and teens, parent-child treatments, and unique experiences that introduce younger guests to wellness in an age-appropriate setting.",
      features: [
        "Elegantly appointed treatment suites",
        "Tea lounge with custom wellness blends",
        "Zero-gravity relaxation loungers",
        "Eucalyptus-infused steam rooms",
        "Jacuzzi grottos with therapeutic jets",
        "Custom aromatherapy blending bar",
        "Dedicated couples' suites with private relaxation areas",
        "Separate men's and women's thermal experiences",
        "Family spa experiences with age-appropriate treatments",
        "Specialized teen and children's services with gentle products"
      ],
      signature: [
        "Waldorf Signature Massage with custom essential oil blend",
        "Citrus Drench Body Treatment",
        "Diamond Facial Experience",
        "Hamam-inspired Purification Ritual",
        "Parent-Child Bonding Treatments",
        "Teen Glow Facial for Young Skin"
      ],
      website: "https://waldorfastoriaorlando.com/spa/",
      imageUrl: require("../../assets/images/waldorf-astoria/spa-1.jpeg"),
      images: [
        require("../../assets/images/waldorf-astoria/spa-1.jpeg"),
        require("../../assets/images/waldorf-astoria/spa-2.jpeg"),
        require("../../assets/images/waldorf-astoria/spa-3.jpeg")
      ]
    },
    {
      id: 3,
      name: "Four Seasons Resort Orlando Spa",
      location: {
        address: "10100 Dream Tree Boulevard, Lake Buena Vista, FL 32836",
        area: "Golden Oak (Disney Area)"
      },
      phone: "(407) 313-7777",
      description: "The Spa at Four Seasons Resort Orlando creates a sophisticated sanctuary where guests experience world-class treatments infused with a distinct Florida essence. The 13,000-square-foot facility features waterside spa bungalows and couples' suites with private outdoor terraces that overlook the resort's picturesque landscape. The spa's design blends contemporary elegance with natural elements, incorporating light woods, marble, and floor-to-ceiling windows that invite the Florida sunshine. Treatments feature indigenous botanicals and honey from local apiaries, highlighting the spa's commitment to regional authenticity while maintaining Four Seasons' global standard of excellence.",
      features: [
        "Six indoor treatment rooms and two private bungalows",
        "Couples' suite with terrace and whirlpool",
        "Solarium with zero-gravity loungers",
        "Experience showers with chromotherapy",
        "Separate men's and women's relaxation areas",
        "Signature aroma and sound therapy",
        "Full-service salon and makeup studio",
        "Co-ed outdoor relaxation garden"
      ],
      signature: [
        "Healing Honey Treatment featuring local Florida honey",
        "Vichy Shower Hydration Experience",
        "Southern Breeze Massage with warm herbal poultices",
        "La Floridian Hydrafacial"
      ],
      website: "https://www.fourseasons.com/orlando/spa/",
      imageUrl: require("../../assets/images/four-seasons/spa-1.jpeg"),
      images: [
        require("../../assets/images/four-seasons/spa-1.jpeg"),
        require("../../assets/images/four-seasons/spa-2.jpeg"),
        require("../../assets/images/four-seasons/spa-3.jpeg")
      ]
    },
  
    {
      id: 4,
      name: "The Spa at JW Marriott Bonnet Creek",
      location: {
        address: "14900 Chelonia Parkway, Orlando, FL 32821",
        area: "Bonnet Creek Area"
      },
      phone: "(407) 919-6319",
      description: "The Spa at JW Marriott Bonnet Creek offers a contemporary wellness experience guided by holistic principles and cutting-edge therapies. This elegant sanctuary provides a sophisticated retreat where every element is designed to promote deep relaxation and rejuvenation, from the moment guests enter the crystal-infused relaxation lounge. The spa draws inspiration from global healing traditions while incorporating local elements like Florida citrus and honey. The specialized Halotherapy Salt Room features Himalayan salt that purifies the air while guests relax in zero-gravity loungers, offering respiratory benefits and deep relaxation before traditional spa treatments.",
      features: [
        "Halotherapy Salt Room with therapeutic benefits",
        "Private couples' treatment suites",
        "Aromatherapy steam room",
        "Experience showers with varying pressures and temperatures",
        "Vitality pools with massage jets",
        "Dedicated relaxation lounges",
        "Wellness retail boutique featuring luxury products",
        "Outdoor relaxation garden with private seating areas"
      ],
      signature: [
        "Salt Stone Therapeutic Massage",
        "Florida Citrus and Sugar Body Polish",
        "Vitamin C Brightening Facial",
        "Himalayan Salt Therapy sessions"
      ],
      website: "https://www.marriott.com/en-us/hotels/mcojb-jw-marriott-orlando-bonnet-creek-resort-and-spa/experiences/",
      imageUrl: require("../../assets/images/jwmarriott/spa-1.jpeg"),
      images: [
        require("../../assets/images/jwmarriott/spa-1.jpeg"),
        require("../../assets/images/jwmarriott/spa-2.jpeg"),
        require("../../assets/images/jwmarriott/spa-3.jpeg")
      ]
    },
    {
      id: 5,
      name: "Poseidon Spa at Grand Bohemian Hotel",
      location: {
        address: "325 South Orange Avenue, Orlando, FL 32801",
        area: "Downtown Orlando"
      },
      phone: "(407) 313-9000",
      description: "The Poseidon Spa at Grand Bohemian Hotel Orlando reflects the property's artistic heritage, offering a boutique spa experience in the heart of downtown. This intimate sanctuary embodies the same creative spirit found throughout the hotel, with custom artwork, rich fabrics, and an atmosphere that blends classical spa traditions with contemporary luxury. Treatment rooms feature customized lighting and sound that complement each therapy, creating a multi-sensory experience. The spa specializes in treatments that incorporate fine wines and botanicals, drawing inspiration from the hotel's acclaimed art collection and sophisticated aesthetic.",
      features: [
        "Elegantly appointed treatment rooms",
        "Couples' suite with dual massage tables",
        "Custom aromatherapy selection",
        "Artistic relaxation lounge with signature teas",
        "Private changing areas with luxury amenities",
        "Beauty salon services including hair and makeup",
        "Specialized men's treatments and services",
        "Wine-inspired body treatments"
      ],
      signature: [
        "Bohemian Red Wine Massage",
        "Poseidon Signature Facial",
        "Citrus and Honey Body Glow",
        "Traveler's Relief Treatment"
      ],
      website: "https://www.kesslercollection.com/bohemian-orlando/poseidon-spa/",
    imageUrl: require("../../assets/images/poseidon/spa-1.jpeg"),
      images: [
        require("../../assets/images/poseidon/spa-1.jpeg"),
        require("../../assets/images/poseidon/spa-2.jpeg"),
        require("../../assets/images/poseidon/spa-3.jpeg")
      ]
    },
  
  
    {
      id: 6,
      name: "Woodhouse Day Spa",
      location: {
        address: "8060 Via Dellagio Way, Orlando, FL 32819",
        area: "Dr. Phillips Area"
      },
      phone: "(407) 909-1302",
      description: "Woodhouse Day Spa offers a premium day spa experience in the upscale Dr. Phillips neighborhood, providing transformative treatments in an elegantly appointed setting. The spa creates a sensory journey from arrival, with signature scents, soothing music, and thoughtful design elements that immediately induce relaxation. Treatment rooms feature heated tables, plush linens, and customized lighting that enhances each therapy. Woodhouse is known for its meticulous attention to detail, with every aspect of the guest experience carefully choreographed to create a seamless wellness journey that rejuvenates body, mind, and spirit.",
      features: [
        "Luxuriously appointed treatment rooms",
        "Duet Rooms for couples or friends",
        "Relaxation room with signature refreshments",
        "Quiet room with zero-gravity chairs",
        "Sleep room for post-treatment relaxation",
        "Vichy shower room for hydrotherapy treatments",
        "Specialized skin care suites",
        "Manicure and pedicure sanctuary"
      ],
      signature: [
        "The Woodhouse Signature Minkyti Facial",
        "Volcanic Stone Massage",
        "Seaweed Marine Mud Wrap",
        "Four-Handed Massage"
      ],
      website: "https://orlando.woodhousespas.com/",
      imageUrl: require("../../assets/images/woodhouse/spa-1.jpeg"),
      images: [
        require("../../assets/images/woodhouse/spa-1.jpeg"),
        require("../../assets/images/woodhouse/spa-2.jpeg"),
        require("../../assets/images/woodhouse/spa-3.jpeg")
      ]
    },
    {
      id: 7,
      name: "Spa Orlando",
      location: {
        address: "2626 Edgewater Drive, Orlando, FL 32804",
        area: "College Park Area"
      },
      phone: "(407) 740-5290",
      description: "Spa Orlando serves as a sophisticated urban retreat in the charming College Park neighborhood, offering a comprehensive menu of treatments in a stylish, contemporary environment. The spa's design creates a sense of tranquility amidst the city, with clean lines, natural materials, and a calming color palette that helps guests transition from the outside world. Treatment rooms provide private sanctuaries where skilled therapists deliver personalized services using premium products. The spa emphasizes customization, with each treatment adapted to address individual needs and preferences, creating a bespoke experience for every client.",
      features: [
        "Modern treatment rooms with customized comfort controls",
        "Couples' treatment room with dual shower",
        "Relaxation lounge with complimentary refreshments",
        "Private changing and shower facilities",
        "Full-service beauty salon",
        "Specialized treatment rooms for body wraps",
        "Dedicated facial suites with advanced technology",
        "Outdoor relaxation garden"
      ],
      signature: [
        "Urban Escape Massage",
        "College Park Signature Facial",
        "Detoxifying Body Treatment",
        "Seasonal Botanical Treatments"
      ],
      website: "https://thespaorlando.com",
      imageUrl: require("../../assets/images/spa-orlando/spa-1.jpeg"),
      images: [
        require("../../assets/images/spa-orlando/spa-1.jpeg"),
        require("../../assets/images/spa-orlando/spa-2.jpeg")
      ]
    },
    {
      id: 8,
      name: "The Salt Room",
      location: {
        address: "1804 North Mills Avenue, Orlando, FL 32803",
        area: "Mills 50 District"
      },
      phone: "(407) 965-3065",
      description: "The Salt Room offers a unique wellness experience centered around halotherapy, or salt therapy, in a specialized environment built to recreate the microclimate of natural salt caves. The facility features rooms where walls, floors, and ceilings are lined with pharmaceutical-grade salt, creating a therapeutic atmosphere that promotes respiratory health and overall wellness. During sessions, a halogenerator grinds salt into microscopic particles that are dispersed into the air, allowing guests to effortlessly absorb their benefits while relaxing in zero-gravity loungers. Beyond the salt rooms, the facility offers traditional massage and skin care treatments that complement the benefits of halotherapy.",
      features: [
        "Adult salt therapy room lined with Himalayan salt",
        "Children's salt room with play area",
        "Private salt therapy rooms for individuals or couples",
        "Massage treatment rooms with customized comfort",
        "Infrared sauna with chromotherapy",
        "Relaxation lounge with salt lamps",
        "Specialized respiratory treatments",
        "Retail area featuring salt-based wellness products"
      ],
      signature: [
        "Salt Room Halotherapy Sessions",
        "Salt Room Massage",
        "Salt Facial Treatments",
        "Infrared Sauna with Salt Therapy"
      ],
      website: "https://www.saltroomorlando.com/",
      imageUrl: require("../../assets/images/salt-room/spa-1.jpeg"),
      images: [
        require("../../assets/images/salt-room/spa-1.jpeg"),
        require("../../assets/images/salt-room/spa-2.jpeg"),
        require("../../assets/images/salt-room/spa-3.jpeg")
      ]
    },
  
    {
      id: 9,
      name: "Mokara Spa at Omni Orlando Resort",
      location: {
        address: "1500 Masters Boulevard, ChampionsGate, FL 33896",
        area: "ChampionsGate Area"
      },
      phone: "(407) 390-6664",
      description: "Mokara Spa at Omni Orlando Resort offers a comprehensive wellness experience in the prestigious ChampionsGate community, featuring treatments designed to restore balance and vitality. The spa's elegant design incorporates natural stone, rich wood tones, and subtle water features that create a sense of tranquility and connection to nature. Treatment rooms provide private sanctuaries where therapists deliver services that blend traditional techniques with modern innovations. The spa's approach emphasizes holistic wellness, with therapies that address physical, mental, and emotional well-being in a setting of understated luxury.",
      features: [
        "Spacious treatment rooms with custom lighting",
        "Couples' suites with private relaxation areas",
        "Aromatic steam rooms with essential oils",
        "Whirlpool therapy tubs",
        "Experience showers with varying settings",
        "Men's and women's relaxation lounges",
        "Spa terrace with cabanas",
        "Full-service salon for hair and beauty services"
      ],
      signature: [
        "Mokara Signature Massage Ritual",
        "Golfer's Performance Massage",
        "Citrus Drench Body Treatment",
        "Advanced Anti-Aging Facial"
      ],
      website: "https://www.omnihotels.com/hotels/orlando-championsgate/spa",
      imageUrl: require("../../assets/images/mokara/spa-1.jpeg"),
      images: [
        require("../../assets/images/mokara/spa-1.jpeg"),
        require("../../assets/images/mokara/spa-2.jpeg"),
        require("../../assets/images/mokara/spa-3.jpeg")
      ]
    },
  
    {
      id: 10,
      name: "Eforea Spa at Hilton Orlando",
      location: {
        address: "6001 Destination Parkway, Orlando, FL 32819",
        area: "International Drive Area"
      },
      phone: "(407) 313-4300",
      description: "EFOREA SPA at Hilton Orlando provides a contemporary wellness retreat in the heart of Orlando's convention and entertainment district, offering a comprehensive menu of treatments designed for both leisure and business travelers. The spa's design creates a modern sanctuary with clean lines, natural materials, and a soothing color palette that helps guests escape the excitement of surrounding attractions. Treatment rooms feature adjustable lighting, temperature controls, and sound systems that can be customized for each guest's preferences. The spa specializes in efficiency-focused treatments that deliver maximum results in minimal time, perfect for busy travelers, alongside more indulgent experiences for those seeking deeper relaxation.",
      features: [
        "Modern treatment rooms with custom comfort controls",
        "Couples' suite with dual treatment tables",
        "Relaxation lounge with refreshment bar",
        "Steam rooms and experience showers",
        "Outdoor relaxation area connected to the resort pool",
        "Full-service beauty salon",
        "Express treatment menu for time-conscious guests",
        "Wellness retail boutique"
      ],
      signature: [
        "Florida Citrus Body Treatment",
        "Convention Recovery Massage",
        "Traveler's Relief Foot Therapy",
        "Gentleman's Facial"
      ],
      website: "https://thehiltonorlando.com/discover/spa-and-fitness/",
      imageUrl: require("../../assets/images/eforea/spa-1.jpeg"),  
      images: [
        require("../../assets/images/eforea/spa-1.jpeg"),
        require("../../assets/images/eforea/spa-2.jpeg"),
        require("../../assets/images/eforea/spa-3.jpeg")
      ]
    },
  
    {
      id: 11,
      name: "Disney's Grand Floridian Spa",
      location: {
        address: "4401 Floridian Way, Lake Buena Vista, FL 32830",
        area: "Disney Area"
      },
      phone: "(407) 939-3417",
      description: "The elegant Grand Floridian Spa at Walt Disney World Resort offers a Victorian-inspired wellness retreat where guests can experience exceptional treatments in a refined setting. This luxurious sanctuary features 15 treatment rooms, including a couple's suite with private jacuzzi, where trained professionals deliver personalized services. The spa's serene ambiance incorporates classic Victorian décor with subtle Disney touches, featuring high ceilings, marble accents, and plush furnishings. Signature treatments incorporate premium products and specialized techniques designed to rejuvenate guests during their Disney vacation.",
      features: [
        "15 elegantly appointed treatment rooms",
        "Couple's suite with whirlpool tub",
        "Victorian-themed relaxation lounges",
        "Specialized wellness journeys",
        "Steam room with aromatherapy",
        "Rainfall showers with luxury amenities",
        "Full-service beauty salon",
        "Specialized bridal services"
      ],
      signature: [
        "Grand Floridian Signature Massage",
        "Citrus Grove Body Treatment",
        "Disney Character Manicures for Children",
        "Wedding Day Spa Packages"
      ],
      website: "https://disneyworld.disney.go.com/spas/grand-floridian-resort-and-spa/the-grand-floridian-spa/",
      imageUrl: require("../../assets/images/grand-floridian/spa-1.jpeg"),
      images: [
        require("../../assets/images/grand-floridian/spa-1.jpeg"),
        require("../../assets/images/grand-floridian/spa-2.jpeg"),
        require("../../assets/images/grand-floridian/spa-3.jpeg")
      ]
    },
  
    {
      id: 12,
      name: "The Spa at Caribe Royale",
      location: {
        address: "8101 World Center Drive, Orlando, FL 32821",
        area: "Lake Buena Vista Area (Disney)"
      },
      phone: "(407) 238-8000",
      description: "The Spa at Caribe Royale provides a tropical-inspired wellness retreat within this expansive all-suite resort near Walt Disney World. This intimate spa creates a Caribbean ambiance with tropical décor elements, soothing colors, and thoughtful design details that evoke island tranquility. Treatment rooms feature premium amenities and are designed for complete comfort and privacy, where skilled therapists deliver a range of services using quality products. The spa specializes in treatments that incorporate tropical ingredients and techniques inspired by Caribbean wellness traditions, providing an island-inspired escape within the bustling Orlando tourism corridor.",
      features: [
        "Tropically-themed treatment rooms",
        "Couple's suite with dual massage tables",
        "Relaxation lounge with refreshment service",
        "Steam rooms with essential oil infusions",
        "Island-inspired aromatherapy selection",
        "Specialized bridal services and packages",
        "Full beauty salon with professional stylists",
        "Fitness center access included with spa services"
      ],
      signature: [
        "Caribbean Cocoa and Coconut Body Treatment",
        "Island Stone Massage",
        "Tropical Fruit Enzyme Facial",
        "Stress Relief Aromatherapy Massage"
      ],
      website: "https://www.cariberoyale.com/spa-resorts-orlando-florida",
      imageUrl: require("../../assets/images/caribe-royal/spa-1.jpeg"),
      images: [
        require("../../assets/images/caribe-royal/spa-1.jpeg"),
        require("../../assets/images/caribe-royal/spa-2.jpeg"),
        require("../../assets/images/caribe-royal/spa-3.jpeg")
      ]
    },
  
  
  
    {
      id: 13,
      name: "Mandara Spa at Walt Disney World Swan and Dolphin",
      location: {
        address: "1500 Epcot Resorts Blvd, Lake Buena Vista, FL 32830",
        area: "Disney Area"
      },
      phone: "(407) 934-4772",
      description: "Mandara Spa at the Walt Disney World Swan and Dolphin Resort offers an exotic Balinese-inspired retreat within Disney's resort area. This expansive facility creates an authentic Indonesian atmosphere with teak wood accents, stone water features, and traditional Balinese artifacts and artwork. Treatment areas are designed to transport guests to the islands of Indonesia, featuring authentic décor and specialized equipment for traditional Asian therapies. The spa's approach combines time-honored Eastern traditions with modern techniques, delivered by therapists trained in both Western and Balinese methods. Multi-sensory treatments incorporate exotic ingredients and specialized equipment to provide a uniquely immersive wellness experience.",
      features: [
        "25 treatment rooms with Balinese design elements",
        "Traditional Bale Bengong outdoor treatment area",
        "Tea pavilion with signature Indonesian blends",
        "Steam room and sauna with eucalyptus infusion",
        "Private hot tubs in deluxe treatment suites",
        "Specialized Thai massage platform room",
        "Full-service beauty salon with Balinese influences",
        "Meditation garden with water features"
      ],
      signature: [
        "Mandara Four Hand Massage",
        "Balinese Massage with warm oils",
        "Tropical Jasmine Body Polish",
        "Traditional Javanese Lulur treatment"
      ],
      website: "https://www.mandaraspa.com/our-spas/walt-disney-world-swan-and-dolphin/",
      imageUrl: require("../../assets/images/mandara/spa-1.jpeg"),
      images: [
        require("../../assets/images/mandara/spa-1.jpeg"),
        require("../../assets/images/mandara/spa-2.jpeg"),
        require("../../assets/images/mandara/spa-3.jpeg"),
        require("../../assets/images/mandara/spa-4.jpeg")
      ]
    },
    
    {
      id: 14,
      name: "Relâche Spa at Gaylord Palms Resort",
      location: {
        address: "6000 W Osceola Pkwy, Kissimmee, FL 34746",
        area: "Disney Area"
      },
      phone: "(407) 586-4772",
      description: "Relâche Spa at Gaylord Palms Resort offers a sophisticated wellness sanctuary surrounded by the resort's stunning glass atriums and lush landscapes. This elegant spa creates a relaxing environment that combines Florida's natural beauty with luxury amenities. Treatment rooms feature premium comforts and soothing design elements, where expert therapists deliver a variety of services tailored to each guest's needs. The spa's design incorporates natural materials, soft lighting, and subtle water features that create a peaceful retreat from the excitement of nearby attractions. Services range from quick revitalizing treatments to comprehensive wellness experiences, all delivered with exceptional attention to detail. The spa's approach emphasizes holistic wellbeing through treatments that restore both body and mind.",
      features: [
        "Elegantly appointed treatment rooms with Florida-inspired elements",
        "Dedicated couples' suites for shared experiences",
        "Eucalyptus steam room and sauna",
        "Relaxation lounge with refreshment service",
        "Specialty fitness classes and wellness activities",
        "Full-service salon offering hair and beauty services",
        "Private spa courtyard with reflection pool",
        "Resort pool access included with spa services"
      ],
      signature: [
        "Relâche Signature Massage",
        "Everglades Stone Therapy",
        "Key Lime Refresher Facial",
        "Cypress Citrus Body Treatment"
      ],
      website: "https://www.marriott.com/en-us/hotels/mcogp-gaylord-palms-resort-and-convention-center/experiences/spa/",
      imageUrl: require("../../assets/images/relache/spa-1.jpeg"),
      images: [
        require("../../assets/images/relache/spa-1.jpeg"), 
        require("../../assets/images/relache/spa-2.jpeg"),
        require("../../assets/images/relache/spa-3.jpeg")
      ]
    },
    
    {
      id: 15,
      name: "The Spa at Alfond Inn",
      location: {
        address: "300 E New England Ave, Winter Park, FL 32789",
        area: "Winter Park Area"
      },
      phone: "(407) 998-8090",
      description: "The Spa at Alfond Inn offers a boutique wellness experience in Winter Park's premier luxury hotel, combining sophisticated design with personalized treatments. This elegant sanctuary creates an intimate retreat characterized by its attention to detail and commitment to personalized service. Treatment rooms feature premium amenities and are designed for complete comfort, where skilled therapists deliver curated experiences using luxurious products. The spa's approach emphasizes quality over quantity, with each treatment carefully tailored to individual needs in a serene setting that reflects the artistic heritage of Winter Park and the cultural significance of the Alfond Inn.",
      features: [
        "Elegantly appointed treatment rooms",
        "Couple's suite for shared experiences",
        "Relaxation lounge with signature refreshments",
        "Steam room with aromatherapy",
        "Full-service salon for hair and beauty services",
        "Private changing facilities with luxury amenities",
        "Specialized treatment areas for body therapies",
        "Art-inspired relaxation spaces reflecting the hotel's collection"
      ],
      signature: [
        "Alfond Signature Massage",
        "Winter Park Revival Facial",
        "Art Collector's Retreat Package",
        "Botanical Body Treatment"
      ],
      website: "https://thealfondinn.com/the-spa",
      imageUrl: require("../../assets/images/alfond/spa-1.jpeg"),
      images: [
        require("../../assets/images/alfond/spa-1.jpeg"),
        require("../../assets/images/alfond/spa-2.jpg"),
        require("../../assets/images/alfond/spa-3.jpeg")
      ]
    },
  
    {
      id: 16,
      name: "Blue Harmony Spa",
      location: {
        address: "14651 Chelonia Pkwy, Orlando, FL 32821",
        area: "Disney Area"
      },
      phone: "(407) 390-2300",
      description: "Blue Harmony Spa at the Wyndham Grand Orlando Resort offers a serene retreat inspired by the restorative properties of water and the rich natural surroundings of Bonnet Creek. This elegant spa creates a tranquil environment with soothing blue tones, gentle water features, and thoughtful design that evokes a sense of calm and renewal. Treatment rooms are designed for complete comfort and privacy, where skilled therapists deliver a range of personalized services. The spa's approach emphasizes holistic wellness through treatments that balance both body and mind, utilizing premium products and innovative techniques. Its location within the Wyndham Grand Orlando Resort Bonnet Creek provides convenient access for resort guests while also welcoming outside visitors seeking a peaceful escape.",
      features: [
        "Elegantly appointed treatment rooms with water-inspired elements",
        "Couples' suite for shared spa experiences",
        "Relaxation lounge with complimentary refreshments",
        "Steam room and sauna facilities",
        "Private outdoor relaxation areas",
        "Full-service beauty salon",
        "Specialty wellness packages",
        "Resort pool access with spa services"
      ],
      signature: [
        "Blue Harmony Signature Massage",
        "Bonnet Creek Stone Therapy",
        "Hydrating Citrus Facial",
        "Tropical Sugar Glow Body Treatment"
      ],
      website: "https://www.wyndhamgrandorlando.com/spa",
      imageUrl: require("../../assets/images/blue-harmony/spa-1.jpeg"),
      images: [
        require("../../assets/images/blue-harmony/spa-1.jpeg"),
        require("../../assets/images/blue-harmony/spa-2.jpeg"),
        require("../../assets/images/blue-harmony/spa-3.jpeg")
      ]
    },
  
    {
      id: 17,
      name: "Reflections Spa & Salon",
      location: {
        address: "8701 World Center Dr, Orlando, FL 32821",
        area: "Disney Area"
      },
      phone: "(407) 238-8820",
      description: "Reflections Spa & Salon at Lake Buena Vista Resort Village & Spa offers a luxurious retreat within this Mediterranean-inspired resort near Orlando's major attractions. This full-service spa creates a serene environment with elegant décor, soft lighting, and tranquil design elements that provide a peaceful escape from the bustling theme parks. Treatment rooms feature premium amenities and are designed for optimal comfort and privacy, where skilled therapists deliver a comprehensive range of services. The spa's focus is on personalized experiences that restore both body and mind, with treatments ranging from quick revitalizing services to comprehensive packages. Its convenient location makes it an ideal retreat for both resort guests and visitors looking to enhance their Orlando vacation with moments of relaxation and renewal.",
      features: [
        "Elegantly appointed treatment rooms",
        "Couples' suite for shared experiences",
        "Relaxation lounge with refreshment service",
        "Steam room and sauna facilities",
        "Full-service beauty salon with bridal services",
        "Nail care studio with premium services",
        "Specialty spa packages for all occasions",
        "Complimentary use of resort pool with spa services"
      ],
      signature: [
        "Reflections Signature Massage",
        "Mediterranean Sea Salt Scrub",
        "Anti-Aging Collagen Facial",
        "Ultimate Spa Day Package"
      ],
      website: "https://www.lbvorlandoresort.com/our-resort/reflections-spa-salon",
      imageUrl: require("../../assets/images/reflections/spa-1.jpeg"),
      images: [
        require("../../assets/images/reflections/spa-1.jpeg"),
        require("../../assets/images/reflections/spa-2.jpeg"),
        require("../../assets/images/reflections/spa-3.jpeg")
      ]
    },
  
    {
      id: 18,
      name: "The Spa at ette hotel",
      location: {
        address: "3001 Osceola Pkwy, Kissimmee, FL 34747",
        area: "Disney Area"
      },
      phone: "(407) 288-6988",
      description: "The Spa at ette hotel offers a contemporary wellness sanctuary within this luxury boutique hotel near Orlando's major attractions. This sophisticated spa creates a serene environment with minimalist design, natural materials, and thoughtful details that promote tranquility and mindfulness. Treatment spaces are designed with meticulous attention to comfort and privacy, featuring premium amenities and state-of-the-art equipment. The spa's approach centers on personalized wellness journeys that harmonize body, mind, and spirit through a carefully curated selection of treatments. Services blend cutting-edge techniques with time-honored practices, delivered by highly skilled therapists. With its intimate setting and bespoke experiences, the spa provides an exclusive retreat for guests seeking refined relaxation and renewal in Orlando's tourism corridor.",
      features: [
        "Elegantly designed treatment rooms with minimalist aesthetic",
        "Couples' wellness suite for shared experiences",
        "Tranquility lounge with organic refreshments",
        "Advanced skincare technology and equipment",
        "Signature wellness rituals with plant-based products",
        "Customized treatment sequences for each guest",
        "Mindfulness and meditation programming",
        "Curated retail collection of premium wellness products"
      ],
      signature: [
        "ette Signature Wellness Journey",
        "Botanical Bliss Body Treatment",
        "Advanced LED Therapy Facial",
        "Mindful Couples Retreat"
      ],
      website: "https://spaattheette.com",
      imageUrl: require("../../assets/images/ette/spa-1.jpeg"),
      images: [
        require("../../assets/images/ette/spa-1.jpeg"),
        require("../../assets/images/ette/spa-2.jpeg"),
        require("../../assets/images/ette/spa-3.jpeg")
      ]
    },
  
    {
      id: 19,
      name: "Serenity Spa by Westgate",
      location: {
        address: "10000 Turkey Lake Rd, Orlando, FL 32819",
        area: "International Drive Area"
      },
      phone: "(407) 992-7037",
      description: "Serenity Spa by Westgate at Westgate Lakes Resort & Spa offers a tranquil sanctuary amidst this expansive vacation ownership property near Orlando's major attractions. This full-service spa creates a peaceful environment with warm earth tones, natural materials, and thoughtful design elements that enhance relaxation and renewal. Treatment spaces are designed for guest comfort and privacy, where skilled therapists deliver a comprehensive range of services. The spa focuses on holistic wellness experiences that restore both body and mind, with options ranging from quick revitalizing treatments to indulgent spa day packages. As part of the Westgate resort experience, the spa combines accessibility with premium quality, making luxurious spa services available to both resort guests and outside visitors seeking respite from theme park excitement.",
      features: [
        "Thoughtfully appointed treatment rooms",
        "Couples' suites for shared experiences",
        "Relaxation lounge with refreshment service",
        "Steam room and sauna facilities",
        "Full-service beauty salon with wedding services",
        "Nail care studio with premium services",
        "Specialty spa packages for families and groups",
        "Access to resort pool and fitness facilities"
      ],
      signature: [
        "Westgate Signature Massage",
        "Serenity Stone Therapy",
        "Marine Mineral Facial",
        "Tropical Paradise Body Treatment"
      ],
      website: "https://www.westgateresorts.com/hotels/florida/orlando/westgate-lakes-resort/spa-and-fitness/",
      imageUrl: require("../../assets/images/serenity/spa-1.jpeg"),  
      images: [
        require("../../assets/images/serenity/spa-1.jpeg"),
        require("../../assets/images/serenity/spa-2.jpeg"),
        require("../../assets/images/serenity/spa-3.jpeg")
      ]
    },
  
    {
      id: 20,
      name: "The Spa at Hyatt Regency Orlando",
      location: {
        address: "9801 International Drive, Orlando, FL 32819",
        area: "International Drive Area"
      },
      phone: "(407) 284-1234",
      description: "The Spa at Hyatt Regency Orlando offers a sophisticated wellness sanctuary in the heart of Orlando's convention district, providing an extensive menu of treatments designed for both business and leisure travelers. This expansive spa features thoughtfully designed spaces that create an atmosphere of refined tranquility with elegant design elements, soothing color palettes, and premium finishes throughout. Treatment rooms incorporate advanced comfort systems and specialized equipment, enabling therapists to deliver personalized services that address individual needs. The spa's comprehensive approach to wellness includes therapeutic water experiences, advanced skincare, and innovative body treatments that can be tailored to accommodate varying timeframes, from express services for busy convention attendees to indulgent rituals for those seeking deeper relaxation.",
      features: [
        "Elegantly appointed treatment rooms with climate control",
        "Couples' suites with private relaxation area",
        "Hydrotherapy experiences including steam room and sauna",
        "Vitality pools with therapeutic jets",
        "Outdoor relaxation terrace with private cabanas",
        "Full-service salon with beauty and grooming services",
        "Specialized express treatments for convention guests",
        "Premium retail boutique featuring luxury skincare"
      ],
      signature: [
        "Hyatt Signature Massage",
        "Rejuvenating Hydrafacial",
        "Tension Relief Body Treatment",
        "Executive Stress Recovery Package"
      ],
      website: "https://www.hyatt.com/hyatt-regency/en-US/mcoro-hyatt-regency-orlando/spa",
      imageUrl: require("../../assets/images/hyatt/spa-1.jpeg"),
      images: [
        require("../../assets/images/hyatt/spa-1.jpeg"),
        require("../../assets/images/hyatt/spa-2.jpeg"),
        require("../../assets/images/hyatt/spa-3.jpeg")
      ]
    },
  
    {
      id: 21,
      name: "The Spa at Rosen Centre",
      location: {
        address: "9840 International Drive, Orlando, FL 32819",
        area: "International Drive Area"
      },
      phone: "(407) 996-2229",
      description: "The Spa at Rosen Centre provides an elegant sanctuary within this premier convention hotel, offering a carefully curated selection of treatments designed to rejuvenate both leisure and business travelers. This sophisticated spa creates a serene environment with contemporary design elements, soothing neutral tones, and subtle lighting that instantly transports guests away from the bustle of International Drive. Treatment rooms are thoughtfully appointed with premium linens, advanced equipment, and customizable comfort settings to enhance each therapy. The spa specializes in efficient yet effective services that can be tailored to accommodate varying schedules, making it particularly appealing to convention attendees and business travelers while still offering indulgent experiences for those with more time to spend.",
      features: [
        "Elegantly designed treatment rooms",
        "Couples' suite for shared experiences",
        "Relaxation lounge with refreshment service",
        "Full-service hair and nail salon",
        "Private men's and women's lounges",
        "Steam room and shower facilities",
        "Express treatment menu for time-conscious guests",
        "Bridal and special occasion services"
      ],
      signature: [
        "Rosen Signature Massage",
        "Executive Stress Relief Treatment",
        "Advanced Hydrating Facial",
        "Hot Stone Therapy Massage"
      ],
      website: "https://spaatrosencentre.com",
      imageUrl: require("../../assets/images/rosen-center/spa-1.jpeg"),
      images: [
        require("../../assets/images/rosen-center/spa-1.jpeg"),
        require("../../assets/images/rosen-center/spa-2.jpeg"),
        require("../../assets/images/rosen-center/spa-3.jpeg")
      ]
    }
  ];
  
  export default spas;
  
  // Function to get all spas
  export const getAllSpas = () => {
    return spas;
  };
  
  // Function to get a spa by ID
  export const getSpaById = (id: number) => {
    return spas.find(spa => spa.id === id);
  };
  
  // Function to get spas by area
  export const getSpasByArea = (area: string) => {
    return spas.filter(spa => spa.location.area.includes(area));
  };
  
  // Function to get featured spas (here we're just taking the top 4)
  export const getFeaturedSpas = () => {
    return spas.slice(0, 4);
  };