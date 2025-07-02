"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function CertificatesSection() {
  const certificates = [
    {
      title: "Next.js Advanced",
      description: "Fullstack React with Next.js",
      image: "/certificates/nextjs.png",
    },
    {
      title: "TypeScript Mastery",
      description: "Master Type Safety",
      image: "/certificates/ts.png",
    },
    // Add more...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {certificates.map((cert, idx) => (
        <div key={idx} className="relative rounded-2xl border p-4">
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} />
          <img
            src={cert.image}
            alt={cert.title}
            className="rounded-lg w-full h-48 object-cover"
          />
          <h3 className="mt-4 text-xl font-bold">{cert.title}</h3>
          <p className="text-sm text-gray-500">{cert.description}</p>
        </div>
      ))}
    </div>
  );
}
