import React from 'react';
import { useFormik } from 'formik';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log('Form data', values);
    },
  });

  //console.log(formik.values);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="message">Message</label>
        <input
          type="textfield"
          id="message"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
