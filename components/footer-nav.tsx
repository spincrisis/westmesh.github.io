import { MessageSquare, MapPin, Zap, FolderOpen } from "lucide-react"

export function FooterNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-muted border-t border-mw-cyan">
      <div className="container mx-auto px-2 py-3">
        <ul className="flex items-center justify-center gap-2 sm:gap-6 font-mono text-xs sm:text-sm">
          {/* Discord Link */}
          <li>
            <a
              href="https://discord.gg/y9k894BF6A"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-foreground hover:text-mw-cyan transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Discord</span>
            </a>
          </li>

          {/* Apps Link */}
          <li>
            <a
              href="https://meshcore.co.uk/apps.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-foreground hover:text-mw-cyan transition-colors"
            >
              <FolderOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Apps</span>
            </a>
          </li>

          {/* Web Flasher Link */}
          <li>
            <a
              href="https://flasher.meshcore.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-foreground hover:text-mw-cyan transition-colors"
            >
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">Flasher</span>
            </a>
          </li>

          {/* Map Link */}
          <li>
            <a
              href="https://map.meshcore.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-foreground hover:text-mw-cyan transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Map</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
