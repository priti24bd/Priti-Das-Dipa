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


        </aside>

        {/* Right Column: Scholar About Statement */}
        <main className="md:col-span-8 space-y-8">
          
          <section className="space-y-5">
            <h2 className="font-serif-newsreader text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-tight border-b border-slate-200 pb-3">
              About
            </h2>

            <div className="space-y-4 text-slate-800 leading-relaxed text-base font-normal">
              <p>
                I am a self-learner, youth leader, and an aspiring undergraduate scholar from Bangladesh. Growing up in a place that often faces river flooding and seasonal saltiness I learned early that true change starts with observation, empathy and steady personal responsibility toward neighbours. I feel proud of the lessons that shaped my view of community care.
              </p>

              <p>
                As Founder and Executive Director of the NOVA Nourish Foundation I lead health and nutrition programs for girls and families that do not have enough resources. What started as classroom talks in schools has grown into an international youth movement with more than 120 volunteers in 15 countries. Through hands-on workshops in than five secondary schools we have reached over 2,000 people with useful food education, guidance on adolescent hygiene and training for peer health ambassadors. Supported by the Global Alliance for Improved Nutrition I launched the Hanging Nutrition Bag Initiative, one of 16 youth projects funded across the country to keep micronutrient supplies dry and safe from pests in homes that're prone to flooding. I feel proud to see the impact of the NOVA Nourish Foundation across borders.
              </p>

              <p>
                My curiosity goes into solving problems with science and technology. As a Machine Learning Intern at FlyRank AI I build data preparation steps and predictive models using ideas from Harvard University’s CS50AI course. In the imaGen Ventures Youth Challenge, supported by the U.S. Embassy in Dhaka and UNICEF I joined a team that designed a water-level sensor and a drone alert prototype. We finished in the four out of 135 teams. I feel excited when my work with FlyRank AI turns data into tools.
              </p>

              <p>
                Besides engineering and public health I have done research into human attachment styles. How people relate to each other. Inspired by the work of John Bowlby and Mary Ainsworth I studied how early relationships affect safety, trust and how conflicts are solved in teams of volunteers. This inquiry has deeply influenced how I listen, lead and build respect among organizers. I feel that understanding attachment helps me connect better with the community.
              </p>

              <p>
                In 2026 I was chosen as a youth participant to join the Session of the United Nations Commission on the Status of Women with UN Women. I took part in talks about health and women’s empowerment. I feel honored to represent my region at such a forum.
              </p>

              <p className="pt-2 text-slate-900 font-medium">
                I am getting ready, for studies that will start in Fall 2027. I am excited to dive into a learning environment that’s tough mixes subjects and values honest research and care for the common good. I look forward to continuing my journey as a student researcher and community organizer.
              </p>
            </div>
          </section>

        </main>

      </div>

    </div>
  );
};
