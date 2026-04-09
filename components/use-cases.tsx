import { Tent, AlertTriangle, Mountain, Cpu } from "lucide-react"

export function UseCases() {
  return (
    <section className="py-20 bg-background border-y-2 border-mw-cyan">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mb-12 text-center">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-mw-cyan mb-4">{":[USE CASES]"}</h2>
          <div className="h-1 w-24 bg-mw-cyan mx-auto" />
        </header>

        {/* Use Cases Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          <article className="border-2 border-mw-cyan p-6 bg-mw-dark-gray">
            <AlertTriangle className="w-10 h-10 text-mw-cyan mb-4" />
            <h3 className="font-mono text-xl font-bold text-mw-light-gray mb-3">Emergency Response</h3>
            <p className="font-mono text-sm text-mw-light-gray leading-relaxed">
              Wildfire evacuation, earthquake response, and disaster communications when traditional infrastructure fails
            </p>
          </article>

          <article className="border-2 border-mw-cyan p-6 bg-mw-dark-gray">
            <Mountain className="w-10 h-10 text-mw-cyan mb-4" />
            <h3 className="font-mono text-xl font-bold text-mw-light-gray mb-3">Backcountry</h3>
            <p className="font-mono text-sm text-mw-light-gray leading-relaxed">
              Stay connected while hiking, skiing, and exploring BC and Alberta&#39;s vast wilderness
            </p>
          </article>

          <article className="border-2 border-mw-cyan p-6 bg-mw-dark-gray">
            <Tent className="w-10 h-10 text-mw-cyan mb-4" />
            <h3 className="font-mono text-xl font-bold text-mw-light-gray mb-3">Rural Communities</h3>
            <p className="font-mono text-sm text-mw-light-gray leading-relaxed">
              Bridging connectivity gaps for remote and rural communities across Western Canada
            </p>
          </article>

          <article className="border-2 border-mw-cyan p-6 bg-mw-dark-gray">
            <Cpu className="w-10 h-10 text-mw-cyan mb-4" />
            <h3 className="font-mono text-xl font-bold text-mw-light-gray mb-3">IoT Networks</h3>
            <p className="font-mono text-sm text-mw-light-gray leading-relaxed">
              Connect sensors and devices in remote locations without internet — weather stations, avalanche monitors, wildlife tracking
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
