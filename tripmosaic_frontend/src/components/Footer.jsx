/**
 * ============================================================================
 *  Generated/curated by Kavia AI: Footer.jsx - Application Footer and Social Links
 *  Renders dynamic copyright, developer credit, and social media links.
 *  Styles and colors adapt to theme. All links are external (new tab, secured).
 * ============================================================================
 */

import { FOOTER_DESCRIPTION } from "../utils/constants";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// PUBLIC_INTERFACE
/**
 * Footer component displays copyright, developer, and social icons at the page bottom.
 * Dynamically switches styles for dark/light theme. All social icons link out securely.
 */
const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`py-8 mt-12 border-t transition-all duration-300 ${
        theme === "dark"
          ? "border-orange-600 bg-gray-900 text-gray-100"
          : "border-orange-400 bg-orange-50 text-orange-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          {/* App-wide footer description - see src/utils/constants.js */}
          <p className={`text-sm lg:text-base font-medium max-w-2xl ${
            theme === "dark" ? "text-gray-300" : "text-orange-800"
          }`}>
            {FOOTER_DESCRIPTION}
          </p>
          
          {/* Social Icons/Links (open new tab, ARIA-labeled for a11y) */}
          <div className="flex gap-4 mt-6">
            <a 
              href="https://github.com/Cyb3rHash" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                theme === "dark" 
                  ? "text-gray-300 hover:bg-gray-700" 
                  : "text-orange-700 hover:bg-orange-100"
              }`}
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/Cyber__Hash" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                theme === "dark" 
                  ? "text-gray-300 hover:bg-gray-700" 
                  : "text-orange-700 hover:bg-orange-100"
              }`}
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/harish-v-500249360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                theme === "dark" 
                  ? "text-gray-300 hover:bg-gray-700" 
                  : "text-orange-700 hover:bg-orange-100"
              }`}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/liberosist_007" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors ${
                theme === "dark" 
                  ? "text-gray-300 hover:bg-gray-700" 
                  : "text-orange-700 hover:bg-orange-100"
              }`}
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
          
          {/* Dynamic copyright */}
          <p className={`mt-6 text-xs ${
            theme === "dark" ? "text-gray-400" : "text-orange-600"
          }`}>
            &copy; {new Date().getFullYear()} Vistara. All rights reserved.
          </p>
          
          {/* Developer credit */}
          <p className={`mt-2 text-xs ${
            theme === "dark" ? "text-gray-500" : "text-orange-500"
          }`}>
            Developed by <span className="font-medium">CyberHash</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;