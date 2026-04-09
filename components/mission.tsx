export function Mission() {
  return (
    <section className="py-20 bg-background border-y-2 border-mw-cyan">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mb-8 text-center">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-mw-cyan mb-4">{":[OUR MISSION]"}</h2>
          <div className="h-1 w-24 bg-mw-cyan mx-auto" aria-hidden="true" />
        </header>

        {/* Mission Statement */}
        <article className="font-mono text-xl text-mw-light-gray leading-relaxed mb-8 text-balance text-center">
          <p>
            Building a resilient, community-owned mesh communications network across Western Canada — from the Pacific coast to the Rockies.
          </p>
        </article>

        {/* Mission Pillars Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <article className="border-2 border-mw-cyan p-6 bg-mw-dark-gray">
            <div className="font-mono text-4xl font-bold text-mw-cyan mb-2" aria-hidden="true">01</div>
            <h3 className="font-mono text-lg font-bold text-mw-light-gray mb-2">Security</h3>
            <p className="font-mono text-sm text-mw-light-gray">Encryption for all communications</p>
          </article>

          <article className="border-2 border-mw-cyan p-6 bg-mw-dark-gray">
            <div className="font-mono text-4xl font-bold text-mw-cyan mb-2" aria-hidden="true">02</div>
            <h3 className="font-mono text-lg font-bold text-mw-light-gray mb-2">Resilience</h3>
            <p className="font-mono text-sm text-mw-light-gray">Built for Canada&#39;s vast terrain and harsh conditions</p>
          </article>

          <article className="border-2 border-mw-cyan p-6 bg-mw-dark-gray">
            <div className="font-mono text-4xl font-bold text-mw-cyan mb-2" aria-hidden="true">03</div>
            <h3 className="font-mono text-lg font-bold text-mw-light-gray mb-2">Community</h3>
            <p className="font-mono text-sm text-mw-light-gray">Neighbour-to-neighbour connectivity, no corporations required</p>
          </article>
        </div>
      </div>
    </section>
  )
}
