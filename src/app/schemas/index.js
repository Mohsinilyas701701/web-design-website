import * as Yup from "yup";

export const signUpSchema = Yup.object({
  first_name: Yup.string().min(4).max(25).required("Please Enter Your Name"),
  last_name: Yup.string().min(4).max(25).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your email"),
  // number: Yup.number().number().required("Please Enter Your Number"),
});
