# tripmosaic-31218-ac0cc034

---

## Vistara/TripMosaic Frontend Environment Setup Guide

This project uses [Vite](https://vitejs.dev/) with React and TailwindCSS.

---

### Quick Start

- All frontend code is inside `/tripmosaic_frontend`.
- Run development server:
  ```sh
  cd tripmosaic_frontend
  npm install
  npm run dev
  ```
  Locally: open [http://localhost:5173](http://localhost:5173), or use your cloud IDE's provided preview URL for port 5173.

---

### Configuration for Working Asset and SPA Routing (All Environments)

#### 1. Vite base config (vite.config.js)
- **`base: '/'`** is set for correct asset/hot reload serving (this is REQUIRED for most cloud IDEs and production!).
  - If using a reverse proxy with a path prefix, set base accordingly (e.g. `base: '/subpath/'`).

#### 2. Dev server settings
- **`host: '0.0.0.0'`** — listens on all interfaces for cloud proxy/port forward.
- **`port: 5173`** — standard Vite port/matches most cloud setups.
- **`strictPort: true`** — process will fail if port is unavailable.

#### 3. Entrypoint paths (index.html)
- The script src path is now **`src/main.jsx`** relative to index.html — this is compatible with both prod and dev when base is `/`.

#### 4. Production Deployments (e.g., Vercel, Netlify, static S3)
- All static assets must be served from `/dist` with `/` as the site root.
- `vercel.json` includes the SPA rewrite:
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/" }
    ]
  }
  ```
- This rule ensures that all client-side routes work via SPA fallback.

#### 5. Cloud IDE/Workspace Remediation

- If assets or `/src/main.jsx`, `/@vite/client`, `/@react-refresh` return 404:
  - Confirm you are running `npm run dev` and your port 5173 is exposed/public.
  - Hard-refresh your browser, clear service workers and cache if switching between `base` values.
  - If Hot Module Reloading (HMR) fails, it's likely due to WebSocket forwarding not working — check your workspace documentation ("WebSocket", "Vite HMR", "proxy").
  - If all else fails, try both `base: '/'` and `base: './'` in `vite.config.js` (the first works for almost all setups).

- Codespaces/Gitpod/Kavia: expose port 5173, use `/` as base, clear SW cache after switching base.

#### 6. Building for Production

```sh
cd tripmosaic_frontend
npm run build
# Output will be in dist/ — deploy the contents of dist/ using your SPA host of choice
```

---

### Troubleshooting Checklist

| Environment         | Required           | Notes                                 |
| ------------------- | ----------------- | -------------------------------------- |
| Local (npm run dev) | base: '/'         | localhost:5173                        |
| Cloud/IDE/Proxy     | base: '/'         | Port 5173 must be exposed and public   |
| Production/Static   | base: '/'         | SPA fallback or rewrite is mandatory   |
| Codespaces/Gitpod   | base: '/'         | Clear old cache/HMR may need refresh   |

**If you still get 404 errors for assets or HMR/client:**
- Check your dev URL (does it match Vite port?)
- Try a different browser/incognito
- Try both `base: '/'` and `base: './'` (rarely needed)
- Consult workspace docs for SPA proxy, allowed hosts, or ask support

---

### Summary Table

| Aspect                    | Local (OK) | Remote/Cloud (OK) | Production (OK)            |
|---------------------------|:----------:|:-----------------:|----------------------------|
| Vite base                 | /          | /                 | /                          |
| index.html entrypoint src | src/main.jsx| src/main.jsx      | src/main.jsx               |
| Dev Server Host/Port      | 127/0.0.0.0|  0.0.0.0          | n/a                        |
| SPA Rewrites Needed       | No         | No                | Yes (see vercel.json)      |
| HMR/WebSocket             | Yes        | Check proxy docs  | n/a                        |

---

For detailed deployment and architecture, see `kavia-docs/deploy-diagnosis-tripmosaic-frontend-404.md`.
