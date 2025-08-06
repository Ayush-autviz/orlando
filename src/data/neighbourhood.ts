

// Define neighborhood types and interfaces

export const NEIGHBORHOODS= [
    {
      id: "winter-park",
      name: "Winter Park",
      tagline: "Charming, Historic and Cultural",
      description: "An upscale suburb known for brick streets, historic homes, a picturesque chain of lakes, and Park Avenue's chic boutiques and sidewalk cafes.",
      longDescription: "Winter Park offers a sophisticated escape from the theme parks with its European-inspired charm, cultural institutions, and oak-canopied streets. Originally established as a winter retreat for wealthy Northerners in the late 19th century, the neighborhood retains its elegant architecture and refined atmosphere. The heart of Winter Park is Park Avenue, a tree-lined street with over 140 boutiques, restaurants, and cafes where outdoor dining creates a cosmopolitan vibe. Just steps away lies Central Park with its rose garden and frequent outdoor events including art festivals and concerts. The neighborhood is also home to the Charles Hosmer Morse Museum of American Art, which houses the world's most comprehensive collection of works by Louis Comfort Tiffany. Visitors can take scenic boat tours through the interconnected lakes, past magnificent waterfront estates, or browse the Winter Park Farmers' Market held every Saturday morning in a historic train depot. Rollins College, a prestigious liberal arts school, adds a vibrant educational presence with its Spanish Mediterranean architecture and lakefront campus.",
      images: [
        require("../../assets/images/winter-park/WinterPark.jpeg"),
        require("../../assets/images/winter-park/WinterPark4.jpeg"),
        require("../../assets/images/winter-park/winterparkvillage.jpeg"),
        require("../../assets/images/winter-park/OrlandoScienceCenter.jpeg")
      ],
      mapLocation: "Winter Park, FL",
      website: "https://www.winterpark.org/welcome-center/",
      tags: ["Historic", "Upscale", "Cultural", "Shopping", "Family Friendly", "Great Restaurants"],
      knownFor: ["Park Avenue boutiques", "Winter Park Village", "Charles Hosmer Morse Museum", "Rollins College"],
      attractions: [
        {
          name: "Park Avenue",
          description: "Tree-lined street with upscale boutiques, sidewalk cafes, and Central Park.",
          type: "shopping",
          link: "https://parkavenuedistrict.com"
        },
        {
          name: "Charles Hosmer Morse Museum of American Art",
          description: "World's most comprehensive collection of Louis Comfort Tiffany works.",
          type: "culture",
          link: "https://www.morsemuseum.org/"
        },
        {
          name: "Winter Park Scenic Boat Tour",
          description: "Hour-long guided cruises through the chain of lakes and canals.",
          type: "outdoors",
          link: "https://www.scenicboattours.com/"
        },
        {
          name: "Winter Park Village",
          description: "Upscale outdoor shopping complex with restaurants, shops, and entertainment.",
          type: "shopping",
          link: "https://www.winterparkvillage.net/"
        },
        {
          name: "Orlando Science Center",
          description: "Interactive science museum with exhibits for all ages and a state-of-the-art planetarium.",
          type: "culture",
          link: "https://www.osc.org/"
        },
        {
          name: "Winter Park Farmers' Market",
          description: "Popular Saturday morning market with local produce, plants, and artisanal goods in a historic train depot.",
          type: "shopping",
          link: "https://cityofwinterpark.org/departments/parks-recreation/farmers-market/"
        }
      ]
    },
  
    {
      id: "mills-50",
      name: "Mills 50",
      tagline: "Diverse, Eclectic and Creative",
      description: "A vibrant district where Vietnamese culture meets artistic edge, featuring colorful murals, global eateries, and independent businesses.",
      longDescription: "Mills 50 stands as one of Orlando's most diverse and culturally rich districts, centered around the intersection of Mills Avenue and Highway 50 (Colonial Drive). The neighborhood is the heart of Orlando's Asian community, particularly Vietnamese culture, which is showcased through dozens of authentic restaurants, bakeries, and markets. Visitors can explore Little Vietnam's markets stocked with exotic ingredients or enjoy traditional pho alongside creative fusion cuisine. Beyond its international influence, Mills 50 embraces artistic expression with colorful murals adorning buildings throughout the district, many created during annual art events. The area's independent spirit thrives in its eclectic mix of vintage shops, record stores, tattoo parlors, and LGBTQ+ friendly establishments. Mills 50's evolution from a commercial corridor to a cultural hotspot exemplifies Orlando's growing creative community. The district hosts frequent community events including food tours, art walks, and music performances at venues like Will's Pub. With its pedestrian-friendly layout and central location, Mills 50 offers an authentic urban experience that contrasts sharply with Orlando's manufactured tourist attractions.",
      images: [
        require("../../assets/images/mills50/Mills502.jpeg"),
        require("../../assets/images/mills50/Mills50.jpeg"),
        require("../../assets/images/mills50/Mills503.jpeg"),
        require("../../assets/images/mills50/Mills504.jpeg"),
        require("../../assets/images/mills50/Mills505.jpeg"),
        require("../../assets/images/mills50/mills506.jpeg")
      ],
      mapLocation: "Mills 50, Orlando, FL",
      website: "https://mills50.org/about/map-of-our-district/",
      tags: ["Asian", "Arts", "Eclectic", "Foodie", "Nightlife", "Bars", "Indy Restaurants", "Full Foodie List"],
      knownFor: ["International Cuisine", "Street art", "Independent businesses", "Diverse culture"],
      attractions: [
        {
          name: "Hawkers Asian Street Food",
          description: "Popular eatery serving street food inspired dishes from across Asia.",
          type: "dining",
          link: "https://eathawkers.com/"
        },
        {
          name: "Will's Pub",
          description: "Beloved local music venue and bar with regular live performances.",
          type: "nightlife",
          link: "https://www.willspub.org/"
        },
        {
          name: "Black Bean Deli",
          description: "Cuban cafe serving traditional dishes in a casual setting.",
          type: "dining",
          link: "https://blackbeandeli.com/"
        },
        {
          name: "The Moderne",
          description: "Upscale cocktail lounge offering craft drinks in a sophisticated setting.",
          type: "nightlife",
          link: "https://www.themodernebar.com/"
        },
        {
          name: "Zymarium Meadery",
          description: "Craft meadery offering unique mead varieties in a contemporary tasting room.",
          type: "nightlife",
          link: "https://www.zymarium.com/"
        },
        {
          name: "Full Foodie List",
          description: "Comprehensive directory of Mills 50's diverse culinary offerings.",
          type: "foodDirectory",
          content: {
            classic: [
              { name: "Anh Hong Restaurant", description: "Vietnamese", address: "1124 E Colonial Dr", phone: "(407) 999-2656", website: "https://anhhongorlando.com" },
              { name: "Vietnam Cuisine", description: "Vietnamese", address: "1224 E Colonial Dr", phone: "(407) 228-7053", website: "https://vietnamcuisineorlando.com" },
              { name: "Black Rooster Taqueria", description: "Mexican", address: "1323 N Mills Ave", phone: "(407) 601-0994", website: "https://www.blackroostertaqueria.com" },
              { name: "Z Asian", description: "Vietnamese", address: "1300 N Mills Ave", phone: "(407) 601-6488", website: "https://www.zasianorlando.com" },
              { name: "The Strand", description: "Modern American", address: "807 N Mills Ave", phone: "(407) 920-7744", website: "https://www.strandorlando.com" },
              { name: "Tori Tori", description: "Japanese gastropub", address: "720 N Mills Ave", phone: "(407) 720-7404", website: "https://www.toritoripub.com" },
              { name: "Shin Jung", description: "Korean barbecue", address: "1638 E Colonial Dr", phone: "(407) 895-7345", website: "https://www.shinjungkorean.com" },
              { name: "Sticky Rice", description: "Laotian", address: "1915 E Colonial Dr", phone: "(321) 800-6176", website: "https://www.stickyriceorlando.com" },
              { name: "Bites & Bubbles", description: "Best rooftop outdoor patio dining", address: "912 N Mills Ave", phone: "(407) 270-5085", website: "https://www.bitesandbubbles.com" },
              { name: "Pig Floyd's Urban Barbakoa", description: "Barbecue, tacos and more", address: "1326 N Mills Ave", phone: "(407) 921-1696", website: "https://pigfloyds.com" },
              { name: "Deli Desires", description: "Sandwiches", address: "715 N Fern Creek Ave", phone: "(407) 735-5905", website: "https://delidesires.com" },
              { name: "Chuan Lu Garden", description: "Chinese Sichuan", address: "1101 E Colonial Dr", phone: "(407) 896-8881", website: "https://www.chuanlugarden.com" },
              { name: "Tasty Wok", description: "Chinese Cantonese", address: "1246 E Colonial Dr", phone: "(407) 896-8988", website: "http://tastywok.net" },
              { name: "Hawkers Asian Street Fare", description: "Malaysian", address: "1103 N Mills Ave", phone: "(407) 237-0606", website: "https://eathawkers.com" },
              { name: "Mamak Asian Street Food", description: "Malaysian", address: "1231 E Colonial Dr", phone: "(407) 270-4688", website: "https://mamakasianorlando.com" }
            ],
            newKids: [
              { name: "Edoboy", description: "Standing sushi bar", address: "728 N Thornton Ave", phone: "(407) 212-7186", website: "https://www.edoboyorlando.com" },
              { name: "Kaya", description: "Modern Filipino", address: "1212 E Colonial Dr", phone: "(407) 601-0256", website: "https://www.kayaorlando.com" },
              { name: "Pho Huong Lan", description: "Vietnamese pho noodle soup", address: "1218 E Colonial Dr", phone: "(407) 228-9242", website: "https://phohuonglan.com" },
              { name: "Pigzza", description: "\"Italianish\"", address: "1050 N Mills Ave", phone: "(407) 704-6683", website: "https://pigzza.com" },
              { name: "Zymarium Meadery", description: "Mead/honey wines", address: "1320 N Mills Ave", phone: "(407) 906-9253", website: "https://www.zymarium.com" },
              { name: "Zaru", description: "Japanese udon", address: "1813 N Mills Ave", phone: "(407) 674-6356", website: "https://www.zaruorlando.com" },
              { name: "Bamita", description: "Vietnamese banh mi sandwiches and coffee", address: "1230 E Colonial Dr", phone: "(407) 412-6192", website: "https://bamitaorlando.com" },
              { name: "Sampaguita Ice Cream", description: "Modern Filipino ice cream", address: "1809 E Winter Park Rd", phone: "(407) 270-7096", website: "https://www.sampaguitaicecream.com" },
              { name: "Cafe Matcha Maiko", description: "Green tea ice cream desserts", address: "1210 E Colonial Dr", phone: "(407) 486-3000", website: "https://matchamaiko.com" },
              { name: "Bakery 1908", description: "Asian bakery and dim sum", address: "1218 E Colonial Dr", phone: "(407) 412-5265", website: "https://bakery1908.com" },
              { name: "The Circle", description: "Vietnamese", address: "1circle Ave", phone: "(407) 203-2872", website: "https://www.thecircleorlando.com" },
              { name: "The Moderne", description: "Modern Asian-inspired gastropub", address: "1319 N Mills Ave", phone: "(407) 534-2786", website: "https://www.themodernebar.com" },
              { name: "Lamp & Shade Craft Kitchen and Cocktails", description: "Asian-inspired tapas and cocktails in a historic building", address: "1336 N Mills Ave", phone: "(321) 417-3477", website: "https://throwsomeshadeorl.com" }
            ],
            markets: [
              { name: "Dong A Market", description: "Asian grocery", address: "816 N Mills Ave", phone: "(407) 898-9227", website: "https://dongamarket.business.site" },
              { name: "Tien Hung Market", description: "Soon to become a food hall concept", address: "1110 E Colonial Dr", phone: "(407) 422-0067", website: "http://tienhungmarket.com" },
              { name: "iFresh Market", description: "Asian supermarket", address: "2415 E Colonial Dr", phone: "(407) 802-6888", website: "https://www.ifreshmarket.com" }
            ],
            coffeeShops: [
              { name: "Haan Coffee", description: "Specialty coffee shop", address: "1234 E Colonial Dr", phone: "(407) 546-1887", website: "https://www.haancoffee.com" }, 
              { name: "Qreate Coffee", description: "Creative coffee experiences", address: "1212 Woodward St Suite 100", phone: "(407) 601-2796", website: "https://www.qreatecoffee.com" },
              { name: "Lineage Coffee", description: "Local coffee roaster", address: "1011 E Colonial Dr", phone: "(407) 205-8096", website: "https://www.lineageroasting.com" },
              { name: "Framework Craft Coffee House", description: "Artisanal coffee and workspace", address: "1050 N Mills Ave", phone: "(407) 543-2410", website: "https://www.frameworkcoffeehouse.com" }
            ]
          }
        }
      ]
    },
    {
      id: "thornton-park",
      name: "Thornton Park",
      tagline: "Sophisticated Urban Living",
      description: "A stylish downtown-adjacent neighborhood with cobblestone streets, mature oak trees, historic bungalows, and a European-inspired atmosphere.",
      longDescription: "Thornton Park represents urban sophistication just east of downtown Orlando, characterized by its brick-lined streets, historic bungalows converted to chic businesses, and fashionable atmosphere. The neighborhood centers around the intersection of Washington and Summerlin, where outdoor cafes, boutiques, and cocktail bars create a distinctly cosmopolitan vibe. Thornton Park stands apart from other Orlando neighborhoods with its distinctly walkable layout and European village feel, complete with weekly farmers markets and neighborhood-wide events. Lake Eola anchors the western edge of the district, where residents and visitors enjoy the iconic swan boats, Sunday farmers market, and amphitheater events against the backdrop of the Orlando skyline. The district enjoys a reputation as one of Orlando's most fashion-forward neighborhoods, with stylish residents frequenting its array of upscale restaurants and boutiques. Its proximity to downtown creates easy access to major venues while maintaining its own intimate, residential character. Historic homes converted to small businesses sit alongside modern residential developments, preserving the neighborhood's charm while embracing urban growth.",
      images: [
        require("../../assets/images/thornton-park/eola-overview.jpg"),
        require("../../assets/images/thornton-park/SundayFarmersMarket.jpeg"),
        require("../../assets/images/thornton-park/ThorntonPark3.jpg"),
        require("../../assets/images/thornton-park/ThorntonPark4.jpeg"),
        require("../../assets/images/thornton-park/ThorntonPark5.jpeg")
      ],
      mapLocation: "Thornton Park, Orlando, FL",
      website: "https://www.thorntonparkdistrict.com",
      tags: ["Upscale", "Walkable", "Urban", "Trendy", "Downtown Orlando", "Lake Eola"],
      knownFor: ["Lake Eola access", "Cobblestone streets", "Wine bars", "Boutique shopping"],
      attractions: [
        {
          name: "Lake Eola Park",
          description: "Signature Orlando park with walking path, swan boats, and weekend markets.",
          type: "outdoors",
          link: "https://www.orlando.gov/Parks-the-Environment/Directory/Lake-Eola-Park"
        },
        {
          name: "Soco Restaurant",
          description: "Contemporary Southern cuisine in an upscale setting.",
          type: "dining",
          link: "https://socothorntonpark.com/"
        },
        {
          name: "Eola Wine Company",
          description: "Upscale wine bar with extensive selection, small plates, and outdoor seating.",
          type: "nightlife",
          link: "https://www.eolawinecompany.com/"
        },
        {
          name: "Burton's Thornton Park",
          description: "Trendy bar and restaurant with craft cocktails and modern American menu.",
          type: "nightlife"
        },
        {
          name: "Oudom Thai & Sushi",
          description: "Upscale Thai and Japanese cuisine with outdoor seating.",
          type: "dining",
          link: "https://www.oudomthaiandsushi.com/"
        },
        {
          name: "Sunday Lake Eola Farmers Market",
          description: "Weekly farmers market featuring local produce, crafts, and food vendors around the beautiful lake.",
          type: "shopping",
          link: "https://www.orlandofarmersmarket.com/"
        },
        {
          name: "Downtown Orlando Bars & Clubs",
          description: "Walking distance to popular downtown nightlife spots like Wall Street Plaza and Church Street.",
          type: "nightlife",
          link: "https://www.downtownorlando.com/Fun/Nightlife"
        }
      ]
    },
  
    {
      id: "winter-garden",
      name: "Winter Garden",
      tagline: "Historic Small Town Charm",
      description: "A revitalized historic town with a charming downtown, West Orange Trail access, farmers market, and family-friendly atmosphere.",
      longDescription: "Winter Garden has transformed from a citrus industry town to a thriving community with one of Central Florida's most successful downtown revitalizations. Centered around Plant Street, the historic downtown district features brick-lined streets, restored early 20th-century buildings, and a clock tower that serves as the community's landmark. The West Orange Trail, a 22-mile rails-to-trails conversion, runs directly through downtown, bringing cyclists and pedestrians to the district's shops and restaurants. The Winter Garden Farmers Market, held every Saturday in the historic pavilion, draws visitors from across the region with its produce, artisanal foods, and handcrafted items. The community embraces its heritage through the Winter Garden Heritage Museum and regular events like music festivals, classic car shows, and holiday celebrations. The Garden Theatre, a restored 1935 movie house, now operates as a performing arts venue with a year-round schedule of plays, concerts, and films. Despite significant growth in surrounding areas, Winter Garden maintains its distinct identity and small-town feel while offering convenient access to Orlando attractions. The combination of historic preservation, outdoor recreation opportunities, and community-focused businesses creates a uniquely appealing destination for visitors seeking authentic Florida charm.",
      images: [
        require("../../assets/images/wintergarden/WinterGarden1.jpeg"),
        require("../../assets/images/wintergarden/WinterGarden2.jpeg"),
        require("../../assets/images/wintergarden/WinterGarden3.jpeg"),
        require("../../assets/images/wintergarden/WinterGarden4.jpeg")
      ],
      mapLocation: "Winter Garden, FL",
      website: "https://downtownwg.com",
      tags: ["Historic", "Family-Friendly", "Outdoor", "Quaint", "Plant Street", "Kid Splash Pad", "Restaurants", "Winter Garden Village"],
      knownFor: ["West Orange Trail", "Historic downtown", "Farmers Market", "Plant Street", "Winter Garden Village"],
      attractions: [
        {
          name: "Plant Street Market",
          description: "Indoor artisan market with Crooked Can Brewing Company and food vendors.",
          type: "shopping",
          link: "https://www.plantstmarket.com/"
        },
        {
          name: "Winter Garden Farmers Market",
          description: "Saturday market with local produce, food, and crafts in the historic pavilion.",
          type: "shopping",
          link: "https://wintergardenfarmersmarket.com/"
        },
        {
          name: "West Orange Trail",
          description: "22-mile paved trail passing through downtown, perfect for cycling and walking.",
          type: "outdoors",
          link: "https://www.orangecountyfl.net/CultureParks/Parks.aspx?m=dtlvw&d=22"
        },
        {
          name: "Garden Theatre",
          description: "Historic 1935 theater hosting plays, concerts, movies, and events.",
          type: "culture",
          link: "https://gardentheatre.org/"
        },
        {
          name: "Winter Garden Village",
          description: "Large outdoor shopping complex with department stores, specialty retailers, and restaurants.",
          type: "shopping",
          link: "https://www.wintergardenvillage.com/"
        }
      ]
    },
  
    {
      id: "baldwin-park",
      name: "Baldwin Park",
      tagline: "Modern Planned Community with Natural Beauty",
      description: "A master-planned community built on former naval base with lakefront parks, trails, village center, and New Urbanist design.",
      longDescription: "Baldwin Park represents one of Orlando's most successful urban redevelopment projects, transforming the former Orlando Naval Training Center into a walkable, mixed-use community. This planned neighborhood combines waterfront living with New Urbanist principles, featuring interconnected streets, diverse housing options, and a village center. Unlike conventional subdivisions, Baldwin Park integrates residential areas with commercial spaces, parks, and natural features to create a cohesive community. At its heart is the Village Center along New Broad Street, offering restaurants, shops, and services in a pedestrian-friendly setting. The neighborhood boasts over 50 miles of walking paths and trails that connect to a chain of lakes, including Lake Baldwin with its beach and dog park. Despite being just minutes from downtown Orlando, Baldwin Park maintains a distinct community feel with neighborhoods designed around pocket parks and tree-lined streets. The architectural style blends Florida vernacular with contemporary elements, creating an aesthetic that feels established despite its relatively recent development. Community events like festivals and outdoor movie nights foster social connections among residents. Baldwin Park demonstrates how thoughtful planning can create an attractive, sustainable neighborhood that balances privacy with community, and urban convenience with natural beauty.",
      images: [
        require("../../assets/images/BaldwinPark/BaldwinPark2.jpeg"),
        require("../../assets/images/BaldwinPark/BaldwinPark4.jpeg"),
        require("../../assets/images/BaldwinPark/BaldwinPark1.jpeg"),
        require("../../assets/images/BaldwinPark/EastEndMarketPlace.jpeg")
      ],
      mapLocation: "Baldwin Park, Orlando, FL",
      website: "https://www.baldwinparknetwork.com",
      tags: ["Planned", "Lakefront", "Near Winter Park", "Walkable", "Biking", "Restaurants", "Parks"],
      knownFor: ["Lake Baldwin", "Village Center", "Walking trails", "Waterfront parks", "East End Market"],
      attractions: [
        {
          name: "Lake Baldwin Park",
          description: "23-acre park with dog beach, fishing pier, and picnic areas.",
          type: "outdoors",
          link: "https://cityofwinterpark.org/departments/parks-recreation/parks-playgrounds/parks/lake-baldwin-park/"
        },
        {
          name: "Village Center",
          description: "Mixed-use district with restaurants, shops and businesses along New Broad Street.",
          type: "shopping"
        },
        {
          name: "East End Market",
          description: "Neighborhood market and food hall with local vendors, restaurants and businesses.",
          type: "shopping",
          link: "https://www.eastendmkt.com/"
        },
        {
          name: "Seito Sushi",
          description: "Upscale Japanese restaurant with traditional and contemporary dishes.",
          type: "dining",
          link: "https://www.seitosushi.com/"
        },
        {
          name: "Blue Jacket Park",
          description: "Former parade grounds transformed into recreational fields and green space.",
          type: "outdoors"
        },
        {
          name: "The Osprey Tavern",
          description: "Upscale American restaurant with seasonal menu and craft cocktails.",
          type: "dining",
          link: "https://www.ospreytavern.com/"
        }
      ]
    },
    {
      id: "downtown-orlando",
      name: "Downtown Orlando",
      tagline: "Urban Core with Historic Charm",
      description: "The city's vibrant center with skyscrapers, historic neighborhoods, cultural venues, sports facilities, and a diverse dining and nightlife scene.",
      longDescription: "Downtown Orlando blends corporate high-rises with historic districts, creating a multifaceted urban core that serves as Central Florida's business, government, and entertainment hub. The downtown skyline is centered around Orange Avenue and Church Street, where modern office towers rise above street-level retail and restaurants. Just blocks away, historic districts like Thornton Park and Lake Cherokee preserve vintage Florida architecture and neighborhood character. Lake Eola Park functions as downtown's central green space, with its iconic swan boats, amphitheater, and weekly farmers market contributing to the urban lifestyle. Cultural institutions include the Dr. Phillips Center for the Performing Arts, which hosts Broadway shows, concerts, and ballet performances in state-of-the-art venues. Downtown caters to diverse interests with world-class dining ranging from fine restaurants to quick-service eateries, plus a dynamic nightlife scene concentrated in the Church Street District. Sports enthusiasts gather at the Kia Center for Orlando Magic basketball games and major concerts. Recent developments have added residential towers that enable true urban living, while transportation options including the free downtown circulator bus, rideshares, and the SunRail commuter train reduce dependence on cars. With ongoing development projects and a growing residential population, downtown Orlando continues to evolve as a vibrant urban center beyond its tourist identity.",
      images: [
        require("../../assets/images/DowntownOrlando/DowntownOrlando1.jpeg"),
        require("../../assets/images/DowntownOrlando/DowntownOrlando.jpg"),
        require("../../assets/images/DowntownOrlando/DowntownOrlando2.jpeg"),
        require("../../assets/images/DowntownOrlando/DowntownOrlando4.jpeg")
      ],
      mapLocation: "Downtown Orlando, FL",
      website: "https://www.downtownorlando.com/Home",
      tags: ["Urban", "Business", "Cultural", "Nightlife", "Full Nightlife List"],
      knownFor: ["Lake Eola Park", "Kia Center", "Church Street", "Dr. Phillips Center", "Sunday Farmer's Market"],
      attractions: [
        {
          name: "Lake Eola Park",
          description: "Downtown's central park with walking path, amphitheater, and swan boat rentals.",
          type: "outdoors",
          link: "https://www.orlando.gov/Parks-the-Environment/Directory/Lake-Eola-Park"
        },
        {
          name: "Dr. Phillips Center for the Performing Arts",
          description: "Modern performing arts center hosting Broadway shows, concerts, and cultural events.",
          type: "culture",
          link: "https://www.drphillipscenter.org/"
        },
        {
          name: "Church Street District",
          description: "Historic entertainment district with restaurants, bars, and nightlife venues.",
          type: "nightlife",
          link: "https://www.churchstreetdistrict.com/"
        },
        {
          name: "Kia Center",
          description: "Downtown arena hosting Orlando Magic basketball games and major concerts.",
          type: "landmark",
          link: "https://www.kiacenter.com/"
        },
        {
          name: "Kres Chophouse",
          description: "Upscale steakhouse in a historic building with classic cocktails.",
          type: "dining",
          link: "https://www.kresrestaurant.com/"
        },
        {
          name: "Sunday Farmers Market at Lake Eola Park",
          description: "Weekly farmers market offering local produce, artisan goods, and food vendors every Sunday.",
          type: "shopping",
          link: "https://www.orlandofarmersmarket.com"
        },
        {
          name: "Full Nightlife List",
          description: "Comprehensive directory of Downtown Orlando's vibrant nightlife scene.",
          type: "nightlifeDirectory",
          content: {
            bars: [
              { name: "Ember", description: "Upscale lounge with craft cocktails", address: "42 W Central Blvd", phone: "(407) 849-0173", website: "https://emberorlando.com/" },
              { name: "The Courtesy", description: "Craft cocktail bar with vintage ambiance", address: "114 N Orange Ave", phone: "(407) 450-2041", website: "https://www.thecourtesybar.com/" },
              { name: "Hanson's Shoe Repair", description: "Speakeasy-style bar (password required)", address: "27 E Pine St", phone: "(407) 476-9446", website: "https://www.hansonsshoerepair.com/" },
              { name: "Mathers Social Gathering", description: "Vintage third-floor speakeasy-style lounge", address: "30 S Magnolia Ave", phone: "(407) 451-2981", website: "https://www.mathersorlando.com/" },
              { name: "Lily's on Church", description: "Relaxed lounge with extensive wine menu", address: "50 E Church St", phone: "(407) 203-8859", website: "https://lilysorlando.com/" },
              { name: "The Robinson Cocktail Room", description: "Elegant cocktail lounge with vintage design", address: "63 N Orange Ave", phone: "(407) 615-8686", website: "https://www.therobinsonroom.com/" },
              { name: "Saddle Up", description: "Country-themed bar with mechanical bull", address: "100 S Orange Ave", phone: "(407) 730-3982", website: "https://www.saddleuporlando.com/" },
              { name: "The Wellborn", description: "Cocktail bar in a historic home with garden", address: "211 N Lucerne Cir E", phone: "(407) 781-4882", website: "https://thewellbornorlando.com/" },
              { name: "The Woods", description: "Intimate whiskey and craft cocktail bar", address: "49 N Orange Ave", phone: "(407) 203-1114", website: "https://www.thewoodsorlando.com/" },
              { name: "Magnolia", description: "Upscale cocktail bar with rooftop views", address: "13 S Magnolia Ave", phone: "(321) 284-8426", website: "https://www.magnoliaorlando.com/" }
            ],
            clubs: [
              { name: "The Beacham", description: "Historic venue hosting DJs and live music", address: "46 N Orange Ave", phone: "(407) 648-8363", website: "https://www.thebeacham.com/" },
              { name: "Tier Nightclub", description: "Multi-level nightclub with EDM focus", address: "20 E Central Blvd", phone: "(407) 317-9129", website: "https://www.tiernightclub.com/" },
              { name: "Celine Orlando", description: "Upscale nightclub and event space", address: "22 S Magnolia Ave", phone: "(407) 801-7005", website: "https://www.celineorlando.com/" },
              { name: "Vyce Lounge", description: "Intimate nightclub with VIP service", address: "46 N Orange Ave", phone: "(407) 318-6968", website: "https://vyceorlando.com/" },
              { name: "Attic Orlando", description: "Nightclub with themed nights and DJ events", address: "68 E Pine St", phone: "(407) 403-1161", website: "https://www.atticorlando.com/" },
              { name: "EVE Orlando", description: "Sophisticated nightclub with dance floor and lounge areas", address: "110 S Orange Ave", phone: "(407) 602-7462", website: "https://www.eveorlando.com/" },
              { name: "Elixir Orlando", description: "DJ venue and event space in historic building", address: "9 W Washington St", phone: "(407) 985-3507", website: "https://www.elixirorlando.com/" }
            ],
            entertainment: [
              { name: "Joysticks Arcade Lounge", description: "Retro arcade games and craft cocktails", address: "69 E Pine St", phone: "(407) 233-3251", website: "https://www.joysticksarcadelounge.com/" },
              { name: "Streetlight Orlando", description: "Comedy venue with nightly shows", address: "69 E Pine St", phone: "(407) 730-3887", website: "https://www.streetlightorlando.com/" },
              { name: "SAK Comedy Lab", description: "Improv comedy theater with nightly performances", address: "29 S Orange Ave", phone: "(407) 648-0001", website: "https://www.sakcomedylab.com/" },
              { name: "Independent Bar", description: "Alternative music venue with themed nights", address: "70 N Orange Ave", phone: "(407) 839-0457", website: "https://www.independentbar.net/" },
              { name: "Tanqueray's", description: "Underground bar with live jazz and R&B", address: "100 S Orange Ave", phone: "(407) 649-8540", website: "https://www.tanqueraysbar.com/" },
              { name: "One80 Skytop Lounge", description: "Rooftop bar with downtown views", address: "400 W Church St", phone: "(407) 730-3670", website: "https://one80skytop.com/" },
              { name: "Aku Aku Tiki Bar", description: "Polynesian-themed cocktail lounge", address: "431 E Central Blvd", phone: "(407) 839-0080", website: "https://akuakutiki.com/" },
              { name: "Cocktails & Screams", description: "Halloween-themed bar open year-round", address: "39 W Pine St", phone: "(407) 476-7678", website: "https://www.cocktailsandscreams.com/" }
            ],
            breweries: [
              { name: "Orange County Brewers", description: "Downtown microbrewery with taproom", address: "131 N Orange Ave", phone: "(407) 914-2831", website: "https://www.ocbrewers.com/" },
              { name: "Persimmon Hollow Brewing Co", description: "Lake Eola brewery with craft beers", address: "227 N Eola Dr", phone: "(407) 270-5380", website: "https://www.persimmonhollowbrewing.com/" },
              { name: "Motorworks Brewing", description: "Award-winning craft brewery with beer garden", address: "131 N Orange Ave", phone: "(407) 723-7424", website: "https://motorworksbrewing.com/" },
              { name: "Sideward Brewing", description: "Neighborhood brewery with indoor/outdoor space", address: "210 N Bumby Ave", phone: "(407) 866-2149", website: "https://www.sidewardbrewing.com/" }
            ]
          }
        }
      ]
    },
    {
      id: "lake-nona",
      name: "Lake Nona",
      tagline: "Modern Smart Community with Innovative Design",
      description: "A forward-thinking, tech-focused planned community featuring innovative healthcare facilities, sport venues, dining, and carefully designed neighborhoods.",
      longDescription: "Lake Nona represents Orlando's vision for the future - a meticulously planned 'smart city' development that seamlessly integrates technology, wellness, education, and sustainability. Located in southeast Orlando near the airport, this 17-square-mile community has rapidly transformed from undeveloped land into a model for innovative urban planning. The area is anchored by Lake Nona Medical City, a healthcare innovation district featuring the UCF College of Medicine, Nemours Children's Hospital, and the VA Medical Center. Lake Nona places strong emphasis on wellness, with a network of trails, community fitness facilities, and an overall design that encourages active lifestyles. The Town Center serves as Lake Nona's commercial and social hub, featuring a growing collection of restaurants, shops, and entertainment options in a pedestrian-friendly setting. The community attracts residents seeking a modern lifestyle with thoughtful amenities, including the USTA National Campus (the nation's largest tennis facility), innovative schools, and well-designed neighborhoods. What sets Lake Nona apart is its focus on technology and innovation, with initiatives like community-wide gigabit internet connectivity, autonomous shuttle testing, and smart home technology integration. While newer than many Orlando neighborhoods, Lake Nona has quickly established itself as a distinctive destination that offers visitors a glimpse into a carefully crafted vision of modern urban living.",
      images: [
        require("../../assets/images/lake-nona/LakeNona.jpeg"),
        require("../../assets/images/lake-nona/LakeNona1.jpeg"),
        require("../../assets/images/lake-nona/LakeNona2.jpeg"),
        require("../../assets/images/lake-nona/LakeNona3.jpeg")
      ],
      mapLocation: "Lake Nona, Orlando, FL",
      website: "https://lakenona.com",
      tags: ["Modern", "Innovative", "Wellness", "Planned"],
      knownFor: ["Medical City", "USTA National Campus", "Town Center", "Boxi Park"],
      attractions: [
        {
          name: "Lake Nona Town Center",
          description: "Modern retail and entertainment district with shops, restaurants, and community events.",
          type: "shopping",
          link: "https://lakenona.com/town-center/"
        },
        {
          name: "USTA National Campus",
          description: "The largest tennis facility in the nation with over 100 courts and training programs.",
          type: "sports",
          link: "https://www.ustanationalcampus.com/"
        },
        {
          name: "Boxi Park",
          description: "Outdoor food and entertainment venue built from repurposed shipping containers.",
          type: "dining",
          link: "https://boxiparklakenona.com/"
        },
        {
          name: "Canvas Restaurant & Market",
          description: "Lakefront modern American restaurant with seasonal menu and local ingredients.",
          type: "dining",
          link: "https://www.canvaslakenona.com/"
        },
        {
          name: "Drive Shack",
          description: "High-tech driving range and entertainment complex with games, food and drinks.",
          type: "entertainment",
          link: "https://www.driveshack.com/locations/orlando/"
        }
      ]
    },
    {
      id: "celebration",
      name: "Celebration",
      tagline: "Disney's Picturesque Planned Community",
      description: "A master-planned community originally developed by Disney, featuring nostalgic architecture, walkable streets, and a storybook small-town atmosphere.",
      longDescription: "Celebration offers visitors a uniquely American experience - a carefully crafted vision of small-town living reimagined for the modern era. Developed by The Walt Disney Company in the 1990s, this master-planned community showcases nostalgic architecture inspired by historic American towns, with homes featuring front porches, picket fences, and classic designs ranging from Victorian to Colonial Revival. The walkable downtown district centers around a scenic lake with a promenade and features restaurants, specialty shops, and entertainment options in a pedestrian-friendly setting. Celebration's thoughtful urban planning incorporates extensive green spaces connected by walking trails, community amenities like pools and sports facilities, and regular community events that foster a strong sense of place. The town is particularly known for its exceptional biking infrastructure, with miles of dedicated bike paths winding through natural preserves, along waterways, and connecting residential areas to downtown. These well-maintained trails make Celebration a favorite destination for cycling enthusiasts of all skill levels, with bike rental options available for visitors. While no longer owned by Disney, the community maintains its distinctive character through strict architectural controls and active community engagement. Visitors can explore Market Street's shops and restaurants, stroll along the waterfront, cycle through scenic trails, or simply admire the picture-perfect neighborhoods that seem transported from another era. During seasonal events like the fall leaf drop (using artificial leaves) and winter 'snowfall' (actually soap flakes), Celebration creates magical experiences that draw visitors from across Central Florida. While sometimes described as a real-life Truman Show set, Celebration offers an intriguing glimpse into a carefully designed vision of American community life.",
      images: [
        require("../../assets/images/Celebration/Celebration3.jpeg"),
        require("../../assets/images/Celebration/Celebration.jpeg"),
        require("../../assets/images/Celebration/Celebration1.jpeg"),
        require("../../assets/images/Celebration/Celebration2.jpeg")
      ],
      mapLocation: "Celebration, FL",
      website: "https://celebration.fl.us/",
      tags: ["Planned", "Scenic", "Small Town", "Family Friendly", "Disney", "Biking"],
      knownFor: ["Downtown lakefront district", "Nostalgic architecture", "Scenic biking trails", "Seasonal events", "Walkable community"],
      attractions: [
        {
          name: "Market Street",
          description: "Downtown shopping and dining district with charming architecture along a scenic lakefront.",
          type: "shopping",
          link: "https://celebrationtowncenter.com/"
        },
        {
          name: "Celebration Golf Club",
          description: "Championship 18-hole golf course designed by Robert Trent Jones Sr. and Jr.",
          type: "sports",
          link: "https://www.celebrationgolf.com/"
        },
        {
          name: "Columbia Restaurant",
          description: "Historic Florida restaurant serving Spanish and Cuban cuisine in an elegant setting.",
          type: "dining",
          link: "https://www.columbiarestaurant.com/celebration"
        },
        {
          name: "Celebration Farmers Market",
          description: "Sunday market featuring fresh produce, artisanal goods, and local vendors.",
          type: "shopping",
          link: "https://celebrationtowncenter.com/events/farmers-market/"
        },
        {
          name: "Celebration Bike Trails",
          description: "Miles of scenic biking trails winding throughout the community with rental options available.",
          type: "outdoors",
          link: "https://celebrationsurrey.com"
        }
      ]
    },
    {
      id: "restaurant-row",
      name: "Restaurant Row",
      tagline: "Culinary Destination for Food Enthusiasts",
      description: "A vibrant dining district along Sand Lake Road featuring upscale restaurants, diverse cuisine options, and Orlando's most concentrated collection of fine dining establishments.",
      longDescription: "Restaurant Row, officially known as Sand Lake Road's Restaurant Row, has earned its reputation as Orlando's premier dining destination. This roughly one-mile stretch of Sand Lake Road between Interstate 4 and Dr. Phillips Boulevard features the highest concentration of upscale restaurants in the Orlando area, making it a genuine culinary hot spot beyond the tourist corridors. The district offers an impressive diversity of cuisines, from classic steakhouses and seafood establishments to authentic international restaurants representing Italian, Spanish, Japanese, Thai, and numerous other global traditions. What distinguishes Restaurant Row is the caliber of dining experiences available - many locations feature award-winning chefs, innovative menus, and sophisticated atmospheres that rival fine dining destinations in much larger cities. The area strikes a balance between catering to tourists from nearby attractions and serving as a beloved destination for Orlando locals celebrating special occasions. Many restaurants feature elegant dining rooms complemented by impressive wine lists and craft cocktail programs. Beyond dining, the area includes select shopping opportunities and easy access to attractions in the Dr. Phillips neighborhood. Restaurant Row continues to evolve with new culinary concepts regularly joining established favorites, maintaining its status as the epicenter of Orlando's sophisticated dining scene and a must-visit destination for serious food enthusiasts.",
      images: [
        require("../../assets/images/restaurant-row/RestaurantRow1.jpeg"),
        require("../../assets/images/restaurant-row/RestaurantRow2.jpeg"),
        require("../../assets/images/restaurant-row/RestaurantRow4.jpeg"),
        require("../../assets/images/restaurant-row/RestaurantRow3.jpeg"),
        require("../../assets/images/restaurant-row/RestaurantRow5.jpeg")
      ],
      mapLocation: "Restaurant Row, Orlando, FL",
      tags: ["Dining", "Upscale", "Diverse", "Culinary", "Full List"],
      knownFor: ["Fine dining", "Steakhouses", "International cuisine", "Special occasion dining"],
      attractions: [
        {
          name: "Christner's Prime Steak & Lobster",
          description: "Family-owned upscale steakhouse with premium dry-aged steaks and extensive wine collection.",
          type: "dining",
          link: "https://christnersprimesteakandlobster.com/"
        },
        {
          name: "Seasons 52",
          description: "Fresh grill and wine bar offering seasonal menu items and an award-winning wine list.",
          type: "dining",
          link: "https://www.seasons52.com/"
        },
        {
          name: "Eddie V's Prime Seafood",
          description: "Luxury seafood restaurant with premium hand-cut steaks and live jazz in the V Lounge.",
          type: "dining",
          link: "https://www.eddiev.com/"
        },
        {
          name: "Rocco's Tacos and Tequila Bar",
          description: "Vibrant Mexican restaurant with over 300 tequilas and authentic Mexican cuisine.",
          type: "dining",
          link: "https://www.roccostacos.com/"
        },
        {
          name: "The Marketplace at Dr. Phillips",
          description: "Shopping center with additional dining options, specialty shops, and services.",
          type: "shopping",
          link: "https://themarketplaceatdrphillips.com/"
        },
        {
          name: "Restaurant Row Complete Directory",
          description: "Comprehensive directory of Restaurant Row's fine dining and culinary offerings.",
          type: "foodDirectory",
          content: {
            classic: [
              { name: "Christner's Prime Steak & Lobster", description: "Upscale steakhouse", address: "729 Lee Rd", phone: "(407) 645-4443", website: "https://christnersprimesteakandlobster.com" },
              { name: "Ruth's Chris Steak House", description: "Upscale steakhouse", address: "7760 W Sand Lake Rd", phone: "(407) 226-3900", website: "https://www.ruthschris.com" },
              { name: "Fleming's Prime Steakhouse", description: "Upscale steakhouse", address: "8030 Via Dellagio Way", phone: "(407) 352-5706", website: "https://www.flemingssteakhouse.com" },
              { name: "Morton's The Steakhouse", description: "Upscale steakhouse", address: "7600 Dr Phillips Blvd", phone: "(407) 248-3485", website: "https://www.mortons.com" },
              { name: "Seasons 52", description: "Seasonal American fare", address: "7700 W Sand Lake Rd", phone: "(407) 354-5212", website: "https://www.seasons52.com" },
              { name: "Eddie V's Prime Seafood", description: "Upscale seafood and steaks", address: "7488 W Sand Lake Rd", phone: "(407) 355-3011", website: "https://www.eddiev.com" },
              { name: "Ocean Prime", description: "Seafood and steaks", address: "7339 W Sand Lake Rd", phone: "(407) 781-4880", website: "https://www.ocean-prime.com" },
              { name: "The Capital Grille", description: "Upscale steakhouse", address: "9101 International Dr", phone: "(407) 370-4392", website: "https://www.thecapitalgrille.com" },
              { name: "Vines Grille & Wine Bar", description: "Steakhouse with live music", address: "7533 W Sand Lake Rd", phone: "(407) 351-1227", website: "https://www.vinesgrille.com" },
              { name: "Chatham's Place", description: "Intimate fine dining", address: "7575 Dr Phillips Blvd", phone: "(407) 345-2992", website: "https://chathamsplace.com" }
            ],
            newKids: [
              { name: "Rocco's Tacos and Tequila Bar", description: "Mexican cuisine and tequila", address: "7468 W Sand Lake Rd", phone: "(407) 226-0550", website: "https://www.roccostacos.com" },
              { name: "Dragonfly Robata Grill", description: "Japanese izakaya", address: "7972 Via Dellagio Way", phone: "(407) 370-3359", website: "https://www.dragonflyrestaurants.com" },
              { name: "Slate", description: "Modern American cuisine", address: "8323 W Sand Lake Rd", phone: "(407) 500-7528", website: "https://www.slateorlando.com" },
              { name: "bartaco", description: "Upscale street food", address: "7600 Dr Phillips Blvd", phone: "(407) 801-8226", website: "https://www.bartaco.com" },
              { name: "Domu Dr Phillips", description: "Ramen and Asian fusion", address: "7600 Dr Phillips Blvd", phone: "(407) 702-2222", website: "https://www.domufl.com" },
              { name: "Pharmacy", description: "Speakeasy restaurant", address: "8060 Via Dellagio Way", phone: "(407) 985-2972", website: "https://www.pharmacyorlando.com" }
            ],
            international: [
              { name: "Seito Sushi", description: "Japanese and sushi", address: "8031 Via Dellagio Way", phone: "(407) 248-8888", website: "https://www.seitosushi.com" },
              { name: "Urbain 40", description: "American brasserie", address: "8000 Via Dellagio Way", phone: "(407) 872-2640", website: "https://www.urbain40.com" },
              { name: "AceFood", description: "Indian cuisine", address: "7535 W Sand Lake Rd", phone: "(407) 627-0094", website: "https://www.acefood.us" },
              { name: "Bosphorous Turkish Cuisine", description: "Turkish cuisine", address: "7600 Dr Phillips Blvd", phone: "(407) 352-6766", website: "https://www.bosphorousrestaurant.com" },
              { name: "Sushi Katana", description: "Japanese and sushi", address: "7637 Turkey Lake Rd", phone: "(407) 203-0801", website: "https://sushikatanaorlando.com" }
            ],
            casual: [
              { name: "The Melting Pot", description: "Fondue restaurant", address: "7549 W Sand Lake Rd", phone: "(407) 903-1100", website: "https://www.meltingpot.com" },
              { name: "Yard House", description: "American cuisine and craft beer", address: "8367 International Dr", phone: "(407) 351-8220", website: "https://www.yardhouse.com" },
              { name: "Big Fin Seafood Kitchen", description: "Seafood", address: "8046 Via Dellagio Way", phone: "(407) 615-8888", website: "https://www.bigfinseafood.com" },
              { name: "Dellagio Pizza Company", description: "Neapolitan pizza", address: "7998 Via Dellagio Way", phone: "(407) 930-1299", website: "https://www.dellagiopizza.com" },
              { name: "Bravo! Italian Kitchen", description: "Italian cuisine", address: "7924 Via Dellagio Way", phone: "(407) 351-5880", website: "https://www.bravoitalian.com" }
            ]
          }
        }
      ]
    }
  ];