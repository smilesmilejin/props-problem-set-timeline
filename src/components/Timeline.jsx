import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';


// How to fix this
// Make sure you have prop-types installed:
// Run this in your project root directory (where package.json is):

// npm install prop-types

// Timeline Component
// The Timeline component is also a container component. It's responsible for:
    // Receiving the timeline data from App
    // Rendering a list of TimelineEvent components based on the timeline data.
    // Passing person, status, and timestamp data to each TimelineEvent component.

const Timeline = (props) => {
  console.log('############# Timeline');
  console.log(props);
  // timelinedata
  // : 
  // events
  // : 
  // Array(6)
  // 0
  // : 
  // {person: 'Adele Goldberg', status: 'In Smalltalk, everything happens somewhere else.', timestamp: '2023-05-18T22:12:03Z'}
  // 1
  // : 
  // {person: 'Erica Baker', status: "Every once in a while, life affords you the opport…ppiness. It's up to you to see it. Pay attention.", timestamp: '2023-05-18T22:19:40Z'}
  // 2
  // : 
  // {person: 'Audrey Tang', status: 'The art of computer programming is a blend of mathematics and poetry.', timestamp: '2023-05-18T22:41:19Z'}
  // 3
  // : 
  // {person: 'Julia Evans', status: 'no seriously what if we replaced tech books with informative concise 30 page zines though', timestamp: '2023-05-18T23:02:44Z'}
  // 4
  // : 
  // {person: 'Stephanie Hurlburt', status: 'I don’t think you can do good work if you’re not a…sionally talking to a person you’re building for.', timestamp: '2023-05-18T23:09:38Z'}
  // 5
  // : 
  // person
  // : 
  // "Yan Zhu"
  // status
  // : 
  // "//for a good time, paste this into twitter page console: c=new AudioContext;n=setInterval(\"for(n+=7,i=k,P='▲.\\\n';i-=1/k;P+=P[i%2?(i%2*j-j+n/k^j)&1:2])j=k/i;doc.innerHTML=P;with(c.createOscillator())frequency.value=200*(j+n/k^j),connect(c.destination),start(),stop(n/k)\",k=64)"
  // timestamp
  // : 
  // "2023-05-18T23:51:01Z"
  console.log('################### props.timelinedata.events');
  console.log(props.timelinedata.events);
  
//   0
// : 
// {person: 'Adele Goldberg', status: 'In Smalltalk, everything happens somewhere else.', timestamp: '2023-05-18T22:12:03Z'}
// 1
// : 
// {person: 'Erica Baker', status: "Every once in a while, life affords you the opport…ppiness. It's up to you to see it. Pay attention.", timestamp: '2023-05-18T22:19:40Z'}
// 2
// : 
// {person: 'Audrey Tang', status: 'The art of computer programming is a blend of mathematics and poetry.', timestamp: '2023-05-18T22:41:19Z'}
// 3
// : 
// {person: 'Julia Evans', status: 'no seriously what if we replaced tech books with informative concise 30 page zines though', timestamp: '2023-05-18T23:02:44Z'}
// 4
// : 
// {person: 'Stephanie Hurlburt', status: 'I don’t think you can do good work if you’re not a…sionally talking to a person you’re building for.', timestamp: '2023-05-18T23:09:38Z'}
// 5
// : 
// {person: 'Yan Zhu', status: '//for a good time, paste this into twitter page co…),connect(c.destination),start(),stop(n/k)",k=64)', timestamp: '2023-05-18T23:51:01Z'}

// cannot use this! because it only return the first elements!!!!!!!!!!!!!!!!!!!!!! 

  // for (const[key, value] of Object.entries(props.timelinedata.events)) {
  const timelineElements = Object.entries(props.timelinedata.events).map(([key, value]) => {
    console.log(key);
    console.log(value);

    // 0
    // Timeline.jsx:77 {person: 'Adele Goldberg', status: 'In Smalltalk, everything happens somewhere else.', timestamp: '2023-05-18T22:12:03Z'}


    // let eachTimeLineEvent = {};
    // eachTimeLineEvent['person'] = value.person;
    // eachTimeLineEvent['status'] = value.status;
    // eachTimeLineEvent['timestamp'] = value.timestamp;
    const eachTimeLineEvent = {
      person: value.person,
      status: value.status,
      timestamp: value.timestamp,
    };

    console.log('##################### eachTimeLineEvent');
    console.log(eachTimeLineEvent);
    // console.log(eachTimeLineEvent);

    return (
      <li key={key}>
        <TimelineEvent timelineevent={eachTimeLineEvent}></TimelineEvent>
      </li>
    );
  });

  return <ul>{timelineElements}</ul>;
    
};

Timeline.propTypes = {
  person:PropTypes.string.isRequired,
  status:PropTypes.string.isRequired, 
  timestamp: PropTypes.string.isRequired,
};



export default Timeline;
