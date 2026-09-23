/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { HomePage } from './pages/HomePage';
import { LeadershipPage } from './pages/LeadershipPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { StoryPage } from './pages/StoryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('priti_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('priti_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('priti_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)] flex flex-col font-sans-inter selection:bg-[var(--moss)] selection:text-[var(--paper)] transition-colors">
        {/* Navigation Masthead */}
        <Navbar
          darkMode={darkMode}
          onToggleDarkMode={toggleDarkMode}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Multi-Route Content Area */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenResume={() => setIsResumeOpen(true)} />}
            />
            <Route
              path="/leadership"
              element={<LeadershipPage />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage />}
            />
            <Route
              path="/story"
              element={<StoryPage />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenResume={() => setIsResumeOpen(true)} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onOpenResume={() => setIsResumeOpen(true)} />}
            />
            <Route
              path="*"
              element={<HomePage onOpenResume={() => setIsResumeOpen(true)} />}
            />
          </Routes>
        </main>

        {/* Clean Footer */}
        <Footer
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Clean Academic / Printable Résumé Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </HashRouter>
  );
}
