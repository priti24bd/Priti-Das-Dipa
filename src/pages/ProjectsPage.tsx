import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Cpu, Waves, Apple, BrainCircuit } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'climate' | 'health' | 'tech'>('all');

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      
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
          Projects &amp; Field Prototypes
        </p>

        <h1 className="font-serif-fraunces text-4xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] mb-4">
          What I have built, tested, and deployed
        </h1>

        <p className="text-base sm:text-lg text-[var(--stone)] leading-relaxed max-w-2xl font-sans-inter">
          I enjoy solving practical community problems using hardware, machine learning, and simple, durable designs that work in rural conditions.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[var(--line)] pb-4">
        {[
          { id: 'all', label: 'All Projects' },
          { id: 'climate', label: 'Climate & Early Warning' },
          { id: 'health', label: 'Public Health & Nutrition' },
          { id: 'tech', label: 'Hardware & Machine Learning' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id as any)}
            className={`text-xs px-3.5 py-1.5 transition-colors cursor-pointer ${
              activeCategory === tab.id
                ? 'bg-[var(--moss)] text-[var(--paper)] font-medium'
                : 'bg-[var(--paper-dim)] text-[var(--ink)] hover:bg-[var(--paper-elevated)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-7 sm:p-8 border border-[var(--line)] bg-[var(--paper)] hover:border-[var(--moss)] transition-colors space-y-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--line-subtle)] pb-3">
              <div>
                <span className="text-xs text-[var(--moss)] font-semibold uppercase tracking-wider block mb-1">
                  {project.categoryLabel}
                </span>
                <h2 className="font-serif-fraunces text-2xl font-medium text-[var(--ink)]">
                  {project.title}
                </h2>
              </div>
              <span className="text-xs text-[var(--stone)]">{project.year}</span>
            </div>

            <p className="text-sm sm:text-base text-[var(--ink)] opacity-90 leading-relaxed font-sans-inter">
              {project.summary}
            </p>

            <div className="p-4 bg-[var(--paper-dim)] text-xs text-[var(--stone)] leading-relaxed border-l-2 border-[var(--moss)]">
              <strong className="text-[var(--ink)] font-medium block mb-1">
                Context and Recognition:
              </strong>
              {project.organization}
            </div>

            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider text-[var(--stone)] font-semibold">
                Details and Outcomes
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--ink)] opacity-90">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--moss)] mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2.5 py-1 bg-[var(--paper-dim)] text-[var(--ink)] border border-[var(--line-subtle)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation Link */}
      <div className="pt-8 border-t border-[var(--line)] flex items-center justify-between">
        <Link
          to="/leadership"
          className="text-xs text-[var(--stone)] hover:text-[var(--ink)] transition-colors"
        >
          ← Previous: Leadership
        </Link>
        <Link
          to="/story"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--moss)] hover:underline"
        >
          <span>Next: Read My Personal Story</span>
          <span>→</span>
        </Link>
      </div>

    </div>
  );
};
