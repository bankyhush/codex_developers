"use client";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Layout,
  Bot,
  Palette,
  ShoppingCart,
  QrCode,
  Mail,
  Zap,
  BookOpen,
  Building,
} from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "./ui/mode";
import StatsSection from "./stats";
import HeaderSection from "./header";

const menuItems = [
  { name: "Services", href: "/services", icon: null },
  { name: "Courses", href: "/tech", icon: null },
];

const products = [
  { name: "AI Web Builder", href: "#", icon: Layout },
  { name: "AI Blog Builder", href: "#", icon: BookOpen },
  { name: "Online Shop", href: "#", icon: ShoppingCart },
  { name: "Your QR Code", href: "#", icon: QrCode },
  { name: "Domain Names", href: "#", icon: Sparkles },
  { name: "Logo Generator", href: "#", icon: Palette },
  { name: "Business Names", href: "#", icon: Building },
  { name: "Scale & Earn", href: "#", icon: Zap },
  { name: "AI ChatBot", href: "#", icon: Bot },
  { name: "Company Email", href: "#", icon: Mail },
];

const resources = [
  { name: "Use Templates", href: "#", icon: null },
  { name: "For Enterprise", href: "#", icon: null },
  { name: "Learn", href: "#", icon: null },
  { name: "Blog", href: "#", icon: null },
];

export default function HeroSection() {
  const [menuState, setMenuState] = useState(false);

  // Close menu when clicking on links
  const closeMenu = () => setMenuState(false);

  return (
    <>
      <HeaderSection />

      <main className="relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-blue-700/5 rounded-full blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 dark:[background:repeating-linear-gradient(45deg,#000_0px,#111_2px,#000_4px,#222_6px)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                <Sparkles className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Trusted by 1,000+ businesses worldwide
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-8">
                Transform Your
                <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed mb-12">
                Codex Developers creates stunning, high-performance web apps
                tailored to your business needs. From AI-powered builders to
                custom solutions, we bring your vision to life.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-2 h-auto bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg shadow-blue-500/25"
                >
                  <Link href="#">
                    <span>Start Your Project</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-2 h-auto"
                >
                  <Link href="#" className="flex items-center gap-2">
                    <span>View Portfolio</span>
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="mx-auto">
                <StatsSection />
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-20 lg:mt-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-2xl bg-gradient-to-br from-background to-muted/50 border border-border/50 p-2 shadow-2xl shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-700/5 rounded-2xl" />
                <div className="relative rounded-xl overflow-hidden border border-border/50">
                  <Image
                    className="w-full h-auto"
                    src="/images/dark-card.webp"
                    alt="Codex Developers Portfolio Showcase"
                    width={2880}
                    height={2074}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 border-t border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-lg text-muted-foreground font-medium">
                Trusted by innovative teams worldwide
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              {[
                "https://html.tailus.io/blocks/customers/nvidia.svg",
                "https://html.tailus.io/blocks/customers/column.svg",
                "https://html.tailus.io/blocks/customers/github.svg",
                "https://html.tailus.io/blocks/customers/nike.svg",
                "https://html.tailus.io/blocks/customers/laravel.svg",
                "https://html.tailus.io/blocks/customers/lilly.svg",
              ].map((logo, index) => (
                <div
                  key={index}
                  className="p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={logo}
                    alt="Partner logo"
                    className="h-8 w-auto dark:invert dark:brightness-0 dark:hue-rotate-180"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
