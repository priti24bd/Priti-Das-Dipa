import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Award, BookOpen, Wrench, Languages } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutPageProps {
  onOpenResume: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenResume }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-14">
      
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
          Academic Journey &amp; Credentials
        </p>

        <h1 className="font-serif-fraunces text-4xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] mb-4">
          Education, honors, and skills
        </h1>

        <p className="text-base sm:text-lg text-[var(--stone)] leading-relaxed max-w-2xl font-sans-inter">
          A summary of my formal education, international fellowships, and the tools I use for research and building.
        </p>
      </div>

      {/* Education Section */}
      <section className="space-y-6">
        <h2 className="font-serif-fraunces text-2xl font-medium text-[var(--ink)] border-b border-[var(--line)] pb-3">
          Formal Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 border border-[var(--line)] bg-[var(--paper)] space-y-3"
            >
              <div className="text-xs text-[var(--moss)] font-semibold uppercase tracking-wider">
                {edu.period}
              </div>
              <h3 className="font-serif-fraunces text-xl font-medium text-[var(--ink)]">
                {edu.institution}
              </h3>
              <p className="text-sm font-medium text-[var(--ink)] opacity-90">
                {edu.degree}
              </p>
              <div className="text-xs text-[var(--moss)] font-semibold">
                {edu.grade} • {edu.notable}
              </div>
              <p className="text-xs text-[var(--stone)] leading-relaxed pt-1 border-t border-[var(--line-subtle)]">
                Focus: {edu.focus}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Honors & Fellowships */}
      <section className="space-y-6">
        <h2 className="font-serif-fraunces text-2xl font-medium text-[var(--ink)] border-b border-[var(--line)] pb-3">
          Honors &amp; Fellowships
        </h2>

        <div className="space-y-4">
          {PORTFOLIO_DATA.recognition.map((item, idx) => (
            <div
              key={idx}
              className="p-5 border border-[var(--line)] bg-[var(--paper)] flex flex-col sm:flex-row sm:items-start justify-between gap-3"
            >
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[var(--moss)] uppercase tracking-wider">
                    {item.organization}
                  </span>
                  <span className="text-xs text-[var(--stone)]">({item.year})</span>
                </div>
                <h3 className="font-serif-fraunces text-lg font-medium text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--stone)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.badge && (
                <span className="self-start text-[11px] px-2.5 py-1 bg-[var(--paper-dim)] text-[var(--stone)] border border-[var(--line-subtle)] whitespace-nowrap">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Languages */}
      <section className="space-y-6">
        <h2 className="font-serif-fraunces text-2xl font-medium text-[var(--ink)] border-b border-[var(--line)] pb-3">
          Skills &amp; Languages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="p-6 border border-[var(--line)] bg-[var(--paper)] space-y-3">
            <h3 className="font-serif-fraunces text-lg font-medium text-[var(--ink)]">
              Programming &amp; Technical Tools
            </h3>
            <p className="text-xs text-[var(--stone)] leading-relaxed">
              Languages: Python, C++, HTML, CSS, JavaScript, and introductory SQL.
            </p>
            <p className="text-xs text-[var(--stone)] leading-relaxed">
              Tools &amp; Hardware: Arduino microcontrollers, IoT sensors, Git, GitHub, VS Code, Canva, and Notion.
            </p>
          </div>

          <div className="p-6 border border-[var(--line)] bg-[var(--paper)] space-y-3">
            <h3 className="font-serif-fraunces text-lg font-medium text-[var(--ink)]">
              Languages
            </h3>
            <ul className="space-y-1.5 text-xs text-[var(--stone)]">
              {PORTFOLIO_DATA.skills.languages.map((lang, idx) => (
                <li key={idx} className="flex justify-between border-b border-[var(--line-subtle)] pb-1">
                  <span className="font-medium text-[var(--ink)]">{lang.name}</span>
                  <span>{lang.proficiency}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Résumé Action Prompt */}
      <div className="p-6 bg-[var(--paper-dim)] border border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif-fraunces text-lg text-[var(--ink)]">
            Looking for a complete academic curriculum vitae?
          </h3>
          <p className="text-xs text-[var(--stone)]">
            You can view or print my formatted two-page academic résumé directly.
          </p>
        </div>
        <button
          onClick={onOpenResume}
          className="px-4 py-2 text-xs font-medium bg-[var(--moss)] text-[var(--paper)] hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
        >
          Open Résumé (PDF)
        </button>
      </div>

      {/* Bottom Sign-off */}
      <div className="pt-8 border-t border-[var(--line)] flex items-center justify-between">
        <Link
          to="/story"
          className="text-xs text-[var(--stone)] hover:text-[var(--ink)] transition-colors"
        >
          ← Previous: Personal Story
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--moss)] hover:underline"
        >
          <span>Next: Get in Touch</span>
          <span>→</span>
        </Link>
      </div>

    </div>
  );
};
