export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">Codex Developers</h2>
          <p>
            We are evolving to be more than just a development agency. We
            provide comprehensive digital solutions helping businesses and
            developers innovate and grow.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">500+</div>
            <p>Projects Completed</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">100+</div>
            <p>Happy Clients</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">24+</div>
            <p>Technologies Used</p>
          </div>
        </div>
      </div>
    </section>
  );
}
