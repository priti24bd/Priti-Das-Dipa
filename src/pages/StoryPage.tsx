import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Coffee, Heart, Users, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const StoryPage: React.FC = () => {
  const essay = PORTFOLIO_DATA.personalEssay;

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
          Personal Essay
        </p>

        <h1 className="font-serif-fraunces text-4xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] mb-4">
          Beyond the Résumé
        </h1>

        <p className="font-serif-newsreader italic text-xl text-[var(--moss)] leading-relaxed mb-6">
          A few things about me that a standard curriculum vitae cannot contain.
        </p>

        <p className="text-base text-[var(--ink)] opacity-90 leading-relaxed font-sans-inter">
          {essay.intro}
        </p>
      </div>

      {/* Narrative Essay Sections */}
      <div className="space-y-12 border-t border-[var(--line)] pt-10">
        {essay.sections.map((section, idx) => (
          <article key={idx} className="space-y-4">
            <h2 className="font-serif-fraunces text-2xl font-medium text-[var(--ink)]">
              {section.heading}
            </h2>

            {section.quote && (
              <blockquote className="border-l-2 border-[var(--moss)] pl-4 py-1 font-serif-newsreader italic text-lg text-[var(--moss)] leading-relaxed">
                "{section.quote}"
              </blockquote>
            )}

            <div className="space-y-3 text-base text-[var(--ink)] opacity-90 leading-relaxed font-sans-inter">
              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Sign-off */}
      <div className="pt-8 border-t border-[var(--line)] flex items-center justify-between">
        <Link
          to="/projects"
          className="text-xs text-[var(--stone)] hover:text-[var(--ink)] transition-colors"
        >
          ← Previous: Projects
        </Link>
        <Link
          to="/about"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--moss)] hover:underline"
        >
          <span>Next: Education &amp; Honors</span>
          <span>→</span>
        </Link>
      </div>

    </div>
  );
};
