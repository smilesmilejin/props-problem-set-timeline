import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';

const Timeline = (props) => {
  const timeLineEventComponents = props.data.events.map((timelineEvent, index) => {
    return (
        <li key={index}>
          <TimelineEvent 
            status={timelineEvent.status} 
            person={timelineEvent.person} 
            timeStamp={timelineEvent.timestamp}>
          </TimelineEvent>
        </li>
    );
  });

  return (
    <ul className="timeline">
      {timeLineEventComponents}
    </ul>
  );
};

Timeline.propTypes = {
  data: PropTypes.shape({
    person: PropTypes.string.isRequired, 
    events: PropTypes.shape({
      status: PropTypes.string.isRequired, 
      person: PropTypes.string.isRequired, 
      timeStamp: PropTypes.string.isRequired,
    }),
  }.isRequired),
};

export default Timeline;