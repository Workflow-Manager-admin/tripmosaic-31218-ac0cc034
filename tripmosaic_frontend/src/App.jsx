/**
 * ============================================================================
 *  Generated/curated by Kavia AI: App.jsx - Main Root Application Component
 *  Handles the overall page styling, theme switch, and launches the Hero section.
 *  Fully commented for developer clarity.
 * ============================================================================
 */

import Hero from "./pages/Hero";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

// PUBLIC_INTERFACE
/**
 * The App component sets dark/light theme and renders the home/landing section.
 * Theming is handled reactively via context (ThemeContext).
 */
function App() {
  // theme: true = dark mode, false = light mode
  const { theme } = useContext(ThemeContext);

  return (
    <div
      // Changes background and text colors based on theme
      className={`min-h-screen transition-colors duration-300 ${
        theme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }`}
    >
      <Hero />
    </div>
  );
}

export default App;
