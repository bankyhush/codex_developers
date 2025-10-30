"use client";

import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-background via-background to-muted/30 dark:dark-bg-pattern">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Shield className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Codex Developers Privacy Policy
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how Codex
            Developers collects, uses, and protects your personal information
            when you use our website, products, or services.
          </p>
        </div>

        {/* Privacy Content */}
        <div className="space-y-12 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              1. Information We Collect
            </h2>
            <p>
              We collect personal information that you voluntarily provide, such
              as your name, email address, phone number, and project details
              when you contact us or request a quote. We may also collect
              non-personal data like browser type, IP address, and site activity
              to improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              2. How We Use Your Information
            </h2>
            <p>The information we collect is used to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>
                Provide, maintain, and improve our web and mobile development
                services.
              </li>
              <li>
                Communicate with you about projects, updates, and support.
              </li>
              <li>
                Send marketing or promotional content (only with your consent).
              </li>
              <li>
                Comply with legal obligations and prevent fraudulent activity.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              3. Data Protection
            </h2>
            <p>
              Codex Developers uses industry-standard security measures to
              protect your data from unauthorized access, alteration, or
              disclosure. However, no electronic storage or transmission is 100%
              secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              4. Cookies and Tracking
            </h2>
            <p>
              Our website may use cookies and analytics tools to enhance your
              browsing experience and track usage patterns. You can choose to
              disable cookies in your browser settings, but some parts of the
              website may not function properly as a result.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              5. Sharing of Information
            </h2>
            <p>
              We do not sell or rent your personal information. We may share
              your data only with trusted partners or service providers who
              assist us in operating our business, as long as they agree to keep
              your information confidential and secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain your information only for as long as necessary to
              fulfill the purposes outlined in this policy, comply with legal
              obligations, or resolve disputes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              7. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              data. You may also request to opt out of marketing communications
              by contacting us at{" "}
              <a
                href="mailto:info@codexdevs.site"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                info@codexdevs.site
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to external websites. Codex
              Developers is not responsible for the privacy practices or content
              of those third-party sites. We encourage you to review their
              privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. The updated
              version will be posted on this page with a revised “Last Updated”
              date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have questions or concerns about this Privacy Policy,
              please contact us at{" "}
              <a
                href="mailto:info@codexdevs.site"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                info@codexdevs.site
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer Note */}
      </div>
    </section>
  );
}
