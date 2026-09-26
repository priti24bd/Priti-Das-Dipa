import React from 'react';
import { FileText, Mail, MapPin, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HomePageProps {
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenResume }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 font-sans-inter">
      
      {/* 2-Column Academic Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Scholar Profile & Introduction */}
        <aside className="md:col-span-4 space-y-6">
          
          {/* Official Bio Photo */}
          <div className="border border-slate-200 bg-slate-50 p-2 shadow-2xs">
            <img
              src="/assets/images/profile.jpg?v=20260927-me2"
              alt="Priti Das Dipa"
              className="w-full h-auto object-cover rounded-none block"
            />
          </div>

          {/* Scholar Identification & Roles */}
          <div className="space-y-3 border-b border-slate-200 pb-5">
            <div>
              <h1 className="font-serif-newsreader text-2xl font-bold text-slate-900 tracking-tight">
                {PORTFOLIO_DATA.profile.name}
              </h1>
              <p className="text-xs text-slate-700 font-medium mt-0.5">
                {PORTFOLIO_DATA.profile.applicantStatus}
              </p>
            </div>

            <div className="text-xs text-slate-700 space-y-1.5 leading-relaxed">
              <div>
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
              </div>

              <div>
                <p className="font-medium text-slate-900">
                  Machine Learning Intern
                </p>
                <p className="text-slate-600">
                  FlyRank AI
                </p>
              </div>

              <div>
                <p className="font-medium text-slate-900">
                  Invited Youth Participant
                </p>
                <p className="text-slate-600">
                  UN Women CSW70
                </p>
              </div>
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

        {/* Right Column: Scholar About Statement */}
        <main className="md:col-span-8 space-y-8">
          
          <section className="space-y-5">
            <h2 className="font-serif-newsreader text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-tight border-b border-slate-200 pb-3">
              About
            </h2>

            <div className="space-y-4 text-slate-800 leading-relaxed text-base font-normal">
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

              <p className="pt-2 text-slate-900 font-medium">
                I am preparing for undergraduate studies beginning in Fall 2027, eager to immerse myself in an intellectually rigorous, interdisciplinary environment that prizes ethical inquiry and devotion to the common good.
              </p>
            </div>
          </section>

        </main>

      </div>

    </div>
  );
};
