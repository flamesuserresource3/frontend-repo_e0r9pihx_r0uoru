import React, { useEffect, useState } from 'react';
import { Command, Search, GitBranch, Layout, Palette, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommandBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === '/' && !open) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 h-11 px-4 rounded-full bg-white/10 border border-white/20 text-white shadow-lg backdrop-blur hover:bg-white/15"
      >
        <Command size={18} />
        <span className="hidden sm:inline">Command</span>
        <kbd className="ml-1 hidden sm:inline-flex items-center justify-center h-6 px-2 rounded bg-white/10 text-xs">⌘K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex items-start justify-center pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-[92vw] max-w-xl rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#0B0F14] to-[#0B0F14]/95"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                <Search size={18} className="text-white/70" />
                <input
                  autoFocus
                  placeholder="Search commands, navigate, or create…"
                  className="w-full bg-transparent outline-none text-white placeholder:text-white/50"
                />
                <kbd className="ml-auto inline-flex items-center justify-center h-6 px-2 rounded bg-white/10 text-xs text-white/70">Esc</kbd>
              </div>
              <ul className="p-2">
                {[
                  { icon: GitBranch, label: 'Create new issue' },
                  { icon: Layout, label: 'Open board' },
                  { icon: Palette, label: 'Switch theme' },
                  { icon: Settings, label: 'Open settings' },
                ].map((item, i) => (
                  <li key={i}>
                    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-white/90 hover:bg-white/10">
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
