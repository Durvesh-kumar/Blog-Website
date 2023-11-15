import * as Yup from 'yup';

 const Singup = Yup.object({
    name: Yup.string().min(5).max(20).required("Please Enter Your Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    age:Yup.number().min(15).max(70).required("Please Enter Your Age"),
    password:Yup.string().min(8).max(10).required("Please Enter Your Password"),
    confirm_password:Yup.string().oneOf([Yup.ref('password'), null], "Password must match").required()
})
export default Singup;