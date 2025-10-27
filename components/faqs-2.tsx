"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQsTwo() {
  const faqItems = [
    {
      id: "item-1",
      question: "How long does a typical web development project take?",
      answer:
        "Project timelines vary based on complexity. A basic website takes 2-5 days, while complex web applications can take 3-12 weeks. We provide detailed project timelines during our initial consultation and maintain regular progress updates throughout development.",
    },
    {
      id: "item-2",
      question: "What technologies and frameworks do you work with?",
      answer:
        "We specialize in modern technologies including Next.js, React, Node.js, TypeScript, CSS3, HTML5, Boostrap, MongoDB, and TailwindCSS. We also work with WordPress, Shopify, PHP, Python, and various mobile development frameworks. Our team stays current with the latest industry standards and best practices.",
    },
    {
      id: "item-3",
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages. This includes security updates, performance optimization, bug fixes, and feature enhancements. We provide 24/7 monitoring and emergency support for all our clients.",
    },
    {
      id: "item-4",
      question: "Can you work with our existing design or development team?",
      answer:
        "Absolutely! We frequently collaborate with in-house teams, designers, and other agencies. We can integrate with your existing workflow, provide technical expertise, or handle specific components of your project while your team focuses on other areas.",
    },
    {
      id: "item-5",
      question: "What is your pricing structure for development projects?",
      answer:
        "We offer flexible pricing models: fixed-price projects for well-defined scopes, hourly rates for ongoing work, and monthly retainers for long-term partnerships. During our discovery phase, we provide transparent quotes with detailed breakdowns of costs and deliverables.",
    },
    {
      id: "item-6",
      question: "Do you offer digital marketing and SEO services?",
      answer:
        "Yes, we provide comprehensive digital marketing services including SEO optimization, social media management, content marketing, PPC advertising, and analytics. We develop customized strategies to increase your online visibility and drive qualified traffic to your website.",
    },
    {
      id: "item-7",
      question: "Can you help with mobile app development?",
      answer:
        "Definitely! We develop both native (iOS/Android) and cross-platform mobile applications. Our mobile solutions include user-friendly interfaces, seamless performance, and integration with backend systems. We handle the entire process from concept to app store deployment.",
    },
    {
      id: "item-8",
      question: "What makes Codex Developers different from other agencies?",
      answer:
        "We combine technical expertise with business strategy. Unlike many agencies, we focus on understanding your business goals first, then deliver solutions that drive real results. Our team includes experienced developers, designers, and digital strategists working together to ensure your success.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8">
            Can't find what you're looking for? Contact our{" "}
            <Link
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
