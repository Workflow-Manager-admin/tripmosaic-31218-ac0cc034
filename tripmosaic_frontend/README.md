# TripMosaic Frontend (Vistara): AI Travel Itinerary Planner

Vistara (TripMosaic) is an AI-powered travel planner that generates personalized day-by-day itineraries based on your destination, budget, travel dates, interests, and preferences. Enjoy a seamless, modern, and responsive experience built with React, Vite, and TailwindCSS.

---

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Installation & Usage](#installation--usage)
- [Configuration / Environment](#configuration--environment)
- [Customization](#customization)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [Learn More](#learn-more)
- [License](#license)

---

## Features

- **Personalized Itinerary Generation**: Creates a detailed, day-by-day travel plan based on inputs such as destination, interests, budget, and trip pace.
- **AI-Powered Recommendations**: Utilizes Gemini AI to suggest attractions, restaurants, and accommodations tailored to individual preferences.
- **Budget & Accommodation Matching**: Recommends suitable hotels, hostels, or Airbnbs within entered budget constraints.
- **Travel Tips & Local Insights**: Provides daily tips, local customs, transportation, and weather considerations.
- **Hidden Gems & Day Trips**: Suggests off-the-beaten-path activities and optional nearby excursions.
- **Seamless UI/UX**: Modern and responsive UI/UX using React and TailwindCSS.
- **User Authentication & Data Storage**: Secure user authentication and trip data storage using Firebase.
- **Export to PDF**: Download your generated itinerary as a PDF.

---

## Architecture

**Frontend**:  
- **Framework:** Vite  
- **UI Library:** React 18
- **Styling:** TailwindCSS 3  
- **State Management:** React Context API (Theme)  
- **Authentication:** Google OAuth via @react-oauth/google  
- **External APIs:** Google Gemini AI (generative travel plans), Google Places API (autocomplete, details, photos)  
- **Persistence:** Firebase (for user trips and data)

**Key Structure:**
```
src/
  App.jsx                  # Main entry point
  main.jsx                 # Renders app and sets up context, router
  context/                 # Theme context/provider
  hooks/                   # Custom React hooks (PDF export, trip fetch, etc.)
  components/              # Core and UI components (Navbar, Footer, dialogs, cards)
  pages/                   # Route-based view components (Hero, CreateTrip, ViewTrip, MyTrips)
  services/                # API integrations (AIModel, Places, Firebase)
  utils/                   # Constants and helper files
  assets/                  # Images and static assets
```

**Typical Flow:**
1. User lands on Hero page, authenticates with Google.
2. User fills in trip requirements on CreateTrip form.
3. AI (Gemini) generates itinerary and hotel recommendations.
4. Generated trip is saved in Firebase per user.
5. Trips can be viewed, exported as PDF, or revisited in MyTrips.
6. Theme can be toggled (dark/light).

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

### Start the development server

```bash
npm run dev -- --port 5123
```

Open http://localhost:5123 in your browser.

> **Google OAuth/Firebase:** The app comes pre-configured with demo API keys and Firebase setup. For production, update the API keys inside `src/services/AIModel.js`, `src/services/GlobalAPI.jsx`, and `src/services/firebase.js` with your own credentials.

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

- **Port:** Default dev server port is `5123` (see `vite.config.js`)
- **Theme:** Defaults to system preference, can be toggled between light/dark.
- **API Keys:** See above for updating your own keys.

---

## Customization

- **Brand Colors:** Tailwind & CSS variables in `src/index.css`
- **Component Styles:** Tailwind classes throughout. Custom UI in `/components/ui/`.
- **Trip Planning Logic:** Modify constants, prompt template, or Gemini AI integration in `src/utils/constants.js` and `src/services/AIModel.js`
- **Authentication:** Uses Google OAuth. Can be replaced with other providers.
- **Persistent Data:** Default Firebase project for demo. Swap for your own.

---

## Folder Structure

See [Architecture](#architecture) for high-level breakdown.

Notable folders:
- `src/components/`: Page/layout UI (navbar, cards, dialogs, etc.)
- `src/pages/`: Route-level views (Hero, CreateTrip, MyTrips, ViewTrip, About, Testimonials)
- `src/hooks/`: Custom logic (fetch user, generate PDF, get photo URL, etc.)
- `src/services/`: Firebase, AI, Google Places integration

---

## Available Scripts

- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run lint` - Run ESLint

---

## Contributing

1. Fork and clone this repo.
2. Create a new feature/bugfix branch.
3. Test thoroughly before PR.
4. Adhere to project code style and write descriptive commit messages.

---

## Learn More

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/)
- [Google Gemini AI](https://ai.google.dev/)
- [Firebase Documentation](https://firebase.google.com/docs/)
- [Radix UI Primitives](https://www.radix-ui.com/docs/primitives/overview/getting-started)
- [Geoapify Places API](https://apidocs.geoapify.com/docs/places/)

---

## License

MIT © Vistara/TripMosaic

---

### Known Issues / Troubleshooting

- **Google/Firebase API keys** in this demo are for sample use. For deployment, use your own credentials.
- **Image Loading**: If Google Places fails to return images, default placeholders are used.
- **PDF Export**: Supports most itineraries but may be limited by jsPDF capabilities for very long trips.

---
