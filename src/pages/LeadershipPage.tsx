import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Users, School, Globe, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const LeadershipPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
      
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
          Leadership &amp; Field Record
        </p>

        <h1 className="font-serif-fraunces text-4xl sm:text-5xl font-medium tracking-tight text-[var(--ink)] mb-4">
          Where I have put in the hours
        </h1>

        <p className="text-base sm:text-lg text-[var(--stone)] leading-relaxed max-w-2xl font-sans-inter">
          From organizing school nutrition camps in southwestern Bangladesh to building an international youth network across fifteen countries, leadership to me means showing up, listening carefully, and making sure the work actually reaches people.
        </p>
      </div>

      {/* Primary Role: NOVA Nourish Foundation */}
      <section className="p-7 sm:p-9 border border-[var(--moss)] bg-[var(--paper-dim)] bg-opacity-40 space-y-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--line)] pb-4">
          <div>
            <span className="text-xs text-[var(--moss)] font-semibold uppercase tracking-wider block mb-1">
              Founder &amp; Executive Director
            </span>
            <h2 className="font-serif-fraunces text-2xl sm:text-3xl font-medium text-[var(--ink)]">
              NOVA Nourish Foundation
            </h2>
          </div>
          <div className="text-xs text-[var(--stone)]">
            June 2025 to Present
          </div>
        </div>

        <p className="text-base text-[var(--ink)] leading-relaxed">
          I started NOVA Nourish Foundation with a simple conviction: youth health and nutrition in Bangladesh cannot be solved from behind a desk. What began as local school workshops has grown into an international youth movement with over 300 active volunteers across 15 countries, keeping a volunteer retention rate above 80 percent.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
          <div className="p-4 border border-[var(--line)] bg-[var(--paper)]">
            <div className="font-serif-fraunces text-2xl font-medium text-[var(--moss)] mb-1">
              5,000+ Students
            </div>
            <p className="text-xs text-[var(--stone)] leading-relaxed">
              Educated through adolescent nutrition workshops across 20+ secondary schools.
            </p>
          </div>

          <div className="p-4 border border-[var(--line)] bg-[var(--paper)]">
            <div className="font-serif-fraunces text-2xl font-medium text-[var(--moss)] mb-1">
              $7,000+ Funding
            </div>
            <p className="text-xs text-[var(--stone)] leading-relaxed">
              Secured through 15+ strategic partnerships with regional NGOs and partner organizations.
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h3 className="text-xs uppercase tracking-wider text-[var(--stone)] font-semibold">
            Key Initiatives &amp; Milestones
          </h3>
          <ul className="space-y-2 text-sm text-[var(--ink)] opacity-90">
            <li className="flex items-start gap-2.5">
              <span className="text-[var(--moss)] mt-1">•</span>
              <span>
                <strong>Nutritional Literacy Tours:</strong> Led community health sessions in 20+ schools, addressing iron-deficiency anemia, balanced dietary habits, and menstrual hygiene awareness among adolescent girls.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[var(--moss)] mt-1">•</span>
              <span>
                <strong>MHPSS Wellness Curriculum:</strong> Co-created an eight-week Mental Health and Psychosocial Support youth program that links mental wellbeing with physical nutrition.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[var(--moss)] mt-1">•</span>
              <span>
                <strong>Cross-Border Youth Assemblies:</strong> Organized over 30 virtual conferences and local workshops bringing together young organizers from South Asia, Southeast Asia, and beyond.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Additional Leadership Roles */}
      <section className="space-y-8">
        <h2 className="font-serif-fraunces text-2xl font-medium text-[var(--ink)] border-b border-[var(--line)] pb-3">
          Civic &amp; Volunteer Leadership
        </h2>

        {/* JAAGO Foundation */}
        <div className="p-6 border border-[var(--line)] bg-[var(--paper)] space-y-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <span className="text-xs text-[var(--stone)] font-semibold uppercase tracking-wider block">
                JAAGO Foundation
              </span>
              <h3 className="font-serif-fraunces text-xl font-medium text-[var(--ink)]">
                Division Trainer (Khulna Division)
              </h3>
            </div>
            <span className="text-xs text-[var(--stone)]">January 2025 to December 2025</span>
          </div>
          <p className="text-sm text-[var(--ink)] opacity-90 leading-relaxed">
            Selected to lead capacity-building workshops across all ten administrative districts of Khulna Division. Designed and delivered over 30 training sessions for youth volunteers aged 16 to 28, covering grassroots project management, needs assessments, and community engagement protocols.
          </p>
        </div>

        {/* Volunteer for Bangladesh */}
        <div className="p-6 border border-[var(--line)] bg-[var(--paper)] space-y-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <span className="text-xs text-[var(--stone)] font-semibold uppercase tracking-wider block">
                Volunteer for Bangladesh (VBD)
              </span>
              <h3 className="font-serif-fraunces text-xl font-medium text-[var(--ink)]">
                Project Officer (Bagerhat District)
              </h3>
            </div>
            <span className="text-xs text-[var(--stone)]">January 2025 to December 2025</span>
          </div>
          <p className="text-sm text-[var(--ink)] opacity-90 leading-relaxed">
            Elected Project Officer with a 90 percent vote of confidence from fellow volunteers. Supervised and executed five major community impact initiatives across nine Upazilas, focusing on clean water access, environmental conservation, and social welfare for vulnerable children.
          </p>
        </div>

        {/* National Children Task Force */}
        <div className="p-6 border border-[var(--line)] bg-[var(--paper)] space-y-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <span className="text-xs text-[var(--stone)] font-semibold uppercase tracking-wider block">
                National Children Task Force (NCTF)
              </span>
              <h3 className="font-serif-fraunces text-xl font-medium text-[var(--ink)]">
                Youth Mentor
              </h3>
            </div>
            <span className="text-xs text-[var(--stone)]">January 2024 to December 2024</span>
          </div>
          <p className="text-sm text-[var(--ink)] opacity-90 leading-relaxed">
            Mentored more than 1,000 secondary school students in Bagerhat on child rights, social responsibility, and staying enrolled in school despite financial hardship. Collaborated with local teachers and headmasters to support students at risk of early marriage and dropout.
          </p>
        </div>
      </section>

      {/* Bottom Navigation Link */}
      <div className="pt-8 border-t border-[var(--line)] flex items-center justify-between">
        <Link
          to="/"
          className="text-xs text-[var(--stone)] hover:text-[var(--ink)] transition-colors"
        >
          ← Return to Home
        </Link>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--moss)] hover:underline"
        >
          <span>Next: Explore Projects &amp; Innovation</span>
          <span>→</span>
        </Link>
      </div>

    </div>
  );
};
