"use client";
import {
  Code,
  Palette,
  Smartphone,
  TrendingUp,
  Users,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Star,
  Award,
  MessageCircle,
  PenTool,
  Camera,
  Target,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies. From simple business sites to complex web platforms.",
    features: [
      "Responsive Web Design",
      "E-Commerce Solutions",
      "Web Applications",
      "API Integration",
      "Performance Optimization",
      "SEO-Friendly Structure",
    ],
    technologies: ["Next.js", "React", "Node.js", "PHP", "MongoDB"],
    gradient: "from-blue-500 to-cyan-500",
    price: "Starting at ₦150,000",
    delivery: "24-48 hrs",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android. User-friendly designs with excellent performance.",
    features: [
      "iOS & Android Apps",
      "Cross-Platform Development",
      "App Store Deployment",
      "Push Notifications",
      "Offline Functionality",
      "API Integration",
    ],
    technologies: ["React Native", "Flutter", "iOS Swift", "Android Kotlin"],
    gradient: "from-blue-500 to-pink-500",
    price: "Starting at ₦700,000",
    delivery: "4-8 weeks",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to grow your online presence, generate leads, and increase sales.",
    features: [
      "SEO Optimization",
      "PPC Advertising",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
      "Conversion Optimization",
    ],
    technologies: ["Google Ads", "Meta Ads", "Google Analytics", "Mailchimp"],
    gradient: "from-green-500 to-emerald-500",
    price: "Starting at ₦80,000/month",
    delivery: "Ongoing",
  },
  {
    icon: Users,
    title: "Corporate Branding",
    description:
      "Build a powerful brand identity that resonates with your audience and sets you apart from competitors.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Business Cards",
      "Letterheads",
      "Brand Strategy",
      "Voice & Messaging",
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Figma", "Brand Strategy"],
    gradient: "from-orange-500 to-red-500",
    price: "Starting at ₦120,000",
    delivery: "2-3 weeks",
  },
  {
    icon: MessageCircle,
    title: "Social Media Marketing",
    description:
      "Engage your audience and grow your brand across all major social media platforms with strategic content.",
    features: [
      "Content Strategy",
      "Community Management",
      "Social Media Ads",
      "Influencer Marketing",
      "Analytics & Insights",
      "Content Creation",
    ],
    technologies: [
      "Meta Business",
      "Twitter",
      "LinkedIn",
      "TikTok",
      "Instagram",
    ],
    gradient: "from-pink-500 to-rose-500",
    price: "Starting at ₦60,000/month",
    delivery: "Ongoing",
  },
  {
    icon: Palette,
    title: "Graphics & Design",
    description:
      "Stunning visual designs that capture attention and communicate your message effectively.",
    features: [
      "UI/UX Design",
      "Print Design",
      "Social Media Graphics",
      "Infographics",
      "Presentation Design",
      "Marketing Materials",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Photoshop", "Sketch"],
    gradient: "from-yellow-500 to-amber-500",
    price: "Starting at ₦50,000",
    delivery: "1-2 weeks",
  },
];

const serviceStats = [
  { number: "5000+", label: "Projects Completed" },
  { number: "1000+", label: "Happy Clients" },
  { number: "99%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support" },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description:
      "We understand your business goals, target audience, and project requirements.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "We create a detailed project plan with timelines, milestones, and deliverables.",
    icon: Target,
  },
  {
    step: "03",
    title: "Design & Development",
    description:
      "Our team brings your vision to life with creative designs and robust development.",
    icon: Code,
  },
  {
    step: "04",
    title: "Testing & Launch",
    description:
      "Rigorous testing ensures quality before we launch your project to the world.",
    icon: Zap,
  },
  {
    step: "05",
    title: "Support & Growth",
    description:
      "Ongoing support and optimization to help your business continue growing.",
    icon: BarChart3,
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Award-Winning Quality",
    description:
      "We deliver exceptional quality that exceeds expectations and drives results.",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description:
      "Your data and projects are safe with our secure development practices.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "We respect deadlines and deliver projects on time without compromising quality.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Work with experienced professionals who understand your industry and goals.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Comprehensive Digital Solutions
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            Our Services
            <span className="block bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              For Your Growth
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            We provide end-to-end digital solutions to help businesses thrive in
            the modern landscape. From web development to digital marketing,
            we've got you covered.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {serviceStats.map((stat, index) => (
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

        {/* Services Grid */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital services tailored to meet your business
              needs and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <ul className="space-y-2 mb-4">
                      {service.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm text-foreground/80"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-muted-foreground">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted/50 border border-border/50 rounded text-xs text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Price & Delivery */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <span className="font-semibold text-foreground">
                        {service.price}
                      </span>
                      <span className="text-muted-foreground">
                        Delivery: {service.delivery}
                      </span>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
                    >
                      <Link href="/contact" className="flex items-center gap-2">
                        <span>Get Started</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20 lg:mb-32">
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/10 border border-blue-500/20 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
                Why Choose Codex Developers?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We go beyond just delivering projects - we build partnerships
                and ensure your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="p-4 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure your project's success
              from concept to launch.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-blue-500 hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${
                        isEven ? "lg:text-right" : "lg:text-left"
                      } text-center lg:text-left`}
                    >
                      <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4 lg:justify-start">
                          <div className="p-2 rounded-lg bg-blue-500/10">
                            <IconComponent className="h-6 w-6 text-blue-500" />
                          </div>
                          <span className="text-2xl font-bold text-blue-500">
                            {step.step}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-background shadow-lg" />
                    </div>

                    {/* Spacer for alternating sides */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Let's discuss your project and create a custom solution that
                drives results for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Get Free Consultation</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio" className="flex items-center gap-2">
                    <span>View Our Work</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Additional Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border/50">
                {[
                  { text: "Free Initial Consultation" },
                  { text: "Transparent Pricing" },
                  { text: "30-Day Support Included" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 justify-center"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
