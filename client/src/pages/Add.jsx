import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Add = () => {
  return (
    <div>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Formik
        initialValues={{ name: '', description: '', image: '' }}
        validationSchema={Yup.object({
          name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
          description: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
          image: Yup.string().required('Required'),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await axios.post('http://localhost:8000/', values);
            resetForm();
          } catch (error) {
            console.error('Error submitting form:', error.message);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">First Name</label>
            <input id="name" type="text" {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

            <label htmlFor="description">Last Name</label>
            <input id="description" type="text" {...formik.getFieldProps('description')} />
            {formik.touched.description && formik.errors.description ? (
              <div>{formik.errors.description}</div>
            ) : null}

            <label htmlFor="image">Image</label>
            <input id="image" type="text" {...formik.getFieldProps('image')} />
            {formik.touched.image && formik.errors.image ? <div>{formik.errors.image}</div> : null}

            <button type="submit" disabled={formik.isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Add;
