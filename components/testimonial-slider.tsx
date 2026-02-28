"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type Testimonial = {
  quote: string;
  name: string;
  company: string;
  rating: number;
};

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  const current = useMemo(() => items[index], [items, index]);

  return (
    <div className="glass rounded-3xl p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.company}
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="flex gap-1 text-accent">
            {Array.from({ length: current.rating }).map((_, idx) => (
              <Star key={idx} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <blockquote className="text-lg leading-8 text-foreground/90">
            “{current.quote}”
          </blockquote>
          <div>
            <p className="font-semibold">{current.name}</p>
            <p className="text-sm text-muted-foreground">{current.company}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-6 flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIndex((idx) => (idx === 0 ? items.length - 1 : idx - 1))}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIndex((idx) => (idx === items.length - 1 ? 0 : idx + 1))}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
