// Disney hotel interface
export interface DisneyHotel {
  name: string;
  category: 'Value' | 'Moderate' | 'Deluxe' | 'Deluxe Villa';
  description: string;
  parkArea: 'Magic Kingdom' | 'Epcot' | 'Hollywood Studios' | 'Animal Kingdom' | 'Disney Springs';
  price_range: string;
  imageUrl: string;
  websiteUrl: string;
  diningOptions: string[];
  amenities: string[];
  transportationOptions: string[];
  roomTypes: string[];
  proximity: {
    magicKingdom: string;
    epcot: string;
    hollywoodStudios: string;
    animalKingdom: string;
    disneySprings: string;
  };
  insiderTips: string[];
}

// Disney hotel dialog interface
export interface DisneyHotelDialog {
  id: string;
  hotel: DisneyHotel;
}

// Disney dining details interface
export interface DisneyDiningDetails {
  name: string;
  description: string;
  location: string;
  cuisine: string;
  priceRange: string;
  mustTryDishes: string[];
  reservationTips: string | ReservationTips;
  bestTimeToVisit: string | BestTimeToVisit;
  diningPlanInfo: string | DiningPlanInfo;
  websiteUrl?: string;
  imageUrl?: string;
  phoneNumber?: string;
}

// Disney dining supplementary interfaces
export interface ReservationTips {
  reservationStrategy?: string;
  bestTimes?: string;
  alternativesIfFullyBooked?: string;
  insiderTips?: string;
  [key: string]: string | undefined;
}

export interface BestTimeToVisit {
  idealTimes?: string;
  seasonalConsiderations?: string;
  specialEvents?: string;
  crowdPatterns?: string;
  [key: string]: string | undefined;
}

export interface DiningPlanInfo {
  currentInfo?: string;
  creditRequirements?: string;
  valueConsiderations?: string;
  [key: string]: string | undefined;
}

// Disney shopping details interface
export interface DisneyShoppingDetails {
  name: string;
  description: string;
  location: string;
  specialtyItems: string[];
  bestTimeToVisit: string;
  exclusiveProducts: string;
  priceRange: string;
  insiderTips: string;
  websiteUrl?: string;
  imageUrl?: string;
}

// Disney entertainment details interface
export interface DisneyEntertainmentDetails {
  name: string;
  description: string;
  location: string;
  type: string;
  duration: string;
  bestTimeToVisit: string;
  suitableFor: string[];
  insiderTips: string;
  websiteUrl?: string;
  imageUrl?: string;
  showTimes?: string[];
}

// Disney attraction details interface
export interface DisneyAttractionDetails {
  name: string;
  description: string;
  location: string;
  thrillLevel: string;
  heightRequirements?: string;
  accessibilityOptions: string[];
  rideType: string;
  bestTimeToVisit: string;
  mustKnowTips: string[];
  lightningLaneAvailable: boolean;
  websiteUrl?: string;
  imageUrl?: string;
  duration?: string;
}

// Disney park interface
export interface DisneyPark {
  name: string;
  description: string;
  openingDate: string;
  lands: Array<{
    name: string;
    description: string;
    attractions: Array<{
      name: string;
      description: string;
      thrillLevel: string;
    }>;
  }>;
  attractions: string[];
  dining: Array<{
    name: string;
    cuisine: string;
    experience: string;
  }>;
  entertainment: string[];
  shopping: string[];
  seasonalEvents: string[];
  insiderTips: string[];
}