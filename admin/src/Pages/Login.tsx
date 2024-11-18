// src/components/Login.tsx
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    // Formik setup
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: (values) => {
            console.log('Form Values:', values);
        },
    });

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            width="100%"
            bgcolor="#f5f5f5"
            p={2}
        >
            <Box
                width="100%"
                maxWidth="400px"
                bgcolor="white"
                p={4}
                borderRadius={2}
                boxShadow="0 0 10px rgba(0,0,0,0.1)"
                border="2px solid #FFCC4D"
            >
                <Box display="flex" justifyContent="center" mb={2}>
                    <img
                        src={'/images/logo.png'}
                        alt="Company Logo"
                        style={{ height: '60px' }}
                    />
                </Box>
                <Typography
                    variant="h5"
                    align="center"
                    mb={3}
                    sx={{ color: '#FFCC4D', fontWeight: 'bold' }}
                >
                    Login
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        label="Gmail"
                        type="email"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 2,
                            backgroundColor: '#FFCC4D',
                            color: '#000',
                            '&:hover': {
                                backgroundColor: '#e6b53f',
                            },
                        }}
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Login;
