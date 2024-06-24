import './App.css';
import Navbar from './components/Navbar';
import Benefits from './components/Benefits';
import Home from './components/Home';
import About from "./components/About";
import Login from './components/Login';
import Signup from './components/Signup';
import Error from "./components/Error"
import ReviewItem from './components/review/ReviewItem';
import NoteState from './context/NoteState';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AdminLayout from './components/admin/AdminLayout';
import AdminUsers from './components/admin/AdminUsers';
import AdminReview from './components/admin/AdminReview';
import AdminEnquiry from './components/admin/AdminEnquiry';
import AdminUpdate from "./components/admin/Admin-Update";
import AdminView from './components/admin/Admin-View';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          {/* <Title/> */}
          <Navbar />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <div >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Benefits" element={<Benefits />} />
              <Route path="/About" element={<About />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="*" element={<Error />} />
              <Route path="/ReviewItem" element={<ReviewItem />} />
              <Route path="/Admin" element={<AdminLayout />} >
                <Route path="AdminUsers" element ={<AdminUsers />} />
                <Route path="AdminReview" element ={<AdminReview />} />
                <Route path="AdminEnquiry" element ={<AdminEnquiry />} />
                <Route path="AdminUsers/:id/edit" element ={<AdminUpdate/>} />
                <Route path="AdminEnquiry/:id/view" element ={<AdminView/>} />
              </Route>

            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
