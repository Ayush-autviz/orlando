export interface Amenity {
  name: string;
  description: string;
}

export interface RoomType {
  name: string;
  description: string;
  features: string[];
}

export interface DiningOption {
  name: string;
  description: string;
  cuisine?: string;
  hours?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface LocationInfo {
  address: string;
  neighborhood: string;
  distanceToAttractions: {
    [key: string]: string;
  };
}

export interface CheckInOut {
  checkInTime: string;
  checkOutTime: string;
  policies: string[];
}

export interface ContactInformation {
  phone: string;
  email?: string;
  website?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
}

export interface HotelDetails {
  name: string;
  description: string;
  longDescription?: string;
  history?: string;
  location: LocationInfo;
  amenities: Amenity[];
  roomTypes: RoomType[];
  diningOptions?: DiningOption[];
  highlights?: string[];
  tips?: string[];
  bestTimeToVisit?: string;
  transportationOptions?: string[];
  nearbyAttractions?: string[];
  faq?: FAQ[];
  checkInOut: CheckInOut;
  contactInformation: ContactInformation;
  seoMetadata: SEOMetadata;
}