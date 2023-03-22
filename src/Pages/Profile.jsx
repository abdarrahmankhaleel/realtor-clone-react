import { async } from "@firebase/util";
import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";
import {FcHome} from 'react-icons/fc'
export default function Profile() {
  const [changeName, setChangeName] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  function onLogout() {
    auth.signOut();
    navigate("/");
  }
  function onchange(e){
    setFormData({
      ...formData,
      [e.target.id]:e.target.value

    })
  }

 async function onSubmit(){
    try {
      if(auth.currentUser!==formData.name){
        //update name in auth 

        await updateProfile(auth.currentUser,{
          displayName:name
        });

        //update in the firestore

        const docRef=doc(db,"users",auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });

      }
      toast.success("Profile details updated");

    } catch (error) {
      toast.error("somthing went wrong");
    }
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* Name Input */}

            <input
              type="text"
              id="name"
              value={name}
              onChange={onchange}
              disabled={!changeName}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700
               bg-white border border-gray-300 rounded transition
                ease-in-out ${changeName &&" bg-red-200 focus:bg-red-200"}`}
            />

            {/* Email Input */}

            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">
                Do you want to change your name
                <span onClick={()=>{
                  changeName && onSubmit()
                  setChangeName((prev)=>!prev)
                
                }} className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer">
                  {changeName?"Apply changes":"Edit"}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign out
              </p>
            </div>
      
          </form>
          <button type="submit" className="bg-blue-600 w-full text-white rounded hover:bg-blue-800
          active:bg-blue-800">
            <Link to='/listing' className="flex justify-center items-center py-3">
            <FcHome className="mr-2 bg-slate-50 text-2xl rounded-full "/>
              Sell Or Rent Your Home
            
            </Link>
            
          </button>
        </div>
      </section>
    </>
  );
}
