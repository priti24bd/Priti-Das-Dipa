import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FileText, ChevronDown, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navLinks = [
    { label: 'About', path: '/' },
    { label: 'Research & Projects', path: '/projects' },
    { label: 'Leadership & Impact', path: '/leadership' },
    { label: 'Education & Honors', path: '/about' },
    { label: 'Personal Statement', path: '/story' },
    { label: 'Contact', path: '/contact' },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Determine current active section label
  const currentSection = navLinks.find(link => 
    link.path === '/' 
      ? location.pathname === '/' 
      : location.pathname.startsWith(link.path)
  ) || navLinks[0];

  return (
    <header className="no-print bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Scholar Wordmark (Bangladesh word removed) */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col group py-1"
          >
            <span className="font-serif-newsreader text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
              {PORTFOLIO_DATA.profile.name}
            </span>
            <span className="text-xs text-slate-500 font-sans-inter">
              {PORTFOLIO_DATA.profile.roleSubtitle}
            </span>
          </Link>

          {/* Clean Corner Navigation Controls */}
          <div className="flex items-center gap-2 relative" ref={dropdownRef}>
            
            {/* Quick Curriculum Vitae (CV) Trigger */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-slate-950 border border-slate-300 hover:border-slate-800 px-3 py-1.5 rounded transition-colors cursor-pointer"
              title="Open Curriculum Vitae (CV)"
            >
              <FileText className="w-3.5 h-3.5 text-slate-600" />
              <span>CV</span>
            </button>

            {/* Corner Sub-Section Selector */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-300 hover:border-slate-800 px-3.5 py-1.5 rounded transition-all cursor-pointer shadow-2xs"
              aria-expanded={menuOpen}
              aria-label="Select section to view"
            >
              <span className="text-slate-500 hidden sm:inline">Section:</span>
              <span className="font-semibold text-slate-900">{currentSection.label}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Corner Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-slate-300 rounded shadow-lg py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100 font-sans-inter">
                <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Select Section to View
                </div>

                <div className="py-1">
                  {navLinks.map((link) => {
                    const isActive = link.path === '/' 
                      ? location.pathname === '/' 
                      : location.pathname.startsWith(link.path);

                    return (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-2 text-xs transition-colors ${
                          isActive
                            ? 'bg-slate-50 font-semibold text-slate-950'
                            : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && <Check className="w-3.5 h-3.5 text-slate-900" />}
                      </NavLink>
                    );
                  })}
                </div>

                <div className="border-t border-slate-100 p-2">
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onOpenResume();
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 text-xs text-blue-900 hover:bg-blue-50 font-medium rounded transition-colors text-left"
                  >
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      Academic CV (PDF)
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">View</span>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </header>
  );
};
