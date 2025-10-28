"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Search,
  Globe,
  CheckCircle,
  XCircle,
  Calendar,
  Building,
  Sparkles,
  RefreshCw,
  AlertCircle,
  ExternalLink,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export default function DomainCheckerPage() {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const popularExtensions = [
    ".com",
    ".net",
    ".org",
    ".io",
    ".dev",
    ".co",
    ".ai",
  ];

  const checkDomain = async (domainToCheck = domain) => {
    if (!domainToCheck.trim()) {
      setError("Please enter a domain name");
      return;
    }

    setIsLoading(true);
    setError("");
    setResults(null);

    try {
      const response = await fetch(
        `/api/domain-checker?domain=${encodeURIComponent(domainToCheck)}`
      );

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }

      const data = await response.json();

      // Process the response - now much simpler!
      const processedResults = {
        domain: data.domain,
        available: data.available,
        price: data.price,
        currency: data.currency,
        source: data.source,
        timestamp: data.timestamp,
      };

      setResults(processedResults);
    } catch (err) {
      console.error("Domain check error:", err);
      setError("Failed to check domain availability. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const quickCheck = (extension) => {
    const baseDomain = domain.split(".")[0] || "example";
    const domainToCheck = `${baseDomain}${extension}`;

    if (!domain.includes(".")) {
      setDomain(domainToCheck);
    }

    checkDomain(domainToCheck);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-32 pb-20 dark:[background:repeating-linear-gradient(45deg,#000_0px,#111_2px,#000_4px,#222_6px)]">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Real-Time Domain Search
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            Domain Name
            <span className="block bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
              Availability Checker
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Check domain availability with real-time data from DomainsDuck API.
            Get accurate, instant results.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 sm:p-8 mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value.toLowerCase())}
                    placeholder="Enter domain name (e.g., mywebsite.com)"
                    className="w-full pl-10 pr-4 py-3 sm:py-4 bg-background border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-base sm:text-lg"
                    onKeyPress={(e) => e.key === "Enter" && checkDomain()}
                  />
                </div>
                {/* Mobile-friendly error message */}
                {error && (
                  <div className="flex items-start gap-2 text-red-500 text-sm mt-2 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="break-words">{error}</span>
                  </div>
                )}
              </div>

              <Button
                onClick={() => checkDomain()}
                disabled={isLoading}
                className="sm:w-auto bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 px-6 sm:px-8 py-3 sm:py-4 h-auto text-base sm:text-lg"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                    <span className="text-sm sm:text-base">Checking...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">Check Domain</span>
                  </div>
                )}
              </Button>
            </div>

            {/* Quick Check Buttons */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Quick check with popular extensions:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {popularExtensions.map((ext) => (
                  <Button
                    key={ext}
                    variant="outline"
                    size="sm"
                    onClick={() => quickCheck(ext)}
                    disabled={isLoading}
                    className="text-xs px-2 py-1 sm:px-3 sm:py-2"
                  >
                    {ext}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {results && (
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                Domain Results
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <p className="text-muted-foreground text-sm sm:text-base">
                  Results for {results.domain}
                </p>
                <span className="text-xs bg-muted/50 px-2 py-1 rounded">
                  Source: {results.source}
                </span>
              </div>
            </div>

            {/* Mobile-friendly Availability Status */}
            <div
              className={`p-4 sm:p-6 rounded-2xl mb-6 sm:mb-8 ${
                results.available
                  ? "bg-green-500/10 border border-green-500/20"
                  : "bg-red-500/10 border border-red-500/20"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3">
                  {results.available ? (
                    <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mt-1 sm:mt-0 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mt-1 sm:mt-0 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold break-words">
                      {results.available ? "Domain Available!" : "Domain Taken"}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base mt-1">
                      {results.available
                        ? "This domain is available for registration"
                        : "This domain is already registered"}
                    </p>
                    {results.available && results.price && (
                      <div className="flex items-center gap-2 mt-2 text-green-600">
                        <DollarSign className="h-4 w-4" />
                        <span className="font-semibold text-sm sm:text-base">
                          ${results.price} {results.currency}/year
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex sm:block justify-center">
                  {results.available ? (
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.bluehost.com/products/domain/domain-search-results?path=domainFirstFlow&domainName=${results.domain}`}
                    >
                      <Button
                        size="sm"
                        className="cursor-pointer w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-sm"
                      >
                        Register Domain
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full sm:w-auto text-sm"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Search Alternatives
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile-friendly Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8 pt-6 border-t border-border/50">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 py-2.5 text-sm"
                onClick={() => checkDomain()}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Check Again
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="flex-1 py-2.5 text-sm"
                onClick={() => {
                  setDomain("");
                  setResults(null);
                }}
              >
                <Search className="h-4 w-4 mr-2" />
                Search Another Domain
              </Button>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-16 sm:mt-20 grid md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: Search,
              title: "Real-Time Data",
              description:
                "Get accurate domain availability from DomainsDuck API",
            },
            {
              icon: DollarSign,
              title: "Pricing Info",
              description: "See registration prices for available domains",
            },
            {
              icon: Globe,
              title: "Instant Results",
              description: "Check any domain extension with quick results",
            },
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6"
              >
                <div className="p-2 sm:p-3 rounded-xl bg-blue-500/10 w-fit mx-auto mb-3 sm:mb-4">
                  <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
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
