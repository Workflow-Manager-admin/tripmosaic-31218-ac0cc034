# TripMosaic Frontend (Vistara): Application & Architecture Documentation

## Overview

TripMosaic (code name: Vistara) is an AI-powered travel itinerary planner that generates highly personalized, day-by-day travel plans for users. It leverages cutting-edge AI (Gemini) to simplify trip planning, offer curated accommodations, and provide travel recommendations within a seamless and responsive web application interface.

Users specify their destination, budget, travel dates, headcount, pace, and preferences. The system then produces a detailed itinerary, including daily activities, hidden gems, food, and accommodation recommendations—all tailored to user input and optimized for convenience and enjoyment.

---

## Application Features

- **Personalized Itinerary Generation:** Users receive unique, day-by-day plans based on their preferences (destination, duration, budget, travel party, interests, etc.).
- **AI-Powered Recommendations:** Gemini AI and Google APIs are used to recommend attractions, food, accommodations, and to generate the itinerary with up-to-date, locally relevant suggestions.
- **Budget & Accommodation Matching:** Smart hotel/hostel/Airbnb suggestions match the user's budget and group type.
- **Dynamic Travel Tips & Local Insights:** The generated plan includes tips, local customs, weather, and essential information for each day.
- **Hidden Gems & Day Trips:** Recommends less-known attractions and nearby excursions for discovery beyond the tourist trail.
- **Modern Seamless UI/UX:** Built using React, Vite, and TailwindCSS, the app is highly responsive and visually appealing, supporting both dark and light modes.
- **Secure Authentication & Data Storage:** Google OAuth authentication via @react-oauth/google and Firebase user trip storage, ensuring privacy and persistence.
- **PDF Export:** Users can export itineraries directly as PDF documents.
- **Interactive & Modular Experience:** Features a highly modular component structure for maintainability and extension.
- **Integrated Google Places API:** Enables accurate location search, autocomplete, and photo suggestions.

---

## Technology Stack

- **Frontend Framework:** React 18 (with functional components)
- **Build Tooling & Dev Server:** Vite
- **Styling:** TailwindCSS 3, plus CSS variable-based theming
- **State Management:** React Context API (primarily for theme management)
- **Authentication:** Google OAuth (via @react-oauth/google)
- **AI Integration:** Google Gemini AI (travel plan and recommendation generation)
- **Geodata & Photos:** Google Places API, Geoapify Places API
- **Data Persistence:** Firebase Firestore (per-user itinerary storage)
- **UI Component Enhancements:** Radix UI primitives, class-variance-authority, lucide-react, react-hot-toast for notifications
- **PDF Export:** jsPDF, jspdf-autotable
- **Routing:** react-router-dom (v6)
- **Development Tooling:** ESLint, PostCSS, TailwindCSS Animate, Vercel config for deployments

---

## High-Level Architecture and Flow

```mermaid
flowchart TD
    A[User accesses app] --> B[Authentication (optional)]
    B --> C[Trip input form (destination, dates, party, budget)]
    C --> D[AI (Gemini) generates itinerary & hotel options]
    D --> E[Data stored in Firebase (with user context)]
    E --> F[User view: View, Export PDF, or Revisit Past Trips]
    F --> G[UI: Responsive React + Tailwind Components]
    G --> H[Context APIs: Theme, Toast Notifications]
    E -.->|Google Place & Geoapify APIs| I((Photos, Place Details))
    D -.-> J((Gemini AI))
```

1. The user lands on the Hero Page (src/pages/Hero.jsx) and is introduced to Vistara.
2. The user can sign in with Google (for trip persistence) and moves to the trip creation form (src/pages/CreateTrip.jsx).
3. After filling in trip details, the frontend requests trip generation from Gemini AI via defined prompt templates.
4. Gemini AI returns a structured JSON response with hotel and itinerary information. Additional place details and photo URLs are gathered using Google Places or Geoapify APIs.
5. The final plan is displayed in a clean, organized UI, and saved to Firebase (if signed in).
6. The user can view current or past trips (src/pages/ViewTrip.jsx, src/pages/MyTrips.jsx), and export itineraries to PDF using jsPDF-based hooks.
7. Theme context allows switching between dark and light mode globally.

---

## Major Component Structure

### High-Level Folder Structure

```
tripmosaic_frontend/
  src/
    App.jsx             # Theme context, minimal router entry
    main.jsx            # React root, provider setup, routing
    assets/             # Static images
    components/         # Feature + shared UI components
      ui/               # Radix-powered/UI primitives
    context/            # Theme management
    hooks/              # Custom React hooks
    pages/              # Hero, CreateTrip, ViewTrip, MyTrips, About, Testimonials
    services/           # AI, Places, API, Firebase integration
    utils/              # Constants, static data
```

### Core Components/Pages

- **Navbar/Footer:** App-wide navigation and theming controls (Header, auth state, theme switch, Footer).
- **Hero:** Landing page, branding, CTA to plan a new trip.
- **About, Testimonials:** Brand messaging and social proof.
- **CreateTrip:** Main form—location autocomplete, days, travel party, budget selectors.
- **ViewTrip:** Shows completed itinerary, hotels (hotel cards), attractions (place cards), travel tips, PDF export button.
- **MyTrips:** User dashboard; revisit/export previous trips.
- **Authentication Dialog:** Modal for Google OAuth sign-in.
- **Dynamic Form Controls:** Inputs, multi-selection, and specialized UI for smooth data entry.
- **UI Library:** Custom and Radix UI-based components for dialogs, popovers, buttons, skeletons, and tables.
- **Context Providers:** Theme management (dark/light), with context wrapping full app.

---

## Component, Data & API Relationships

- **Theme Context:** (src/context/ThemeContext/ThemeContextProvider) – governs global styling.
- **User Auth:** (src/hooks/useGetUserData, Google OAuth) – handles sign-in, state, and persistent user context.
- **Trip Data Handling:**
  - **Generation:** AI prompt (src/services/AIModel.js) crafted based on user form input.
  - **Persistence:** Trips are saved/retrieved using Firebase (src/services/firebase.js).
  - **PDF Export:** jsPDF hooks (src/hooks/useGeneratePDF.js, TripPdf.jsx) allow exporting itineraries.

- **Place/Hotel Images:** Fetched dynamically using Google/Geoapify APIs (src/services/GlobalAPI.jsx, src/hooks/usePhotoURL.js).

---

## Developer Onboarding & Workflow

### Prerequisites

- Node.js v18+ and npm v9+ installed

### Setup

1. Clone or download the repository.
2. Navigate to `tripmosaic_frontend/`.
3. Install dependencies:
    ```bash
    npm install
    ```
4. To start locally:
    ```bash
    npm run dev -- --port 5123
    ```
   (View app at http://localhost:5123)

### Environment Variables & Configuration

- The application is pre-configured with demo API keys for development; update relevant keys in:
    - `src/services/AIModel.js` (Gemini API Key)
    - `src/services/GlobalAPI.jsx` (Google Places API Key)
    - `src/services/firebase.js` (Firebase credentials)
- For production, ensure your own keys are used.

### Code Quality & Linting

- Lint and fix issues with:
    ```bash
    npm run lint
    ```
- Project uses ESLint with React, TypeScript, and recommended rules.

### Customization

- **Look & Feel:** Change brand colors in `src/index.css` with Tailwind variables.
- **Component Expansion:** Add new UI elements in `/components` and `/components/ui`, following the existing pattern.
- **AI Prompt Logic:** Update trip generation parameters/templates in `src/utils/constants.js` and `src/services/AIModel.js`.

### Known Issues & Troubleshooting

- Some API keys are for demo only. Replace with production keys for deployment.
- If hotel/place photos don't load, fallback placeholders are used.
- PDF export is robust, but extremely large trips may cause formatting issues due to jsPDF limitations.
- Geoapify/Google Place errors will appear in the browser console or UI notifications.

---

## Mermaid Diagram: Component/Service Overview

```mermaid
graph TD
  Subgraph UI
    App
    Navbar
    Footer
    Hero
    About
    CreateTrip
    ViewTrip
    MyTrips
    Testimonials
    InfoSection
    Hotel
    PlaceCard
    UserTripCard
    ThemeToggle
    TripPDF
  end

  App --> Navbar
  App --> Footer
  App --> Hero
  Hero --> About
  App --> Router
  Router --> CreateTrip
  Router --> ViewTrip
  Router --> MyTrips
  CreateTrip --> AIModelService
  CreateTrip --> GooglePlacesAPI
  CreateTrip --> Firebase
  ViewTrip --> PDFExport
  ViewTrip --> GooglePlacesAPI
  MyTrips --> Firebase
  Navbar --> ThemeContext
  Footer --> ThemeContext

  subgraph "Backend/3rd Party (via API)"
    AIModelService["Gemini AI"]
    Firebase["Firebase"]
    GooglePlacesAPI["Google/Geoapify/Places API"]
  end

  ThemeToggle --> ThemeContext
  InfoSection --> TripPDF
```

---

## References

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Google Gemini AI](https://ai.google.dev/)
- [Firebase](https://firebase.google.com/docs/)
- [Radix UI](https://www.radix-ui.com/)
- [Geoapify Places](https://apidocs.geoapify.com/)
- [jsPDF](https://github.com/parallax/jsPDF)

---

## License

MIT © Vistara/TripMosaic

