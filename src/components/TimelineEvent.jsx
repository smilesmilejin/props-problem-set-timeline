import './TimelineEvent.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {
    return (
        <section className="timeline-event">
            <h3 className="event-person">{props.person}</h3>
            <p className="event-status">{props.status}</p>
            <p className="event-time">
                <TimeStamp time={props.timeStamp}></TimeStamp>
            </p>
        </section>
    );
};

TimelineEvent.propTypes = {
    person: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
};

export default TimelineEvent;