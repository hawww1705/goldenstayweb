'use client';

import React, { createContext, useContext, useState } from 'react';
import { Room, PropertyBranding } from '../types';
import { initialBranding, initialRooms } from '../data/mockData';

interface AppContextType {
  branding: PropertyBranding;
  updateBranding: (newBranding: Partial<PropertyBranding>) => void;
  rooms: Room[];
  addRoom: (room: Omit<Room, 'id'>) => void;
  updateRoom: (id: string, updated: Partial<Room>) => void;
  deleteRoom: (id: string) => void;
  getWaLink: (text: string) => string;
  isAdminLoggedIn: boolean;
  loginAdmin: (user: string, pass: string) => boolean;
  logoutAdmin: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [branding, setBranding] = useState<PropertyBranding>(initialBranding);
  const [rooms, setRooms] = useState<Room[]>(initialRooms);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);

  const updateBranding = (newBranding: Partial<PropertyBranding>) => {
    setBranding((prev) => ({ ...prev, ...newBranding }));
  };

  const addRoom = (roomData: Omit<Room, 'id'>) => {
    const newRoom: Room = { ...roomData, id: `room-${Date.now()}` };
    setRooms((prev) => [newRoom, ...prev]);
  };

  const updateRoom = (id: string, updated: Partial<Room>) => {
    setRooms((prev) => prev.map((r) => (r.id === id ? { ...r, ...updated } : r)));
  };

  const deleteRoom = (id: string) => {
    setRooms((prev) => prev.filter((r) => r.id !== id));
  };

  const getWaLink = (text: string) => {
    const clean = branding.whatsapp.replace(/[^0-9]/g, '');
    const phone = clean.startsWith('0') ? '62' + clean.substring(1) : clean;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const loginAdmin = (user: string, pass: string) => {
    const u = user.trim().toLowerCase();
    if ((u === 'admin' || u === 'admin@goldenstay1888.com') && (pass === 'admin' || pass === '123456')) {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <AppContext.Provider value={{ 
      branding, 
      updateBranding, 
      rooms, 
      addRoom, 
      updateRoom, 
      deleteRoom, 
      getWaLink,
      isAdminLoggedIn,
      loginAdmin,
      logoutAdmin
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
