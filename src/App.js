import './App.css';
import { Home } from './Templates/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Admin } from './Templates/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/admin" element={<Admin/>} />
      </Routes>
    </Router>


  );
}

export default App;
