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

const menuItems = [
  { name: "Pricing", href: "#", icon: null },
  { name: "Free", href: "#", icon: null },
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
      <header>
        <nav className="fixed z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between lg:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  {/* <Logo /> */}
                  <Image
                    src="/codex/logo2.png"
                    alt="Codex Developers"
                    width={45}
                    height={45}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Codex Developers
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Building Digital Excellence
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                <div className="flex space-x-8">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 relative group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                    </Link>
                  ))}
                </div>

                <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-border">
                  <ModeToggle />
                  <Button asChild variant="ghost" size="sm">
                    <Link href="#">
                      <span>Log in</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Link href="#">
                      <span>Sign up</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Mobile menu button */}

              <button
                onClick={() => setMenuState(!menuState)}
                className="lg:hidden relative z-[60] p-2 rounded-lg bg-background/80 backdrop-blur-sm border"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      menuState ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      menuState
                        ? "opacity-100 rotate-0"
                        : "opacity-0 -rotate-90"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Overlay - Fixed full screen */}
        <div
          className={`lg:hidden fixed inset-0 z-[55] bg-background transition-all duration-300 ease-in-out ${
            menuState ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Close button */}

          <button
            onClick={() => setMenuState(false)}
            className="absolute top-6 right-4 z-[60] p-2 rounded-lg bg-background/80 backdrop-blur-sm border"
          >
            <X className="h-6 w-6" />
          </button>
          <span className="absolute top-6 left-4">
            <ModeToggle />
          </span>
          {/* Scrollable content */}
          <div className="h-full w-full overflow-y-auto pt-20 pb-8">
            <div className="px-6 space-y-8">
              {/* Auth Section */}
              <div className="flex gap-3">
                <Button asChild variant="outline" className="flex-1 h-12">
                  <Link href="#" onClick={closeMenu}>
                    <span>Log in</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Link href="#" onClick={closeMenu}>
                    <span>Sign up</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* GET STARTED Section */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  GET STARTED
                </h3>
                <div className="space-y-3">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted border border-border/50 transition-all duration-200 group active:scale-95"
                      onClick={closeMenu}
                    >
                      <span className="font-medium text-base">{item.name}</span>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* PRODUCTS Section */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  PRODUCTS
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {products.map((product, index) => {
                    const IconComponent = product.icon;
                    return (
                      <Link
                        key={index}
                        href={product.href}
                        className="flex flex-col items-center p-4 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/50 transition-all duration-200 hover:scale-105 active:scale-95 group"
                        onClick={closeMenu}
                      >
                        {IconComponent && (
                          <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 mb-3 group-hover:from-blue-500/20 group-hover:to-purple-500/20">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                        )}
                        <span className="text-sm font-medium text-center leading-tight">
                          {product.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* RESOURCES Section */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  RESOURCES
                </h3>
                <div className="space-y-3">
                  {resources.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted border border-border/50 transition-all duration-200 group active:scale-95"
                      onClick={closeMenu}
                    >
                      <span className="font-medium text-base">{item.name}</span>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Theme Toggle */}
              <div className="pt-6 border-t border-border">
                <div className="flex justify-center text-sm">
                  Codex Developers
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
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
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed mb-12">
                Codex Developers creates stunning, high-performance websites
                tailored to your business needs. From AI-powered builders to
                custom solutions, we bring your vision to life.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-2 h-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25"
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl" />
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
