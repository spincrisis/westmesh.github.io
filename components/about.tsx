import { Radio, Shield, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mb-12 text-center">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-mw-cyan mb-4">{":[WHAT IS MESHWEST]"}</h2>
          <div className="h-1 w-24 bg-mw-cyan mx-auto" />
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Main Description */}
          <article className="space-y-6">
            <p className="font-mono text-lg text-mw-light-gray leading-relaxed">
              MeshWest is a community hub for building Western Canada&#39;s decentralized mesh network. Spanning Western Canada and the Canadian Territories, this network is entirely user-supplied, powered by people like you.
            </p>
            <p className="font-mono text-lg text-mw-light-gray leading-relaxed">
              {"Our community runs MeshCore software, enabling secure connections for off-grid use, family communications, emergency response & disaster recovery, backcountry activities, and IoT sensor networks."}
            </p>
          </article>

          {/* Feature Cards */}
          <div className="grid gap-6">
            <article className="border-2 border-mw-cyan p-6 bg-mw-dark-gray">
              <Radio className="w-8 h-8 text-mw-cyan mb-3" />
              <h3 className="font-mono text-xl font-bold text-mw-light-gray mb-2">{":[LoRa Radio]"}</h3>
              <p className="font-mono text-sm text-mw-light-gray">
                Long-range, low-power radio technology for reliable mesh networking
              </p>
            </article>

            <article className="border-2 border-mw-cyan p-6 bg-mw-dark-gray">
              <Shield className="w-8 h-8 text-mw-cyan mb-3" />
              <h3 className="font-mono text-xl font-bold text-mw-light-gray mb-2">{":[Secure]"}</h3>
              <p className="font-mono text-sm text-mw-light-gray">
                End-to-end encrypted communications without internet dependency
              </p>
            </article>

            <article className="border-2 border-mw-cyan p-6 bg-mw-dark-gray">
              <Zap className="w-8 h-8 text-mw-cyan mb-3" />
              <h3 className="font-mono text-xl font-bold text-mw-light-gray mb-2">{":[Decentralized]"}</h3>
              <p className="font-mono text-sm text-mw-light-gray">No central servers, no single point of failure</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
