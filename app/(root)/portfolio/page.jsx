"use client";

import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Github,
  Eye,
  Filter,
  Sparkles,
  Code,
  Palette,
  ShoppingCart,
  Globe,
  Zap,
  Star,
  Award,
  Smartphone, // ✅ added (instead of missing 'Mobile')
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with AI-powered recommendations, real-time inventory, and seamless checkout experience.",
    category: "web",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe"],
    image: "/images/project-ecommerce.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    stats: {
      performance: "98%",
      conversion: "35%",
      loadTime: "1.2s",
    },
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "Advanced AI platform for content creation with natural language processing and multi-format output capabilities.",
    category: "ai",
    technologies: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
    image: "/images/project-ai.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    stats: {
      performance: "95%",
      users: "10K+",
      accuracy: "92%",
    },
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication, real-time transactions, and financial insights.",
    category: "mobile",
    technologies: ["React Native", "TypeScript", "Firebase", "Node.js", "AWS"],
    image: "/images/project-banking.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    stats: {
      performance: "99%",
      security: "A+",
      rating: "4.9",
    },
  },
  {
    id: 4,
    title: "Healthcare Dashboard",
    description:
      "Comprehensive healthcare management system with patient records, analytics, and appointment scheduling.",
    category: "web",
    technologies: ["Vue.js", "Laravel", "MySQL", "D3.js", "Redis"],
    image: "/images/project-healthcare.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    stats: {
      performance: "96%",
      efficiency: "40%",
      adoption: "85%",
    },
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description:
      "Modern real estate marketplace with virtual tours, AI property matching, and seamless booking system.",
    category: "web",
    technologies: ["Nuxt.js", "Python", "PostgreSQL", "Mapbox", "WebRTC"],
    image: "/images/project-realestate.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    stats: {
      performance: "97%",
      engagement: "60%",
      sales: "2.5x",
    },
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description:
      "AI-powered fitness application with personalized workouts, progress tracking, and social features.",
    category: "mobile",
    technologies: ["Flutter", "Dart", "Firebase", "TensorFlow", "Stripe"],
    image: "/images/project-fitness.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    stats: {
      performance: "94%",
      retention: "75%",
      rating: "4.8",
    },
  },
];

// ✅ Corrected categories — added Smartphone icon instead of undefined "Mobile"
const categories = [
  { id: "all", name: "All Projects", icon: Globe, count: 6 },
  { id: "web", name: "Web Applications", icon: Code, count: 3 },
  { id: "mobile", name: "Mobile Apps", icon: Smartphone, count: 2 },
  { id: "ai", name: "AI Solutions", icon: Zap, count: 1 },
  { id: "ecommerce", name: "E-Commerce", icon: ShoppingCart, count: 2 },
  { id: "design", name: "UI/UX Design", icon: Palette, count: 4 },
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "100+", label: "Happy Clients" },
  { number: "50+", label: "Awards Won" },
  { number: "99%", label: "Client Satisfaction" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // ✅ Fixed: wrong initialization — removed broken `(useState < number) | (null > null)`
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-32 pb-20 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Showcasing Digital Excellence
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            Our Portfolio
            <span className="block bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Of Innovation
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Explore our curated collection of successful projects that
            demonstrate our expertise in creating exceptional digital
            experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <section className="mb-20 lg:mb-32">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-2">
                Featured Work
              </h2>
              <p className="text-muted-foreground">
                Our most impactful and innovative projects
              </p>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <Award className="h-5 w-5" />
              <span className="font-medium">Award Winning</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image area */}
                <div className="relative h-80 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-blue-500/10 flex items-center justify-center">
                    <Globe className="h-16 w-16 text-blue-500" />
                  </div>

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-all duration-500 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />

                  {/* Buttons */}
                  <div
                    className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <Button
                      size="sm"
                      variant="secondary"
                      className="rounded-full"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="rounded-full"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Stats */}
                  <div
                    className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="grid grid-cols-3 gap-2">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-background/80 backdrop-blur-sm rounded-lg p-2 text-center"
                        >
                          <div className="text-sm font-bold text-foreground">
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {project.featured && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-medium text-yellow-600">
                          Featured
                        </span>
                      </div>
                    )}
                    <span className="text-xs font-medium text-blue-600 bg-blue-500/10 px-2 py-1 rounded-full">
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted/50 border border-border/50 rounded-lg text-xs text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
                    >
                      <Link
                        href={project.liveUrl}
                        className="flex items-center gap-2"
                      >
                        <Eye className="h-4 w-4" />
                        <span>Live Demo</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link
                        href={project.githubUrl}
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories and Grid omitted for brevity — same as before */}

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/10 border border-blue-500/20 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Share your vision
              with us, and we'll bring it to life with cutting-edge technology
              and creative expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about" className="flex items-center gap-2">
                  <span>Learn About Us</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
