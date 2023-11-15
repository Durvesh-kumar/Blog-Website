import { useState } from "react";
import {ContectMe, SingUp} from "./index";

export default function Contact() {
  const [isOpen,setIsOpen] = useState(1)
  
  const toggleOpen = (index)=>{
    setIsOpen(index);
  }
  return (
    <div >
      <div className="border-spacing-1 py-3 w-full border-b-2 shadow-md">
      <div className="flex items-center gap-x-14 mt-3 ml-32">
        <h1
          className={`${isOpen === 1 ? "font-semibold border-2 text-blue-800 border-black rounded hover:border-2 px-4 py-2" : ""}`}
          onClick={()=> toggleOpen(1)}
          >Singup</h1>
        <h1
          className={`${isOpen === 2 ? "font-semibold border-2 text-blue-800 border-black rounded hover:border-2 px-4 py-2" : ""}`}
          onClick={()=> toggleOpen(2)}
        >Contect</h1>
      </div>
      </div>
      
      <div className={`${isOpen === 1 ? "active-content":"hidden"}`}>
        {/* SingUp */}
        <SingUp/>
      </div>
      <div className={`${isOpen === 2 ? "active.content" : "hidden"}`}>
        {/* Contect me */}
        <ContectMe/>
      </div>
    </div>
  );
}
