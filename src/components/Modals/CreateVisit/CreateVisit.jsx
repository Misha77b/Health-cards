import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik, Field } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material//TextField';
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

const CreateVisit = ( {handleClose} ) => {
    const dispatch = useDispatch();

    const formik = useFormik({
      initialValues: {
        fullName: '',
        visitPurpose: '',
        visitShortDescription: '',
        chosenDoctor: ''
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        const createVisit = {
            fullName: values.fullName,
            visitPurpose: values.visitPurpose,
            visitShortDescription: values.visitShortDescription,
            chosenDoctor: values.chosenDoctor,
        }
        // dispatch(logIn(login));
        handleClose();
      },
    });
      
    return (
      <div>
          <form 
            style={style}
            onSubmit={formik.handleSubmit}
          >
            {/* Think about selector for doctors, onChange, onSubmit etc */}
            <select
              name="chosenDoctor"
              style={{ display: 'block' }}
            >
              <option value="" label="Select a doctor" />
              <option value="Dentist" label="Dentist" />
              <option value="Therapist" label="Therapist" />
              <option value="Cardiologist" label="Cardiologist" />
            </select>

            {/*  */}

            <TextField  
              fullWidth
              id="fullName"
              name="fullName"
              label="Full name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
            <TextField
              fullWidth
              id="visitPurpose"
              name="visitPurpose"
              label="Visit purpose"
              type="visitPurpose"
              value={formik.values.visitPurpose}
              onChange={formik.handleChange}
              error={formik.touched.visitPurpose && Boolean(formik.errors.visitPurpose)}
              helperText={formik.touched.visitPurpose && formik.errors.visitPurpose}
            />
            <TextField
              fullWidth
              id="visitShortDescription"
              name="visitShortDescription"
              label="Visit short description"
              type="visitShortDescription"
              value={formik.values.visitShortDescription}
              onChange={formik.handleChange}
              error={formik.touched.visitShortDescription && Boolean(formik.errors.visitShortDescription)}
              helperText={formik.touched.visitvisitShortDescriptionPurpose && formik.errors.visitShortDescription}
            />
            <Button sx={{
                width: '175px', 
                margin: '0 auto',
              }}
              variant='contained'
              type="submit"
            >
              Create visit
            </Button>
          </form>
        </div>
      );
}

export default CreateVisit

CreateVisit.propTypes = {
    handleClose: PropTypes.func 
}