import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Offers from "./Pages/Offers";
import ForgotPassword from "./Pages/ForgotPassword";
import Header from "./components/Header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./Pages/CreateListing";
function App() {
  return (
   <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>         
           <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/creating-list" element={<PrivateRoute />}>
            <Route path="/creating-list" element={<CreateListing/>}/>
          </Route>    
        </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

{/* Same as */}
<ToastContainer />
   </>
  );
}

export default App;
