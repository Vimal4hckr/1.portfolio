import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'FOOD E-BILL SYSTEM',
    category: 'FULL STACK / BILLING / QR VERIFICATION',
    description:
      'A complete digital billing system for creating bills, generating QR-based verification, storing bill data in Firebase Firestore, and verifying bills through a mobile scanning workflow.',
    githubUrl: 'https://github.com/',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'Firebase',
      'Firestore',
      'QR Code',
      'REST API',
      'PWA',
      'WhatsApp API',
    ],
    metrics: [
      { label: 'WORKFLOW', value: 'BILL → QR → VERIFY' },
      { label: 'DATABASE', value: 'FIRESTORE' },
      { label: 'INTEGRATION', value: 'WHATSAPP API' },
    ],
  },

  {
    number: '02',
    title: 'GENIIUS ROADMAPS',
    category: 'EDTECH / FULL STACK WEB PLATFORM',
    description:
      'A technology learning platform designed to organize programming roadmaps, structured lessons, hands-on projects, and practice resources into a guided learning experience.',
    githubUrl: 'https://github.com/',
    tech: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Vite',
      'Learning UX',
    ],
    metrics: [
      { label: 'PLATFORM', value: 'WEB APPLICATION' },
      { label: 'CONTENT', value: 'TECH ROADMAPS' },
      { label: 'FOCUS', value: 'PROJECT LEARNING' },
    ],
  },

  {
    number: '03',
    title: 'SMART AMBULANCE SYSTEM',
    category: 'IOT / AI / SMART TRAFFIC',
    description:
      'An IoT and AI-oriented system designed to detect ambulances and support intelligent traffic-control decisions to improve emergency vehicle movement and response time.',
    githubUrl: 'https://github.com/',
    tech: [
      'Python',
      'IoT',
      'AI',
      'Sensors',
      'Computer Vision',
      'Traffic Control',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'SMART TRANSPORT' },
      { label: 'CORE', value: 'AMBULANCE DETECTION' },
      { label: 'GOAL', value: 'EMERGENCY RESPONSE' },
    ],
  },

  {
    number: '04',
    title: 'AI CHATBOT & VIRTUAL ASSISTANT',
    category: 'AI / NLP / FULL STACK',
    description:
      'An AI-powered conversational assistant integrated into a web application to understand user queries and generate contextual responses. The system combines a responsive React interface with backend APIs and AI model integration for real-time conversational interaction.',
    githubUrl: 'https://github.com/',
    tech: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'OpenAI API',
      'NLP',
      'REST API',
      'Firebase',
    ],
    metrics: [
      { label: 'CORE', value: 'CONVERSATIONAL AI' },
      { label: 'ENGINE', value: 'AI API' },
      { label: 'INTERFACE', value: 'REAL-TIME CHAT' },
    ],
  },

  {
    number: '05',
    title: 'AI TRAVEL ITINERARY GENERATOR',
    category: 'GENERATIVE AI / TRAVEL / FULL STACK',
    description:
      'An AI-integrated travel planning application that generates personalized day-wise itineraries based on destination, duration, budget, interests, and preferred activities, helping users plan complete trips through natural-language interaction.',
    githubUrl: 'https://github.com/',
    tech: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'OpenAI API',
      'REST API',
      'Firebase',
      'Google Maps API',
    ],
    metrics: [
      { label: 'INPUT', value: 'TRAVEL PREFERENCES' },
      { label: 'ENGINE', value: 'GENERATIVE AI' },
      { label: 'OUTPUT', value: 'DAY-WISE ITINERARY' },
    ],
  },

  {
    number: '06',
    title: 'AI RESUME ANALYZER',
    category: 'AI / NLP / CAREER TECH',
    description:
      'An AI-powered resume analysis platform that evaluates resumes against job descriptions, extracts relevant skills, identifies missing keywords, generates a compatibility score, and provides actionable recommendations for improving job readiness.',
    githubUrl: 'https://github.com/',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'Python',
      'NLP',
      'OpenAI API',
      'PDF Processing',
      'Firebase',
    ],
    metrics: [
      { label: 'INPUT', value: 'RESUME + JOB DESCRIPTION' },
      { label: 'ENGINE', value: 'NLP + GENERATIVE AI' },
      { label: 'OUTPUT', value: 'MATCH SCORE + INSIGHTS' },
    ],
  },

  {
    number: '07',
    title: 'CRYPTOCURRENCY PRICE PREDICTION',
    category: 'MACHINE LEARNING / FINANCE / DATA SCIENCE',
    description:
      'A machine-learning project focused on analyzing cryptocurrency market data and predicting future price trends using historical price patterns and data-driven models.',
    githubUrl: 'https://github.com/',
    tech: [
      'Python',
      'Pandas',
      'NumPy',
      'Machine Learning',
      'Data Analysis',
      'Matplotlib',
      'Scikit-learn',
    ],
    metrics: [
      { label: 'DOMAIN', value: 'CRYPTO ANALYTICS' },
      { label: 'INPUT', value: 'MARKET DATA' },
      { label: 'OUTPUT', value: 'PRICE PREDICTION' },
    ],
  },

  {
    number: '08',
    title: 'RESTAURANT MANAGEMENT + ORDERING',
    category: 'FULL STACK / RESTAURANT MANAGEMENT',
    description:
      'A full-stack restaurant management and ordering platform for managing menu items, customer orders, billing, order status, and restaurant operations through a centralized digital system.',
    githubUrl: 'https://github.com/',
    tech: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'Firebase',
      'Firestore',
      'REST API',
      'Responsive UI',
    ],
    metrics: [
      { label: 'SYSTEM', value: 'ORDER MANAGEMENT' },
      { label: 'DATABASE', value: 'FIRESTORE' },
      { label: 'FLOW', value: 'MENU → ORDER → BILL' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E2E8F0] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#3B82F6]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#1D4ED8]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#3B82F6]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED PROJECTS
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#3B82F6]/80 via-[#1D4ED8]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED PROJECTS.
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DBEAFE] via-[#60A5FA] to-[#172554] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              BUILT TO SOLVE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#94A3B8] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            A selection of practical full-stack, AI, machine learning,
            automation, and education-technology projects built through
            hands-on development.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#1D4ED8]/50 bg-[#070B14] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#3B82F6]">

                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#3B82F6]/60 group-hover:border-[#3B82F6] transition-colors" />

                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#3B82F6]/60 group-hover:border-[#3B82F6] transition-colors" />

                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#3B82F6]/60 group-hover:border-[#3B82F6] transition-colors" />

                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#3B82F6]/60 group-hover:border-[#3B82F6] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#DBEAFE]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

                  {/* Left Column */}
                  <div className="lg:col-span-7 flex flex-col justify-between">

                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#3B82F6]">
                          {project.number} //
                        </span>

                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#94A3B8]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#DBEAFE] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#1D4ED8]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#1D4ED8]/40 bg-[#0B1220] text-[#DBEAFE] group-hover:border-[#3B82F6]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#1D4ED8]/25">

                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#1D4ED8] block mb-2">
                        // PROJECT DETAILS
                      </span>

                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#1D4ED8]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#94A3B8]">
                            {m.label}
                          </span>

                          <span className="text-[11px] font-mono font-medium text-[#DBEAFE]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#1D4ED8] bg-[#0B1220] hover:border-[#3B82F6] hover:bg-[#3B82F6] text-[#DBEAFE] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>VIEW ON GITHUB</span>
                      <span className="text-xs">↗</span>
                    </a>

                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;