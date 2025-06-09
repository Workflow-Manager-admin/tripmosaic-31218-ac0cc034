/**
 * Vite Configuration for TripMosaic-31218 (Kavia AI)
 * Updated for Vite v5—secure and modern host allowance.
 * --------------------------------------------------------------------------
 * This config enables all hosts for cloud/editor development (host bug fix).
 * - Path alias for '@/src'
 * - React & TailwindCSS plugin integration
 *
 * © 2025 Kavia AI | tripmosaic-31218-ac0cc034
 * --------------------------------------------------------------------------
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  alias: {
    "@": path.resolve(import.meta.url, "./src"),
  },
  server: {
    host: true, // Allow serving Vite on all interfaces (enables cloud/external host access)
    // Removal of server.allowedHosts — not supported in Vite 4/5
    // To allow remote hosts such as vscode-internal-1098-beta.beta01.cloud.kavia.ai, set host: true or host: "0.0.0.0"
    // For specific host allowance, reverse proxy or firewall configuration may be required.
  },
})
