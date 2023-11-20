import { useFormik } from "formik";
import YupMe from "./Schemas";

const initialValues = {
    name:"",
    email:"",
    message:"",
}

export default function ContectMe() {
   const {errors, values, handleSubmit, handleBlur, handleChange, touched} = useFormik({
    initialValues:initialValues,
    validationSchema:YupMe,
    onSubmit: (action)=>{
        action.resetForm();
    }
   })
  return (
    <div className="lg:px-9 px-5 grid items-center justify-between mt-10">
      <h1 className="text-5xl ml-10">Contect Us</h1>
      <div className="grid lg:grid-cols-2 gap-10 mt-10">
      <div className="px-9 space-y-10">
        <h1 className="text-2xl">Get in touch</h1>
        <h2 className="text-xl">Email: <span className="text-blue-800 font-medium">develooperjvascript@gmail.com</span></h2>
        <h2 className="text-xl">Phone: <samp className="text-orange-800">+91XXXXXXXXXX</samp></h2>
        <p className="text-gray-700 font-medium items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eius doloremque ad ex 
            consectetur officia eum magni temporibus</p>
      </div>
      <div>
        <form action="action="http://localhost:3044/message" onSubmit={handleSubmit} className="px-10 py-9">
            <div className="flex gap-x-2 items-center justify-between  gap-y-6">
               <div>
                <input type="text" name="name"
                   id="" placeholder="Name"
                   value={values.name}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   className="px-2 py-1 outline-none lg:w-[113%] border-spacing-2 shadow-md border-black border-2" />
                   {errors.name && touched.name ? (<p className="text-blue-700">{errors.name}</p>):""}
               </div>
               <div className="lg:mr-8 mr-0">
                <input type="email" 
                   name="email" id="email"
                   placeholder="Email"
                   value={values.email}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   className="px-2 py-1 outline-none lg:w-[113%] border-spacing-2 shadow-md border-black border-2" />
                   {errors.email && touched.email ? (<p className="text-blue-700">{errors.email}</p>):""}
                </div>
            </div>
            <div className="py-8">
                <textarea
                  name="message" id="message" 
                  placeholder="Message"
                  value={values.message}
                   onChange={handleChange}
                   onBlur={handleBlur}
                   className="px-2 py-1 w-full outline-none border-spacing-2 shadow-md border-black font-medium border-2 h-40" ></textarea>
                   {errors.message && touched.message ? (<p className="text-blue-700">{errors.message}</p>):""}
            </div>
            <div className="flax items-center justify-center">
               <button type="submit" className="bg-blue-700 font-medium border-2 border-black hover:bg-green-500 px-4 text-white py-1">Send</button>
            </div>
            
        </form>
      </div>
    </div>
    </div>
    
  );
}
