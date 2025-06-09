import { useContext } from "react";
import { TESTIMONIALS } from "../utils/constants";
import ThemeContext from "../context/ThemeContext";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme;

  const cardStyle = isDark
    ? "bg-[#1F1F1F] text-white border border-[#333] shadow-lg"
    : "bg-white text-gray-900 border border-gray-200 shadow-md";

  return (
    <section
      className={`py-20 px-6 lg:px-24 transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-[#FFF8F4] text-black"
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#FF5722]">
          {TESTIMONIALS.title}
        </h2>
        <p className="mt-4 text-base lg:text-lg text-gray-500 dark:text-gray-300">
          What people are saying about us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[TESTIMONIALS.review1, TESTIMONIALS.review2, TESTIMONIALS.review3].map(
          (review, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 relative transition-all duration-300 ${cardStyle}`}
            >
              <FaQuoteLeft className="text-[#FF5722] text-2xl mb-4" />
              <p className="text-base lg:text-lg font-medium leading-relaxed">
                {review}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF5722] flex items-center justify-center text-white font-semibold">
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className="text-sm text-gray-400">
                  User {idx + 1}
                </span>
              </div>
            </div>
          )
        )}

        {[TESTIMONIALS.review4, TESTIMONIALS.review5].map((review, idx) => (
          <div
            key={idx + 3}
            className={`md:col-span-2 lg:col-span-1 rounded-2xl p-6 relative transition-all duration-300 ${cardStyle}`}
          >
            <FaQuoteLeft className="text-[#FF5722] text-2xl mb-4" />
            <p className="text-base lg:text-lg font-medium leading-relaxed">
              {review}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF5722] flex items-center justify-center text-white font-semibold">
                {String.fromCharCode(68 + idx)}
              </div>
              <span className="text-sm text-gray-400">
                User {idx + 4}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
