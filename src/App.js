import './App.css';

import Header from './components/Header';
import Identity from './components/Identity';
import Biodata from './components/Biodata';
import Highlight from './components/Highlight';

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}

export default App;
