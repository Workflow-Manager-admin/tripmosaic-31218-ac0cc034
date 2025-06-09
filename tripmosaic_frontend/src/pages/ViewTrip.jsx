/**
 * ============================================================================
 *  ViewTrip.jsx (TripMosaic Vistara) - Page for Viewing Full Trip Details
 *  Shows the summary, hotels, and daily itinerary for a single trip.
 *  Refactored for documentation, robustness, and future maintainability.
 *
 *  NOTE: This page could be wrapped in an ErrorBoundary for full production safety
 *  if one is present in the app, but is not included here for backwards compatibility.
 * ============================================================================
 */

import InfoSection from "../components/InfoSection";
import Hotel from "../components/Hotel";
import PlacesToVisit from "../components/PlacesToVisit";
import useViewTrip from "../hooks/useViewTrip";

// PUBLIC_INTERFACE
/**
 * ViewTrip
 * Page component for showing all trip details, including InfoSection, Hotel list, and day-by-day places to visit.
 *
 * @returns {JSX.Element} ViewTrip page markup for a single trip (or null during loading)
 */
const ViewTrip = () => {
  const { trip } = useViewTrip();

  // Defensive: Do not render UI until trip object is loaded.
  if (!trip) {
    // Optional: Could use a skeleton loader or fallback display here.
    return null;
  }

  return (
    <div className="lg:p-10 md:px-20 py-20 lg:px-44 xl:px-56 p-8">
      {/* information Section  */}
      <InfoSection trip={trip} />

      {/* Hotel Recommendations */}
      <Hotel trip={trip} />

      {/* Places to Visit Itinerary */}
      <PlacesToVisit trip={trip} />
    </div>
  );
};

export default ViewTrip;
