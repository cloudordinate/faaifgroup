function TeamCard({ name, role, summary }: { name: string; role: string; summary: string }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4">
      <h3 className="text-lg font-semibold text-navy-900">{name}</h3>
      <p className="text-xs uppercase tracking-[0.06em] text-slate-500">{role}</p>
      <p className="mt-2 text-xs leading-6 text-slate-600">{summary}</p>
    </article>
  );
}

export default function TeamPage() {
  return (
    <main className="pb-16 pt-14">
      <section className="mx-auto max-w-container px-6 md:px-12 md:pt-10">
        <p className="eyebrow mb-4">About · Our Team</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-navy-900 md:text-6xl">
          The Minds Behind FAAIF Group.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
          At the heart of FAAIF Group is an elite team of ten professionals whose combined expertise
          spans software engineering, artificial intelligence, graphic design, operations
          management, and strategic leadership. Together, we have delivered over 100 projects for
          global clients and we are just getting started.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-container px-6 md:px-12">
        <p className="eyebrow mb-3">Leadership & Core Team</p>
        <div className="grid gap-4 md:grid-cols-2">
          <TeamCard
            name="Farrukh ud Din"
            role="Founder & CEO"
            summary="Farrukh ud Din is the visionary founder and strategic architect behind FAAIF Group. Under his leadership, FAAIF Group has grown from a four-person startup to a ten-member group of experts managing five distinct companies, with a clear roadmap toward global expansion."
          />
          <TeamCard
            name="Saad Ghori"
            role="General Manager"
            summary="Saad Ghori leads operational strategy and cross-company coordination across all active ventures. He translates the founder vision into actionable, measurable results through disciplined execution."
          />
          <TeamCard
            name="Ali Ahmed"
            role="Team Lead"
            summary="Ali Ahmed leads technical execution across the group software and development operations. His focus on architectural soundness and delivery quality anchors FAAIF engineering culture."
          />
          <TeamCard
            name="Huzaifa"
            role="Web and App Developer"
            summary="Huzaifa contributes across web and application development, supporting product delivery with a focus on clean implementation, performance, and dependable user experiences."
          />
          <TeamCard
            name="Muhammad Khurram"
            role="Full Stack Developer"
            summary="Muhammad Khurram specializes in scalable web architectures across frontend and backend systems. His ability to bridge complex backend systems with clean, performant frontends has been instrumental across multiple products."
          />
          <TeamCard
            name="Mahnoor Umar"
            role="AI / ML Engineer"
            summary="Mahnoor Umar drives the group most technically advanced capabilities. She designs predictive models, automation frameworks, and data pipelines that power smarter products across all ventures."
          />
          <TeamCard
            name="Hoorain Umar, Sidra Gul & Saima Gul"
            role="Creative Design Team"
            summary="The creative team defines the visual identity of FAAIF brands and client deliverables using Adobe Photoshop, Adobe Illustrator, Figma, and Canva. Their work spans brand identity, UI/UX, marketing collateral, and motion design."
          />
        </div>
      </section>
    </main>
  );
}
