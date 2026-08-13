'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Room } from '@/types';
import { Building2, Plus, Edit3, Trash2, Phone, Save, MapPin } from 'lucide-react';

export default function CatalogAdminDashboard() {
  const { branding, updateBranding, rooms, addRoom, updateRoom, deleteRoom } = useApp();

  const [localBranding, setLocalBranding] = useState(branding);

  const [formData, setFormData] = useState({
    roomNumber: '102',
    floor: 1,
    type: 'Tipe A' as any,
    monthlyPrice: 1500000,
    deposit: 500000,
    size: '3x3.5 m',
    bathroom: 'Luar' as any,
    facilitiesText: 'WiFi Speed 100Mbps, Kasur Springbed, Lemari',
    description: 'Kamar nyaman dan bersih.',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    status: 'Available' as any
  });

  const handleSaveBranding = (e: React.FormEvent) => {
    e.preventDefault();
    updateBranding(localBranding);
    alert('Informasi Properti & Nomor WA berhasil disimpan!');
  };

  const handleAddRoom = (e: React.FormEvent) => {
    e.preventDefault();
    addRoom({
      roomNumber: formData.roomNumber,
      floor: formData.floor,
      type: formData.type,
      monthlyPrice: formData.monthlyPrice,
      deposit: formData.deposit,
      size: formData.size,
      bathroom: formData.bathroom,
      facilities: formData.facilitiesText.split(',').map((f) => f.trim()),
      description: formData.description,
      images: [formData.imageUrl],
      status: formData.status
    });
    alert(`Kamar ${formData.roomNumber} (${formData.type}) berhasil ditambahkan!`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-white border border-rose-100 shadow-sm space-y-2">
        <h1 className="text-2xl font-extrabold text-slate-900">Admin Backend Katalog - Golden Stay 1888</h1>
        <p className="text-xs text-slate-600">Kelola nomor WhatsApp tujuan, alamat properti, serta katalog kamar & harga sewa (Tipe A s/d E).</p>
      </div>

      {/* Property & WA Settings */}
      <form onSubmit={handleSaveBranding} className="p-6 rounded-3xl bg-white border border-rose-100 shadow-sm space-y-4">
        <h3 className="font-bold text-base text-slate-900 border-b border-rose-100 pb-2">Pengaturan Kontak WhatsApp & Alamat</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Nomor WhatsApp Tujuan Booking/Tanya: *</label>
            <input
              type="text"
              required
              value={localBranding.whatsapp}
              onChange={(e) => setLocalBranding({ ...localBranding, whatsapp: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 font-mono text-sm focus:border-rose-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Instagram Resmi:</label>
            <input
              type="text"
              value={localBranding.instagram}
              onChange={(e) => setLocalBranding({ ...localBranding, instagram: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 focus:border-rose-400 focus:outline-none"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block font-semibold text-slate-700 mb-1">Alamat Properti Lengkap:</label>
            <textarea
              rows={2}
              value={localBranding.address}
              onChange={(e) => setLocalBranding({ ...localBranding, address: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-900 focus:border-rose-400 focus:outline-none"
            />
          </div>
        </div>

        <button type="submit" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-rose-500/20">
          <Save className="w-4 h-4" />
          <span>Simpan Nomor WA & Informasi</span>
        </button>
      </form>

      {/* Add Room Section */}
      <form onSubmit={handleAddRoom} className="p-6 rounded-3xl bg-white border border-rose-100 shadow-sm space-y-4">
        <h3 className="font-bold text-base text-slate-900 border-b border-rose-100 pb-2">Tambah Unit Kamar Katalog Baru</h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">No. Kamar:</label>
            <input
              type="text"
              required
              value={formData.roomNumber}
              onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tipe Kamar:</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900"
            >
              <option value="Tipe A">Tipe A</option>
              <option value="Tipe B">Tipe B</option>
              <option value="Tipe C">Tipe C</option>
              <option value="Tipe D">Tipe D</option>
              <option value="Tipe E">Tipe E</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Harga Sewa (Rp):</label>
            <input
              type="number"
              step={50000}
              value={formData.monthlyPrice}
              onChange={(e) => setFormData({ ...formData, monthlyPrice: Number(e.target.value) })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kamar Mandi:</label>
            <select
              value={formData.bathroom}
              onChange={(e) => setFormData({ ...formData, bathroom: e.target.value as any })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900"
            >
              <option value="Dalam">Dalam</option>
              <option value="Luar">Luar</option>
            </select>
          </div>
        </div>

        <button type="submit" className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2">
          <Plus className="w-4 h-4" />
          <span>Tambah Kamar ke Katalog</span>
        </button>
      </form>

      {/* Rooms Table */}
      <div className="bg-white border border-rose-100 rounded-3xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-rose-100 font-bold text-sm text-slate-900">Daftar Kamar di Katalog Public</div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-rose-50/50 text-rose-900 uppercase text-[10px] tracking-wider border-b border-rose-100 font-bold">
              <tr>
                <th className="p-4">Kamar</th>
                <th className="p-4">Tipe</th>
                <th className="p-4">Harga Sewa</th>
                <th className="p-4">Fasilitas</th>
                <th className="p-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rose-100">
              {rooms.map((r) => (
                <tr key={r.id} className="hover:bg-rose-50/30">
                  <td className="p-4 font-bold text-slate-900">Kamar {r.roomNumber}</td>
                  <td className="p-4 font-semibold text-rose-600">{r.type}</td>
                  <td className="p-4 font-bold text-slate-900">Rp {r.monthlyPrice.toLocaleString('id-ID')}</td>
                  <td className="p-4 text-slate-600">{r.facilities.join(', ')}</td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => deleteRoom(r.id)}
                      className="text-rose-600 hover:underline font-semibold"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
