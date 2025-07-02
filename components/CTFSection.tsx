"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

export default function CTFSection() {
  const [flag, setFlag] = useState("");
  const [status, setStatus] = useState<"idle" | "correct" | "incorrect">(
    "idle"
  );

  const CORRECT_FLAG = "flag{ahh_you_found_my_secret_flag}"; // Replace with your actual flag!

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (flag.trim() === CORRECT_FLAG) {
      setStatus("correct");
    } else {
      setStatus("incorrect");
    }
  };

  return (
    <section id="ctf" className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
        CTF Challenge
      </h2>
      <p className="mb-6 text-neutral-700 dark:text-neutral-300">
        Find the flag hidden in this site and submit it below to win!
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter the flag here..."
          value={flag}
          onChange={(e) => setFlag(e.target.value)}
          className="border border-neutral-400 px-4 py-2 rounded-md w-full text-black dark:text-white dark:bg-neutral-800"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-black text-white rounded-md hover:bg-neutral-800 transition-colors"
        >
          Submit
        </button>
      </form>
      {status === "correct" && (
        <div className="mt-4 flex items-center gap-2 text-green-600">
          <Check className="h-5 w-5" />
          <span>Correct flag! 🎉</span>
        </div>
      )}
      {status === "incorrect" && (
        <div className="mt-4 flex items-center gap-2 text-red-600">
          <X className="h-5 w-5" />
          <span>Incorrect flag. Try again!</span>
        </div>
      )}
    </section>
  );
}
