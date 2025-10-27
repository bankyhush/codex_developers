"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  Github,
  Chrome,
  User,
  Shield,
  Zap,
  Code,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    // Handle login logic here
  };

  const socialLogins = [
    {
      name: "Google",
      icon: Chrome,
      color: "hover:bg-red-500/10 border-red-500/20 hover:border-red-500/40",
      iconColor: "text-red-500",
    },
    {
      name: "GitHub",
      icon: Github,
      color: "hover:bg-gray-500/10 border-gray-500/20 hover:border-gray-500/40",
      iconColor: "text-gray-500",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure & Encrypted",
      description: "Your data is protected with enterprise-grade security",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Quick access to all your projects and courses",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Built for developers by developers",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

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

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 shadow-2xl shadow-blue-500/10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Link href="/">
                  <Image
                    src="/codex/logo3.png"
                    alt="Codex Developers"
                    width={45}
                    height={45}
                    priority
                  />
                </Link>
              </div>

              <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-3">
                Sign In
              </h1>

              <p className="text-muted-foreground">
                Access your Codex Developers account
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {socialLogins.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className={`w-full border-2 ${social.color} transition-all duration-300 hover:scale-105`}
                  >
                    <IconComponent className={`h-5 w-5 ${social.iconColor}`} />
                    <span className="ml-2 font-medium">{social.name}</span>
                  </Button>
                );
              })}
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background/50 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-foreground"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 bg-background border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-background border-border/50 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-sm text-foreground">Remember me</span>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Sign In</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </Button>

              {/* Sign Up Link */}
              <div className="text-center">
                <p className="text-muted-foreground">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Sign up now
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-green-500" />
              <span>Your data is securely encrypted and protected</span>
            </div>
          </div>
        </div>

        {/* Right Side - Features & Info */}
        <div className="hidden lg:block">
          <div className="max-w-md mx-auto">
            {/* Brand Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-600">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Codex Developers
                  </h2>
                  <p className="text-muted-foreground">
                    Building Digital Excellence
                  </p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Access your personalized dashboard to manage projects, track
                progress, and continue your learning journey with our
                comprehensive tech courses.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6 mb-12">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Why Sign In?
              </h3>

              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-blue-500/10 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-background/30 backdrop-blur-sm border border-border/50 rounded-2xl">
              {[
                { number: "5K+", label: "Students" },
                { number: "500+", label: "Projects" },
                { number: "99%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile App CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-blue-500/10 border border-blue-500/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Smartphone className="h-6 w-6 text-blue-500" />
                <h4 className="font-semibold text-foreground">
                  Mobile App Available
                </h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Access your courses and projects on the go with our mobile
                application.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Download App
              </Button>
            </div>
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
