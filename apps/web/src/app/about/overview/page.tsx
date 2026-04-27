export default function AboutOverviewPage() {
  return (
    <main className="pb-16 pt-14">
      <section className="mx-auto max-w-container px-6 md:px-12 md:pt-10">
        <p className="eyebrow mb-4">About · Company Overview</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.06] tracking-[-0.02em] text-navy-900 md:text-6xl">
          Our Journey from Vision to Velocity.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
          Founded in 2024 by Farrukh ud Din, FAAIF Group was born out of a clear and ambitious
          vision to redefine digital excellence by building specialized, world-class companies under
          a single strategic umbrella. What began as a lean, highly focused team of four
          professionals working through Cloud Ordinate has since evolved into a powerhouse of ten
          industry experts, each contributing deep technical mastery and creative innovation to a
          growing portfolio of ventures. From its earliest days, the company prioritized precision,
          scalability, and an uncompromising commitment to quality over quantity.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Today, FAAIF Group operates as the parent organization for five thriving subsidiaries,
          each addressing a distinct and high-growth market from cloud infrastructure and artificial
          intelligence to fitness technology, lifestyle applications, and global trade logistics.
          The group\'s journey from a dedicated freelance team to a fully structured corporate
          entity is a testament to the vision, discipline, and relentless execution that defines
          FAAIF culture.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-container gap-8 px-6 md:grid-cols-2 md:px-12">
        <div>
          <p className="eyebrow mb-3">Our Specialized Ecosystem</p>
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-navy-900">
            Bridging Ambition and Execution.
          </h2>
        </div>
        <div className="space-y-4 text-sm leading-7 text-slate-600">
          <p>
            FAAIF Group operates through a carefully curated ecosystem of specialized brands, each
            commanding its own domain of excellence. Cloud Ordinate serves as our flagship cloud and
            infrastructure wing, while our Software and Apps division produces custom-built digital
            products tailored to global standards.
          </p>
          <p>
            The Creative Studio is where high-end graphic design meets purposeful brand identity,
            powered by Adobe Photoshop, Adobe Illustrator, Figma, and Canva. FAAIF AI Labs is our
            frontier division, pioneering machine learning, intelligent automation, and data-driven
            innovation.
          </p>
          <p>
            FAAIF Group is a Karachi-based parent organization and digital conglomerate, founded on
            the twin pillars of technical precision and strategic growth. Established in 2024, the
            group was designed to be more than a service provider. It is a platform for building
            transformative companies at scale.
          </p>
        </div>
      </section>

      <section className="mt-16 bg-slate-50 py-12">
        <div className="mx-auto max-w-container px-6 md:px-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-navy-900">
              Company Overview
            </h2>
            <p className="max-w-xs text-sm text-slate-500">
              Operational Excellence. Strategic Investment. Technological Innovation.
            </p>
          </div>
          <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600">
            <p>
              FAAIF Group oversees a portfolio of high-growth ventures, providing each subsidiary
              with centralized capital, senior leadership, operational infrastructure, and the full
              depth of FAAIF Labs technological capabilities.
            </p>
            <p>
              The group architecture is built around three key pillars: Operational Excellence,
              Strategic Investment, and Technological Innovation. Every decision made at the group
              level is designed to amplify the competitive advantages of its individual companies.
            </p>
            <p>
              From a technology standpoint, FAAIF Group commands expertise across modern
              development. Our frontend teams work with HTML, CSS, JavaScript, and ReactJS. On the
              backend, we leverage Python, Node.js, and Express.js. Our full-stack capabilities are
              unified through the MERN stack, while MySQL and PostgreSQL power our data layer.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-container px-6 md:px-12">
        <div className="grid grid-cols-2 gap-4 border-t border-slate-200 py-8 text-navy-900 md:grid-cols-4">
          <div>
            <p className="text-4xl font-display">2024</p>
            <p className="text-xs text-slate-500">Founded</p>
          </div>
          <div>
            <p className="text-4xl font-display">10</p>
            <p className="text-xs text-slate-500">Team experts</p>
          </div>
          <div>
            <p className="text-4xl font-display">5</p>
            <p className="text-xs text-slate-500">Subsidiaries</p>
          </div>
          <div>
            <p className="text-4xl font-display">100+</p>
            <p className="text-xs text-slate-500">Projects delivered</p>
          </div>
        </div>
      </section>
    </main>
  );
}
