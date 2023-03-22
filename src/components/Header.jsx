import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
export default function Header() {
  const [pageState,setPageState]=useState("Sign In");
  const location=useLocation();

  const auth=getAuth();
  const navigate=useNavigate();
  // function IspathMatchRoute(route){
  //   if(route==location.pathname){
  //     return true;
  //   }
  // }
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setPageState("Profile");
      }else{
        setPageState("Sign In");
      }
    })
  },[auth]);

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-9 max-w-6xl mx-auto'>
            <div>
                <img onClick={()=>navigate("/")} className='h-3 cursor-pointer' src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="" />
            </div>
            <ul className='flex space-x-6 items-center'>
                <li onClick={()=>navigate("/")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}>Home</li>
                
                <li onClick={()=>navigate("/offers")} className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}>Offers</li>


            <li onClick={()=>navigate("/profile")} className={`cursor-pointer py-3 text-sm
                 font-semibold text-gray-400 
                 border-b-[3px] border-b-transparent
                 ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-black border-b-red-500"}               
                `}>{pageState}</li>


            </ul>
        </header>
    </div>
  )
}
