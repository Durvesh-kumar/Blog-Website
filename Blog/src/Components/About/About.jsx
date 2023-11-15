import { useState } from 'react';
export default function About() {
  const [isClick, setisClick] = useState(1)
  const toggle =(index)=>{
    setisClick(index)
  }
  return (
    <div >
      <section className='md:flex-row'>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-16 py-10 px-20'>
        <div className='flex items-center justify-around mt-20'>
          <img src="data:image/jpeg;base64,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" alt="missing" className='w-full' />
        </div>
        <div className='w-full/2'>
        <div className='flex gap-11'>
          <button
             className={`py-1 font-semibold ${isClick === 1 ? "text-black bg-blue-300 rounded py-1 px-3 ":"text-yellow-700"}`} 
             onClick={()=>toggle(1)}
             >About</button>
          <button
          className={`py-1 font-semibold ${isClick === 2 ? "text-black bg-blue-300 rounded py-1 px-3 ":"text-yellow-700"}`} 
          onClick={()=>toggle(2)}
          >Skill</button>
        </div>
        <div className={`mt-8 ${isClick === 1 ? "active-content":"hidden"}`}>
          {/* About Section */}
          <div>
            <h1 className='text-4xl font-semibold'>My Story</h1>
            <p className='py-3 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magnam, sit harum voluptate asperiores labore laudantium enim eius necessitatibus ratione laborum facere animi impedit sunt omnis! Ad nisi aspernatur a!</p>
          </div>
          <div>
            <h2 className='text-3xl font-semibold'>I am Web Developer</h2>
            <p className='py-3 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, reprehenderit. Explicabo soluta eius laboriosam quaerat obcaecati consectetur eum ipsa commodi? Distinctio, in accusantium! Possimus beatae non quisquam, quis dolorum dignissimos!</p>
          </div>
        </div>
        <div className={`mt-8 ${isClick === 2 ? "active-content":"hidden"}`}>
          {/* Skill Section */}
          <div>
            <h1 className='text-4xl mt-10 mb-6'>Skill</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt maxime quia consectetur consequuntur facilis delectus non praesentium exercitationem! Deleniti deserunt modi saepe aliquam autem assumenda neque amet numquam aut officia!</p>
          </div>
          <div className='flex items-center justify-around mt-10 gap-8'>
            <div>
              <h2>DEVELOPER</h2>
               <input type="range" name="" id="" min={80} max={100} />
            </div>
            <div>
              <h2>DESIGNER</h2>
              <input type="range" name="" id="" max={100} min={70} />
            </div>
          </div>
          <div className='flex items-center justify-around mt-10 gap-8'>
            <div>
              <h2>JAVASCRIPT</h2>
              <input type="range" name="" id="" max={100} min={80}/>
            </div>
            <div>
              <h2>NODEJS</h2>
              <input type="range" name="" id=""max={100} min={50} />
            </div>
          </div>
        </div>
       </div>
        </div>
      </section>
    </div>
  );
}
