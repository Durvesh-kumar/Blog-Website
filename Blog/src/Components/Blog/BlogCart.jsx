import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function BlogCart({items, categorys, currentPages, pages}) {
    const item = items.filter((e)=> !categorys || e.category === categorys).slice((currentPages -1)*pages, currentPages * pages);
  return (
    <div className="grid md:grid-cols-3 gap-5 sm:grid-cols-2 grid-cols-1">
      {
        item.map((elem)=>
        <Link to={`/datas/${elem.id}`} key={elem.id} className="p-5 shadow-lg rounded cursor-pointer ">
            <img src={elem.image} alt="missing" className="px-4 w-full overflow-hidden" />
            <h1 className=" text-black font-bold flex items-center hover:text-blue-300 ">{elem.title}</h1>
            <h1 className=" text-gray-800 text-sm"><samp className="text-black font-bold"><FaUserLarge className="mr-2 inline-flex items-center"/>: </samp>{elem.author}</h1>
            <h1 className=" text-gray-500 text-sm"><samp className="text-black font-bold">Published: </samp>{elem.published_date}</h1>
        </Link>
        )
      }
    </div>
  );
}