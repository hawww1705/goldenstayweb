export type RoomType = 'Tipe A' | 'Tipe B' | 'Tipe C' | 'Tipe D' | 'Tipe E';
export type RoomStatus = 'Available' | 'Occupied' | 'Maintenance';

export interface Room {
  id: string;
  roomNumber: string;
  floor: number;
  type: RoomType;
  monthlyPrice: number;
  dailyPrice?: number;
  deposit: number;
  size: string;
  bathroom: 'Dalam' | 'Luar';
  facilities: string[];
  images: string[];
  description: string;
  status: RoomStatus;
}

export interface PropertyBranding {
  propertyName: string;
  tagline: string;
  description: string;
  logoUrl?: string;
  address: string;
  city: string;
  whatsapp: string;
  email: string;
  instagram: string;
  googleMapsEmbedUrl: string;
}
