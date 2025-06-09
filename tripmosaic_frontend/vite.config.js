/**
 * Vite Configuration for TripMosaic-31218 (Kavia AI)
 * Kavia AI Badging: Deployment-ready config with explicit allowedHosts for secure internal access.
 * -----------------------------------------------------------------------------
 * Features: 
 *   - React & TailwindCSS integration
 *   - Path alias for "@/src"
 *   - COMPLIANT: Allows 'vscode-internal-175-beta.beta01.cloud.kavia.ai' internal host for deployment
 *   - Uncomment/modify allowedHosts for custom deployment needs
 * 
 * © 2025 Kavia AI | tripmosaic-31218-ac0cc034
 * -----------------------------------------------------------------------------
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
    allowedHosts: [
      // KAVIA AI deployment: Allow access from cloud internal beta
      "vscode-internal-175-beta.beta01.cloud.kavia.ai",
      "vscode-internal-1098-beta.beta01.cloud.kavia.ai",
    ],
  },
})
