import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles, HeartHandshake, Compass, GraduationCap, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HomePageProps {
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenResume }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      
      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-xs uppercase tracking-widest text-[var(--moss)] font-semibold mb-4">
          Hello and welcome
        </p>

        <h1 className="font-serif-fraunces text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[var(--ink)] leading-[1.05] mb-6">
          I am Priti Das <em className="italic font-normal text-[var(--moss)]">Dipa</em>, a community builder and student from Bangladesh.
        </h1>

        <p className="font-serif-newsreader italic text-xl sm:text-2xl text-[var(--moss)] leading-relaxed mb-6 max-w-2xl">
          "Care does not require an auditorium. It begins with quiet attention, clean data, and showing up for the community you call home."
        </p>

        <p className="text-base sm:text-lg text-[var(--ink)] opacity-90 leading-relaxed max-w-2xl mb-8">
          I am the founder and executive director of NOVA Nourish Foundation, where we work across schools and communities to improve youth nutrition and wellbeing. Alongside grassroots health work, I explore how applied machine learning and low-cost sensors can help solve rural challenges like flood warnings and child health monitoring.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            to="/leadership"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--moss)] transition-colors text-sm font-medium"
          >
            <span>See my leadership work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/story"
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-[var(--line)] hover:border-[var(--moss)] text-[var(--ink)] hover:text-[var(--moss)] transition-colors text-sm font-medium"
          >
            <BookOpen className="w-4 h-4 text-[var(--moss)]" />
            <span>Read my personal story</span>
          </Link>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-[var(--line)] hover:border-[var(--moss)] text-[var(--ink)] hover:text-[var(--moss)] transition-colors text-sm font-medium cursor-pointer"
          >
            <span>View résumé</span>
          </button>
        </div>
      </section>

      {/* Current Highlights Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 bg-[var(--paper-dim)] border border-[var(--line)]">
          <div className="text-xs uppercase tracking-wider text-[var(--stone)] font-medium mb-3">
            What I am working on right now
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-serif-fraunces text-base font-semibold text-[var(--ink)] mb-1">
                NOVA Nourish Foundation
              </h3>
              <p className="text-[var(--stone)] leading-relaxed">
                Leading youth health initiatives, school nutritional workshops, and an eight-week mental wellbeing curriculum.
              </p>
            </div>

            <div>
              <h3 className="font-serif-fraunces text-base font-semibold text-[var(--ink)] mb-1">
                United Nations CSW70
              </h3>
              <p className="text-[var(--stone)] leading-relaxed">
                Selected as an invited youth participant with UN Women to contribute to deliberations on gender equity and youth inclusion.
              </p>
            </div>

            <div>
              <h3 className="font-serif-fraunces text-base font-semibold text-[var(--ink)] mb-1">
                FlyRank AI &amp; CS50AI
              </h3>
              <p className="text-[var(--stone)] leading-relaxed">
                Interning in machine learning pipelines, building upon foundations from Harvard's introduction to artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Route Directory - Clean, intuitive cards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="border-t border-[var(--line)] pt-12">
          <div className="text-xs uppercase tracking-widest text-[var(--stone)] font-semibold mb-2">
            Explore My Work
          </div>
          <h2 className="font-serif-fraunces text-2xl sm:text-3xl font-medium text-[var(--ink)] mb-8">
            Choose a section to read more
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Leadership Route Card */}
            <Link
              to="/leadership"
              className="p-6 border border-[var(--line)] bg-[var(--paper)] hover:border-[var(--moss)] hover:bg-[var(--paper-dim)] transition-all group block"
            >
              <div className="text-xs text-[var(--moss)] font-semibold uppercase tracking-wider mb-2">
                01 / Leadership
              </div>
              <h3 className="font-serif-fraunces text-xl font-medium text-[var(--ink)] group-hover:text-[var(--moss)] transition-colors mb-2">
                Community &amp; Youth Leadership
              </h3>
              <p className="text-sm text-[var(--stone)] leading-relaxed mb-4">
                From launching NOVA Nourish Foundation to training youth leaders across ten administrative districts with the JAAGO Foundation.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--moss)] group-hover:underline">
                Read leadership experience <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* Projects Route Card */}
            <Link
              to="/projects"
              className="p-6 border border-[var(--line)] bg-[var(--paper)] hover:border-[var(--moss)] hover:bg-[var(--paper-dim)] transition-all group block"
            >
              <div className="text-xs text-[var(--moss)] font-semibold uppercase tracking-wider mb-2">
                02 / Projects
              </div>
              <h3 className="font-serif-fraunces text-xl font-medium text-[var(--ink)] group-hover:text-[var(--moss)] transition-colors mb-2">
                Projects &amp; Innovation
              </h3>
              <p className="text-sm text-[var(--stone)] leading-relaxed mb-4">
                Field-tested flood sensors, community nutrition bags funded by GAIN, and practical hardware automation builds.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--moss)] group-hover:underline">
                Explore projects and builds <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* Personal Story Route Card */}
            <Link
              to="/story"
              className="p-6 border border-[var(--line)] bg-[var(--paper)] hover:border-[var(--moss)] hover:bg-[var(--paper-dim)] transition-all group block"
            >
              <div className="text-xs text-[var(--moss)] font-semibold uppercase tracking-wider mb-2">
                03 / Personal Essay
              </div>
              <h3 className="font-serif-fraunces text-xl font-medium text-[var(--ink)] group-hover:text-[var(--moss)] transition-colors mb-2">
                Beyond the Résumé
              </h3>
              <p className="text-sm text-[var(--stone)] leading-relaxed mb-4">
                Afternoon tea with my grandfather, checking blood pressure for village elders, and the values that shape how I lead.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--moss)] group-hover:underline">
                Read the personal essay <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            {/* Education & Honors Route Card */}
            <Link
              to="/about"
              className="p-6 border border-[var(--line)] bg-[var(--paper)] hover:border-[var(--moss)] hover:bg-[var(--paper-dim)] transition-all group block"
            >
              <div className="text-xs text-[var(--moss)] font-semibold uppercase tracking-wider mb-2">
                04 / Background
              </div>
              <h3 className="font-serif-fraunces text-xl font-medium text-[var(--ink)] group-hover:text-[var(--moss)] transition-colors mb-2">
                Education &amp; Honors
              </h3>
              <p className="text-sm text-[var(--stone)] leading-relaxed mb-4">
                Academic results (GPA 4.92, ranked second among 1,200 students), international fellowships, and technical skills.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--moss)] group-hover:underline">
                View background and credentials <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* Simple Personal Sign-Off */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 border border-[var(--line)] bg-[var(--paper)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif-fraunces text-xl text-[var(--ink)] mb-1">
              Interested in speaking or collaborating?
            </h3>
            <p className="text-sm text-[var(--stone)]">
              I welcome conversations about public health, research fellowships, and youth leadership.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--moss)] text-[var(--paper)] hover:opacity-90 transition-opacity text-sm font-medium shrink-0"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
};
