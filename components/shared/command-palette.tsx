"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  GraduationCap,
  Users,
  FileText,
  Settings,
  LayoutDashboard,
  Globe,
  BookOpen,
  Compass,
} from "lucide-react";
import { cn } from "@/lib/utils";

const groupResults = {
  "Quick Actions": [
    { label: "Go to Dashboard", icon: LayoutDashboard, href: "/Dashboard" },
    { label: "Create a Course", icon: BookOpen, href: "/Dashboard/Newcourse" },
    { label: "Explore Courses", icon: Compass, href: "/ELearn/courses" },
    { label: "Community", icon: Globe, href: "/ELearn/student/community" },
    { label: "Settings", icon: Settings, href: "/ELearn/student/settings" },
  ],
  "Courses": [
    { label: "Web Development Masterclass", icon: GraduationCap, href: "/ELearn/courses/1" },
    { label: "JavaScript Fundamentals", icon: GraduationCap, href: "/ELearn/courses/2" },
    { label: "React Advanced Patterns", icon: GraduationCap, href: "/ELearn/courses/3" },
  ],
  "People": [
    { label: "Ahmed Hassan", icon: Users, href: "/ELearn/instructor/profile" },
    { label: "Sarah Ahmed", icon: Users, href: "/ELearn/student" },
  ],
  "Documents": [
    { label: "Curriculum Guide", icon: FileText, href: "/Dashboard/Mycourses" },
  ],
};

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  const allItems = React.useMemo(() => {
    const flattened: Array<{ label: string; icon: typeof Search; href: string; group: string }> = [];
    Object.entries(groupResults).forEach(([group, items]) => {
      items.forEach((item) => flattened.push({ ...item, group }));
    });
    return flattened;
  }, []);

  const filtered = React.useMemo(() => {
    if (!query.trim()) return allItems;
    const q = query.toLowerCase();
    return allItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) || item.group.toLowerCase().includes(q)
    );
  }, [query, allItems]);

  React.useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handleSelect = (item: (typeof filtered)[number]) => {
    router.push(item.href);
    onClose();
  };

  const handleKeyNavigation = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filtered[activeIndex]) {
      e.preventDefault();
      handleSelect(filtered[activeIndex]);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-background/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="absolute left-1/2 top-[15%] w-[90%] max-w-xl -translate-x-1/2 animate-scale-in">
        <div className="overflow-hidden rounded-2xl border bg-card shadow-2xl">
          <div className="flex items-center gap-3 border-b px-4 py-3">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={handleKeyNavigation}
              placeholder="Search anything... courses, people, actions"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              ESC
            </kbd>
          </div>

          <div ref={listRef} className="max-h-[400px] overflow-y-auto p-2">
            {filtered.length === 0 ? (
              <div className="py-8 text-center text-sm text-muted-foreground">
                No results for &quot;{query}&quot;
              </div>
            ) : (
              <div className="space-y-3">
                {Object.entries(
                  filtered.reduce<Record<string, typeof filtered>>((acc, item) => {
                    if (!acc[item.group]) acc[item.group] = [];
                    acc[item.group].push(item);
                    return acc;
                  }, {})
                ).map(([group, items]) => (
                  <div key={group} className="space-y-0.5">
                    <p className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {group}
                    </p>
                    {items.map((item) => {
                      const actualIndex = filtered.indexOf(item);
                      return (
                        <button
                          key={`${group}-${item.label}`}
                          onClick={() => handleSelect(item)}
                          onMouseEnter={() => setActiveIndex(actualIndex)}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                            activeIndex === actualIndex
                              ? "bg-brand text-brand-foreground"
                              : "hover:bg-accent"
                          )}
                        >
                          <item.icon className="h-4 w-4 shrink-0 opacity-70" />
                          <span className="flex-1 truncate">{item.label}</span>
                          <kbd
                            className={cn(
                              "rounded border px-1 text-[10px] font-mono",
                              activeIndex === actualIndex
                                ? "border-brand-foreground/20 text-brand-foreground/60"
                                : "border-muted text-muted-foreground"
                            )}
                          >
                            ↵
                          </kbd>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}