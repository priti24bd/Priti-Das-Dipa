import React, { useRef } from 'react';
import { Sparkles } from 'lucide-react';

interface HobbySectionProps {
  standalone?: boolean;
}

export const HobbySection: React.FC<HobbySectionProps> = ({ standalone = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="hobby" className={`space-y-6 ${standalone ? '' : 'pt-10 border-t border-slate-200'}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-blue-900 font-semibold block mb-1">
            Personal Passion &amp; Mentorship
          </span>
          <h2 className="font-serif-newsreader text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
            Hobby: Conversational English &amp; Speaking Mentorship
          </h2>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono">
          <Sparkles className="w-3 h-3 text-amber-600" />
          <span>Upcoming on Upwork</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Video Player Column - View Only */}
        <div className="md:col-span-5 lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[340px] border border-slate-300 bg-slate-950 shadow-md overflow-hidden relative">
            <video
              ref={videoRef}
              src="/assets/videos/speaking.mp4"
              poster="/assets/images/speaking_poster.jpg"
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-[9/16] object-cover bg-slate-950 block"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="text-[11px] text-slate-500 font-mono mt-2 text-center">
            Priti Das Dipa · Personal Video Message (0:58)
          </p>
        </div>

        {/* Narrative & Upwork Column */}
        <div className="md:col-span-7 lg:col-span-7 space-y-5 text-slate-800 font-sans-inter">
          <div className="p-4 bg-slate-50 border-l-4 border-blue-900 text-sm sm:text-base font-serif-newsreader text-slate-900 leading-relaxed italic">
            "I love to talk to people, and help specially those who have fear to speak English, and I'm going to work in Upwork."
          </div>

          <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-slate-700">
            <p>
              I genuinely love connecting with people from all walks of life, listening to their stories, and building friendships across cultures. To me, speaking is not just about memorizing grammatical rules—it is about engaging from the heart, listening generously, and communicating clearly.
            </p>
            <p>
              One of my deepest personal hobbies is supporting learners who feel hesitation or fear when speaking English. English is not my mother tongue, but through self-discipline and steady practice, I discovered how empowering it is when you can express your thoughts freely and fluidly.
            </p>
            <p>
              I truly believe that if you can communicate clearly, there is nothing in this world that is too difficult for you. My goal is to foster a warm, judgment-free space where fear is replaced with curiosity and genuine confidence.
            </p>
          </div>

          {/* Upwork Initiative Card */}
          <div className="p-5 border border-slate-200 bg-white space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-slate-900 font-mono uppercase tracking-wider">
                  Freelance Initiative · Upwork
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">Global Remote</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              I am expanding this hobby into professional freelance coaching on <strong>Upwork</strong>, offering 1-on-1 English conversational practice, pronunciation guidance, and speaking confidence sessions for non-native speakers worldwide.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200">
                Overcoming Speaking Anxiety
              </span>
              <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200">
                Heart-to-Heart Conversation
              </span>
              <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200">
                Confidence &amp; Clarity
              </span>
              <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200">
                Language Fluency
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
