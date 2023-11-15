import * as Yup from 'yup';


const Login = Yup.object({
  email:Yup.string().email().required("Please Enter Your UserId"),
  password:Yup.string().min(8).max(10).required("Please Enter Your Password")
})
export default Login;