import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const StoryPage: React.FC = () => {
  const essay = PORTFOLIO_DATA.personalEssay;

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

        <h1 className="font-serif-newsreader text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight">
          Beyond the Curriculum Vitae
        </h1>

        <p className="font-serif-newsreader italic text-xl text-slate-600 leading-relaxed">
          Reflections on service, quiet discipline, and intellectual grounding.
        </p>

        <p className="text-base text-slate-700 leading-relaxed font-sans-inter pt-2">
          {essay.intro}
        </p>
      </div>

      {/* Narrative Essay Sections */}
      <div className="space-y-12 border-t border-slate-200 pt-8">
        {essay.sections.map((section, idx) => (
          <article key={idx} className="space-y-4">
            <h2 className="font-serif-newsreader text-2xl font-semibold text-slate-900">
              {section.heading}
            </h2>

            {section.quote && (
              <blockquote className="border-l-2 border-slate-900 pl-4 py-1 font-serif-newsreader italic text-lg text-slate-700 leading-relaxed">
                "{section.quote}"
              </blockquote>
            )}

            <div className="space-y-3 text-base text-slate-800 leading-relaxed font-sans-inter">
              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="pt-8 border-t border-slate-200 flex items-center justify-between text-xs font-sans-inter text-slate-600">
        <Link
          to="/projects"
          className="hover:text-slate-900 transition-colors"
        >
          ← Research &amp; Projects
        </Link>
        <Link
          to="/about"
          className="hover:text-slate-900 transition-colors"
        >
          Education &amp; Honors →
        </Link>
      </div>

    </div>
  );
};
