import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Copy, Check, Mail, Phone, FileText } from 'lucide-react';
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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      
      {/* Page Header */}
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-[var(--stone)] hover:text-[var(--moss)] transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to home</span>
        </Link>

        <p className="text-xs uppercase tracking-widest text-[var(--moss)] font-semibold mb-2">
          Contact &amp; Dialogue
        </p>

        <h1 className="font-serif-fraunces text-4xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] mb-4">
          Let's talk nutrition, code, or both.
        </h1>

        <p className="text-base sm:text-lg text-[var(--stone)] leading-relaxed font-sans-inter">
          I am always open to conversations about youth empowerment, community health research, machine learning projects, and international fellowships.
        </p>
      </div>

      {/* Main Email Box */}
      <div className="p-7 sm:p-8 border border-[var(--moss)] bg-[var(--paper-dim)] space-y-4">
        <div className="flex items-center justify-between text-xs text-[var(--stone)]">
          <span>Primary Email</span>
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1 text-[var(--moss)] hover:underline cursor-pointer"
          >
            {copied ? <Check className="w-3 h-3 text-[var(--moss)]" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied' : 'Copy email address'}</span>
          </button>
        </div>

        <a
          href={`mailto:${PORTFOLIO_DATA.profile.email}`}
          className="block font-serif-fraunces text-2xl sm:text-3xl text-[var(--ink)] hover:text-[var(--moss)] transition-colors break-all"
        >
          {PORTFOLIO_DATA.profile.email}
        </a>

        <div className="pt-4 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--stone)]">
          <span>Direct Phone &amp; WhatsApp:</span>
          <a
            href={`tel:${PORTFOLIO_DATA.profile.phone}`}
            className="font-medium text-[var(--ink)] hover:text-[var(--moss)]"
          >
            {PORTFOLIO_DATA.profile.phone}
          </a>
        </div>
      </div>

      {/* Online Profiles & Verification */}
      <div className="space-y-3">
        <h2 className="text-xs uppercase tracking-wider text-[var(--stone)] font-semibold">
          Profiles and Media Archives
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <a
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-[var(--line)] hover:border-[var(--moss)] bg-[var(--paper)] transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="font-medium text-[var(--ink)] block group-hover:text-[var(--moss)]">
                LinkedIn
              </span>
              <span className="text-xs text-[var(--stone)]">/in/priti-das-dipa</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--stone)] group-hover:text-[var(--moss)]" />
          </a>

          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-[var(--line)] hover:border-[var(--moss)] bg-[var(--paper)] transition-colors flex items-center justify-between group"
          >
            <div>
              <span className="font-medium text-[var(--ink)] block group-hover:text-[var(--moss)]">
                GitHub
              </span>
              <span className="text-xs text-[var(--stone)]">github.com/priti24bd</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--stone)] group-hover:text-[var(--moss)]" />
          </a>

          <a
            href={PORTFOLIO_DATA.profile.driveFolder}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-[var(--line)] hover:border-[var(--moss)] bg-[var(--paper)] transition-colors flex items-center justify-between group sm:col-span-2"
          >
            <div>
              <span className="font-medium text-[var(--ink)] block group-hover:text-[var(--moss)]">
                Field Photo &amp; Certificate Archive
              </span>
              <span className="text-xs text-[var(--stone)]">
                Google Drive folder containing high-resolution event and certificate photos
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[var(--stone)] group-hover:text-[var(--moss)]" />
          </a>
        </div>
      </div>

      {/* Résumé Action Button */}
      <div className="pt-4">
        <button
          onClick={onOpenResume}
          className="w-full py-3 border border-[var(--line)] hover:border-[var(--moss)] text-center text-xs sm:text-sm font-medium text-[var(--ink)] hover:text-[var(--moss)] bg-[var(--paper)] hover:bg-[var(--paper-dim)] transition-colors cursor-pointer"
        >
          View / Print Complete Résumé (PDF)
        </button>
      </div>

    </div>
  );
};
