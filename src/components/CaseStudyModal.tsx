import React from 'react';
import { X, ArrowUpRight, CheckCircle2, Cpu, Waves, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        className="bg-[var(--paper)] text-[var(--ink)] border border-[var(--line)] w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[var(--stone)] hover:text-[var(--ink)] transition-colors cursor-pointer border border-[var(--line)] rounded-sm"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Case Study Meta */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[var(--stone)] mb-2 font-sans-inter">
          <span>{project.year}</span>
          <span>·</span>
          <span className="text-[var(--moss)] font-medium">{project.categoryLabel}</span>
        </div>

        <h2
          id="case-study-title"
          className="font-serif-fraunces text-2xl sm:text-4xl font-medium text-[var(--ink)] tracking-tight mb-3"
        >
          {project.title}
        </h2>

        <div className="text-sm font-sans-inter text-[var(--stone)] mb-6 border-b border-[var(--line)] pb-4">
          In partnership with: <span className="text-[var(--ink)] font-medium">{project.organization}</span>
        </div>

        {/* Impact Stat Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[var(--paper-dim)] border border-[var(--line)] mb-8">
          {project.impactMetrics.map((stat, idx) => (
            <div key={idx} className="border-r border-[var(--line-subtle)] pr-2 last:border-none">
              <div className="font-serif-fraunces text-2xl text-[var(--ink)] font-semibold">{stat.value}</div>
              <div className="text-xs text-[var(--stone)] mt-1 font-sans-inter">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Executive Summary */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--stone)] mb-2 font-sans-inter">
            The Problem &amp; Architecture
          </h3>
          <p className="text-base text-[var(--ink)] leading-relaxed font-sans-inter">
            {project.summary}
          </p>
        </div>

        {/* Key Engineering / Operational Steps */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--stone)] mb-3 font-sans-inter">
            Implementation &amp; Results
          </h3>
          <ul className="space-y-3 font-sans-inter text-sm text-[var(--ink)]">
            {project.details.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[var(--moss)] font-bold text-sm">―</span>
                <span className="opacity-90 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies / Methodologies */}
        <div className="mb-8 pt-6 border-t border-[var(--line)]">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--stone)] mb-3 font-sans-inter">
            Methods, Tools &amp; Technologies
          </h3>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-[var(--stone)] font-sans-inter">
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={idx}>
                <span className="text-[var(--ink)] font-medium">{tech}</span>
                {idx < project.technologies.length - 1 && <span className="text-[var(--line)]">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Action button */}
        <div className="flex items-center justify-between pt-6 border-t border-[var(--line)] text-xs">
          <span className="text-[var(--stone)] font-serif-newsreader italic">
            Documented as part of Priti Das Dipa's engineering archive.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--moss)] transition-colors rounded-sm font-medium cursor-pointer"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};
