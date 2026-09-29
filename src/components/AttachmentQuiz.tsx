import React, { useState } from 'react';
import { 
  HeartHandshake, 
  HelpCircle, 
  RotateCcw, 
  Share2, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  AlertCircle, 
  Compass, 
  BookOpen,
  Sparkles,
  UserCheck
} from 'lucide-react';

interface Question {
  id: number;
  text: string;
  dimension: 'anxiety' | 'avoidance';
  reverse?: boolean;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "I often worry that close partners or friends don't value or care about me as deeply as I care about them.",
    dimension: 'anxiety',
  },
  {
    id: 2,
    text: "I prefer not to show others how I feel deep down, keeping my innermost emotional world private.",
    dimension: 'avoidance',
  },
  {
    id: 3,
    text: "When someone I care about seems distant or slow to reply, I immediately worry what I might have done wrong.",
    dimension: 'anxiety',
  },
  {
    id: 4,
    text: "I find it relatively easy and comforting to depend on close partners and ask them for emotional support.",
    dimension: 'avoidance',
    reverse: true,
  },
  {
    id: 5,
    text: "I crave extreme closeness and sometimes worry that my desire for connection overwhelms or pushes others away.",
    dimension: 'anxiety',
  },
  {
    id: 6,
    text: "I feel uneasy or subtly suffocated when someone gets too emotionally dependent on me.",
    dimension: 'avoidance',
  },
  {
    id: 7,
    text: "I rarely worry about being abandoned, rejected, or unappreciated in my close relationships.",
    dimension: 'anxiety',
    reverse: true,
  },
  {
    id: 8,
    text: "When personal conflict arises, my instinctive reaction is to shut down, retreat, or deal with it strictly alone.",
    dimension: 'avoidance',
  },
  {
    id: 9,
    text: "If a misunderstanding happens with someone close, I find it hard to focus on other tasks until it is completely resolved.",
    dimension: 'anxiety',
  },
  {
    id: 10,
    text: "I am comfortable expressing my vulnerabilities and emotional needs without fearing loss of self-sufficiency.",
    dimension: 'avoidance',
    reverse: true,
  },
  {
    id: 11,
    text: "I find myself frequently seeking reassurance from others that our bond is strong and intact.",
    dimension: 'anxiety',
  },
  {
    id: 12,
    text: "I prize my independence so strongly that depending on anyone feels risky, unnatural, or uncomfortable.",
    dimension: 'avoidance',
  },
];

interface AttachmentProfile {
  style: 'Secure' | 'Anxious-Preoccupied' | 'Dismissive-Avoidant' | 'Fearful-Avoidant';
  subtitle: string;
  tagline: string;
  badgeColor: string;
  howTheyReact: string[];
  triggers: string[];
  strengths: string[];
  suggestions: string[];
  relationalAdvice: string;
}

const ATTACHMENT_PROFILES: Record<string, AttachmentProfile> = {
  Secure: {
    style: 'Secure',
    subtitle: 'Low Anxiety · Low Avoidance (~50% of Population)',
    tagline: 'Comfortable with emotional intimacy, open vulnerability, and mutual interdependence.',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    howTheyReact: [
      'Communicates feelings, desires, and personal boundaries directly without relying on mind-reading or passive-aggressive tests.',
      'Navigates conflict constructively: views disagreements as shared problems to solve rather than existential threats to the bond.',
      'Can soothe themselves effectively while also offering consistent, empathetic validation to partners.',
      'Does not panic when alone, nor feels threatened when a partner needs temporary solitude.'
    ],
    triggers: [
      'Prolonged emotional dishonesty or repeated stonewalling by partners who refuse to communicate.',
      'Partners who violate agreed-upon boundaries or engage in manipulative relational games.'
    ],
    strengths: [
      'Acts as a steady "secure base" and calming presence in high-stress partnerships and team settings.',
      'High distress tolerance and capacity to listen without defensiveness.',
      'Easily fosters psychological safety and mutual trust.'
    ],
    suggestions: [
      'Recognize that insecure partners (anxious or avoidant) do not intentionally react out of malice, but from activated nervous-system defense mechanisms.',
      'When interacting with an anxious partner, proactively offer clear reassurance before they have to ask.',
      'When interacting with an avoidant partner, give them respectful space to decompress while setting a clear time to reconnect gently.'
    ],
    relationalAdvice: 'Your balance of self-worth and trust in others makes you exceptionally resilient. Continue leading with calm clarity and fostering relational safety.'
  },
  'Anxious-Preoccupied': {
    style: 'Anxious-Preoccupied',
    subtitle: 'High Anxiety · Low Avoidance (~20% of Population)',
    tagline: 'Deeply craves closeness and warmth, but hyper-vigilant to signs of rejection or distance.',
    badgeColor: 'bg-amber-50 text-amber-900 border-amber-300',
    howTheyReact: [
      'Hyper-attuned to microscopic shifts in partner tone, facial expressions, or response delays (hyperactivating strategies).',
      'Under stress, may engage in "protest behaviors" (sending multiple urgent messages, withdrawing to elicit concern, or demanding immediate closure).',
      'Tends to over-function and give abundantly in relationships, often neglecting own boundaries in the hope of securing emotional reciprocity.',
      'Equates a partner’s need for space or silence with imminent abandonment or loss of love.'
    ],
    triggers: [
      'Unanswered texts, delayed communication, or unexplained emotional distance.',
      'Ambiguous relationship status, subtle dismissal of feelings, or avoidant body language.'
    ],
    strengths: [
      'Deeply compassionate, generous, emotionally invested, and attentive to their loved ones’ needs.',
      'Tenacious commitment to relationship repair and passionate about cultivating genuine connection.',
      'Highly intuitive and observant of group atmosphere and team emotional undercurrents.'
    ],
    suggestions: [
      'Practice the "Pause Before Protest": when triggered by delayed communication, wait at least 30 minutes and engage in a calming sensory activity before sending an anxious message.',
      'Express needs directly using "I-statements" instead of blame (e.g., "I feel disconnected today, could we spend 15 uninterrupted minutes together this evening?" instead of "You never have time for me").',
      'Cultivate emotional sovereignty: invest in hobbies, friendships, and intellectual projects where your self-worth is self-generated rather than tethered to another person\'s validation.',
      'Learn somatic self-soothing: deep diaphragmatic breathing and grounding exercises regulate the amygdala when abandonment fear surges.'
    ],
    relationalAdvice: 'Your capacity for love and depth is extraordinary. By anchoring your security within yourself, you transform relational anxiety into steady, magnetic intimacy.'
  },
  'Dismissive-Avoidant': {
    style: 'Dismissive-Avoidant',
    subtitle: 'Low Anxiety · High Avoidance (~25% of Population)',
    tagline: 'Values fierce self-reliance and emotional independence; suppresses vulnerability when pressured.',
    badgeColor: 'bg-blue-50 text-blue-900 border-blue-300',
    howTheyReact: [
      'Deactivates emotional systems when intimacy feels demanding: pulls away, buries self in work, logic, or solo hobbies.',
      'Instinctively distrusts dependency: believes that relying on others inevitably leads to disappointment or loss of autonomy.',
      'Can appear calm, rational, or detached during heated disputes, viewing emotional outbursts as irrational or dramatic.',
      'May idealize the "lone wolf" identity and minimize their own emotional needs and those of their partner.'
    ],
    triggers: [
      'Intense emotional demands, rapid relationship escalation, or feeling cornered into immediate vulnerable disclosures.',
      'Perceptions of being controlled, micro-managed, or having personal autonomy infringed.'
    ],
    strengths: [
      'Calm, highly capable, and composed under pressure; rarely panics in tactical or crisis situations.',
      'Respects physical autonomy and gives partners ample freedom and breathing room.',
      'Practical problem solver who focuses on tangible solutions without getting overwhelmed by emotion.'
    ],
    suggestions: [
      'Acknowledge that interdependence is a biological human need, not a moral weakness or failure of will.',
      'Practice "Regulated Pacing": when feeling overwhelmed in a conversation, say: "I care about this and want to hear you, but my system is overwhelmed. Can I take a 20-minute break to clear my head, and we resume at 4:00 PM?" (Crucial: always set the return time so partners do not feel abandoned).',
      'Take small, calibrated risks with vulnerability: share one authentic worry or feeling per week with someone you trust.',
      'Notice the physical sensations of pulling away (tight chest, numbness, desire to bolt) and practice staying present for just two minutes longer.'
    ],
    relationalAdvice: 'Your self-sufficiency and stability are immense gifts. Opening the door just slightly to mutual vulnerability allows you to experience the rich, grounded connection you quietly deserve.'
  },
  'Fearful-Avoidant': {
    style: 'Fearful-Avoidant',
    subtitle: 'High Anxiety · High Avoidance (~5% of Population)',
    tagline: 'Deeply yearns for intimacy yet terrified of vulnerability; experiences an exhausting push-pull cycle.',
    badgeColor: 'bg-purple-50 text-purple-900 border-purple-300',
    howTheyReact: [
      'Experiences the "come close / go away" relational dialectic: craves closeness, but when it is achieved, feels trapped or terrified and pulls back sharply.',
      'Difficulty finding a stable internal resting place: doubts own worthiness of love while simultaneously doubting whether others are safe to trust.',
      'Nervous system vacillates between hyperarousal (anxious panic) and hypoarousal (numb avoidance).',
      'May perceive subtle slights as intentional betrayals, triggering intense self-protective defenses.'
    ],
    triggers: [
      'Sudden shifts between closeness and distance in a partner, creating traumatic disorientation.',
      'Feeling emotionally exposed or realizing that they have become vulnerable to someone who could hurt them.'
    ],
    strengths: [
      'Enormous depth of empathy and intuition; deeply understands the full spectrum of human vulnerability and struggle.',
      'Resilient and capable of profound emotional growth and insight when committed to healing.',
      'Fiercely loyal once earned safety and reciprocal integrity have been established.'
    ],
    suggestions: [
      'Focus first on nervous system regulation: grounding, somatic awareness, and bilateral movement help calm emotional storms before making relational decisions.',
      'Build trust incrementally on a "staircase model" rather than all-or-nothing extremes; let people earn trust step-by-step.',
      'Name the cycle out loud to trusted partners: "Part of me wants to be close right now, but another part feels overwhelmed and wants to run. I am working on staying present."',
      'Cultivate "earned security" through consistent, predictable relationships, trauma-informed self-reflection, and compassionate self-talk.'
    ],
    relationalAdvice: 'Your journey toward earned security is one of the most courageous paths in human psychology. With patient self-compassion and gentle pacing, profound healing is completely within reach.'
  }
};

export const AttachmentQuiz: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentStep, setCurrentStep] = useState<number>(0); // 0 to 11
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const currentQuestion = QUESTIONS[currentStep];

  const handleSelectScore = (score: number) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: score };
    setAnswers(updatedAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Calculate scores
  const calculateResult = () => {
    let anxietySum = 0;
    let anxietyCount = 0;
    let avoidanceSum = 0;
    let avoidanceCount = 0;

    QUESTIONS.forEach(q => {
      const raw = answers[q.id] || 3;
      const score = q.reverse ? 6 - raw : raw;

      if (q.dimension === 'anxiety') {
        anxietySum += score;
        anxietyCount++;
      } else {
        avoidanceSum += score;
        avoidanceCount++;
      }
    });

    const anxietyScore = anxietyCount > 0 ? anxietySum / anxietyCount : 3;
    const avoidanceScore = avoidanceCount > 0 ? avoidanceSum / avoidanceCount : 3;

    const isHighAnxiety = anxietyScore >= 3.0;
    const isHighAvoidance = avoidanceScore >= 3.0;

    let style: 'Secure' | 'Anxious-Preoccupied' | 'Dismissive-Avoidant' | 'Fearful-Avoidant';
    if (!isHighAnxiety && !isHighAvoidance) {
      style = 'Secure';
    } else if (isHighAnxiety && !isHighAvoidance) {
      style = 'Anxious-Preoccupied';
    } else if (!isHighAnxiety && isHighAvoidance) {
      style = 'Dismissive-Avoidant';
    } else {
      style = 'Fearful-Avoidant';
    }

    return {
      style,
      anxietyScore: Number(anxietyScore.toFixed(2)),
      avoidanceScore: Number(avoidanceScore.toFixed(2)),
      profile: ATTACHMENT_PROFILES[style]
    };
  };

  const result = isCompleted ? calculateResult() : null;

  const handleCopyResults = () => {
    if (!result) return;
    const text = `My Adult Attachment Assessment Result:
Primary Style: ${result.style}
Dimensions: Anxiety: ${result.anxietyScore} / 5.0 | Avoidance: ${result.avoidanceScore} / 5.0
${result.profile.tagline}

Key Relational Pattern:
${result.profile.howTheyReact[0]}

Assessment based on the Book "Attached" and Adult Attachment Theory (Self-learning project by Priti Das Dipa).`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const progressPercentage = Math.round(((currentStep + (isCompleted ? 1 : 0)) / QUESTIONS.length) * 100);

  return (
    <div className="border border-slate-300 bg-white shadow-xs overflow-hidden font-sans-inter">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-300">
            <HeartHandshake className="w-4 h-4 text-emerald-400" />
            <span>Self-Learning Exploration · Inspired by "Attached"</span>
          </div>
          <h2 className="font-serif-newsreader text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Discover Your Relational Attachment Style
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Attachment is the "salt in the dish"—even with all the other ingredients, without it a relationship cannot thrive. Take this 12-question quiz to uncover your pattern, how you react in love, and suggestions.
          </p>
        </div>

        {isCompleted && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 rounded transition-colors cursor-pointer shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Test</span>
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-1.5 border-b border-slate-200">
        <div 
          className="bg-slate-900 h-1.5 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Active Assessment Flow */}
      {!isCompleted ? (
        <div className="p-6 sm:p-8 space-y-8 max-w-3xl mx-auto">
          
          {/* Step Indicator */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono border-b border-slate-100 pb-3">
            <span>QUESTION {currentStep + 1} OF {QUESTIONS.length}</span>
            <span>{Math.round(((currentStep) / QUESTIONS.length) * 100)}% COMPLETED</span>
          </div>

          {/* Question Text */}
          <div className="min-h-[100px] flex items-center">
            <p className="font-serif-newsreader text-xl sm:text-2xl text-slate-900 leading-snug">
              "{currentQuestion.text}"
            </p>
          </div>

          {/* Likert Scale Selection */}
          <div className="space-y-3">
            <div className="text-xs text-slate-500 font-medium text-center uppercase tracking-wider mb-2">
              Select how accurately this reflects you in close personal relationships:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-2.5">
              {[
                { score: 1, label: 'Strongly Disagree', short: 'Disagree' },
                { score: 2, label: 'Somewhat Disagree', short: 'Slightly Disagree' },
                { score: 3, label: 'Neutral / Mixed', short: 'Neutral' },
                { score: 4, label: 'Somewhat Agree', short: 'Slightly Agree' },
                { score: 5, label: 'Strongly Agree', short: 'Agree' },
              ].map((opt) => {
                const isSelected = answers[currentQuestion.id] === opt.score;
                return (
                  <button
                    key={opt.score}
                    type="button"
                    onClick={() => handleSelectScore(opt.score)}
                    className={`py-3 px-3 border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 group rounded ${
                      isSelected
                        ? 'border-slate-900 bg-slate-900 text-white shadow-xs font-semibold'
                        : 'border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <span className={`text-base font-serif-newsreader font-bold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {opt.score}
                    </span>
                    <span className="text-[11px] leading-tight block">
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between text-[11px] text-slate-400 px-1 pt-1">
              <span>← Highly Untrue of Me</span>
              <span>Highly True of Me →</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`inline-flex items-center gap-1.5 text-xs font-medium py-2 px-3 rounded transition-colors ${
                currentStep === 0
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100 cursor-pointer'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Question</span>
            </button>

            <span className="text-xs text-slate-400 italic hidden sm:inline">
              Answer based on your genuine instinctive feelings, not how you think you "should" feel.
            </span>
          </div>

        </div>
      ) : (
        /* Completed Results View */
        result && (
          <div className="p-6 sm:p-10 space-y-8 animate-in fade-in duration-300">
            
            {/* Results Header Card */}
            <div className={`p-6 sm:p-8 border rounded ${result.profile.badgeColor} space-y-3`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  YOUR PRIMARY ATTACHMENT ORIENTATION
                </span>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-white/80 border border-current">
                  {result.profile.subtitle}
                </span>
              </div>

              <h3 className="font-serif-newsreader text-3xl sm:text-4xl font-bold tracking-tight">
                {result.style}
              </h3>

              <p className="text-sm sm:text-base leading-relaxed opacity-95">
                {result.profile.tagline}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
                <div>
                  <span className="opacity-75">Attachment Anxiety Dimension: </span>
                  <strong>{result.anxietyScore} / 5.0</strong>
                  <span className="opacity-75 text-[11px]"> ({result.anxietyScore >= 3.0 ? 'High' : 'Low'})</span>
                </div>
                <div>
                  <span className="opacity-75">Attachment Avoidance Dimension: </span>
                  <strong>{result.avoidanceScore} / 5.0</strong>
                  <span className="opacity-75 text-[11px]"> ({result.avoidanceScore >= 3.0 ? 'High' : 'Low'})</span>
                </div>
              </div>
            </div>

            {/* Visual 2D Attachment Coordinate Map */}
            <div className="p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-serif-newsreader text-lg font-semibold text-slate-900 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-slate-700" />
                  <span>Dimensional Coordinate Model (ECR Framework)</span>
                </h4>
                <span className="text-xs text-slate-500 font-mono">
                  Coordinates: ({result.avoidanceScore}, {result.anxietyScore})
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Attachment style is not a fixed diagnostic label; it is a fluid location across two fundamental human biological dimensions: <strong>Attachment Anxiety</strong> (fear of abandonment/rejection) and <strong>Attachment Avoidance</strong> (fear of emotional engulfment/vulnerability).
              </p>

              {/* 2x2 Grid Representation */}
              <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                
                {/* Fearful-Avoidant (High Anxiety, High Avoidance) */}
                <div className={`p-3.5 border rounded ${
                  result.style === 'Fearful-Avoidant'
                    ? 'border-purple-600 bg-purple-100/70 font-semibold ring-2 ring-purple-500'
                    : 'border-slate-200 bg-white text-slate-600'
                }`}>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                    <span>HIGH ANXIETY</span>
                    <span>HIGH AVOIDANCE</span>
                  </div>
                  <div className="text-slate-900 font-medium">Fearful-Avoidant</div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Craves intimacy but fears betrayal; push-pull defense.
                  </p>
                </div>

                {/* Anxious-Preoccupied (High Anxiety, Low Avoidance) */}
                <div className={`p-3.5 border rounded ${
                  result.style === 'Anxious-Preoccupied'
                    ? 'border-amber-600 bg-amber-100/70 font-semibold ring-2 ring-amber-500'
                    : 'border-slate-200 bg-white text-slate-600'
                }`}>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                    <span>HIGH ANXIETY</span>
                    <span>LOW AVOIDANCE</span>
                  </div>
                  <div className="text-slate-900 font-medium">Anxious-Preoccupied</div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Hyper-vigilant to separation; seeks intense proximity.
                  </p>
                </div>

                {/* Dismissive-Avoidant (Low Anxiety, High Avoidance) */}
                <div className={`p-3.5 border rounded ${
                  result.style === 'Dismissive-Avoidant'
                    ? 'border-blue-600 bg-blue-100/70 font-semibold ring-2 ring-blue-500'
                    : 'border-slate-200 bg-white text-slate-600'
                }`}>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                    <span>LOW ANXIETY</span>
                    <span>HIGH AVOIDANCE</span>
                  </div>
                  <div className="text-slate-900 font-medium">Dismissive-Avoidant</div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Fierce self-reliance; emotional deactivation under stress.
                  </p>
                </div>

                {/* Secure (Low Anxiety, Low Avoidance) */}
                <div className={`p-3.5 border rounded ${
                  result.style === 'Secure'
                    ? 'border-emerald-600 bg-emerald-100/70 font-semibold ring-2 ring-emerald-500'
                    : 'border-slate-200 bg-white text-slate-600'
                }`}>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                    <span>LOW ANXIETY</span>
                    <span>LOW AVOIDANCE</span>
                  </div>
                  <div className="text-slate-900 font-medium">Secure</div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Comfortable with vulnerability, trust, and autonomy.
                  </p>
                </div>

              </div>
            </div>

            {/* Deep Breakdown Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* 1. How They React in Relationships */}
              <div className="p-5 border border-slate-200 bg-white space-y-3 rounded">
                <h4 className="font-serif-newsreader text-lg font-semibold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <AlertCircle className="w-4 h-4 text-slate-700" />
                  <span>How You React in Relationships</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc list-inside">
                  {result.profile.howTheyReact.map((item, idx) => (
                    <li key={idx} className="pl-1">
                      <span className="font-normal text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Key Relational Triggers */}
              <div className="p-5 border border-slate-200 bg-white space-y-3 rounded">
                <h4 className="font-serif-newsreader text-lg font-semibold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <Sparkles className="w-4 h-4 text-slate-700" />
                  <span>Specific Triggers &amp; Core Vulnerabilities</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc list-inside">
                  {result.profile.triggers.map((item, idx) => (
                    <li key={idx} className="pl-1">
                      <span className="font-normal text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Strengths Brought to Relationships & Teams */}
              <div className="p-5 border border-slate-200 bg-white space-y-3 rounded">
                <h4 className="font-serif-newsreader text-lg font-semibold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <ShieldCheck className="w-4 h-4 text-slate-700" />
                  <span>Relational &amp; Teamwork Strengths</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc list-inside">
                  {result.profile.strengths.map((item, idx) => (
                    <li key={idx} className="pl-1">
                      <span className="font-normal text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Actionable Suggestions for Earned Security */}
              <div className="p-5 border border-slate-200 bg-white space-y-3 rounded">
                <h4 className="font-serif-newsreader text-lg font-semibold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <UserCheck className="w-4 h-4 text-slate-700" />
                  <span>Suggestions for Growth &amp; Communication</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed list-disc list-inside">
                  {result.profile.suggestions.map((item, idx) => (
                    <li key={idx} className="pl-1">
                      <span className="font-normal text-slate-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Personal Perspective: The 'Salt in the Food' Philosophy */}
            <div className="p-5 sm:p-6 bg-slate-900 text-white rounded space-y-3">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                <HeartHandshake className="w-4 h-4" />
                <span>Personal Note · The "Salt in the Dish" Philosophy</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                "{result.profile.relationalAdvice}"
              </p>
              <div className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800 leading-relaxed">
                <p>
                  <strong>Why I explored this:</strong> When I first met a boy and fell for him, I wanted to invest in the right person with clarity and understanding. I searched for books, discovered <em>Attached</em> by Dr. Amir Levine and Rachel Heller, and researched deeply into human attachment. It completely changed how I perceive love, communication, and conflict.
                </p>
                <p>
                  I strongly believe attachment style is like cooking food: <em>if you cook a dish and don't add salt, you cannot eat it even if you added every other component</em>. In a relationship, attachment awareness is that essential salt. That doesn't mean attachment alone is everything—we still need shared values, mutual respect, genuine effort, and trust—but without understanding attachment, so many people struggle simply because they aren't aware of it.
                </p>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyResults}
                  className="inline-flex items-center gap-1.5 text-xs font-medium py-2 px-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-slate-600" />
                      <span>Copy Result Summary</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-medium py-2 px-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>
              </div>

              <span className="text-[11px] text-slate-400 italic">
                All psychometric responses are processed locally in your browser. No personal data is stored.
              </span>
            </div>

          </div>
        )
      )}

    </div>
  );
};
