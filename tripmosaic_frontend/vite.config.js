 /**
  * ============================================================================
  *  Vite Configuration - “Proxy-Friendly” for Cloud/Remote Environments
  *
  *  - Ensures dev server binds to all interfaces (host: 0.0.0.0)
  *  - Uses a fixed, predictable port for easier port mapping (default: 5173)
  *  - Enables strictPort so the process fails fast if the port is in use
  *  - base: './' for relative asset resolution, ideal for local and many cloud IDEs
  *  - Disables service worker (if applicable), to avoid fetch handler warnings
  *  - Includes example proxy config (commented) for backend API forwarding
  *  - Helpful comments for deployment and cloud proxy quirks
  *
  *  If you hit 404 issues for static JS/HMR or assets, check the FAQ at the end.
  * ============================================================================
  */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// For __dirname in ES modules:
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // ---- CLOUD/REMOTE-PROXY FRIENDLY SERVER SETTINGS ----
  server: {
    host: '0.0.0.0', // Listen on all interfaces — necessary for remote containers/cloud workspaces
    port: 5173,       // Set a fixed port so your workspace’s port forwarding is predictable
    strictPort: true, // Fail if port is in use—cloud IDEs sometimes force a single allowed port
    cors: true,
    /* 
     * If your provider requires whitelisted hosts for HMR, add them here:
     * Some cloud IDEs use custom domains, or .cloud.kavia.ai, etc.
     * (Vite’s allowedHosts is experimental and may need to be commented depending on platform)
     * allowedHosts: [
     *   'localhost',
     *   '127.0.0.1',
     *   '0.0.0.0',
     *   '.cloud.kavia.ai',
     *   // add your remote host domain if necessary
     * ]
     */

    /*
     * Example proxy block — uncomment and adjust target to forward /api to a backend during dev.
     * This avoids CORS issues and helps locally when backend is on a different port.
     * proxy: {
     *   '/api': {
     *     target: 'http://localhost:4000', // Replace with your backend URL
     *     changeOrigin: true,
     *     rewrite: path => path.replace(/^\/api/, ''),
     *   },
     * }
     */
  },
  // ---- BASE PATH for RELATIVE ASSETS ----
  // Use '/' (absolute) for production, or './' for best cross-platform dev (relative to index.html)
  // If assets load with 404, try toggling between './' and '/'!
  base: './',
  
  // ---- Remove Service Worker (PWA) By Default ----
  // Vite does not register a service worker out of the box.
  // If using Vite PWA, comment out/uninstall '@vite-pwa/plugin' to disable SW fetch warnings.
  // If your browser reports “A service worker was registered with a fetch handler…” remove PWA plugins.

  // Build output config (adjust as needed)
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})

/**
 * ===================== TROUBLESHOOTING/FYI ===================================
 * 404s for static JS, HMR, or images in cloud IDEs?
 * - Make sure to use 'host: 0.0.0.0' and a fixed port above.
 * - Check that your remote environment is forwarding the right port (often 5173).
 * - If static files load but HMR fails, your proxy might block websocket upgrades (ask admin).
 * - If running behind a reverse proxy, your path prefix might need 'base: "/"' instead of './'.
 * - If you *still* get 404/Fetch issues, try these:
 *    1. Ask your workspace admin for the "allowed hosts" or "ports" on your dev container/service.
 *    2. Try both 'base: "./"' and 'base: "/"' in vite.config.js.
 *    3. Check workspace docs for quirks (e.g., does it rewrite all routes? does it block websocket/HMR?).
 *    4. Clear your browser’s cache (old service workers can persist!).
 *    5. Some cloud workspaces (Gitpod, Codespaces, Kavia AI, StackBlitz) may have unique proxy bugs—check their docs or community forums.
 * 
 * If you use a PWA plugin for service worker: uninstall/disable or comment it out to avoid browser fetch handler warnings!
 * ============================================================================
 */
