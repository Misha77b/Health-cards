import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material//TextField';
import { logIn } from '../../../API/auth/auth.thunks';
import PropTypes from 'prop-types';

const style={                
  display: 'flex', 
  flexDirection: 'column',
  gap: '15px',
}

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LogIn = ({ handleClose }) => {  

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const login = {
        email: values.email,
        password: values.password,
      }
      dispatch(logIn(login));
      handleClose();
    },
  });
    
  return (
    <div>
        <form 
          style={style}
          onSubmit={formik.handleSubmit}
        >
            <TextField  
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button sx={{
                width: '175px', 
                margin: '0 auto',
              }}
              variant='contained'
              type="submit"
            >
              Log in
            </Button>
        </form>
      </div>
    );
}

export default LogIn

LogIn.propTypes = {
  handleClose: PropTypes.func
}