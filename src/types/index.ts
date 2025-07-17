export interface CategoryType {
  id: number;
  title: string;
  count: string;
  image: string;
  link: string;
}

export interface HotelType {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: string;
  location: string;
  amenities: string[];
}

export interface RestaurantType {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  price: string;
  location: string;
}

export interface AttractionType {
  id: number;
  name: string;
  image: string;
  category: string;
  rating: number;
  description: string;
} 