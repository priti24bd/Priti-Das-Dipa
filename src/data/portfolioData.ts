export interface Project {
  id: string;
  title: string;
  category: 'climate' | 'health' | 'tech';
  categoryLabel: string;
  year: string;
  tagline: string;
  organization: string;
  summary: string;
  impactMetrics: { label: string; value: string }[];
  details: string[];
  technologies: string[];
  links?: { label: string; url: string }[];
}

export interface LeadershipRole {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  highlight: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
  notable: string;
  focus: string;
}

export interface RecognitionItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  badge?: string;
}

export interface PersonalEssay {
  title: string;
  subtitle: string;
  intro: string;
  sections: {
    heading: string;
    body: string[];
    quote?: string;
  }[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  tag: string;
  url: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Priti Das Dipa",
    shortName: "Dipa",
    title: "Community Leader and Applied Machine Learning Student",
    location: "Dhaka and Bagerhat, Bangladesh",
    email: "dipapritidas@gmail.com",
    phone: "+880 1701396760",
    linkedin: "https://www.linkedin.com/in/priti-das-dipa",
    github: "https://github.com/priti24bd",
    driveFolder: "https://drive.google.com/drive/folders/15Yv5zC8NPUKnlMn47wf2yANABDws12WM?usp=sharing",
    availability: "Available for research collaborations, fellowships, and youth-led initiatives",
    summary:
      "Founder of NOVA Nourish Foundation, youth participant at UN Women CSW70, and machine learning intern at FlyRank AI. Working at the intersection of community nutrition, early warning climate systems, and applied artificial intelligence.",
  },

  leadership: [
    {
      id: "nova-nourish",
      role: "Founder and Executive Director",
      organization: "NOVA Nourish Foundation",
      location: "Global network across 15+ countries",
      period: "June 2025 to Present",
      highlight: "Mobilized over 300 youth volunteers across 15 nations, reaching 5,000 students across 20+ schools.",
      description:
        "Founded NOVA Nourish Foundation to address adolescent malnutrition, dietary literacy, and youth wellness through direct community engagement.",
      achievements: [
        "Built a global network of over 300 active volunteers with an ongoing retention rate above 80 percent.",
        "Delivered nutritional literacy sessions in 20+ secondary schools, reaching more than 5,000 adolescent students.",
        "Organized 30+ workshops and youth health conferences connecting young organizers across South Asia and globally.",
        "Formed partnerships with 15+ non-profit organizations, securing over $7,000 in collaborative project funding.",
        "Co-developed an eight-week youth wellness program combining mental health support with practical nutrition guidance.",
      ],
    },
    {
      id: "jaago",
      role: "Division Trainer",
      organization: "JAAGO Foundation",
      location: "Khulna Division, Bangladesh",
      period: "January 2025 to December 2025",
      highlight: "Facilitated more than 30 leadership training workshops across 10 administrative districts.",
      description:
        "Trained emerging youth organizers aged 16 to 28 across the entire Khulna division, standardizing project management, community assessment, and reporting.",
      achievements: [
        "Conducted 30+ capacity-building workshops across all 10 districts in Khulna Division.",
        "Trained hundreds of youth volunteers in conflict management, public speaking, and village needs assessment.",
        "Introduced standardized post-activity impact reporting frameworks used across the division.",
      ],
    },
    {
      id: "vbd",
      role: "Project Officer",
      organization: "Volunteer for Bangladesh (VBD)",
      location: "Bagerhat, Bangladesh",
      period: "January 2025 to December 2025",
      highlight: "Elected with a 90 percent vote of confidence, leading social projects across nine Upazilas.",
      description:
        "Coordinated field volunteers and local community members on environmental initiatives, water hygiene campaigns, and child welfare programs.",
      achievements: [
        "Elected Project Officer with a 90 percent mandate from local volunteers and coordinators.",
        "Organized five major field initiatives mobilizing hundreds of youth volunteers across nine Upazilas.",
        "Coordinated event logistics, community dialogues, and stakeholder communications.",
      ],
    },
    {
      id: "nctf",
      role: "Youth Mentor",
      organization: "National Children Task Force (NCTF)",
      location: "Bagerhat, Bangladesh",
      period: "January 2024 to December 2024",
      highlight: "Mentored over 1,000 secondary students on child rights, social responsibility, and school retention.",
      description:
        "Advocated for child protection, educational access, and youth participation in decision-making across southwestern Bangladesh.",
      achievements: [
        "Visited local schools to conduct interactive sessions on student rights and community service for 1,000+ students.",
        "Worked alongside teachers and community leaders to support vulnerable students at risk of dropout.",
      ],
    },
  ] as LeadershipRole[],

  projects: [
    {
      id: "flood",
      title: "Smart Flood Management System",
      category: "climate",
      categoryLabel: "Climate Innovation · IoT & Drones",
      year: "2025",
      tagline: "Early-warning hydrology sensing and drone surveillance for vulnerable floodplains.",
      organization: "imaGen Ventures Youth Challenge 2025 (U.S. Embassy, Generation Unlimited, JAAGO, UNICEF)",
      summary:
        "Bangladesh suffers catastrophic annual flooding where hours of early notice mean the difference between safe evacuation and tragedy. In team Climate Peonals, I helped engineer an IoT water-level sensor system integrated with aerial drone surveillance to detect surging river basins earlier.",
      impactMetrics: [
        { label: "Divisional Ranking", value: "Top 4 of 135" },
        { label: "Bootcamp", value: "3 Days Residential" },
        { label: "Telemetry", value: "Real-time IoT" },
        { label: "Partners", value: "UNICEF & US Embassy" },
      ],
      details: [
        "Formulated the technical architecture combining calibrated ultrasonic water-level sensors with microcontrollers placed at vulnerable embankment thresholds.",
        "Designed early-alert dissemination protocols ensuring rural residents receive sirens and cellular notifications hours before cresting.",
        "Successfully defended the prototype through rigorous judging following a 3-day intensive residential bootcamp, ranking in the Top 4 of 135 competitive teams.",
      ],
      technologies: ["IoT Sensors", "Microcontroller / Arduino", "Drone Telemetry", "Disaster Warning UX", "Data Analysis"],
    },
    {
      id: "nutrition",
      title: "Hanging Nutrition Bag Initiative",
      category: "health",
      categoryLabel: "Public Health · Rural Nutrition",
      year: "2025",
      tagline: "Low-cost, moisture-resistant household nutrition distribution for rural adolescent girls.",
      organization: "Global Alliance for Improved Nutrition (GAIN)",
      summary:
        "Adolescent malnutrition in rural communities is frequently exacerbated by storage spoilage and lack of accessible portioning. Selected as 1 of only 16 projects nationally by GAIN, this initiative distributed specialized hanging nutrition packs to ensure adolescent girls maintain access to vital micronutrients.",
      impactMetrics: [
        { label: "National Selection", value: "1 of 16 Nationwide" },
        { label: "Seed Funding", value: "$500 Grant Award" },
        { label: "Direct Families", value: "25 Households" },
        { label: "Adolescent Girls", value: "100+ Beneficiaries" },
      ],
      details: [
        "Won competitive national seed funding from the Global Alliance for Improved Nutrition (GAIN).",
        "Conducted baseline dietary assessments across 3 rural villages in southwestern Bangladesh.",
        "Fabricated moisture-safe hanging distribution bags preventing rodent and pest contamination in traditional mud and tin homes.",
        "Organized continuous follow-up measurements tracking improved dietary diversity among 100+ adolescent girls.",
      ],
      technologies: ["Field Research", "Nutritional Assessment", "Grassroots Distribution", "Community Health", "Survey Design"],
    },
    {
      id: "automation",
      title: "Embedded Automation & Sensor Builds",
      category: "tech",
      categoryLabel: "Robotics & Hardware Prototyping",
      year: "2020 — 2025",
      tagline: "Twelve hardware automation prototypes built with microcontrollers, optical sensors, and relays.",
      organization: "Independent Lab & Academic Deployment",
      summary:
        "Long before formal programming coursework, I spent hours soldering circuit boards and writing low-level microcontroller code. Over five years I designed twelve functional automation builds, including an automated fire safety monitor deployed in a high school for three continuous months.",
      impactMetrics: [
        { label: "Prototypes Built", value: "12 Working Units" },
        { label: "Field Deployment", value: "3 Months School Test" },
        { label: "Core Platforms", value: "Arduino & C++" },
        { label: "Timespan", value: "5 Years Prototyping" },
      ],
      details: [
        "Engineered an automated night light featuring optical LDR and passive infrared (PIR) motion sensing to eliminate manual switching in unlit rural pathways.",
        "Fabricated an integrated fire detection system pairing MQ series gas/smoke sensors and flame detectors with an emergency audio-visual beacon.",
        "Deployed and monitored the fire alarm system across a high school campus continuously for three months with zero false positives.",
        "Developed 10 additional experimental hardware circuits exploring relay logic, capacitive touch, and power efficiency.",
      ],
      technologies: ["Arduino", "C++", "Circuit Design", "PIR / LDR Sensors", "Soldering & Prototyping"],
    },
    {
      id: "flyrank-ai",
      title: "Applied Machine Learning Systems",
      category: "tech",
      categoryLabel: "Machine Learning & AI",
      year: "2026",
      tagline: "Developing data pipelines, model evaluations, and applied intelligent systems.",
      organization: "FlyRank AI",
      summary:
        "Internship focused on implementing machine learning workflows, data preprocessing, model benchmarking, and bridging technical algorithms with real-world decision support systems.",
      impactMetrics: [
        { label: "Role", value: "ML Intern" },
        { label: "Domain", value: "Applied Machine Learning" },
        { label: "Foundations", value: "CS50AI & Python" },
        { label: "Focus", value: "Data Integrity & Models" },
      ],
      details: [
        "Applying supervised learning methodologies and data preprocessing pipelines in Python.",
        "Grounded in coursework from Harvard CS50AI (CS50's Introduction to Artificial Intelligence with Python).",
        "Exploring how predictive models and automated clustering can improve early identification of social vulnerability and nutritional deficits.",
      ],
      technologies: ["Python", "Machine Learning", "CS50AI", "Data Cleaning", "Git & GitHub"],
    },
  ] as Project[],

  education: [
    {
      institution: "Govt. Sheikh Mujibur Rahman College",
      degree: "Higher Secondary Certificate (HSC) — Humanities",
      location: "Gopalganj, Dhaka Division",
      period: "Dec 2022 — Oct 2024",
      grade: "GPA 4.92 / 5.00",
      notable: "Ranked Top 2 among 1,200 students",
      focus: "Social Sciences, Public Policy, Logic, Economics & Sociology.",
    },
    {
      institution: "Kachuria Bazar H.S.M.M. Secondary School",
      degree: "Secondary School Certificate (SSC) — Science",
      location: "Bagerhat, Jashore Board",
      period: "Jan 2020 — Nov 2022",
      grade: "GPA 4.72 / 5.00",
      notable: "Graduated with Distinction in Science",
      focus: "Physics, Chemistry, Higher Mathematics & Biology.",
    },
  ] as EducationItem[],

  recognition: [
    {
      year: "2026",
      title: "Invited Youth Participant, CSW70",
      organization: "UN Women",
      description: "Selected upon direct recommendation by a UN official to join global diplomatic deliberations on gender equality, women's empowerment, and youth participation.",
      badge: "United Nations",
    },
    {
      year: "2026",
      title: "Machine Learning Intern",
      organization: "FlyRank AI",
      description: "Selected for applied engineering internship working on machine learning pipelines and intelligence systems.",
      badge: "Industry",
    },
    {
      year: "2026",
      title: "Leadership Scholar (Cohort 1 & 3)",
      organization: "Aspire Institute",
      description: "Rigorous global leadership development program founded by Harvard Business School faculty, focusing on systems leadership, ethics, and social change.",
      badge: "Harvard Alumni / Aspire",
    },
    {
      year: "2025",
      title: "Top 4 Climate Innovation Finalist",
      organization: "imaGen Ventures Youth Challenge",
      description: "Ranked Top 4 of 135 teams division-wide by U.S. Embassy Dhaka, UNICEF Bangladesh, Generation Unlimited, and JAAGO.",
      badge: "U.S. Embassy & UNICEF",
    },
    {
      year: "2025",
      title: "National Nutrition Grant Awardee",
      organization: "Global Alliance for Improved Nutrition (GAIN)",
      description: "1 of only 16 nationally selected youth-led initiatives awarded $500 funding for rural nutrition distribution.",
      badge: "GAIN Global",
    },
    {
      year: "2024 — 2025",
      title: "CS50AI & Advanced AI Coursework",
      organization: "Harvard's CS50 & HarvardX / edX",
      description: "CS50's Introduction to Artificial Intelligence with Python; edX Robotics and Algorithmic Thinking.",
      badge: "Harvard CS50",
    },
  ] as RecognitionItem[],

  skills: {
    programming: ["Python", "C++", "HTML & CSS", "JavaScript", "SQL Foundations"],
    technical: ["Arduino Microcontrollers", "IoT Sensors", "Git & GitHub", "Data Cleaning", "VS Code", "Canva", "Notion", "Microsoft Office Suite"],
    leadership: ["Strategic NGO Partnerships", "Youth Volunteer Management", "Curriculum Design & Training", "Public Speaking", "Public Policy Analysis", "Advocacy & Child Rights"],
    languages: [
      { name: "Bengali", proficiency: "Native / Mother Tongue" },
      { name: "English", proficiency: "Professional & Fluent" },
      { name: "Spanish", proficiency: "Intermediate / Self-directed" },
      { name: "Hindi", proficiency: "Intermediate / Conversational" },
    ],
  },

  personalEssay: {
    title: "Beyond the Résumé",
    subtitle: "A few things about me that a curriculum vitae cannot contain.",
    intro: "People who collaborate with me tend to know me first as someone who shows up with a clipboard and high energy — at a village health camp, running a training room for thirty volunteers, or debugging a sensor breadboard at midnight. But what drives that energy was built long before anyone handed me a title.",
    sections: [
      {
        heading: "Tea, and the Practice of Quiet Attention",
        quote: "Care does not require an auditorium. It begins with a steaming cup of tea brought on time by someone who noticed your tiredness.",
        body: [
          "From the time I was in class three or four, I made tea every single afternoon for my grandfather. It started as a small chore and slowly grew into a quiet ritual between us. As I grew older, I learned the specific way he liked his tea, and began baking and preparing homemade snacks he enjoyed.",
          "He passed away in 2020. But those quiet, unhurried afternoons taught me something that has anchored every project I have led since: that compassion and service are not grandiose speeches. They are small, consistent acts of attention given to someone without asking for anything in return.",
        ],
      },
      {
        heading: "Family, Close-Up & Everyday Village Health",
        quote: "Health is not a policy whitepaper until it reaches an elderly woman living three kilometers from the nearest paved road.",
        body: [
          "My grandmother underwent open-heart surgery, and caring for her has been part of my everyday life. It taught me the patience required when healing is slow, and the discipline of keeping track of medications, heart rates, and subtle shifts in someone's comfort.",
          "In my village, routine healthcare is often a distant luxury. For elderly women and neighbours who cannot travel easily to health posts, I regularly visit with a sphygmomanometer to check their blood pressure, sit with them, and listen. It has no grant attached to it, no formal certificate, and no social media post. It is simply being a daughter of the village.",
        ],
      },
      {
        heading: "Raising My Younger Sister: The True Curriculum",
        quote: "The true measure of character is how you treat those who have no ability to repay or advance you.",
        body: [
          "I have a younger sister nearly ten years my junior. A significant part of my emotional energy goes into mentoring her — not just tutoring her in school subjects, but teaching her how to move through the world with grace, unyielding honesty, empathy, and courage.",
          "I teach her to stand tall without looking down on others, to be gentle with people who are struggling, and to value her mind above fleeting trends. If she grows up knowing she has an anchor, that will be one of my greatest life accomplishments.",
        ],
      },
      {
        heading: "What I Hold Sacred",
        quote: "Remain humble, stay insatiably curious, and never forget the hands that lifted you.",
        body: [
          "I read constantly — history, social sciences, ethics, and technical papers. I love talking to people across all generations and truly listening to what they have lived through. Whether I am writing Python code for an AI model or packing nutrition supplements into bags for rural families, I believe intelligence is hollow without humility.",
          "If you have taken the time to read this far, thank you. You have given me a piece of your attention, which is the rarest currency in the modern world. I treat that with profound respect.",
        ],
      },
    ],
  } as PersonalEssay,

  gallery: [
    {
      id: "photo-1",
      title: "Field Health Outreach",
      caption: "Distributing nutrition packs and speaking with mothers and adolescent girls in rural Bagerhat.",
      tag: "Public Health",
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
    },
    {
      id: "photo-2",
      title: "Youth Leadership Workshop",
      caption: "Facilitating interactive training sessions for volunteers across Khulna division.",
      tag: "Leadership",
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
    },
    {
      id: "photo-3",
      title: "Hardware Prototyping Lab",
      caption: "Breadboard sensors, Arduino boards, and wiring for the early-warning flood telemetry build.",
      tag: "Technology",
      url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1200&q=80",
      aspect: "square",
    },
    {
      id: "photo-4",
      title: "NOVA Nourish Global Assembly",
      caption: "Bringing together youth changemakers from 15+ countries to review adolescent health campaigns.",
      tag: "Nonprofit",
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
    },
  ] as GalleryPhoto[],
};
