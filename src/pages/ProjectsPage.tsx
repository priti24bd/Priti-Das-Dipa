import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'climate' | 'health' | 'inquiry' | 'tech'>('all');

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
      
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
          Research &amp; Technical Projects
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans-inter max-w-2xl">
          Field telemetry hardware, self-directed behavioral inquiries, community nutrition systems, and machine learning pipelines developed for public health, environmental resilience, and peer wellbeing.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1 border-b border-slate-200 pb-3">
        {[
          { id: 'all', label: 'All Works' },
          { id: 'climate', label: 'Climate & Hydrology' },
          { id: 'health', label: 'Public Health & Nutrition' },
          { id: 'tech', label: 'Robotics & Automation' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id as any)}
            className={`text-xs px-3 py-1.5 rounded transition-colors cursor-pointer ${
              activeCategory === tab.id
                ? 'bg-slate-900 text-white font-medium'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-10">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="p-6 sm:p-8 border border-slate-200 bg-white space-y-5"
          >
            {/* Header */}
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs text-slate-500 block mb-0.5">
                  {project.organization}
                </span>
                <h2 className="font-serif-newsreader text-2xl font-semibold text-slate-900">
                  {project.title}
                </h2>
              </div>
              <span className="text-xs text-slate-500 font-mono">
                {project.year}
              </span>
            </div>

            {/* Tagline & Abstract */}
            <div className="space-y-2 text-sm text-slate-700 leading-relaxed font-sans-inter">
              <p className="font-medium text-slate-900">
                {project.tagline}
              </p>
              <p className="text-slate-600">
                {project.summary}
              </p>
            </div>

            {/* Field Image if applicable */}
            {project.id === 'nutrition' && (
              <figure className="border border-slate-200 bg-slate-50 overflow-hidden">
                <img
                  src="/assets/images/nonprofit_nutrition.jpg"
                  alt="Hanging Nutrition Bag initiative in Bagerhat"
                  className="w-full h-auto object-cover max-h-[440px]"
                />
                <figcaption className="px-3.5 py-2 text-xs text-slate-500 border-t border-slate-200 bg-white flex items-center justify-between">
                  <span>Hanging Nutrition Bag field distribution and community briefing</span>
                  <span className="font-medium text-slate-700">Rural Bagerhat, Bangladesh</span>
                </figcaption>
              </figure>
            )}

            {/* Impact Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-slate-100">
              {project.impactMetrics.map((metric, mIdx) => (
                <div key={mIdx} className="space-y-0.5">
                  <span className="text-xs text-slate-500 block">
                    {metric.label}
                  </span>
                  <span className="font-serif-newsreader text-base font-semibold text-slate-900">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Detailed Architecture & Methods */}
            <div className="space-y-2 pt-1">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-800">
                System Methodology &amp; Outcomes
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc list-inside leading-relaxed font-sans-inter">
                {project.details.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>

            {/* Methods & Tools */}
            <div className="pt-2 text-xs text-slate-500 font-sans-inter">
              <span className="font-medium text-slate-700">Methods &amp; Domain: </span>
              {project.technologies.join(' · ')}
            </div>

          </article>
        ))}
      </div>

    </div>
  );
};
