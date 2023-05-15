import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .matches(/^[0-9]{12}$/, 'Must be exactly 12 digits')
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
};

const ContactForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Do something with the form data
    console.log(values);

    // Reset the form after submission
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <Field type="text" name="phone" />
            <ErrorMessage name="phone" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;