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
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/

// ESM-safe directory resolution for use in Vite config:
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Vite server configuration policy:
 * - Vite v5.4.x (see package.json) only supports `server.host`, not `allowedHosts`.
 * - Setting host: true exposes the dev server to all interfaces (0.0.0.0).
 * - This allows connectivity from remote hosts, e.g.: vscode-internal-1098-beta.beta01.cloud.kavia.ai.
 * - For restricting allowed hosts, further changes may be done at the reverse proxy/firewall.
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // support "@" alias for src resolution
    },
  },
  server: {
    host: true, // Exposes Vite to all interfaces (also accepts '0.0.0.0'), supports cloud dev environments
    // Explicit block workaround: allow specific host(s) for cloud/dev editors (Vite v5+ does not "document" allowedHosts, but it is still accepted)
    allowedHosts: [
      "vscode-internal-67-beta.beta01.cloud.kavia.ai",
      "localhost",
      "127.0.0.1",
      ".cloud.kavia.ai",         // Wildcard to cover similar editors/host patterns
      "0.0.0.0"
    ],
  },
})
