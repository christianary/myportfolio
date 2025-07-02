import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <HoverEffect items={skills} />
    </div>
  );
}

export const skills = [
  {
    title: "Problem Solving",
    description:
      "Solving complex challenges creatively using analytical and innovative approaches.",
    link: "#",
  },
  {
    title: "Critical Thinking",
    description:
      "Assessing situations objectively to make well-informed, effective decisions.",
    link: "#",
  },
  {
    title: "Teamwork & Communication",
    description:
      "Working collaboratively and communicating clearly to achieve shared goals.",
    link: "#",
  },
  {
    title: "Security",
    description:
      "Building and maintaining secure systems through ethical hacking practices.",
    link: "#",
  },
  {
    title: "Digital Forensics",
    description:
      "Analyzing and preserving digital evidence to support investigations.",
    link: "#",
  },
  {
    title: "Leadership",
    description:
      "Taking initiative, guiding teams toward shared goals, and motivating others to achieve their best.",
    link: "#",
  },
];