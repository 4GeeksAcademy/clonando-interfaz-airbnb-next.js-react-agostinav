export interface ListingImage {
  src: string;
  alt: string;
}

export interface Host {
  name: string;
  avatar: ListingImage;
  yearsHosting: number;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Amenity {
  id: string;
  label: string;
  icon: string;
}

export interface Listing {
  id: string;
  title: string;
  location: string;
  categoryId: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  images: ListingImage[];
  description: string;
  host: Host;
  amenities: Amenity[];
  maxGuests: number;
}