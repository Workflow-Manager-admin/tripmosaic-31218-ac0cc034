import { cn } from "../../lib/utils"
import PropTypes from "prop-types";

/**
 * Skeleton (Kavia AI badged)
 * UI skeleton loader - adds PropTypes for compliance.
 */
// PUBLIC_INTERFACE
function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />);
}

Skeleton.propTypes = {
  className: PropTypes.string,
};

export { Skeleton }
