import {Link} from 'react-router-dom';
export default function Banner() {
  return (
    <div className=" bg-black mx-auto text-white px-6 py-4 text-center">
        <div>
           <h1 className="text-white text-4xl py-2 lg:text-7xl lg:py-5">Welcome to Our Blog</h1>
            <p className=" text-gray-200 lg:w-3/4 mx-auto py-3 ">Start your blog today and joi a community of writers and raders who are passionate aboutsharing their storage and ideas. We offer everything you need to get started, from helpful tips and tutorials.</p>
            <Link to="/"  className="bg-white text-black px-4 py-1 hover:bg-green-400 rounded-md">Learn more...</Link>
        </div>
    </div>
  );
}
