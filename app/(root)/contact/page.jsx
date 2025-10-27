"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Video,
  Calendar,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      value: "info@codexdevelopers.com",
      action: "mailto:info@codexdevelopers.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon to Fri from 8am to 6pm",
      value: "+234 9071853515",
      action: "tel:+2349071853515",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our office",
      value: "Lagos, Nigeria",
      action: "https://maps.google.com",
      color: "from-blue-500 to-pink-500",
    },
    {
      icon: Video,
      title: "Video Call",
      description: "Schedule a virtual meeting",
      value: "Google Meet, Zoom, Teams",
      action: "#schedule",
      color: "from-orange-500 to-red-500",
    },
  ];

  const budgetOptions = [
    "Less than $450",
    "$500 - $1,000",
    "$5,000 - $10,000",
    "$30,000 - $50,000",
    "$50,000+",
  ];

  const timelineOptions = [
    "ASAP",
    "1-2 weeks",
    "1 month",
    "2-3 months",
    "3+ months",
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for reaching out! We'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <Mail className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Check Your Email</h3>
              <p className="text-sm text-muted-foreground">
                We've sent a confirmation to your inbox
              </p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <Clock className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">
                We'll respond within 24 hours
              </p>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <MessageCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Next Steps</h3>
              <p className="text-sm text-muted-foreground">
                Prepare your project details for our call
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
            >
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Let's Build Something Amazing
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            <span className="block bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Get in Touch With Us
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Have a question or a project in mind? Reach out to us, we’d love to
            hear from you and explore how we can work together to bring your
            vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Link
                    key={index}
                    href={method.action}
                    className="group bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${method.color} w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {method.description}
                    </p>
                    <p className="text-sm font-medium text-foreground/80">
                      {method.value}
                    </p>
                  </Link>
                );
              })}
            </div>

            {/* Office Hours */}
            <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-blue-500" />
                <h3 className="text-lg font-semibold">Office Hours</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", time: "Closed" },
                ].map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm text-muted-foreground">
                      {schedule.day}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "#", color: "hover:bg-gray-500/20" },
                  { icon: Twitter, href: "#", color: "hover:bg-blue-500/20" },
                  { icon: Linkedin, href: "#", color: "hover:bg-blue-600/20" },
                  { icon: Instagram, href: "#", color: "hover:bg-pink-500/20" },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className={`p-3 rounded-xl bg-muted/50 border border-border/50 ${social.color} transition-all duration-300 hover:scale-110`}
                    >
                      <IconComponent className="h-5 w-5 text-foreground/70" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "24h", label: "Avg. Response" },
                { value: "5000+", label: "Projects" },
                { value: "99%", label: "Satisfaction" },
                { value: "24+", label: "Technologies" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-4"
                >
                  <div className="text-lg font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="h-6 w-6 text-blue-500" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Send Message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-foreground"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  placeholder="Your company name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="budget"
                    className="text-sm font-medium text-foreground"
                  >
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="timeline"
                    className="text-sm font-medium text-foreground"
                  >
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/10 border border-blue-500/20 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Immediately?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a free consultation call with our experts to discuss your
              project requirements and get a detailed proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <Link
                  href="tel:+2349071853515"
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Call</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
              >
                <Link href="/projects" className="flex items-center gap-2">
                  <span>View Our Work</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
