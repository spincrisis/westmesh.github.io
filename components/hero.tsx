import { AnimatedHeadline } from "./animated-headline"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Terminal grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Title */}
        <header className="mb-8 flex flex-col items-center">
          <h1 className="font-mono text-5xl sm:text-6xl lg:text-8xl font-bold text-mw-cyan tracking-tight">
            WESTMESH
          </h1>
          <p className="font-mono text-lg sm:text-xl text-mw-light-gray mt-2 tracking-widest uppercase">
            Western Canada&#39;s MeshCore Community
          </p>
        </header>

        {/* Main Headline - Animated "No [VAR] Needed" */}
        <AnimatedHeadline />

        {/* Tagline */}
        <article className="font-mono text-mw-cyan text-lg sm:text-xl mb-8">
          <span className="text-mw-cyan" aria-hidden="true">{">"}</span>{" "}
          <span className="text-balance text-mw-light-gray">
            Reliable, decentralized, encrypted communications across the Canadian West
          </span>
        </article>

        {/* Call to Action Button */}
        <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#getting-started"
            className="font-mono px-8 py-3 bg-mw-cyan text-primary-foreground font-bold hover:bg-mw-amber transition-colors border-2 border-mw-cyan hover:border-mw-amber"
          >
            {"[GET STARTED]"}
          </a>
        </nav>
      </div>
    </section>
  )
}
