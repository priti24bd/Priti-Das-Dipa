import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Upload } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const LeadershipPage: React.FC = () => {
  const [trainingPhoto, setTrainingPhoto] = useState<string>(() => {
    return localStorage.getItem('priti_training_photo') || '/assets/images/6.jpg?v=20260929-v3';
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setTrainingPhoto(result);
          try {
            localStorage.setItem('priti_training_photo', result);
          } catch {
            // ignore quota error
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      
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
          Leadership &amp; Community Health Initiatives
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans-inter max-w-2xl">
          Field leadership, organizational governance, and grassroots health campaigns across southwestern Bangladesh and internationally.
        </p>
      </div>

      {/* Primary Role: NOVA Nourish Foundation */}
      <section className="p-6 sm:p-8 border border-slate-300 bg-white space-y-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
          <div>
            <span className="text-xs text-slate-500 block mb-0.5">
              Founder &amp; Executive Director
            </span>
            <h2 className="font-serif-newsreader text-2xl sm:text-3xl font-semibold text-slate-900">
              NOVA Nourish Foundation (NNF)
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.profile.nnfWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-900 hover:underline font-medium inline-flex items-center gap-1"
            >
              <span>Visit Official NNF Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-xs text-slate-500 font-mono">
              June 2025 to Present
            </span>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans-inter">
          Founded to combat systemic adolescent malnutrition, dietary illiteracy, and health stigma in Bangladesh. Built an international youth network of over <strong>120 volunteers across 15+ countries</strong> with an 80%+ volunteer retention rate, reaching <strong>2,000+ youth across 5+ secondary schools</strong> through 10+ events, workshops, and youth conferences.
        </p>

        {/* Real Field Photo */}
        <figure className="border border-slate-200 bg-slate-50 overflow-hidden">
          <img
            src="/assets/images/nonprofit_nutrition.jpg"
            alt="NOVA Nourish Foundation community outreach in Bagerhat"
            className="w-full h-auto object-cover max-h-[460px]"
          />
          <figcaption className="px-3.5 py-2 text-xs text-slate-500 border-t border-slate-200 bg-white flex items-center justify-between">
            <span>NOVA Nourish field health camp and adolescent nutritional literacy tour</span>
            <span className="font-medium text-slate-700">Rural Bagerhat, Bangladesh</span>
          </figcaption>
        </figure>

        {/* Quantified Organizational Record */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-slate-100">
          <div className="space-y-0.5">
            <span className="text-xs text-slate-500 block">Youth Reached</span>
            <span className="font-serif-newsreader text-lg font-semibold text-slate-900">2,000+ Youth</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-xs text-slate-500 block">Schools Engaged</span>
            <span className="font-serif-newsreader text-lg font-semibold text-slate-900">5+ Schools</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-xs text-slate-500 block">Global Network</span>
            <span className="font-serif-newsreader text-lg font-semibold text-slate-900">120+ in 15+ Nations</span>
          </div>
          <div className="space-y-0.5">
            <span className="text-xs text-slate-500 block">Funding &amp; Resources</span>
            <span className="font-serif-newsreader text-lg font-semibold text-slate-900">$300+ &amp; 3 NGOs</span>
          </div>
        </div>

        {/* Core Pillars from NNF */}
        <div className="space-y-2">
          <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-800">
            Core Programmatic Initiatives &amp; Milestones
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside leading-relaxed font-sans-inter">
            <li>
              <strong>Youth Health Ambassador Training:</strong> Trained local student leaders in secondary schools to act as peer educators, delivering ongoing workshops on balanced diets, iron intake, and adolescent hygiene.
            </li>
            <li>
              <strong>Maternal &amp; Adolescent Dietary Literacy:</strong> Organized workshops empowering mothers and adolescent girls with practical nutritional knowledge, emphasizing affordable indigenous food combinations.
            </li>
            <li>
              <strong>Hanging Nutrition Bag Initiative:</strong> Selected as 1 of only 16 youth projects funded nationally by the Global Alliance for Improved Nutrition (GAIN), distributing moisture-safe food storage packs to protect essential micronutrients in flood-prone households.
            </li>
            <li>
              <strong>Youth Wellness Curriculum:</strong> Co-designed and deployed an 8-week structured curriculum integrating adolescent emotional wellbeing with evidence-based dietary guidance.
            </li>
            <li>
              <strong>Cross-Border Peer Exchange:</strong> Convened digital and in-person summits connecting youth organizers across 15 nations to share grassroots health strategies and field assessment methodologies.
            </li>
            <li>
              <strong>Institutional Alliances:</strong> Established formal operational partnerships with 15+ community organizations, standardizing volunteer training and transparent impact metrics.
            </li>
          </ul>
        </div>
      </section>

      {/* Additional Institutional Roles */}
      <section className="space-y-6">
        <h2 className="font-serif-newsreader text-2xl font-normal text-slate-900 border-b border-slate-200 pb-2">
          Institutional &amp; Community Service Roles
        </h2>

        {/* Workshop Facilitation Photo */}
        <figure className="border border-slate-200 bg-slate-50 overflow-hidden shadow-2xs">
          <img
            src={trainingPhoto}
            alt="Priti Das Dipa as focal trainer with local youth in Mollahat Upazila, Bagerhat"
            className="w-full h-auto object-cover max-h-[500px]"
          />
          <figcaption className="p-4 sm:p-5 text-xs sm:text-sm text-slate-700 border-t border-slate-200 bg-white space-y-2 font-sans-inter">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold text-slate-900 text-sm sm:text-base font-serif-newsreader">
                Youth Training Session · Focal Trainer
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 font-mono">
                  April 2025 · Mollahat Upazila, Bagerhat District
                </span>
                <label className="cursor-pointer inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 border border-slate-200 transition-colors">
                  <Upload className="w-3 h-3" />
                  <span>Replace Photo (6.jpg)</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              It was a training session with local youths aged 14–28, where I was the focal trainer in Mollahat Upazila under Bagerhat district in April 2025, facilitating sessions on the topics of gender equality, equity, lobbying, and advocacy.
            </p>
          </figcaption>
        </figure>

        <div className="space-y-6">
          {PORTFOLIO_DATA.leadership.slice(1).map((role) => (
            <div
              key={role.id}
              className="p-6 border border-slate-200 bg-white space-y-3"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100 pb-2">
                <div>
                  <h3 className="font-serif-newsreader text-xl font-semibold text-slate-900">
                    {role.role}
                  </h3>
                  <span className="text-xs text-slate-600 block">
                    {role.organization}, {role.location}
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  {role.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans-inter">
                {role.description}
              </p>

              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc list-inside leading-relaxed font-sans-inter">
                {role.achievements.map((item, aIdx) => (
                  <li key={aIdx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
