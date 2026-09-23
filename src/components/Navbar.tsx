import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Moon, Sun, FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Leadership', path: '/leadership' },
    { label: 'Projects', path: '/projects' },
    { label: 'Personal Story', path: '/story' },
    { label: 'Education & Honors', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="no-print border-b border-[var(--line)] bg-[var(--paper)] sticky top-0 z-40 backdrop-blur-md bg-opacity-95 transition-colors">
      {/* Top Location and Status Line */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between text-xs text-[var(--stone)] border-b border-[var(--line-subtle)]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--moss)] inline-block" />
          <span>Dhaka and Bagerhat, Bangladesh</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-[var(--ink)] opacity-75">
            Founder, NOVA Nourish Foundation
          </span>
          <button
            onClick={onToggleDarkMode}
            className="p-1 rounded text-[var(--stone)] hover:text-[var(--ink)] transition-colors cursor-pointer"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Masthead Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="group flex flex-col"
        >
          <span className="font-serif-fraunces text-xl sm:text-2xl font-medium tracking-tight text-[var(--ink)] group-hover:text-[var(--moss)] transition-colors">
            Priti Das <span className="italic font-normal text-[var(--moss)]">Dipa</span>
          </span>
          <span className="text-[11px] text-[var(--stone)] font-sans-inter">
            Community leadership and applied machine learning
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-sans-inter">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors pb-0.5 border-b-2 ${
                  isActive
                    ? 'text-[var(--moss)] font-medium border-[var(--moss)]'
                    : 'text-[var(--ink)] opacity-80 hover:opacity-100 border-transparent hover:border-[var(--line)]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Triggers */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--ink)] hover:text-[var(--moss)] border border-[var(--line)] hover:border-[var(--moss)] px-3 py-1.5 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[var(--moss)]" />
            <span>Résumé</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-[var(--ink)] hover:text-[var(--moss)] transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--line)] bg-[var(--paper-dim)] px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `text-sm py-2 px-3 transition-colors ${
                    isActive
                      ? 'bg-[var(--paper)] text-[var(--moss)] font-medium border-l-2 border-[var(--moss)]'
                      : 'text-[var(--ink)] hover:bg-[var(--paper)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-[var(--line)] flex gap-2">
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenResume();
              }}
              className="flex-1 py-2 text-xs font-medium text-center border border-[var(--line)] text-[var(--ink)] hover:text-[var(--moss)] bg-[var(--paper)] cursor-pointer"
            >
              View Résumé
            </button>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="flex-1 py-2 text-xs font-medium text-center bg-[var(--moss)] text-[var(--paper)] hover:opacity-90"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
