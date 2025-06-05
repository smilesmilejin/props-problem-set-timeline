import { DateTime } from "luxon";
import PropTypes from 'prop-types';

// The TimeStamp Component
// The TimelineEvent component should use an instance of the TimeStamp component.
// The TimeStamp component expects one prop: time.
// If this component receives time through props correctly, it will render the time in a nice format!

const TimeStamp = (props) => {
  const time = DateTime.fromISO(props.time);
  const absolute = time.toFormat("MMMM Do YYYY, h:mm:ss a");
  const relative = time.toRelative();

  return <span title={absolute}>{relative}</span>;
};

TimeStamp.propTypes = {
  time: PropTypes.string.isRequired,
};

export default TimeStamp;