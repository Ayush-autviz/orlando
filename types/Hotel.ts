export interface Hotel {
  id: number;
  name: string;
  category: string;
  subcategory: string; // Required: luxury, theme-park, budget-friendly, etc.
  neighborhood: string;
  description: string;
  address?: string; // Added to handle address field from consolidation script
  price?: string; // Made optional to match hotelDataHandler.ts
  imageUrl?: string; // Made optional to match hotelDataHandler.ts
  website?: string; // Made optional to match hotelDataHandler.ts
  amenities?: string[]; // Made optional to match hotelDataHandler.ts
  perks?: string; // Made optional to match hotelDataHandler.ts
  rating?: number; // Rating property optional as we're phasing out ratings for discovery-focused approach
  tags?: string[]; // Tags for filtering and categorization
}

export interface ConsolidatedHotel extends Hotel {
  source?: 'standard' | 'disney' | 'universal' | 'epic' | 'additional';
}

export interface HotelsByCategory {
  [category: string]: ConsolidatedHotel[];
}