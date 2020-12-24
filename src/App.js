import './App.css';
import Nabbar from './compunents/nabbar/Nabbar'
import Home from './compunents/home/Home'
function App() {
  return (
    <div className="App">
      <Nabbar avatar="./images/avatar.jpg"/>
      <Home/>
    </div>
  );
}

export default App;
