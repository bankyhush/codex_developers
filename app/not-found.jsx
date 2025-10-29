"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  ArrowLeft,
  Mail,
  Code,
  Wrench,
  Rocket,
  Sparkles,
  Clock,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function ErrorPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar to 75%
    const timer = setTimeout(() => {
      setProgress(75);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Code,
      title: "Cutting-Edge Tech",
      description: "Built with latest technologies",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance",
    },
    {
      icon: Users,
      title: "User Focused",
      description: "Designed with you in mind",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

        {/* Animated floating elements */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-8 h-8 bg-blue-500/20 rounded-full" />
        </div>
        <div
          className="absolute top-1/3 right-1/3 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-6 h-6 bg-blue-500/20 rounded-full" />
        </div>
        <div
          className="absolute bottom-1/4 right-1/4 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-10 h-10 bg-cyan-500/20 rounded-full" />
        </div>
      </div>

      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <div className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent opacity-10">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              404
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-blue-500/10">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Under Development
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
              Page Not Found
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist or is currently
              under development. Our team is working hard to bring you amazing
              tech learning and software solutions.
            </p>
          </div>

          {/* Development Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-blue-500" />
                <span className="font-semibold text-foreground">
                  Development in Progress
                </span>
              </div>
              <span className="text-sm font-bold text-blue-600">
                {progress}% Complete
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Started</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Coming Soon!
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border/50"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <IconComponent className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {feature.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>Contact Support</span>
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              While you wait, check out:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Courses", href: "/tech" },
                { name: "About", href: "/about" },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Rocket className="h-4 w-4" />
            <span>Building amazing things at Codex Developers</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
