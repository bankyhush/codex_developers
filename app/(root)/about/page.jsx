"use client";
import {
  Code,
  Palette,
  Rocket,
  Users,
  Target,
  Heart,
  Shield,
  Zap,
  Star,
  Award,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like Next.js, React, and TypeScript.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive user interfaces that provide exceptional user experiences and drive engagement.",
      features: ["User Research", "Prototyping", "Design Systems"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description:
        "Modernize your business with cutting-edge digital solutions that streamline operations and boost growth.",
      features: ["Process Automation", "Cloud Solutions", "AI Integration"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "Consulting",
      description:
        "Strategic technology consulting to help you make informed decisions and achieve your business goals.",
      features: ["Tech Strategy", "Architecture Review", "Best Practices"],
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Client First",
      description:
        "Your success is our success. We prioritize your goals and work as an extension of your team.",
      color: "text-red-500",
    },
    {
      icon: Shield,
      title: "Quality & Excellence",
      description:
        "We never compromise on quality. Every project meets our high standards of excellence.",
      color: "text-blue-500",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive edge.",
      color: "text-yellow-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in transparent communication and close collaboration throughout the entire process.",
      color: "text-green-500",
    },
  ];

  const teamStats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "Technologies" },
    { number: "5+", label: "Years Experience" },
  ];

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Javascript",
    "MongoDB",
    "Nuxt.js",
    "PHP",
    "Express.js",
    "TailwindCSS",
    "Figma",
    "Shopify",
    "Vite",
    "Wordpress",
    "Prisma",
    "SQL",
    "Photoshop",
    "Illustrator",
    "Microsoft",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Building Digital Excellence Since 2019
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            Crafting The Future
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Of Digital Innovation
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            We are Codex Developers - a passionate team of innovators,
            designers, and developers dedicated to transforming ideas into
            exceptional digital experiences that drive real business results.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* What We Do Section */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in creating comprehensive digital solutions that
              help businesses thrive in the modern digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-foreground/80"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="mb-20 lg:mb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Users className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Founded in 2019, Codex Developers began as a small team of
                  passionate developers with a shared vision: to create digital
                  solutions that make a real impact.
                </p>
                <p className="leading-relaxed">
                  Today, we've grown into a full-service digital agency with
                  expertise spanning web development, UI/UX design, and digital
                  strategy. Our team brings together diverse talents and
                  perspectives to deliver exceptional results for our clients.
                </p>
                <p className="leading-relaxed">
                  What sets us apart is our commitment to understanding your
                  unique challenges and goals. We don't just write code - we
                  build partnerships and create solutions that drive your
                  business forward.
                </p>
              </div>

              {/* Technology Stack */}
              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-4">
                  Our Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted/50 border border-border/50 rounded-full text-sm text-foreground/80 hover:bg-blue-500/10 hover:border-blue-500/20 hover:text-blue-600 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-border/50 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-20 w-20 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Global Reach
                  </h3>
                  <p className="text-muted-foreground">
                    Serving clients worldwide with remote excellence
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-lg">
                <Award className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-lg">
                <Star className="h-8 w-8 text-purple-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Values Section */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from initial concept to
              final delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group text-center bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
                >
                  <div
                    className={`p-4 rounded-full bg-muted/50 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                  <Target className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Our Purpose
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-6">
                  Our Mission
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    To empower businesses with innovative digital solutions that
                    drive growth, enhance user experiences, and create lasting
                    value in an ever-evolving digital world.
                  </p>
                  <p className="leading-relaxed">
                    We believe that technology should be an enabler, not a
                    barrier. Our mission is to demystify digital transformation
                    and make cutting-edge technology accessible to businesses of
                    all sizes.
                  </p>
                  <p className="leading-relaxed">
                    Through collaboration, innovation, and excellence, we strive
                    to be the trusted partner that helps our clients navigate
                    the digital landscape and achieve their most ambitious
                    goals.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      <span>Start Your Project</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/projects" className="flex items-center gap-2">
                      <span>View Our Work</span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code, label: "Clean Code", value: "100%" },
                  { icon: Users, label: "Client Satisfaction", value: "99%" },
                  { icon: Rocket, label: "On-Time Delivery", value: "98%" },
                  { icon: Shield, label: "Quality Assurance", value: "100%" },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center"
                    >
                      <IconComponent className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {item.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your vision to life with
              cutting-edge technology and creative expertise.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
