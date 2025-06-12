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

/**
 * Vite Configuration for TripMosaic-31218 (Kavia AI)
 * Reverted to Vite v5.x—uses allowedHosts as per pre-v6 server host restriction.
 * This config enables all required hosts for cloud/editor development.
 * - Path alias for '@/src'
 * - React & TailwindCSS plugin integration
 *
 * © 2025 Kavia AI | tripmosaic-31218-ac0cc034
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
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true,
    allowedHosts: [
      "vscode-internal-988-beta.beta01.cloud.kavia.ai",
      "localhost",
      "127.0.0.1",
      ".cloud.kavia.ai",
      "0.0.0.0"
    ],
  },
})
