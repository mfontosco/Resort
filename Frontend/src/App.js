import './App.css';
import Router from './Router/Router';
import {Provider} from './context';

function App() {
  return (
    <div className="App">
    <Provider>
    <Router/>
    </Provider>
      
    </div>
  );
}

export default App;
