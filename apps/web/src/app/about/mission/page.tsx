export default function AboutMissionPage() {
  return (
    <main className="pb-16 pt-14">
      <section className="mx-auto max-w-container px-6 md:px-12 md:pt-10">
        <p className="eyebrow mb-4">About · Mission & Vision</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-navy-900 md:text-6xl">
          Mission & Vision
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
          Our mission is to empower specialized, world-class teams to solve complex global
          challenges through the combined force of technology, design, and strategic leadership.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-container gap-4 px-6 md:grid-cols-2 md:px-12">
        <article className="rounded-xl bg-slate-100 p-8">
          <p className="eyebrow mb-3">Our Mission</p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-navy-900">
            Technology that matters, delivered with precision and care.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            We believe that great software, built by the right people with the right purpose, can
            fundamentally reshape the way industries operate and the way people experience the
            world. Every project we undertake whether a mobile application, a cloud infrastructure
            system, or an AI-driven logistics platform is guided by this singular commitment.
          </p>
        </article>

        <article className="rounded-xl bg-navy-900 p-8 text-white">
          <p className="eyebrow mb-3">Our Vision</p>
          <h2 className="text-3xl font-semibold tracking-[-0.02em]">
            Transforming traditional industries into tech-first powerhouses.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Our vision is to become a leading global conglomerate recognized for innovation at
            scale. By continuously evolving our technical stack, investing in our people, and
            expanding our reach across Australia and Pakistan and beyond, we are building a group
            that defines tomorrow\'s digital landscape.
          </p>
        </article>
      </section>
    </main>
  );
}
