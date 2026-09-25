import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Mail, MapPin, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HomePageProps {
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenResume }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      
      {/* 2-Column Academic Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Scholar Profile Sidebar */}
        <aside className="md:col-span-4 space-y-6">
          
          {/* Portrait Photo: Public Speaking & Youth Leadership */}
          <div className="border border-slate-200 bg-slate-50 p-2 shadow-2xs">
            <img
              src="/assets/images/priti_bio.jpg"
              alt="Priti Das Dipa - Public Speaking and Youth Leadership"
              className="w-full h-auto aspect-[3/4] object-cover object-top"
            />
          </div>

          {/* Scholar Identification */}
          <div className="space-y-3 border-b border-slate-200 pb-5">
            <div>
              <h1 className="font-serif-newsreader text-2xl font-bold text-slate-900 tracking-tight">
                {PORTFOLIO_DATA.profile.name}
              </h1>
              <p className="text-xs text-slate-700 font-medium mt-0.5">
                {PORTFOLIO_DATA.profile.applicantStatus}
              </p>
            </div>

            <div className="text-xs text-slate-700 space-y-1 leading-relaxed">
              <p className="font-medium text-slate-900">
                Founder &amp; Executive Director
              </p>
              <p className="text-slate-600">
                <a
                  href={PORTFOLIO_DATA.profile.nnfWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-900 underline underline-offset-2"
                >
                  NOVA Nourish Foundation
                </a>
              </p>
              <p className="font-medium text-slate-900 pt-1">
                Machine Learning Intern
              </p>
              <p className="text-slate-600">
                FlyRank AI
              </p>
              <p className="font-medium text-slate-900 pt-1">
                Invited Youth Participant
              </p>
              <p className="text-slate-600">
                UN Women CSW70
              </p>
            </div>
          </div>

          {/* Contact & Scholarly Links */}
          <div className="space-y-2 text-xs text-slate-600 border-b border-slate-200 pb-5">
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>{PORTFOLIO_DATA.profile.location}</span>
            </div>

            <div className="flex items-center gap-2 text-slate-700">
              <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="hover:text-blue-900 transition-colors"
              >
                {PORTFOLIO_DATA.profile.email}
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-1.5 font-medium text-slate-900">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 text-blue-900 hover:underline cursor-pointer text-left"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae (PDF)</span>
              </button>

              <a
                href={PORTFOLIO_DATA.profile.nnfWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-900 transition-colors"
              >
                <span>NOVA Nourish Foundation Portal</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-900 transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-900 transition-colors"
              >
                <span>GitHub Repositories</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Academic Record */}
          <div className="p-3.5 bg-slate-50 border border-slate-200 text-xs space-y-1">
            <span className="font-semibold text-slate-900 block">
              Academic Record
            </span>
            <p className="text-slate-700">
              Higher Secondary Certificate: <strong>GPA 4.92 / 5.00</strong>
            </p>
            <p className="text-slate-600">
              Ranked 2nd out of 1,200 students at Tungipara Govt. College.
            </p>
          </div>

          {/* Core Areas of Inquiry */}
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-slate-900">
              Areas of Intellectual Inquiry
            </h2>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li>Community Health &amp; Micronutrient Policy</li>
              <li>Human Attachment Theory &amp; Group Dynamics</li>
              <li>Low-Cost Environmental Sensor Engineering</li>
              <li>Applied Machine Learning for Social Good</li>
              <li>Youth Leadership &amp; Community Organizing</li>
            </ul>
          </div>

        </aside>

        {/* Right Column: Main Scholar Narrative & Academic Overview */}
        <main className="md:col-span-8 space-y-10">
          
          {/* Welcome & Scholar Statement */}
          <section className="space-y-4">
            <h2 className="font-serif-newsreader text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-tight">
              About
            </h2>

            <div className="space-y-4 text-slate-800 leading-relaxed text-base font-normal font-sans-inter">
              <p>
                I am a student researcher, community organizer, and aspiring undergraduate scholar from southwestern coastal Bangladesh. Growing up in a region frequently challenged by river flooding and seasonal salinity, I learned early that lasting change begins with quiet observation, empathy, and consistent personal responsibility toward one's neighbours.
              </p>

              <p>
                As Founder and Executive Director of the <strong>NOVA Nourish Foundation (NNF)</strong>, I lead grassroots health and nutrition initiatives focused on adolescent girls and underserved families. What began as small classroom conversations in rural schools has grown into an international youth movement with over <strong>120 dedicated volunteers across 15 countries</strong>. Through hands-on workshops across <strong>5+ secondary schools</strong>, we have reached more than <strong>2,000 individuals</strong> with practical dietary education, adolescent hygiene guidance, and peer health ambassador training. Supported by the <strong>Global Alliance for Improved Nutrition (GAIN)</strong>, I initiated the <em>Hanging Nutrition Bag Initiative</em>, one of 16 youth projects funded nationally, to protect essential micronutrient supplies from household dampness and pests in flood-prone homes.
              </p>

              <p>
                My curiosity extends deeply into empirical problem-solving and technology. As a Machine Learning Intern at <strong>FlyRank AI</strong>, I build data preprocessing pipelines and predictive models, drawing on computational principles from <strong>Harvard University's CS50AI</strong> (CS50's Introduction to Artificial Intelligence with Python). During the imaGen Ventures Youth Challenge backed by the U.S. Embassy Dhaka and UNICEF, I worked with a team to design an IoT ultrasonic hydrology sensor and drone alert prototype, ranking in the <strong>Top 4 out of 135 competitive teams</strong>.
              </p>

              <p>
                Alongside engineering and public health, I have pursued independent, self-directed research into <strong>human attachment styles and interpersonal relationships</strong>. Fascinated by John Bowlby and Mary Ainsworth's work, I explored how early relational patterns shape emotional safety, trust, and conflict resolution within adolescent volunteer teams. This curiosity-driven inquiry has fundamentally shaped how I listen, lead, and foster mutual respect among young organizers.
              </p>

              <p>
                In 2026, I was selected as an invited youth participant to contribute to the <strong>70th Session of the United Nations Commission on the Status of Women (CSW70)</strong> with UN Women, engaging in international discussions on adolescent health and women's empowerment.
              </p>

              <p className="pt-1 text-slate-900 font-medium">
                I am preparing for undergraduate studies beginning in Fall 2027, eager to immerse myself in an intellectually rigorous, interdisciplinary environment that prizes ethical inquiry and devotion to the common good.
              </p>
            </div>

            {/* Quick Action Navigation */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded hover:bg-slate-800 transition-colors"
              >
                <span>Research &amp; Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/leadership"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-300 text-slate-800 text-xs font-medium rounded hover:border-slate-800 hover:text-slate-950 transition-colors"
              >
                <span>Leadership &amp; Community Impact</span>
              </Link>

              <Link
                to="/story"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-300 text-slate-800 text-xs font-medium rounded hover:border-slate-800 hover:text-slate-950 transition-colors"
              >
                <span>Personal Reflections</span>
              </Link>
            </div>
          </section>

          {/* Academic Inquiry Points */}
          <section className="space-y-4 border-t border-slate-200 pt-8">
            <h2 className="font-serif-newsreader text-2xl font-normal text-slate-900">
              Primary Research &amp; Intellectual Inquiries
            </h2>

            <div className="space-y-3 text-sm text-slate-700 leading-relaxed font-sans-inter">
              <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
                <h3 className="font-semibold text-slate-900 text-sm">
                  1. Community-Anchored Adolescent Nutrition and Hygiene
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Investigating iron-deficiency anemia and dietary diversity in coastal communities, designing peer-led educational workshops and low-cost moisture-safe household storage solutions that overcome local taboos.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
                <h3 className="font-semibold text-slate-900 text-sm">
                  2. Self-Directed Study: Attachment Styles &amp; Interpersonal Relationships
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Independent theoretical synthesis examining how secure versus insecure attachment orientations influence adolescent peer communication, emotional vulnerability, and collaboration in volunteer-led community initiatives.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 space-y-1">
                <h3 className="font-semibold text-slate-900 text-sm">
                  3. Early-Warning Hydrology &amp; Low-Cost Edge Telemetry
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Prototyping how ultrasonic water-level sensors and microcontrollers can provide hours of advance warning to rural households before riverbanks crest, combining hardware sensing with localized alert dissemination.
                </p>
              </div>
            </div>
          </section>

          {/* Recent News & Academic Milestones */}
          <section className="space-y-4 border-t border-slate-200 pt-8">
            <h2 className="font-serif-newsreader text-2xl font-normal text-slate-900">
              Recent Milestones
            </h2>

            <div className="divide-y divide-slate-200 text-sm font-sans-inter">
              
              <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <span className="text-xs font-semibold text-slate-500 w-24 shrink-0">
                  Jan 2026
                </span>
                <div className="space-y-0.5">
                  <p className="text-slate-900 font-medium">
                    Invited Youth Participant, UN Women CSW70
                  </p>
                  <p className="text-xs text-slate-600">
                    Selected to participate in international deliberations for the 70th Session of the Commission on the Status of Women.
                  </p>
                </div>
              </div>

              <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <span className="text-xs font-semibold text-slate-500 w-24 shrink-0">
                  2026
                </span>
                <div className="space-y-0.5">
                  <p className="text-slate-900 font-medium">
                    Machine Learning Intern at FlyRank AI &amp; CS50AI Coursework
                  </p>
                  <p className="text-xs text-slate-600">
                    Developing machine learning workflows and completing Harvard's CS50 Introduction to Artificial Intelligence with Python.
                  </p>
                </div>
              </div>

              <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <span className="text-xs font-semibold text-slate-500 w-24 shrink-0">
                  2025
                </span>
                <div className="space-y-0.5">
                  <p className="text-slate-900 font-medium">
                    National Nutrition Grant, Global Alliance for Improved Nutrition (GAIN)
                  </p>
                  <p className="text-xs text-slate-600">
                    Awarded competitive grant as 1 of only 16 youth projects selected nationwide for the Hanging Nutrition Bag initiative.
                  </p>
                </div>
              </div>

              <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <span className="text-xs font-semibold text-slate-500 w-24 shrink-0">
                  2025
                </span>
                <div className="space-y-0.5">
                  <p className="text-slate-900 font-medium">
                    Top 4 Finalist, imaGen Ventures Youth Challenge
                  </p>
                  <p className="text-xs text-slate-600">
                    Ranked in Top 4 of 135 teams by U.S. Embassy Dhaka, Generation Unlimited, JAAGO, and UNICEF for IoT flood telemetry prototype.
                  </p>
                </div>
              </div>

              <div className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <span className="text-xs font-semibold text-slate-500 w-24 shrink-0">
                  Oct 2024
                </span>
                <div className="space-y-0.5">
                  <p className="text-slate-900 font-medium">
                    Ranked 2nd of 1,200 Students in HSC Examinations
                  </p>
                  <p className="text-xs text-slate-600">
                    Graduated with GPA 4.92 / 5.00 from Tungipara Govt. College.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Direct Scholarly Links to Core Pages */}
          <section className="space-y-4 border-t border-slate-200 pt-8">
            <h2 className="font-serif-newsreader text-2xl font-normal text-slate-900">
              Selected Portfolios &amp; Dossiers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <Link
                to="/projects"
                className="p-4 border border-slate-200 bg-white hover:border-slate-800 transition-colors group block space-y-2"
              >
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Technical &amp; Psychological Research
                </div>
                <h3 className="font-serif-newsreader text-lg font-semibold text-slate-900 group-hover:text-blue-900 transition-colors">
                  Research, Telemetry &amp; Inquiries →
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Field hydrology sensing, attachment theory self-study, and machine learning pipelines.
                </p>
              </Link>

              <Link
                to="/leadership"
                className="p-4 border border-slate-200 bg-white hover:border-slate-800 transition-colors group block space-y-2"
              >
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Grassroots Leadership
                </div>
                <h3 className="font-serif-newsreader text-lg font-semibold text-slate-900 group-hover:text-blue-900 transition-colors">
                  NOVA Nourish Foundation &amp; Community Impact →
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  2,000+ individuals reached, 120+ active volunteers across 15 nations, and public health campaigns.
                </p>
              </Link>

            </div>
          </section>

        </main>

      </div>

    </div>
  );
};
