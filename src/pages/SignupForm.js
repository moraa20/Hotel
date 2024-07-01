import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Styles/SignupForm.css';

const SignupForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const formRef = useRef(null);

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsFormVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const signupSchema = Yup.object().shape({
    username: Yup.string().required('Please enter your username'),
    email: Yup.string().email('Invalid email').required('Please enter your email'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Please enter your password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    // Placeholder for actual signup logic
    console.log('Signing up', values);
    // Simulate an API call
    setTimeout(() => {
      setSubmitting(false);
      alert('Signed up successfully!');
      setIsFormVisible(false);
    }, 1000);
  };

  return (
    isFormVisible && (
      <div className="signup-form-overlay">
        <div className="signup-form" ref={formRef}>
          <button className="close-btn" onClick={() => setIsFormVisible(false)}>X</button>
          <h2>Sign Up</h2>
          <Formik
            initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={signupSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <label>Username:</label>
                  <Field type="text" name="username" />
                  <ErrorMessage name="username" component="div" className="error" />
                </div>
                <div>
                  <label>Email:</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div>
                  <label>Password:</label>
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" className="error" />
                </div>
                <div>
                  <label>Confirm Password:</label>
                  <Field type="password" name="confirmPassword" />
                  <ErrorMessage name="confirmPassword" component="div" className="error" />
                </div>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Signing up...' : 'Sign Up'}
                </button>
              </Form>
            )}
          </Formik>
          <div className="signup-links">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default SignupForm;
