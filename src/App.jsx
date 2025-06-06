import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {

  return (
    <section className="App-main">
      <h1 className="App-header App-title">Ada Lovelace&apos;s Social Media Feed</h1>
      <Timeline data={timelineData}></Timeline>
    </section>
  );
}

export default App;