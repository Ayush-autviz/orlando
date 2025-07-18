// Hotel types and interfaces for React Native app
// Based on the web implementation's ConsolidatedHotel interface

export interface Hotel {
  id: number;
  name: string;
  category: string;
  subcategory: string; // luxury, theme-park, budget-friendly, resorts, villas, business
  neighborhood: string;
  description: string;
  address?: string;
  price?: string;
  imageUrl?: string;
  website?: string;
  amenities?: string[];
  perks?: string;
  rating?: number;
  tags?: string[];
}

// Filter types for the hotels screen
export type HotelFilterType = 'all' | 'luxury' | 'by-location';

export interface HotelFilter {
  id: HotelFilterType;
  name: string;
  description?: string;
}

// Location mapping for filtering hotels by location
export interface LocationMapping {
  [key: string]: string[];
}

// Props for hotel-related components
export interface HotelCardProps {
  hotel: Hotel;
  onPress?: (hotel: Hotel) => void;
  onWebsitePress?: (hotel: Hotel) => void;
}

export interface HotelDetailModalProps {
  hotel: Hotel | null;
  visible: boolean;
  onClose: () => void;
  onWebsitePress?: (hotel: Hotel) => void;
}

export interface HotelListProps {
  hotels: Hotel[];
  onHotelPress?: (hotel: Hotel) => void;
  onWebsitePress?: (hotel: Hotel) => void;
}

// Navigation types for hotel screens
export interface HotelDetailScreenParams {
  hotel: Hotel;
}

export interface WebViewScreenParams {
  url: string;
  title?: string;
}
