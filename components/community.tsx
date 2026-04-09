export function Community() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="border-2 border-mw-cyan p-8 sm:p-12 bg-mw-dark-gray">
          {/* Section Header */}
          <header className="mb-8 text-center">
            <h2 className="font-mono text-3xl sm:text-4xl font-bold text-mw-cyan mb-4">{":[WHO WE ARE]"}</h2>
            <div className="h-1 w-24 bg-mw-cyan mx-auto" aria-hidden="true" />
          </header>

          {/* Community Description */}
          <div className="space-y-6 font-mono text-mw-light-gray">
            <p className="text-lg leading-relaxed">
              <span className="text-mw-cyan font-bold">:(MESHWEST)</span> is a community of radio enthusiasts, makers, and neighbours building resilient communications across Western Canada
            </p>

            <p className="text-lg leading-relaxed">
              <span className="text-mw-cyan font-bold">:[From coast to summit]</span> our members are deploying solar-powered repeaters on mountaintops, flashing firmware in their garages, and connecting communities from Victoria to Calgary
            </p>

            <p className="text-lg leading-relaxed">
              <span className="text-mw-cyan font-bold">:[Built for the land]</span> Canada&#39;s vast distances and rugged terrain demand a network that works without towers, without subscriptions, and without permission
            </p>

            <p className="text-xl text-mw-cyan font-bold text-center mt-8">One [packet] at a time</p>
          </div>

          {/* Join Community Button */}
          <footer className="mt-12 text-center">
            <a
              href="https://discord.gg/meshwest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-mono px-8 py-3 bg-mw-cyan text-primary-foreground font-bold hover:bg-mw-amber transition-colors border-2 border-mw-cyan hover:border-mw-amber"
            >
              {"[JOIN THE COMMUNITY]"}
            </a>
          </footer>
        </article>
      </div>
    </section>
  )
}
