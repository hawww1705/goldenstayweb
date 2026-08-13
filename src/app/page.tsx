'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { 
  Building2, 
  Phone, 
  MapPin, 
  Sparkles, 
  MessageSquare, 
  Wifi, 
  Wind, 
  Bath, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  Instagram,
  Mail,
  Star,
  Award,
  Clock,
  Key,
  Flame,
  ArrowUpRight
} from 'lucide-react';

export default function CatalogHomePage() {
  const { branding, rooms, getWaLink } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredRooms = selectedCategory === 'All' 
    ? rooms 
    : rooms.filter((r) => r.type === selectedCategory);

  const features = [
    { title: "Akses 24 Jam Smart Card", desc: "Sistem keamanan RFID & CCTV 24 jam non-stop.", icon: ShieldCheck },
    { title: "Kamar Mandi Dalam & AC", desc: "Air panas hot shower & AC sejuk hemat energi.", icon: Bath },
    { title: "WiFi Dedicated 100Mbps", desc: "Koneksi internet cepat untuk kerja & belajar.", icon: Wifi },
    { title: "Parkir Luas & Aman", desc: "Area parkir mobil & motor di dalam pagar.", icon: Building2 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f5] text-slate-900 antialiased overflow-x-hidden">
      
      {/* Top Header Official Announcement Bar */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 text-white font-extrabold px-4 py-2 text-[10px] sm:text-xs flex items-center justify-center gap-2 max-w-7xl mx-auto w-full shadow-md text-center">
        <Sparkles className="w-4 h-4 text-rose-200 animate-pulse shrink-0" />
        <span>GOLDEN STAY 1888 SEMARANG • OFFICIAL PROFIL & KATALOG KAMAR DIRECT WHATSAPP</span>
      </div>

      {/* Main Header - Modern Glassmorphism Bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-rose-100/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-0 sm:h-18 flex items-center justify-between gap-3">
          
          {/* Logo & Property Title */}
          <Link href="/" className="flex items-center gap-3 group min-w-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 flex items-center justify-center text-white font-extrabold shadow-lg shadow-rose-500/25 group-hover:scale-105 transition-transform shrink-0">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <span className="font-extrabold text-sm sm:text-lg tracking-tight text-slate-900 group-hover:text-rose-600 transition-colors truncate block">
                {branding.propertyName}
              </span>
              <p className="text-[9px] sm:text-[10px] text-rose-600 font-extrabold tracking-widest uppercase truncate block">
                Luxury Boarding House
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-extrabold text-slate-600 tracking-wide">
            <a href="#hero" className="hover:text-rose-600 transition-colors">Beranda</a>
            <a href="#features" className="hover:text-rose-600 transition-colors">Keunggulan</a>
            <a href="#rooms" className="hover:text-rose-600 transition-colors">Katalog Kamar</a>
            <a href="#location" className="hover:text-rose-600 transition-colors">Lokasi & Maps</a>
          </nav>

          {/* Action CTAs - Fully Mobile HP Visible */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <Link
              href="/admin/login"
              className="flex px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 font-extrabold text-[11px] sm:text-xs hover:bg-rose-100 transition-all items-center gap-1 shadow-sm"
              title="Login Admin Pemilik Kos"
            >
              <Key className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span>Admin <span className="hidden xs:inline">Login</span></span>
            </Link>

            <a
              href={getWaLink(`Halo ${branding.propertyName}, saya berminat menanyakan ketersediaan kamar kos.`)}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center gap-2 shadow-md shadow-emerald-600/20 transition-transform hover:scale-105 shrink-0"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Tanya WA <span className="hidden sm:inline">({branding.whatsapp})</span></span>
            </a>
          </div>

        </div>
      </header>

      {/* HERO SECTION - Modern Aesthetic Ambient Background */}
      <section id="hero" className="relative py-12 sm:py-20 border-b border-rose-100/80 overflow-hidden bg-gradient-to-b from-white via-rose-50/40 to-[#fcf9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            <div className="space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/80 border border-rose-200 text-rose-700 text-xs font-extrabold shadow-sm">
                <Flame className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Hunian Kos Terfavorit di Pedurungan Semarang</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                {branding.propertyName} <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500">
                  Pedurungan Semarang
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                {branding.description}
              </p>

              {/* Location Card */}
              <div className="p-4 sm:p-5 rounded-3xl bg-white/90 backdrop-blur-md border border-rose-100 shadow-md text-xs text-slate-700 space-y-2.5 text-left">
                <p className="flex items-start gap-2.5 font-semibold">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" /> 
                  <span className="leading-snug">{branding.address}</span>
                </p>
                <p className="flex items-center gap-2.5 font-semibold">
                  <Instagram className="w-4 h-4 text-pink-500 shrink-0" /> 
                  <span>Instagram: <strong>{branding.instagram}</strong></span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2 justify-center lg:justify-start">
                <a
                  href="#rooms"
                  className="w-full sm:w-auto text-center px-7 py-4 rounded-2xl font-extrabold text-xs text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 hover:from-rose-600 hover:to-pink-600 shadow-xl shadow-rose-500/30 transition-transform hover:scale-105"
                >
                  Lihat Katalog Kamar (Tipe A - E)
                </a>
                <a
                  href={getWaLink(`Halo Pengelola ${branding.propertyName}, saya ingin bertanya perihal ketersediaan kamar.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center px-7 py-4 rounded-2xl font-extrabold text-xs text-slate-800 bg-white border border-rose-200 hover:bg-rose-50/80 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Chat Langsung via WA</span>
                </a>
              </div>

            </div>

            {/* Hero Image Showcase */}
            <div className="relative">
              <div className="rounded-[36px] overflow-hidden border border-rose-200/80 shadow-2xl bg-white p-2.5">
                <div className="relative h-[300px] sm:h-[420px] rounded-[28px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80"
                    alt="Golden Stay 1888"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4.5 rounded-2xl bg-white/95 backdrop-blur-md border border-rose-100 text-slate-900 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">{branding.propertyName}</h4>
                        <p className="text-xs text-rose-600 font-semibold mt-0.5">Sewa Mulai Rp 1.500.000 / bulan</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 font-extrabold text-[11px]">
                        Tipe A s/d E
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-16 sm:py-24 border-b border-rose-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
              FASILITAS & KEUNGGULAN
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Kenapa Memilih {branding.propertyName}?</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Fasilitas terbaik disiapkan untuk kenyamanan dan ketenangan istirahat Anda setiap hari.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-3xl bg-[#fcf9f5] border border-rose-100 hover:border-rose-300/80 shadow-sm hover:shadow-xl transition-all duration-300 group space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center font-bold shadow-md shadow-rose-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-rose-600 transition-colors">{feat.title}</h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CATALOG ROOM SHOWCASE SECTION */}
      <section id="rooms" className="py-16 sm:py-24 border-b border-rose-100 bg-[#fcf9f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
              KATALOG KAMAR EXCLUSIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Pilihan Tipe Kamar (Tipe A s/d E)</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Klik tombol WhatsApp pada kamar pilihan Anda untuk langsung terhubung dengan pengelola.</p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {['All', 'Tipe A', 'Tipe B', 'Tipe C', 'Tipe D', 'Tipe E'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 text-white shadow-md shadow-rose-500/20 scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-rose-50 hover:text-rose-600'
                  }`}
                >
                  {cat === 'All' ? 'Semua Tipe Kamar' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <div 
                key={room.id}
                className="bg-white rounded-[32px] border border-rose-100 overflow-hidden flex flex-col justify-between shadow-md hover:shadow-2xl hover:border-rose-300 transition-all duration-300 group"
              >
                <div>
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img 
                      src={room.images[0]} 
                      alt={`Kamar ${room.roomNumber}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-3.5 left-3.5 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-rose-600 text-white font-extrabold text-xs shadow-md">
                        Kamar {room.roomNumber}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 font-extrabold text-xs border border-rose-100 shadow-md">
                        {room.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-600 pb-3 border-b border-rose-100">
                      <span>Ukuran: <strong className="text-slate-900 font-bold">{room.size}</strong></span>
                      <span>KM Mandi: <strong className="text-slate-900 font-bold">{room.bathroom}</strong></span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {room.facilities.map((fac, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-xl bg-rose-50/80 text-rose-700 text-[11px] font-bold border border-rose-100">
                          {fac}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-medium pt-1">
                      {room.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-rose-100 bg-gradient-to-b from-white to-rose-50/30 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Harga Sewa:</span>
                    <span className="text-xl font-extrabold text-rose-600">
                      Rp {room.monthlyPrice.toLocaleString('id-ID')}
                      <span className="text-xs font-normal text-slate-500">/bln</span>
                    </span>
                  </div>

                  {/* DIRECT WHATSAPP ACTION BUTTON */}
                  <a
                    href={getWaLink(`Halo Pengelola ${branding.propertyName}, saya berminat menanyakan ketersediaan Kamar ${room.roomNumber} (${room.type}) seharga Rp ${room.monthlyPrice.toLocaleString('id-ID')}/bulan.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-2xl font-extrabold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>Tanya Ketersediaan via WhatsApp</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LOCATION & GOOGLE MAPS SECTION */}
      <section id="location" className="py-16 sm:py-24 bg-white border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-200">
              LOKASI PROPERTI
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Alamat & Peta Google Maps</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{branding.address}</p>
          </div>

          <div className="rounded-[36px] overflow-hidden border border-rose-200/80 shadow-xl h-[320px] sm:h-[420px] bg-white p-2">
            <iframe
              src={branding.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.5rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location Golden Stay 1888"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-rose-100 text-slate-600 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-slate-900 font-extrabold text-base">
            <Building2 className="w-5 h-5 text-rose-500 shrink-0" />
            <span>{branding.propertyName} Semarang</span>
          </div>
          <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">{branding.address}</p>
          <p className="text-xs text-slate-500">WhatsApp: {branding.whatsapp} | Instagram: {branding.instagram}</p>

          <div className="pt-2">
            <Link
              href="/admin/login"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-extrabold hover:bg-rose-100 transition-colors shadow-sm"
            >
              <Key className="w-3.5 h-3.5 text-rose-500" />
              <span>Portal Admin Login (CRUD Kamar Kos)</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-rose-100 flex flex-col items-center">
            <p className="text-xs opacity-25 hover:opacity-60 transition-opacity font-semibold tracking-widest text-slate-400 select-none uppercase">
              BenchCode™
            </p>
            <p className="text-[11px] text-slate-500 mt-1">© {new Date().getFullYear()} {branding.propertyName}. Website Katalog Profile Rose Gold Edition.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
