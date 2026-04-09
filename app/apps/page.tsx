import { Smartphone, Globe, Monitor } from "lucide-react"

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-mw-cyan mb-4">
            {":[APPS]"}
          </h1>
          <p className="font-mono text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Download MeshCore companion apps to connect to the mesh network
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Android */}
          <article className="border-2 border-mw-cyan p-8 bg-mw-dark-gray text-center">
            <Smartphone className="w-12 h-12 text-mw-cyan mx-auto mb-4" />
            <h2 className="font-mono text-xl font-bold text-mw-light-gray mb-3">Android</h2>
            <div className="space-y-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.meshcore.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-sm text-mw-cyan hover:text-mw-amber transition-colors underline"
              >
                {">"} Google Play
              </a>
              <a
                href="https://meshcore.co.uk/apps.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-sm text-mw-cyan hover:text-mw-amber transition-colors underline"
              >
                {">"} APK Download
              </a>
            </div>
          </article>

          {/* iOS */}
          <article className="border-2 border-mw-cyan p-8 bg-mw-dark-gray text-center">
            <Smartphone className="w-12 h-12 text-mw-cyan mx-auto mb-4" />
            <h2 className="font-mono text-xl font-bold text-mw-light-gray mb-3">iOS</h2>
            <div className="space-y-3">
              <a
                href="https://apps.apple.com/app/meshcore/id6740261886"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-sm text-mw-cyan hover:text-mw-amber transition-colors underline"
              >
                {">"} App Store
              </a>
            </div>
          </article>

          {/* Web Client */}
          <article className="border-2 border-mw-cyan p-8 bg-mw-dark-gray text-center">
            <Globe className="w-12 h-12 text-mw-cyan mx-auto mb-4" />
            <h2 className="font-mono text-xl font-bold text-mw-light-gray mb-3">Web Client</h2>
            <div className="space-y-3">
              <a
                href="https://client.meshcore.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-sm text-mw-cyan hover:text-mw-amber transition-colors underline"
              >
                {">"} Open Web Client
              </a>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
