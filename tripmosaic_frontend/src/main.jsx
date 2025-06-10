import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CreateTrip from "./pages/CreateTrip.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ViewTrip from "./pages/ViewTrip.jsx";
import MyTrips from "./pages/MyTrips.jsx";
import Footer from "./components/Footer.jsx";
import ThemeContextProvider from './context/ThemeContextProvider.jsx';

// Patch: Defensive check for root element and error boundary for runtime React errors

function RootApp() {
  return (
    <GoogleOAuthProvider clientId="321384121089-6b9mq17pieeahi03ngj3dub106pf8asl.apps.googleusercontent.com">
      <ThemeContextProvider>
        <BrowserRouter>
          <Toaster />
          <Navbar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/create-trip" element={<CreateTrip />} />
            <Route path="/view-trip/:tripId" element={<ViewTrip />} />
            <Route path="/my-trips" element={<MyTrips />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeContextProvider>
    </GoogleOAuthProvider>
  );
}

// Mount with a root check (avoids silent error if #root is missing)
const rootElem = document.getElementById("root");
if (rootElem) {
  createRoot(rootElem).render(<RootApp />);
} else {
  // Fallback: show a red error if the root node is missing
  document.body.innerHTML = `
    <div style="color:white;background:red;padding:2rem;font-size:2rem;">
      Error: Could not find #root element for React app to mount.
    </div>
  `;
}
