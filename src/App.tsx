/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation,
  useNavigate,
  useRoutes
} from 'react-router-dom';
import { 
  LayoutDashboard, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronRight,
  Monitor,
  Smartphone,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { APPS, AppConfig } from './constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Sidebar = ({ currentAppId }: { currentAppId?: string }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div 
      className={cn(
        "h-screen bg-indigo-900 border-r border-indigo-500/30 transition-all duration-300 flex flex-col z-50 shadow-2xl",
        isOpen ? "w-64" : "w-20"
      )}
    >
      <div className="p-6 flex items-center justify-between">
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-lg">
              <LayoutDashboard className="text-indigo-600 w-5 h-5" />
            </div>
            <span className="font-black text-white tracking-tighter text-lg">AI SUITE</span>
          </motion.div>
        )}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-indigo-800 rounded-xl text-indigo-100 transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
        <Link
          to="/"
          className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all group",
            !currentAppId 
              ? "bg-white text-indigo-600 shadow-lg font-bold" 
              : "text-indigo-100 hover:text-white hover:bg-indigo-800"
          )}
        >
          <LayoutDashboard size={20} />
          {isOpen && <span>Dashboard</span>}
        </Link>
        
        <div className="pt-6 pb-2 px-4 text-[10px] font-black text-indigo-300 uppercase tracking-widest opacity-60">
          {isOpen ? "Neural Engines" : "•••"}
        </div>

        {APPS.map((app) => (
          <a
            key={app.id}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all group relative",
              "text-indigo-100 hover:text-white hover:bg-indigo-800"
            )}
          >
            <app.icon size={20} className="transition-transform group-hover:scale-110" />
            {isOpen && <span className="truncate">{app.name}</span>}
          </a>
        ))}
      </nav>

    </div>
  );
};

const DashboardOverview = () => {
  return (
    <div className="p-12 max-w-7xl mx-auto flex flex-col items-center">
      <header className="mb-16 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-block px-4 py-1 bg-indigo-500 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 shadow-lg border border-indigo-400 text-white"
        >
          Portfolio Hub
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-black text-white mb-4 tracking-tighter"
        >
          AI STUDIO SUITE
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-indigo-100 text-xl font-medium opacity-90"
        >
          Four powerful neural engines, one unified dashboard.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {APPS.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <a 
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full bg-white p-1 rounded-[2.5rem] shadow-2xl transition-transform hover:-translate-y-2"
            >
              <div className={cn(
                "rounded-[2.2rem] h-full p-8 flex flex-col items-center text-center",
                app.color === 'rose' && "bg-rose-500 text-white",
                app.color === 'cyan' && "bg-cyan-500 text-white",
                app.color === 'amber' && "bg-amber-400 text-amber-950",
                app.color === 'emerald' && "bg-emerald-500 text-white"
              )}>
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner",
                  app.color === 'amber' ? "bg-white/40" : "bg-white/20"
                )}>
                  <app.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{app.name}</h3>
                <p className={cn(
                  "text-sm mb-8 leading-relaxed opacity-90 line-clamp-2",
                  app.color === 'rose' && "text-rose-50",
                  app.color === 'cyan' && "text-cyan-50",
                  app.color === 'amber' && "text-amber-900",
                  app.color === 'emerald' && "text-emerald-50"
                )}>
                   {app.description}
                </p>
                <div className={cn(
                  "mt-auto w-full py-3 bg-white font-bold rounded-2xl shadow-md transition-all group-hover:scale-105 active:scale-95",
                  app.color === 'rose' && "text-rose-600",
                  app.color === 'cyan' && "text-cyan-600",
                  app.color === 'amber' && "text-amber-600",
                  app.color === 'emerald' && "text-emerald-600"
                )}>
                  Launch Engine
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      <footer className="mt-20 flex flex-col md:flex-row justify-between items-center w-full max-w-5xl gap-6">
        <div className="flex items-center space-x-6 text-white/80">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-2 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
            <span className="text-sm font-bold tracking-tight">Netlify: Active</span>
          </div>
          <div className="h-4 w-[1px] bg-indigo-400/50"></div>
          <div className="flex items-center">
            <span className="text-sm font-medium">github.com/suite/hub</span>
          </div>
        </div>
        
        <div className="bg-indigo-700/50 backdrop-blur-xl px-8 py-4 rounded-[2rem] border border-indigo-400/30 flex items-center shadow-xl">
          <span className="text-sm text-indigo-200/60 mr-6 italic font-medium">Powered by Google AI Studio</span>
          <span className="font-black text-white text-lg tracking-tight">v2.0.4-stable</span>
        </div>
      </footer>
    </div>
  );
};

const AppView = ({ app }: { app: AppConfig }) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [isLoading, setIsLoading] = useState(true);

  const isPlaceholder = app.url.includes('netlify.app') && !app.url.includes('ais-');

  return (
    <div className="flex flex-col h-full overflow-hidden bg-indigo-600">
      <header className="px-8 py-5 border-b border-white/10 flex items-center justify-between text-white">
        <div className="flex items-center gap-4">
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg",
             app.color === 'rose' && "bg-rose-500",
             app.color === 'cyan' && "bg-cyan-500",
             app.color === 'amber' && "bg-amber-400 text-amber-950",
             app.color === 'emerald' && "bg-emerald-500"
          )}>
            <app.icon size={24} />
          </div>
          <div>
            <h2 className="font-black text-xl tracking-tighter">{app.name}</h2>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
              <p className="text-indigo-100/60 text-xs font-bold tracking-widest uppercase">Streaming Live</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white/10 p-1.5 rounded-2xl backdrop-blur-md">
          <button 
            onClick={() => setViewMode('desktop')}
            className={cn("p-2 rounded-xl transition-all", viewMode === 'desktop' ? "bg-white text-indigo-600 shadow-xl" : "text-white/60 hover:text-white")}
          >
            <Monitor size={20} />
          </button>
          <button 
             onClick={() => setViewMode('mobile')}
            className={cn("p-2 rounded-xl transition-all", viewMode === 'mobile' ? "bg-white text-indigo-600 shadow-xl" : "text-white/60 hover:text-white")}
          >
            <Smartphone size={20} />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="text-white/80 hover:text-white font-bold text-sm tracking-tight"
          >
            Back to Hub
          </Link>
          <a 
            href={app.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 px-5 py-2.5 rounded-2xl text-sm font-black shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            EXPLORE ORIGINAL
          </a>
        </div>
      </header>

      <div className="flex-1 p-8 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div 
            key={viewMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={cn(
              "bg-white border-[8px] border-white/20 rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.3)] relative transition-all duration-500",
              viewMode === 'desktop' ? "w-full max-w-6xl aspect-[16/10]" : "w-[390px] h-[800px]"
            )}
          >
            {isLoading && (
              <div className="absolute inset-0 bg-indigo-50/50 backdrop-blur flex flex-col items-center justify-center z-10">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full mb-4" 
                />
                <h3 className="text-indigo-900 font-black tracking-tighter text-xl">NEURAL SYNCING...</h3>
              </div>
            )}

            {isPlaceholder && !isLoading && (
              <div className="absolute inset-0 bg-indigo-600 flex flex-col items-center justify-center text-center p-12 z-20 text-white">
                <div className="w-24 h-24 rounded-[2rem] bg-white/10 flex items-center justify-center mb-8 border border-white/20">
                  <Globe className="text-white w-12 h-12" />
                </div>
                <h3 className="text-4xl font-black mb-4 tracking-tighter">APP CONNECTION</h3>
                <p className="text-indigo-100 text-lg max-w-md mb-10 font-medium opacity-80 uppercase tracking-widest text-[10px]">
                  Verify your Netlify endpoint in constants.ts to establish cross-origin handshake.
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setIsLoading(true)}
                    className="bg-white text-indigo-600 px-8 py-3 rounded-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all"
                  >
                    RETRY SYNC
                  </button>
                </div>
              </div>
            )}

            <iframe 
              src={app.url} 
              className="w-full h-full border-none"
              onLoad={() => setIsLoading(false)}
              title={app.name}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <DashboardOverview /> },
    ...APPS.map(app => ({
      path: `/app/${app.id}`,
      element: <AppView app={app} />
    }))
  ]);
  return routes;
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-black text-zinc-300 font-sans selection:bg-indigo-500/30">
        <SidebarController />
        <main className="flex-1 h-full overflow-y-auto bg-zinc-950">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

// Separate component to use hook
function SidebarController() {
  const location = useLocation();
  const currentAppId = location.pathname.startsWith('/app/') 
    ? location.pathname.split('/')[2] 
    : undefined;

  return <Sidebar currentAppId={currentAppId} />;
}
