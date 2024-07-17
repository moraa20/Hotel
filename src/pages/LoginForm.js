import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../Utils/authApi'; // Import the login function from authApi
import '../Styles/LoginForm.css';

const LoginForm = ({ onClose }) => {
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

    const loginSchema = Yup.object().shape({
        username: Yup.string().required('Please enter your username'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Please enter your password'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const data = await login(values);
            console.log('Login response:', data);
            alert('Logged in successfully!');
            setIsFormVisible(false);
            onClose();
        } catch (error) {
            console.error('Login error:', error);
            alert(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        isFormVisible && (
            <div className="login-form-overlay">
                <div className="login-form" ref={formRef}>
                    <button className="close-btn" onClick={() => setIsFormVisible(false)}>X</button>
                    <h2>Login</h2>
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        validationSchema={loginSchema}
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
                                    <label>Password:</label>
                                    <Field type="password" name="password" />
                                    <ErrorMessage name="password" component="div" className="error" />
                                </div>
                                <button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Logging in...' : 'Login'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <div className="login-links">
                        <a href="/forgot-password">Forgot password?</a>
                        <p>
                            Don't have an account? <a href="/signup">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    );
};

export default LoginForm;
