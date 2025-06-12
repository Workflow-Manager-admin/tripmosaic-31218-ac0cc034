/**
 * Vite Configuration for TripMosaic-31218 (Kavia AI)
 * Updated for Vite v6—uses hostRules for modern host restriction.
 * --------------------------------------------------------------------------
 * This config enables all required hosts for cloud/editor development.
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

// ESM-safe directory resolution for use in Vite config:
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // support "@" alias for src resolution
    },
  },
  server: {
    /**
     * Vite 6 config: use hostRules instead of host/allowedHosts.
     * Allow hosts that previously were set:
     */
    hostRules: [
      "vscode-internal-67-beta.beta01.cloud.kavia.ai",
      "localhost",
      "127.0.0.1",
      ".cloud.kavia.ai",         // Wildcard to cover similar editors/host patterns
      "0.0.0.0"
    ],
  },
})
