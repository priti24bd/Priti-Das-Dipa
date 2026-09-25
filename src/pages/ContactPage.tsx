import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Copy, Check, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactPageProps {
  onOpenResume: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
      
      {/* Page Header */}
      <div className="space-y-3">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to About</span>
        </Link>

        <h1 className="font-serif-newsreader text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
          Academic &amp; Professional Contact
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans-inter">
          I welcome correspondence regarding undergraduate admissions, research collaborations in applied machine learning and hydrology, public health partnerships, and student fellowships.
        </p>
      </div>

      {/* Main Correspondence Card */}
      <div className="p-6 sm:p-8 border border-slate-300 bg-white space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-sans-inter">
            <span>Primary Email Address</span>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 text-blue-900 hover:underline cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to clipboard' : 'Copy email'}</span>
            </button>
          </div>

          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="block font-serif-newsreader text-2xl sm:text-3xl text-slate-900 hover:text-blue-900 transition-colors break-all"
          >
            {PORTFOLIO_DATA.profile.email}
          </a>
        </div>

        <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans-inter">
          <div className="space-y-1">
            <span className="text-slate-500 block">Telephone &amp; WhatsApp:</span>
            <a
              href={`tel:${PORTFOLIO_DATA.profile.phone}`}
              className="font-medium text-slate-900 hover:text-blue-900 block"
            >
              {PORTFOLIO_DATA.profile.phone}
            </a>
          </div>

          <div className="space-y-1">
            <span className="text-slate-500 block">Primary Location:</span>
            <span className="font-medium text-slate-900 block">
              Dhaka &amp; Bagerhat, Bangladesh
            </span>
          </div>
        </div>
      </div>

      {/* Online Profiles & Verification */}
      <div className="space-y-3">
        <h2 className="text-xs uppercase tracking-wider font-semibold text-slate-900">
          Professional Repositories &amp; Links
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-sans-inter">
          <a
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-slate-200 bg-white hover:border-slate-800 transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="font-medium text-slate-900 block group-hover:text-blue-900">
                LinkedIn Profile
              </span>
              <span className="text-xs text-slate-500">linkedin.com/in/priti-das-dipa</span>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-800" />
          </a>

          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-slate-200 bg-white hover:border-slate-800 transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="font-medium text-slate-900 block group-hover:text-blue-900">
                GitHub Repositories
              </span>
              <span className="text-xs text-slate-500">github.com/priti24bd</span>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-800" />
          </a>
        </div>
      </div>

      {/* Academic Documents Archive */}
      <div className="p-5 border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans-inter">
        <div>
          <span className="font-semibold text-slate-900 block mb-0.5">
            Institutional Credentials &amp; Certifications Folder
          </span>
          <p className="text-slate-600">
            Authenticated certificates, competition awards, and project documentation hosted on Google Drive.
          </p>
        </div>

        <a
          href={PORTFOLIO_DATA.profile.driveFolder}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-slate-300 bg-white text-slate-800 font-medium rounded hover:border-slate-800 hover:text-slate-950 transition-colors whitespace-nowrap self-start sm:self-auto"
        >
          <span>Open Drive Archive</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
};
