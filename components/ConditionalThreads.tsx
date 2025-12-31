"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Threads from "@/components/Threads";

// Renders the Threads background only when the resolved theme is dark.
export default function ConditionalThreads() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  if (!isDark) return null;

  return (
    <div className="absolute inset-0 bottom-0 z-[1] min-h-screen">
      <Threads
        color={[0.5686274509803921, 0.5686274509803921, 0.5686274509803921]}
        amplitude={1.2}
        distance={0.2}
        enableMouseInteraction={false}
      />
    </div>
  );
}
