# MeshWest

**Western Canada's MeshCore Community**

MeshWest is a decentralized LoRa/MeshCore network enabling text communication without cell, internet, or power. Built for emergency preparedness, backcountry safety, rural connectivity, and privacy-first off-grid communications across British Columbia and Alberta.

## Features

- **Off-Grid Messaging** — Text between nodes up to kilometres apart
- **No Infrastructure Required** — Works without cell service, internet, or grid power
- **End-to-End Encryption** — Secure, private communications by default
- **Self-Healing Network** — Peer-to-peer mesh with no single point of failure

## Getting Started

1. Join our [Discord](https://discord.gg/meshwest)
2. Get a LoRa-compatible device (e.g., WisMesh Tag)
3. Flash [MeshCore firmware](https://flasher.meshcore.co.uk/)
4. Configure your regional frequency settings
5. Start messaging

## Regional Frequency Settings

| Region | Frequency | Bandwidth | SF | CR |
|--------|-----------|-----------|----|----|
| Vancouver / Lower Mainland | 910.525 MHz | 62.5 kHz | 7 | 5 |
| Vancouver Island | 910.525 MHz | 62.5 kHz | 7 | 5 |
| BC Interior / Okanagan | 910.525 MHz | 62.5 kHz | 7 | 5 |
| Alberta / Calgary / Edmonton | 910.525 MHz | 62.5 kHz | 7 | 5 |

## Development

```bash
npm install
npm run dev
```

Build for GitHub Pages:

```bash
npm run build
```

Static output goes to `/out`.

## License

MIT © 2026 MeshWest Community
