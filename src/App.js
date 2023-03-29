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
import EditListing from "./Pages/EditListing";
import Listing from "./Pages/Listing";
import Category from "./Pages/Category";
function App() {
  return (
   <>
    <BrowserRouter>
      <Header/>
      <Routes>
      
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>         
           <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/category/:categoryName" element={<Category/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/create-listing" element={<PrivateRoute />}>
            <Route path="/create-listing" element={<CreateListing/>}/>
          </Route>  
          <Route path="edit-listing" element={<PrivateRoute />}>
            <Route path="/edit-listing/:listingId" element={<EditListing />} />
          </Route>  

          <Route path="category/:categoryName/:listingId" element={<Listing />} />

       
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
