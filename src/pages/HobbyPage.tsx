import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { HobbySection } from '../components/HobbySection';

export const HobbyPage: React.FC = () => {
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
          Hobbies &amp; Personal Passions
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans-inter max-w-2xl">
          Personal interests beyond formal research: conversational English practice, language mentoring, and connecting with people from around the world.
        </p>
      </div>

      <HobbySection standalone={true} />
    </div>
  );
};
