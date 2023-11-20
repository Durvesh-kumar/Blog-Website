import { useFormik } from "formik";
import { FaXmark } from "react-icons/fa6"
import Login from "./Schemes";

const initialValues ={
  email:"",
  password:"",
}

export default function Model({ ModelToggle, isModelOpen}) {
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:Login,
    onSubmit: (action)=>{
      action.resetForm();

    }
  })
  
  
  return (
    <div>
      <form action="Post" onSubmit={handleSubmit}>
      <div className={`fixed top-0 left-0 w-full h-full ${isModelOpen ? "" :"hidden"} flex items-center justify-center`}>
        <div className="bg-indigo-700 text-center p-5 h-100 lg:w-[500px] rounded shadow-sm">
          {/* content */}
          <div>
            <div className="flex items-center justify-end">
            <button onClick={ModelToggle}>
              {
                isModelOpen ? <FaXmark/> : ""
              }
           </button>
            </div>
            <h2 className="my-4">Please Login Here!</h2>
            <div>
              <form action="http://localhost:3044/Login" onSubmit={handleSubmit}>
                <div className=" gap-y-5 lg:px-10 grid">
                  <div>
                     <input type="email"
                       value={values.email}
                       onChange={handleChange} 
                       onBlur={handleBlur} 
                       name="email" id="email" placeholder="UserId......" className="px-2 py-1 w-full outline-none rounded shadow-md border-black border-[1px] bg-white text-black focus:shadow-md" />
                       { errors.email && touched.email ? (<p className="text-white">{errors.email}</p>):"" }
                  </div>
                  <div>
                     <input type="password"
                        value={values.password}
                        onChange={handleChange} 
                        onBlur={handleBlur}
                        name="password" id="password" placeholder="password" className="px-2 w-full py-1 outline-none rounded shadow-md border-black bg-white text-black border-[1px]"/>
                        { errors.password && touched.password ? (<p className="text-white">{errors.password}</p>):""}
                  </div>
                </div>
                <div className="flex items-center justify-end pr-6 mt-3">
                  <button className="hover:border hover:bg-green-500  px-3 hover:rounded">Submite</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}
