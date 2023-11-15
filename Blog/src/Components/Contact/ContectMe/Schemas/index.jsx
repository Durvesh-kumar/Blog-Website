import * as Yup from 'yup';

const YupMe = Yup.object({
    name:Yup.string().min(5).max(20).required("Please Enter Your Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    message:Yup.string().min(200).max(500).required("Please Enter Your Message")

})
export default YupMe;