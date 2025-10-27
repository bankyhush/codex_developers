"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Search,
  MessageCircle,
  Smartphone,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Palette,
  Layout,
  Database,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import IntegrationsSection from "./integrations-7";

const features = [
  {
    icon: Zap,
    title: "Web Development",
    highlight: "Modern & Scalable",
    description:
      "Custom websites and web applications built with cutting-edge technologies. We create fast, responsive, and scalable solutions that drive your business forward.",
    action: "View Projects",
    actionIcon: Search,
    image: "/images/web-development.jpg",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. User-friendly designs with excellent performance and seamless user experiences.",
    action: "See Apps",
    actionIcon: MessageCircle,
    image: "/images/mobile-apps.jpg",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to grow your online presence, generate leads, and increase sales across all digital channels.",
    action: "Boost Growth",
    actionIcon: MessageCircle,
    tagline: "@digitalmarketing",
    image: "/images/digital-marketing.jpg",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Users,
    title: "Corporate Branding",
    description:
      "Build a powerful brand identity that resonates with your audience. From logo design to complete brand guidelines and strategy.",
    action: "Build Brand",
    actionIcon: Search,
    image: "/images/corporate-branding.jpg",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: MessageCircle,
    title: "Social Media Marketing",
    description:
      "Strategic social media management and advertising to engage your audience, build community, and drive meaningful interactions.",
    action: "Engage Audience",
    actionIcon: MessageCircle,
    tagline: "@socialmedia",
    image: "/images/social-media.jpg",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Palette,
    title: "Graphics & Design",
    description:
      "Stunning visual designs that capture attention and communicate your message effectively. UI/UX design, marketing materials, and brand assets.",
    action: "View Designs",
    actionIcon: MessageCircle,
    tagline: "Creative Solutions",
    image: "/images/graphics-design.jpg",
    gradient: "from-yellow-500 to-amber-600",
  },
];

const technologies = [
  { name: "HTML", icon: "🔗", category: "Frontend" },
  { name: "CSS", icon: "🎨", category: "Frontend" },
  { name: "JavaScript", icon: "⚡", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Framework" },
  { name: "Vite", icon: "⚡", category: "Build Tool" },
  { name: "Bootstrap", icon: "🅱️", category: "CSS Framework" },
  { name: "MySQL", icon: "🐬", category: "Database" },
  { name: "React JS", icon: "⚛️", category: "Library" },
  { name: "Nuxt.js", icon: "🟢", category: "Framework" },
  { name: "WordPress", icon: "🔷", category: "CMS" },
  { name: "PHP", icon: "🐘", category: "Backend" },
  { name: "Prisma", icon: "🛡️", category: "ORM" },
  { name: "MongoDB", icon: "🍃", category: "Database" },
  { name: "Drizzle", icon: "🌧️", category: "ORM" },
  { name: "TailwindCSS", icon: "🎯", category: "CSS Framework" },
  { name: "Shopify", icon: "🛍️", category: "E-commerce" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "TypeScript", icon: "🔷", category: "Language" },
  { name: "GraphQL", icon: "📊", category: "API" },
  { name: "Firebase", icon: "🔥", category: "Backend" },
  { name: "AWS", icon: "☁️", category: "Cloud" },
  { name: "Docker", icon: "🐳", category: "DevOps" },
];

export default function ServicesShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Full-Stack Development Excellence
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20 overflow-hidden">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const ActionIcon = feature.actionIcon;

            return (
              <div
                key={index}
                className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setActiveFeature(index)}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {feature.title}
                    {feature.highlight && (
                      <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        {feature.highlight}
                      </span>
                    )}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Tagline */}
                  {feature.tagline && (
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
                      {feature.tagline}
                    </p>
                  )}

                  {/* Action Button */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-between group/btn hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all duration-300"
                  >
                    <Link href="#">
                      <span>{feature.action}</span>
                      <ActionIcon className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Stack Section */}
        <div className="bg-gradient-to-br from-background to-muted/50 border border-border/50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              Our Technology Stack
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We are highly proficient in modern technologies and frameworks
              that power today's most successful digital products.
            </p>

            <div className="mt-5 flex justify-center items-center">
              <IntegrationsSection />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative bg-background/80 backdrop-blur-sm border border-border/30 rounded-xl p-4 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="text-sm font-medium text-foreground">
                  {tech.name}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {tech.category}
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-800/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg shadow-blue-500/25"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <span>Start Your Project Today</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <p className="text-muted-foreground text-sm mt-4">
              Join 1,000+ satisfied clients who trusted Codex Developers
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { value: "5000+", label: "Projects Delivered" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "24+", label: "Technologies" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
