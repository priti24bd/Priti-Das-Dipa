import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink } from 'lucide-react';

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

  const plainTextResume = `Priti Das Dipa
+880 1701396760 | dipapritidas@gmail.com | Personal Website | Linkedin | Github |

EDUCATION
Tungipara Govt. College                                                  Tungipara, Gopalganj
Higher Secondary Certificate (HSC), Humanities                          Dec 2022 – Oct 2024
• GPA: 4.92/5.00; Top 2 of 1,200 students; focus: Social Sciences.

Kachuria Bazar Hazi Saber Molla Memorial Secondary School                Mollahat, Bagerhat
Secondary School Certificate (SSC), Science                             Jan 2020 – Nov 2022
• GPA: 4.72 / 5.00, foundation in Physics, Chemistry, Biology, and Mathematics.

LEADERSHIP & COMMUNITY IMPACT
Founder & Executive Director                                            Jun 2025 – Present
NOVA Nourish Foundation [Website]                                       Global
• Built a 120+ volunteer network across 15+ countries; reached 5+ schools with 80%+ retention.
• Reached 2,000+ youth through 10+ events, workshops, and conferences.
• Built 3 NGO partnerships, securing $300+ in funding and in-kind resource

Divisional Trainer                                                      Jan 2025 – Dec 2025
JAAGO Foundation                                                        Khulna
• Designed and executed 30+ standardized training sessions for 10 districts’ volunteers aged 16-28.

Project Officer                                                         Jan 2025 – Dec 2025
Volunteer for Bangladesh                                                Bagerhat, Khulna
• Led 5+ social-impact projects across 9 Upazilas; elected with 90% of votes for field-management excellence.

Youth Mentor                                                            Jan 2024 – Dec 2024
National Children Task Force                                            Bagerhat
• Guided 1000+ high school students in social responsibility and fair access to education.

PROJECTS
Smart Flood Management System | imaGen Ventures Youth Challenge 2024-25 | GitHub     Feb 2025
• Organized by U.S. Embassy- Dhaka, Generation Unlimited, JAAGO Foundation, and UNICEF Bangladesh.
• Top 4 of 135 projects after a 3-day climate-innovation bootcamp.

Hanging Nutrition Bag | Global Alliance For Improved Nutrition | GitHub             June 2025 – Dec 2025
• 1of 16 nationally selected projects; secured $500 funding, reaching 25 families, 100+ girls, and 3 villages.

Robotics & Automation Projects | Robotics                                           2020 – 2022
• Built 12 automation projects; deployed a night light and fire detector at a secondary school for 3 months.

ADDITIONAL ACTIVITIES
Leadership Development Program, Cohorts 1 & 3 | Aspire Institute                    2026
• Completed 2 leadership development cohorts in entrepreneurship, career development, and social impact.

Machine Learning Intern | FlyRank AI                                                July 2026 – Present
• Built and evaluated an ML project focused on Google search ranking and discoverability.

Invited Youth Participant | CSW70, UN Women                                         Jan 2026
• Recommended by a UN Women official; featured by UN Women; invited to speak at a virtual CSW70 meeting.

SKILLS
Programming: Python, C++, HTML
Technical: Arduino, GitHub, Canva, Notion
Leadership: Public Speaking, Team Management, Advocacy, Policy Analysis
Languages: Bengali (Native), English (Professional), Spanish (Intermediate), Hindi (Intermediate)`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume).then(() => {
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
<title>Priti Das Dipa - Resume</title>
<style>
  @page { margin: 0.6in; }
  body {
    font-family: 'Times New Roman', Times, Georgia, serif;
    background: #fff;
    color: #111;
    font-size: 13.5px;
    line-height: 1.35;
    max-width: 820px;
    margin: 30px auto;
    padding: 0 24px;
  }
  h1 {
    font-size: 30px;
    text-align: center;
    margin: 0 0 4px;
    font-weight: normal;
    letter-spacing: -0.3px;
  }
  .contact {
    text-align: center;
    font-size: 12.5px;
    margin-bottom: 18px;
    color: #222;
  }
  .contact a {
    color: #111;
    text-decoration: underline;
  }
  h2 {
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid #111;
    padding-bottom: 2px;
    margin: 16px 0 8px;
    font-weight: bold;
  }
  .entry {
    margin-bottom: 10px;
  }
  .row {
    display: flex;
    justify-content: space-between;
    font-size: 13.5px;
  }
  .row-bold {
    font-weight: bold;
  }
  .row-sub {
    font-style: italic;
    color: #222;
    display: flex;
    justify-content: space-between;
  }
  ul {
    margin: 2px 0 4px 18px;
    padding: 0;
  }
  li {
    margin-bottom: 2px;
    font-size: 12.5px;
  }
  .skills-block p {
    margin: 3px 0;
    font-size: 12.5px;
  }
  @media print {
    body { margin: 0; padding: 0; max-width: 100%; }
  }
</style>
</head>
<body>
  <h1>Priti Das Dipa</h1>
  <div class="contact">
    +880 1701396760 &nbsp;|&nbsp;
    <a href="mailto:dipapritidas@gmail.com">dipapritidas@gmail.com</a> &nbsp;|&nbsp;
    <a href="https://nnf-foundation.vercel.app/" target="_blank">Personal Website</a> &nbsp;|&nbsp;
    <a href="https://linkedin.com/in/priti-das-dipa" target="_blank">Linkedin</a> &nbsp;|&nbsp;
    <a href="https://github.com/priti24bd" target="_blank">Github</a>
  </div>

  <h2>EDUCATION</h2>
  <div class="entry">
    <div class="row row-bold">
      <span>Tungipara Govt. College</span>
      <span>Tungipara, Gopalganj</span>
    </div>
    <div class="row-sub">
      <span>Higher Secondary Certificate (HSC), Humanities</span>
      <span style="font-style: normal;">Dec 2022 – Oct 2024</span>
    </div>
    <ul>
      <li>GPA: 4.92/5.00; Top 2 of 1,200 students; focus: Social Sciences.</li>
    </ul>
  </div>

  <div class="entry">
    <div class="row row-bold">
      <span>Kachuria Bazar Hazi Saber Molla Memorial Secondary School</span>
      <span>Mollahat, Bagerhat</span>
    </div>
    <div class="row-sub">
      <span>Secondary School Certificate (SSC), Science</span>
      <span style="font-style: normal;">Jan 2020 – Nov 2022</span>
    </div>
    <ul>
      <li>GPA: 4.72 / 5.00, foundation in Physics, Chemistry, Biology, and Mathematics.</li>
    </ul>
  </div>

  <h2>LEADERSHIP &amp; COMMUNITY IMPACT</h2>
  <div class="entry">
    <div class="row row-bold">
      <span>Founder &amp; Executive Director</span>
      <span>Jun 2025 – Present</span>
    </div>
    <div class="row-sub">
      <span>NOVA Nourish Foundation [<a href="https://nnf-foundation.vercel.app/" target="_blank">Website</a>]</span>
      <span style="font-style: normal;">Global</span>
    </div>
    <ul>
      <li>Built a 120+ volunteer network across 15+ countries; reached 5+ schools with 80%+ retention.</li>
      <li>Reached 2,000+ youth through 10+ events, workshops, and conferences.</li>
      <li>Built 3 NGO partnerships, securing $300+ in funding and in-kind resource</li>
    </ul>
  </div>

  <div class="entry">
    <div class="row row-bold">
      <span>Divisional Trainer</span>
      <span>Jan 2025 – Dec 2025</span>
    </div>
    <div class="row-sub">
      <span>JAAGO Foundation</span>
      <span style="font-style: normal;">Khulna</span>
    </div>
    <ul>
      <li>Designed and executed 30+ standardized training sessions for 10 districts’ volunteers aged 16-28.</li>
    </ul>
  </div>

  <div class="entry">
    <div class="row row-bold">
      <span>Project Officer</span>
      <span>Jan 2025 – Dec 2025</span>
    </div>
    <div class="row-sub">
      <span>Volunteer for Bangladesh</span>
      <span style="font-style: normal;">Bagerhat, Khulna</span>
    </div>
    <ul>
      <li>Led 5+ social-impact projects across 9 Upazilas; elected with 90% of votes for field-management excellence.</li>
    </ul>
  </div>

  <div class="entry">
    <div class="row row-bold">
      <span>Youth Mentor</span>
      <span>Jan 2024 – Dec 2024</span>
    </div>
    <div class="row-sub">
      <span>National Children Task Force</span>
      <span style="font-style: normal;">Bagerhat</span>
    </div>
    <ul>
      <li>Guided 1000+ high school students in social responsibility and fair access to education.</li>
    </ul>
  </div>

  <h2>PROJECTS</h2>
  <div class="entry">
    <div class="row row-bold">
      <span>Smart Flood Management System | <span style="font-weight: normal; font-style: italic;">imaGen Ventures Youth Challenge 2024-25</span> | <a href="https://github.com/priti24bd" target="_blank" style="font-weight: normal;">GitHub</a></span>
      <span style="font-weight: normal;">Feb 2025</span>
    </div>
    <ul>
      <li>Organized by U.S. Embassy- Dhaka, Generation Unlimited, JAAGO Foundation, and UNICEF Bangladesh.</li>
      <li>Top 4 of 135 projects after a 3-day climate-innovation bootcamp.</li>
    </ul>
  </div>

  <div class="entry">
    <div class="row row-bold">
      <span>Hanging Nutrition Bag | <span style="font-weight: normal; font-style: italic;">Global Alliance For Improved Nutrition</span> | <a href="https://github.com/priti24bd" target="_blank" style="font-weight: normal;">GitHub</a></span>
      <span style="font-weight: normal;">June 2025 – Dec 2025</span>
    </div>
    <ul>
      <li>1of 16 nationally selected projects; secured $500 funding, reaching 25 families, 100+ girls, and 3 villages.</li>
    </ul>
  </div>

  <div class="entry">
    <div class="row row-bold">
      <span>Robotics &amp; Automation Projects | <span style="font-weight: normal; font-style: italic;">Robotics</span></span>
      <span style="font-weight: normal;">2020 – 2022</span>
    </div>
    <ul>
      <li>Built 12 automation projects; deployed a night light and fire detector at a secondary school for 3 months.</li>
    </ul>
  </div>

  <h2>ADDITIONAL ACTIVITIES</h2>
  <div class="entry">
    <div class="row row-bold">
      <span>Leadership Development Program, Cohorts 1 &amp; 3 | <span style="font-weight: normal; font-style: italic;">Aspire Institute</span></span>
      <span style="font-weight: normal;">2026</span>
    </div>
    <ul>
      <li>Completed 2 leadership development cohorts in entrepreneurship, career development, and social impact.</li>
    </ul>
  </div>

  <div class="entry">
    <div class="row row-bold">
      <span>Machine Learning Intern | <span style="font-weight: normal; font-style: italic;">FlyRank AI</span></span>
      <span style="font-weight: normal;">July 2026 – Present</span>
    </div>
    <ul>
      <li>Built and evaluated an ML project focused on Google search ranking and discoverability.</li>
    </ul>
  </div>

  <div class="entry">
    <div class="row row-bold">
      <span>Invited Youth Participant | <span style="font-weight: normal; font-style: italic;">CSW70, UN Women</span></span>
      <span style="font-weight: normal;">Jan 2026</span>
    </div>
    <ul>
      <li>Recommended by a UN Women official; featured by UN Women; invited to speak at a virtual CSW70 meeting.</li>
    </ul>
  </div>

  <h2>SKILLS</h2>
  <div class="skills-block">
    <p><strong>Programming:</strong> Python, C++, HTML</p>
    <p><strong>Technical:</strong> Arduino, GitHub, Canva, Notion</p>
    <p><strong>Leadership:</strong> Public Speaking, Team Management, Advocacy, Policy Analysis</p>
    <p><strong>Languages:</strong> Bengali (Native), English (Professional), Spanish (Intermediate), Hindi (Intermediate)</p>
  </div>
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white text-slate-900 w-full max-w-4xl max-h-[94vh] overflow-y-auto rounded-none shadow-2xl p-5 sm:p-10 md:p-12 relative font-serif"
        style={{ fontFamily: "'Times New Roman', Times, Georgia, serif" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="no-print sticky top-0 bg-white/95 backdrop-blur-xs pb-3 mb-4 border-b border-gray-200 flex items-center justify-between z-10 font-sans">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-xs rounded-xs cursor-pointer font-medium"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={handleDownloadHtml}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 hover:border-gray-800 text-gray-800 transition-colors text-xs rounded-xs cursor-pointer font-medium"
              title="Download standalone HTML resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download HTML</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 hover:border-gray-800 text-gray-800 transition-colors text-xs rounded-xs cursor-pointer font-medium"
              title="Copy plain text resume to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-black border border-gray-200 rounded-xs cursor-pointer transition-colors"
            aria-label="Close résumé modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Paper Document Container (Matches User's PDF Layout Exactly) */}
        <div className="max-w-[760px] mx-auto text-slate-950 leading-[1.38] text-[13.5px]">
          
          {/* Header */}
          <div className="text-center mb-5">
            <h1
              id="resume-modal-title"
              className="text-3xl sm:text-4xl tracking-tight text-black font-normal mb-1.5"
            >
              Priti Das Dipa
            </h1>

            <div className="text-xs sm:text-[13px] text-gray-800 flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
              <span>+880 1701396760</span>
              <span>|</span>
              <a
                href="mailto:dipapritidas@gmail.com"
                className="text-gray-900 hover:underline"
              >
                dipapritidas@gmail.com
              </a>
              <span>|</span>
              <a
                href="https://nnf-foundation.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline hover:text-blue-900 inline-flex items-center gap-0.5"
              >
                Personal Website
              </a>
              <span>|</span>
              <a
                href="https://www.linkedin.com/in/priti-das-dipa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline hover:text-blue-900"
              >
                Linkedin
              </a>
              <span>|</span>
              <a
                href="https://github.com/priti24bd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline hover:text-blue-900"
              >
                Github
              </a>
              <span>|</span>
            </div>
          </div>

          {/* EDUCATION */}
          <section className="mb-5">
            <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 text-black">
              EDUCATION
            </h2>

            <div className="mb-2.5">
              <div className="flex justify-between items-baseline font-bold text-[13.5px] text-black">
                <span>Tungipara Govt. College</span>
                <span className="font-normal text-xs sm:text-[13px] text-gray-900">Tungipara, Gopalganj</span>
              </div>
              <div className="flex justify-between items-baseline italic text-xs sm:text-[13px] text-gray-800">
                <span>Higher Secondary Certificate (HSC), Humanities</span>
                <span className="not-italic text-xs sm:text-[13px] text-gray-900">Dec 2022 – Oct 2024</span>
              </div>
              <ul className="list-disc pl-5 mt-0.5 text-xs sm:text-[13px] text-gray-900 space-y-0.5">
                <li>GPA: 4.92/5.00; Top 2 of 1,200 students; focus: Social Sciences.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-bold text-[13.5px] text-black">
                <span>Kachuria Bazar Hazi Saber Molla Memorial Secondary School</span>
                <span className="font-normal text-xs sm:text-[13px] text-gray-900">Mollahat, Bagerhat</span>
              </div>
              <div className="flex justify-between items-baseline italic text-xs sm:text-[13px] text-gray-800">
                <span>Secondary School Certificate (SSC), Science</span>
                <span className="not-italic text-xs sm:text-[13px] text-gray-900">Jan 2020 – Nov 2022</span>
              </div>
              <ul className="list-disc pl-5 mt-0.5 text-xs sm:text-[13px] text-gray-900 space-y-0.5">
                <li>GPA: 4.72 / 5.00, foundation in Physics, Chemistry, Biology, and Mathematics.</li>
              </ul>
            </div>
          </section>

          {/* LEADERSHIP & COMMUNITY IMPACT */}
          <section className="mb-5">
            <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 text-black">
              LEADERSHIP &amp; COMMUNITY IMPACT
            </h2>

            <div className="mb-2.5">
              <div className="flex justify-between items-baseline font-bold text-[13.5px] text-black">
                <span>Founder &amp; Executive Director</span>
                <span className="font-normal text-xs sm:text-[13px] text-gray-900">Jun 2025 – Present</span>
              </div>
              <div className="flex justify-between items-baseline italic text-xs sm:text-[13px] text-gray-800">
                <span>
                  NOVA Nourish Foundation [
                  <a
                    href="https://nnf-foundation.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-900 not-italic"
                  >
                    Website
                  </a>
                  ]
                </span>
                <span className="not-italic text-xs sm:text-[13px] text-gray-900">Global</span>
              </div>
              <ul className="list-disc pl-5 mt-0.5 text-xs sm:text-[13px] text-gray-900 space-y-0.5">
                <li>Built a 120+ volunteer network across 15+ countries; reached 5+ schools with 80%+ retention.</li>
                <li>Reached 2,000+ youth through 10+ events, workshops, and conferences.</li>
                <li>Built 3 NGO partnerships, securing $300+ in funding and in-kind resource</li>
              </ul>
            </div>

            <div className="mb-2.5">
              <div className="flex justify-between items-baseline font-bold text-[13.5px] text-black">
                <span>Divisional Trainer</span>
                <span className="font-normal text-xs sm:text-[13px] text-gray-900">Jan 2025 – Dec 2025</span>
              </div>
              <div className="flex justify-between items-baseline italic text-xs sm:text-[13px] text-gray-800">
                <span>JAAGO Foundation</span>
                <span className="not-italic text-xs sm:text-[13px] text-gray-900">Khulna</span>
              </div>
              <ul className="list-disc pl-5 mt-0.5 text-xs sm:text-[13px] text-gray-900 space-y-0.5">
                <li>Designed and executed 30+ standardized training sessions for 10 districts’ volunteers aged 16-28.</li>
              </ul>
            </div>

            <div className="mb-2.5">
              <div className="flex justify-between items-baseline font-bold text-[13.5px] text-black">
                <span>Project Officer</span>
                <span className="font-normal text-xs sm:text-[13px] text-gray-900">Jan 2025 – Dec 2025</span>
              </div>
              <div className="flex justify-between items-baseline italic text-xs sm:text-[13px] text-gray-800">
                <span>Volunteer for Bangladesh</span>
                <span className="not-italic text-xs sm:text-[13px] text-gray-900">Bagerhat, Khulna</span>
              </div>
              <ul className="list-disc pl-5 mt-0.5 text-xs sm:text-[13px] text-gray-900 space-y-0.5">
                <li>Led 5+ social-impact projects across 9 Upazilas; elected with 90% of votes for field-management excellence.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-bold text-[13.5px] text-black">
                <span>Youth Mentor</span>
                <span className="font-normal text-xs sm:text-[13px] text-gray-900">Jan 2024 – Dec 2024</span>
              </div>
              <div className="flex justify-between items-baseline italic text-xs sm:text-[13px] text-gray-800">
                <span>National Children Task Force</span>
                <span className="not-italic text-xs sm:text-[13px] text-gray-900">Bagerhat</span>
              </div>
              <ul className="list-disc pl-5 mt-0.5 text-xs sm:text-[13px] text-gray-900 space-y-0.5">
                <li>Guided 1000+ high school students in social responsibility and fair access to education.</li>
              </ul>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="mb-5">
            <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 text-black">
              PROJECTS
            </h2>

            <div className="mb-2.5">
              <div className="flex justify-between items-baseline text-[13.5px] text-black">
                <span className="font-bold">
                  Smart Flood Management System <span className="font-normal">|</span> <span className="italic font-normal">imaGen Ventures Youth Challenge 2024-25</span> <span className="font-normal">|</span>{' '}
                  <a
                    href="https://github.com/priti24bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-900 font-normal inline-flex items-center gap-0.5"
                  >
                    GitHub
                  </a>
                </span>
                <span className="text-xs sm:text-[13px] text-gray-900 font-normal">Feb 2025</span>
              </div>
              <ul className="list-disc pl-5 mt-0.5 text-xs sm:text-[13px] text-gray-900 space-y-0.5">
                <li>Organized by U.S. Embassy- Dhaka, Generation Unlimited, JAAGO Foundation, and UNICEF Bangladesh.</li>
                <li>Top 4 of 135 projects after a 3-day climate-innovation bootcamp.</li>
              </ul>
            </div>

            <div className="mb-2.5">
              <div className="flex justify-between items-baseline text-[13.5px] text-black">
                <span className="font-bold">
                  Hanging Nutrition Bag <span className="font-normal">|</span> <span className="italic font-normal">Global Alliance For Improved Nutrition</span> <span className="font-normal">|</span>{' '}
                  <a
                    href="https://github.com/priti24bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-900 font-normal inline-flex items-center gap-0.5"
                  >
                    GitHub
                  </a>
                </span>
                <span className="text-xs sm:text-[13px] text-gray-900 font-normal">June 2025 – Dec 2025</span>
              </div>
              <ul className="list-disc pl-5 mt-0.5 text-xs sm:text-[13px] text-gray-900 space-y-0.5">
                <li>1of 16 nationally selected projects; secured $500 funding, reaching 25 families, 100+ girls, and 3 villages.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline text-[13.5px] text-black">
                <span className="font-bold">
                  Robotics &amp; Automation Projects <span className="font-normal">|</span> <span className="italic font-normal">Robotics</span>
                </span>
                <span className="text-xs sm:text-[13px] text-gray-900 font-normal">2020 – 2022</span>
              </div>
              <ul className="list-disc pl-5 mt-0.5 text-xs sm:text-[13px] text-gray-900 space-y-0.5">
                <li>Built 12 automation projects; deployed a night light and fire detector at a secondary school for 3 months.</li>
              </ul>
            </div>
          </section>

          {/* ADDITIONAL ACTIVITIES */}
          <section className="mb-5">
            <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 text-black">
              ADDITIONAL ACTIVITIES
            </h2>

            <div className="mb-2.5">
              <div className="flex justify-between items-baseline text-[13.5px] text-black">
                <span className="font-bold">
                  Leadership Development Program, Cohorts 1 &amp; 3 <span className="font-normal">|</span> <span className="italic font-normal">Aspire Institute</span>
                </span>
                <span className="text-xs sm:text-[13px] text-gray-900 font-normal">2026</span>
              </div>
              <ul className="list-disc pl-5 mt-0.5 text-xs sm:text-[13px] text-gray-900 space-y-0.5">
                <li>Completed 2 leadership development cohorts in entrepreneurship, career development, and social impact.</li>
              </ul>
            </div>

            <div className="mb-2.5">
              <div className="flex justify-between items-baseline text-[13.5px] text-black">
                <span className="font-bold">
                  Machine Learning Intern <span className="font-normal">|</span> <span className="italic font-normal">FlyRank AI</span>
                </span>
                <span className="text-xs sm:text-[13px] text-gray-900 font-normal">July 2026 – Present</span>
              </div>
              <ul className="list-disc pl-5 mt-0.5 text-xs sm:text-[13px] text-gray-900 space-y-0.5">
                <li>Built and evaluated an ML project focused on Google search ranking and discoverability.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline text-[13.5px] text-black">
                <span className="font-bold">
                  Invited Youth Participant <span className="font-normal">|</span> <span className="italic font-normal">CSW70, UN Women</span>
                </span>
                <span className="text-xs sm:text-[13px] text-gray-900 font-normal">Jan 2026</span>
              </div>
              <ul className="list-disc pl-5 mt-0.5 text-xs sm:text-[13px] text-gray-900 space-y-0.5">
                <li>Recommended by a UN Women official; featured by UN Women; invited to speak at a virtual CSW70 meeting.</li>
              </ul>
            </div>
          </section>

          {/* SKILLS */}
          <section>
            <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2 text-black">
              SKILLS
            </h2>
            <div className="text-xs sm:text-[13px] text-gray-900 space-y-1">
              <p>
                <span className="font-bold text-black">Programming:</span> Python, C++, HTML
              </p>
              <p>
                <span className="font-bold text-black">Technical:</span> Arduino, GitHub, Canva, Notion
              </p>
              <p>
                <span className="font-bold text-black">Leadership:</span> Public Speaking, Team Management, Advocacy, Policy Analysis
              </p>
              <p>
                <span className="font-bold text-black">Languages:</span> Bengali (Native), English (Professional), Spanish (Intermediate), Hindi (Intermediate)
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
