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

import { ModeToggle } from "./ui/mode";
import Image from "next/image";

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
  { name: "Use Templates", href: "/portfolio", icon: null },
  { name: "For Enterprise", href: "/features", icon: null },
];

export default function HeaderSection() {
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
                  <Image
                    src="/codex/logo3.png"
                    alt="Codex Developers"
                    width={45}
                    height={45}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
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
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 group-hover:w-full transition-all duration-300" />
                    </Link>
                  ))}
                </div>

                <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-border">
                  <ModeToggle />
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/contact">
                      <span>Contact</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-800"
                  >
                    <Link href="/login">
                      <span>Get Started</span>
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
                  <Link href="/contact" onClick={closeMenu}>
                    <span>Contact</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-900"
                >
                  <Link href="/login" onClick={closeMenu}>
                    <span>Get Started</span>
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
                          <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600/10 to-blue-500/10 mb-3 group-hover:from-blue-500/20 group-hover:to-blue-800/20">
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
    </>
  );
}
