import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

export default function Sidebar() {
    const [populerBlogs, setPopulerBlogs] = useState([])

    useEffect(()=>{
        async function getData() {
            const res = await fetch(`http://localhost:3593/datas`)
            if(res.ok){
                const data = await res.json();
                return data
            }else{
                return new console.error("featchin erroe");
            }
        }
        getData()
        .then(data=> setPopulerBlogs(data.slice(0,15)))
        .catch(error=> console.log(error))
    },[])
  return (
    <div>
      <h3 className="text-2xl font-semibold px-4">Letest Blogs</h3>
      <div>
        {
            populerBlogs.slice(0,5).map((elem)=> <div key={elem.id} className="my-5 border-b-2 border-spacing-2 px-4">
                <h4 className="font-medium mb-2">{elem.title}</h4>
                <Link to="/"  className=" text-black text-xl px-4 py-1 hover:text-orange-600 font-semibold">Read more...</Link>
            </div>)
        }
      </div>
      <div>
         <h3 className="text-2xl font-semibold px-4 mt-16">Populer Blogs</h3>
         <div>
          {
            populerBlogs.slice(5,10).map((elem)=> <div key={elem.id} className="my-5 border-b-2 border-spacing-2 px-4">
                <h4 className="font-medium mb-2">{elem.title}</h4>
                <Link to="/"  className=" text-black text-xl px-4 py-1 hover:text-orange-600 font-semibold">Read more...</Link>
            </div>)
          }
         </div>
      </div>
    </div>
  );
}

