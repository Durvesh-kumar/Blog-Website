import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa6';
import {Link} from 'react-router-dom';
export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-5 px-14">
      <div>
      <form action="/" className="flex items-center justify-center text-black font-semibold shadow-sm">
         <input type="email" name="login" placeholder="userid....." className="md:max-w-md lg:w-full bg-gray-100 lg:py-2 py-1 px-2 outline-none rounded-l-md " />
         <Link to={"/SingUp"} className="bg-blue-400 px-2 py-1 hover:text-white lg:py-2 lg:px-3 rounded-r-md hover:bg-green-800">Login</Link>
      </form>
      </div>

      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:px-4 md:px-24 lg:max-w-screen-xl">
        <div>
          <div className="grid grid-cols-2 gap-5 md:col-span-4 md:grid-cols-6">
            <img src="https://www.bing.com/th?id=OIP.MFYFScAeW2FceTTnX8JDGQHaH0&w=87&h=102&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="logo" 
            className='rounded-md lg:mt-[-80px]' />
            <div>
               <p className="font-medium tracking-wide text-gray-300">Category</p>
               <ul className="mt-2 space-y-2">
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">News</a>
                 </li>
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">World</a>
                 </li>
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Game</a>
                 </li>
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">References</a>
                 </li>
               </ul>
            </div>
            <div>
               <p className="font-medium tracking-wide text-gray-300">Apples</p>
               <ul className="mt-2 space-y-2">
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Web</a>
                 </li>
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">E-commerrce</a>
                 </li>
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Business</a>
                 </li>
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Apps</a>
                 </li>
               </ul>
            </div>
            <div>
               <p className="font-medium tracking-wide text-gray-300">Cherry</p>
               <ul className="mt-2 space-y-2">
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Media</a>
                 </li>
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">World</a>
                 </li>
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Game</a>
                 </li>
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Projects</a>
                 </li>
               </ul>
            </div>
            <div className='md:grid-flow-row'>
               <p className="font-medium tracking-wide text-gray-300">Business</p>
               <ul className="mt-2 space-y-2">
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Infopreneur</a>
                 </li>
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Personal</a>
                 </li>
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Wiki</a>
                 </li>
                 <li>
                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-500">Projects</a>
                 </li>
               </ul>
            </div>
          </div>
          <div className='flex items-center justify-between mt-8'>
              <div className='text-gray-300'>©CopyRight 2023 || All right resevred</div>
              <div className='flex items-center lg:gap-8 md:gap-3'>
               <a href="/"><FaFacebook/></a>
               <a href="/"><FaTwitter/></a>
               <a href="/"><FaInstagram/></a>
               <a href=""><FaYoutube/></a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
