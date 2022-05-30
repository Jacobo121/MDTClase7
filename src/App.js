import './App.css';
import Hola from './components/Hola.jsx';
import {Info} from './info';

function App() {
  return (
    <div className="App">
      {
        Info.text.map((i, num) => 
          <Hola key={num} text={i} />
        )
      }
    </div>
  );
}

export default App;
