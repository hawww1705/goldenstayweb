'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { Building2, ChevronLeft, LogOut, Lock, Key } from 'lucide-react';

export default function CatalogAdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAdminLoggedIn, logoutAdmin } = useApp();

  const isLoginPage = pathname === '/admin/login';

  const handleLogout = () => {
    logoutAdmin();
    router.push('/admin/login');
  };

  // If on login page, render children (the login form) without admin layout wrappers
  if (isLoginPage) {
    return <>{children}</>;
  }

  // If not logged in and accessing admin pages, render auth protection guard card
  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-[#fdfbf7] flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white border border-rose-100 rounded-3xl p-8 shadow-xl text-center space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-rose-100 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">Akses Admin Terkunci 🔒</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Anda harus melakukan login sebagai Pemilik Kos terlebih dahulu untuk mengakses backend pengelola Golden Stay 1888.
          </p>
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/admin/login"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-xs shadow-md shadow-rose-500/25 transition-all flex items-center justify-center gap-2"
            >
              <Key className="w-4 h-4" />
              <span>Masuk ke Halaman Login Admin</span>
            </Link>
            <Link
              href="/"
              className="w-full py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors"
            >
              Kembali ke Website Public
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfbf7] flex flex-col">
      <header className="bg-white border-b border-rose-100 px-4 sm:px-6 py-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white font-extrabold shadow-md shadow-rose-500/20">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-extrabold text-xs sm:text-sm text-slate-900">Golden Stay 1888 - Admin Katalog WA</h2>
            <p className="text-[9px] sm:text-[10px] text-rose-600 font-bold uppercase tracking-wider">PAKET 1 BACKEND (PORT 3001)</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Website Public</span>
          </Link>

          <button
            onClick={handleLogout}
            className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            title="Logout dari Admin"
          >
            <LogOut className="w-3.5 h-3.5 text-rose-400" />
            <span>Keluar</span>
          </button>
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-6 max-w-6xl mx-auto w-full space-y-6">
        {children}
      </main>
    </div>
  );
}
