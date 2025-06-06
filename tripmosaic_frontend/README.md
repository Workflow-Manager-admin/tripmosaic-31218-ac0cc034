# TripMosaic Frontend (Vistara): AI Travel Itinerary Planner

Vistara (TripMosaic) is a modern AI-powered travel planner that generates customized, day-by-day itineraries and recommendations for your trips—tailored to your destination, budget, interests, pace, and preferences. The web frontend is built to be fast, user-friendly, and developer-extensible using React, Vite, and TailwindCSS.

---

## Documentation Overview

- [Features](#features)
- [Getting Started (Usage & Onboarding)](#installation--usage)
- [Configuration & Environment](#configuration--environment)
- [Customization](#customization)
- [Architecture Summary](#architecture-summary)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [Learn More](#learn-more)
- [License](#license)
- [Known Issues / Troubleshooting](#known-issues--troubleshooting)
- [Comprehensive Architecture & App Documentation](#detailed-documentation)

---

## Features

- **Personalized AI Itinerary Generation:** Day-by-day travel plans based on user input: destination, time, interests, party size, and budget.
- **AI-Powered Recommendations:** Integrates Google Gemini AI and Google/Geoapify APIs to choose attractions, stays, and meals.
- **Budget & Accommodation Advisor:** Suggests hotels/hostels/Airbnbs matched by type and budget.
- **Travel Tips & Local Insights:** Adds tips, weather, and local advice per day/plan section.
- **Hidden Gems & Day Trips:** Uncovers off-beat places and nearby excursions.
- **Seamless UI/UX:** Responsive, theme-aware interface (supports light/dark mode, mobile/desktop).
- **User Auth & Data Storage:** Google OAuth with secure Firebase persistence.
- **Export to PDF:** Download any itinerary as an attractive PDF snapshot.
- **Rich UI Components:** Modals, tables, popovers, cards, and more—easy to extend.

---

## Installation & Usage

### Prerequisites

- Node.js (v18 or later recommended)
- npm (v9 or later recommended)

### Install dependencies

```bash
cd tripmosaic_frontend
npm install
```

### Run the development server

```bash
npm run dev -- --port 5123
```

View at [http://localhost:5123](http://localhost:5123).

> **Google OAuth/Firebase:** The default configuration includes demo API keys and Firebase credentials. To use in production, supply your own in:
>
> - `src/services/AIModel.js`
> - `src/services/GlobalAPI.jsx`
> - `src/services/firebase.js`

### Build for production

```bash
npm run build
```

### Lint

```bash
npm run lint
```

---

## Configuration & Environment

- **Port:** Defaults to 5123 (see `vite.config.js`)
- **Demo API Keys/Secrets:** Change before production deployment.
- **Theme:** Matches system but can be toggled (ThemeContext).
- **Firebase/Google OAuth:** Refer to detailed docs for setup.

---

## Customization

- **Colors/Branding:** Edit in `src/index.css` (TailwindCSS + CSS vars).
- **Component Styling:** Extend or modify components in `/components` or `/components/ui`.
- **Trip Generation Tuning:** Edit prompt logic in `src/utils/constants.js`, `src/services/AIModel.js`.
- **Authentication Method:** Swap Google OAuth for other provider if desired.

---

## Architecture Summary

The frontend is organized for clean separation of UI, API, business logic, and persistent storage.

- **Frontend Stack:** React 18, Vite, TailwindCSS, React Context API, Radix UI primitives, class-variance-authority, lucide-react, react-hot-toast, jsPDF, react-router-dom.
- **External Integrations:** Google Gemini AI (itinerary/plan generation), Google Places, Geoapify, Firebase.
- **State/Data:** ThemeContext for global style; user/trip data managed in Firebase and React hooks.
- **Routing:** Single Page App, client routing for views (main, create, view, my trips).

**For detailed flow, component, and API/service maps, see the [full application and architecture documentation](../kavia-docs/tripmosaic-frontend-architecture.md).**

---

## Folder Structure

```
src/
  App.jsx            # Theme context, router entry
  main.jsx           # React root, provider setup, routing
  assets/            # Images, logos, etc.
  components/        # Feature and UI shared components
    ui/              # Custom UI primitives (dialogs, buttons, etc.)
  context/           # ThemeContext and provider
  hooks/             # Custom React hooks (PDF, auth, fetch, view trip, etc.)
  pages/             # Major route views: Hero, CreateTrip, MyTrips, ViewTrip, About, Testimonials
  services/          # AI, API, Firebase hooks/modules
  utils/             # Constants, static data, video JSON
```

---

## Available Scripts

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint

---

## Contributing

1. Fork/clone this repository.
2. Create a descriptive branch name for features/bugfixes.
3. Follow code style and project structure; write meaningful commit messages.
4. Test thoroughly before opening PRs.

---

## Learn More

- [React documentation](https://reactjs.org/)
- [Vite documentation](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Google Gemini AI](https://ai.google.dev/)
- [Firebase](https://firebase.google.com/docs/)
- [Radix UI Primitives](https://www.radix-ui.com/docs/primitives/overview/getting-started)
- [Geoapify Places API](https://apidocs.geoapify.com/docs/places/)
- [jsPDF](https://github.com/parallax/jsPDF)

---

## License

MIT © Vistara/TripMosaic

---

## Known Issues / Troubleshooting

- **Google/Firebase API keys**: Demo keys only, replace for real/production deployment.
- **Image Loading**: If Google Places API does not return images, a placeholder is shown instead.
- **PDF Export**: Large itineraries may be subject to PDF formatting limitations.

---

## Detailed Documentation

For an in-depth discussion of application workflows, architectural diagrams, developer guidance, component breakdowns, and a mermaid overview, refer to:

➡️ [`kavia-docs/tripmosaic-frontend-architecture.md`](../kavia-docs/tripmosaic-frontend-architecture.md)

This living document covers:
- End-to-end flow and major lifecycle events in the app
- Component and service interaction diagrams
- Developer onboarding and environment setup
- Customization/personalization tips
- API and integration references
- UI/UX architecture, theming, and more

---
