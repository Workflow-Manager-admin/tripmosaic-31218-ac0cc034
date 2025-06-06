import { cn } from "../../lib/utils";
import PropTypes from "prop-types";

// PUBLIC_INTERFACE
function Skeleton({ className, ...props }) {
  return (
    <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />
  );
}

Skeleton.propTypes = {
  className: PropTypes.string,
};

export { Skeleton };
