import Hero from "./pages/Hero";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext); // true = dark mode, false = light mode

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }`}
    >
      <Hero />
    </div>
  );
}

export default App;
