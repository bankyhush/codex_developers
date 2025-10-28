"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Download,
  RefreshCw,
  Palette,
  Shapes,
  Zap,
  Copy,
  CheckCircle,
  Star,
  Eye,
  Image,
  ArrowRight,
  Upload,
  Trash2,
} from "lucide-react";

export default function AILogoGeneratorPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "tech",
    style: "modern",
    color: "blue",
    concept: "",
  });
  const [generatedLogos, setGeneratedLogos] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [favoriteLogos, setFavoriteLogos] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);

  const industries = [
    { value: "tech", label: "Technology", icon: Zap },
    { value: "finance", label: "Finance", icon: Shapes },
    { value: "health", label: "Health", icon: Palette },
    { value: "education", label: "Education", icon: Sparkles },
    { value: "creative", label: "Creative", icon: Image },
    { value: "ecommerce", label: "E-commerce", icon: Eye },
  ];

  const styles = [
    { value: "modern", label: "Modern Minimal" },
    { value: "classic", label: "Classic Elegant" },
    { value: "playful", label: "Playful Fun" },
    { value: "luxury", label: "Luxury Premium" },
    { value: "tech", label: "Tech Futuristic" },
    { value: "organic", label: "Organic Natural" },
  ];

  // Fixed colorSchemes with unique values
  const colorSchemes = [
    {
      value: "blue",
      label: "Ocean Blue",
      colors: ["#3B82F6", "#1D4ED8", "#60A5FA"],
    },
    {
      value: "purple",
      label: "Royal Purple",
      colors: ["#8B5CF6", "#7C3AED", "#A78BFA"],
    },
    {
      value: "green",
      label: "Emerald Green",
      colors: ["#10B981", "#059669", "#34D399"],
    },
    {
      value: "red",
      label: "Crimson Red",
      colors: ["#EF4444", "#DC2626", "#F87171"],
    },
    {
      value: "orange",
      label: "Sunset Orange",
      colors: ["#F59E0B", "#D97706", "#FBBF24"],
    },
    {
      value: "monochrome",
      label: "Monochrome",
      colors: ["#000000", "#4B5563", "#9CA3AF"],
    }, // Changed from "mono" to "monochrome"
  ];

  const fileInputRef = useRef(null);

  const generateLogos = async () => {
    if (!formData.companyName.trim()) return;

    setIsGenerating(true);
    setGeneratedLogos([]);
    setSelectedLogo(null);

    // Simulate AI generation with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Generate logo suggestions based on inputs
    const logos = generateLogoDesigns(formData);
    setGeneratedLogos(logos);
    setIsGenerating(false);
  };

  const generateLogoDesigns = (data) => {
    const { companyName, industry, style, color, concept } = data;
    const logos = [];
    const colorScheme =
      colorSchemes.find((c) => c.value === color) || colorSchemes[0];

    // Logo design templates based on style and industry
    const designTemplates = [
      {
        type: "icon",
        name: `${companyName} Icon Mark`,
        description: "Clean icon-based logo perfect for digital use",
      },
      {
        type: "text",
        name: `${companyName} Wordmark`,
        description: "Modern typography-focused logo",
      },
      {
        type: "combination",
        name: `${companyName} Brand Mark`,
        description: "Combined icon and text for versatility",
      },
      {
        type: "emblem",
        name: `${companyName} Emblem`,
        description: "Classic emblem style for established brands",
      },
      {
        type: "abstract",
        name: `${companyName} Abstract`,
        description: "Unique abstract design for memorability",
      },
      {
        type: "mascot",
        name: `${companyName} Mascot`,
        description: "Playful character-based logo",
      },
    ];

    for (let i = 0; i < 6; i++) {
      const template = designTemplates[i];
      const logoId = `logo-${i + 1}-${Date.now()}`;

      logos.push({
        id: logoId,
        name: template.name,
        description: template.description,
        type: template.type,
        colors: colorScheme.colors,
        style: style,
        industry: industry,
        companyName: companyName,
        // In a real app, this would be an actual generated image
        // For demo, we'll use a simulated SVG/design
        preview: generateLogoSVG(
          template.type,
          colorScheme.colors,
          companyName
        ),
        score: Math.floor(Math.random() * 30) + 70, // 70-100 score
        isNew: i < 2, // Mark first two as new
      });
    }

    return logos;
  };

  const generateLogoSVG = (type, colors, companyName) => {
    // This would generate actual SVG logos in a real application
    // For demo, we return a data URL of a simple generated design
    return `data:image/svg+xml,${encodeURIComponent(`
      <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${colors[2]}20" />
        ${
          type === "icon"
            ? `
            <circle cx="100" cy="100" r="40" fill="${colors[0]}" />
            <circle cx="100" cy="100" r="25" fill="${colors[1]}" />
            <circle cx="100" cy="100" r="10" fill="white" />
          `
            : type === "text"
            ? `
            <rect x="50" y="80" width="100" height="20" fill="${colors[0]}" rx="10" />
            <rect x="50" y="110" width="80" height="15" fill="${colors[1]}" rx="7" />
            <rect x="50" y="130" width="60" height="12" fill="${colors[2]}" rx="6" />
          `
            : type === "combination"
            ? `
            <circle cx="80" cy="100" r="30" fill="${colors[0]}" />
            <rect x="120" y="80" width="60" height="15" fill="${colors[1]}" rx="7" />
            <rect x="120" y="105" width="50" height="12" fill="${colors[2]}" rx="6" />
          `
            : type === "emblem"
            ? `
            <circle cx="100" cy="100" r="45" fill="none" stroke="${colors[0]}" stroke-width="8" />
            <circle cx="100" cy="100" r="35" fill="none" stroke="${colors[1]}" stroke-width="6" />
            <circle cx="100" cy="100" r="25" fill="${colors[2]}" />
          `
            : type === "abstract"
            ? `
            <polygon points="100,50 150,100 100,150 50,100" fill="${colors[0]}" />
            <circle cx="100" cy="100" r="30" fill="${colors[1]}" />
            <polygon points="100,70 120,100 100,130 80,100" fill="white" />
          `
            : `
            <circle cx="100" cy="120" r="35" fill="${colors[0]}" />
            <circle cx="85" cy="105" r="8" fill="white" />
            <circle cx="115" cy="105" r="8" fill="white" />
            <path d="M 80 135 Q 100 150 120 135" stroke="white" stroke-width="4" fill="none" />
          `
        }
      </svg>
    `)}`;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleFavorite = (logoId) => {
    setFavoriteLogos((prev) =>
      prev.includes(logoId)
        ? prev.filter((id) => id !== logoId)
        : [...prev, logoId]
    );
  };

  const downloadLogo = (logo) => {
    // In a real app, this would download the actual logo file
    const link = document.createElement("a");
    link.href = logo.preview;
    link.download = `${logo.companyName}-${logo.type}-logo.svg`;
    link.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeUploadedImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              AI-Powered Logo Design
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            AI Logo
            <span className="block bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              Generator
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Create professional, unique logos in seconds with our AI-powered
            design tool. Perfect for startups, businesses, and personal brands.
          </p>
        </div>

        {/* Generator Form */}
        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 sm:p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Palette className="h-6 w-6 text-blue-500" />
                Design Your Logo
              </h2>

              {/* Company Name */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Company/Brand Name *
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) =>
                    handleInputChange("companyName", e.target.value)
                  }
                  placeholder="Enter your company name..."
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                />
              </div>

              {/* Industry Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Industry
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {industries.map((industry) => {
                    const IconComponent = industry.icon;
                    return (
                      <button
                        key={industry.value} // Using unique value as key
                        onClick={() =>
                          handleInputChange("industry", industry.value)
                        }
                        className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-300 ${
                          formData.industry === industry.value
                            ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white border-transparent shadow-lg shadow-blue-500/25"
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

              {/* Style Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Design Style
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {styles.map((style) => (
                    <button
                      key={style.value} // Using unique value as key
                      onClick={() => handleInputChange("style", style.value)}
                      className={`py-3 rounded-lg border transition-all duration-300 ${
                        formData.style === style.value
                          ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white border-transparent shadow-lg shadow-blue-500/25"
                          : "bg-background/50 border-border/50 text-foreground/70 hover:border-blue-500/50"
                      }`}
                    >
                      <span className="text-sm font-medium">{style.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Scheme - FIXED with unique keys */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Color Scheme
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {colorSchemes.map((scheme) => (
                    <button
                      key={scheme.value} // Now all values are unique
                      onClick={() => handleInputChange("color", scheme.value)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-300 ${
                        formData.color === scheme.value
                          ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white border-transparent shadow-lg shadow-blue-500/25"
                          : "bg-background/50 border-border/50 text-foreground/70 hover:border-blue-500/50"
                      }`}
                    >
                      <div className="flex gap-1">
                        {scheme.colors.map((color, index) => (
                          <div
                            key={index} // Using index for color dots since they're just visual
                            className="w-3 h-3 rounded-full border"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-medium text-center">
                        {scheme.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Concept/Inspiration */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Design Concept (Optional)
                </label>
                <textarea
                  value={formData.concept}
                  onChange={(e) => handleInputChange("concept", e.target.value)}
                  placeholder="Describe your brand values, inspiration, or specific elements you'd like to include..."
                  rows={3}
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Reference Image (Optional)
                </label>
                <div className="border-2 border-dashed border-border/50 rounded-xl p-6 text-center">
                  {uploadedImage ? (
                    <div className="space-y-3">
                      <img
                        src={uploadedImage}
                        alt="Uploaded reference"
                        className="mx-auto max-h-32 rounded-lg"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={removeUploadedImage}
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove Image
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Upload a reference image for inspiration
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PNG, JPG up to 5MB
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        Choose File
                      </Button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Generate Button */}
              <Button
                onClick={generateLogos}
                disabled={!formData.companyName.trim() || isGenerating}
                className="cursor-pointer w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 py-3 text-lg disabled:opacity-50"
              >
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    <span>AI is Designing...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    <span>Generate Logo Designs</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </Button>
            </div>

            {/* Right Side - Preview/Info */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-500" />
                How AI Logo Generation Works
              </h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-500/20 mt-0.5">
                    <Sparkles className="h-3 w-3 text-blue-500" />
                  </div>
                  <p>
                    AI analyzes your brand name, industry, and style preferences
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-purple-500/20 mt-0.5">
                    <Palette className="h-3 w-3 text-purple-500" />
                  </div>
                  <p>
                    Creates multiple unique design concepts based on your inputs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-green-500/20 mt-0.5">
                    <Download className="h-3 w-3 text-green-500" />
                  </div>
                  <p>
                    Download high-quality vector files ready for professional
                    use
                  </p>
                </div>
              </div>

              {/* Selected Colors Preview */}
              <div className="mt-6 p-4 bg-background/50 rounded-xl border border-border/50">
                <h4 className="font-semibold text-sm mb-3">
                  Selected Color Scheme
                </h4>
                <div className="flex gap-2">
                  {colorSchemes
                    .find((s) => s.value === formData.color)
                    ?.colors.map((color, index) => (
                      <div
                        key={index} // Using index since colors are just visual
                        className="flex-1 h-8 rounded-lg border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                </div>
              </div>

              {/* Favorites Preview */}
              {favoriteLogos.length > 0 && (
                <div className="mt-6 p-4 bg-background/50 rounded-xl border border-border/50">
                  <h4 className="font-semibold text-sm mb-2">
                    Favorite Designs ({favoriteLogos.length})
                  </h4>
                  <div className="text-xs text-muted-foreground">
                    Your selected designs will appear here
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Section */}
        {generatedLogos.length > 0 && (
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  AI-Generated Logo Designs
                </h2>
                <p className="text-muted-foreground">
                  {generatedLogos.length} unique designs created for{" "}
                  {formData.companyName}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <span className="text-sm text-muted-foreground">
                  {favoriteLogos.length} favorites
                </span>
              </div>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generatedLogos.map((logo) => (
                <div
                  key={logo.id} // Using unique id as key
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    selectedLogo === logo.id
                      ? "bg-blue-500/10 border-blue-500/50 shadow-2xl shadow-blue-500/10"
                      : "bg-background/30 border-border/50 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5"
                  }`}
                >
                  {/* Logo Preview */}
                  <div className="relative mb-4">
                    <div className="bg-white rounded-xl p-8 border border-border/50 flex items-center justify-center h-48">
                      <img
                        src={logo.preview}
                        alt={logo.name}
                        className="max-w-full max-h-32"
                      />
                    </div>
                    {logo.isNew && (
                      <div className="absolute -top-2 -right-2 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                        NEW
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(logo.id)}
                        className={`p-1 h-8 w-8 ${
                          favoriteLogos.includes(logo.id)
                            ? "text-yellow-500 hover:text-yellow-600"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Star
                          className={`h-4 w-4 ${
                            favoriteLogos.includes(logo.id)
                              ? "fill-current"
                              : ""
                          }`}
                        />
                      </Button>
                    </div>
                  </div>

                  {/* Logo Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">
                        {logo.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {logo.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-600 text-xs font-medium">
                          {logo.score}% Match
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {logo.type}
                        </div>
                      </div>
                    </div>

                    {/* Color Palette Preview */}
                    <div className="flex gap-1">
                      {logo.colors.map((color, index) => (
                        <div
                          key={index} // Using index for color dots
                          className="flex-1 h-3 rounded-full border"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => downloadLogo(logo)}
                        className="flex-1"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button
                        variant={
                          selectedLogo === logo.id ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedLogo(logo.id)}
                        className={`${
                          selectedLogo === logo.id
                            ? "bg-gradient-to-r from-blue-600 to-purple-600"
                            : ""
                        }`}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Regenerate Section */}
            <div className="text-center mt-8 pt-6 border-t border-border/50">
              <p className="text-muted-foreground mb-4">
                Not satisfied with these designs? Generate more with different
                styles.
              </p>
              <Button
                variant="outline"
                onClick={generateLogos}
                disabled={isGenerating}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Generate New Designs
              </Button>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Sparkles,
              title: "AI-Powered Design",
              description:
                "Advanced AI creates unique, professional logo designs instantly",
            },
            {
              icon: Palette,
              title: "Fully Customizable",
              description:
                "Choose styles, colors, and concepts that match your brand",
            },
            {
              icon: Download,
              title: "Ready to Use",
              description:
                "Download high-quality vector files for any platform",
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
