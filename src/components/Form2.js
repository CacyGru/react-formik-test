import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  nachricht: '',
}

const onSubmit = (values) => {
  console.log(values);
}

/* Form Validation without Yup 


const validate = (values) => {
  //3 conditions
  //values.name values.email values.message
  //errors.name errors.email errors.message
  //errors.name= "Required"
let errors = {}

if(!values.name) {
errors.name = ("Pflichtfeld")
}

if(!values.email) {
errors.email = ("Pflichtfeld")
} else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
)

if(!values.message) {
  errors.message = ("Pflichtfeld")
  }

if(!values.nachricht) {
  errors.nachricht = ("Pflichtfeld")
  }

return errors

} */

// Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Pflichfeld"),
  email: Yup.string().email('Bitte geben Sie eine gültige E-Mail Adresse an').required('Pflichfeld'),
  nachricht: Yup.string().required("Pflichfeld"),
})

const Form2 = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    //validate 
  });

  console.log(formik.touched);
  console.log(formik.errors.message);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>
        <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>
       
        <div className="form-control">
        <label htmlFor="nachricht">Nachricht</label>
        <input
          type="text"
          id="nachricht"
          name="nachricht"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nachricht}
        />
        {formik.touched.nachricht && formik.errors.nachricht ? <div className="error">{formik.errors.nachricht}</div> : null}
        </div>
        <button type="submit">Submit</button>

       
      </form>
    </div>
  );
};

export default Form2;
