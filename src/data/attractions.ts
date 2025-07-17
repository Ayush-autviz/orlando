export interface Attraction {
  id: number;
  name: string;
  category: string;
  neighborhood: string;
  description: string;
  image?: string;
  link?: string;
  hours?: string;
  price?: string;
  rating?: number;
  metaTitle?: string;
  metaDescription?: string;
  lat?: number;
  lng?: number;
  tips?: string[];
  address?: string;
  phone?: string;
}

// Import the complete attractions data from the web
import attractionsJson from './attractions.json';

export const attractionsData: Attraction[] = attractionsJson.map((attraction: any) => ({
  id: attraction.id,
  name: attraction.name,
  category: attraction.category,
  neighborhood: attraction.neighborhood,
  description: attraction.description,
  image: attraction.image?.startsWith('/')
    ? `https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=90`
    : attraction.image || `https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=90`,
  link: attraction.link,
  hours: attraction.hours,
  price: attraction.price,
  rating: attraction.rating,
  lat: attraction.lat,
  lng: attraction.lng,
  metaTitle: attraction.metaTitle,
  metaDescription: attraction.metaDescription,
  address: attraction.address,
  phone: attraction.phone,
  tips: attraction.tips
}));

export const categories = [
  "Unique Attractions",
  "Outdoor Adventures",
  "Cultural/Educational",
  "Dinner Shows"
];

export const getAttractionsByCategory = (category: string): Attraction[] => {
  return attractionsData.filter(attraction => attraction.category === category);
};

export const getAttractionById = (id: number): Attraction | undefined => {
  return attractionsData.find(attraction => attraction.id === id);
};

export const getAttractionByName = (name: string): Attraction | undefined => {
  return attractionsData.find(attraction => 
    attraction.name.toLowerCase() === name.toLowerCase()
  );
};

export const searchAttractions = (query: string): Attraction[] => {
  const lowercaseQuery = query.toLowerCase();
  return attractionsData.filter(attraction =>
    attraction.name.toLowerCase().includes(lowercaseQuery) ||
    attraction.description.toLowerCase().includes(lowercaseQuery) ||
    attraction.category.toLowerCase().includes(lowercaseQuery) ||
    attraction.neighborhood.toLowerCase().includes(lowercaseQuery)
  );
};
