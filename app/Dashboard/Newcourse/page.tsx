"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import BasicInformation from "@/components/dashboard/NewCourse/BasicInformation";
import AdvancedInformation from "@/components/dashboard/NewCourse/AdvancedInformation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Info,
  Layers,
  Video,
  FileText,
  Gauge,
  ClipboardCheck,
  Award,
  Eye,
  Send,
  ChevronRight,
  CheckCircle2,
  Circle,
} from "lucide-react";

const steps = [
  {
    id: "basics",
    label: "Course Info",
    description: "Title, category & level",
    icon: Info,
  },
  {
    id: "curriculum",
    label: "Curriculum",
    description: "Modules & lessons",
    icon: Layers,
  },
  {
    id: "content",
    label: "Lesson Content",
    description: "Videos, PDFs & media",
    icon: Video,
  },
  {
    id: "assessments",
    label: "Assessments",
    description: "Quizzes & assignments",
    icon: Gauge,
  },
  {
    id: "completion",
    label: "Completion",
    description: "Certificates & rules",
    icon: Award,
  },
  {
    id: "publish",
    label: "Publish",
    description: "Preview & launch",
    icon: Send,
  },
];

const Newcourse = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <BasicInformation />;
      case 1:
        return <AdvancedInformation />;
      case 2:
        return <ContentPlaceholder step={steps[currentStep]} />;
      case 3:
        return <ContentPlaceholder step={steps[currentStep]} />;
      case 4:
        return <ContentPlaceholder step={steps[currentStep]} />;
      case 5:
        return <ContentPlaceholder step={steps[currentStep]} />;
      default:
        return <BasicInformation />;
    }
  };

  const markComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
  };

  const goNext = () => {
    markComplete();
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const jumpToStep = (index: number) => {
    if (index < currentStep || completedSteps.includes(index - 1) || index <= Math.max(0, ...completedSteps)) {
      setCurrentStep(index);
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex h-[calc(100vh-4rem)] flex-col"
    >
      {/* Top header with progress */}
      <div className="flex items-center justify-between border-b px-6 py-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold tracking-tight">
              {steps[currentStep].label}
            </h2>
            <Badge variant="brand" className="text-[10px]">
              Step {currentStep + 1} of {steps.length}
            </Badge>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {steps[currentStep].description}
          </p>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="sm">
            <Eye className="mr-1 h-3.5 w-3.5" />
            Preview
          </Button>
          <Button size="sm" variant="ghost">
            Save Draft
          </Button>
        </div>
      </div>

      {/* Progress stepper */}
      <div className="border-b px-6 py-3">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <button
                onClick={() => jumpToStep(index)}
                className={cn(
                  "flex min-w-0 shrink-0 items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                  currentStep === index
                    ? "bg-brand text-brand-foreground"
                    : completedSteps.includes(index)
                      ? "text-success hover:bg-accent"
                      : "text-muted-foreground hover:bg-accent"
                )}
              >
                {completedSteps.includes(index) ? (
                  <CheckCircle2 className="h-3.5 w-3.5" />
                ) : currentStep === index ? (
                  <Circle className="h-3.5 w-3.5" />
                ) : (
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-muted text-[10px]">
                    {index + 1}
                  </span>
                )}
                <span className="hidden sm:inline">{step.label}</span>
              </button>
              {index < steps.length - 1 && (
                <ChevronRight className="h-3 w-3 shrink-0 text-muted-foreground/50" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-y-auto p-6">
        {renderStepContent()}
      </div>

      {/* Bottom actions */}
      <div className="flex items-center justify-between border-t px-6 py-4">
        <Button
          variant="outline"
          onClick={goPrev}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <div className="text-xs text-muted-foreground">
          Progress: {((currentStep + 1) / steps.length) * 100}%
        </div>
        <Button onClick={goNext} disabled={currentStep === steps.length - 1}>
          Next Step
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </motion.main>
  );
};

function ContentPlaceholder({ step }: { step: (typeof steps)[0] }) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed py-16"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10">
        <Icon className="h-6 w-6 text-brand" />
      </div>
      <div className="space-y-1 text-center">
        <h3 className="font-medium">{step.label}</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          This module is part of the Course Builder workflow. The full builder
          experience includes {step.description}.
        </p>
      </div>
    </motion.div>
  );
}

export default Newcourse;