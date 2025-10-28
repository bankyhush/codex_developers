// app/api/domain-checker/route.js
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const domain = searchParams.get("domain");

  if (!domain) {
    return Response.json({ error: "Missing domain" }, { status: 400 });
  }

  try {
    // Use DomainsDuck API directly
    const apiKey = "VH2PS6QZ5FYD";
    const apiUrl = `https://eu.domainsduck.com/api/get/?domain=${encodeURIComponent(
      domain
    )}&apikey=${apiKey}`;

    console.log("Calling DomainsDuck API for domain:", domain);

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`DomainsDuck API returned ${response.status}`);
    }

    const data = await response.json();
    console.log("DomainsDuck API raw response:", data);

    // Process the API response based on actual format
    const result = processDomainsDuckResponse(data, domain);

    return Response.json(result);
  } catch (err) {
    console.error("Domain check error:", err);
    // Fallback to simulation if API fails
    const fallbackResult = getFallbackResponse(domain);
    return Response.json(fallbackResult);
  }
}

// Process DomainsDuck API response based on actual format
function processDomainsDuckResponse(apiData, domain) {
  console.log("Processing API data:", apiData);

  // Handle the actual response format: {"domain":"jonh908nhfghhjh.io", "availability":"true"}
  if (apiData && apiData.availability !== undefined) {
    const isAvailable =
      apiData.availability === "true" || apiData.availability === true;

    return {
      domain: domain,
      available: isAvailable,
      source: "DomainsDuck API",
      timestamp: new Date().toISOString(),
    };
  }

  // Handle array format if returned
  if (Array.isArray(apiData) && apiData.length > 0) {
    const domainResult = apiData[0];
    const isAvailable =
      domainResult.available === true || domainResult.availability === "true";

    return {
      domain: domain,
      available: isAvailable,
      source: "DomainsDuck API",
      timestamp: new Date().toISOString(),
    };
  }

  // If no clear data, assume domain is available (more optimistic)
  console.log("No clear availability data, assuming available");
  return {
    domain: domain,
    available: true,
    source: "DomainsDuck API (Optimistic Fallback)",
    timestamp: new Date().toISOString(),
  };
}

// Fallback response if API fails
function getFallbackResponse(domain) {
  const domainLower = domain.toLowerCase();

  // Common domains that are definitely taken
  const takenDomains = [
    "google.com",
    "facebook.com",
    "youtube.com",
    "amazon.com",
    "twitter.com",
    "instagram.com",
    "linkedin.com",
    "apple.com",
    "microsoft.com",
    "github.com",
    "netflix.com",
    "whatsapp.com",
    "tiktok.com",
    "spotify.com",
    "reddit.com",
    "namecheap.com",
    "godaddy.com",
    "cloudflare.com",
  ];

  const isAvailable = !takenDomains.includes(domainLower);

  return {
    domain: domain,
    available: isAvailable,
    source: "Simulation (API Fallback)",
    timestamp: new Date().toISOString(),
  };
}
