/**
 * ============================================================================
 *  PlacesToVisit.jsx (TripMosaic Vistara) - Daily Itinerary Place Listing
 *  Renders all place cards day-by-day for a trip, showing time and context.
 *  Modernized to use PropTypes, clear documentation, and robust fallback handling.
 * ============================================================================
 */
import PropTypes from "prop-types";
import PlaceCard from "./PlaceCard";

/**
 * PUBLIC_INTERFACE
 * PlacesToVisit: Lists days and places to visit within a trip itinerary.
 * 
 * @param {object} trip - Trip object with nested itinerary array.
 */
const PlacesToVisit = ({ trip }) => {
  // Early return if no trip or no itinerary
  if (!trip || !Array.isArray(trip?.tripData?.itinerary)) return null;

  return (
    <div className="my-10">
      <h2 className="font-bold text-xl">Places To Visit</h2>
      <div>
        {trip.tripData.itinerary.map((item, dayIdx) => (
          <div key={dayIdx}>
            <div className="my-3">
              <h2 className="font-semibold text-lg mt-2">Day {item.day}</h2>
              <div className="grid md:grid-cols-2 gap-5 mx-2 my-2">
                {item?.plan?.map((place, planIdx) => (
                  <div key={planIdx}>
                    <h2 className="text-sm font-medium text-[#7B68EE]">
                      {place?.time ?? ""}
                    </h2>
                    <PlaceCard place={place} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

PlacesToVisit.propTypes = {
  /** Trip object with tripData -> itinerary (array of itinerary days) */
  trip: PropTypes.shape({
    tripData: PropTypes.shape({
      itinerary: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.number,
          plan: PropTypes.arrayOf(
            PropTypes.shape({
              placeName: PropTypes.string,
              placeDetails: PropTypes.string,
              ticketPricing: PropTypes.string,
              timeTravel: PropTypes.string,
              time: PropTypes.string, // Add time for day/plan slot
            })
          ),
        })
      ),
    }),
  }),
};

export default PlacesToVisit;
