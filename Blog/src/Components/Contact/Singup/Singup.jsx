import {useFormik} from 'formik';
import Singup from './Schemas';


const initialValues ={
  name:"",
  email:"",
  age:"",
  password:"",
  confirm_password:"",
}
export default function SingUp() {
    const {values, errors, touched, handleBlur, handleChange, handleSubmit}=  useFormik({
        initialValues : initialValues,
        validationSchema:Singup,
        onsubmit : ({action})=>{
          action.resetForm();
        }
      })
  return (
    <div className='p-10'>
      <form action="/SingUp" onSubmit={handleSubmit} className="grid mt-8 items-center justify-center">
        <h1 className="text-2xl flex items-center justify-center font-semibold ">Registor hera!</h1>
        <div className="">
     <div className="grid grid-cols-1 gap-y-6 lg:gap-x-20 mt-10 lg:grid-cols-2">
      <div className="flex items-center justify-between">
        <label htmlFor="name">Fullname</label>
        <div className="grid">
        <input type="text" 
          value={values.name}
          onChange={handleChange} 
          onBlur={handleBlur}
          name="name" id="name" 
          className={`py-1 px-2 outline-none rounded hover:shadow-lg border-spacing-2 border-black border-[2px]`} />
          {errors.name && touched.name ? <p className="text-red-500 w-[200px]">{errors.name}</p> : ""}
        </div>
        
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="email">Email</label>
        <div className="grid">
        <input type="text" 
          value={values.email}
          onChange={handleChange} 
          onBlur={handleBlur}
          name="email" id="email" 
          className={`py-1 px-2 outline-none rounded hover:shadow-lg border-spacing-2 border-black border-[2px]`} />
          {errors.email && touched.email ? <p className="text-red-500 w-[200px] ">{errors.email}</p> : ""}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="age">Age</label>
        <div className="grid">
        <input type="text" 
          value={values.age}
          onChange={handleChange} 
          onBlur={handleBlur}
          name="age" id="age" 
          className={`py-1 px-2 outline-none rounded hover:shadow-lg border-spacing-2 border-black border-[2px]`} />
          {errors.age && touched.age ? <p className="text-red-500 w-[200px] ">{errors.age}</p> : ""}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="gender">Gender</label>
        <div className="flex items-center gap-x-5 -mr-6">
          <div className="flex items-center gap-x-2">
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="male" value="m"/>
          </div>
          <div className="flex items-center gap-x-2">
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="female" value="f" />
          </div>
          <div className="flex items-center gap-x-2">
            <label htmlFor="other">Other</label>
            <input type="radio" name="gender" id="other" value="o"/>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
      <label htmlFor="password">Password</label>
      <div className="grid">
        <input type="text" 
          value={values.password}
          onChange={handleChange} 
          onBlur={handleBlur}
          name="password" id="password" 
          className={`py-1 px-2 outline-none rounded hover:shadow-lg border-spacing-2 border-black border-[2px]`} />
          {errors.password && touched.password ? <p className="text-red-500 w-[200px] ">{errors.password}</p> : ""}
        </div>
     </div>
     <div className="flex items-center justify-between">
      <label htmlFor="confirm_password">Confirm Password &nbsp; </label>
      
      <div className="grid">
        <input type="text" 
          value={values.confirm_password}
          onChange={handleChange} 
          onBlur={handleBlur}
          name="confirm_password" id="confirm_password" 
          className={`py-1 px-2 outline-none rounded hover:shadow-lg border-spacing-2 border-black border-[2px]`} />
          {errors.confirm_password && touched.confirm_password ? <p className="text-red-500 font-medium w-[220px] ">{errors.confirm_password}</p> : ""}
        </div>
     </div>
     <div className="flex items-center justify-end  md:px-7">
      <button type="submit" className='hover:bg-green-500 text-white bg-blue-500 rounded border-spacing-1 border-black border-[2px] hover:border-blue-700 px-3 py-1 font-bold '>Submit</button>
     </div>
     </div>
        </div>
      </form>
    </div>
  );
}
