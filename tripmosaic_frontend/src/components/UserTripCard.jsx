import PropTypes from "prop-types";
import { usePlacePhoto } from "../hooks/usePhotoURL";
import placeholder from "../assets/placeholder.jpg";
import { Link } from "react-router-dom";

/**
 * ============================================================================
 *  UserTripCard
 *  Shows summary card for a user's individual saved trip.
 *  Pulls location imagery, handles robust fallback, deep PropTypes.
 * ============================================================================
 */
// PUBLIC_INTERFACE
const UserTripCard = ({ trip }) => {
  // Always call hooks at the top, regardless of trip value to satisfy rules-of-hooks
  const data = {
    textQuery: trip?.userSelection?.location?.label,
  };
  const photoURL = usePlacePhoto(trip, data);

  if (!trip || !trip.userSelection) return null;

  return (
    <Link to={`/view-trip/${trip?.id}`}>
      <div className="cursor-pointer hover:scale-105 transition-all duration-200">
        {/* Cover image for the trip destination */}
        <img
          src={photoURL ? photoURL : placeholder}
          className="lg:w-[300px] lg:h-[250px] w-[180px] h-[135px] rounded-lg object-cover"
          alt={trip?.userSelection?.location?.label || "Trip Destination"}
        />
        <div className="flex flex-col gap-1 my-3">
          <h2 className="text-lg font-semibold">
            {trip?.userSelection?.location?.label}
          </h2>
          <p className="text-sm text-gray-500">
            {trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget
          </p>
        </div>
      </div>
    </Link>
  );
};

UserTripCard.propTypes = {
  trip: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    userSelection: PropTypes.shape({
      location: PropTypes.shape({
        label: PropTypes.string,
      }),
      noOfDays: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      budget: PropTypes.string,
    }),
  }),
};

export default UserTripCard;