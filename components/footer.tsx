import { MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t-2 border-mw-cyan py-12 mb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono font-bold text-mw-cyan text-xl tracking-wider">MESHWEST</span>
            </div>
            <p className="font-mono text-sm text-mw-gray">Building resilient communications across Western Canada, one packet at a time.</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-mono text-mw-cyan font-bold mb-4">{":[LINKS]"}</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a
                  href="https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mw-gray hover:text-mw-cyan transition-colors"
                >
                  {"> Wiki"}
                </a>
              </li>
              <li>
                <a
                  href="https://meshcore.co.uk/apps.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mw-gray hover:text-mw-cyan transition-colors"
                >
                  {"> Apps"}
                </a>
              </li>
              <li>
                <a
                  href="https://flasher.meshcore.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mw-gray hover:text-mw-cyan transition-colors"
                >
                  {"> Web Flasher"}
                </a>
              </li>
              <li>
                <a
                  href="https://map.meshcore.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mw-gray hover:text-mw-cyan transition-colors"
                >
                  {"> Node Map"}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/spincrisis/westmesh.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mw-gray hover:text-mw-cyan transition-colors"
                >
                  {"> GitHub MeshWest"}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/meshcore-dev/MeshCore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mw-gray hover:text-mw-cyan transition-colors"
                >
                  {"> GitHub MeshCore"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-mw-cyan font-bold mb-4">{":[CONNECT]"}</h3>
            <a
              href="https://discord.gg/meshwest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-mw-cyan text-mw-cyan hover:bg-mw-cyan hover:text-primary-foreground transition-colors font-mono font-bold"
            >
              <MessageSquare className="w-5 h-5" />
              <span>JOIN DISCORD</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-mw-cyan pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-mw-gray max-w-3xl text-center sm:text-left leading-relaxed">
            &copy; 2026 MeshWest. All rights reserved. MeshWest is a decentralized community that organizes
            information. The network is supplied, operated, and maintained by independent users and members, and MeshWest
            does not control or supervise the actions of its members, the placement or operation of any equipment, or the
            configuration or use of the network. This network is provided &quot;as is&quot; without any warranty of any kind,
            express or implied. MeshWest is not intended to be used as a life-saving or emergency service. In an
            emergency, dial 911 or your local emergency number. Your use of this network is solely at your own risk.
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <span className="font-mono font-bold text-mw-cyan text-sm tracking-wider">MESHWEST</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
