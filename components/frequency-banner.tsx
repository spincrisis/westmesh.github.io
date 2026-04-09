"use client"

import Link from "next/link"
import { useState } from "react"
import { X } from "lucide-react"

export function FrequencyBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const frequencies = [
    {
      region: "Vancouver / Lower Mainland",
      freq: "910.525",
      bandwidth: "62.5kHz",
      spreadFactor: "7",
      codingRate: "5",
    },
    {
      region: "Vancouver Island",
      freq: "910.525",
      bandwidth: "62.5kHz",
      spreadFactor: "7",
      codingRate: "5",
    },
    {
      region: "BC Interior / Okanagan",
      freq: "910.525",
      bandwidth: "62.5kHz",
      spreadFactor: "7",
      codingRate: "5",
    },
    {
      region: "Alberta / Calgary / Edmonton",
      freq: "910.525",
      bandwidth: "62.5kHz",
      spreadFactor: "7",
      codingRate: "5",
    },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-muted text-foreground">
        <div className="container mx-auto px-4 py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity shrink-0">
              <span className="font-mono font-bold text-mw-cyan text-sm sm:text-base tracking-wider">MESHWEST</span>
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="font-mono text-xs sm:text-sm text-mw-cyan hover:text-mw-amber transition-colors cursor-pointer"
            >
              {">"} Click for setup information in your area
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-muted border-2 border-mw-cyan p-6 sm:p-8 max-w-4xl w-full mx-4 shadow-[0_0_30px_rgba(0,212,255,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-mono text-xl sm:text-2xl text-mw-cyan font-bold">
                {":[REGIONAL FREQUENCY SETTINGS]"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-mw-cyan hover:text-mw-amber transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Frequency Table */}
            <div className="overflow-x-auto">
              <table className="w-full font-mono text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-mw-cyan">
                    <th className="text-left py-3 px-4 text-mw-cyan">Region</th>
                    <th className="text-left py-3 px-4 text-mw-cyan">Frequency</th>
                    <th className="text-left py-3 px-4 text-mw-cyan">Bandwidth</th>
                    <th className="text-left py-3 px-4 text-mw-cyan">Spread Factor</th>
                    <th className="text-left py-3 px-4 text-mw-cyan">Coding Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {frequencies.map((freq, index) => (
                    <tr key={index} className="border-b border-mw-cyan/30 hover:bg-mw-cyan/10 transition-colors">
                      <td className="py-3 px-4 text-foreground font-bold">{freq.region}</td>
                      <td className="py-3 px-4 text-foreground">{freq.freq}</td>
                      <td className="py-3 px-4 text-foreground">{freq.bandwidth}</td>
                      <td className="py-3 px-4 text-foreground">{freq.spreadFactor}</td>
                      <td className="py-3 px-4 text-foreground">{freq.codingRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 text-center">
              <p className="font-mono text-xs text-muted-foreground">
                Configure your device with the settings for your region. All regions use ISM 915 band (Canada/US).
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
