import './App.css';
import Navbar from './components/Navbar';
// import Title from './components/Title';
import Benefits from './components/Benefits';
import Home from './components/Home';
import About from "./components/About";
import Login from './components/Login';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        {/* <Title/> */}
        <Navbar/>
        <div >
          <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/Benefits" element={<Benefits/>}/>
            <Route  path="/About" element={<About/>}/>
            <Route path="/Login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
