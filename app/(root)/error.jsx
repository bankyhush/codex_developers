"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  Mail,
  Sparkles,
  Wrench,
  Clock,
  Users,
  Zap,
  Rocket,
} from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.error("App Error:", error);

    const timer = setTimeout(() => {
      setProgress(75);
    }, 500);

    return () => clearTimeout(timer);
  }, [error]);

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance",
    },
    { icon: Users, title: "User Focused", description: "Built for humans" },
    {
      icon: Wrench,
      title: "Constantly Improving",
      description: "Always better",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Floating background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl w-full text-center">
        {/* Error Title */}
        <div className="relative mb-8">
          <div className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent opacity-10">
            Error
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Oops!
            </div>
          </div>
        </div>

        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-blue-500/10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Something went wrong
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
              Unexpected Error
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
              {error?.message || "An unknown issue occurred. Please try again."}
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-blue-500" />
                <span className="font-semibold text-foreground">
                  Fix in Progress
                </span>
              </div>
              <span className="text-sm font-bold text-blue-600">
                {progress}% Complete
              </span>
            </div>

            <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                <span>Back Home</span>
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" onClick={() => reset()}>
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                <span>Try Again</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
