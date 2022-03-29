import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, Field } from 'formik';
import * as yup from 'yup';
import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material//TextField';
import PropTypes from 'prop-types';
import { selectDoctor } from '../../../API/chooseDoctor/chooseDoctor.actions';
import { selectUrgency } from '../../../API/chooseUrgency/chooseUrgency.actions';
import { getChooseDoctor } from '../../../API/chooseDoctor/chooseDoctor.thunks';
import { getChooseUrgency } from '../../../API/chooseUrgency/chooseUrgency.thunks';

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

    const setChooseDoctor = useSelector((state) => state.chooseDoctorReducer.setChooseDoctor);
    const selectedDoctor = useSelector((state) => state.chooseDoctorReducer.selectedDoctor);
    const setChooseUrgency = useSelector((state) => state.chooseUrgencyReducer.setChooseUrgency);
    const selectedUrgency = useSelector((state) => state.chooseUrgencyReducer.selectedUrgency);

    console.log(setChooseDoctor);
    console.log(selectedDoctor);
    console.log(setChooseUrgency);
    console.log(selectedUrgency);

    useEffect(() => {
      dispatch(getChooseDoctor());
      dispatch(getChooseUrgency());
    }, []);

    // handleSelector change method think about it
    const handleChangeDoctor = (event) => {
      dispatch(selectDoctor(event.target.value)); 
    };

    const handleChangeUrgency = (event) => {
      dispatch(selectUrgency(event.target.value)); 
    };

    const formik = useFormik({
      initialValues: {
        fullName: '',
        visitPurpose: '',
        visitShortDescription: '',
        urgency: '',
        chosenDoctor: ''
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        const createVisit = {
            fullName: values.fullName,
            visitPurpose: values.visitPurpose,
            visitShortDescription: values.visitShortDescription,
            urgency: values.urgency,
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
            {/* Urgency selector */}
            <TextField
              select
              label='Choose urgency'
              name='chosenUrgency'
              value={selectedUrgency}
              onChange={handleChangeUrgency}
              >
              {setChooseUrgency?.map((doctor) => (
                  <MenuItem 
                    key={doctor.value}
                    value={doctor.value}>
                      {doctor.label}
                  </MenuItem>
              ))}
            </TextField>
            {/* Doctor selector with further conditional rendering */}
            <TextField
              select
              label='Choose doctor'
              name='chosenDoctor'
              value={selectedDoctor}
              onChange={handleChangeDoctor}
              >
              {setChooseDoctor?.map((doctor) => (
                  <MenuItem 
                    className='shipment--text'
                    key={doctor.value}
                    value={doctor.value}>
                      {doctor.label}
                  </MenuItem>
              ))}
            </TextField>

            {selectedDoctor === "Dentist" && 
              <>
                {/* propper markup fields for dentist, cardiologist and therapist */}
                <h1>Dentist</h1>
              </>
            }
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