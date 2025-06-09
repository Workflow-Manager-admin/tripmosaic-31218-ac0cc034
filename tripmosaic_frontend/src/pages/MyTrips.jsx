/**
 * ============================================================================
 *  MyTrips.jsx (TripMosaic Vistara) - Lists Current User's Saved Trips
 *  Renders cards for all trips belonging to the currently authenticated user.
 *  Includes docstrings, robust null/empty handling, and code clarity for maintainers.
 * ============================================================================
 */

import UserTripCard from "../components/UserTripCard";
import useMyTrip from "../hooks/useMyTrip";

// PUBLIC_INTERFACE
/**
 * MyTrips
 * Page that displays the user's saved trips. Falls back if the user is not signed in.
 *
 * @returns {JSX.Element|null} The rendered content or null if data not loaded.
 */
const MyTrips = () => {
  const { userTrips } = useMyTrip();

  // Defensive: Only render if userTrips is an array
  if (!Array.isArray(userTrips)) return null;

  return (
    <div className="my-10 mb-20 px-6 lg:px-56 bg-[#0f0f0f] min-h-screen text-white">
      <h2 className="font-bold text-4xl text-orange-400">Your Trips</h2>

      {userTrips.length === 0 ? (
        <p className="text-gray-400 mt-10">No trips found. Start planning now!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {userTrips.map((trip, index) => (
            <UserTripCard key={index} trip={trip} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyTrips;
