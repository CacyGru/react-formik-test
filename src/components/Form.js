import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import TextError from './TextError';

const initialValues = {
  name: '',
  email: '',
  nachricht: '',
}

const onSubmit = (values) => {
  console.log(values);
  
}


// Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Pflichfeld"),
  email: Yup.string().email('Bitte geben Sie eine gültige E-Mail Adresse an').required('Pflichfeld'),
  nachricht: Yup.string().required("Pflichfeld"),
})

const contactForm = () => {
  

  return (

    <Formik initialValues = {initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div className="form-control">
        <label htmlFor="name">Name<sup>*</sup></label>
        <Field
          type="text"
          id="name"
          name="name"
        />
        <ErrorMessage name="name" component={TextError}/> 
       </div>
        <div className="form-control">
        <label htmlFor="email">Email<sup>*</sup></label>
        <Field
          type="email"
          id="email"
          name="email"
        />
        <ErrorMessage name="email" component={TextError}/> 
        </div>
       
        <div className="form-control">
        <label htmlFor="nachricht">Nachricht<sup>*</sup></label>
        <Field
          as="textarea"
          id="nachricht"
          name="nachricht"
        />
        <ErrorMessage name="nachricht" component={TextError}/> 
        <div><sup>*</sup> bitte ausfüllen</div>

        </div>

        <button type="submit">Submit</button>
      </Form>

    </Formik>
  );
};

export default contactForm;
