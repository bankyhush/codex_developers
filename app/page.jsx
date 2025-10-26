import ServicesShowcase from "@/components/content";
import FAQsTwo from "@/components/faqs-2";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-amber-50">
      <HeroSection />
      <ServicesShowcase />
      <Testimonials />
      <FAQsTwo />
      <FooterSection />
    </div>
  );
}
