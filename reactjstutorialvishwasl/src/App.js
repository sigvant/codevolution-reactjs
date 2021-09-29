import './App.css';
import ClickCounter2 from './components/ClickCounter2';
import Counter from './components/Counter';
import HoverCounter2 from './components/HoverCounter2';

function App() {
  return (
    <div className="App">
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
        {/* anything between component tags will be passed as children props */}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      </Counter>

    </div>
  );
}

export default App;