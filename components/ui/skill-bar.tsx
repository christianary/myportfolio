import React from "react";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  skill: string;
  percentage: number; // 0-100
  className?: string;
}

export default function SkillBar({ skill, percentage, className }: SkillBarProps) {
  return (
    <div className={cn("w-full mb-4", className)}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          {skill}
        </span>
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
