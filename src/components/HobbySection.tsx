import React, { useRef, useState, useEffect } from 'react';
import { Sparkles, Play, RefreshCw, Upload, CheckCircle2, Shield } from 'lucide-react';

interface HobbySectionProps {
  standalone?: boolean;
}

export const HobbySection: React.FC<HobbySectionProps> = ({ standalone = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string>('./assets/videos/speaking.mp4');
  const [posterSrc, setPosterSrc] = useState<string>('./assets/images/speaking_poster.jpg');

  // Secret admin mode: only shown if URL has ?admin=1 or #/hobby?admin=1 or toggled via double click
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    // Check URL search or hash parameters for admin mode
    const searchParams = new URLSearchParams(window.location.search);
    const hashParams = window.location.hash.includes('?') 
      ? new URLSearchParams(window.location.hash.split('?')[1]) 
      : null;

    if (searchParams.get('admin') === '1' || searchParams.get('edit') === '1' || hashParams?.get('admin') === '1') {
      setIsAdmin(true);
    }

    // Check if user has previously uploaded their camera recording to client storage
    try {
      const openDB = indexedDB.open('PritiMediaDB', 1);
      openDB.onupgradeneeded = () => {
        const db = openDB.result;
        if (!db.objectStoreNames.contains('videos')) {
          db.createObjectStore('videos');
        }
      };
      openDB.onsuccess = () => {
        const db = openDB.result;
        if (db.objectStoreNames.contains('videos')) {
          const tx = db.transaction('videos', 'readonly');
          const store = tx.objectStore('videos');
          const req = store.get('speaking_video');
          req.onsuccess = () => {
            if (req.result && req.result instanceof Blob) {
              const blobUrl = URL.createObjectURL(req.result);
              setVideoSrc(blobUrl);
            }
          };
        }
      };
    } catch {
      // Fallback seamlessly to ./assets/videos/speaking.mp4
    }
  }, []);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadSuccess(false);

    // Instant local preview
    const blobUrl = URL.createObjectURL(file);
    setVideoSrc(blobUrl);

    // Save to IndexedDB so browser always remembers this exact recording
    try {
      const openDB = indexedDB.open('PritiMediaDB', 1);
      openDB.onsuccess = () => {
        const db = openDB.result;
        const tx = db.transaction('videos', 'readwrite');
        const store = tx.objectStore('videos');
        store.put(file, 'speaking_video');
      };
    } catch {}

    // Post to server backend if running in dev or server environment
    try {
      const res = await fetch('/api/upload-video', {
        method: 'POST',
        headers: { 'Content-Type': file.type || 'video/mp4' },
        body: file,
      });
      if (res.ok) {
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 4000);
      }
    } catch {}

    setIsUploading(false);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <section id="hobby" className={`space-y-6 ${standalone ? '' : 'pt-10 border-t border-slate-200'}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <span 
            onDoubleClick={() => setIsAdmin(prev => !prev)}
            title="Double-click to toggle admin options"
            className="text-[11px] font-mono uppercase tracking-wider text-blue-900 font-semibold block mb-1 cursor-default select-none"
          >
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
        {/* Video Player Column - View Only For Public */}
        <div className="md:col-span-5 lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[340px] border border-slate-300 bg-slate-950 shadow-md overflow-hidden relative group">
            <video
              ref={videoRef}
              key={videoSrc}
              poster={posterSrc}
              controls
              playsInline
              preload="auto"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full aspect-[9/16] object-cover bg-slate-950 block"
            >
              <source src={videoSrc} type="video/mp4" />
              <source src="./assets/videos/speaking.mp4" type="video/mp4" />
              <source src="/assets/videos/speaking.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Seamless One-Tap Play Overlay when Paused */}
            {!isPlaying && (
              <button
                onClick={handlePlayToggle}
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center bg-black/35 hover:bg-black/20 transition-all cursor-pointer group-hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg border border-white/40 transition-transform">
                  <Play className="w-7 h-7 fill-slate-900 ml-1" />
                </div>
              </button>
            )}
          </div>

          <p className="text-[11px] text-slate-500 font-mono mt-2.5 text-center">
            Priti Das Dipa · Personal Video Message
          </p>

          {/* Admin Upload Panel: ONLY visible if ?admin=1 or toggled by Priti */}
          {isAdmin && (
            <div className="w-full max-w-[340px] mt-4 p-3 bg-slate-100 border border-slate-300 rounded text-left space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                <Shield className="w-3.5 h-3.5 text-blue-800" />
                <span>Admin Video Management</span>
              </div>
              <p className="text-[11px] text-slate-600">
                This panel is private to you. Choose your camera video file to update it.
              </p>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="video/mp4,video/webm,video/quicktime,video/*"
                className="hidden"
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="w-full py-1.5 px-3 bg-blue-900 hover:bg-blue-800 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {isUploading ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>Processing &amp; Optimizing...</span>
                  </>
                ) : uploadSuccess ? (
                  <>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Saved Successfully!</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-3 h-3 text-amber-300" />
                    <span>Upload New Video File</span>
                  </>
                )}
              </button>
            </div>
          )}
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
