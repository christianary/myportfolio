import { AnimatedExperience } from "@/components/ui/animated-experience";

export default function AnimatedExperienceDemo() {
  const experiences = [
    {
      title: "FOUNDER & PRODUCER",
      company: "BENZICS RECORDS",
      year: "2023 - Present",
      description:
        "Started an independent record label, managing artists, producing music, and organizing releases.",
      src: "/assets/experience/benzics-records.png",
    },
    {
      title: "JAVASCRIPT BOT DEVELOPER",
      company: "Church",
      year: "2025 - Present",
      description:
        "Built automation bots in JS for church ops, while serving as sound engineer and multimedia operator.",
      src: "/assets/experience/javascript-bot.png",
    },
  ];

  return <AnimatedExperience experiences={experiences} autoplay />;
}
