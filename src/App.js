import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Benefits from './components/Benefits';
import Home from './components/Home';
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Title/>
        <Navbar/>
        
        <div >
          <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/Benefits" element={<Benefits/>}/>
            <Route  path="/About" element={<About/>}/>
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
