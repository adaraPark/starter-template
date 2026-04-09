"use client";

import Link from "next/link";
import { Rocket, Layers, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@starter/ui/primitives";

const iconMap = {
  rocket: Rocket,
  layers: Layers,
  settings: Settings,
} as const;

interface Topic {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  icon: keyof typeof iconMap;
}

interface LearnHubProps {
  topics: Topic[];
}

export function LearnHub({ topics }: LearnHubProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic, index) => {
        const Icon = iconMap[topic.icon];
        return (
          <motion.div
            key={topic.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link href={`/learn/${topic.slug}`} className="group block">
              <Card className="h-full transition-all duration-200 group-hover:shadow-lg group-hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-xs text-muted-foreground">{topic.readTime}</span>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
