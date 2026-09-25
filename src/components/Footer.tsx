import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="no-print border-t border-slate-200 bg-white py-12 mt-16 font-sans-inter">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-200">
          
          {/* Identity & Scholar Overview */}
          <div className="md:col-span-6 space-y-2">
            <span className="font-serif-newsreader text-xl font-bold text-slate-900 block">
              Priti Das Dipa
            </span>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Founder &amp; Executive Director, NOVA Nourish Foundation · Machine Learning Intern, FlyRank AI · Youth Delegate, UN CSW70.
            </p>
            <p className="text-xs text-slate-500 pt-1">
              Dhaka &amp; Bagerhat, Bangladesh.
            </p>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-semibold text-slate-900 uppercase tracking-wider block mb-2">
              Sections
            </span>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                <Link to="/" className="hover:text-slate-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-slate-900 transition-colors">
                  Research &amp; Projects
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-slate-900 transition-colors">
                  Leadership &amp; Public Health
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-slate-900 transition-colors">
                  Education &amp; Credentials
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-slate-900 transition-colors">
                  Personal Statement
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-slate-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Scholarly Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-semibold text-slate-900 uppercase tracking-wider block mb-2">
              Correspondence
            </span>
            <div className="space-y-1.5 text-slate-600">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="block hover:text-slate-900 transition-colors break-all"
              >
                {PORTFOLIO_DATA.profile.email}
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <br />
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors"
              >
                <span>GitHub Repositories</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="text-xs text-blue-900 hover:underline font-medium cursor-pointer"
              >
                Curriculum Vitae (PDF) →
              </button>
            </div>
          </div>

        </div>

        {/* Micro-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Priti Das Dipa · Academic Dossier &amp; Portfolio
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>

      </div>
    </footer>
  );
};
