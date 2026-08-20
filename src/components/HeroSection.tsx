import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({
    x: -100,
    y: -100,
  });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      className="
        relative
        w-screen
        h-screen
        overflow-hidden
        bg-black
        text-[#E2E8F0]
        font-sans
        selection:bg-[#BFDBFE]
        selection:text-[#0F172A]
        cursor-none
      "
    >

      {/* =========================================================
          1. CUSTOM CURSOR
      ========================================================= */}

      {cursorPos.x >= 0 && (
        <motion.div
          className="
            fixed
            top-0
            left-0
            pointer-events-none
            z-50
            rounded-full
            border
            border-[#60A5FA]/50
            flex
            items-center
            justify-center
            backdrop-blur-[1px]
          "
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered
              ? 'rgba(59, 130, 246, 0.10)'
              : 'rgba(219, 234, 254, 0.95)',
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 350,
            mass: 0.5,
          }}
        />
      )}

      {/* =========================================================
          2. HERO BANNER
      ========================================================= */}

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">

        {/* Main Banner */}

        <img
          src="/banner.png"
          alt="Vimal R. portfolio banner"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
          "
        />

        {/* Overall Dark Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-black/30
            pointer-events-none
          "
        />

        {/* Left Side Dark Gradient */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[65%]
            bg-gradient-to-r
            from-black/95
            via-black/75
            to-transparent
            pointer-events-none
          "
        />

        {/* Bottom Dark Gradient */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-1/3
            bg-gradient-to-t
            from-black/70
            via-transparent
            to-transparent
            pointer-events-none
          "
        />

        {/* =========================================================
            WATERMARK
        ========================================================= */}

        <div
          className="
            absolute
            bottom-6
            right-6
            lg:bottom-10
            lg:right-12
            pointer-events-none
            flex
            items-center
            justify-center
            z-10
          "
        >
          <div className="relative flex items-center justify-center">

            <div
              className="
                absolute
                w-36
                h-36
                bg-black/80
                rounded-full
                blur-xl
              "
            />

            <motion.div
              animate={{
                y: [-3, 3, -3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center"
            >
              <img
                src={watermarkImg}
                alt="Vimal R. portfolio logo"
                className="
                  w-28
                  h-28
                  lg:w-32
                  lg:h-32
                  object-contain
                  drop-shadow-[0_0_15px_rgba(59,130,246,0.35)]
                "
              />
            </motion.div>

          </div>
        </div>

      </div>

      {/* =========================================================
          3. CONTENT LAYER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          justify-between
          h-full
          w-full
          px-6
          sm:px-12
          lg:px-16
          pt-6
          pb-8
          pointer-events-none
        "
      >

        {/* =========================================================
            NAVIGATION
        ========================================================= */}

        <header
          className="
            relative
            flex
            items-center
            justify-between
            w-full
            pointer-events-auto
          "
        >

          {/* Logo / Name */}

          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="
              text-xs
              sm:text-sm
              font-semibold
              tracking-[0.35em]
              uppercase
              text-[#DBEAFE]
              hover:text-[#60A5FA]
              transition-colors
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            VIMAL R.
          </a>

          {/* Navigation */}

          <nav
            className="
              hidden
              md:flex
              items-center
              space-x-8
              lg:space-x-10
              text-[11px]
              tracking-[0.28em]
              font-light
              uppercase
              text-[#94A3B8]
              absolute
              left-1/2
              -translate-x-1/2
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="
                  relative
                  group
                  py-1
                  transition-colors
                  duration-300
                  hover:text-[#DBEAFE]
                "
              >
                {item.name}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-[1px]
                    bg-[#60A5FA]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* Contact CTA */}

          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="
              group
              flex
              items-center
              space-x-2
              text-[11px]
              tracking-[0.24em]
              font-light
              uppercase
              py-2
              px-4
              border
              border-[#2563EB]/60
              hover:border-[#60A5FA]
              bg-black/20
              text-[#DBEAFE]
              transition-all
              duration-300
              backdrop-blur-sm
              ml-auto
              md:ml-0
            "
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <span>LET&apos;S TALK</span>

            <span
              className="
                transform
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
                text-xs
              "
            >
              ↗
            </span>
          </a>

        </header>

        {/* =========================================================
            MAIN HERO
        ========================================================= */}

        <div
          className="
            relative
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            w-full
            pt-4
            pb-2
            my-auto
          "
        >

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="
              max-w-sm
              sm:max-w-md
              md:max-w-lg
              lg:max-w-[37rem]
              xl:max-w-[40rem]
              pointer-events-auto
              z-20
            "
          >

            {/* Main Heading */}

            <motion.div
              variants={fadeUpVariants}
              className="relative mb-3.5 select-none"
            >
              <h1
                className="
                  text-6xl
                  sm:text-7xl
                  md:text-8xl
                  lg:text-[7.2rem]
                  xl:text-[7.8rem]
                  tracking-tight
                  uppercase
                  leading-[0.83]
                "
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >

                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-white
                    via-[#E2E8F0]
                    to-[#64748B]
                    drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]
                  "
                >
                  I BUILD
                </span>

                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-[#DBEAFE]
                    via-[#60A5FA]
                    to-[#2563EB]
                    drop-shadow-[0_8px_25px_rgba(59,130,246,0.35)]
                  "
                >
                  DIGITAL
                </span>

                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-b
                    from-[#BFDBFE]
                    via-[#3B82F6]
                    to-[#1D4ED8]
                    drop-shadow-[0_10px_30px_rgba(37,99,235,0.40)]
                  "
                >
                  SOLUTIONS
                </span>

              </h1>
            </motion.div>

            {/* =================================================
                PROFESSIONAL ROLE
            ================================================= */}

            <motion.div
              variants={fadeUpVariants}
              className="mb-4"
            >
              <p
                className="
                  text-[10px]
                  sm:text-[11px]
                  md:text-xs
                  font-normal
                  tracking-[0.28em]
                  uppercase
                  text-[#CBD5E1]
                "
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                FULL STACK DEVELOPER

                <span className="text-[#60A5FA] mx-1">
                  •
                </span>

                SOFTWARE DEVELOPER

                <span className="text-[#60A5FA] mx-1">
                  •
                </span>

                TECHNICAL TRAINER
              </p>
            </motion.div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.div
              variants={fadeUpVariants}
              className="
                text-xs
                sm:text-sm
                md:text-[13.5px]
                font-light
                text-[#94A3B8]
                leading-[1.8]
                tracking-wide
                max-w-lg
                mb-6
                space-y-1
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <p>
                I build scalable web applications and AI-powered digital
                products.
                <br />
                From intuitive frontend experiences to robust backend systems,
                I turn ideas into reliable, real-world solutions.
              </p>
            </motion.div>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <motion.div
              variants={fadeUpVariants}
              className="
                flex
                flex-row
                items-center
                gap-4
                sm:gap-6
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >

              {/* Projects Button */}

              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="
                  relative
                  inline-flex
                  items-center
                  space-x-3
                  px-6
                  sm:px-7
                  py-3.5
                  border
                  border-[#2563EB]
                  bg-[#080D18]/80
                  hover:border-[#60A5FA]
                  text-[#DBEAFE]
                  hover:text-white
                  text-[11px]
                  font-medium
                  tracking-[0.24em]
                  uppercase
                  transition-all
                  duration-300
                  shadow-[0_0_25px_rgba(59,130,246,0.18)]
                "
              >

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-[1px]
                    bg-gradient-to-r
                    from-transparent
                    via-[#93C5FD]/60
                    to-transparent
                    pointer-events-none
                  "
                />

                <span>
                  VIEW MY PROJECTS
                </span>

                <span className="text-xs">
                  ↗
                </span>

              </motion.a>

              {/* =================================================
                  DOWNLOAD RESUME
              ================================================= */}

              <motion.a
                href="/resume.pdf"
                download="Vimal-R-Resume.pdf"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="
                  relative
                  inline-flex
                  items-center
                  space-x-2
                  px-6
                  sm:px-7
                  py-3.5
                  border
                  border-[#2563EB]/60
                  hover:border-[#60A5FA]
                  bg-black/20
                  backdrop-blur-sm
                  text-[#93C5FD]
                  hover:text-white
                  text-[11px]
                  font-medium
                  tracking-[0.24em]
                  uppercase
                  transition-all
                  duration-300
                "
              >

                <span>
                  DOWNLOAD RESUME
                </span>

                <span className="text-xs">
                  ↓
                </span>

              </motion.a>

            </motion.div>

          </motion.div>

          {/* =====================================================
              RIGHT QUOTE
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              hidden
              lg:flex
              flex-col
              items-start
              pointer-events-auto
              pr-24
              xl:pr-36
              mr-4
              z-20
              select-none
            "
          >

            {/* Quote */}

            <span
              className="
                text-xl
                text-[#60A5FA]
                leading-none
                font-serif
                mb-2
              "
            >
              “
            </span>

            {/* Statement */}

            <div
              className="
                text-[9.5px]
                font-medium
                tracking-[0.24em]
                uppercase
                text-[#CBD5E1]
                space-y-1
                mb-3
              "
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <p>
                CODE. CREATE. SOLVE.
              </p>

              <p>
                BUILDING IDEAS INTO IMPACT.
              </p>
            </div>

            {/* Blue Accent Line */}

            <div
              className="
                w-28
                h-[1px]
                bg-gradient-to-r
                from-[#2563EB]
                via-[#93C5FD]/70
                to-transparent
                shadow-[0_0_8px_rgba(59,130,246,0.45)]
                mb-2
              "
            />

            {/* Signature */}

            <div
              className="
                text-[2.2rem]
                text-[#60A5FA]
                font-normal
                leading-none
                -ml-0.5
              "
              style={{
                fontFamily:
                  "'Herr Von Muellerhoff', 'Allura', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Vimal R.
            </div>

          </motion.div>

        </div>

        {/* Bottom Spacer */}

        <div className="h-2" />

      </div>

    </section>
  );
};

export default HeroSection;