"use client";

import { Shield } from "lucide-react";

export default function TermsPage() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-background via-background to-muted/30 dark:dark-bg-pattern">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Shield className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Codex Developers Terms
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Terms & Conditions
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to Codex Developers. By using our website, products, or
            services, you agree to the following terms and conditions.
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-12 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              1. Introduction
            </h2>
            <p>
              Codex Developers is a digital agency specializing in website
              design, mobile app development, and software solutions. These
              Terms & Conditions govern your use of our website and services. By
              accessing or using any part of our platform, you agree to be bound
              by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              2. Services
            </h2>
            <p>
              We provide professional website design, mobile app development,
              branding, and digital solutions. Service details, pricing, and
              project timelines will be clearly stated in each proposal or
              agreement shared with our clients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              3. Payments & Refunds
            </h2>
            <p>
              Payments must be made according to the agreed schedule before or
              during the project. A non-refundable deposit is required to begin
              most projects. Refunds are only issued under exceptional
              circumstances, such as project cancellation before any design or
              development work has started.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              4. Intellectual Property
            </h2>
            <p>
              All designs, code, and digital assets created by Codex Developers
              remain our intellectual property until full payment has been
              received. Once payment is completed, ownership of the final
              deliverables is transferred to the client, excluding any
              third-party libraries, frameworks, or licensed assets used in the
              project.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              5. Client Responsibilities
            </h2>
            <p>
              Clients must provide accurate information, feedback, and materials
              required to complete the project. Delays in communication or
              approval may affect the project timeline and delivery date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              Codex Developers shall not be held liable for any indirect,
              incidental, or consequential damages resulting from the use of our
              services, websites, or applications. Our total liability shall not
              exceed the total amount paid for the service in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              7. Revisions & Maintenance
            </h2>
            <p>
              Each project includes a limited number of revisions as stated in
              the project proposal. Additional revisions, post-launch changes,
              or maintenance may incur extra fees unless otherwise agreed upon
              in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              8. Third-Party Services
            </h2>
            <p>
              Some projects may include integrations with third-party platforms
              or APIs. Codex Developers is not responsible for the performance,
              availability, or terms of those external services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              9. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate services if a client
              violates these terms, fails to make payment, or engages in
              unethical or unlawful activity during a project.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              10. Updates to These Terms
            </h2>
            <p>
              Codex Developers may update these Terms and Conditions
              periodically. Any changes will be reflected on this page, and
              continued use of our services indicates acceptance of the updated
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              11. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at{" "}
              <a
                href="mailto:info@codexdevelopers.com"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                info@codexdevelopers.com
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
