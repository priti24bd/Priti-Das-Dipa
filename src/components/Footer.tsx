import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="no-print pt-14 pb-12 bg-[var(--paper)] border-t border-[var(--line)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[var(--line)] items-start">
          
          {/* Identity & Mission */}
          <div className="md:col-span-6 space-y-3">
            <span className="font-serif-fraunces text-2xl font-medium text-[var(--ink)] block">
              Priti Das <span className="italic font-normal text-[var(--moss)]">Dipa</span>
            </span>
            <p className="text-sm text-[var(--stone)] leading-relaxed max-w-sm">
              Founder of NOVA Nourish Foundation, youth delegate, and student focusing on community health and machine learning in Bangladesh.
            </p>
            <div className="text-xs text-[var(--stone)] pt-1">
              Based in Dhaka and Bagerhat, Bangladesh.
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-3 space-y-2 text-xs font-sans-inter">
            <span className="text-[var(--ink)] font-semibold uppercase tracking-wider block mb-2">
              Navigation
            </span>
            <ul className="space-y-1.5 text-[var(--stone)]">
              <li>
                <Link to="/" className="hover:text-[var(--moss)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-[var(--moss)] transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[var(--moss)] transition-colors">
                  Projects &amp; Innovation
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-[var(--moss)] transition-colors">
                  Personal Story
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[var(--moss)] transition-colors">
                  Education &amp; Honors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[var(--moss)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Connect */}
          <div className="md:col-span-3 space-y-2 text-xs font-sans-inter">
            <span className="text-[var(--ink)] font-semibold uppercase tracking-wider block mb-2">
              Direct Connect
            </span>
            <div className="space-y-1.5 text-[var(--stone)]">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="block hover:text-[var(--moss)] transition-colors break-all"
              >
                {PORTFOLIO_DATA.profile.email}
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[var(--moss)] transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <br />
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[var(--moss)] transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenResume}
                className="text-xs text-[var(--moss)] hover:underline font-medium cursor-pointer"
              >
                View / Print Résumé →
              </button>
            </div>
          </div>

        </div>

        {/* Micro-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--stone)] font-sans-inter">
          <div>
            © {new Date().getFullYear()} Priti Das Dipa. Written and shared with care.
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-[var(--ink)] transition-colors cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>

      </div>
    </footer>
  );
};
