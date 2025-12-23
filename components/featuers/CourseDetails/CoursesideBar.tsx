"use client";
import React, { useState, useCallback, memo } from "react";
import { ChevronDown, ChevronUp, Play, CheckCircle, Clock } from "lucide-react";

interface Lecture {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
}

interface Section {
  id: number;
  title: string;
  duration: string;
  lectures: Lecture[];
}

const CourseSection = memo(function CourseSection({ section, isOpen, onToggle }: { section: Section; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition"
      >
        <div className="flex-1 text-left">
          <h3 className="font-semibold text-sm">{section.title}</h3>
          <p className="text-xs text-gray-500 mt-1">
            {section.lectures.length} lectures • {section.duration}
          </p>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {isOpen && (
        <div className="bg-gray-50">
          {section.lectures.map((lecture: Lecture) => (
            <div
              key={lecture.id}
              className="px-4 py-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer border-t border-gray-200"
            >
              <div className="shrink-0">
                {lecture.completed ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <Play className="w-4 h-4 text-gray-400" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm truncate">{lecture.title}</p>
              </div>

              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {lecture.duration}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

const CourseSidebar = memo(function CourseSidebar({ sections }: { sections: Section[] }) {

  const [openSections, setOpenSections] = useState<number[]>([1]);

  const toggleSection = useCallback((id: number) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }, []);

  return (
    <div>
      {sections.map((sec: Section) => (
        <CourseSection
          key={sec.id}
          section={sec}
          isOpen={openSections.includes(sec.id)}
          onToggle={() => toggleSection(sec.id)}
        />
      ))}
    </div>
  );
});

export default CourseSidebar;