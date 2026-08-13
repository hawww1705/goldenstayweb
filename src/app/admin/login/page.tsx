'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { 
  Building2, 
  Lock, 
  User, 
  Key, 
  ArrowRight, 
  ShieldCheck, 
  ChevronLeft, 
  Sparkles,
  Eye,
  EyeOff,
  CheckCircle2
} from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const { branding, loginAdmin } = useApp();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    setTimeout(() => {
      const success = loginAdmin(username, password);
      setIsLoading(false);

      if (success) {
        router.push('/admin/dashboard');
      } else {
        setErrorMsg('Kredensial salah! Gunakan demo: admin / admin');
      }
    }, 400);
  };

  const handleAutoFillDemo = () => {
    setUsername('admin');
    setPassword('admin');
    setErrorMsg('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fcf9f5] via-[#fdfbf7] to-rose-50/50 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden antialiased">
      
      {/* Background Decorative Ambient Rose Gold Glow Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[380px] h-[380px] rounded-full bg-rose-200/40 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[380px] h-[380px] rounded-full bg-pink-200/40 blur-[100px] pointer-events-none" />

      {/* Top Bar Header */}
      <div className="w-full max-w-md mb-6 flex items-center justify-between z-10">
        <Link 
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-700 hover:text-rose-600 transition-colors bg-white/80 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-rose-100 shadow-sm"
        >
          <ChevronLeft className="w-4 h-4 text-rose-500" />
          <span>Kembali ke Website Public</span>
        </Link>

        <span className="text-[10px] font-extrabold text-rose-700 bg-rose-100/80 backdrop-blur-md px-3 py-1 rounded-full border border-rose-200/80 uppercase tracking-widest shadow-sm">
          Portal Admin
        </span>
      </div>

      {/* Main Luxury Glassmorphism Card */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl border border-rose-100/80 rounded-[32px] p-6 sm:p-9 shadow-2xl shadow-rose-900/5 space-y-7 z-10 relative">
        
        {/* Brand Icon & Heading */}
        <div className="text-center space-y-3">
          <div className="relative inline-block">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-rose-500 via-pink-500 to-rose-400 flex items-center justify-center text-white font-extrabold shadow-xl shadow-rose-500/30 mx-auto transform hover:rotate-3 transition-transform">
              <Building2 className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {branding.propertyName}
            </h1>
            <p className="text-xs text-rose-600 font-bold uppercase tracking-widest mt-0.5">
              Portal Login Pemilik Kos
            </p>
          </div>
        </div>

        {/* 1-Click Demo Login Auto-fill Box */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50/50 to-rose-50 border border-rose-200/80 space-y-2.5 shadow-sm text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-700 font-semibold">
            <Sparkles className="w-4 h-4 text-rose-500 shrink-0" />
            <span>Kredensial Demo: <strong className="text-rose-700 font-extrabold">admin</strong> / <strong className="text-rose-700 font-extrabold">admin</strong></span>
          </div>

          <button
            type="button"
            onClick={handleAutoFillDemo}
            className="w-full py-2 rounded-xl bg-white border border-rose-200 hover:bg-rose-100/50 text-rose-700 font-extrabold text-xs shadow-sm transition-all flex items-center justify-center gap-2 group"
          >
            <Key className="w-4 h-4 text-rose-500 group-hover:rotate-12 transition-transform" />
            <span>🔑 Klik disini untuk isi otomatis</span>
          </button>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-300 text-rose-800 text-xs font-bold text-center animate-slide-up shadow-sm">
            ⚠️ {errorMsg}
          </div>
        )}

        {/* Form Inputs */}
        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          
          <div className="space-y-1.5">
            <label className="block font-bold text-slate-800 tracking-wide">
              Username atau Email: *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-rose-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Masukkan username (admin)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-slate-50/80 border border-slate-200 rounded-2xl pl-10 pr-4 py-3 text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:border-rose-400 focus:bg-white transition-all shadow-inner"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block font-bold text-slate-800 tracking-wide">
              Password: *
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-rose-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="Masukkan password (admin)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50/80 border border-slate-200 rounded-2xl pl-10 pr-10 py-3 text-slate-900 font-semibold placeholder:text-slate-400 focus:outline-none focus:border-rose-400 focus:bg-white transition-all shadow-inner"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-2xl font-extrabold text-xs text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 hover:from-rose-600 hover:to-pink-600 shadow-xl shadow-rose-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>{isLoading ? 'Memproses Login...' : 'Masuk ke Dashboard Admin'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer info */}
        <div className="pt-3 text-center border-t border-rose-100/80 flex flex-col items-center">
          <p className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase opacity-40 hover:opacity-80 transition-opacity">
            BenchCode™ Multi-Tenant System
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">
            Security Protected • Rose Gold Aesthetic Edition
          </p>
        </div>

      </div>

    </div>
  );
}
