import { Room, PropertyBranding } from '../types';

export const initialBranding: PropertyBranding = {
  propertyName: "Golden Stay 1888",
  tagline: "Hunian Kos Nyaman, Modern & Strategis di Pedurungan Semarang",
  description: "Kos eksklusif dan aman di Jl. Supriyadi No.188 Semarang. Kamar luas (Tipe A s/d E), kamar mandi dalam, AC sejuk, WiFi kencang, dan parkir luas 24 jam.",
  logoUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=150&q=80",
  address: "Jl. Supriyadi No.188, Kalicari, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50198",
  city: "Kota Semarang",
  whatsapp: "087790380766",
  email: "info@goldenstay1888.com",
  instagram: "@golden.stay.188",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1326459506454!2d110.45714009999999!3d-6.993654500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d005672eb7d%3A0x5bd11c7826b60e4b!2sGolden%20Stay!5e0!3m2!1sen!2sid!4v1786425572916!5m2!1sen!2sid"
};

export const initialRooms: Room[] = [
  {
    id: "room-101",
    roomNumber: "101",
    floor: 1,
    type: "Tipe A",
    monthlyPrice: 1500000,
    dailyPrice: 150000,
    deposit: 500000,
    size: "3x3.5 m",
    bathroom: "Luar",
    facilities: ["WiFi Speed 100Mbps", "Kasur Springbed Single", "Lemari Pakaian", "Meja Kerja & Kursi", "Kipas Angin"],
    images: ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"],
    description: "Kamar Golden Stay 1888 Tipe A dekat lobby utama.",
    status: "Available"
  },
  {
    id: "room-103",
    roomNumber: "103",
    floor: 1,
    type: "Tipe B",
    monthlyPrice: 2100000,
    dailyPrice: 200000,
    deposit: 750000,
    size: "3.5x4 m",
    bathroom: "Dalam",
    facilities: ["AC Inverter", "Kamar Mandi Dalam (Hot Shower)", "WiFi Speed 100Mbps", "Kasur Queen Size", "Lemari 2 Pintu"],
    images: ["https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"],
    description: "Kamar Golden Stay 1888 Tipe B dengan AC sejuk dan Kamar Mandi Dalam.",
    status: "Available"
  },
  {
    id: "room-105",
    roomNumber: "105",
    floor: 1,
    type: "Tipe C",
    monthlyPrice: 2600000,
    dailyPrice: 250000,
    deposit: 1000000,
    size: "4x4.5 m",
    bathroom: "Dalam",
    facilities: ["Smart TV 43 Inch", "AC Inverter", "Water Heater Shower", "WiFi Ultra Fast", "Kasur King Size"],
    images: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
    description: "Kamar Golden Stay 1888 Tipe C Executive dengan Smart TV.",
    status: "Available"
  },
  {
    id: "room-205",
    roomNumber: "205",
    floor: 2,
    type: "Tipe D",
    monthlyPrice: 3000000,
    dailyPrice: 280000,
    deposit: 1000000,
    size: "4x4.5 m",
    bathroom: "Dalam",
    facilities: ["Smart TV 43 Inch", "Kulkas Mini Bar", "AC Inverter", "Water Heater", "Balkon Privat"],
    images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
    description: "Kamar Golden Stay 1888 Tipe D Deluxe Balcony dengan Kulkas.",
    status: "Available"
  },
  {
    id: "room-305",
    roomNumber: "305",
    floor: 3,
    type: "Tipe E",
    monthlyPrice: 3500000,
    dailyPrice: 320000,
    deposit: 1000000,
    size: "4.5x5 m",
    bathroom: "Dalam",
    facilities: ["Smart TV 50 Inch", "Kulkas 2 Pintu", "Sofa Santai", "AC Inverter 1.5 PK", "Water Heater", "Balkon View Semarang"],
    images: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
    description: "VIP Penthouse Golden Stay 1888 Tipe E view Semarang.",
    status: "Available"
  }
];
