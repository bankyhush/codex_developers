import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Built by developers, trusted by businesses worldwide
          </h2>
          <p>
            Codex Developers is transforming beyond a traditional development
            agency. We deliver complete digital solutions that empower
            businesses and developers to innovate and grow.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              <img
                className="h-6 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/nike.svg"
                alt="TechCorp Solutions Logo"
                height="24"
                width="auto"
              />
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  Codex Developers has completely transformed our digital
                  presence. Their team delivered a stunning e-commerce platform
                  that increased our online sales by 200% within the first
                  quarter. The attention to detail, technical expertise, and
                  commitment to our success made them the perfect development
                  partner.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="/images/testimonials/sarah-johnson.jpg"
                      alt="Sarah Johnson"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium">Sarah Johnson</cite>
                    <span className="text-muted-foreground block text-sm">
                      CEO, TechCorp Solutions
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium">
                  The mobile app developed by Codex Developers exceeded our
                  expectations. Their innovative approach and technical
                  excellence delivered a seamless user experience that our
                  customers love.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="/images/testimonials/michael-chen.jpg"
                      alt="Michael Chen"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Michael Chen</cite>
                    <span className="text-muted-foreground block text-sm">
                      Product Manager, Innovate Labs
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  Outstanding work on our corporate branding! Codex Developers
                  created a visual identity that perfectly represents our
                  company values and mission.
                </p>

                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="/images/testimonials/emma-rodriguez.jpg"
                      alt="Emma Rodriguez"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium">Emma Rodriguez</cite>
                    <span className="text-muted-foreground block text-sm">
                      Marketing Director, Global Brands Inc.
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
          <Card className="card variant-mixed">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p>
                  The digital marketing campaign by Codex Developers generated
                  3x more leads than our previous agency. Their data-driven
                  approach delivered incredible ROI.
                </p>

                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="/images/testimonials/david-thompson.jpg"
                      alt="David Thompson"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback>DT</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">David Thompson</p>
                    <span className="text-muted-foreground block text-sm">
                      Sales Director, Growth Enterprises
                    </span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
