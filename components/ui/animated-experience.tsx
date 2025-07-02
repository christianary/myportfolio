"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type Experience = {
  title: string;
  company: string;
  year: string;
  description: string;
  src: string;
};

export const AnimatedExperience = ({
  experiences,
  autoplay = true,
  interval = 5000,
}: {
  experiences: Experience[];
  autoplay?: boolean;
  interval?: number; // in ms, default 5s
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const ticker = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(ticker);
  }, [autoplay, active, interval, experiences.length]);

  const isActive = (index: number) => index === active;

  return (
    <div className="mx-auto max-w-sm px-4 py-10 md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0,
                    scale: isActive(index) ? 1 : 0.95,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={exp.src}
                    alt={exp.title}
                    className="h-full w-full rounded-3xl object-cover"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-bold">{experiences[active].title}</h3>
            <p className="text-sm text-gray-500">
              {experiences[active].company} | {experiences[active].year}
            </p>
            <motion.p className="mt-4 text-base text-gray-600">
              {experiences[active].description}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 pt-8">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-200"
            >
              <IconArrowLeft className="h-5 w-5 text-black group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-200"
            >
              <IconArrowRight className="h-5 w-5 text-black group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
