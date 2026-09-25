export interface Project {
  id: string;
  title: string;
  category: 'climate' | 'health' | 'tech' | 'inquiry';
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
    roleSubtitle: "Student Researcher & Community Organizer",
    applicantStatus: "Undergraduate Applicant, Fall 2027",
    title: "Community Leader, Independent Researcher & Social Innovator",
    location: "Dhaka & Bagerhat, Bangladesh",
    email: "dipapritidas@gmail.com",
    phone: "+880 1701396760",
    linkedin: "https://www.linkedin.com/in/priti-das-dipa",
    github: "https://github.com/priti24bd",
    driveFolder: "https://drive.google.com/drive/folders/15Yv5zC8NPUKnlMn47wf2yANABDws12WM?usp=sharing",
    nnfWebsite: "https://nnf-foundation.vercel.app/",
    availability: "Available for research collaborations, fellowships, and youth-led initiatives",
    summary:
      "Founder of NOVA Nourish Foundation, youth participant at UN Women CSW70, and machine learning intern at FlyRank AI. Dedicated to grassroots community health, empirical inquiry, and low-cost sensor telemetry for the common good.",
  },

  leadership: [
    {
      id: "nova-nourish",
      role: "Founder & Executive Director",
      organization: "NOVA Nourish Foundation",
      location: "Global",
      period: "Jun 2025 – Present",
      highlight: "Built a 120+ volunteer network across 15+ countries; reached 5+ schools with 80%+ retention.",
      description:
        "Founded NOVA Nourish Foundation to combat adolescent malnutrition, dietary illiteracy, and health stigma through peer-led education and grassroots community impact.",
      achievements: [
        "Built a 120+ volunteer network across 15+ countries; reached 5+ schools with 80%+ retention.",
        "Reached 2,000+ youth through 10+ events, workshops, and conferences.",
        "Built 3 NGO partnerships, securing $300+ in funding and in-kind resource.",
      ],
    },
    {
      id: "jaago",
      role: "Divisional Trainer",
      organization: "JAAGO Foundation",
      location: "Khulna",
      period: "Jan 2025 – Dec 2025",
      highlight: "Designed and executed 30+ standardized training sessions for 10 districts’ volunteers aged 16-28.",
      description:
        "Trained emerging youth organizers across the 10 districts of Khulna Division, standardizing project execution and community engagement.",
      achievements: [
        "Designed and executed 30+ standardized training sessions for 10 districts’ volunteers aged 16-28.",
      ],
    },
    {
      id: "vbd",
      role: "Project Officer",
      organization: "Volunteer for Bangladesh",
      location: "Bagerhat, Khulna",
      period: "Jan 2025 – Dec 2025",
      highlight: "Led 5+ social-impact projects across 9 Upazilas; elected with 90% of votes for field-management excellence.",
      description:
        "Coordinated field volunteers and local community members on environmental initiatives, water hygiene campaigns, and child welfare programs.",
      achievements: [
        "Led 5+ social-impact projects across 9 Upazilas; elected with 90% of votes for field-management excellence.",
      ],
    },
    {
      id: "nctf",
      role: "Youth Mentor",
      organization: "National Children Task Force",
      location: "Bagerhat",
      period: "Jan 2024 – Dec 2024",
      highlight: "Guided 1000+ high school students in social responsibility and fair access to education.",
      description:
        "Advocated for child rights, equitable educational access, and youth participation in decision-making across southwestern Bangladesh.",
      achievements: [
        "Guided 1000+ high school students in social responsibility and fair access to education.",
      ],
    },
  ] as LeadershipRole[],

  projects: [
    {
      id: "flood",
      title: "Smart Flood Management System",
      category: "climate",
      categoryLabel: "Hydrology Sensing & Telemetry",
      year: "Feb 2025",
      tagline: "Early-warning hydrology sensing and alert system for vulnerable floodplains.",
      organization: "imaGen Ventures Youth Challenge 2024-25 | GitHub",
      summary:
        "Organized by U.S. Embassy- Dhaka, Generation Unlimited, JAAGO Foundation, and UNICEF Bangladesh. Ranked Top 4 of 135 projects after a 3-day climate-innovation bootcamp.",
      impactMetrics: [
        { label: "Divisional Ranking", value: "Top 4 of 135" },
        { label: "Bootcamp", value: "3 Days Residential" },
        { label: "Focus", value: "Climate Innovation" },
        { label: "Partners", value: "UNICEF & US Embassy" },
      ],
      details: [
        "Organized by U.S. Embassy- Dhaka, Generation Unlimited, JAAGO Foundation, and UNICEF Bangladesh.",
        "Top 4 of 135 projects after a 3-day climate-innovation bootcamp.",
      ],
      technologies: ["Ultrasonic Sensors", "Microcontroller / Arduino", "Telemetry", "Disaster Alert UX", "Field Testing"],
    },
    {
      id: "nutrition",
      title: "Hanging Nutrition Bag",
      category: "health",
      categoryLabel: "Public Health & Nutrition",
      year: "June 2025 – Dec 2025",
      tagline: "Low-cost, moisture-resistant household nutrition distribution for rural adolescent girls.",
      organization: "Global Alliance For Improved Nutrition | GitHub",
      summary:
        "1 of 16 nationally selected projects; secured $500 funding, reaching 25 families, 100+ girls, and 3 villages in rural southwestern Bangladesh.",
      impactMetrics: [
        { label: "National Selection", value: "1 of 16 Nationwide" },
        { label: "Seed Funding", value: "$500 Grant Award" },
        { label: "Direct Families", value: "25 Families" },
        { label: "Adolescent Girls", value: "100+ Girls" },
      ],
      details: [
        "1of 16 nationally selected projects; secured $500 funding, reaching 25 families, 100+ girls, and 3 villages.",
      ],
      technologies: ["Field Research", "Nutritional Assessment", "Grassroots Distribution", "Community Health"],
    },
    {
      id: "automation",
      title: "Robotics & Automation Projects",
      category: "tech",
      categoryLabel: "Robotics & Circuits",
      year: "2020 – 2022",
      tagline: "Twelve hardware automation prototypes built with microcontrollers, optical sensors, and relays.",
      organization: "Robotics",
      summary:
        "Built 12 automation projects; deployed a night light and fire detector at a secondary school for 3 months.",
      impactMetrics: [
        { label: "Prototypes Built", value: "12 Working Units" },
        { label: "School Deployment", value: "3 Months Deployed" },
        { label: "Core Platforms", value: "Arduino & C++" },
        { label: "Timespan", value: "2020 – 2022" },
      ],
      details: [
        "Built 12 automation projects; deployed a night light and fire detector at a secondary school for 3 months.",
      ],
      technologies: ["Arduino", "C++", "Circuit Design", "PIR / LDR Sensors", "Soldering & Prototyping"],
    },
  ] as Project[],

  education: [
    {
      institution: "Tungipara Govt. College",
      degree: "Higher Secondary Certificate (HSC), Humanities",
      location: "Tungipara, Gopalganj",
      period: "Dec 2022 – Oct 2024",
      grade: "GPA: 4.92 / 5.00",
      notable: "Top 2 of 1,200 students",
      focus: "Social Sciences",
    },
    {
      institution: "Kachuria Bazar Hazi Saber Molla Memorial Secondary School",
      degree: "Secondary School Certificate (SSC), Science",
      location: "Mollahat, Bagerhat",
      period: "Jan 2020 – Nov 2022",
      grade: "GPA: 4.72 / 5.00",
      notable: "Graduated with Distinction in Science",
      focus: "Physics, Chemistry, Biology, and Mathematics.",
    },
  ] as EducationItem[],

  recognition: [
    {
      year: "2026",
      title: "Leadership Development Program, Cohorts 1 & 3",
      organization: "Aspire Institute",
      description: "Completed 2 leadership development cohorts in entrepreneurship, career development, and social impact.",
      badge: "Aspire Institute",
    },
    {
      year: "July 2026 – Present",
      title: "Machine Learning Intern",
      organization: "FlyRank AI",
      description: "Built and evaluated an ML project focused on Google search ranking and discoverability.",
      badge: "Industry",
    },
    {
      year: "Jan 2026",
      title: "Invited Youth Participant",
      organization: "CSW70, UN Women",
      description: "Recommended by a UN Women official; featured by UN Women; invited to speak at a virtual CSW70 meeting.",
      badge: "United Nations",
    },
  ] as RecognitionItem[],

  skills: {
    programming: ["Python", "C++", "HTML"],
    technical: ["Arduino", "GitHub", "Canva", "Notion"],
    leadership: ["Public Speaking", "Team Management", "Advocacy", "Policy Analysis"],
    languages: [
      { name: "Bengali", proficiency: "Native" },
      { name: "English", proficiency: "Professional" },
      { name: "Spanish", proficiency: "Intermediate" },
      { name: "Hindi", proficiency: "Intermediate" },
    ],
  },

  personalEssay: {
    title: "Beyond the Curriculum Vitae",
    subtitle: "Reflections on service, quiet discipline, and intellectual grounding.",
    intro: "People who work alongside me often know me as someone who shows up early with a notebook and high energy, whether coordinating a rural health camp, leading a room of youth volunteers, or debugging a microcontroller sensor at midnight. But the instinct to serve was nurtured long before I held any organizational title.",
    sections: [
      {
        heading: "Tea, and the Practice of Quiet Attention",
        quote: "Care does not require an auditorium. It begins with noticing someone's exhaustion and responding with unhurried warmth.",
        body: [
          "From the time I was eight years old, I made tea every single afternoon for my grandfather. It began as a small chore and slowly grew into an enduring daily ritual. Over time, I learned the exact temperature and sweetness he preferred, and began preparing homemade snacks for his afternoon rest.",
          "When he passed away in 2020, I carried forward an indelible lesson: compassion is not a performance on a stage. It is steady, patient attention given to someone in everyday life without expecting anything in return.",
        ],
      },
      {
        heading: "Family, Caregiving, and Everyday Village Health",
        quote: "Public health is not an abstract theory until it touches an elderly woman living three kilometers from the nearest clinic.",
        body: [
          "When my grandmother underwent open-heart surgery, caring for her became an integral part of my daily routine. That experience taught me the quiet discipline of caregiving: recording vital signs, monitoring recovery over long months, and remaining steady when progress felt fragile.",
          "In my village, routine medical consultation is often difficult to access. For elderly neighbours who cannot easily travel to health posts, I regularly visit with a blood pressure monitor to check their readings, listen to their concerns, and keep careful notes. It carries no formal certificate or public recognition; it is simply what community members owe to one another.",
        ],
      },
      {
        heading: "Guiding My Younger Sister: The True Curriculum",
        quote: "Character is revealed in how we support those who cannot advance our standing.",
        body: [
          "I have a younger sister nearly ten years younger than me. Much of my personal purpose centers on mentoring her, not merely assisting with schoolwork, but guiding her to cultivate intellectual courage, kindness, and personal integrity.",
          "I encourage her to speak with conviction, to listen generously to those who are hurting, and to value character over transient approval. Supporting her growth remains one of my most meaningful responsibilities.",
        ],
      },
      {
        heading: "Intellectual Grounding and Humility",
        quote: "Stay deeply curious, think critically, and never forget the communities that shaped you.",
        body: [
          "I read widely across history, ethics, social science, and technology. I enjoy conversing with elders, farmers, and students, listening closely to their lived perspectives. Whether writing Python algorithms or distributing nutrition packs in muddy villages, I believe intellectual capability is hollow without genuine humility and empathy.",
          "I look forward to undergraduate studies as a space of rigorous inquiry, ethical collaboration, and interdisciplinary discovery, preparing to dedicate my life to the common good.",
        ],
      },
    ],
  } as PersonalEssay,

  gallery: [
    {
      id: "photo-1",
      title: "Hanging Nutrition Bag Initiative",
      caption: "Distributing nutrition packs and speaking with mothers and adolescent girls in rural Bagerhat.",
      tag: "Public Health",
      url: "/assets/images/nonprofit_nutrition.jpg",
      aspect: "landscape",
    },
    {
      id: "photo-2",
      title: "Youth Leadership & Capacity Enhancement",
      caption: "Conducting capacity enhancement workshop for youth-led organizations in Khulna Division.",
      tag: "Leadership",
      url: "/assets/images/youth_leadership.jpg",
      aspect: "portrait",
    },
  ] as GalleryPhoto[],
};
