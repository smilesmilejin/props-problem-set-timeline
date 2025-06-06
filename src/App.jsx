import './App.css';
// Notice that our modified App component imports a JSON object, and declares the object in a variable named timelineData:
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';


// App Component
//   The App component is a container component. It is responsible for:
//   Holding the data about the timeline, which contains all timeline events.
//   Rendering one instance of the Timeline component.
//   Passing the timeline data to the Timeline component.

function App() {
  console.log('The value of timelineData is', timelineData);
  console.log('We should use timelineData in our project somehow...');

  // console.log('The value of timelineData.events is', timelineData.events);
  return (
    // <div>
    //   <Timeline timeline={timelineData.events}></Timeline>
    // </div>
      <section className="App-main">
      <h1 className="App-header App-title">Ada Lovelace&apos;s Social Media Feed</h1>
      {/* The key will be timelinedata when passed into TimeLine */}
      <Timeline timelinedata={timelineData}></Timeline>
    </section>
  );
}

export default App;