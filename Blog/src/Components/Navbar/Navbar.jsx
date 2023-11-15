import { NavLink } from "react-router-dom";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import Model from './Model';


export default function Navbar() {

    const [isMenuOpen ,setisMenueOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true)

    const toggleMenu = ()=>{
        setisMenueOpen((prev)=> !prev );
    }

    const LoginlToggle =()=>{
        setIsLogin(prev=> !prev);

    }

    // NavItems

    const naveItems = [
        { path: "/", link: "Home"},
        { path: "/blog", link: "Blog" },
        { path: "/about", link: "About" },
        { path: "/contact", link: "Contact" },
        { path: "/services", link: "Services" },
    ]

  return (
    <header className="bg-[black] p-4 text-white fixed left-0 right-0 top-0">
        <nav className="flex mx-auto justify-between px-4 items-center">
            <a href="/" className="text-xl font-bold">Desigin <samp className=" text-orange-500">DK</samp></a>

            <ul className="md:flex gap-12 text-lg hidden ml-20">
                {
                    naveItems.map(({path, link})=> (
                        <li key={path} className="text-white">
                            <NavLink to={path} className={({isActive})=>`${isActive ? "text-orange-400 underline-offset-4 underline":""} `}>{link}</NavLink>
                        </li>
                    ))
                }
            </ul>
            {/* menu icons */}
            <div className=" lg:flex gap-4 items-center ml-20 hidden">
                <a href="/" className=" hover:text-blue-500"><FaFacebook/></a>
                <a href="/" className=" hover:text-red-500"><FaYoutube/></a>
                <a href="/" className=" hover:text-blue-500"><FaTwitter/></a>
                <a href="/" className=" hover:text-orange-500"><FaInstagram/></a>
                <a href="/" className=" hover:text-blue-500"><FaLinkedin/></a>
            </div>
            <div className="flax gap-2 items-center justify-end ml-32">
               <button onClick={LoginlToggle} className={`rounded shadow-sm py-1 px-3 font-medium border-spacing-2 hover:border-[2px] hover:border-white ${isLogin ? "text-blue-600" : ""}`}>Login</button>
            </div>

            <Model ModelToggle={LoginlToggle} isModelOpen={isLogin}/>
            {/* mobile screen icons and button */}
            <div className="md:hidden">
                <button
                    onClick={toggleMenu} className="cursor-pointer">
                    {
                        isMenuOpen ? "": <FaBars className="w-5 h-5"/>
                    }
                    </button>
            </div>
        </nav>
        <div>
        <ul className={`md:hidden text-lg h-screen block space-y-12 bg-gray-700 mt-14 px-4 py-4 ${isMenuOpen ? "fixed top-0 left-0 w-2/6 transition-all ease-out duration-75" : "hidden"}`}>
            <div className="flex items-center justify-end">
                <button onClick={toggleMenu}>
                    {
                        isMenuOpen ? <FaXmark className="w-5 h-5" /> : ""
                    }
                </button>
            </div>
                {
                    naveItems.map(({path, link})=> (
                        <li onClick={toggleMenu} key={path} className="text-white">
                            <NavLink to={path} className={({isActive})=>`${isActive ? "text-orange-500 underline underline-offset-4":""} `} > {link} </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    </header>
  );
}
