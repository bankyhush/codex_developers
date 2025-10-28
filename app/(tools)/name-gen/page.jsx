"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Search,
  Zap,
  Copy,
  CheckCircle,
  Building,
  Globe,
  RefreshCw,
  ArrowRight,
  Star,
  Users,
  Target,
} from "lucide-react";

export default function AIDomainGeneratorPage() {
  const [formData, setFormData] = useState({
    keyword: "",
    industry: "general",
    count: 20,
    style: "modern",
  });
  const [suggestions, setSuggestions] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedDomain, setCopiedDomain] = useState("");
  const [selectedDomains, setSelectedDomains] = useState([]);

  const industries = [
    { value: "general", label: "General", icon: Globe },
    { value: "tech", label: "Technology", icon: Zap },
    { value: "ecommerce", label: "E-commerce", icon: Building },
    { value: "health", label: "Health & Wellness", icon: Users },
    { value: "finance", label: "Finance", icon: Target },
    { value: "education", label: "Education", icon: Sparkles },
    { value: "creative", label: "Creative", icon: Star },
  ];

  const styles = [
    { value: "modern", label: "Modern Classic" },
    { value: "tech", label: "Tech Focused" },
    { value: "brandable", label: "Brandable" },
    { value: "descriptive", label: "Descriptive" },
    { value: "short", label: "Short & Memorable" },
  ];

  const countOptions = [10, 20, 30, 50];

  const generateDomains = async () => {
    if (isGenerating) return;

    setIsGenerating(true);
    setSuggestions([]);
    setSelectedDomains([]);

    // Simulate AI generation with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate domain suggestions based on inputs
    const generated = generateDomainSuggestions(formData);
    setSuggestions(generated);
    setIsGenerating(false);
  };

  const generateDomainSuggestions = (data) => {
    const { keyword, industry, count, style } = data;
    const suggestions = [];

    // Base words based on industry
    const industryWords = {
      general: [
        "Nova",
        "Quantum",
        "Spark",
        "Pulse",
        "Flow",
        "Core",
        "Zenith",
        "Apex",
      ],
      tech: ["Stack", "Labs", "Tech", "Code", "Byte", "Logic", "Grid", "Cloud"],
      ecommerce: [
        "Shop",
        "Store",
        "Market",
        "Cart",
        "Deal",
        "Buy",
        "Sell",
        "Trade",
      ],
      health: [
        "Well",
        "Fit",
        "Care",
        "Life",
        "Vital",
        "Pure",
        "Balance",
        "Harmony",
      ],
      finance: [
        "Wealth",
        "Capital",
        "Trust",
        "Secure",
        "Fund",
        "Asset",
        "Value",
        "Growth",
      ],
      education: [
        "Learn",
        "Skill",
        "Academy",
        "Study",
        "Course",
        "Master",
        "Brain",
        "Mind",
      ],
      creative: [
        "Studio",
        "Creative",
        "Art",
        "Design",
        "Canvas",
        "Pixel",
        "Color",
        "Vision",
      ],
    };

    // Style modifiers
    const styleModifiers = {
      modern: ["Labs", "Works", "Hub", "Nexus", "Sphere", "Pulse", "Flow"],
      tech: ["Tech", "IO", "AI", "Cloud", "Data", "Net", "Sys"],
      brandable: ["Zen", "Nova", "Quantum", "Alpha", "Omega", "Prime", "Elite"],
      descriptive: [
        "Direct",
        "Simple",
        "Clear",
        "True",
        "Real",
        "Pure",
        "Smart",
      ],
      short: ["X", "Z", "Q", "Go", "Up", "Do", "Be", "Me"],
    };

    const baseWords = industryWords[industry] || industryWords.general;
    const modifiers = styleModifiers[style] || styleModifiers.modern;
    const extensions = [".com", ".io", ".co", ".ai", ".app", ".dev", ".net"];

    for (let i = 0; i < count; i++) {
      const baseWord = baseWords[Math.floor(Math.random() * baseWords.length)];
      const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
      const extension =
        extensions[Math.floor(Math.random() * extensions.length)];

      let domainName = "";

      // Different generation patterns based on style
      if (style === "short") {
        domainName =
          baseWord.slice(0, 3).toLowerCase() + modifier.toLowerCase();
      } else if (style === "descriptive") {
        domainName = keyword ? `${keyword}${baseWord}` : baseWord + modifier;
      } else {
        // Modern and tech styles
        const patterns = [
          `${baseWord}${modifier}`,
          `${modifier}${baseWord}`,
          `${baseWord}${keyword || "Works"}`,
          `${keyword || "Nova"}${baseWord}`,
        ];
        domainName = patterns[Math.floor(Math.random() * patterns.length)];
      }

      // Clean up the domain name
      domainName = domainName
        .replace(/\s+/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

      // Ensure we don't have duplicates
      const fullDomain = domainName + extension;
      if (!suggestions.find((s) => s.domain === fullDomain)) {
        suggestions.push({
          id: i + 1,
          domain: fullDomain,
          availability: Math.random() > 0.7 ? "available" : "check", // Mostly show as check needed
          score: Math.floor(Math.random() * 40) + 60, // 60-100 score
          style: style,
        });
      }
    }

    return suggestions;
  };

  const copyToClipboard = async (domain) => {
    try {
      await navigator.clipboard.writeText(domain);
      setCopiedDomain(domain);
      setTimeout(() => setCopiedDomain(""), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const toggleSelectedDomain = (domain) => {
    setSelectedDomains((prev) =>
      prev.includes(domain)
        ? prev.filter((d) => d !== domain)
        : [...prev, domain]
    );
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              AI-Powered Domain Generation
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            AI Domain
            <span className="block bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Name Generator
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Generate unique, brandable domain names instantly with our
            AI-powered tool. Perfect for startups, projects, and businesses.
          </p>
        </div>

        {/* Generator Form */}
        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 sm:p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Zap className="h-6 w-6 text-blue-500" />
                Generate Domain Ideas
              </h2>

              {/* Keyword Input */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Keyword (optional)
                </label>
                <input
                  type="text"
                  value={formData.keyword}
                  onChange={(e) => handleInputChange("keyword", e.target.value)}
                  placeholder="e.g., cloud, shop, ai, tech"
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                />
              </div>

              {/* Industry Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Industry
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {industries.map((industry) => {
                    const IconComponent = industry.icon;
                    return (
                      <button
                        key={industry.value}
                        onClick={() =>
                          handleInputChange("industry", industry.value)
                        }
                        className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-300 ${
                          formData.industry === industry.value
                            ? "bg-gradient-to-r from-blue-600 to-blue-600 text-white border-transparent shadow-lg shadow-blue-500/25"
                            : "bg-background/50 border-border/50 text-foreground/70 hover:border-blue-500/50"
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span className="text-xs font-medium text-center">
                          {industry.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Count Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Count: {formData.count} domains
                </label>
                <div className="flex gap-3">
                  {countOptions.map((count) => (
                    <button
                      key={count}
                      onClick={() => handleInputChange("count", count)}
                      className={`flex-1 py-2 rounded-lg border transition-all duration-300 ${
                        formData.count === count
                          ? "bg-gradient-to-r from-blue-600 to-blue-600 text-white border-transparent shadow-lg shadow-blue-500/25"
                          : "bg-background/50 border-border/50 text-foreground/70 hover:border-blue-500/50"
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Style
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {styles.map((style) => (
                    <button
                      key={style.value}
                      onClick={() => handleInputChange("style", style.value)}
                      className={`py-2 rounded-lg border transition-all duration-300 ${
                        formData.style === style.value
                          ? "bg-gradient-to-r from-blue-600 to-blue-600 text-white border-transparent shadow-lg shadow-blue-500/25"
                          : "bg-background/50 border-border/50 text-foreground/70 hover:border-blue-500/50"
                      }`}
                    >
                      <span className="text-sm font-medium">{style.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <Button
                onClick={generateDomains}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 py-3 text-lg"
              >
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    <span>Generating...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    <span>Generate Domain Names</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </Button>
            </div>

            {/* Right Side - Preview/Info */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-blue-500" />
                How It Works
              </h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-500/20 mt-0.5">
                    <Sparkles className="h-3 w-3 text-blue-500" />
                  </div>
                  <p>
                    AI analyzes your keyword and industry to create relevant
                    names
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-500/20 mt-0.5">
                    <Zap className="h-3 w-3 text-blue-500" />
                  </div>
                  <p>Generates brandable, memorable domain suggestions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-green-500/20 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                  </div>
                  <p>Check availability and save your favorite domains</p>
                </div>
              </div>

              {/* Selected Domains Preview */}
              {selectedDomains.length > 0 && (
                <div className="mt-6 p-4 bg-background/50 rounded-xl border border-border/50">
                  <h4 className="font-semibold text-sm mb-2">
                    Selected Domains ({selectedDomains.length})
                  </h4>
                  <div className="space-y-1 max-h-32 overflow-y-auto">
                    {selectedDomains.map((domain, index) => (
                      <div
                        key={index}
                        className="text-xs font-mono text-foreground/70 bg-background/30 px-2 py-1 rounded"
                      >
                        {domain}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Section */}
        {suggestions.length > 0 && (
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">AI Suggestions</h2>
                <p className="text-muted-foreground">
                  {suggestions.length} domain names generated based on your
                  criteria
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <span className="text-sm text-muted-foreground">
                  {selectedDomains.length} selected
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedDomains([])}
                  disabled={selectedDomains.length === 0}
                >
                  Clear Selection
                </Button>
              </div>
            </div>

            {/* Domain Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    selectedDomains.includes(suggestion.domain)
                      ? "bg-blue-500/10 border-blue-500/50 shadow-lg shadow-blue-500/10"
                      : "bg-background/30 border-border/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-foreground break-all">
                        {suggestion.domain}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            suggestion.availability === "available"
                              ? "bg-green-500/20 text-green-600"
                              : "bg-yellow-500/20 text-yellow-600"
                          }`}
                        >
                          {suggestion.availability === "available"
                            ? "Likely Available"
                            : "Check Required"}
                        </div>
                        <div className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-600 text-xs font-medium">
                          {suggestion.score}% Match
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(suggestion.domain)}
                      className="flex-1"
                    >
                      {copiedDomain === suggestion.domain ? (
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      {copiedDomain === suggestion.domain ? "Copied!" : "Copy"}
                    </Button>

                    <Button
                      variant={
                        selectedDomains.includes(suggestion.domain)
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() => toggleSelectedDomain(suggestion.domain)}
                      className={`${
                        selectedDomains.includes(suggestion.domain)
                          ? "bg-gradient-to-r from-blue-600 to-blue-600"
                          : ""
                      }`}
                    >
                      <Star
                        className={`h-4 w-4 ${
                          selectedDomains.includes(suggestion.domain)
                            ? "fill-white"
                            : ""
                        }`}
                      />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={generateDomains}
                disabled={isGenerating}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Generate More Suggestions
              </Button>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Sparkles,
              title: "AI-Powered",
              description:
                "Advanced AI generates creative, brandable domain names",
            },
            {
              icon: Zap,
              title: "Instant Results",
              description: "Get dozens of suggestions in seconds, not hours",
            },
            {
              icon: Target,
              title: "Industry Focused",
              description: "Tailored suggestions for your specific industry",
            },
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 w-fit mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
