export interface CategoryType {
  id: number;
  title: string;
  count: string;
  image: string;
  link: string;
}

export interface AttractionType {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  neighborhood?: string;
  rating: string | number;
  reviewCount: string;
  hours?: string;
  price?: string;
  metaTitle?: string;
  metaDescription?: string;
  link: string;
}

export interface HotelType {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  neighborhood?: string;
  rating: string | number;
  price: number | string;
  hours?: string;
  metaTitle?: string;
  metaDescription?: string;
  link: string;
}

export interface RestaurantType {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  neighborhood?: string;
  rating: string | number;
  location: string;
  priceLevel: string;
  hours?: string;
  price?: string;
  metaTitle?: string;
  metaDescription?: string;
  link: string;
  website?: string; // Added website field for direct links to restaurant websites
}

export interface NightlifeVenueType {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  neighborhood?: string;
  rating: string | number;
  location: string;
  priceLevel: string;
  hours: string;
  price?: string;
  metaTitle?: string;
  metaDescription?: string;
  link: string;
}
