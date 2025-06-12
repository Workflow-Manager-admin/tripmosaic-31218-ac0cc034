# TripMosaic Frontend: Diagnosis of Persistent 404 Errors (main.jsx, client, @react-refresh) in Remote/Cloud Deployment

**Date:** July 2024  
**Author:** Kavia AI Diagnostic Agent

---

## Overview

Persistent 404 errors for static assets (`main.jsx`, `client`, `@react-refresh` and HMR files) are occurring **only in the remote/cloud environment** (e.g., Codespaces, Kavia AI workspace, Vercel, etc.), while the local setup works fine. This document pinpoints root causes based on the source, config files, and deployment setup.

---

## Key Checks & Findings

### 1. **Vite Base Path and Output Settings**

- **`vite.config.js`:**
  - `base: './'` (correct for many cloud/dev environments, but may not work if deployed behind certain reverse proxies requiring absolute `/` or public URL prefix).
  - `outDir: 'dist'`, standard, matches most deploy platforms.
  - **Server binding:** 
    - `host: '0.0.0.0'` → CORRECT for cloud environments, ensures listening on all interfaces for proxy port forwarding.
    - `strictPort: true` on `5173` → predictable and good for mapped ports.
    - `cors: true`
  - **Aliases:** Resolve `@` to `src` (fine).
  - **HMR host configuration:** *Not specified*, but not necessary unless using custom domains.
  - **Service Worker:** Explicitly commented out — no PWA plugin active by default.

- **Config advice present**:  
  - Config comments recommend toggling between `'./'` (relative) and `'/'` (absolute) for `base` if 404 issues persist.
  - FAQ highlights the exact 404/HMR issue.

**ASSESSMENT:**  
The `base` value of `'./'` is correct for most cloud IDEs, unless the provider expects all requests to be rooted at `/`. For true reverse proxies or custom cloud URLs, sometimes `'/'` or a public URL prefix is needed.

---

### 2. **Static Asset Structure**

- **index.html** is at project root, references `/src/main.jsx`.
- No `public/` directory visible, but all references are relative (should be handled by Vite).
- No `service-worker.js` present to cause conflicts.

- **`dist/`** folder is not visible in checked-in files (expected for unbuilt dev env).

- **Static files and dev entrypoint:**
  - `<script type="module" src="/src/main.jsx"></script>` in `index.html`
  - All main assets should be resolved internally by Vite dev server.

**ASSESSMENT:**  
Build/dev output is standard. If dev server isn't running, or proxy is misrouting static/HMR requests, 404s will occur for these paths.

---

### 3. **Cloud Proxy / Dev Platform Routing**

- **`vercel.json`** present:
  - ```
    {
      "rewrites": [
        { "source": "/(.*)", "destination": "/" }
      ]
    }
    ```
  - *This is necessary for SPA routing, but on a dev server, the proxy must forward all `.js`, `/@vite/client`, and `/@react-refresh` websocket+static requests to Vite. If Vercel's local preview or the cloud IDE is not forwarding WebSocket or static files, HMR will break.*

- **Server binds to `'0.0.0.0'` and predictable port.**
- **No evidence of misconfigured proxy block for backend API; comments suggest how to do so if needed.**

**ASSESSMENT:**  
If remote dev environment doesn't auto-proxy HMR and static asset paths to the Vite dev server, 404s will be seen.

---

### 4. **Service Worker Artifacts**

- No `ngsw-worker.js`, `service-worker.js`, or Workbox/PWA plugin registered in config.
- No registration in `main.jsx` or app entrypoint.

**ASSESSMENT:**  
Unlikely to be a service worker cache issue **if this is a clean deploy**. However, in browser, force reload and clear caches if ever deployed previously with PWA.

---

### 5. **Config & Folder Structure Differences**

- **`package.json`**, `vite.config.js`, and folder structure are consistent with a Vite+React project.
- All referenced assets appear present.
- Alias configuration is robust; path use is consistent.
- No custom `"homepage"` or `"publicUrl"` field in `package.json`.

**ASSESSMENT:**  
No hidden config drift between environments seen.

---

## **Root Causes & Actionable Findings**

### Likely Causes for 404/HMR Failures in Cloud:

1. **Incorrect `base:` config for host/proxy setup:**  
   - Some cloud systems (e.g., Codespaces, certain proxies, unusual port mapping) require `base: '/'` instead of `'./'`.
   - Try switching the `vite.config.js` `base` value if 404s persist.

2. **Cloud Dev Proxy NOT Forwarding All Requests:**  
   - If Vite dev server is running, but the cloud environment exposes only `/` and some static, but not `/@vite`, `/src/`, `/node_modules/`, etc., then HMR and static assets break.
   - Solution: 
     - Ensure dev server is started on all interfaces (`host: '0.0.0.0'`) and correct port.
     - Check cloud dev platform documentation for special proxy settings or known Vite/HMR caveats.
     - For Vercel local previews, *dev server must run separately and be mapped*.

3. **LEFTOVER Service Worker in Browser Cache:**  
   - From prior PWA builds. Always clear cached service workers using DevTools Application tab.

4. **Entry path differences (e.g., leading `/src/` vs. `src/`):**  
   - Local file serving may be more lenient than cloud proxy.
   - If changing `base` doesn't help, change `<script src="/src/main.jsx">` to `./src/main.jsx` or similar.

---

## **Summary Table**

| Aspect                      | Local (Works) | Remote/Cloud (404s) | Likely Root Cause                      |
|-----------------------------|:-------------:|:-------------------:|----------------------------------------|
| Vite `base`                 | `'./'`        | `'./'` or `'/'`     | May need switching for your cloud IDE   |
| Dev Server Host & Port      | `localhost:5173` | `0.0.0.0:5173`   | Usually correct; check port mapping     |
| Asset/Index Paths           | OK            | OK/404              | Cloud proxy may block `/src`, `/@vite`  |
| Service Worker Present      | No            | No                  | Possible old SW in cache—clear it       |
| SPA Route Rewrites          | not needed dev | yes (see vercel.json)| For prod/deploy only, fine for now     |

---

## **Next Steps for a Robust Fix**

1. **Try `base: '/'` in vite.config.js and re-test in remote.**
2. **Check cloud dev proxy settings or workspace docs for correct port/HMR mapping.**
3. **Instruct users to force-refresh/clear browser service workers.**
4. **Validate `index.html` entrypoint path matches cloud proxy needs.**
5. **Keep build outDir (`dist`) and structure as-is.**

---

## References

- [Vite official deployment troubleshooting](https://vitejs.dev/guide/static-deploy.html)
- [SPA proxying in cloud workspaces](https://vitejs.dev/guide/backend-integration.html#backend-proxy)
- [PWA/service worker HMR issues](https://vite-pwa-org.netlify.app/guide/troubleshooting.html)
- [Vercel SPA rewrites](https://vercel.com/guides/serving-a-single-page-app-on-vercel)

---

*End of diagnostic report.*
