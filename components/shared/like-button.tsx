"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface LikeButtonProps {
  initialLiked?: boolean;
  count?: number;
  onLikedChange?: (liked: boolean) => void;
  size?: "sm" | "md";
  label?: string;
  className?: string;
}

export function LikeButton({
  initialLiked = false,
  count = 0,
  onLikedChange,
  size = "md",
  label,
  className,
}: LikeButtonProps) {
  const [liked, setLiked] = React.useState(initialLiked);
  const [likeCount, setLikeCount] = React.useState(count);
  const [loading, setLoading] = React.useState(false);

  const handleToggle = () => {
    if (loading) return;
    setLoading(true);

    const next = !liked;
    setLiked(next);
    setLikeCount((c) => Math.max(0, c + (next ? 1 : -1)));
    onLikedChange?.(next);

    // Simulate async network request (replace with real API call)
    setTimeout(() => setLoading(false), 450);
  };

  const iconSize = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={liked}
      aria-label={label || (liked ? "Unlike" : "Like")}
      disabled={loading}
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-full text-xs font-medium transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 outline-none",
        size === "sm" ? "px-2 py-1" : "px-2.5 py-1.5",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        liked
          ? "text-brand hover:bg-brand/10"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
        className
      )}
    >
      <motion.span
        whileTap={{ scale: 0.8 }}
        className="relative inline-flex items-center justify-center"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={liked ? "liked" : "unliked"}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex items-center"
          >
            <Heart
              className={cn(
                iconSize,
                "transition-colors duration-200",
                liked ? "fill-brand text-brand" : "text-muted-foreground"
              )}
            />
          </motion.span>
        </AnimatePresence>

        {loading && (
          <motion.span
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className={cn(iconSize, "animate-spin rounded-full border-2 border-transparent border-t-current text-brand")} />
          </motion.span>
        )}
      </motion.span>

      <span className="tabular-nums">
        {likeCount > 0 ? likeCount.toLocaleString() : "Like"}
      </span>
    </button>
  );
}