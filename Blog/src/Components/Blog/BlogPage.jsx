import { useEffect, useState } from "react";
import {BlogCart, Pagination, PageCategray, Sidebar} from './index';

export default function BlogPage() {
    const [items, setItems] = useState([]);
    const [currentPages, setCurrentPages] = useState(1)
    const pages = 12;
    const [category, setCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null)


    useEffect (()=>{
        async function getData() {
            let URL = `http://localhost:3044/datas?page=${currentPages}&lim=${pages}`;

            if(category){
                URL = `&category=${setCategory}`;
            }
            const res = await fetch(URL);
                const data = await res.json();
                return data
        }
        getData()
        .then((data) => {
            setItems(data);
        }).catch((error) => {
            console.log(error);
        });
    },[currentPages, pages, category]);

    // pageChanger
    const clickPagechange = (pageNumber)=>{
        setCurrentPages(pageNumber)
    }

    // categoryChange
    const categoryChange= (category) =>{
        setCategory(category);
        setCurrentPages(1);
        setActiveCategory(category);
    }
  return (
    <div>
        {/* category section */}

        <div><PageCategray 
                categoryChange={categoryChange}
                categorys={category}
                activeCategory={activeCategory}

                /></div>
        {/* Blockcart section */}
        <div className="flex flex-col lg:flex-row gap-y-11 mx-14">
            <BlogCart 
                items={items} 
                currentPages={currentPages} 
                categorys={category} 
                pages={pages} 
            />
            {/* Sidebar section */}
            <div>
                <Sidebar/>
            </div>
        </div>

        {/* pageNation section */}
        <div className="mt-5 mb-5"><Pagination
           currentPages={currentPages}
           clickPagechange={clickPagechange}
           items={items}
           pages={pages}
           /></div>
    </div>
  );
}
