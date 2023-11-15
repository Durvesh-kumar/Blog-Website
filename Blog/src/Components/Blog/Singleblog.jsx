import { FaCalendar, FaUser, FaClock } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Singleblog() {
    const {title, image, category, author, published_date, reading_time, content} = useLoaderData({});
    console.log(useLoaderData([]));
  return (
    <div>
      <div className="bg-black  font-semibold lg:text-6xl md:text-5xl text-gray-300">
        <h1 className=" text-center md:text-5xl py-10">Single Page Blog</h1>
      </div>
      {/* Blog Details */}
      <div className="text-black my-10  flex">
        <div>
           <div>
             <img src={image} alt="missing" className="w-full ms-auto rounded cursor-pointer" />
          </div>
          <div className="text-3xl my-5">{title}</div>
          <div><FaUser className="inline-flex text-gray-700"/>{author}</div>
          <div><FaCalendar className="inline-flex text-gray-700"/>{published_date}</div>
          <h4>{category}</h4>
          <div><FaClock className="inline-flex text-gray-700"/>{reading_time}</div>
          <p>{content}</p>
        </div>
        <div>
          <Sidebar/>
        </div>

      </div>
    </div>
  );
}
