import { useState } from "react"
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function PageCategray({categoryChange, activeCategory}) {
    const categories = ["Nature", "Health", "Api", "Fintech", "Startups", "AI", "Security", "Growth", "Apps", "Work", "Gadgets", "Tech"]

    const [ismenuOpen, setIsmenuOpen] = useState(false)

    const toggeleMenu = ()=> {
        setIsmenuOpen(prev => !prev)
    }


  return (
    <div>
      <div className="md:flex hidden">
      <div className={`px-4 mb-8 flex gap-11 items-center justify-between border-b-2 py-5 text-gray-900 font-bold`}>

<button onClick={()=> categoryChange(null)} className={`lg:ml-12 ${ activeCategory  ? "" : "text-blue-700 font-semibold underline underline-offset-4"}`}>All</button>
{
 categories.map((category)=>(
  <button key={category}
          onClick={()=> categoryChange(category)}
          className={`w-full flex items-center justify-between ${activeCategory === category ? "text-blue-500 font-semibold underline underline-offset-4" : ""} `}>
          <Link onClick={toggeleMenu}>{category}</Link></button>
  ))
}
     </div>
      </div>

       {/* Mobile Screen */}
       <div className="md:hidden">
        <div className="-ml-7">
               <button onClick={toggeleMenu}>
                    {
                        ismenuOpen ? "" : <span className="text-2xl">Category<FaBars className="p-1 inline-flex text-blue-500"/></span>
                    }
                </button>
        </div>
        <div className={`bg-black h-screen grid justify-between pb-20 ${ismenuOpen ? "fixed max-screen top-16 left-0 w-2/6 transition-all ease-out duration-75" : "hidden"}`}>

        <div className="flex items-center -mr-10 justify-end">
               <button className="" onClick={toggeleMenu}>
                    {
                        ismenuOpen ? <FaXmark className="text-white justify-end"/>:""
                    }
                </button>
        </div>

        <button onClick={()=> categoryChange(null)} className={` ml-5 ${ activeCategory  ? "text-white" : "text-blue-700 font-semibold underline underline-offset-4"}`}>All</button>
         {
            categories.map((category)=>(
         <button key={category}
              onClick={()=> categoryChange(category)}
              className={`w-full gap-10 ml-9 flex items-center justify-between ${activeCategory === category ? "text-blue-500 font-semibold underline underline-offset-4" : "text-white"} `}>
             <Link onClick={toggeleMenu}>{category}</Link></button>
           ))
         }
        </div>
       </div>
    </div>
  )
    }