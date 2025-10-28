"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Download,
  QrCode,
  Link,
  Text,
  Mail,
  Phone,
  Wifi,
  Sparkles,
  Copy,
  CheckCircle,
  RefreshCw,
} from "lucide-react";

export default function QRGeneratorPage() {
  const [qrData, setQrData] = useState("");
  const [qrType, setQrType] = useState("url");
  const [qrImage, setQrImage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [qrConfig, setQrConfig] = useState({
    size: 300,
    margin: 2,
    colorDark: "#000000",
    colorLight: "#FFFFFF",
  });

  const canvasRef = useRef(null);

  const qrTypes = [
    {
      id: "url",
      name: "Website URL",
      icon: Link,
      placeholder: "https://example.com",
    },
    {
      id: "text",
      name: "Plain Text",
      icon: Text,
      placeholder: "Enter any text...",
    },
    {
      id: "email",
      name: "Email",
      icon: Mail,
      placeholder: "email@example.com",
    },
    { id: "phone", name: "Phone", icon: Phone, placeholder: "+1234567890" },
    {
      id: "wifi",
      name: "WiFi",
      icon: Wifi,
      placeholder: "Network name,Password",
    },
  ];

  // Load QRCode library dynamically to avoid SSR issues
  useEffect(() => {
    const loadQRCode = async () => {
      if (typeof window !== "undefined") {
        // We'll handle QR generation without external library for now
      }
    };
    loadQRCode();
  }, []);

  const generateQRCode = async () => {
    if (!qrData.trim()) return;

    setIsGenerating(true);
    try {
      let dataToEncode = qrData;

      // Format data based on type
      switch (qrType) {
        case "email":
          dataToEncode = `mailto:${qrData}`;
          break;
        case "phone":
          dataToEncode = `tel:${qrData}`;
          break;
        case "wifi":
          const [ssid, password] = qrData.split(",");
          dataToEncode = `WIFI:S:${ssid || ""};T:WPA;P:${password || ""};;`;
          break;
        default:
          break;
      }

      // Simple QR code generation using an API
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
        dataToEncode
      )}&size=${qrConfig.size}x${qrConfig.size}&margin=${
        qrConfig.margin
      }&color=${qrConfig.colorDark.slice(
        1
      )}&bgcolor=${qrConfig.colorLight.slice(1)}`;

      setQrImage(qrCodeUrl);
    } catch (error) {
      console.error("Error generating QR code:", error);
      // Fallback: Create a simple SVG-based QR code representation
      createFallbackQRCode(dataToEncode);
    } finally {
      setIsGenerating(false);
    }
  };

  const createFallbackQRCode = (data) => {
    // Simple fallback - create a data URL with basic QR-like pattern
    const canvas = document.createElement("canvas");
    canvas.width = qrConfig.size;
    canvas.height = qrConfig.size;
    const ctx = canvas.getContext("2d");

    // Fill background
    ctx.fillStyle = qrConfig.colorLight;
    ctx.fillRect(0, 0, qrConfig.size, qrConfig.size);

    // Create a simple pattern (not a real QR code, but visually similar)
    ctx.fillStyle = qrConfig.colorDark;
    const blockSize = qrConfig.size / 20;

    // Draw some squares to simulate QR pattern
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        if ((i + j) % 3 === 0 || (i * j) % 7 === 0) {
          ctx.fillRect(
            i * blockSize,
            j * blockSize,
            blockSize - 1,
            blockSize - 1
          );
        }
      }
    }

    // Add text in the center
    ctx.fillStyle = qrConfig.colorDark;
    ctx.font = "bold 16px Arial";
    ctx.textAlign = "center";
    ctx.fillText("QR Code", qrConfig.size / 2, qrConfig.size / 2);
    ctx.font = "12px Arial";
    ctx.fillText("Preview", qrConfig.size / 2, qrConfig.size / 2 + 20);

    setQrImage(canvas.toDataURL());
  };

  const downloadQRCode = () => {
    if (!qrImage) return;

    const link = document.createElement("a");
    link.download = `qrcode-${qrType}-${Date.now()}.png`;
    link.href = qrImage;
    link.click();
  };

  const copyQRCode = async () => {
    if (!qrImage) return;

    try {
      // For external URLs, we need to fetch and convert to blob
      if (qrImage.startsWith("http")) {
        const response = await fetch(qrImage);
        const blob = await response.blob();
        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob,
          }),
        ]);
      } else {
        // For data URLs, convert to blob
        const response = await fetch(qrImage);
        const blob = await response.blob();
        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob,
          }),
        ]);
      }

      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Error copying QR code:", error);
      // Fallback: Show download instructions
      alert(
        "Right-click on the QR code and select 'Save image as...' to download."
      );
    }
  };

  const resetGenerator = () => {
    setQrData("");
    setQrImage("");
    setQrConfig({
      size: 300,
      margin: 2,
      colorDark: "#000000",
      colorLight: "#FFFFFF",
    });
  };

  const presetColors = [
    { dark: "#000000", light: "#FFFFFF", name: "Classic" },
    { dark: "#2563EB", light: "#F3F4F6", name: "Blue" },
    { dark: "#7C3AED", light: "#F5F3FF", name: "Purple" },
    { dark: "#DC2626", light: "#FEF2F2", name: "Red" },
    { dark: "#059669", light: "#F0FDF4", name: "Green" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Free QR Code Generator
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            QR Code Generator
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Create in Seconds
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Generate custom QR codes for websites, contact information, WiFi
            credentials, and more. Perfect for marketing materials and digital
            sharing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Generator Form */}
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <QrCode className="h-6 w-6 text-blue-500" />
              Create Your QR Code
            </h2>

            {/* QR Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">
                QR Code Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {qrTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setQrType(type.id)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-300 ${
                        qrType === type.id
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/25"
                          : "bg-background/50 border-border/50 text-foreground/70 hover:border-blue-500/50"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="text-xs font-medium text-center">
                        {type.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Data Input */}
            <div className="mb-6">
              <label
                htmlFor="qrData"
                className="block text-sm font-medium text-foreground mb-3"
              >
                {qrTypes.find((t) => t.id === qrType)?.name} Content
              </label>
              <textarea
                id="qrData"
                value={qrData}
                onChange={(e) => setQrData(e.target.value)}
                placeholder={qrTypes.find((t) => t.id === qrType)?.placeholder}
                rows={qrType === "wifi" ? 2 : 3}
                className="w-full px-4 py-3 bg-background border border-border/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
              />
              {qrType === "wifi" && (
                <p className="text-xs text-muted-foreground mt-2">
                  Format: Network Name,Password (comma separated)
                </p>
              )}
            </div>

            {/* Color Customization */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-3">
                Color Scheme
              </label>
              <div className="grid grid-cols-5 gap-2">
                {presetColors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setQrConfig((prev) => ({
                        ...prev,
                        colorDark: color.dark,
                        colorLight: color.light,
                      }))
                    }
                    className="flex flex-col items-center gap-1 p-2 rounded-lg border border-border/50 hover:border-blue-500/50 transition-colors"
                    title={color.name}
                  >
                    <div
                      className="w-8 h-8 rounded border"
                      style={{
                        background: `linear-gradient(135deg, ${color.dark} 50%, ${color.light} 50%)`,
                      }}
                    />
                    <span className="text-xs text-muted-foreground">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Control */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-3">
                Size: {qrConfig.size}px
              </label>
              <input
                type="range"
                min="200"
                max="500"
                step="50"
                value={qrConfig.size}
                onChange={(e) =>
                  setQrConfig((prev) => ({
                    ...prev,
                    size: parseInt(e.target.value),
                  }))
                }
                className="w-full h-2 bg-muted/50 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={generateQRCode}
                disabled={!qrData.trim() || isGenerating}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
              >
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>Generating...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <QrCode className="h-4 w-4" />
                    <span>Generate QR Code</span>
                  </div>
                )}
              </Button>

              <Button
                onClick={resetGenerator}
                variant="outline"
                className="flex-1"
              >
                Reset
              </Button>
            </div>
          </div>

          {/* QR Code Preview */}
          <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Your QR Code</h2>

            <div className="flex flex-col items-center justify-center space-y-6">
              {/* QR Code Display */}
              <div className="p-6 bg-white rounded-2xl border-2 border-dashed border-border/50">
                {qrImage ? (
                  <img
                    src={qrImage}
                    alt="Generated QR Code"
                    className="max-w-full h-auto"
                    style={{
                      width: qrConfig.size,
                      height: qrConfig.size,
                      backgroundColor: qrConfig.colorLight,
                    }}
                  />
                ) : (
                  <div
                    className="flex items-center justify-center rounded-lg"
                    style={{
                      width: qrConfig.size,
                      height: qrConfig.size,
                      backgroundColor: qrConfig.colorLight,
                    }}
                  >
                    <div className="text-center text-muted-foreground">
                      <QrCode className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Your QR code will appear here</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Download & Copy Buttons */}
              {qrImage && (
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
                  <Button
                    onClick={downloadQRCode}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PNG
                  </Button>

                  <Button
                    onClick={copyQRCode}
                    variant="outline"
                    className="flex-1"
                    disabled={isCopied}
                  >
                    {isCopied ? (
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 mr-2" />
                    )}
                    {isCopied ? "Copied!" : "Copy"}
                  </Button>
                </div>
              )}

              {/* Usage Tips */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <h3 className="font-semibold text-blue-600 mb-2">Pro Tips</h3>
                <ul className="text-sm text-blue-600/80 space-y-1">
                  <li>• Test your QR code before printing</li>
                  <li>• Ensure sufficient contrast for scanning</li>
                  <li>• Keep URL short for better readability</li>
                  <li>• Use high-resolution for print materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Link,
              title: "Multiple Formats",
              description:
                "Generate QR codes for URLs, text, contacts, WiFi, and more",
            },
            {
              icon: Sparkles,
              title: "Customizable",
              description:
                "Choose colors, sizes, and styles to match your brand",
            },
            {
              icon: Download,
              title: "Instant Download",
              description:
                "Get high-quality PNG files ready for print and digital use",
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
