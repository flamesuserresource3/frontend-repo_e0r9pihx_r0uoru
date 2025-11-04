import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Dashboard from './components/Dashboard.jsx';
import KanbanPreview from './components/KanbanPreview.jsx';
import CommandBar from './components/CommandBar.jsx';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-b from-[#090D12] to-[#0B0F14]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="lg:pl-72 h-full flex flex-col">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
          <HeroSection />

          <Dashboard />

          <KanbanPreview />
        </div>
      </main>

      <CommandBar />
    </div>
  );
}
