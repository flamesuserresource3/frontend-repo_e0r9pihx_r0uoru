import React from 'react';
import { Home, Star, Calendar, CheckCircle, Settings, User, Folder } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active }) => (
  <button
    className={`flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm transition-colors
      ${active ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
  >
    <Icon size={18} />
    <span className="truncate">{label}</span>
  </button>
);

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        className={`fixed z-20 left-0 top-0 h-full w-72 bg-[#0B0F14] border-r border-white/10 flex flex-col
          transition-transform duration-300 lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-violet-600" />
            <span className="text-white font-semibold tracking-tight">Vibe Platform</span>
          </div>
        </div>

        <div className="p-3 space-y-6 overflow-y-auto">
          <div>
            <p className="px-3 text-xs font-medium text-white/40 uppercase tracking-wider mb-2">Overview</p>
            <nav className="space-y-1">
              <NavItem icon={Home} label="Home" active />
              <NavItem icon={Star} label="Favorites" />
              <NavItem icon={Calendar} label="Calendar" />
              <NavItem icon={CheckCircle} label="Tasks" />
            </nav>
          </div>

          <div>
            <p className="px-3 text-xs font-medium text-white/40 uppercase tracking-wider mb-2">Projects</p>
            <div className="space-y-1">
              {['Onboarding', 'Mobile App', 'Design System', 'Web Platform'].map((p) => (
                <button key={p} className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                  <Folder size={18} />
                  <span className="truncate">{p}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500" />
            <div className="min-w-0">
              <p className="text-white text-sm font-medium truncate">Alex Souza</p>
              <p className="text-white/50 text-xs truncate">alex.souza@example.com</p>
            </div>
            <button className="ml-auto inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-white/10 transition-colors">
              <Settings size={18} className="text-white/80" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
