"use client";
import { useState, useCallback } from "react";
import type { ChangeEvent } from "react";

export interface LearningObjective {
  id: string;
  text: string;
}

export interface TargetAudience {
  id: string;
  text: string;
}

export function useAdvanceInformations() {
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string>("");
  const [trailerUrl, setTrailerUrl] = useState("");
  const [description, setDescription] = useState("");

  const [learningObjectives, setLearningObjectives] = useState<
    LearningObjective[]
  >([
    { id: "1", text: "" },
    { id: "2", text: "" },
    { id: "3", text: "" },
    { id: "4", text: "" },
  ]);

  const [targetAudience, setTargetAudience] = useState<TargetAudience[]>([
    { id: "1", text: "" },
    { id: "2", text: "" },
    { id: "3", text: "" },
    { id: "4", text: "" },
  ]);

  const handleThumbnailUpload = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setThumbnail(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setThumbnailPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [],
  );

  const addLearningObjective = useCallback(() => {
    setLearningObjectives((prev) => [
      ...prev,
      { id: Date.now().toString(), text: "" },
    ]);
  }, []);

  const removeLearningObjective = useCallback((id: string) => {
    setLearningObjectives((prev) => prev.filter((obj) => obj.id !== id));
  }, []);

  const updateLearningObjective = useCallback((id: string, text: string) => {
    setLearningObjectives((prev) =>
      prev.map((obj) => (obj.id === id ? { ...obj, text } : obj)),
    );
  }, []);

  const addTargetAudience = useCallback(() => {
    setTargetAudience((prev) => [
      ...prev,
      { id: Date.now().toString(), text: "" },
    ]);
  }, []);

  const removeTargetAudience = useCallback((id: string) => {
    setTargetAudience((prev) => prev.filter((aud) => aud.id !== id));
  }, []);

  const updateTargetAudience = useCallback((id: string, text: string) => {
    setTargetAudience((prev) =>
      prev.map((aud) => (aud.id === id ? { ...aud, text } : aud)),
    );
  }, []);

  const handleSave = useCallback(() => {
    const data = {
      thumbnail,
      trailerUrl,
      description,
      learningObjectives: learningObjectives.filter((obj) => obj.text.trim()),
      targetAudience: targetAudience.filter((aud) => aud.text.trim()),
    };
  }, [thumbnail, trailerUrl, description, learningObjectives, targetAudience]);

  const handleSaveAndPreview = useCallback(() => {
    handleSave();
  }, [handleSave]);

  return {
    thumbnail,
    thumbnailPreview,
    trailerUrl,
    setTrailerUrl,
    description,
    setDescription,
    learningObjectives,
    addLearningObjective,
    removeLearningObjective,
    updateLearningObjective,
    targetAudience,
    addTargetAudience,
    removeTargetAudience,
    updateTargetAudience,
    handleThumbnailUpload,
    handleSave,
    handleSaveAndPreview,
  };
}
