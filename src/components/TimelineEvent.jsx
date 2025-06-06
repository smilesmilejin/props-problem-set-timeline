import './TimelineEvent.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

// TimelineEvent Component
// The TimelineEvent component is a presentational component. Its responsibilities include:
//     Rendering the event's status message
//     Rendering the event's author (person)
//     Rendering the event's timestamp


const TimelineEvent = (props) => {
  console.log('########### props.timelineevent')
  console.log(props.timelineevent); // {person: 'Adele Goldberg', status: 'In Smalltalk, everything happens somewhere else.', timestamp: '2023-05-18T22:12:03Z'}
  const time = props.timelineevent.timestamp; // 2023-05-18T22:12:03Z
  console.log(time);
  return (
    <ul>
      <li>{props.timelineevent.person}</li>
      <li>{props.timelineevent.status}</li>
      <li><TimeStamp time={props.timelineevent.timestamp}></TimeStamp></li>
    </ul>
  )

};

TimelineEvent.propTypes = {
  person:PropTypes.string.isRequired,
  status:PropTypes.string.isRequired, 
  timestamp: PropTypes.string.isRequired,
};

export default TimelineEvent;