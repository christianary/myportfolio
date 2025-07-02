import { FocusCards } from "@/components/ui/focus-card";
import Link from "next/link";

export default function Certificates() {
  const certificates = [
    {
      title: "Participant of Capture The Flag at COMPFEST 16",
      src: "/assets/certificates/COMPFEST.png",
    },
    {
      title: "Participants COMPSPHERE 2023",
      src: "/assets/certificates/COMPSPHERE.png",
    },
    {
      title: "EF SET",
      src: "/assets/certificates/EFSET.png",
    },
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My Certificates
      </h2>
      <FocusCards cards={certificates} />
    </section>
  );
}
