"use client";

import React, { useState, useRef } from "react";
import {
  useMotionValue,
} from "motion/react";
import Image from "next/image";

export const AnimatedTooltip = ({
  items,
  onClick,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
  onClick?: () => void;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

 

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.currentTarget.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="group relative -mr-4 overflow-hidden"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={onClick}
        >
          <Image
            onMouseMove={handleMouseMove}
            height={70}
            width={70}
            src={item.image}
            alt={item.name}
            className="relative m-0! h-10 w-10 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
    </>
  );
};
