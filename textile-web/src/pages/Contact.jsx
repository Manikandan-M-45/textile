import { lazy, useState } from "react";
import {useFormik} from "formik";
const Input = lazy(() => import("../components/Input"));
const Button = lazy(() => import("../components/Button"));

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',

  // });
  // const handleChange = (e) => {
  //   const {name, value} = e.target;

  //   setFormData({...formData,[name]: value});
  // }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      phone: ''
    },
    onSubmit: (values) => {
      console.log('formData:', values);
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Input handleChange={formik.handleChange} name="name" label="name" value={formik.values.name} ></Input>
        <Input handleChange={formik.handleChange} name="email" label="email" value={formik.values.email} ></Input>
        <Input handleChange={formik.handleChange} name="phone" label="phone" value={formik.values.phone} ></Input>
        <textarea onChange={formik.handleChange} name="message" label="message" value={formik.values.message} onBlur={formik.handleBlur} ></textarea>
        <button type="submit">Submit</button>
        <Button value="Submit" />
      </form>
    </div>
  )
}

export default Contact