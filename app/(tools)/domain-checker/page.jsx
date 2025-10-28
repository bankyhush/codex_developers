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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
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
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Availability Checker
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Check domain availability with real-time data from DomainsDuck API.
            Get accurate, instant results.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 mb-12">
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
                    className="w-full pl-10 pr-4 py-4 bg-background border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg"
                    onKeyPress={(e) => e.key === "Enter" && checkDomain()}
                  />
                </div>
                {error && (
                  <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                    <AlertCircle className="h-4 w-4" />
                    {error}
                  </div>
                )}
              </div>

              <Button
                onClick={() => checkDomain()}
                disabled={isLoading}
                className="sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 h-auto"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    <span>Checking...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    <span>Check Domain</span>
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
                    className="text-xs"
                  >
                    {ext}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {results && (
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Domain Results</h2>
              <p className="text-muted-foreground">
                Results for {results.domain}
                <span className="text-xs bg-muted/50 px-2 py-1 rounded ml-2">
                  Source: {results.source}
                </span>
              </p>
            </div>

            {/* Availability Status */}
            <div
              className={`p-6 rounded-2xl mb-8 ${
                results.available
                  ? "bg-green-500/10 border border-green-500/20"
                  : "bg-red-500/10 border border-red-500/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {results.available ? (
                    <>
                      <CheckCircle className="h-8 w-8 text-green-500" />
                      <div>
                        <h3 className="text-xl font-bold">Domain Available!</h3>
                        <p className="text-muted-foreground">
                          This domain is available for registration
                        </p>
                        {results.price && (
                          <div className="flex items-center gap-2 mt-2 text-green-600">
                            <DollarSign className="h-4 w-4" />
                            <span className="font-semibold">
                              ${results.price} {results.currency}/year
                            </span>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-8 w-8 text-red-500" />
                      <div>
                        <h3 className="text-xl font-bold">Domain Taken</h3>
                        <p className="text-muted-foreground">
                          This domain is already registered
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {results.available ? (
                  <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                    Register Domain
                  </Button>
                ) : (
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Search Alternatives
                  </Button>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-border/50">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => checkDomain()}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Check Again
              </Button>

              <Button
                variant="outline"
                className="flex-1"
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
        <div className="mt-20 grid md:grid-cols-3 gap-8">
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
