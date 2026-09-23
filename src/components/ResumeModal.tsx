import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainText = `PRITI DAS DIPA
+880 1701396760 · dipapritidas@gmail.com
LinkedIn: https://www.linkedin.com/in/priti-das-dipa
GitHub: https://github.com/priti24bd

EDUCATION
Govt. Sheikh Mujibur Rahman College, Gopalganj, Dhaka (Dec 2022 – Oct 2024)
Higher Secondary Certificate (HSC), Humanities
- GPA: 4.92 / 5.00 (Ranked Top 2 among 1,200 students)

Kachuria Bazar H.S.M.M. Secondary School, Bagerhat, Jashore (Jan 2020 – Nov 2022)
Secondary School Certificate (SSC), Science
- GPA: 4.72 / 5.00, foundation in Physics, Chemistry, Biology, Mathematics

LEADERSHIP EXPERIENCE
Founder & Executive Director | NOVA Nourish Foundation (Jun 2025 – Present)
- 300+ volunteers with retention >80% across 15+ countries; reached 5,000+ youths across 20+ schools.
- Conducted 30+ events, workshops, and health conferences; negotiated 15+ strategic NGO partnerships securing $7,000+ funding.

Division Trainer | JAAGO Foundation — Khulna (Jan 2025 – Dec 2025)
- Designed and executed 30+ standardized training sessions for 10 districts' volunteers aged 16–28.

Project Officer | Volunteer for Bangladesh — Bagerhat (Jan 2025 – Dec 2025)
- Implemented 5+ social impact projects across 9 Upazilas; elected with 90% vote of confidence.

Youth Mentor | National Children Task Force — Bagerhat (Jan 2024 – Dec 2024)
- Guided 1,000+ high school students in social responsibility and fair access to education.

PROJECTS
Smart Flood Management System (Feb 2025)
- imaGen Ventures Youth Challenge (U.S. Embassy Dhaka, Generation Unlimited, JAAGO, UNICEF).
- Ranked Top 4 of 135 divisional teams after a 3-day residential bootcamp.

Hanging Nutrition Bag (Jun 2025 – Dec 2025)
- Global Alliance for Improved Nutrition (GAIN); 1 of only 16 nationally selected projects ($500 funding).
- Implemented across 25 families, 100+ adolescent girls, and 3 villages.

Automation Projects (2020 – 2025)
- 12 automation builds including automatic night light and 3-month school-tested fire detector.

HONORS & COURSES
- CSW70 Invited Youth Participant — UN Women (Jan 2026)
- Machine Learning Intern — FlyRank AI (Jun 2026 – Oct 2026)
- Aspire Leadership Program, Cohort 1 & 3 — Aspire Institute (2026)
- Introduction to Artificial Intelligence with Python (CS50AI) — Harvard University

SKILLS
- Languages: Bengali (Native), English (Professional), Spanish (Intermediate), Hindi (Intermediate)
- Programming: Python, C++, HTML, CSS, JavaScript, SQL
- Leadership: Policy Analysis, Public Speaking, Volunteer Management, Strategic Alliances
- Tools: Arduino, Git & GitHub, Notion, Canva, Microsoft Office`;

    navigator.clipboard.writeText(plainText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownloadHtml = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Résumé — Priti Das Dipa</title>
<style>
  body { font-family: Georgia, 'Times New Roman', serif; background:#fff; color:#111; font-size:14.5px; line-height:1.55; max-width:720px; margin:40px auto; padding:0 24px; }
  h1 { font-size:26px; text-align:center; margin-bottom:4px; font-weight:normal; letter-spacing:-0.5px; }
  .contact { text-align:center; font-size:13px; margin-bottom:24px; color:#444; }
  .contact a { color:#111; text-decoration:none; border-bottom:1px solid #999; }
  h2 { font-size:13px; text-transform:uppercase; letter-spacing:0.06em; border-bottom:1.5px solid #111; padding-bottom:3px; margin:22px 0 10px; font-weight:bold; }
  .entry { margin-bottom:12px; }
  .row { display:flex; justify-content:space-between; font-weight:bold; font-size:14px; }
  .org { font-style:italic; font-size:13px; color:#333; margin-bottom:3px; }
  ul { padding-left:18px; margin-top:2px; }
  li { margin-bottom:3px; font-size:13px; }
  @media print { .no-print { display:none; } body { margin:0; } }
</style>
</head>
<body>
  <h1>Priti Das Dipa</h1>
  <div class="contact">
    +880 1701396760 · dipapritidas@gmail.com · <a href="https://linkedin.com/in/priti-das-dipa">linkedin.com/in/priti-das-dipa</a> · <a href="https://github.com/priti24bd">github.com/priti24bd</a>
  </div>
  <h2>Education</h2>
  <div class="entry">
    <div class="row"><span>Govt. Sheikh Mujibur Rahman College, Gopalganj, Dhaka</span><span>Dec 2022 – Oct 2024</span></div>
    <div class="org">Higher Secondary Certificate (HSC), Humanities</div>
    <ul><li>GPA: 4.92 / 5.00 (Ranked Top 2 among 1,200 students), focus: Social Sciences.</li></ul>
  </div>
  <div class="entry">
    <div class="row"><span>Kachuria Bazar H.S.M.M. Secondary School, Bagerhat</span><span>Jan 2020 – Nov 2022</span></div>
    <div class="org">Secondary School Certificate (SSC), Science</div>
    <ul><li>GPA: 4.72 / 5.00, foundation in Physics, Chemistry, Biology, and Mathematics.</li></ul>
  </div>
  <h2>Leadership Experience</h2>
  <div class="entry">
    <div class="row"><span>Founder &amp; Executive Director</span><span>Jun 2025 – Present</span></div>
    <div class="org">NOVA Nourish Foundation — Global</div>
    <ul>
      <li>300+ volunteers with retention >80% across 15+ countries; reached 5,000+ youths across 20+ schools.</li>
      <li>Conducted 30+ events, workshops, and health conferences; negotiated 15+ strategic NGO partnerships securing $7,000+ funding.</li>
    </ul>
  </div>
  <div class="entry">
    <div class="row"><span>Division Trainer</span><span>Jan 2025 – Dec 2025</span></div>
    <div class="org">JAAGO Foundation — Khulna</div>
    <ul><li>Designed and executed 30+ standardized training sessions for 10 districts' volunteers aged 16–28.</li></ul>
  </div>
  <div class="entry">
    <div class="row"><span>Project Officer</span><span>Jan 2025 – Dec 2025</span></div>
    <div class="org">Volunteer for Bangladesh — Bagerhat</div>
    <ul><li>Implemented 5+ social impact projects across 9 Upazilas; elected with 90% vote for excellence in field management.</li></ul>
  </div>
  <div class="entry">
    <div class="row"><span>Youth Mentor</span><span>Jan 2024 – Dec 2024</span></div>
    <div class="org">National Children Task Force — Bagerhat</div>
    <ul><li>Guided 1,000+ high school students in social responsibility and fair access to education.</li></ul>
  </div>
  <h2>Projects</h2>
  <div class="entry">
    <div class="row"><span>Smart Flood Management System</span><span>Feb 2025</span></div>
    <div class="org">imaGen Ventures Youth Challenge 2025 (U.S. Embassy Dhaka, Generation Unlimited, JAAGO, UNICEF)</div>
    <ul><li>Ranked Top 4 of 135 divisional teams after a 3-day residential bootcamp for climate innovation.</li></ul>
  </div>
  <div class="entry">
    <div class="row"><span>Hanging Nutrition Bag</span><span>Jun 2025 – Dec 2025</span></div>
    <div class="org">Global Alliance for Improved Nutrition (GAIN)</div>
    <ul><li>1 of only 16 nationally selected projects ($500 funding), deployed across 25 families, 100+ girls, 3 villages.</li></ul>
  </div>
  <div class="entry">
    <div class="row"><span>Automation Projects</span><span>2020 – 2025</span></div>
    <div class="org">Robotics</div>
    <ul><li>12 automation builds — automatic night light and fire detector implemented in high school for 3 months.</li></ul>
  </div>
  <h2>Honors &amp; Courses</h2>
  <ul>
    <li>Invited Youth Participant — CSW70, UN Women (Jan 2026)</li>
    <li>Machine Learning Intern — FlyRank AI (Jun 2026 – Oct 2026)</li>
    <li>Aspire Leadership Program, Cohort 1 &amp; 3 — Aspire Institute (2026)</li>
    <li>CS50's Introduction to Artificial Intelligence with Python — Harvard University</li>
  </ul>
  <h2>Skills</h2>
  <ul>
    <li><strong>Languages:</strong> Bengali (Native), English (Professional), Spanish (Intermediate), Hindi (Intermediate)</li>
    <li><strong>Programming:</strong> Python, C++, HTML, CSS, JavaScript, SQL</li>
    <li><strong>Leadership:</strong> Strategic Partnerships, Public Speaking, Volunteer Management, Advocacy</li>
    <li><strong>Tools:</strong> Arduino, Git &amp; GitHub, Notion, Canva, Microsoft Office</li>
  </ul>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Priti_Das_Dipa_Resume.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white text-[#111] w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-none shadow-2xl p-6 sm:p-12 relative font-serif"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="no-print sticky top-0 bg-white/95 backdrop-blur-xs pb-4 mb-4 border-b border-gray-200 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1B1F1C] text-white hover:bg-[#3C5434] transition-colors text-xs font-sans rounded-xs cursor-pointer"
              title="Open browser print dialog to save as PDF or print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={handleDownloadHtml}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 hover:border-gray-800 text-gray-800 transition-colors text-xs font-sans rounded-xs cursor-pointer"
              title="Download standalone HTML resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download HTML</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 hover:border-gray-800 text-gray-800 transition-colors text-xs font-sans rounded-xs cursor-pointer"
              title="Copy plain text CV to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-black border border-gray-200 rounded-xs cursor-pointer"
            aria-label="Close résumé modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Traditional CV Header */}
        <div className="text-center mb-6">
          <h1 id="resume-modal-title" className="text-2xl sm:text-3xl tracking-tight text-gray-950 font-normal mb-1">
            Priti Das Dipa
          </h1>
          <div className="text-xs sm:text-sm text-gray-600 flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
            <span>+880 1701396760</span>
            <span>·</span>
            <a href="mailto:dipapritidas@gmail.com" className="text-gray-800 hover:underline">
              dipapritidas@gmail.com
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/priti-das-dipa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline"
            >
              linkedin.com/in/priti-das-dipa
            </a>
            <span>·</span>
            <a
              href="https://github.com/priti24bd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:underline"
            >
              github.com/priti24bd
            </a>
          </div>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-1 mb-3 text-black">
            Education
          </h2>

          <div className="mb-3">
            <div className="flex justify-between font-bold text-sm text-gray-950">
              <span>Govt. Sheikh Mujibur Rahman College, Gopalganj, Dhaka</span>
              <span className="text-xs font-normal text-gray-600">Dec 2022 – Oct 2024</span>
            </div>
            <div className="italic text-xs text-gray-700">Higher Secondary Certificate (HSC), Humanities</div>
            <ul className="list-disc pl-5 mt-1 text-xs text-gray-800 space-y-0.5">
              <li>GPA: 4.92 / 5.00 (Ranked Top 2 among 1,200 students), focus in Social Sciences.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-bold text-sm text-gray-950">
              <span>Kachuria Bazar H.S.M.M. Secondary School, Bagerhat</span>
              <span className="text-xs font-normal text-gray-600">Jan 2020 – Nov 2022</span>
            </div>
            <div className="italic text-xs text-gray-700">Secondary School Certificate (SSC), Science</div>
            <ul className="list-disc pl-5 mt-1 text-xs text-gray-800 space-y-0.5">
              <li>GPA: 4.72 / 5.00, rigorous foundation in Physics, Chemistry, Higher Mathematics, and Biology.</li>
            </ul>
          </div>
        </div>

        {/* Leadership Experience */}
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-1 mb-3 text-black">
            Leadership Experience
          </h2>

          <div className="mb-4">
            <div className="flex justify-between font-bold text-sm text-gray-950">
              <span>Founder &amp; Executive Director</span>
              <span className="text-xs font-normal text-gray-600">Jun 2025 – Present</span>
            </div>
            <div className="italic text-xs text-gray-700">NOVA Nourish Foundation — Global (15+ Countries)</div>
            <ul className="list-disc pl-5 mt-1 text-xs text-gray-800 space-y-1">
              <li>Mobilized 300+ volunteers with retention rate exceeding 80% across 15+ nations.</li>
              <li>Conducted nutritional education sessions in 20+ schools, reaching 5,000+ adolescent students.</li>
              <li>Orchestrated 30+ events, workshops, and health conferences combining virtual and grassroots formats.</li>
              <li>Negotiated 15+ strategic partnerships with regional NGOs, securing $7,000+ in grants and material resources.</li>
              <li>Co-created 8-week Mental Health &amp; Psychosocial Support (MHPSS) youth wellness curriculum.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between font-bold text-sm text-gray-950">
              <span>Division Trainer</span>
              <span className="text-xs font-normal text-gray-600">Jan 2025 – Dec 2025</span>
            </div>
            <div className="italic text-xs text-gray-700">JAAGO Foundation — Khulna Division</div>
            <ul className="list-disc pl-5 mt-1 text-xs text-gray-800 space-y-1">
              <li>Designed and executed 30+ standardized capacity-building sessions for volunteers aged 16–28 across 10 districts.</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between font-bold text-sm text-gray-950">
              <span>Project Officer</span>
              <span className="text-xs font-normal text-gray-600">Jan 2025 – Dec 2025</span>
            </div>
            <div className="italic text-xs text-gray-700">Volunteer for Bangladesh — Bagerhat, Khulna</div>
            <ul className="list-disc pl-5 mt-1 text-xs text-gray-800 space-y-1">
              <li>Delivered 5+ social impact initiatives across 9 Upazilas; elected with a 90% vote of confidence.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-bold text-sm text-gray-950">
              <span>Youth Mentor</span>
              <span className="text-xs font-normal text-gray-600">Jan 2024 – Dec 2024</span>
            </div>
            <div className="italic text-xs text-gray-700">National Children Task Force (NCTF) — Bagerhat</div>
            <ul className="list-disc pl-5 mt-1 text-xs text-gray-800 space-y-1">
              <li>Guided 1,000+ secondary students on child rights, social responsibility, and equitable education access.</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-1 mb-3 text-black">
            Selected Projects
          </h2>

          <div className="mb-3">
            <div className="flex justify-between font-bold text-sm text-gray-950">
              <span>Smart Flood Management System</span>
              <span className="text-xs font-normal text-gray-600">Feb 2025</span>
            </div>
            <div className="italic text-xs text-gray-700">imaGen Ventures Youth Challenge 2025 (U.S. Embassy Dhaka, UNICEF, JAAGO)</div>
            <ul className="list-disc pl-5 mt-1 text-xs text-gray-800 space-y-0.5">
              <li>Ranked Top 4 of 135 divisional teams for climate innovation following a 3-day residential bootcamp.</li>
              <li>Integrated ultrasonic IoT water-level sensor telemetry with aerial drone surveillance for early community warnings.</li>
            </ul>
          </div>

          <div className="mb-3">
            <div className="flex justify-between font-bold text-sm text-gray-950">
              <span>Hanging Nutrition Bag</span>
              <span className="text-xs font-normal text-gray-600">Jun 2025 – Dec 2025</span>
            </div>
            <div className="italic text-xs text-gray-700">Global Alliance for Improved Nutrition (GAIN)</div>
            <ul className="list-disc pl-5 mt-1 text-xs text-gray-800 space-y-0.5">
              <li>Selected as 1 of only 16 nationally funded initiatives ($500 grant).</li>
              <li>Implemented with 25 families, 100+ adolescent girls, and 3 rural villages in southwestern Bangladesh.</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-bold text-sm text-gray-950">
              <span>Hardware &amp; Automation Builds</span>
              <span className="text-xs font-normal text-gray-600">2020 – 2025</span>
            </div>
            <div className="italic text-xs text-gray-700">Embedded Robotics &amp; Sensors</div>
            <ul className="list-disc pl-5 mt-1 text-xs text-gray-800 space-y-0.5">
              <li>Engineered 12 automation projects, including an automatic night light and a fire detector tested continuously in a high school for 3 months.</li>
            </ul>
          </div>
        </div>

        {/* Honors & Courses */}
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-1 mb-3 text-black">
            Honors, Fellowships &amp; Coursework
          </h2>
          <ul className="list-disc pl-5 text-xs text-gray-800 space-y-1.5">
            <li>
              <strong>Invited Youth Participant, CSW70</strong> — UN Women (Jan 2026). Nominated upon recommendation by a UN official to engage in global discussions on gender equality and sustainable development.
            </li>
            <li>
              <strong>Machine Learning Intern</strong> — FlyRank AI (Jun 2026 – Oct 2026). Applied machine learning pipelines and intelligence architectures.
            </li>
            <li>
              <strong>Aspire Leadership Scholar (Cohort 1 &amp; 3)</strong> — Aspire Institute (2026). Founded by Harvard Business School faculty.
            </li>
            <li>
              <strong>CS50's Introduction to Artificial Intelligence with Python</strong> — Harvard's CS50 / edX.
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest border-b-[1.5px] border-black pb-1 mb-3 text-black">
            Skills &amp; Capabilities
          </h2>
          <div className="text-xs text-gray-800 space-y-1">
            <p><strong>Languages:</strong> Bengali (Native), English (Professional), Spanish (Intermediate), Hindi (Intermediate)</p>
            <p><strong>Programming &amp; Code:</strong> Python, C++, HTML, CSS, JavaScript, SQL Foundations</p>
            <p><strong>Leadership:</strong> Strategic Partnerships, Public Policy, Community Mobilization, Youth Mentorship, Public Speaking</p>
            <p><strong>Technical Tools:</strong> Arduino Microcontrollers, IoT Sensors, Git &amp; GitHub, Notion, Canva, Microsoft Office</p>
          </div>
        </div>

      </div>
    </div>
  );
};
