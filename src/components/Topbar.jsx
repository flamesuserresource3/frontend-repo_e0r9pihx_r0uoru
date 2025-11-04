import React from 'react';
import { Menu, Search, Plus, Bell } from 'lucide-react';

export default function Topbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-10 h-16 backdrop-blur supports-[backdrop-filter]:bg-white/30 bg-white/20 border-b border-white/20 flex items-center">
      <div className="px-4 w-full flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-md text-white hover:bg-white/10"
        >
          <Menu size={20} />
        </button>

        <div className="hidden md:flex items-center gap-2 px-3 h-10 rounded-md bg-white/10 border border-white/10 text-white/80 flex-1 max-w-xl">
          <Search size={18} className="shrink-0" />
          <input
            className="bg-transparent outline-none placeholder:text-white/50 text-sm w-full"
            placeholder="Search tasks, docs, people..."
          />
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-medium shadow">
            <Plus size={16} /> New
          </button>
          <button className="inline-flex items-center justify-center h-9 w-9 rounded-md text-white/90 hover:bg-white/10">
            <Bell size={18} />
          </button>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 to-rose-500" />
        </div>
      </div>
    </header>
  );
}
