import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import GradientText from "./components/GradientText/GradientText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import FloatingDockDemo from "@/components/floating-dock-demo";
import CardHoverEffectDemo from "@/components/card-hover-effect-demo";
import SkillBar from "@/components/ui/skill-bar";
import { technicalSkills } from "@/components/skills";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { AnimatedExperience } from "@/components/ui/animated-experience";
import AnimatedExperienceDemo from "@/components/experience-animated-demo";
import TimelineDemo from "@/components/timeline-demo";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundLines } from "@/components/ui/background-lines";
import NavbarDemo from "@/components/navbar-menu-demo";
import Certificates from "@/components/certificates";
import ContactSection from "@/components/ContactSection";
import CTFSection from "@/components/CTFSection";

export default function Home() {
  return (
    <BackgroundLines>
    <NavbarDemo/>
    
    <div className="min-h-screen overflow-x-hidden bg-[#FFFFFF] scroll-smooth">
      {/* HOME PAGE */}
      <section id="home" className="pt-24">
        <div className="container mx-auto min-h-screen flex flex-col md:grid md:grid-cols-12">
          <div className="col-span-12 md:col-span-6 flex items-center justify-center h-full p-6">
            <div className="flex flex-col gap-6 max-w-lg">
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={false}
                duration={1.2}
                ease="bounce.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-xl sm:text-2xl text-black font-bold">
                    Welcome to my
                  </h1>
                  <RotatingText
                    texts={[
                      "Portfolio",
                      "Professional journey",
                      "Creative hub",
                      "Career launchpad",
                    ]}
                    mainClassName="px-2 sm:px-3 bg-black text-white overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-xl sm:text-2xl font-bold inline-flex transition-all"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000} />
                </div>
              </AnimatedContent>

              <div className="flex flex-col items-start w-full">
                <SplitText
                  text="I'm Jeremy Christian"
                  className="text-3xl sm:text-4xl font-semibold text-black"
                  delay={50}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px" />

                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="text-xl sm:text-3xl text-left"
                >
                  An Undergraduate Informatics Student
                </GradientText>
              </div>

              <div>
                <a
                  href="/MyResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GradientText
                    colors={[
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                      "#4079ff",
                      "#40ffaa",
                    ]}
                    animationSpeed={3}
                    showBorder={true}
                    className="px-4 py-3 text-base sm:text-lg"
                  >
                    Download CV
                  </GradientText>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center items-center p-6">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>
        <div className="container mx-auto py-8">
          <ScrollVelocity
            texts={["Cyber Security Student", "Informatics"]}
            className="custom-scroll-text text-black" />
        </div>
      </section>

      <section id="about" className="container mx-auto">
        {/* ABOUT SECTION */}
        <h2 className="text-3xl font-bold mb-4 text-black">About Me</h2>
        <BlurText
          text="I’m an Informatics student majoring in Cyber Security, with a strong interest in digital forensics, ethical hacking, and secure web development. I enjoy solving complex problems through creative, detail-oriented approaches and have hands-on experience with tools and languages such as PHP, React, and SQL. Currently, I’m seeking internship opportunities where I can contribute, learn, and grow in the field of informatics and technology."
          delay={50}
          animateBy="words"
          direction="top"
          className="text-base sm:text-lg text-black mb-8"
        />
      </section>

      <section id="education" className="container mx-auto">   
        {/* EDUCATION SECTION */}
        <h2 className="text-3xl font-bold mb-4 text-black">Education</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-black">
            Bachelor of Science in Information Technology (2023 - Expected 2026)
          </h3>
          <p className="text-black">President University</p>
          <p className="text-black">Focus: Cyber Security</p>
          <p className="text-black">GPA: 3.84/4.0</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-black">
            High School (2020 - 2023)
          </h3>
          <p className="text-black">SMATER Don Bosco Manado</p>
          <p className="text-black">Focus: Cyber Security</p>
        </div>
        <br />
      </section>
      
      <section id="skills" className="container mx-auto">
        {/* SKILLS & TOOLS SECTION */}
        <h2 className="text-3xl font-bold mb-4 text-black">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalSkills.map((skill) => (
            <SkillBar
              key={skill.skill}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>

        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          <b>Interest & Soft Skills</b>
        </h2>
        <CardHoverEffectDemo />
      </section>

      <section id="experience" className="container mx-auto">
        {/* EXPERIENCE */}
        <h2 className="text-3xl font-bold mb-1 text-center text-black mt-12">
          Work Experience
        </h2>
        <AnimatedExperienceDemo />
        </section>

          {/* PROJECT */}
        <section id="project" className="container mx-auto py-1">
          <TimelineDemo />
        </section>

          {/* CERTIFICATE */}
        <section id="certificate" className="container mx-auto py-1">
          <Certificates />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="container mx-auto">   
        <ContactSection />
      </section>

      <section id="specialfeature" className="container mx-auto">   
      <CTFSection />
      </section>
    </div>
    </BackgroundLines>
  );
}
