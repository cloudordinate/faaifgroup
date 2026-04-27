import { ContactForm } from '@/components/shared/ContactForm';

export default function ContactPage() {
  return (
    <main className="pb-16 pt-14">
      <section className="mx-auto max-w-container px-6 md:px-12 md:pt-10">
        <p className="eyebrow mb-4">Contact</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-navy-900 md:text-6xl">
          Let&apos;s Connect.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
          Whether you are a potential client, a collaborator, an investor, or simply curious about
          what FAAIF Group is building, we would love to hear from you. Our team operates across two
          countries and is always open to meaningful conversations that lead to great work.
        </p>
      </section>

      <section className="mx-auto mt-14 grid max-w-container gap-8 px-6 md:grid-cols-[1fr_1.1fr] md:px-12">
        <div>
          <p className="eyebrow mb-3">Global Presence</p>
          <div className="space-y-3">
            <article className="rounded-md border border-slate-200 bg-white px-4 py-3">
              <h2 className="text-lg font-semibold text-navy-900">Australia Office</h2>
              <p className="mt-1 text-xs leading-6 text-slate-600">
                Australia is one of our primary markets, where we serve clients across technology,
                logistics, and digital services. For inquiries related to Australian operations,
                project engagements, or partnership opportunities, contact us via our investor and
                business development email.
              </p>
            </article>
            <article className="rounded-md border border-slate-200 bg-white px-4 py-3">
              <h2 className="text-lg font-semibold text-navy-900">Pakistan Office</h2>
              <p className="mt-1 text-xs leading-6 text-slate-600">
                Our core team and primary operations hub are based in Karachi, Pakistan, where the
                majority of our engineering, design, and AI work takes place. For project inquiries,
                talent discussions, or local collaboration, please reach out through our main
                contact channels.
              </p>
            </article>
          </div>

          <div className="mt-8">
            <p className="eyebrow mb-3">General Inquiry</p>
            <p className="text-sm leading-7 text-slate-600">
              No matter where you are in the world, we are always within reach. FAAIF Group believes
              that geography should never be a barrier to great collaboration. Reach out to us and
              let us explore how we can build something remarkable together.
            </p>
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
