"use client";
import { useState, useEffect } from "react";
import {
  Code,
  Sparkles,
  Zap,
  Cpu,
  Database,
  Cloud,
  Terminal,
  Server,
  Layout,
  Smartphone,
  Globe,
} from "lucide-react";

export default function LoadingPage() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [dots, setDots] = useState("");

  const loadingSteps = [
    { text: "Initializing systems", icon: Cpu },
    { text: "Loading modules", icon: Terminal },
    { text: "Connecting to database", icon: Database },
    { text: "Starting services", icon: Server },
    { text: "Rendering interface", icon: Layout },
    { text: "Almost ready", icon: Zap },
  ];

  useEffect(() => {
    // Animate progress from 0 to 100%
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    // Cycle through loading steps
    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % loadingSteps.length);
    }, 800);

    // Animate dots
    const dotsTimer = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 300);

    return () => {
      clearInterval(progressTimer);
      clearInterval(stepTimer);
      clearInterval(dotsTimer);
    };
  }, []);

  const LoadingIcon = loadingSteps[currentStep]?.icon || Code;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating tech icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <Code className="h-6 w-6 text-blue-500" />
          </div>
        </div>
        <div
          className="absolute top-1/3 right-1/3 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <Database className="h-6 w-6 text-blue-500" />
          </div>
        </div>
        <div
          className="absolute bottom-1/4 right-1/4 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
            <Server className="h-6 w-6 text-green-500" />
          </div>
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
            <Globe className="h-6 w-6 text-orange-500" />
          </div>
        </div>
      </div>

      <div className="max-w-md w-full text-center">
        {/* Main Loading Card */}
        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-blue-500/10">
          {/* Animated Logo */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Code className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles
                  className="h-5 w-5 text-yellow-500 animate-spin"
                  style={{ animationDuration: "3s" }}
                />
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-2">
              Codex Developers
            </h1>
            <p className="text-muted-foreground text-sm">
              Building Digital Excellence
            </p>
          </div>

          {/* Progress Section */}
          <div className="mb-8">
            {/* Progress Bar */}
            <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden mb-4">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-blue-600 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                {/* Shimmer effect on progress bar */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>

            {/* Progress Text */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">
                Loading
              </span>
              <span className="text-sm font-bold text-blue-600">
                {progress}%
              </span>
            </div>
          </div>

          {/* Current Step */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 p-4 bg-muted/30 rounded-xl border border-border/50">
              <LoadingIcon className="h-5 w-5 text-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                {loadingSteps[currentStep]?.text}
                <span className="text-blue-500">{dots}</span>
              </span>
            </div>
          </div>

          {/* Loading Animation */}
          <div className="flex justify-center space-x-2 mb-8">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: "0.6s",
                }}
              />
            ))}
          </div>

          {/* System Status */}
          <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Systems Online</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>Secure Connection</span>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8">
          <p className="text-sm text-muted-foreground">
            Preparing your digital experience
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(-5px) rotate(240deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Alternative loading component for specific use cases
export function LoadingSpinner({ size = "default", text = "Loading..." }) {
  const sizes = {
    small: "h-4 w-4",
    default: "h-8 w-8",
    large: "h-12 w-12",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`${sizes[size]} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin`}
      />
      {text && <span className="text-sm text-muted-foreground">{text}</span>}
    </div>
  );
}

// Skeleton loading component for content
export function SkeletonLoader({ type = "card", count = 1 }) {
  const SkeletonCard = () => (
    <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 animate-pulse">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-muted/50 rounded-xl" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-muted/50 rounded w-3/4" />
          <div className="h-3 bg-muted/50 rounded w-1/2" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-muted/50 rounded w-full" />
        <div className="h-3 bg-muted/50 rounded w-5/6" />
        <div className="h-3 bg-muted/50 rounded w-4/6" />
      </div>
    </div>
  );

  const SkeletonText = () => (
    <div className="space-y-3 animate-pulse">
      <div className="h-4 bg-muted/50 rounded w-3/4" />
      <div className="h-4 bg-muted/50 rounded w-full" />
      <div className="h-4 bg-muted/50 rounded w-5/6" />
      <div className="h-4 bg-muted/50 rounded w-4/6" />
    </div>
  );

  if (type === "text") {
    return (
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonText key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

// Inline loading component
export function InlineLoading({ message = "Processing" }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <div className="w-3 h-3 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
      <span>
        {message}
        {dots}
      </span>
    </div>
  );
}
