import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

export default function Pagination({clickPagechange, items, pages, currentPages}) {
    const totalPages = Math.ceil(items.length / pages);
    const renderPagination = ()=>{
        return Array.from({length: totalPages},(_,i)=>i+1).map((pageNumber)=>(
            <div className={` px-2 ${pageNumber === currentPages ? "bg-blue-500 border-green-950 border-[1px]" : "bg-white  border-black border-[1px] hover:bg-blue-200 rounded-sm"}`} key={pageNumber}>
                <a href="#" onClick={()=> clickPagechange(pageNumber)}>{pageNumber}</a>
            </div>
        ))
    }
  return (
    <div className="flex gap-4 outline-none justify-center items-center">
      <div>
        <button onClick={()=> clickPagechange(currentPages -1)} 
             disabled={currentPages === 1}
             className={`bg-blue-500 shadow-md rounded-sm hover:bg-red-600 px-2`}>
               {currentPages === 1 ? <AiOutlineDoubleRight className="inline-flex text-black"/> : ""}Prev
               {currentPages !== 1 ? <AiOutlineDoubleLeft className="mr-2 inline-flex text-black"/> : ""}

        </button>
      </div>
      <div className="flex gap-2 px-1">{renderPagination()}</div>
      <div>
        <button onClick={()=> clickPagechange(currentPages +1)} 
                disabled={currentPages === totalPages} 
                className={`bg-blue-500 shadow-md rounded-sm hover:bg-yellow-600 px-2`}>
                    {currentPages === totalPages ? <AiOutlineDoubleLeft className="mr-2 inline-flex text-black"/>: ""} 
                    Next {currentPages !== totalPages ? <AiOutlineDoubleRight className="inline-flex text-black"/> : ""}</button>
      </div>
    </div>
  );
}