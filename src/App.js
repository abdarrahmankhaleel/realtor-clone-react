import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Offers from "./Pages/Offers";
import ForgotPassword from "./Pages/ForgotPassword";
import Header from "./components/Header";
function App() {
  return (
   <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/forget-password" element={<ForgotPassword/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
