import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutPageProps {
  onOpenResume: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenResume }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      
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
          Education, Honors &amp; Credentials
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans-inter max-w-2xl">
          Formal academic record, competitive national recognitions, international fellowships, and self-directed inquiries.
        </p>
      </div>

      {/* Formal Education */}
      <section className="space-y-4">
        <h2 className="font-serif-newsreader text-2xl font-normal text-slate-900 border-b border-slate-200 pb-2">
          Formal Education
        </h2>

        <div className="space-y-6">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 border border-slate-200 bg-white space-y-2"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif-newsreader text-xl font-semibold text-slate-900">
                  {edu.institution}
                </h3>
                <span className="text-xs text-slate-500 font-mono">
                  {edu.period}
                </span>
              </div>

              <p className="text-sm font-medium text-slate-800">
                {edu.degree}, <span className="text-slate-600">{edu.location}</span>
              </p>

              <div className="text-xs font-semibold text-slate-900 pt-1">
                {edu.grade}, {edu.notable}
              </div>

              <p className="text-xs text-slate-600 pt-1 border-t border-slate-100 font-sans-inter">
                Curriculum Focus: {edu.focus}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Honors, Fellowships & Grants */}
      <section className="space-y-4">
        <h2 className="font-serif-newsreader text-2xl font-normal text-slate-900 border-b border-slate-200 pb-2">
          Honors, Fellowships &amp; Grants
        </h2>

        <div className="divide-y divide-slate-200 border border-slate-200 bg-white">
          {PORTFOLIO_DATA.recognition.map((item, idx) => (
            <div
              key={idx}
              className="p-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 text-sm font-sans-inter"
            >
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-900">
                    {item.organization}
                  </span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs text-slate-500">{item.year}</span>
                </div>
                <h3 className="font-serif-newsreader text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.badge && (
                <span className="self-start text-xs text-slate-500 font-medium whitespace-nowrap">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Technical & Methodological Skills */}
      <section className="space-y-4">
        <h2 className="font-serif-newsreader text-2xl font-normal text-slate-900 border-b border-slate-200 pb-2">
          Methodological Competencies &amp; Languages
        </h2>

        <div className="p-6 border border-slate-200 bg-white space-y-4 text-xs sm:text-sm text-slate-700 font-sans-inter">
          <div>
            <span className="font-semibold text-slate-900 block mb-1">
              Programming &amp; Data:
            </span>
            <p className="text-slate-600">
              {PORTFOLIO_DATA.skills.programming.join(' · ')}
            </p>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <span className="font-semibold text-slate-900 block mb-1">
              Hardware Prototyping &amp; Instrumentation:
            </span>
            <p className="text-slate-600">
              {PORTFOLIO_DATA.skills.technical.join(' · ')}
            </p>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <span className="font-semibold text-slate-900 block mb-1">
              Community Leadership &amp; Advocacy:
            </span>
            <p className="text-slate-600">
              {PORTFOLIO_DATA.skills.leadership.join(' · ')}
            </p>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <span className="font-semibold text-slate-900 block mb-1">
              Languages:
            </span>
            <p className="text-slate-600">
              {PORTFOLIO_DATA.skills.languages.map(l => `${l.name} (${l.proficiency})`).join(' · ')}
            </p>
          </div>
        </div>
      </section>

      {/* CV Callout */}
      <div className="p-6 bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif-newsreader text-lg font-semibold text-slate-900">
            Comprehensive Curriculum Vitae
          </h3>
          <p className="text-xs text-slate-600">
            A complete academic record formatted for college admissions and fellowship review.
          </p>
        </div>

        <button
          onClick={onOpenResume}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded hover:bg-slate-800 transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Open Academic CV</span>
        </button>
      </div>

    </div>
  );
};
