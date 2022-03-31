import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material//TextField';
import PropTypes from 'prop-types';

import { selectDoctor } from '../../../API/chooseDoctor/chooseDoctor.actions';
import { selectUrgency } from '../../../API/chooseUrgency/chooseUrgency.actions';
import { getChooseDoctor } from '../../../API/chooseDoctor/chooseDoctor.thunks';
import { getChooseUrgency } from '../../../API/chooseUrgency/chooseUrgency.thunks';
import { createVisit } from '../../../API/visits/visits.thunks';

const style={                
  display: 'flex', 
  flexDirection: 'column',
  gap: '10px',
}

const validationSchema = yup.object({
  fullName: yup.string()
    .nullable()
    .required('Full name is required'),
  visitPurpose: yup.string()
    .nullable()
    .required('Visit purpose is required'),
  visitShortDescription: yup.string()
    .nullable()
    .required('Is required')
});

const CreateVisit = ( {handleClose} ) => {
  const dispatch = useDispatch();

  const setChooseDoctor = useSelector((state) => state.chooseDoctorReducer.setChooseDoctor);
  const selectedDoctor = useSelector((state) => state.chooseDoctorReducer.selectedDoctor);
  const setChooseUrgency = useSelector((state) => state.chooseUrgencyReducer.setChooseUrgency);
  const selectedUrgency = useSelector((state) => state.chooseUrgencyReducer.selectedUrgency);

  useEffect(() => {
    dispatch(getChooseDoctor());
    dispatch(getChooseUrgency());
  }, []);

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
      doctor:  '',
      bloodPressure: '',
      massBodyIndex: '',
      prevIllnesses: '',
      age: '',
      lastVisitDate: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const createVisitValues = {
        fullName: values.fullName,
        visitPurpose: values.visitPurpose,
        visitShortDescription: values.visitShortDescription,
        urgency: selectedUrgency,
        doctor: selectedDoctor,
        bloodPressure: values.bloodPressure,
        massBodyIndex: values.massBodyIndex,
        prevIllnesses: values.prevIllnesses,
        age: values.age,
        lastVisitDate: values.lastVisitDate,
      }
      console.log(createVisitValues);
      dispatch(createVisit(createVisitValues));
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
          id='urgency'
          label='Choose urgency'
          name='urgency'
          value={selectedUrgency}
          onChange={handleChangeUrgency}
          >
          {setChooseUrgency?.map((doctor) => (
              <MenuItem 
                key={doctor.value}
                value={doctor.value}
              >
                {doctor.label}
              </MenuItem>
          ))}
        </TextField>
        {/* Doctor selector with further conditional rendering */}
        <TextField
          select
          id='doctor'
          label='Choose doctor'
          name='doctor'
          value={selectedDoctor}
          onChange={handleChangeDoctor}
          >
          {setChooseDoctor?.map((doctor) => (
              <MenuItem 
                className='shipment--text'
                key={doctor.value}
                value={doctor.value}
              >
                {doctor.label}
              </MenuItem>
          ))}
        </TextField>
        {/* propper markup fields for dentist, cardiologist and therapist */}
        {selectedDoctor === "Cardiologist" && 
          <>
            <TextField
              fullWidth
              id="bloodPressure"
              name="bloodPressure"
              label="Blood pressure"
              type="bloodPressure"
              value={formik.values.bloodPressure}
              onChange={formik.handleChange}
              error={formik.touched.bloodPressure && Boolean(formik.errors.bloodPressure)}
              helperText={formik.touched.bloodPressure && formik.errors.bloodPressure}
            />
            <TextField
              fullWidth
              id="massBodyIndex"
              name="massBodyIndex"
              label="MBI"
              type="massBodyIndex"
              value={formik.values.massBodyIndex}
              onChange={formik.handleChange}
              error={formik.touched.massBodyIndex && Boolean(formik.errors.massBodyIndex)}
              helperText={formik.touched.massBodyIndex && formik.errors.massBodyIndex}
            />
            <TextField
              fullWidth
              id="prevIllnesses"
              name="prevIllnesses"
              label="Previous illnesses"
              type="prevIllnesses"
              value={formik.values.prevIllnesses}
              onChange={formik.handleChange}
              error={formik.touched.prevIllnesses && Boolean(formik.errors.prevIllnesses)}
              helperText={formik.touched.prevIllnesses && formik.errors.prevIllnesses}
            />
            <TextField
              fullWidth
              id="age"
              name="age"
              label="Enter your age"
              type="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
            />
          </>
        }
        {selectedDoctor === "Dentist" && 
          <>
            <TextField
              fullWidth
              id="lastVisitDate"
              name="lastVisitDate"
              label="Last visit date dd.mm.yyyy"
              type="lastVisitDate"
              value={formik.values.lastVisitDate}
              onChange={formik.handleChange}
              error={formik.touched.lastVisitDate && Boolean(formik.errors.lastVisitDate)}
              helperText={formik.touched.lastVisitDate && formik.errors.lastVisitDate}
            />
          </>
        }
        {selectedDoctor === 'Therapist' && 
          <>
            <TextField
              fullWidth
              id="age"
              name="age"
              label="Enter your age"
              type="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
            />
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