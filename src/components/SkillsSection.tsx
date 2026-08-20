import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    title: 'FRONTEND DEVELOPMENT',
    badge: 'CORE SKILLS',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Tailwind CSS',
      'Vite',
      'Responsive Design',
    ],
    description:
      'Building responsive, interactive, and user-focused web interfaces using modern frontend technologies, reusable React components, clean layouts, and scalable UI architecture.',
    stat: 'MODERN UI',
    colSpan: 'lg:col-span-7',
  },

  {
    title: 'BACKEND DEVELOPMENT',
    badge: 'SERVER SIDE',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Firebase',
      'Firestore',
      'Authentication',
      'JWT',
      'API Integration',
    ],
    description:
      'Developing practical backend systems with REST APIs, authentication, database integration, cloud services, and reliable application workflows.',
    stat: 'API + CLOUD',
    colSpan: 'lg:col-span-5',
  },

  {
    title: 'PROGRAMMING & DATABASES',
    badge: 'CORE FOUNDATION',
    items: [
      'Java',
      'Python',
      'C',
      'JavaScript',
      'SQL',
      'MySQL',
      'PostgreSQL',
      'Data Structures',
    ],
    description:
      'Strong programming foundation with experience in object-oriented programming, database management, problem solving, algorithms, and building application-level solutions.',
    stat: 'DSA + SQL',
    colSpan: 'lg:col-span-5',
  },

  {
    title: 'AI & DATA TECHNOLOGIES',
    badge: 'INTELLIGENCE',
    items: [
      'Python',
      'Machine Learning',
      'TensorFlow',
      'Keras',
      'OpenAI API',
      'AI Chatbots',
      'Power BI',
      'Excel',
    ],
    description:
      'Building AI-integrated applications, chatbot solutions, machine learning projects, data analysis workflows, dashboards, and intelligent software features.',
    stat: 'AI + DATA',
    colSpan: 'lg:col-span-7',
  },

  {
    title: 'DEVELOPMENT TOOLS',
    badge: 'WORKFLOW',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'NPM',
      'Vercel',
      'Render',
      'Firebase',
    ],
    description:
      'Using modern development tools for source control, API testing, package management, deployment, debugging, and collaborative software development.',
    stat: 'DEV WORKFLOW',
    colSpan: 'lg:col-span-7',
  },

  {
    title: 'TECHNICAL TRAINING',
    badge: 'KNOWLEDGE SHARING',
    items: [
      'Java',
      'Python',
      'C',
      'JavaScript',
      'Web Development',
      'Programming',
      'DSA',
      'Project Training',
    ],
    description:
      'Delivering practical technical training through structured explanations, coding exercises, real-world projects, debugging sessions, and hands-on development guidance.',
    stat: 'TRAIN + BUILD',
    colSpan: 'lg:col-span-5',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(6px)',
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-screen bg-black text-[#E2E8F0] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >

      {/* =========================================================
          AMBIENT GLOWS
      ========================================================= */}

      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#3B82F6]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#1D4ED8]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* =========================================================
            EYEBROW HEADER
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#3B82F6]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            03 / SKILLS & TECHNOLOGY
          </span>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#3B82F6]/80 via-[#1D4ED8]/40 to-transparent" />
        </motion.div>

        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-10"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
            }}
          >

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              TECHNICAL TOOLKIT.
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DBEAFE] via-[#60A5FA] to-[#172554] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              PRACTICAL ENGINEERING.
            </span>

          </h2>

          {/* Supporting Text */}

          <p
            className="mt-5 max-w-2xl text-xs sm:text-sm font-light text-[#94A3B8] leading-relaxed"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            A practical technology stack focused on building web applications,
            AI-integrated solutions, backend systems, data-driven applications,
            and real-world software projects.
          </p>
        </motion.div>

        {/* =========================================================
            BENTO GRID
        ========================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-60px',
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >

          {bentoCategories.map((block, idx) => (

            <motion.div
              key={block.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                },
              }}
              className={`${block.colSpan} relative p-8 sm:p-9 rounded-sm border border-[#1D4ED8]/35 bg-[#080D18]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#3B82F6]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)] cursor-pointer group`}
            >

              {/* =================================================
                  TOP BORDER HIGHLIGHT
              ================================================= */}

              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* =================================================
                  CORNER PINS
              ================================================= */}

              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#3B82F6]/40 group-hover:border-[#3B82F6] transition-colors duration-300" />

              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#3B82F6]/40 group-hover:border-[#3B82F6] transition-colors duration-300" />

              {/* =================================================
                  CARD META
              ================================================= */}

              <div className="flex items-center justify-between mb-4">

                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#3B82F6] group-hover:text-[#F3DBB3] transition-colors">
                  {block.badge}
                </span>

                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-[#1D4ED8]/40 text-[#94A3B8] bg-[#17130F] group-hover:border-[#3B82F6]/50 group-hover:text-white transition-all">
                  {block.stat}
                </span>

              </div>

              {/* =================================================
                  TITLE
              ================================================= */}

              <h3
                className="text-3xl sm:text-4xl font-normal tracking-wide text-white mb-3 group-hover:text-[#DBEAFE] transition-colors"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                {block.title}
              </h3>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p
                className="text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed mb-7 max-w-xl group-hover:text-[#D5CBC0] transition-colors"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {block.description}
              </p>

              {/* =================================================
                  TECHNOLOGY TAGS
              ================================================= */}

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1D4ED8]/20">

                {block.items.map((tech) => (

                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#1D4ED8]/35 bg-[#171310] text-[#DBEAFE] group-hover:border-[#3B82F6]/50 group-hover:bg-[#1F1914] group-hover:text-white transition-all duration-300"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;